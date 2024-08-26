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
  var id = document.getElementById("tknv").value;
  var ten = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var matKhau = document.getElementById("password").value;
  var ngayLam = document.getElementById("datepicker").value;
  var luongCb = document.getElementById("luongCB").value * 1;
  var chucVu = document.getElementById("chucvu").value;
  var gioLam = document.getElementById("gioLam").value * 1;
  var nv = new NhanVien(
    id,
    ten,
    email,
    matKhau,
    ngayLam,
    luongCb,
    chucVu,
    gioLam
  );
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
