zoteroPane = Zotero.getActiveZoteroPane();
items = zoteroPane.getSelectedItems();
for (item of items) {
var originalAbstract = item.getField('abstractNote').trim(); 
//将abstractNote换为extra则可以处理'其他'栏的内容
modifiedAbstract = originalAbstract.replace(/\n{2,}/g, '\n');
 item.setField('abstractNote', modifiedAbstract);
//如果前面换了extra，这里一定也要替换
 await item.saveTx();
}
return "摘要中的多余换行已删除！";