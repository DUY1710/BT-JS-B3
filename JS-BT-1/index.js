function tinhLuong() {
  var luongMotNgay = document.getElementById("luong-mot-ngay").value * 1;
  var soNgayLam = document.getElementById("so-ngay-lam").value * 1;
  var tienLuong = luongMotNgay * soNgayLam;
  document.getElementById(
    "result"
  ).innerHTML = `<h1 class="text-danger mt-3" >số tiền lương của bạn: ${tienLuong} vnd</h1>`;
}
