$(document).ready(function() {

    /*
    FUNCION PARA SOLO ESCRIBIR NUMEROS 
    $('#numeroTarjeta').on('input', function() {
         this.value = this.value.replace(/[^0-9]/g, '');
     });
    
    FUNCION PARA SOLO ESCRIBIR LETRAS
    $('#nombre').on('input', function() {
        this.value = this.value.replace(/[^a-zA-Z/ ]/g, '');
    });*/



    $("#formulario").submit(function() {
        //variables vacias
        var pais = "";
        var nombre = "";
        var apellido = "";
        var numeroTarjeta = "";
        var tarjetaMarca = "";
        var mes = "";
        var año = "";
        var csc = "";
        var direccion1 = "";
        var codigoPostal = "";
        var ciudad = "";
        var provincia = "";
        var telefono = "";
        var correo = "";
        var sum = 0;
        var ano = (new Date).getFullYear();



        //validacion del pais
        pais = $("#pais").val();

        if (pais === '') {
            alert('Debe seleccionar su pais');
            return false;
        }

        //validacion del nombre
        nombre = $("#nombre").val().trim();

        if ((nombre.length < 5) || (nombre.length > 10)) {
            alert("El valor escrito en su nombre es inexistente o incorrecto. Por favor digitar un valor entre 5 y 10 caracteres sin espacio");
            return false;
        }

        for (var i = 0; i < nombre.length; i++) {
            var caracter = nombre.charAt(i);
            if ((caracter == "0") || (caracter == "1") || (caracter == "2") || (caracter == "3") || (caracter == "4") || (caracter == "5") || (caracter == "6") || (caracter == "7") || (caracter == "8") || (caracter == "9")) {
                alert("No se admiten numeros en el campo nombre");
                return false;
            }
        }

        //validacion del apellido = nombre

        apellido = $("#apellido").val().trim();

        if ((apellido.length < 5) || (apellido.length > 12)) {
            alert("El valor escrito en su apellido es inexistente o incorrecto. Por favor digitar un valor entre 5 y 10 caracteres sin espacio");
            return false;
        }

        for (var i = 0; i < apellido.length; i++) {
            var caracter = apellido.charAt(i);
            if (caracter == " ") {
                alert("No se admiten espacios en el campo apellido");
                return false;
            }
        }

        //validacion del numero de la tarjeta
        numeroTarjeta = $("#numeroTarjeta").val().trim().replace(' ', '');

        if ((isNaN(numeroTarjeta)) || (numeroTarjeta.length != 16)) {
            alert("El numero de tarjeta debe ser digitado en valores numericos y con un maximo de 16 digitos");
            return false;
        }


        //validacion del numero del tipo de tarjeta

        if ($("input[name='tarjetaMarca']:radio").is(':checked')) {
            tarjetaMarca = $('input:radio[name=tarjetaMarca]:checked').val();
            console.log(tarjetaMarca);
        } else {
            alert("Seleccione un tipo de tarjeta");
            return false;
        }

        //validacion del mes y el año
        mes = $("#mes").val().trim().replace(' ', '');


        if ((isNaN(mes)) || (mes.length != 2) || (mes < 1) || (mes > 12)) {
            alert("El mes no fue digitado o esta incorrecto. Por favor digitar el numero como esta en su tarjeta. Ej '05'. ");
            return false;
        }

        año = $("#año").val().trim().replace(' ', '');

        sum = parseInt(año) + 2000;
        if ((isNaN(año)) || (año.length != 2) || (sum < ano)) {
            alert("El año no fue digitado o esta incorrecto por favor digitar el numero como esta en su tarjeta. Ej '20'. ");
            return false;
        }

        //validacion del csc
        csc = $("#csc").val().trim().replace(' ', '');


        if ((isNaN(csc)) || (csc.length != 3)) {
            alert("El csc o cvv no fue digitado o esta incorrecto. Por favor dar click en que es esto para mas informacion. ");
            return false;

        }

        //validacion del direccion
        direccion1 = $("#direccion1").val().trim();

        if ((direccion1.length < 5) || (direccion1.length > 40)) {
            alert("Su direccion es inexistente o incorrecto. Por favor digitar un valor entre 5 y 40 caracteres");
            return false;
        }

        //validacion del codigo postal
        codigoPostal = $("#codigoPostal").val().trim().replace(' ', '');

        if ((isNaN(codigoPostal)) || (codigoPostal.length != 5)) {
            alert("El codigo postal no fue digitado o esta incorrecto. Por favor digitar su codigo postal de 5 digitos.");
            return false;
        }

        //validacion de ciudad
        ciudad = $("#ciudad").val().trim();

        if (ciudad.length > 20) {
            alert("Esta ciudad es inexistente o incorrecta, por favor digitar el nombre correcto");
            return false;
        }

        //validacion de la provincia
        provincia = $("#provincia").val();

        if (provincia === '') {
            alert('Debe seleccionar su provincia');
            return false;
        }

        //validacion del codigo postal
        telefono = $("#telefono").val().trim().replace(' ', '');

        if ((isNaN(telefono)) || (telefono.length != 10)) {
            alert("El telefono no fue digitado o esta incorrecto por favor digitar su tu umero telefonico de 10 digitos.");
            return false;

        }

        //validacion de ciudad
        correo = $("#correo").val().trim();

        if (correo.length < 1) {
            alert("Este correo es inexistente o incorrecto, por favor digitar un correo valido por ejemplo Isend@hotmail.com.");
            return false;
        }

        alert("Gracias por su contribucion.");
        return true;
    });
});