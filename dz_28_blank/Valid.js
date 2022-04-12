class Valid {
    constructor(email, password, isValid) {
        this.email = email;
        this.password = password;
        this.isValid = isValid;
    }
    validate() {
        if (this.password.length < 6) {
            return this.isValid = false;
        }else {
            return this.isValid = true;
        }
    }
}

const valid = new Valid("TheAl", "12345");
valid.validate();
console.log(valid)

const valid2 = new Valid("TheKite","1234567");
valid2.validate();
console.log(valid2);