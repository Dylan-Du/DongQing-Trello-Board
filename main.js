const { app, BrowserWindow, Menu, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

let mainWindow;

// Keep the native window background in sync with the app theme, otherwise the
// window paints a hardcoded colour and flashes on launch (esp. light theme).
const THEME_BG = { dark: '#0a1428', light: '#f0f4f8' };
function themeFilePath() { return path.join(app.getPath('userData'), 'theme.json'); }
function readSavedTheme() {
  try {
    const t = JSON.parse(fs.readFileSync(themeFilePath(), 'utf8')).theme;
    return t === 'light' ? 'light' : 'dark';
  } catch (e) { return 'dark'; }
}
function writeSavedTheme(theme) {
  try { fs.writeFileSync(themeFilePath(), JSON.stringify({ theme: theme === 'light' ? 'light' : 'dark' })); } catch (e) {}
}

function createWindow() {
  const theme = readSavedTheme();
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 900,
    minHeight: 600,
    title: '东青Trello看板',
    backgroundColor: THEME_BG[theme],
    show: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
      partition: 'persist:dongqing-trello',
    },
    titleBarStyle: 'hidden',
    titleBarOverlay: false,
    trafficLightPosition: { x: 20, y: 20 },
    fullscreenable: true,
  });

  // Only reveal the window once the first frame is painted (no colour flash).
  mainWindow.once('ready-to-show', () => {
    if (mainWindow && !mainWindow.isDestroyed()) mainWindow.show();
  });

  mainWindow.loadFile(path.join(__dirname, 'trello-board.html'));

  // Remove menu bar
  Menu.setApplicationMenu(null);
}

// Renderer notifies us whenever the user switches light/dark theme.
ipcMain.on('theme-changed', (event, theme) => {
  const key = theme === 'light' ? 'light' : 'dark';
  writeSavedTheme(key);
  if (mainWindow && !mainWindow.isDestroyed()) {
    mainWindow.setBackgroundColor(THEME_BG[key]);
  }
});

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
