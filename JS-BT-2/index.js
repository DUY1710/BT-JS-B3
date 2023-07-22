function tinhTrungBinh() {
  var nhapSoThu1 = document.getElementById("nhap-so-thu-1").value * 1;
  var nhapSoThu2 = document.getElementById("nhap-so-thu-2").value * 1;
  var nhapSoThu3 = document.getElementById("nhap-so-thu-3").value * 1;
  var nhapSoThu4 = document.getElementById("nhap-so-thu-4").value * 1;
  var nhapSoThu5 = document.getElementById("nhap-so-thu-5").value * 1;
  var tinhTrungBinh =
    (nhapSoThu1 + nhapSoThu2 + nhapSoThu3 + nhapSoThu4 + nhapSoThu5) / 5;
  document.getElementById(
    "result"
  ).innerHTML = `<h1 class="text-danger mt-3" >Tính trung bình: ${tinhTrungBinh} </h1>`;
}
