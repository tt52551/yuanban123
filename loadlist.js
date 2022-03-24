var g_max_row_count = 20;
var g_init_row_count = 5;


function addRowToTable(tableId, item) {
    var t = document.getElementById(tableId);
    var tr = document.createElement("tr");
    var td_img = document.createElement("td");
    var td_name = document.createElement("td");
    var td_site = document.createElement("td");
    var td_download = document.createElement("td");
    var td_active = document.createElement("td");
    td_img.innerHTML = "<img src=" + item.img + " width='32' height='32'></img>";
    td_name.innerHTML = item.name;
    var off = item.href.indexOf("//");
    var href = item.href.substring(off + 2);
    td_site.innerHTML = "<a href=" + item.href + " target='_blank' rel='noopener noreferrer'>" + href + "</a>";
    td_download.innerHTML = item.language;
    if ("完全免费" == item.chargeType) {
        td_active.innerHTML = "<span class='badge bg-primary'>" + item.chargeType + "</span>";
    } else {
        td_active.innerHTML = "<span class='badge bg-secondary'>" + item.chargeType + "</span>";
    }
    tr.appendChild(td_img);
    tr.appendChild(td_name);
    tr.appendChild(td_site);
    tr.appendChild(td_download);
    tr.appendChild(td_active);
    t.appendChild(tr);
};

function showSome(tableId) {
    var list = listMap.get(tableId)[0];
    var max_count = Math.min(g_init_row_count, list.length);
    for (let i = 0; i < max_count; ++i) {
        addRowToTable(tableId, list[i]);
    }
    console.log(document.getElementById("col_1").innerHTML);
    if (max_count < list.length) {
        document.getElementById(tableId + "_btn").style.display = 'block';
    }
}

function showMore(tableId) {
    var list = listMap.get(tableId)[0];
    var row_count = document.getElementById(tableId).rows.length;
    if (row_count >= g_max_row_count) {
        return;
    }
    if (row_count >= list.length) {
        return;
    }
    var max_count = Math.min(g_max_row_count, list.length);
    var i = row_count;
    for (; i < max_count; ++i) {
        addRowToTable(tableId, list[i]);
    }
    if (i >= list.length) {
        document.getElementById(tableId + "_btn").style.display = 'none';
        return;
    }
};

function showAll() {

};

function gen_card_template(tableId, category) {
    var template = "\
<div class='card'>\
<div class='card-header pb-0'>\
  <div class='card-actions float-right'>\
  </div>" + "\
  <h5 class='card-title mb-0'>" + category + "</h5>\
</div>\
<div class='card-body'>\
  <table class='table table-striped' style='width:100%'>\
    <thead>\
    </thead>\
    <tbody id=" + tableId + ">\
    </tbody>\
  </table>\
  <button id=" + tableId + "_btn" + " type='button' class='btn btn-info btn-sm' style='display : none' onclick='showMore(\x22" + tableId + "\x22)'>更多>></button>\
</div>\
</div>\
";
    return template;
};

function initCards() {
    var i = 0;
    var col_1 = document.getElementById("col_1");
    var col_2 = document.getElementById("col_2");
    for (var [key, value] of listMap) {
        var card = document.createElement("div");
        card.innerHTML = gen_card_template(key, value[1]);
        if (i % 2 == 0){
            col_1.appendChild(card);
        } else {
            col_2.appendChild(card);
        }
        showSome(key);

        i = i + 1;
    }
}

