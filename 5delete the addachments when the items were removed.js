//20210320
//添加如果文件在storage中，同时删除文件夹
//删除条目的同时删除附件
var zfPath = Zotero.ZotFile.getPref("dest_dir")   //得到zotfile路径
var DelItems = []; //删除的条目
var zoteroPane = Zotero.getActiveZoteroPane();
var items = zoteroPane.getSelectedItems();
for (let item of items) {  // 1 for
    title = item.getField('title');
    DelItems.push(title);
    file = await getFilePath(item); //调用函数得到文件路径
    if (file){
        var filePath = OS.Path.dirname(file); //得到文件存放的文件夹
        if (filePath != zfPath){ //如果两个文件夹不一致，文件可能存在storage中
            await OS.File.removeDir(filePath) //删除文件夹
            }
        await OS.File.remove(file); //删除文件
       }
     item.deleted = true; //删除条目
     await item.saveTx();

}// 1 for

alert(DelItems + "\n " + DelItems.length + "个条目（包括附件）已经被删除。")

async function getFilePath(item) { //1 函数 得到文件路径

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