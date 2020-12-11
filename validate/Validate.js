const validate = require('validate.js');


const emailValidate = (email) => {
    let rules = {
        presence: true,
        email : true
    }
    let validation = validate.single(email, rules);
    return validation === undefined;
};

const passwordValidation = (password) => {
    let rules = {
        presence: true,
        length : {
            minimum : 8,
            message: "Password must be at least 8 digits"
        },
    }
    let validation = validate.single(password, rules);
    return validation === undefined
}

export {
    emailValidate,
    passwordValidation,
  
}