var hot_list = new Array({
    img: "icons/sogo-browser.jpg",
    name: "搜狗浏览器",
    href: "https://ie.sogou.com",
    language: "中文",
    chargeType: "完全免费"
}, {
    img: "icons/7-zip.jpg",
    name: "7-ZIP解压",
    href: "https://www.7-zip.org/download.html",
    language: "英文",
    chargeType: "完全免费"
}, {
    img: "icons/adobe-reader.jpg",
    name: "Adobe PDF阅读器",
    href: "https://get.adobe.com/cn/reader/",
    language: "中文",
    chargeType: "基本版免费"
}, {
    img: "icons/kugo-music.jpg",
    name: "酷狗音乐",
    href: "https://www.kugou.com/",
    language: "中文",
    chargeType: "完全免费"
}, {
    img: "icons/vlc.jpg",
    name: "VLC视频播放器",
    href: "https://www.videolan.org/vlc/",
    language: "英文",
    chargeType: "完全免费"
}, {
    img: "icons/wps.jpg",
    name: "WPS",
    href: "https://www.wps.cn",
    language: "中文",
    chargeType: "完全免费"
}, {
    img: "icons/youdao-dict.jpg",
    name: "有道词典",
    href: "https://www.youdao.com",
    language: "中文",
    chargeType: "基本版免费"
},  {
    img: "icons/sou-gou-pinyin.jpg",
    name: "搜狗拼音输入法",
    href: "https://pinyin.sogou.com",
    language: "中文",
    chargeType: "完全免费"
},); // hot

var pdf_list = new Array({
    img: "icons/adobe-reader.jpg",
    name: "Adobe PDF阅读器",
    href: "https://get.adobe.com/cn/reader/",
    language: "中文",
    chargeType: "基本版免费"
}, {
    img: "icons/pdfsam.jpg",
    name: "PDFsam PDF拆分合并",
    href: "https://pdfsam.org",
    language: "英文",
    chargeType: "基本版免费"
}, {
    img: "icons/fuxin-pdf-editor.jpg",
    name: "福昕PDF编辑器",
    href: "https://editor.foxitsoftware.cn",
    language: "中文",
    chargeType: "基本版免费"
}, {
    img: "icons/cute-pdf.jpg",
    name: "CutePDF套件",
    href: "https://www.cutepdf.com",
    language: "英文",
    chargeType: "基本版免费"
},); // pdf

var musicPlayer_list = new Array({
    img: "icons/kugo-music.jpg",
    name: "酷狗音乐",
    href: "https://www.kugou.com/",
    language: "中文",
    chargeType: "完全免费"
}, {
    img: "icons/foobar2000.jpg",
    name: "foobar2000",
    href: "https://www.kugou.com/",
    language: "英文",
    chargeType: "完全免费"
},{
    img: "icons/aimp.jpg",
    name: "AIMP",
    href: "https://www.aimp.ru",
    language: "英文",
    chargeType: "完全免费"
},); // music player

var videoPlayer_list = new Array({
    img: "icons/vlc.jpg",
    name: "VLC视频播放器",
    href: "https://www.videolan.org/vlc/",
    language: "英文",
    chargeType: "完全免费"
}, {
    img: "icons/potplayer.jpg",
    name: "PotPlayer",
    href: "https://potplayer.daum.net",
    language: "多国语言",
    chargeType: "完全免费"
}, ); // video player

var photoEditor_list = new Array(
    {
        img: "icons/gimp.jpg",
        name: "GIMP",
        href: "https://www.gimp.org",
        language: "英文",
        chargeType: "完全免费"
    },
    {
        img: "icons/hitfilm-express.jpg",
        name: "HitFilm Express",
        href: "https://fxhome.com/product/hitfilm-express",
        language: "英文",
        chargeType: "完全免费"
    },
); // photo editor

var avEditor_list = new Array({
    img: "icons/audacity.jpg",
    name: "Audacity",
    href: "https://www.audacityteam.org",
    language: "英文",
    chargeType: "完全免费"
}, {
    img: "icons/hitfilm-express.jpg",
    name: "HitFilm Express",
    href: "https://fxhome.com/product/hitfilm-express",
    language: "英文",
    chargeType: "完全免费"
},{
    img: "icons/shotcut.jpg",
    name: "ShotCut",
    href: "https://shotcut.org",
    language: "英文",
    chargeType: "完全免费"
},); // av editor

