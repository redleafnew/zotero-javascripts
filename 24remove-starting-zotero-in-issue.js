//删除期中开始的0，如01变为1，08变为8

var items = ZoteroPane.getSelectedItems();
for (let item of items) {
    var newIssue = item.getField("issue").replace(/^(0+)/, "")
    item.setField("issue", newIssue)
    item.save();
}
return "期号中开始的0已删除"