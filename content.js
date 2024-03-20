function initDownloadAllBtn(obe) {
    if (!obe) return;
    let pe = obe.parentElement, // children__*
        obeHTML = obe.innerHTML;
    let downloadAllBtn = document.createElement("button");
    if (pe.querySelector("button.download-mj-all")) return;

    obe.classList.forEach(function (className) {
        downloadAllBtn.classList.add(className)
    });

    downloadAllBtn.classList.add("download-mj-all");
    downloadAllBtn.setAttribute("role", "link");
    downloadAllBtn.setAttribute("type", "button");

    obeHTML = obeHTML.replace(/<div class="label([^"]+)"([^>]*)>(.*?)<\/div>/g, '<div class="download-all-label">Download All</div>');
    downloadAllBtn.innerHTML = obeHTML.replace(/<svg[^>]*>.*?<\/svg>/, '<b class="' + obe.querySelector('svg').getAttribute('class') + '">⏬</b>');
    pe.appendChild(downloadAllBtn)
}

function downloadAllImages(parentElement) {
    let anchorTags = parentElement.querySelectorAll('a[data-role][data-safe-src]');
    anchorTags.forEach(function (anchorTag) {
        if (!anchorTag.href) return;
        downloadImage(anchorTag.href)
    });
}
document.addEventListener("mouseover", e => {
    let parentLi = e.target.closest('li'),
        parentElementRegex = /^messageListItem/;
    if (!parentLi) return;
    if (!parentElementRegex.test(parentLi.classList[0])) false;
    let anchorTags = parentLi.querySelectorAll('a[data-role][data-safe-src]');
    anchorTags.forEach(function (anchorTag) {
        let pe = anchorTag.parentElement,
            href = anchorTag.href;
        if (!href || pe.querySelector("a.download-mj")) return;
        let n = document.createElement("a");
        n.setAttribute("data-href", href), n.classList.add("download-mj"), n.style = "position: absolute;right: 10px;top: 10px;z-index: 9999;", n.text = "⬇️", pe.appendChild(n)
    });

    let buttonElements = parentLi.querySelectorAll('button[role="link"][type="button"]');
    if (!buttonElements) return;
    initDownloadAllBtn(buttonElements[0])
}), document.addEventListener("click", function (t) {
    t.target.classList.contains("download-mj") && (t.preventDefault(), downloadImage(t.target.getAttribute("data-href")));
    if (button = t.target.closest('button')){
        if (button.classList.contains("download-mj-all")){
            t.preventDefault(), downloadAllImages(button.closest('li'));
        }
    }
    
});
async function downloadImage(t) {
    const e = t.split("/").pop();
    var a = e.split("?")[0];
    const n = await fetch(t);
    t = await n.blob(), t = URL.createObjectURL(t);
    const l = document.createElement("a");
    l.href = t, l.download = a, document.body.appendChild(l), l.click(), document.body.removeChild(l)
}