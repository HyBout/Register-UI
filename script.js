function validateForm() {

    var fullnameRegex = /^[A-Z]/; // Chữ đầu tiên phải viết hoa
    var usernameRegex = /^[a-zA-Z][a-zA-Z0-9\_]+$/; // Chỉ chứa ký tự, ký số và dấu gạch dưới
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Kiểm tra định dạng email.
    var birthdateRegex = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(196[7-9]|19[7-9]\d|200[0-7])$/;  // dd/mm/yyyy // 1967 - 2007
    var phoneRegex = /0\d{9}/;

    var fullname = document.getElementById('fullname').value
    var username = document.getElementById('username').value
    var email = document.getElementById('email').value
    var birthdate = document.getElementById('birthdate').value
    var phone = document.getElementById('phone').value


    var error_fullname = document.getElementById('error-fullname')
    var error_username = document.getElementById('error-username')
    var error_email = document.getElementById('error-email')
    var error_phone = document.getElementById('error-phone')
    var error_birthdate = document.getElementById('error-birthdate')


    validateField(fullname, error_fullname, fullnameRegex, 'Họ tên')
    validateField(username, error_username, usernameRegex, 'Tên đăng nhập')
    validateField(email, error_email, emailRegex, 'Email')
    validateField(phone, error_phone, phoneRegex, 'Số điện thoại')
    validateField(birthdate, error_birthdate, birthdateRegex, 'Ngày sinh')


    if (fullname && username && email && phone && birthdate) {
        var info = 'Đăng kí thành công với thông tin: \n'
        info += fullname + '\n' + username + '\n' + email + '\n' + phone + '\n' + birthdate
        alert(info)
    
    }


    return false

}

function validateField(input, error_input, regex, field) {
    if (input == '' || input == null) {
        error_input.innerHTML = `${field} không được để trống`
    }
    else if (!regex.test(input)) {
        error_input.innerHTML = `${field} không hợp lệ`
    }
    else {
        error_input.innerHTML = "&#10004;"
    }
    return false
}
