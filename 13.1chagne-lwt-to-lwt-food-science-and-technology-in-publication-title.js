zoteroPane = Zotero.getActiveZoteroPane();
items = zoteroPane.getSelectedItems();
// var item = items[0];
var n = 0;
for (item of items) {
    var otitle = item.getField("publicationTitle");//原题目
    var reg = /^LWT$/i //i不区分大小写，g为区分
    var test = reg.test(otitle)
    if (test)
    {
        n++;
        var rtitle = otitle.replace(/^LWT$/i,'LWT - Food Science and Technology')
        //被替代的题目
       item.setField("publicationTitle", rtitle);
       await item.saveTx();
    }
    
}
if (n == 0) return '题目中没有LWT。' 
else
return n + '个题目中LWT被替换为LWT - Food Science and Technology。';