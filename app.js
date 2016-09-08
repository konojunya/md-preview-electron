'use strict';

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

require('crash-reporter').start();

let mainWindow;

app.on("window-all-closed",function(){
  if(process.platform !== "darwin"){
    app.quit();
  }
});

app.on("ready",function(){
  mainWindow = new BrowserWindow({width: 1000,height: 700});
  mainWindow.loadURL("file://" + __dirname + "/index.html");

  mainWindow.on("closed",function(){
    mainWindow = null;
  })
});
