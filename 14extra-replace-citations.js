zoteroPane = Zotero.getActiveZoteroPane();
items = zoteroPane.getSelectedItems();
for (item of items) {
    var oextra = item.getField("extra");
    var rep = oextra.match(/\d+ citations/)[0]
    item.setField("extra", rep);
    await item.saveTx();
}
return "Extra已替换为引用次数";
