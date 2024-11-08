$('#text-noti').hide();
$('#SubmitBtn').click(function(event) {
    event.preventDefault();
    var mail = $('#exampleInputEmail1').val();
    var pass = $('#exampleInputPassword1').val();
    // Kiểm tra
    if (mail === 'adm@ntu.edu.vn' && pass === '123456789') {
        // Thông báo đăng nhập thành công
        alert('Đăng Nhập Thành Công!');
        $('#text-noti').show();
        setTimeout(function() {
            window.location.href = "index.html";
        }, 3000);
    } else {
        alert('Địa chỉ email hoặc mật khẩu không hợp lệ! \nVui Lòng Kiểm Tra Lại !');
    }
});
