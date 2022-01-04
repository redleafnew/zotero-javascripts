
var zoteroPane = Zotero.getActiveZoteroPane();
var zitems = zoteroPane.getSelectedItems();
var clipboardText = ''

for (let zitem of zitems) {
    var creatorsArray = [];
    var whiteSpace = ' ';
    var lan = zitem.getField("language");
    if (lan.indexOf("中") != -1)  //如果为中文
     { whiteSpace = ''; //如果为中文删除空格
        }
    let creators = zitem.getCreators();
    for (let creator of creators) {
        let creatorStr = creator.lastName + whiteSpace + creator.firstName;
        if (creatorsArray.indexOf(creatorStr) == -1) {
            creatorsArray.push(creatorStr);
        }
     var clipboardTextSingleItem = creatorsArray.join(', ');   
    }
  clipboardText = clipboardText +  clipboardTextSingleItem + '\r\n';
}

copyToClipboard(clipboardText);
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