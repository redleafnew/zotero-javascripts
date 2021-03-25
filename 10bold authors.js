//英文替换
var oldName = "Wuji Zhang";
var newFirstName = "<b>Wuji</b>";
var newLastName = "<b>Zhang</b>";
var newFieldMode = 0; // 0: two-field, 1: one-field (with empty first name)

var rn = 0; //计数替换条目个数
await Zotero.DB.executeTransaction(async function () {
    zoteroPane = Zotero.getActiveZoteroPane();
    items = zoteroPane.getSelectedItems();
        for (item of items) {
        let creators = item.getCreators();
        let newCreators = [];
        for (let creator of creators) {
        	if (`${creator.firstName} ${creator.lastName}`.trim() == oldName) {
        		creator.firstName = newFirstName;
        		creator.lastName = newLastName;
        		creator.fieldMode = newFieldMode;
                        rn+=1;
        	}
        	newCreators.push(creator);

        }
        item.setCreators(newCreators);

        await item.save();

        }

}); 
return rn + " item(s) updated";

//中文替换
var oldName = "无忌 张";
var newFirstName = "";
var newLastName = "<b>张无忌</b>";
var newFieldMode = 1; // 0: two-field, 1: one-field (with empty first name)

var rn = 0; //计数替换条目个数
await Zotero.DB.executeTransaction(async function () {
    zoteroPane = Zotero.getActiveZoteroPane();
    items = zoteroPane.getSelectedItems();
        for (item of items) {
        let creators = item.getCreators();
        let newCreators = [];
        for (let creator of creators) {
         if (`${creator.firstName} ${creator.lastName}`.trim() == oldName) {
         creator.firstName = newFirstName;
         creator.lastName = newLastName;
         creator.fieldMode = newFieldMode;
                        rn+=1;
         }
         newCreators.push(creator);

        }
        item.setCreators(newCreators);

        await item.save();

        }

}); 
return rn + " item(s) updated";