// https://github.com/redleafnew/zotero-updateifsE/issues/124 需求来源
var pattern = /\s{2,}/g
var pattern1 = /\s(\d)/g
var pattern2 = /(\d)\s(\/)/g;

var items = Zotero.getActiveZoteroPane().getSelectedItems();

for (let item of items) {

    if (item.isRegularItem() && !item.isCollection()) {

        var newAb = item.getField('abstractNote').replace(pattern, ' ')
            .replace(pattern1, "$1")
			.replace(pattern2, "$1$2");  //新摘要
        item.setField('abstractNote', newAb);  //替换摘要
        item.saveTx();


    }
}


return "摘要中的多余空格已删除！"
