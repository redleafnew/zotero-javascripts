//当前所选的条目
var selectedItems = ZoteroPane.getSelectedItems();

//正式开始
//确认对话框
var truthBeTold = window.confirm("Are you sure you want to convert the title to Title Case? ")
        if (truthBeTold) {
            titleCase(selectedItems);
        }

//加入循环
//判断为一般条目再修改
async function titleCase(selectedItems) {
    for (let item of selectedItems) {
            if (item && !item.isNote()) {
                if (item.isRegularItem()) {//普通条目
                    var title = item.getField('title')
                    var newTitle = Zotero.Utilities.capitalizeTitle(title, true);
                    item.setField('title', newTitle);
                    await item.saveTx();
                }
                if (item.isAttachment()) { //附件条目进行的操作
                    // find out about attachment
                }
            
            }

    }
}