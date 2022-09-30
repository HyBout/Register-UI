function validateForm() {
    var fullname = document.getElementById('fullname').value
    var error_fullname = document.getElementById('error-fullname')
    var fullnameRegex = /^[A-Z]/; // Chữ đầu tiên phải viết hoa
    if (fullname == '' || fullname == null)
        error_fullname.innerHTML = 'Họ tên không được để trống'
    else if (!fullnameRegex.test(fullname))
        alert(`${fullname} error`)

    var username = document.getElementById('username').value
    var error_username = document.getElementById('error-username')
    var usernameRegex = /^[a-zA-Z0-9\_]+$/; // Chỉ chứa ký tự, ký số và dấu gạch dưới
    if (username == '' || username == null)
        error_username.innerHTML = 'Tên đăng nhập không được để trống'
    else if (!usernameRegex.test(username))
        alert(`${username} error`)

    var password = document.getElementById('password').value
    var error_password = document.getElementById('error-password')
    var error_comfirm_password = document.getElementById('error-confirm-password')
    var confirm_password = document.getElementById('confirm-password').value
    if (password != confirm_password) // Kiểm tra trùng khớp mật khẩu
        alert(`password dont match`)
    if (username == '' || username == null)
        error_password.innerHTML = 'Mật khẩu không được để trống'
    if (username == '' || username == null)
        error_comfirm_password.innerHTML = 'Nhập lại mật khẩu không được để trống'

    var email = document.getElementById('email').value
    var error_email = document.getElementById('error-email')
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Kiểm tra định dạng email.
    if (email == '' || email == null)
        error_email.innerHTML = 'Email không được để trống'
    else if (!emailRegex.test(email))
        alert(`${email} error`)

    var phone = document.getElementById('phone').value
    var error_phone = document.getElementById('error-phone')
    var phoneRegex = /0\d{9}/;
    if (phone == '' || phone == null)
        error_fullname.innerHTML = 'Số điện thoại không được để trống'
    else if (!phoneRegex.test(phone))
        alert(`${phone} error`)

    var birthdate = document.getElementById('birthdate').value
    var error_birthdate = document.getElementById('error-birthdate')
    var birthdateRegex = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(196[7-9]|19[7-9]\d|200[0-7])$/;  // dd/mm/yyyy // 1967 - 2007
    if (birthdate == '' || birthdate == null)
        error_birthdate.innerHTML = 'Ngày sinh không được để trống'
    else if (!birthdateRegex.test(birthdate))
        alert(`${birthdate} error`)

}