var devTool_list = new Array({
    img: "icons/scoop.jpg",
    name: "Scoop",
    href: "https://scoop.sh",
    language: "英文",
    chargeType: "完全免费"
}, {
    img: "icons/chocolatey.jpg",
    name: "Chocolatey",
    href: "https://chocolatey.org",
    language: "英文",
    chargeType: "完全免费"
}, {
    img: "icons/putty.jpg",
    name: "PuTTY",
    href: "https://www.putty.org",
    language: "英文",
    chargeType: "完全免费"
}, {
    img: "icons/winscp.jpg",
    name: "WinSCP",
    href: "https://winscp.net/eng/index.php",
    language: "英文",
    chargeType: "完全免费"
},{
    img: "icons/greenshot.jpg",
    name: "Greenshot",
    href: "https://getgreenshot.org",
    language: "英文",
    chargeType: "完全免费"
},{
    img: "icons/colora-color-picker.jpg",
    name: "Colora - Color Picker",
    href: "https://bluegrams.github.io/Colora",
    language: "英文",
    chargeType: "完全免费"
},{
    img: "icons/curl.jpg",
    name: "Curl",
    href: "https://curl.se",
    language: "英文",
    chargeType: "完全免费"
},{
    img: "icons/sourcetree.jpg",
    name: "Sourcetree",
    href: "https://www.sourcetreeapp.com",
    language: "英文",
    chargeType: "完全免费"
},{
    img: "icons/winmerge.jpg",
    name: "WinMerge",
    href: "https://winmerge.org",
    language: "英文",
    chargeType: "完全免费"
},{
    img: "icons/nmap.jpg",
    name: "Nmap",
    href: "https://nmap.org",
    language: "英文",
    chargeType: "完全免费"
},{
    img: "icons/cmd.jpg",
    name: "NetCat",
    href: "https://nmap.org",
    language: "英文",
    chargeType: "完全免费"
},); // dev

var remote_list = new Array({
    img: "icons/anydesk.jpg",
    name: "AnyDesk",
    href: "https://anydesk.com/zhs",
    language: "多国语言",
    chargeType: "个人版免费"
}, {
    img: "icons/teamviewer.jpg",
    name: "TeamViewer",
    href: "https://www.teamviewer.com",
    language: "英语",
    chargeType: "个人版免费"
},); // remote

var textEditor_list = new Array(
    {
        img: "icons/notepad-plug-plug.jpg",
        name: "NotePad++",
        href: "https://notepad-plus-plus.org",
        language: "多国语言",
        chargeType: "完全免费"
    },
    {
        img: "icons/markdownpad.jpg",
        name: "MarkdownPad",
        href: "https://markdownpad.com",
        language: "英文",
        chargeType: "基本版免费"
    },
); // text editor

var decompiler_list = new Array(
    {
        img: "icons/java-decompiler.jpg",
        name: "Java Decompiler",
        href: "https://java-decompiler.github.io",
        language: "英文",
        chargeType: "完全免费"
    },
    {
        img: "icons/default.jpg",
        name: "Snowman",
        href: "https://derevenets.com",
        language: "英文",
        chargeType: "完全免费"
    },
); // decompiler

var downloadTool_list = new Array(
    {
        img: "icons/4k-video-downloader.jpg",
        name: "4K Video Downloader",
        href: "https://www.4kdownload.com",
        language: "英文",
        chargeType: "基本版免费"
    },
); // download tool

var cdTool_list = new Array(
    {
        img: "icons/img-burn.jpg",
        name: "ImgBurn",
        href: "https://www.imgburn.com",
        language: "英文",
        chargeType: "完全免费"
    },
); // cd tool

var screenRecorder_list = new Array(
    {
        img: "icons/obs-studio.jpg",
        name: "OBS Studio",
        href: "https://obsproject.com",
        language: "英文",
        chargeType: "完全免费"
    },
    {
        img: "icons/captura.jpg",
        name: "Captura",
        href: "https://mathewsachin.github.io/Captura/",
        language: "英文",
        chargeType: "完全免费"
    },
    {
        img: "icons/ev.jpg",
        name: "EV 录屏",
        href: "https://www.ieway.cn/evcapture.html",
        language: "中文",
        chargeType: "基本版免费"
    },
    {
        img: "icons/ocam.jpg",
        name: "oCam",
        href: "https://ocam.en.softonic.com",
        language: "英文",
        chargeType: "完全免费"
    },
); // screen recorder

