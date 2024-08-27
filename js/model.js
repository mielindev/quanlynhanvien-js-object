// Tạo lớp đối tượng
function NhanVien(
  _id,
  _ten,
  _email,
  _matKhau,
  _ngayLam,
  _luongCb,
  _chucVu,
  _gioLam
) {
  (this.id = _id),
    (this.ten = _ten),
    (this.email = _email),
    (this.matKhau = _matKhau),
    (this.ngayLam = _ngayLam),
    (this.luongCb = _luongCb),
    (this.chucVu = _chucVu),
    (this.gioLam = _gioLam);
  this.tongLuong = () => {
    if (this.chucVu == "Sếp") {
      return `${this.luongCb * 3}`;
    }
    if (this.chucVu == "Trưởng phòng") {
      return `${this.luongCb * 2}`;
    }
    return `${this.luongCb}`;
  };
  this.xepLoai = () => {
    if (this.gioLam >= 192) {
      return "Nhân viên xuất sắc";
    } else if (this.gioLam >= 176) {
      return "Nhân viên giỏi";
    } else if (this.gioLam >= 160) {
      return "Nhân viên khá";
    } else return "Nhân viên trung bình";
  };
}
