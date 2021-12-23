zoteroPane = Zotero.getActiveZoteroPane();
items = zoteroPane.getSelectedItems();
var rn=0; // //计数替换条目个数
var lan="en"; //替换的语言
for (item of items) {
var la = item.getField("language");
if (la=="")  //如果为空则替换
 {item.setField("language", lan);
rn+=1;
 await item.saveTx();
}

}
return rn+"个条目语言被替换为"+lan+"。"
