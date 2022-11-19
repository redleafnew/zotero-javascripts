// 清空delitem 0.0.20之前版本删除分类（文件夹）后残留在Add to Colletions中分类（文件夹）
var collections = Zotero.Collections.getByLibrary(Zotero.Libraries.userLibraryID);
deleted_collections = collections.filter(x => x.deleted === true);
for (coll of deleted_collections) {
    await coll.eraseTx();
}
return deleted_collections.length + ' deleted collection(s) has(have) been removed.';