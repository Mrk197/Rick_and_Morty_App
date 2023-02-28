
export function validation({username, password}) {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexPwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,10}$/;
    let errors = {};
    console.log(username);
    if (username === '') {
        errors.username = "Debe ingresar un usuario";
    }
    else if (!regexEmail.test(username)) {
        errors.username = "Debe ingresar un correo válido"
    }
    else if(username.length >= 35){
        errors.username = "Longitud no válida"
    }
    else if (password === '') {
        errors.password = "Ingrese contraseña"
    } 
    else if (!regexPwd.test(password)){
        errors.password = `Debe contener: 
        *Almenos un número
        *Una mayúscula
        *Una minúscua
        *Entre 6 y 10 caracteres`
    }
    return errors;
}