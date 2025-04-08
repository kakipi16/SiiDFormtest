// アクセスカウントの初期化または取得
let accessCount = sessionStorage.getItem('access_count') || 0;
accessCount = parseInt(accessCount) + 1;

// 新しいカウントを保存
sessionStorage.setItem('access_count', accessCount);

// 必要に応じてカウントを取得
const currentCount = sessionStorage.getItem('access_count');

// セッションストレージをクリアする場合
// sessionStorage.clear();
