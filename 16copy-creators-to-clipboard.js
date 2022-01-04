
// 单篇可行 
// 多篇会连到一起
var zoteroPane = Zotero.getActiveZoteroPane();
var zitems = zoteroPane.getSelectedItems();


var creatorsArray = [];
for (let zitem of zitems) {
    var whiteSpace = ' ';
    var lan = zitem.getField("language");
    if (lan.indexOf("中") != -1)  //如果为中文
     { whiteSpace = ''; //如果为中文删除空格
        }
    let creators = zitem.getCreators()
    for (let creator of creators) {
        let creatorStr = creator.lastName + whiteSpace + creator.firstName
        if (creatorsArray.indexOf(creatorStr) == -1) {
            creatorsArray.push(creatorStr)
        }
    }
}

var clipboardText = creatorsArray.join(', ');

copyToClipboard(clipboardText)

return clipboardText;

function copyToClipboard(clipboardText) {
   if (clipboardText) {
       const gClipboardHelper =
           Components.classes['@mozilla.org/widget/clipboardhelper;1']
           .getService(Components.interfaces.nsIClipboardHelper);
       gClipboardHelper.copyString(clipboardText, document);
   } else {
       var prompts = Components.
           classes['@mozilla.org/embedcomp/prompt-service;1'].
           getService(Components.interfaces.nsIPromptService);
       var title = Zutilo.getString('zutilo.error.copynoitemstitle')
       var text = Zutilo.getString('zutilo.error.copynoitemstext')
       prompts.alert(null, title, text)
   }
}