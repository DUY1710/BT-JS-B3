function quyDoiTien() {
  var doLa = document.getElementById("Do-la").value * 1;
  var quyDoiTien = doLa * 23500;
  quyDoiTien = new Intl.NumberFormat("vn-VN").format(quyDoiTien);
  document.getElementById("result").innerText = `${quyDoiTien}`;
}