var office_list = new Array(
    {
        img: "icons/wps.jpg",
        name: "WPS",
        href: "https://www.wps.cn",
        language: "中文",
        chargeType: "完全免费"
    },
    {
        img: "icons/openoffice.jpg",
        name: "OpenOffice",
        href: "https://www.openoffice.org",
        language: "多国语言",
        chargeType: "完全免费"
    },
    {
        img: "icons/libreoffice.jpg",
        name: "LibreOffice",
        href: "https://www.libreoffice.org",
        language: "多国语言",
        chargeType: "完全免费"
    },
); // office

var vm_list = new Array(
    {
        img: "icons/virtualbox.jpg",
        name: "VirtualBox",
        href: "https://www.virtualbox.org",
        language: "多国语言",
        chargeType: "完全免费"
    },
    {
        img: "icons/vmware-workstation-player.jpg",
        name: "VMware Workstation Player",
        href: "https://customerconnect.vmware.com/cn",
        language: "英文",
        chargeType: "个人版免费"
    },
    {
        img: "icons/qemu.jpg",
        name: "QEMU",
        href: "https://www.qemu.org",
        language: "英文",
        chargeType: "完全免费"
    },
    {
        img: "icons/xen-project.jpg",
        name: "Xen Project",
        href: "https://xenproject.org",
        language: "英文",
        chargeType: "完全免费"
    },

); // vm

var dataRecovery_list = new Array(
    {
        img: "icons/testdisk.jpg",
        name: "TestDisk",
        href: "https://www.cgsecurity.org",
        language: "英文",
        chargeType: "完全免费"
    },
    {
        img: "icons/photorec.jpg",
        name: "PhotoRec",
        href: "https://www.cgsecurity.org",
        language: "英文",
        chargeType: "完全免费"
    },
    {
        img: "icons/wisecleaner.jpg",
        name: "Wise Data Recovery",
        href: "https://www.wisecleaner.com.cn",
        language: "多国语言",
        chargeType: "基本版免费"
    },
    {
        img: "icons/disk-drill.jpg",
        name: "Disk Drill",
        href: "https://www.cleverfiles.com/cn",
        language: "多国语言",
        chargeType: "基本版免费"
    },
); // dataRecovery

var template_list = new Array(
    {
        img: "icons/",
        name: "",
        href: "",
        language: "",
        chargeType: ""
    },
);

var other_list = new Array(
    {
        img: "icons/fast-copy.jpg",
        name: "Fast Copy",
        href: "https://fastcopy.jp",
        language: "英文",
        chargeType: "完全免费"
    },
    {
        img: "icons/file-checksum-utility.jpg",
        name: "File Checksum Utility",
        href: "https://sourceforge.net/projects/filechecksumutility/",
        language: "英文",
        chargeType: "完全免费"
    },
    {
        img: "icons/hash-tool.jpg",
        name: "Hash Tool",
        href: "https://www.microsoft.com/zh-cn/p/hash-tool/9nblggh4rrr2",
        language: "英语",
        chargeType: "个人免费"
    },
); // other

var listMap = new Map([
    ["hot_tbody", [hot_list, "常用"]],
    ["pdf_tbody", [pdf_list, "PDF"]],
    ["musicPlayer_tbody", [musicPlayer_list, "音乐播放"]],
    ["videoPlayer_tbody", [videoPlayer_list, "视频播放"]],
    ["photoEditor_tbody", [photoEditor_list, "图像编辑"]],
    ["avEditor_tbody", [avEditor_list, "音频,视频编辑"]],
    ["remote_tbody", [remote_list, "远程桌面"]],
    ["devTool_tbody", [devTool_list, "开发人员常用工具"]],
    ["textEditor_tbody", [textEditor_list, "文本编辑器"]],
    ["decompiler_tbody", [decompiler_list, "反编译工具"]],
    ["downloadTool_tbody", [downloadTool_list, "下载工具"]],
    ["cdTool_tbody", [cdTool_list, "光盘刻录"]],
    ["screenRecorder_tbody", [screenRecorder_list, "录屏工具"]],
    ["office_tbody", [office_list, "Office办公软件"]],
    ["vm_tbody", [vm_list, "虚拟机"]],
    ["dataRecovery_tbody", [dataRecovery_list, "数据恢复"]],
    
    
    ["other_tbody", [other_list, "其它"]],
]);

initCards();
