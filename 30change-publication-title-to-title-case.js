//更改期刊名称为词首字母大写
var items = ZoteroPane.getSelectedItems();
for (i = 0; i < items.length; i++) {
    var pubT = items[i].getField('publicationTitle');
    var newPubT = Zotero.Utilities.capitalizeTitle(pubT.toLowerCase(), true);
    // 替换特殊情况
    newPubT =newPubT.replace("Ieee", "IEEE") //替换IEEE
            .replace("Acs", "ACS") //替换ACS
            .replace("Aip", "AIP") //替换AIP
            .replace("Apl", "APL") //替换APL
            .replace("Avs", "AVS") //替换AVS
            .replace("Bmc", "BMC") //替换AVS
            .replace("Iet", "IET") //替换IET
            .replace("Rsc", "RSC") //替换RSC
            .replace("Lwt", "LWT") //替换RSC
            .replace("U S A", "USA") //删除空格
            .replace("U. S. A.", "U.S.A."); //删除空格
    items[i].setField('publicationTitle', newPubT);
            await items[i].saveTx();
    }
return "更改期刊名称为词首字母大写完毕。"
