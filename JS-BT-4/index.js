function tinhToan() {
  var chieuDai = document.getElementById("chieu-dai").value * 1;
  var chieuRong = document.getElementById("chieu-rong").value * 1;
  var resultCV = (chieuDai + chieuRong) * 2;
  var resultDT = chieuDai * chieuRong;
  document.getElementById(
    "result"
  ).innerText = `Diện tích: ${resultDT}; Chu vi: ${resultCV}`;
}
