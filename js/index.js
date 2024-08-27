var DSNV = [];

var dataJson = localStorage.getItem("DSNV_JSON");
if (dataJson != null) {
  var dataArr = JSON.parse(dataJson);
  DSNV = dataArr.map((item) => {
    var nv = new NhanVien(
      item.id,
      item.ten,
      item.email,
      item.matKhau,
      item.ngayLam,
      item.luongCb,
      item.chucVu,
      item.gioLam
    );
    return nv;
  });
  renderDSNV(DSNV);
}

function themNv() {
  var nv = layThongTinTuForm();
  DSNV.push(nv);
  //   lưu trữ localstorage
  var dataJson = JSON.stringify(DSNV);
  localStorage.setItem("DSNV_JSON", dataJson);
  renderDSNV(DSNV);
}

function xoaNv(tk) {
  var index = DSNV.findIndex((item) => {
    return item.id == tk;
  });
  DSNV.splice(index, 1);
  var dataJson = JSON.stringify(DSNV);
  localStorage.setItem("DSNV_JSON", dataJson);
  renderDSNV(DSNV);
}

function suaNv(tk) {
  var index = DSNV.findIndex((item) => {
    return item.id == tk;
  });
  var nv = DSNV[index];
  hienThiThongTin(nv);
  document.getElementById("tknv").disabled = true;
}

function capNhatNv() {
  var nv = layThongTinTuForm();
  var index = DSNV.findIndex((item) => {
    return item.id == nv.id;
  });
  DSNV[index] = nv;
  var dataJson = JSON.stringify(DSNV);
  localStorage.setItem("DSNV_JSON", dataJson);
  clearForm();
  renderDSNV(DSNV);
}

function timNv() {
  var nameArr = [];
  var contentHTML = " ";
  var xepLoaiValue = document.querySelector("#searchName").value;
  for (var i = 0; i < DSNV.length; i++) {
    console.log(DSNV[i].xepLoai());
    if (DSNV[i].xepLoai() === xepLoaiValue) {
      nameArr.push(DSNV[i].ten);
    }
  }

  for (var i = 0; i < nameArr.length; i++) {
    contentHTML += i + 1 + ". " + nameArr[i] + `<br />`;
  }

  document.querySelector("#ulPhanTrang").innerHTML = contentHTML;
}

Validator({
  form: "#form-1",
  rules: [
    Validator.isRequired("#tknv", "Vui lòng nhập tài khoản"),
    Validator.isNumber("#tknv", "Tài khoản phải có độ dài từ 4 - 6 ký số"),
    Validator.isText("#name", "Vui lòng nhập họ và tên"),
    Validator.isRequired("#email", "Vui lòng nhập email"),
    Validator.isEmail("#email"),
    Validator.isRequired("#password"),
    Validator.isPassword(
      "#password",
      `Mật khẩu từ 6-10 ký tự chứa ít nhất 
      - 1 ký tự số 
      - 1 ký tự in hoa 
      - 1 ký tự đặc biệt`
    ),
    Validator.isRequired("#datepicker", "Vui lòng nhập ngày nhận việc"),
    Validator.isDate("#datepicker"),
    Validator.amongNumber(
      "#luongCB",
      1000000,
      20000000,
      "Vui lòng nhập lương cơ bản"
    ),
    Validator.isEmployee("#chucvu"),
    Validator.amongNumber("#gioLam", 80, 200, "Vui lòng nhập số giờ làm"),
  ],
});
