var user_path = 'f:\\backup'; // 用户指定备份目录
var cur_date = new Date().toISOString().split('T')[0]; // 返回当前日期
var back_path = OS.Path.join(user_path, cur_date); // 将用户目录与当前日期目录组合
var profile = Zotero.Profile.dir;  // 配置目录
var data = Zotero.DataDirectory.dir;// 数据目录
var back_path_profile = OS.Path.join(back_path, 'profile'); // 配置备份目录
var back_path_data = OS.Path.join(back_path, 'data');// 数据备份目录
var zotero_profile_ini_back = OS.Path.join(back_path, "zotero_profile_ini");
var jurism_profile_ini_back = OS.Path.join(back_path, "jurism_profile_ini");
if (await OS.File.exists(back_path)){
    var truthBeTold = window.confirm('备份目录：' + 
    back_path + ' 已存在，' + '单击 “OK” 覆盖。单击“Cancel”停止。')
		if (truthBeTold) {
			back_up();
		}
		} else {
			back_up();
}


// 备份函数数据、profile和profiles.ini
async function back_up (){
	
		await  make_dir(user_path);
		await  make_dir(back_path);
		await  make_dir(back_path_profile); // 新建目录
		await  make_dir(back_path_data); // 新建目录

	   
    await Zotero.File.copyDirectory(data, back_path_data); // 备份数据
    //await Zotero.File.copyDirectory(profile, back_path_profile);
	await Zotero.File.iterateDirectory(profile, async function(entry){ //备份profile
        if (entry.name != "parent.lock") { // 不为parent.lock则复制
			var dest_profile = OS.Path.join(back_path_profile, entry.name)
			if (entry.isDir) {
				Zotero.File.copyDirectory(entry.path, dest_profile);
			} else {
				OS.File.copy(entry.path, dest_profile);
			}
				
      	}
       });
	await back_up_profiles_ini (); //备份prifiles.ini
}


// 备份profiles.ini未完成
async function back_up_profiles_ini (){
	var os_user_path = OS.Constants.Path.homeDir; // 得到当前用户目录
	zotero_profile_ini = "AppData\\Roaming\\Zotero\\Zotero\\profiles.ini"; // Zotero profiles.ini后缀
	jurism_profile_ini = "AppData\\Roaming\\\Jurism\\Zotero\\profiles.ini"; // Jurism profiles.ini后缀

	full_zotero_profile_ini = OS.Path.join(os_user_path, zotero_profile_ini); // 完整zotero profiles.ini目录
	full_jurism_profile_ini = OS.Path.join(os_user_path, jurism_profile_ini); // 完整jurism profiles.ini目录
	if (await  OS.File.exists(full_zotero_profile_ini)){ // 备份zotero中profiles.ini
		await 	make_dir(zotero_profile_ini_back);
		await OS.File.copy(full_zotero_profile_ini , OS.Path.join(zotero_profile_ini_back, "profiles.ini"));
	}
	if  (await  OS.File.exists(full_jurism_profile_ini)){ // 备份Jurism中profiles.ini 
		await make_dir(jurism_profile_ini_back);
		await OS.File.copy(full_jurism_profile_ini, OS.Path.join(jurism_profile_ini_back, "profiles.ini"));
	}
}


// 新建目录函数
async function make_dir(path){
	if (!await OS.File.exists(path)) {
		OS.File.makeDir(path, {
				ignoreExisting: true,
					unixMode: 0o755
				});
		}

}

alert ('配置文件备份在：' + back_path_profile + '\n' +
       '数据文件备份在：' + back_path_data +  '\n' +
	   'profiles.ini备份在：' + back_path)