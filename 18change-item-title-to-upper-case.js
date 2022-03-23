var items = ZoteroPane.getSelectedItems();
var n = 0;
for (item of items) {
            var title = item.getField('title');
            new_title = title.toUpperCase()
                            
                            
                            
            item.setField('title', new_title);
            await item.saveTx();
            n ++
};

return n + '个条目的题目大小写转为全部大写，请查实。';

