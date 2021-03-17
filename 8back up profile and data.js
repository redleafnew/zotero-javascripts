var back_path = 'f:\\backup';//备份目录
var profile = Zotero.Profile.dir;  //配置目录
var data = Zotero.DataDirectory.dir;//数据目录
var back_path_profile = OS.Path.join(back_path, 'profile'); //配置备份目录
var back_path_data = OS.Path.join(back_path, 'data');//数据备份目录
var path = back_path
if (await OS.File.exists(back_path)){
    var truthBeTold = window.confirm('备份目录：' + 
    back_path + ' 已存在，' + '单击 “OK” 覆盖。单击“Cancel”停止。')
		if (truthBeTold) {
			back_up();
		}
		} else {
			back_up();
}

alert ('配置文件备份在：' + back_path_profile + '\n' +
       '数据文件备份在：' + back_path_data)

//备份函数
async function back_up (){
    await  make_dir(back_path);
    await  make_dir(back_path_profile);
    await  make_dir(back_path_data);
    
    await Zotero.File.copyDirectory(data, back_path_data);
    //await Zotero.File.copyDirectory(profile, back_path_profile);
	await Zotero.File.iterateDirectory(profile, async function(entry){
        if (entry.name != "parent.lock") { //不为parent.lock则复制
			var dest_profile = OS.Path.join(back_path_profile, entry.name)
			if (entry.isDir) {
				Zotero.File.copyDirectory(entry.path, dest_profile);
			} else {
				OS.File.copy(entry.path, dest_profile);
			}
				
      	}
       });

}

//新建目录函数
async function make_dir(path){
	if (!await OS.File.exists(path)) {
		OS.File.makeDir(path, {
				ignoreExisting: true,
					unixMode: 0o755
				});
		}

}