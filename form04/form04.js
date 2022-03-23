function KiemTra()
{
	var ht = n.HoTen.value;
	var ngay = n.Ngay.value;
	var thang = n.Thang.value;
	var nam = n.Nam.value;
	var nn = n.NgheNgiep.value;
	var gc = n.GhiChu.value;
	
	if(ht == '')
	{
		alert('Họ và tên không được bỏ trống!');
		return false;
	}
	if(ngay == '' || thang == '' || nam == '')
	{
		alert('Ngày sinh không được bỏ trống!');
		return false;
	}
	
	if(nn == '')
	{
		alert('Nghề nghiệp không được bỏ trống!');
		return false;
	}
	
	if(gc == '')
	{
		alert('Ghi chú không được bỏ trống!');
		return false;
	}
	
	return true;
}