zoteroPane = Zotero.getActiveZoteroPane();
items = zoteroPane.getSelectedItems();
for (item of items) {
item.setField("extra", "");
await item.saveTx();
}
//alert("Extra已清除完成")
return "Extra已清除完成";
