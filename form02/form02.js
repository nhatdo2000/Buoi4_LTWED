function KiemTra()
{
	var ht = n.HoTen.value;
	var dc = n.DiaChi.value;
	var e = n.Email.value;
	var dt = n.DienThoai.value;
	var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
	
	if(ht == '')
	{
		alert('Họ và tên không được bỏ trống');
		return false;
	}
	if(dc == '')
	{
		alert('Địa chỉ không được bỏ trống');
		return false;
	}
	if(e == '')
	{
		alert('Email không được bỏ trống');
		return false;
	}
	if(dt == '')
	{
		alert('Điện thoại không được bỏ trống');
		return false;
	}
	if(!emailPattern.test(e))
	{
		alert('Địa chỉ email không hợp lệ!');
		return false;
	}
	
	return true;
}