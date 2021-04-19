// 20210331
// 删除条目的附件保但保留条目

var DelAtts = []; //删除的附件
var zoteroPane = Zotero.getActiveZoteroPane();
var items = zoteroPane.getSelectedItems();

for (let item of items) { 
    
    if (item && !item.isNote()) { //2 if

        if (item.isRegularItem()) { // Regular Item 一般条目//3 if 
        
            let attachmentIDs = item.getAttachments();
            for (let id of attachmentIDs) { //4 for
                let attachment = Zotero.Items.get(id);
               // if (attachment.attachmentContentType == 'text/html' ) { //可以筛选删除的附件类型
                    attachment.deleted = true; //删除附件(快照)
                    await attachment.saveTx();   
                    
               // }
                var file = await attachment.getFilePathAsync();
                await OS.File.remove(file); //删除文件
                DelAtts.push(file  + "\n");

            } //4 for
        } // 3 if
        if (item.isAttachment()) { //附件条目 5 if
                var file = await item.getFilePathAsync();
                await OS.File.remove(file); //删除文件
                DelAtts.push(file + "\n");
                 item.deleted = true; 
                 await item.saveTx();
        }//5if
 } //2 if
    
}

return (DelAtts + "\n " + DelAtts.length + "个包括附件已经被删除。")