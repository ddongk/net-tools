const {app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const url = require('url');

function createWindow() {

    const win = new BrowserWindow({
        width:600,
        height:500,
        frame: true,
        resizable: false
    });

    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, '/../build/index.html'),
        protocol: 'file:',
        slashes: true
    });
    win.loadURL(startUrl);


    Menu.setApplicationMenu(null);
    win.setTitle('HypervSetting');
}

app.on('ready', createWindow);