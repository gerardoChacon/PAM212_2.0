let simularPeticionAPI = new Promise((resolve) => {
    setTimeout(()=>{
        resolve('datos'); 
    }, 5000);
});

(async function obtenerDatos(){
    let resultado = await simularPeticionAPI;
    console.log(resultado);
})();
