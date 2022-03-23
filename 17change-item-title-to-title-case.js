var items = ZoteroPane.getSelectedItems();
for (item of items) {
            var title = item.getField('title');
            new_title = titleCase(title). // 转换为单词首字母大写
                            replace('And', 'and'). // 替换And
                            replace('For', 'for'). // 替换For
                            replace('In', 'in'). // 替换In
                            replace('Of', 'of'). // 替换Of
                            replace('With', 'with').
                            replace('To', 'to')
                            
                            
                            
            item.setField('title', new_title);
            await item.saveTx();
};

// 将单词转为首字母大写
function titleCase(str) {   
     var newStr = str.split(" ");    
     for(var i = 0; i < newStr.length; i++) {
        newStr[i] = newStr[i].slice(0,1).toUpperCase() + newStr[i].slice(1).toLowerCase();
        }      
     return newStr.join(" ");
};