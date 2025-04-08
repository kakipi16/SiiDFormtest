// フォームから入力されたログイン情報を取得する
var username = document.getElementById('username').value;
var password = document.getElementById('password').value;
// ログイン情報をLocalStorageに保存する
localStorage.setItem('username', username);
localStorage.setItem('password', password);