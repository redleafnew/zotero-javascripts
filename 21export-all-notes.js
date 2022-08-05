var items = ZoteroPane.getSelectedItems();

var notes = []
for (let item of items) {
    if (item && !item.isNote()) {
        var noteIDs = item.getNotes();
        for (let id of noteIDs) {
            let note = Zotero.Items.get(id);

            let noteHTML = note.getNote();
            notes.push(noteHTML)
        }
    }
}
// return notes 
// 删除里面的其它标识
return notes.map(note=>note.replace('<div data-schema-version=\"8\">','').
replace('</div>','').replace(/<p>/g,'').replace(/<\/p>/g,'').replace(/\n/g,''))