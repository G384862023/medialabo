// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let b = document.querySelector('#print');
b.addEventListener('click', greeting);
function greeting() {
  let i = document.querySelector('input[name="kazu"]');
  let yoso = parseInt(i.value,10);
  hantei();
}


// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  i = document.querySelector('input[name="kazu"]');
  yoso = parseInt(i.value,10);
  
  kaisu=kaisu+1;
  let k1=document.querySelector('span#kaisu');
  k1.textContent = kaisu;

  let k2=document.querySelector('span#answer');
  k2.textContent = yoso;
  let e=0;
  let p=document.querySelector('p#result');
  if(kaisu<4&&e===0){
      // 課題3-1: 正解判定する
    if(yoso===kotae){
      p.textContent ='正解です.おめでとう!';
      e=1;
      }
      else if(yoso>kotae&&kaisu<=2){
          p.textContent ="まちがえ.答えはもっと小さいです";
      }
      else if(yoso<kotae&&kaisu<=2){
          p.textContent ="まちがえ.答えはもっと大きいです";
      }
      else{
        p.textContent ="まちがい．残念でした答えは "+kotae+ "です．";
      }
     
  }
  else{
    p.textContent ="答えは"+kotae+"でした.すでにゲームは終わってます";
  }
  // kotae と yoso が一致するかどうか調べて結果を出力
  
  // 課題3-1における出力先はコンソール
}