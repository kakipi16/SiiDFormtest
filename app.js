// フォームの送信イベントをリッスンする
document.querySelector('.signinForm').addEventListener('submit', function(event) {
    // デフォルトのフォーム送信を防止
    event.preventDefault();
    
    // フォームから入力されたログイン情報を取得する
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    
    // ログイン情報をLocalStorageに保存する
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    
    // 保存完了のメッセージを表示（オプション）
    alert('ログイン情報が保存されました');
});