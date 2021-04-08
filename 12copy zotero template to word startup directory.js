// copy zotero.dotm from zotero install directory to Word Startup directory
// 从Zotero安装目录复制zotero.dotm到Word启动目录

var path = OS.Constants.Path;
var softDir = path.libDir;
var userDir = path.homeDir;

var zotDotmPath = OS.Path.join(softDir, "extensions/zoteroWinWordIntegration@zotero.org/install/Zotero.dotm");  // zotero.dotm所在目录
var wordStartupPath = OS.Path.join(userDir, "AppData/Roaming/Microsoft/Word/STARTUP/Zotero.dotm");  // Word启动目录
//return OS.File.exists(zotDotmPath);
var truthBeTold = window.confirm("请关闭Word，然后点击OK ")
if (truthBeTold) {
            if (await OS.File.exists(zotDotmPath)) {  // 如果存在则复制
                await OS.File.copy(zotDotmPath, wordStartupPath);
                alert("Zotero.dotm已复制，请重新打开Word");
                } else {  //如果不存在，报错
                    alert("Zotero.dotm不存在, 您可能需要重装安装Zotero或JurisM");
                }
    }


