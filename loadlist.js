var g_max_row_count = 10;
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

var hot_list = new Array({
    img: "icons/搜狗浏览器.jpg",
    name: "搜狗浏览器",
    href: "https://ie.sogou.com",
    language: "中文",
    chargeType: "完全免费"
}, {
    img: "icons/7zip.png",
    name: "7ZIP解压",
    href: "https://www.7-zip.org/download.html",
    language: "英文",
    chargeType: "完全免费"
}, {
    img: "icons/adobe_reader.png",
    name: "Adobe PDF阅读器",
    href: "https://get.adobe.com/cn/reader/",
    language: "中文",
    chargeType: "基本版免费"
}, {
    img: "icons/酷狗音乐.png",
    name: "酷狗音乐",
    href: "https://www.kugou.com/",
    language: "中文",
    chargeType: "完全免费"
}, {
    img: "icons/VLC.png",
    name: "VLC视频播放器",
    href: "https://www.videolan.org/vlc/",
    language: "英文",
    chargeType: "完全免费"
}, {
    img: "icons/wps.ico",
    name: "WPS",
    href: "https://www.wps.cn",
    language: "中文",
    chargeType: "完全免费"
}, {
    img: "icons/有道词典.png",
    name: "有道词典",
    href: "https://www.youdao.com",
    language: "中文",
    chargeType: "基本版免费"
}, );

var pdf_list = new Array({
    img: "icons/adobe_reader.png",
    name: "Adobe PDF阅读器",
    href: "https://get.adobe.com/cn/reader/",
    language: "中文",
    chargeType: "基本版免费"
}, {
    img: "icons/pdfsam.png",
    name: "PDFsam PDF拆分合并",
    href: "https://pdfsam.org",
    language: "英文",
    chargeType: "基本版免费"
}, {
    img: "icons/福昕PDF编辑器.png",
    name: "福昕PDF编辑器",
    href: "https://editor.foxitsoftware.cn",
    language: "中文",
    chargeType: "基本版免费"
}, );

var musicPlayer_list = new Array({
    img: "icons/酷狗音乐.png",
    name: "酷狗音乐",
    href: "https://www.kugou.com/",
    language: "中文",
    chargeType: "完全免费"
}, );

var videoPlayer_list = new Array({
    img: "icons/VLC.png",
    name: "VLC视频播放器",
    href: "https://www.videolan.org/vlc/",
    language: "英文",
    chargeType: "完全免费"
}, );

var photoEditor_list = new Array(
    {

    }, 
);

var audioEditor_list = new Array({
    img: "icons/Audacity.png",
    name: "Audacity",
    href: "https://www.audacityteam.org",
    language: "英文",
    chargeType: "完全免费"
}, );

var videoEditor_list = new Array({

}, );

var remote_list = new Array({
    img: "icons/anydesk.png",
    name: "AnyDesk",
    href: "https://anydesk.com/zhs",
    language: "多国语言",
    chargeType: "个人免费"
}, );

var template_list = new Array({
    img: "icons/",
    name: "",
    href: "",
    language: "",
    chargeType: ""
}, );

var listMap = new Map([
    ["hot_tbody", [hot_list, "常用"]],
    ["pdf_tbody", [pdf_list, "PDF"]],
    ["musicPlayer_tbody", [musicPlayer_list, "音乐播放"]],
    ["videoPlayer_tbody", [videoPlayer_list, "视频播放"]],
    ["photoEditor_tbody", [photoEditor_list, "图像编辑"]],
    ["audioEditor_tbody", [audioEditor_list, "音频编辑"]],
    ["videoEditor_tbody", [videoEditor_list, "视频编辑"]],
    ["remote_tbody", [remote_list, "远程桌面"]],


]);

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

initCards();