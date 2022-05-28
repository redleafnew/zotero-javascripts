// 删除*前的空格,*用于表示通讯作者
var newFieldMode = 0;
var items = ZoteroPane.getSelectedItems();
for (item of items) {
    var creators = item.getCreators();

    let newCreators = [];
    for (let creator of creators) {
        creator.firstName = creator.firstName.trim().replace(' *', '*');
        creator.lastName = creator.lastName.trim().replace(' *', '*');
        creator.fieldMode = newFieldMode;
        newCreators.push(creator);
    }
    item.setCreators(newCreators);
    await item.save();
}
return '删除*前空格操作完成。';
// *前添加空格
// 用于姓名缩写后仍然显示*，最后在Word中将空格 *替换为*
var newFieldMode = 0;
var items = ZoteroPane.getSelectedItems();
for (item of items) {
    var creators = item.getCreators();

    let newCreators = [];
    for (let creator of creators) {
        creator.firstName = creator.firstName.trim().replace('*', ' *');
        creator.lastName = creator.lastName.trim().replace('*', ' *');
        creator.fieldMode = newFieldMode;
        newCreators.push(creator);
    }
    item.setCreators(newCreators);
    await item.save();
}

return '*前加空格操作完成。';
