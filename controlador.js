function RecibirCredenciales(nombre,correo,contrasena,plan,callback){

    setTimeout(function(){

        let usuario={

            nombre:nombre,
            correo:correo,
            contrasena:contrasena,
            plan:plan

        }

        callback(usuario)
    },10000)


}

RecibirCredenciales(`Valentina`,`valennzapata@gmail.com`,`valentina123`,`mensual`,function(usuario){
    console.log(`Hola ${usuario.nombre}, acabas te activar tu cuenta ${usuario.plan} de HBO`)
})