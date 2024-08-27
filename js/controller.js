// Hiện thị thông tin
function renderDSNV(dsnv) {
  var contentHTML = "";
  for (var i = 0; i < dsnv.length; i++) {
    var nv = dsnv[i];
    var trString = ` <tr>
        <td>${nv.id}</td>
        <td>${nv.ten}</td>
        <td>${nv.email}</td>
        <td>${nv.ngayLam}</td>
        <td>${nv.chucVu}</td>
        <td>${nv.tongLuong()}</td>
        <td>${nv.xepLoai()}</td>
        <td> 
          <button onclick="suaNv(${nv.id})" class="btn btn-warning">Sửa</button>
          <button onclick="xoaNv(${nv.id})" class="btn btn-danger">Xóa</button>
        </td>
    </tr>`;
    contentHTML += trString;
  }
  document.getElementById("tableDanhSach").innerHTML = contentHTML;
}

// lấy thông tin từ form
function layThongTinTuForm() {
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
  return nv;
}

function hienThiThongTin(data) {
  document.getElementById("tknv").value = data.id;
  document.getElementById("name").value = data.ten;
  document.getElementById("email").value = data.email;
  document.getElementById("password").value = data.matKhau;
  document.getElementById("datepicker").value = data.ngayLam;
  document.getElementById("luongCB").value = data.luongCb * 1;
  document.getElementById("chucvu").value = data.chucVu;
  document.getElementById("gioLam").value = data.gioLam * 1;
}

function clearForm() {
  document.getElementById("tknv").value = "";
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("datepicker").value = "";
  document.getElementById("luongCB").value = "";
  document.getElementById("chucvu").value = "";
  document.getElementById("gioLam").value = "";
}
