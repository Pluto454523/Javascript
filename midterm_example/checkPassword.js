function checkPassword(password) {
    let hasUppercase = false;
    let hasLowercase = false;
    let hasNumber = false;
    let hasSpecialChar = false
    let result = ""

    if (password.length < 8) {
        returesultrn += "Password must be at least 8 characters long.";
    }

    for (let i = 0; i < password.length; i++) {
        if (password[i] >= 'A' && password[i] <= 'Z') {
            hasUppercase = true;
        } else {
            returesultrn += "Password not contain uppercase letter.";
        }
        if (password[i] >= 'a' && password[i] <= 'z') {
            hasLowercase = true;
        } 
        if (password[i] >= '0' && password[i] <= '9') {
            hasNumber = true;
        }
    }

    if (!hasUppercase || !hasLowercase || !hasNumber) {
        return "Password must contain at least one uppercase letter, one lowercase letter, and one number.";
    }

    return "Password is valid.";
}

checkPassword("1234567@Az8")
// checkPassword("1234567@AA80@")
// checkPassword("1234567@Az8")
