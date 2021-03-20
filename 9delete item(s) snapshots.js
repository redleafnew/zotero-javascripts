//删除所选条目的快照，包括贮存的本地文件

var items = ZoteroPane.getSelectedItems();
var item = items[0];
var truthBeTold = window.confirm("Are you sure you want to move the snapshot(s) to the Trash? ")
        if (truthBeTold) {
        delAttachment(items);
        }
//删除条目的附件链接
async function delAttachment(items) {

    for (let item of items) {
         
        if (item.isRegularItem()) { // not an attachment already
            var filePath = await getFilePath(item);
            if (filePath){
            await OS.File.remove(filePath); //删除附件的文件
            }
            
            let attachmentIDs = item.getAttachments();
            for (let id of attachmentIDs) {
                let attachment = Zotero.Items.get(id);
                if (attachment.attachmentContentType == 'text/html' ) {
                    attachment.deleted = true; //删除附件(快照)
                    await attachment.saveTx();   
                    
                }
            }
        }
    }
}

// 函数得到文件路径
async function getFilePath(item) { 

    if (item && !item.isNote()) { //2 if

            if (item.isRegularItem()) { // Regular Item 一般条目//3 if 
            
                let attachmentIDs = item.getAttachments();
                for (let id of attachmentIDs) { //4 for
                    var file = await Zotero.Items.get(id).getFilePathAsync();
                    return file;
                } //4 for
            } // 3 if
            if (item.isAttachment()) { //附件条目 5 if
                    var file = await item.getFilePathAsync();
                    return file;
            }//5if
    } //2 if

} 
