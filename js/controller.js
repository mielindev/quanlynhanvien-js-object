// Lớp đối tượng
// function layThongTinTuForm() {

// }

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
        <td>0</td>
        <td>Giỏi</td>
    </tr>`;
    contentHTML += trString;
  }
  document.getElementById("tableDanhSach").innerHTML = contentHTML;
}
