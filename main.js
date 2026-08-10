const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 900,
    minHeight: 600,
    title: '东青Trello看板',
    backgroundColor: '#0a1428',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      partition: 'persist:dongqing-trello',
    },
    titleBarStyle: 'hidden',
    titleBarOverlay: false,
    trafficLightPosition: { x: 20, y: 20 },
    fullscreenable: true,
  });

  mainWindow.loadFile(path.join(__dirname, 'trello-board.html'));

  // Remove menu bar
  Menu.setApplicationMenu(null);
}

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
