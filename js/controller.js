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
