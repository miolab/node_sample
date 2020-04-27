function isLeapYear(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log("うるう年です。");
  } else {
    console.log("うるう年ではありません。");
  }
}

// 実行と出力結果例
isLeapYear(2020); // うるう年です。
isLeapYear(2021); // うるう年ではありません。
isLeapYear(1600); // うるう年です。
