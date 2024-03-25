// định nghĩa function
function sayHello() {
  console.log("Hi you");
  console.log("Have a good day");
}

// thực thi ( chạy ) function

//  hàm không có tham số
sayHello();
sayHello();
sayHello();
sayHello();
sayHello();
// tham số ~ params

// hàm có tham số

function sayHelloWithName(username) {
  console.log("Hi", username);
}
sayHelloWithName("Huy");
sayHelloWithName("Hưng");
sayHelloWithName("Duy");
sayHelloWithName("Ân");

// tạo 1 function tính điểm trung bình 2 môn toán văn cho 2 học sinh khác nhau
// hàm có giá trị trả về ( return )
// return : trả về kết quả / dừng function tại lệnh return
function tinhDTB(toan, van) {
  var diemTB = (toan + van) / 2;
  return diemTB;
}
var kq1 = tinhDTB(5, 8);
console.log("😀 - kq1", kq1);
var kq2 = tinhDTB(7, 9);
console.log("😀 - kq2", kq2);
