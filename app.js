//  localStorageには保存された。反映はされない。
// window.onload = function(){
//     // ページ読み込み時に実行したい処理

//     function localSt() {
//         document.querySelector("#button").addEventListener("click", function(e){
//             e.preventDefault();  
//             //  localStorage.clear();
//             const userName = document.querySelector("#username").value;
//             const password = document.querySelector("#password").value;
//             localStorage.setItem("username", userName);
//             localStorage.setItem("password", password);
//             localStorage.getItem("username");
//             localStorage.getItem("password");
//         });
//     };
//     localSt();
// };

//  localStorageには保存された。反映はされない。
// window.onload = function () {
//     document.querySelector("#button").addEventListener("click", function (e) {
//       e.preventDefault();
  
//       const userName = document.querySelector("#username").value;
//       const password = document.querySelector("#password").value;
  
//       localStorage.setItem("username", userName);
//       localStorage.setItem("password", password);
//     });
// };


//localStorage保存OK反映OK
  window.onload = function () {
    // 1. ページ読み込み時に localStorage から値を取得して入力欄に反映
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
  
    if (storedUsername) {
      document.querySelector("#username").value = storedUsername;
    }
  
    if (storedPassword) {
      document.querySelector("#password").value = storedPassword;
    }
  
    // 2. 「Sign in」ボタンが押されたときに localStorage に保存
    document.querySelector("#button").addEventListener("click", function (e) {
      e.preventDefault(); // フォーム送信を防ぐ
  
      const userName = document.querySelector("#username").value;
      const password = document.querySelector("#password").value;
  
      localStorage.setItem("username", userName);
      localStorage.setItem("password", password);
  
      console.log("保存されました:", userName, password);
    });
  };