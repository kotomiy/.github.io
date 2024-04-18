let currentPage = 1;
const totalPages = 20; // 30ページのPDFを想定

function showPage(pageNum) {
    // すべてのページを非表示にする
    for (let i = 1; i <= totalPages; i++) {
        document.getElementById(`page${i}`).style.display = 'none';
    }
    // 指定されたページを表示する
    document.getElementById(`page${pageNum}`).style.display = 'block';
}

// 初期ページを表示
showPage(currentPage);

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}
