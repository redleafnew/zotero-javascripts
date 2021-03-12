
//code from the comments of the thread
//https://forums.zotero.org/discussion/40457/merge-all-duplicates/
var DupPane = Zotero.getZoteroPanes();
for(var i = 0; i < 100; i++) {
await new Promise(r => setTimeout(r, 1000));
DupPane[0].mergeSelectedItems();
Zotero_Duplicates_Pane.merge();
}