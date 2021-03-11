
var newFieldMode = 0; // 0: two-field, 1: one-field (with empty first name)
var s = new Zotero.Search();
s.libraryID = ZoteroPane.getSelectedLibraryID();
var tagName = 'try'; //需要提前将需要修改的项目添加标签
s.addCondition('tag', 'is', tagName);
//s.addCondition('creator', 'is', oldName);
 
var ids = await s.search();
if (!ids.length) {
    return "No items found";
}

await Zotero.DB.executeTransaction(async function () {
        for (let id of ids) {
            var item = await Zotero.Items.getAsync(id);
            var creators = item.getCreators();

            let newCreators = [];
            for (let creator of creators) {
                creator.firstName = titleCase(creator.firstName.trim());
                creator.lastName = titleCase(creator.lastName.trim());
                creator.fieldMode = newFieldMode;
                newCreators.push(creator);
                } 
            item.setCreators(newCreators);
            await item.save();
            }  

}); 
return ids.length + "个条目作者变为作者首字母大写。";


function titleCase(str) {    var newStr = str.split(" ");    for(var i = 0; i<newStr.length; i++){
        newStr[i] = newStr[i].slice(0,1).toUpperCase() + newStr[i].slice(1).toLowerCase();
    }    return newStr.join(" ");
}