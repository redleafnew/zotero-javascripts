# zotero-javascripts
Some JavaScripts used in Zotero to batch process

用于批处理的一些JavaScript脚本。

* ## LICENSE
  [GPL](https://www.gnu.org/licenses/gpl-3.0.txt)

* ## 使用方法：
1.点击需要的JavaScript脚本链接，再点击`Raw`，将代码复制。

2.在Zotero中依次点击Tools-Developer-Run JavaScript，将代码复制到Code窗口，点击Run即可。如下图所示：
<img src="./img/runJS.png" height=210>

<img src="./img/runJSCode.png" height=410>

* ## JavaScript脚本：

* ### [01set-item-language-to-en-if-this-field-is-empty.js] 

     如果语言字段为空，批量将语言设置为en（英语）。
* ### [02change-the-item-title-to-sentence-case.js]
    将文献的题目大小写修改为句首字母大写（Sentence case）。

* ### [03empty-the-extra-field.js] 
    将`Extra`字段清空。
    
* ### [04delete-the-attachment-files-after-the-items-have-been-removed-when-zotfile-was-installed.js] 
    清除用了[ZotFlie](http://zotfile.com)扩展后删除条目后残留的附件。使用方法见[Zotero不用安装其它软件清理删除条目后残留的PDF方法](https://zhuanlan.zhihu.com/p/356071795)。**注意：附件的删除不可恢复，请提前备份，而且仅限于不建立子文件夹的情况。**

* ### [05delete-the-addachments-when-the-items-were-removed.js] 
    删除条目的同时删除附件（在安装了[ZotFlie](http://zotfile.com)扩展后很有用）。**注意：附件的删除不可恢复，请提前备份。**

* ### [06change-the-authors-case-to-title-case.js] 
    将作者大小写修改词首字母大写，使用方法见[Zotero作者姓名批量修改为首字母大写](https://zhuanlan.zhihu.com/p/354481222)。

* ### [07batch-merge-duplicates.js]
   批量删除（合并）重复文献，使用方法见[Zotero批量删除（合并）重复文献](https://zhuanlan.zhihu.com/p/352324486)。

* ### [08back-up-profile-and-data.js]
    备份配置和数据。使用方法见[Zotero利用JavaScript备份配置和数据](https://zhuanlan.zhihu.com/p/357859432)。

* ### [09delete-item(s)-snapshot(s).js]
    删除所选条目的快照，包括贮存的本地文件。

 * ### [10add-bold-tag-around-author.js]
    在作者前后添加加粗标记。   

 * ### [11del-all-the-attachment(s)-of-item(s).js]
    删除条目的所有附件，包括贮存在本地的文件，但保留条目本身。**注意：附件的删除不可恢复，请提前备份。**    

  * ### [12copy-zotero-template-to-word-startup-directory.js]
    从Zotero安装目录复制zotero.dotm到Word启动目录。
  
  * ### [13chagne-lwt-to-lwt-food-science-and-technology-in-publication-title.js]
    [13.1chagne-lwt-to-lwt-food-science-and-technology-in-publication-title.js]

    将Zotero期刊题目中的LWT更改为LWT-Food Science and Technology。
    
* ### [14extra-replace-citations.js]
    将Zotero Extra字段中`SC: None[s2]
WOS:000685503000003
1 citations (Semantic Scholar/DOI) [2021-12-04]
0 citations (Crossref) [2021-12-04]`替换为`* citations`，`*`为Semantic Scholar引用。


* ### [15swap-author-first-last-names.js]
    交换作者的`姓`和`名`，如将`Zhang San`替换为`San Zhang`，使用时请将`myPublicationTitle = "Nanoscale"`双引号内的内容替换为自己需要交换作者姓名期刊名称。也可以删除此句，则将所有所选条目的作者`姓`和`名`替换。

* ### [16copy-creators-to-clipboard.js]
    将条目的作者复制到剪切板，代码来源于<https://github.com/wshanks/Zutilo>，修改后中文`姓`和`名`之间无空格，作者之前用英文逗号加空格间隔（`, `），单行显示。~~存在问题：选中多篇时，所有作者连到一起。~~ 
    
    更多Zotero的使用方法见[Chinese-STD-GB-T-7714-related-csl](https://github.com/redleafnew/Chinese-std-GB-T-7714-related-csl)，Zotero的使用教程见[Zotero_introduction](https://github.com/redleafnew/Zotero_introduction)。


[01set-item-language-to-en-if-this-field-is-empty.js]:01set-item-language-to-en-if-this-field-is-empty.js
[02change-the-item-title-to-sentence-case.js]:02change-the-item-title-to-sentence-case.js
[03empty-the-extra-field.js]:03empty-the-extra-field.js
[04delete-the-attachment-files-after-the-items-have-been-removed-when-zotfile-was-installed.js]:04delete-the-attachment-files-after-the-items-have-been-removed-when-zotfile-was-installed.js
[05delete-the-addachments-when-the-items-were-removed.js]:05delete-the-addachments-when-the-items-were-removed.js
[06change-the-authors-case-to-title-case.js]:06change-the-authors-case-to-title-case.js
[07batch-merge-duplicates.js]:07batch-merge-duplicates.js
[08back-up-profile-and-data.js]:08back-up-profile-and-data.js
[09delete-item(s)-snapshot(s).js]:09delete-item(s)-snapshots.js
[10add-bold-tag-around-author.js]:10add-bold-tag-around-author.js
[11del-all-the-attachment(s)-of-item(s).js]:11del-all-the-attachment(s)-of-item(s).js
[12copy-zotero-template-to-word-startup-directory.js]:12copy-zotero-template-to-word-startup-directory.js
[13chagne-lwt-to-lwt-food-science-and-technology-in-publication-title.js]:13chagne-lwt-to-lwt-food-science-and-technology-in-publication-title.js
[13.1chagne-lwt-to-lwt-food-science-and-technology-in-publication-title.js]:13.1chagne-lwt-to-lwt-food-science-and-technology-in-publication-title.js
[14extra-replace-citations.js]:14extra-replace-citations.js
[15swap-author-first-last-names.js]:15swap-author-first-last-names.js
[16copy-creators-to-clipboard.js]:16copy-creators-to-clipboard.js