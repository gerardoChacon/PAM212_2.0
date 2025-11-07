function verificarUsuario(usuario) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (usuario === "Admin") { 
                resolve(`Acceso concedido. Bienvendio ${usuario}`);
            } else {
                reject(`Acceso denegado ${usuario} no es un usario`);
            }
        }, 50);
    });
}

verificarUsuario("Admin")
    .then(res => console.log(res))
    .catch(err => console.error(err)); 

verificarUsuario("admin")
    .then(res => console.log(res))
    .catch(err => console.error(err)); 
