const { contextBridge, ipcRenderer } = require('electron');

// Minimal, safe surface: let the renderer tell the main process which theme is
// active so the native window background can match it.
contextBridge.exposeInMainWorld('desktopTheme', {
  set: (theme) => ipcRenderer.send('theme-changed', theme),
});
