class Validator{
    static validateRegister(req){
            const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            let validateEmail = emailRegexp.test(req.email);
            console.log(validateEmail)
            if(!validateEmail){
                return {status: false , message: "Invalid Email"}
            }
            let validatePassword = req.password
            let validateName = req.name
            let validatePreference = req.preferences
            if(validateEmail && validateName && validatePreference && validatePassword){
                return {status: true, message: "Input verified"}
            }else{
                return {status: false, message: "Bad request"}
            }
    }
    static validateLogin(req){
            if(!req.email || !req.password){
                return {status: false, message: "Bad request"}
            }            
            else{
                return {status: true, message: "Correct credentials"}
            }
    }
}

module.exports = Validator