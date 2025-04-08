let username = document.getElementById('username').value;
let password = document.getElementById('password').value;
// フォームの送信イベントをリッスンする
document.querySelector('.signinForm').addEventListener('submit', function(event) {
    // デフォルトのフォーム送信を防止
    event.preventDefault();
    // ログイン情報をLocalStorageに保存する
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);


    // 保存完了のメッセージを表示（オプション）
    alert('ログイン情報が保存されました');
});

localStorage.getItem('username', username);
localStorage.getItem('password', password);