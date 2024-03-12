export function validateEmail (email:string) {
    const isValidEmail = /^([a-zA-Z0-9_\.\-])+\@@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email);

    return isValidEmail
}