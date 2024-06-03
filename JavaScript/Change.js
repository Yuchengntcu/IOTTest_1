function convertCurrency() {
    var amount = document.getElementById("amount").value;
    var fromCurrency = document.getElementById("from").value;
    var toCurrency = document.getElementById("to").value;
    var convertedAmount;
  
    // 轉換率，這裡假設的數值，實際應根據實際匯率進行設置
    var twdToJpyRate = 3.6;
    var twdToKrwRate = 41.2;
    var jpyToTwdRate = 0.28;
    var krwToTwdRate = 0.024;
  
    if (fromCurrency === "TWD" && toCurrency === "JPY") {
      convertedAmount = amount * twdToJpyRate;
    } else if (fromCurrency === "TWD" && toCurrency === "KRW") {
      convertedAmount = amount * twdToKrwRate;
    } else if (fromCurrency === "JPY" && toCurrency === "TWD") {
      convertedAmount = amount * jpyToTwdRate;
    } else if (fromCurrency === "KRW" && toCurrency === "TWD") {
      convertedAmount = amount * krwToTwdRate;
    } else {
      // 若選擇的是同一種貨幣，則不需要轉換
      convertedAmount = amount;
    }
  
    document.getElementById("result").innerText = "轉換後金額：" + convertedAmount.toFixed(2);
  }