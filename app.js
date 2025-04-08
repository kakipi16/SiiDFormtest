// フォームから入力されたログイン情報を取得する
let username = document.getElementById('username');
let password = document.getElementById('password');
// ログイン情報をLocalStorageに保存する
localStorage.setItem('username', username);
localStorage.setItem('password', password);