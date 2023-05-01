var items = ZoteroPane.getSelectedItems();
// 文献类型字段见https://aurimasv.github.io/z2csl/typeMap.xml
var iteyType = `standard`;
// var iteyType = `bill`
// var iteyType = `book`
// var iteyType = `bookSection`
// var iteyType = `computerProgram`
// var iteyType = `conferencePaper`
// var iteyType = `document`
// var iteyType = `journalArticle`
// var iteyType = `newspaperArticle`
// var iteyType = `patent`
// var iteyType = `report`
// var iteyType = `standard`
// var iteyType = `thesis`
// var iteyType = `webpage`
for (let item of items) {

    item.setType(Zotero.ItemTypes.getID(iteyType))
    await item.saveTx();
}
return `item type have (has) been changed to ${itemType}.`;
