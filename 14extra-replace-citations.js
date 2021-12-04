zoteroPane = Zotero.getActiveZoteroPane();
items = zoteroPane.getSelectedItems();
for (item of items) {
    var oextra = item.getField("extra");
    var rep = oextra.match(/(\d+ citations)(.+\n)(\d+ citations)(.+)/)[1]
    //第1个引用次数写为[1]，第2个引用次数，写为[3]
    item.setField("extra", rep);
    await item.saveTx();
}
return "Extra已替换为引用次数";