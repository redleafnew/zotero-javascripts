//加入提醒 20210310
var truthBeTold = window.confirm("所有附件的清理不可恢复，单击“确定”继续。单击“取消”停止。")
if (truthBeTold) {
    //清理zotfile目录
    var AllFiles = []; //现在库中所有的文件
    var DirFiles = []; //当前文件夹中的文件
    var DelFileNum = 0; //被清理的文件个数
    var path = Zotero.ZotFile.getPref("dest_dir")   //得到zotfile目录
    var FullPath ='' //文件的完整路径
    var OutText="";//供输出的文本，主要用于换行
    //得到当前库中的附件
    var s = new Zotero.Search();
    s.libraryID = Zotero.Libraries.userLibraryID;
    var results = await s.search();
    var items = await Zotero.Items.getAsync(results);
    for (let item of items){
        let file = await getFilePath(item);
        if (file){
            AllFiles.push(OS.Path.basename(file));//只存入文件名
        }
    }

    //得到ZotFile目录中的文件
    await Zotero.File.iterateDirectory(path, async function(entry){
        if (!entry.isDir) {
            DirFiles.push(entry.name);
        }
    });

    //判断是否在库的文件中
    for (let DirFile of DirFiles){
        if (AllFiles.indexOf(DirFile)==-1){
        DelFileNum += 1;//计数器加1
        FullPath = OS.Path.join(path, DirFile);
        OutText += DelFileNum + ": "+ DirFile + "\n" 
        await OS.File.remove(FullPath); //删除文件
        }
    }
    alert(DelFileNum + "个文件被清理。\n 被清理的文件：\n" + OutText);
    async function getFilePath(item) { //1 函数
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
}
