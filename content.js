function initDownloadAllBtn(t) { if (!t.querySelector("button.download-mj-all")) { const e = document.createElement("button"); e.classList.add("component-ifCTxY"), e.classList.add("button-ejjZWC"), e.classList.add("lookFilled-1H2Jvj"), e.classList.add("colorPrimary-2-Lusz"), e.classList.add("sizeSmall-3R2P2p"), e.classList.add("grow-2T4nbg"), e.classList.add("download-mj-all"), e.setAttribute("role", "link"), e.setAttribute("type", "button"), e.innerHTML = "<div class='contents-3NembX'><div class='content-1xP6ZE' aria-hidden='false'><div class='label-31sIdr'>Download All</div><b class='launchIcon-2KvOPN'>⏬</b></div></div>", t.appendChild(e) } } function downloadAllImages(t) { let e = t.parentElement.parentElement.parentElement.parentElement, a = e.querySelectorAll("a.originalLink-Azwuo9"); for (var n = 0; n < a.length; n++)downloadImage(a[n].href) } document.addEventListener("mouseover", e => { if (e.target.classList.contains("originalLink-Azwuo9")) { let t = e.target.parentElement; var a = e.target.href; if (!t.querySelector("a.download-mj")) { const n = document.createElement("a"); n.setAttribute("data-href", a), n.classList.add("download-mj"), n.style = "position: absolute;right: 10px;top: 10px;z-index: 9999;", n.text = "⬇️", t.appendChild(n) } } !e.target.classList.contains("container-2sjPya") || (e = e.target.querySelector("div.children-2XdE_I")) && initDownloadAllBtn(e) }), document.addEventListener("click", function (t) { t.target.classList.contains("download-mj") && (t.preventDefault(), downloadImage(t.target.getAttribute("data-href"))), t.target.classList.contains("label-31sIdr") && (t.preventDefault(), downloadAllImages(t.target.parentElement.parentElement.parentElement)), t.target.classList.contains("launchIcon-2KvOPN") && (t.preventDefault(), downloadAllImages(t.target.parentElement.parentElement.parentElement)) }); async function downloadImage(t) { const e = t.split("/").pop(); var a = e.split("?")[0]; const n = await fetch(t); t = await n.blob(), t = URL.createObjectURL(t); const l = document.createElement("a"); l.href = t, l.download = a, document.body.appendChild(l), l.click(), document.body.removeChild(l) }