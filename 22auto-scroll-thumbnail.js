// 更多功能请使用Chartero：https://github.com/volatile-static/Chartero
let err;
// 滚动阅读器缩略图
function scrollThumbnailView() {
    const reader = Zotero.Reader.getByTabID(Zotero_Tabs.selectedID);
    const layout = reader._iframeWindow.document.getElementById('thumbnailView');
    layout.getElementsByTagName('a')[reader.state.pageIndex].scrollIntoView();
}
try {
    const notifierID = Zotero.Notifier.registerObserver({
        notify: (event, type, ids, extraData) => {
            if (event === 'select' && type === 'tab') {  // 选择标签页
                const reader = Zotero.Reader.getByTabID(Zotero_Tabs.selectedID);
                if (!reader) return;
                const viewer = reader._iframeWindow.document.getElementById('viewer');
                // 防止重复添加
                viewer.removeEventListener('mouseup', scrollThumbnailView, false);
                viewer.addEventListener('mouseup', scrollThumbnailView, false);
            }
        }
    }, ["tab"]);
    window.addEventListener(
        "unload",
        function (e) {
            Zotero.Notifier.unregisterObserver(notifierID);
        },
        false
    );
} catch (error) {
    err = error;
}
err || 'success'
