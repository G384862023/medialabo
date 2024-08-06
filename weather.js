function print(data) {
var resultDiv = document.getElementById("result");
  resultDiv.textContent = ""; // Clear previous results

  // 関数を使ってデータを追加
  function addDataToResult(label, value) {
    var p = document.createElement("p");
    p.textContent = label + ": " + value;
    resultDiv.appendChild(p);
  }

  addDataToResult("都市名", data.name);
  addDataToResult("経度", data.coord.lon);
  addDataToResult("緯度", data.coord.lat);
  addDataToResult("天気", data.weather[0].description);
  addDataToResult("最低気温", data.main.temp_min + "°C");
  addDataToResult("最高気温", data.main.temp_max + "°C");

  console.log(data.coord.lon);
}

let b = document.querySelector('button#btn');
b.addEventListener('click', sendRequest);

// 通信を開始する処理
function sendRequest() {
  let s = document.querySelector('select#tenki');
  let idx = s.selectedIndex; // idx 番目の option が選択された

  let os = s.querySelectorAll('option'); // s の子要素 option をすべて検索
  let o = os.item(idx); // os の idx 番目の要素

  console.log('選択された ' + idx + ' 番目の option の情報:');
  console.log('  value=' + o.getAttribute('value')); // id 属性を表示
  console.log('  textContent=' + o.textContent);

  // URL を設定
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + o.getAttribute('value') + '.json';

  // 通信開始
  axios.get(url)
    .then(showResult) // 通信成功
    .catch(showError) // 通信失敗
    .then(finish); // 通信の最後の処理
}

// 通信が成功した時の処理
function showResult(resp) {
  // サーバから送られてきたデータを出力
  let data = resp.data;

  // data が文字列型なら，オブジェクトに変換する
  if (typeof data === 'string') {
    data = JSON.parse(data);
  }
  print(data);
  // data をコンソールに出力
  console.log(data);

  // data.x を出力
  console.log(data.x);
  console.log(data.coord.lon);
}

// 通信エラーが発生した時の処理
function showError(err) {
  console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
  console.log('Ajax 通信が終わりました');
}