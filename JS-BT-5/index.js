function tinhToan() {
  var chuSo = document.getElementById("chu-so").value * 1;
  var kq = Math.floor(chuSo / 10) + (chuSo % 10);
  document.getElementById("result").innerText = `${kq}`;
}
