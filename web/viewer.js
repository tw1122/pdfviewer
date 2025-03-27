// PDFファイルを読み込んで表示する（PDF.js必要）
if (typeof pdfjsLib === "undefined") {
  alert("PDF.js ライブラリが読み込まれていません。");
}

// viewer.html?file=〇〇.pdf からファイル名を取得
const urlParams = new URLSearchParams(window.location.search);
const pdfUrl = urlParams.get('file');

if (pdfUrl) {
  const iframe = document.createElement('iframe');
  iframe.src = pdfUrl;
  iframe.id = "viewerContainer";
  document.body.appendChild(iframe);
} else {
  document.body.innerHTML = "<p>PDFファイルのURLが指定されていません。</p>";
}
