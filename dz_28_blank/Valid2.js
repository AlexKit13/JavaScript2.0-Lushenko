class Valid2 extends Valid {
    constructor(email, password, isValid, emailError, passwordError) {
        super(email, password, isValid);
        this.emaiError = emailError;
        this.passwordError = passwordError;
    }
    validate() {
        if () {

        }else {

        }
        return `${this.isValid} ${this.emailError} ${this.passwordError}`;
    }
}

const valid3 = new Valid2('','123456789');
valid3.validate();
console.log(valid3);
