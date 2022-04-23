fn_ocultarEtiquetas();

function fn_ocultarEtiquetas() {

    $('#lbl_rut').hide();

    $('#lbl_rut2').hide();

    $('#lbl_nombre').hide();

    $('#lbl_appaterno').hide();

    $('#lbl_apmaterno').hide();

    $('#lbl_telefono').hide();

    $('#lbl_correo').hide();

    $('#lbl_direccion').hide();

    $('#lbl_numero').hide();

    $('#lbl_comuna').hide();

    $('#lbl_fecha').hide();

    $('#lbl_contrasena').hide();

    $('#lbl_contrasena2').hide();
}


function fn_campoVacio() {

    var rut = $('#txt_rut').val();
    var nombre = $('#txt_nombre').val();
    var appaterno = $('#txt_appaterno').val();
    var apmaterno = $('#txt_apmaterno').val();
    var telefono = $('#txt_telefono').val();
    var correo = $('#txt_correo').val();
    var direccion = $('#txt_direccion').val();
    var numero = $('#txt_numero').val();
    var comuna = $('#txt_comuna').val();
    var fecha = $('#txt_fecha_nac').val();
    var contrasena = $('#txt_contrasena').val();
    var contrasena2 = $('#txt_contrasena2').val();


    if (rut == "") {
        $('#lbl_rut').show();
        $('#txt_rut').addClass('is-invalid');
    } else {
        $('#lbl_rut').hide();
        $('#txt_rut').removeClass('is-invalid');
        $('#txt_rut').addClass('is-valid');
    }

    if (nombre == "") {
        $('#lbl_nombre').show();
        $('#txt_nombre').addClass('is-invalid');
    } else {
        $('#lbl_nombre').hide();
        $('#txt_nombre').removeClass('is-invalid');
        $('#txt_nombre').addClass('is-valid');
    }

    if (appaterno == "") {
        $('#lbl_appaterno').show();
        $('#txt_appaterno').addClass('is-invalid');
    } else {
        $('#lbl_appaterno').hide();
        $('#txt_appaterno').removeClass('is-invalid');
        $('#txt_appaterno').addClass('is-valid');
    }

    if (apmaterno == "") {
        $('#lbl_apmaterno').show();
        $('#txt_apmaterno').addClass('is-invalid');
    } else {
        $('#lbl_apmaterno').hide();
        $('#txt_apmaterno').removeClass('is-invalid');
        $('#txt_apmaterno').addClass('is-valid');
    }

    if (telefono == "") {
        $('#lbl_telefono').show();
        $('#txt_telefono').addClass('is-invalid');
    } else {
        $('#lbl_telefono').hide();
        $('#txt_telefono').removeClass('is-invalid');
        $('#txt_telefono').addClass('is-valid');
    }

    if (correo == "") {
        $('#lbl_correo').show();
        $('#txt_correo').addClass('is-invalid');
    } else {
        $('#lbl_correo').hide();
        $('#txt_correo').removeClass('is-invalid');
        $('#txt_correo').addClass('is-valid');
    }

    if (direccion == "") {
        $('#lbl_direccion').show();
        $('#txt_direccion').addClass('is-invalid');
    } else {
        $('#lbl_direccion').hide();
        $('#txt_direccion').removeClass('is-invalid');
        $('#txt_direccion').addClass('is-valid');
    }

    if (numero == "") {
        $('#lbl_numero').show();
        $('#txt_numero').addClass('is-invalid');
    } else {
        $('#lbl_numero').hide();
        $('#txt_numero').removeClass('is-invalid');
        $('#txt_numero').addClass('is-valid');
    }

    if (comuna == "Seleccione") {
        $('#lbl_comuna').show();
        $('#txt_comuna').addClass('is-invalid');
    } else {
        $('#lbl_comuna').hide();
        $('#txt_comuna').removeClass('is-invalid');
        $('#txt_comuna').addClass('is-valid');
    }

    if (fecha == "") {
        $('#lbl_fecha').show();
        $('#txt_fecha_nac').addClass('is-invalid');
    } else {
        $('#lbl_fecha').hide();
        $('#txt_fecha_nac').removeClass('is-invalid');
        $('#txt_fecha_nac').addClass('is-valid');
    }

    if (contrasena == "") {
        $('#lbl_contrasena').show();
        $('#txt_contrasena').addClass('is-invalid');
    } else {
        $('#lbl_contrasena').hide();
        $('#txt_contrasena').removeClass('is-invalid');
        $('#txt_contrasena').addClass('is-valid');
    }

    if (contrasena2 == "") {
        $('#lbl_contrasena2').show();
        $('#txt_contrasena2').addClass('is-invalid');
    } else {
        $('#lbl_contrasena2').hide();
        $('#txt_contrasena2').removeClass('is-invalid');
        $('#txt_contrasena2').addClass('is-valid');
    }
}


