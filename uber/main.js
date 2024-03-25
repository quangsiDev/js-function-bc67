function tinhGiaTienKmDauTien(loai) {
  var giaTien;
  if (loai == "uberCar") {
    giaTien = 8000;
  }
  if (loai == "uberSUV") {
    giaTien = 9000;
  }
  if (loai == "uberBlack") {
    giaTien = 10000;
  }
  return giaTien;
}

function tinhGiaTiemKm1Den19(loai) {
  if (loai == "uberCar") {
    return 7500;
  }
  if (loai == "uberSUV") {
    return 8500;
  }
  if (loai == "uberBlack") {
    return 9500;
  }
}
function tinhGiaTienKm19TroDi(loaiXe) {
  switch (loaiXe) {
    case "uberCar": {
      return 7000;
    }
    case "uberSUV": {
      return 8000;
    }
    case "uberBlack": {
      return 9000;
    }
  }
}
function tinhTienUber() {
  // b1: lấy input loại xe, số km từ người dùng
  var loaiXe = document.querySelector('input[name="selector"]:checked').value;
  //  * 1 => convert string to number
  var soKm = document.getElementById("txt-km").value * 1;
  // b2: xác định giá tiền km theo từng loại xe
  var giaTienKmDauTien = tinhGiaTienKmDauTien(loaiXe);
  var giaTienKm1Den19 = tinhGiaTiemKm1Den19(loaiXe);
  var giaTienKm19TroDi = tinhGiaTienKm19TroDi(loaiXe);
  console.log({ giaTienKmDauTien, giaTienKm1Den19, giaTienKm19TroDi });
  // tính giá tiền dự vào số km user nhập
  var giaTien;
  if (soKm <= 1) {
    giaTien = giaTienKmDauTien * soKm;
  } else if (1 < soKm && soKm <= 19) {
    giaTien = giaTienKmDauTien + (soKm - 1) * giaTienKm1Den19;
  } else {
    giaTien = giaTienKmDauTien + 18 * giaTienKm1Den19 + (soKm - 19) * giaTienKm19TroDi;
  }
  console.log("😀 - giaTien", giaTien);
  // input :Black, 24
  // hiển thị kết quả

  document.getElementById("divThanhTien").style.display = "block";
  document.getElementById("xuatTien").innerText = `${giaTien}  VND`;
}
