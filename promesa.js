function RecibirCredenciales(nombre,correo,contrasena,plan){

    let promesa= new Promise(function(resolve,reject){

        setTimeout(function(){

            let usuario={
    
                nombre:nombre,
                correo:correo,
                contrasena:contrasena,
                plan:plan
    
            }
            console.log("oe")
           reject("Bienvenido HBO " + usuario.nombre)
    
        },3000)

      

    })

    return promesa

}


RecibirCredenciales(`Valentina`,`valennzapata@gmail.com`,`valentina123`,`mensual`)
.catch  (function(respuesta){

    console.log(respuesta)

}) 
