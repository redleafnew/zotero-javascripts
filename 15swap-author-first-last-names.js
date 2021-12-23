myPublicationTitle = "Nanoscale"
var rn = 0; //计数替换条目个数
var newFieldMode = 0; // 0: two-field, 1: one-field (with empty first name)
await Zotero.DB.executeTransaction(async function () {
    zoteroPane = Zotero.getActiveZoteroPane();
    items = zoteroPane.getSelectedItems();
        for (item of items) {
            let publicationTitle = item.getField("publicationTitle");//期刊名称
            if (publicationTitle == myPublicationTitle) {
                let creators = item.getCreators();
                let newCreators = [];
                for (let creator of creators) {
                    // if (`${creator.firstName} ${creator.lastName}`.trim() == oldName) {
                        let firstName = creator.firstName;
                        let lastName = creator.lastName;
                    
                        creator.firstName = lastName;
                        creator.lastName = firstName;
                        creator.fieldMode = newFieldMode;
                            
                    // }
                    newCreators.push(creator);

                }
                item.setCreators(newCreators);
                rn+=1;
                await item.save();

                }
            }
}); 
return rn + " item(s) updated";