function fn_textoCampos() {
    var rut = $('#txt_rut').val();
    var nombre = $('#txt_nombre').val();
    var appaterno = $('#txt_appaterno').val();
    var apmaterno = $('#txt_apmaterno').val();
    var telefono = $('#txt_telefono').val();
    var correo = $('#txt_correo').val();
    var direccion = $('#txt_direccion').val();
    var numero = $('#txt_numero').val();
    var comuna = $('#txt_comuna').val();
    var fecha = $('#txt_fecha_nac').val();
    var contrasena = $('#txt_contrasena').val();
    var contrasena2 = $('#txt_contrasena2').val();

    console.log(rut, nombre, appaterno, apmaterno)
}

var Fn = {
    // Valida el rut con su cadena completa "XXXXXXXX-X"
    validaRut: function (rutCompleto) {
        if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto))
            return false;
        var tmp = rutCompleto.split('-');
        var digv = tmp[1];
        var rut = tmp[0];
        if (digv == 'K') digv = 'k';
        return (Fn.dv(rut) == digv);
    },
    dv: function (T) {
        var M = 0, S = 1;
        for (; T; T = Math.floor(T / 10))
            S = (S + T % 10 * (9 - M++ % 6)) % 11;
        return S ? S - 1 : 'k';
    }
}

$("#btnvalidar").click(function () {
    if (Fn.validaRut($("#txt_rut").val())) {
        console.log('rut valido');
        $('#lbl_rut2').hide();
        $('#txt_rut').removeClass('is-invalid');
        $('#txt_rut').addClass('is-valid');
    }
    else if ($("#txt_rut").val() == '') {
        $('#lbl_rut2').hide();
    }
    else {
        console.log('rut invalido');
        $('#lbl_rut2').show();
        $('#txt_rut').addClass('is-invalid');
    }
});
dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
date = new Date();
anno = date.getFullYear();
mes = meses[date.getMonth()];
dia = date.getDate();
nombreDia = dias[date.getDay()];
document.getElementById("fecha_actual").innerHTML = nombreDia + ' ' + dia + " de " + mes + " " + anno;

/*
var ApiUrl = "https://apis.digital.gob.cl/dpa/regiones";

let comunasApi = ApiUrl + '/' + '13' + '/comunas';

fetch(comunasApi).then(function (response) {
    return response.json();
}).then(function (comunas) {
    var gComunas = 0;
    var htmlComuna = '<option value="sin-comuna">Seleccione Comuna</option>';
    $.each(comunas, function () {
        htmlComuna = htmlComuna + '<option value="' + comunas[gComunas].codigo + '">' + comunas[gComunas].nombre + '</option>';
        gComunas++;
    });
    selectComunas.html(htmlComuna);
}).catch(function (error) {
    console.log('Request Comunas failed: ', error);
});
*/

/*
function fn_guardarConsultorio() {
    if (this.item === undefined) {


        var mysqlConf = import('./database').mysql_pool;
        var id_consultorio = $('#txt_rut').val();
        var nombre = $('#txt_nombre').val();

        mysqlConf.getConnection(function (err, connection) {
            connection.query('{select * from cesfam}', [{ FIELDS }], function (err, rows) {
                connection.release();   //---> don't forget the connection release.
            });
        });
    }
}*/
/*
const connection = require('./database');




*/
/*
const algo = require("./database.js");*/


/*
var mysql = require(["mysql"], function (mysql) {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'mydb'
    });*/
/*
function fn_query() {
    require(["./scripts/database.js"], function (select) {
        console.log('prueba 1')
    }
    )
}*/

/*
algo.select('cesfam')*/


