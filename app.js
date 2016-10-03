var { app,BrowserWindow } = require("electron");

var mainWindow;

app.on("window-all-closed",function(){
  if(process.platform !== "darwin"){
    app.quit();
  }
});

app.on("ready",function(){
  mainWindow = new BrowserWindow({width: 1000,height: 700,x:0,y: 0});
  mainWindow.loadURL("file://" + __dirname + "/index.html");

  mainWindow.on("closed",function(){
  	app.quit();
  });
});