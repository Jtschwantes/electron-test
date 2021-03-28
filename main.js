const { app, BrowserWindow } = require("electron");
const bot = require('robotjs')
// const ioh = require('iohook')
const path = require("path");

let mainWindow;

const loadMainWindow = () => {
  mainWindow = new BrowserWindow({
    // fullscreen: true,
    width: 1200,
    height: 800,
    // frame: false,
    // transparent: true,
    webPreferences: {
      nodeIntegration: true
    }
  });
  mainWindow.webContents.openDevTools();
  mainWindow.setIgnoreMouseEvents(false, {forward: true});
  mainWindow.loadFile("index.html");

  // clear window on clean exit
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(loadMainWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    loadMainWindow();
  }
});

// ioh.on('mouseclick', e => {
//   const win = BrowserWindow.getFocusedWindow()
//   win.focus()
// })