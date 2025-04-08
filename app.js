let num = 1;
// データの保存
sessionStorage.setItem('access_count', num);
window.sessionStorage.setItem('access_count', num);
sessionStorage.access_count = num
num = sessionStorage.getItem('access_count');
num = window.sessionStorage.getItem('access_count');
num = sessionStorage.access_count
sessionStorage.removeItem('access_count');
window.sessionStorage.removeItem('access_count');
sessionStorage.clear();
window.sessionStorage.clear();
