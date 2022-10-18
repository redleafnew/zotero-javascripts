//用期刊名称填充期刊缩写
var items = ZoteroPane.getSelectedItems();
var item = items[0];
for (i = 0; i < items.length; i++) {
    var journal = Zotero.ItemTypes.getName(item.itemTypeID) == 'journalArticle' // 文献类型为期刊
    var lanItem = items[i].getField('language'); //得到条目语言
    var enItem = lanItem.indexOf('en') !== -1 || // 英文条目
        lanItem.indexOf('English') !== -1;
    var chItem = lanItem.indexOf('ch') !== -1 || //中文条目
        lanItem.indexOf('zh') !== -1 ||
        lanItem.indexOf('中文') !== -1 ||
        lanItem.indexOf('CN') !== -1;
    var pubT = items[i].getField('publicationTitle');
    if (!journal) {
        return "非期刊，填充失败。"
    }
    if (enItem) {
        return "英文期刊，填充失败。"
    }
    if (chItem) {
        items[i].setField('journalAbbreviation', pubT);
    }
    await items[i].saveTx();
}
return "用中文期刊名称填充期刊缩写完毕。"