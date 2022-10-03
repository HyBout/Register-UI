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

    if (fullname == '' || fullname == null) {
        error_fullname.innerHTML = `${fullname} không được để trống`
        return false
    }
    else if (!fullnameRegex.test(fullname)) {
        error_fullname.innerHTML = `${fullname} không hợp lệ`
        return false
    }
    else {
        error_fullname.innerHTML = "&#10004;"
    }


    if (username == '' || username == null) {
        error_username.innerHTML = `${username} không được để trống`
        return false
    }
    else if (!usernameRegex.test(username)) {
        error_username.innerHTML = `${username} không hợp lệ`
        return false
    }
    else {
        error_username.innerHTML = "&#10004;"
    }

    if (email == '' || email == null) {
        error_email.innerHTML = `${email} không được để trống`
        return false
    }
    else if (!emailRegex.test(email)) {
        error_email.innerHTML = `${email} không hợp lệ`
        return false
    }
    else {
        error_email.innerHTML = "&#10004;"
    }

    if (phone == '' || phone == null) {
        error_phone.innerHTML = `${phone} không được để trống`
        return false
    }
    else if (!phoneRegex.test(phone)) {
        error_phone.innerHTML = `${phone} không hợp lệ`
        return false
    }
    else {
        error_phone.innerHTML = "&#10004;"
    }

    if (birthdate == '' || birthdate == null) {
        error_birthdate.innerHTML = `${birthdate} không được để trống`
        return false
    }
    else if (!birthdateRegex.test(birthdate)) {
        error_birthdate.innerHTML = `${birthdate} không hợp lệ`
        return false
    }
    else {
        error_birthdate.innerHTML = "&#10004;"
    }


    if (fullname && username && email && phone && birthdate) {
        var info = 'Đăng kí thành công với thông tin: \n'
        info += fullname + '\n' + username + '\n' + email + '\n' + phone + '\n' + birthdate
        alert(info)
    }


    return false

}