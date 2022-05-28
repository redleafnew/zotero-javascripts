// 删除摘要内容，以更方面显示期刊卷期
var items = ZoteroPane.getSelectedItems();
for (item of items) {
    item.setField('abstractNote','')
    await item.save();
}
return '操作完成。';
