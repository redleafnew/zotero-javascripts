zoteroPane = Zotero.getActiveZoteroPane();
items = zoteroPane.getSelectedItems();
var result = '';
for (item of items) {
  var title = item.getField('title');
  result += ' ' + title + '\n';
  var new_title = title.replace(/\b([A-Z][a-z0-9]+|A)\b/g, function (x) {
    return x.toLowerCase();
  });
  new_title = new_title.replace(/(^|\?\s*)[a-z]/, function (x) {
    return x.toUpperCase();
  });
  new_title = new_title.replace(
    /([?:\"\“]\s*)([a-zA-Z0-9]+)(\s*)/g,
    function (x, p1, p2, p3) {
      return p1 + p2.slice(0, 1).toUpperCase() + p2.slice(1) + p3;
    }
  );
  result += '-> ' + new_title + '\n\n';
  // // Do it at your own risk
  item.setField('title', new_title);
  await item.saveTx();
}
return result;
