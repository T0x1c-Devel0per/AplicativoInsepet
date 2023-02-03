(function () {
    "use strict";

    var cvs, ctx;
    var nodes = 6;
    var waves = [];
    var waveHeight = 60;
    var colours = ["#f80000", "#00f800", "#0000f8"];

    // Initiator function
    function init() {
        cvs = document.getElementById("canvas");
        ctx = cvs.getContext("2d");
        resizeCanvas(cvs);

        for (var i = 0; i < 3; i++) {
            waves.push(new wave(colours[i], 1, nodes));
        }

        update();
    }

    function update() {
        var fill = window.getComputedStyle(document.querySelector(".header"), null).getPropertyValue("background-color");
        ctx.fillStyle = fill;
        ctx.globalCompositeOperation = "source-over";
        ctx.fillRect(0, 0, cvs.width, cvs.height);
        ctx.globalCompositeOperation = "screen";
        for (var i = 0; i < waves.length; i++) {
            for (var j = 0; j < waves[i].nodes.length; j++) {
                bounce(waves[i].nodes[j]);
            }
            drawWave(waves[i]);
        }
        ctx.fillStyle = fill;

        requestAnimationFrame(update);
    }

    function wave(colour, lambda, nodes) {

        this.colour = colour;
        this.lambda = lambda;
        this.nodes = [];
        var tick = 1;

        for (var i = 0; i <= nodes + 2; i++) {
            var temp = [(i - 1) * cvs.width / nodes, 0, Math.random() * 200, .3];
            this.nodes.push(temp);
            console.log(temp);
        }
        console.log(this.nodes);
    }

    function bounce(nodeArr) {
        nodeArr[1] = waveHeight / 2 * Math.sin(nodeArr[2] / 20) + cvs.height / 2;
        nodeArr[2] = nodeArr[2] + nodeArr[3];

    }

    function drawWave(obj) {

        var diff = function (a, b) {
            return (b - a) / 2 + a;
        }

        ctx.fillStyle = obj.colour;
        ctx.beginPath();
        ctx.moveTo(0, cvs.height);
        ctx.lineTo(obj.nodes[0][0], obj.nodes[0][1]);

        for (var i = 0; i < obj.nodes.length; i++) {

            if (obj.nodes[i + 1]) {
                ctx.quadraticCurveTo(
                    obj.nodes[i][0], obj.nodes[i][1],
                    diff(obj.nodes[i][0], obj.nodes[i + 1][0]), diff(obj.nodes[i][1], obj.nodes[i + 1][1])
                );
            }
            else {
                ctx.lineTo(obj.nodes[i][0], obj.nodes[i][1]);
                ctx.lineTo(cvs.width, cvs.height);
            }
        }
        ctx.closePath();
        ctx.fill();
    }

    function drawNodes(array) {
        ctx.strokeStyle = "#888";

        for (var i = 0; i < array.length; i++) {
            ctx.beginPath();
            ctx.arc(array[i][0], array[i][1], 4, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.stroke();
        }

    }

    function drawLine(array) {
        ctx.strokeStyle = "#888";

        for (var i = 0; i < array.length; i++) {

            if (array[i + 1]) {
                ctx.lineTo(array[i + 1][0], array[i + 1][1]);
            }
        }

        ctx.stroke();
    }

    function resizeCanvas(canvas, width, height) {

        if (width && height) {
            canvas.width = width;
            canvas.height = height;
        }
        else {

            if (window.innerWidth > 1920) {
                canvas.width = window.innerWidth;
            }
            else {
                canvas.width = 1920;
            }

            canvas.height = waveHeight;
        }
    }

    document.addEventListener("DOMContentLoaded", init, false);
})();
/*************************************ValidarFormulario****************************************/
function validar() {
    if ($('#razonSocial').val().length == 0) {
        return false;
    }
    else if ($('#fecha').val().length == 0) {
        return false;
    }
    else if ($('#ciudad').val().length == 0) {
        return false;
    }
    else if ($('#bandera').val().length == 0) {
        return false;
    }
    else if ($('#eds').val().length == 0) {
        return false;
    }
    else if ($('#tecnicos').val().length == 0) {
        return false;
    }
    else if ($('#ott').val().length == 0) {
        return false;
    }
    
    else{
        document.getElementById("seccion1").style.display = "none";
        document.getElementById("seccionApp02").style.display = "block";
    }
}
function ocultarSeccion2() {
    document.getElementById("seccion2").style.display = "none";
}
function mostrarSeccion1() {
    document.getElementById("seccion1").style.display = "block";
}
/********************************Mostar Divs***************************************************/
function showContent1() {
    element = document.getElementById("tablaDispensadores");
    check = document.getElementById("dispensadores");
    if (check.checked) {
        element.style.display = 'block';
    }
    else {
        element.style.display = 'none';
    }
}
function showContent2() {
    element = document.getElementById("tablaTanques");
    check = document.getElementById("tanque");
    if (check.checked) {
        element.style.display = 'block';
    }
    else {
        element.style.display = 'none';
    }
}
function showContent3() {
    element = document.getElementById("consolaVeeder");
    check = document.getElementById("veeder");
    if (check.checked) {
        element.style.display = 'block';
    }
    else {
        element.style.display = 'none';
    }
}
function showContent4() {
    element = document.getElementById("tablaSistemasnx");
    check = document.getElementById("sistemasnx");
    if (check.checked) {
        element.style.display = 'block';
    }
    else {
        element.style.display = 'none';
    }
}
/****************firstDiv*******************/
function showContent5() {
    element = document.getElementById("tablaDispensadores1");
    check = document.getElementById("dispensadores1");
    if (check.checked) {
        element.style.display = 'block';
    }
    else {
        element.style.display = 'none';
    }
}
function showContent6() {
    element = document.getElementById("tablaTanques1");
    check = document.getElementById("tanque1");
    if (check.checked) {
        element.style.display = 'block';
    }
    else {
        element.style.display = 'none';
    }
}
function showContent7() {
    element = document.getElementById("consolaVeeder1");
    check = document.getElementById("veeder1");
    if (check.checked) {
        element.style.display = 'block';
    }
    else {
        element.style.display = 'none';
    }
}
function showContent8() {
    element = document.getElementById("tablaSistemasnx1");
    check = document.getElementById("sistemasnx1");
    if (check.checked) {
        element.style.display = 'block';
    }
    else {
        element.style.display = 'none';
    }
}
/*********************secondDiv******************************/
function showContent9() {
    element = document.getElementById("tablaDispensadores2");
    check = document.getElementById("dispensadores2");
    if (check.checked) {
        element.style.display = 'block';
    }
    else {
        element.style.display = 'none';
    }
}
function showContent10() {
    element = document.getElementById("tablaTanques2");
    check = document.getElementById("tanque2");
    if (check.checked) {
        element.style.display = 'block';
    }
    else {
        element.style.display = 'none';
    }
}
function showContent11() {
    element = document.getElementById("consolaVeeder2");
    check = document.getElementById("veeder2");
    if (check.checked) {
        element.style.display = 'block';
    }
    else {
        element.style.display = 'none';
    }
}
function showContent12() {
    element = document.getElementById("tablaSistemasnx2");
    check = document.getElementById("sistemasnx2");
    if (check.checked) {
        element.style.display = 'block';
    }
    else {
        element.style.display = 'none';
    }
}
/********************NavBar**************************/
function NavBar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("myTopnav").style.width = "100%";
        document.getElementById("header").style.position = "fixed";
        document.getElementById("header").style.top = "0%";
    } else {
        document.getElementById("myTopnav").style.width = "80%";
        document.getElementById("header").style.position = "fixed";
        document.getElementById("header").style.top = "2rem";
    }
}
/*********************************Fotos**********************************/

function initImageUpload(box) {
    let uploadField = box.querySelector('.image-upload');

    uploadField.addEventListener('change', getFile);

    function getFile(e) {
        let file = e.currentTarget.files[0];
        checkType(file);
    }

    function previewImage(file) {
        let thumb = box.querySelector('.js--image-preview'),
            reader = new FileReader();

        reader.onload = function () {
            thumb.style.backgroundImage = 'url(' + reader.result + ')';
        }
        reader.readAsDataURL(file);
        thumb.className += ' js--no-default';
    }

    function checkType(file) {
        let imageType = /image.*/;
        if (!file.type.match(imageType)) {
            throw 'Datei ist kein Bild';
        } else if (!file) {
            throw 'Kein Bild gewählt';
        } else {
            previewImage(file);
        }
    }

}

// initialize box-scope
var boxes = document.querySelectorAll('.box');

for (let i = 0; i < boxes.length; i++) {
    let box = boxes[i];
    initDropEffect(box);
    initImageUpload(box);
}



/// drop-effect
function initDropEffect(box) {
    let area, drop, areaWidth, areaHeight, maxDistance, dropWidth, dropHeight, x, y;

    // get clickable area for drop effect
    area = box.querySelector('.js--image-preview');
    area.addEventListener('click', fireRipple);

    function fireRipple(e) {
        area = e.currentTarget
        // create drop
        if (!drop) {
            drop = document.createElement('span');
            drop.className = 'drop';
            this.appendChild(drop);
        }
        // reset animate class
        drop.className = 'drop';

        // calculate dimensions of area (longest side)
        areaWidth = getComputedStyle(this, null).getPropertyValue("width");
        areaHeight = getComputedStyle(this, null).getPropertyValue("height");
        maxDistance = Math.max(parseInt(areaWidth, 10), parseInt(areaHeight, 10));

        // set drop dimensions to fill area
        drop.style.width = maxDistance + 'px';
        drop.style.height = maxDistance + 'px';

        // calculate dimensions of drop
        dropWidth = getComputedStyle(this, null).getPropertyValue("width");
        dropHeight = getComputedStyle(this, null).getPropertyValue("height");

        // calculate relative coordinates of click
        // logic: click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center
        x = e.pageX - this.offsetLeft - (parseInt(dropWidth, 10) / 2);
        y = e.pageY - this.offsetTop - (parseInt(dropHeight, 10) / 2) - 30;

        // position drop and animate
        drop.style.top = y + 'px';
        drop.style.left = x + 'px';
        drop.className += ' animate';
        e.stopPropagation();
    }
}
/**********************EditarTablas***************************/
var params = null;
var colsEdi = null;
var newColHtml = '<div class="btn-group pull-right">' +
    '<button id="bEdit" type="button" class="btn btn-sm btn-default" onclick="rowEdit(this);">' +
    '<span class="glyphicon glyphicon-pencil" > <ion-icon name="create-outline"></ion-icon></span>' +
    '</button>' +
    '<button id="bElim" type="button" class="btn btn-sm btn-default" onclick="rowElim(this);">' +
    '<span class="glyphicon glyphicon-trash" ><ion-icon name="trash-outline"></ion-icon></span>' +
    '</button>' +
    '<button id="bAcep" type="button" class="btn btn-sm btn-default" style="display:none;" onclick="rowAcep(this);">' +
    '<span class="glyphicon glyphicon-ok" ><ion-icon name="checkmark-done-outline"></ion-icon> </span>' +
    '</button>' +
    '<button id="bCanc" type="button" class="btn btn-sm btn-default" style="display:none;" onclick="rowCancel(this);">' +
    '<span class="glyphicon glyphicon-remove" ><ion-icon name="close-circle-outline"></ion-icon></span>' +
    '</button>' +
    '</div>';
var colEdicHtml = '<td name="buttons">' + newColHtml + '</td>';
function FijModoNormal(but) {
    $(but).parent().find('#bAcep').hide();
    $(but).parent().find('#bCanc').hide();
    $(but).parent().find('#bEdit').show();
    $(but).parent().find('#bElim').show();
    var $row = $(but).parents('tr');
    $row.attr('id', '');
}
function FijModoEdit(but) {
    $(but).parent().find('#bAcep').show();
    $(but).parent().find('#bCanc').show();
    $(but).parent().find('#bEdit').hide();
    $(but).parent().find('#bElim').hide();
    var $row = $(but).parents('tr');
    $row.attr('id', 'editing');
}
function ModoEdicion($row) {
    if ($row.attr('id') == 'editing') {
        return true;
    } else {
        return false;
    }
}
function rowAcep(but) {
    var $row = $(but).parents('tr');
    var $cols = $row.find('td');
    if (!ModoEdicion($row)) return;
    IterarCamposEdit($cols, function ($td) {
        var cont = $td.find('input').val();
        $td.html(cont);
    });
    FijModoNormal(but);
    params.onEdit($row);
}
function rowCancel(but) {
    var $row = $(but).parents('tr');
    var $cols = $row.find('td');
    if (!ModoEdicion($row)) return;
    IterarCamposEdit($cols, function ($td) {
        var cont = $td.find('div').html();
        $td.html(cont);
    });
    FijModoNormal(but);
}
function rowEdit(but) {
    var $row = $(but).parents('tr');
    var $cols = $row.find('td');
    if (ModoEdicion($row)) return;
    IterarCamposEdit($cols, function ($td) {
        var cont = $td.html();
        var div = '<div style="display: none;">' + cont + '</div>';
        var input = '<input class="form-control input-sm"  value="' + cont + '">';
        $td.html(div + input);
    });
    FijModoEdit(but);
}
function rowElim(but) {
    var $row = $(but).parents('tr');
    params.onBeforeDelete($row);
    $row.remove();
    params.onDelete();
}
function rowAddNew(tabId) {
    var $tab_en_edic = $("#" + tabId);
    var $filas = $tab_en_edic.find('tbody tr');

    if ($filas.length == 0) {

        var $row = $tab_en_edic.find('thead tr');
        var $cols = $row.find('th');

        var htmlDat = '';
        $cols.each(function () {
            if ($(this).attr('name') == 'buttons') {
                htmlDat = htmlDat + colEdicHtml;
            } else {
                htmlDat = htmlDat + '<td></td>';
            }
        });

        $tab_en_edic.find('tbody').append('<tr>' + htmlDat + '</tr>');
    } else {

        var $ultFila = $tab_en_edic.find('tr:last');
        $ultFila.clone().appendTo($ultFila.parent());
        $ultFila = $tab_en_edic.find('tr:last');
        var $cols = $ultFila.find('td');
        $cols.each(function () {
            if ($(this).attr('name') == 'buttons') {
            } else {
                $(this).html('');
            }
        });
    }
    params.onAdd();
}
function IterarCamposEdit($cols, tarea) {
    var n = 0;
    $cols.each(function () {
        n++;
        if ($(this).attr('name') == 'buttons') return;
        if (!EsEditable(n - 1)) return;
        tarea($(this));
    });

    function EsEditable(idx) {
        if (colsEdi == null) {
            return true;
        } else {
            for (var i = 0; i < colsEdi.length; i++) {
                if (idx == colsEdi[i]) return true;
            }
            return false;
        }
    }
}
/********************AgregarSeccionFotos**************************/
var contador = 1, count1 = 1, count2 = 1, count3 = 1, count4 = 1, count5 = 1, count6 = 1, count7 = 1, count8 = 1,count9 = 1,count10 = 1,count11 = 1;
var id1 = 3, id2 = 1;
var id3 = 3, id4 = 1;
var id5 = 3, id6 = 1;
var id7 = 3, id8 = 1;
var id9 = 3, id10 = 1;
var id11 = 3, id12 = 1;
var id13 = 3, id14 = 1;
var id15 = 3, id16 = 1;
var id17 = 3, id18 = 1;
var id19 = 3, id20 = 1;
var id21 = 3, id22 = 1;
var id23 = 3, id24 = 1;

function agregarHtlm(){
    count1++;
    let contenedor = document.querySelector('#fotosSecciones');
    let p = document.createElement('div');
    p.setAttribute("class", "container");
    p.innerHTML = `<div class="row">
                        <h1> Equipo1</h1>
                            <div class="col-6">
                                <h1 style="text-align: center;">Antes</h1>
                                <div class="container">
                                    <input type="file" id="file" accept="image/*" hidden>
                                    <div class="img-area" data-img="">
                                        <div class="form-element">
                                            <label for="file-1-`+ id1 + `" id="file-1-` + id1 +`-preview">
                                                <img src="https://bit.ly/3ubuq5o" alt="">
                                                <div>
                                                    <span>+</span>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <label class="botonLabel d-flex justify-content-center">
                                        <p style="color: white; padding-bottom: 0px;">Agregar Fotos</p>
                                        <input type="file" id="file-1-`+ id1 +`" accept="image/*">
                                    </label>
                                </div>
                            </div>
                            <div class="col-6">
                                <h1 style="text-align: center;">Despues</h1>
                                <div class="container">
                                    <input type="file" id="file" accept="image/*" hidden>
                                    <div class="img-area" data-img="">
                                        <div class="form-element">
                                            <label for="file-2-`+ id2 + `" id="file-2-` + id2 +`-preview">
                                                <img src="https://bit.ly/3ubuq5o" alt="">
                                                <div>
                                                    <span>+</span>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <label class="botonLabel d-flex justify-content-center">
                                        <p style="color: white; padding-bottom: 0px;">Agregar Fotos</p>
                                        <input type="file" id="file-2-`+id2+`" accept="image/*">
                                    </label>                                                
                                </div>
                            </div>
                            <div class="col d-flex justify-content-center contDescripcion"
                                style="display: flex; flex-direction: column; justify-content: center; padding-bottom: 170px;">
                                <div class="container">
                                    <h1>Descripción Procedimiento TANQUE #1</h1>
                                    <textarea class="textArea" placeholder="Describa el proceso que se realizado a los equipos...."></textarea>
                                </div>
                            </div>
                        </div>`;
        contenedor.appendChild(p);
    function previewBeforeUpload(id) {
        document.querySelector("#" + id).addEventListener("change", function (e) {
            if (e.target.files.size < 200){
                alert("Imagen muy pesada")

            }
            else if (e.target.files.length == 0) {
                return;
            }
            let file = e.target.files[0];
            let url = URL.createObjectURL(file);
            document.querySelector("#" + id + "-preview div").innerText = file.name;
            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-1-"+id1);
    previewBeforeUpload("file-2-"+id2);
    id1++;
    id2++;
    
}
function agregarHtlm1() {
    count1++;
    let contenedor = document.querySelector('#fotosSecciones1');
    let p = document.createElement('div');
    p.setAttribute("class", "container");
    p.innerHTML = `<div class="row">
                        <h1> Equipo1</h1>
                            <div class="col-6">
                                <h1 style="text-align: center;">Antes</h1>
                                <div class="container">
                                    <input type="file" id="file" accept="image/*" hidden>
                                    <div class="img-area" data-img="">
                                        <div class="form-element">
                                            <label for="file-3-`+ id3 + `" id="file-3-` + id3 + `-preview">
                                                <img src="https://bit.ly/3ubuq5o" alt="">
                                                <div>
                                                    <span>+</span>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <label class="botonLabel d-flex justify-content-center">
                                        <p style="color: white; padding-bottom: 0px;">Agregar Fotos</p>
                                        <input type="file" id="file-3-`+ id3 + `" accept="image/*">
                                    </label>
                                </div>
                            </div>
                            <div class="col-6">
                                <h1 style="text-align: center;">Despues</h1>
                                <div class="container">
                                    <input type="file" id="file" accept="image/*" hidden>
                                    <div class="img-area" data-img="">
                                        <div class="form-element">
                                            <label for="file-4-`+ id4 + `" id="file-4-` + id4 + `-preview">
                                                <img src="https://bit.ly/3ubuq5o" alt="">
                                                <div>
                                                    <span>+</span>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <label class="botonLabel d-flex justify-content-center">
                                        <p style="color: white; padding-bottom: 0px;">Agregar Fotos</p>
                                        <input type="file" id="file-4-`+ id4 +`" accept="image/*">
                                    </label>                                                
                                </div>
                            </div>
                            <div class="col d-flex justify-content-center contDescripcion"
                                style="display: flex; flex-direction: column; justify-content: center; padding-bottom: 170px;">
                                <div class="container">
                                    <h1>Descripción Procedimiento TANQUE #1</h1>
                                    <textarea class="textArea" placeholder="Describa el proceso que se realizado a los equipos...."></textarea>
                                </div>
                            </div>
                        </div>`;
                                    
    contenedor.appendChild(p);
    function previewBeforeUpload1(id) {
        document.querySelector("#" + id).addEventListener("change", function (e) {
            if (e.target.files.length == 0) {
                return;
            }
            let file = e.target.files[0];
            let url = URL.createObjectURL(file);
            document.querySelector("#" + id + "-preview div").innerText = file.name;
            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload1("file-3-" + id3);
    previewBeforeUpload1("file-4-" + id4);
    id3++;
    id4++;
}
function agregarHtlm2() {
    count2++
    let contenedor = document.querySelector('#fotosSecciones2');
    let p = document.createElement('div');
    p.setAttribute("class", "container");
    p.innerHTML = `<div class="row">
                        <h1> Equipo1</h1>
                            <div class="col-6">
                                <h1 style="text-align: center;">Antes</h1>
                                <div class="container">
                                    <input type="file" id="file" accept="image/*" hidden>
                                    <div class="img-area" data-img="">
                                        <div class="form-element">
                                            <label for="file-5-`+ id5 + `" id="file-5-` + id5 + `-preview">
                                                <img src="https://bit.ly/3ubuq5o" alt="">
                                                <div>
                                                    <span>+</span>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <label class="botonLabel d-flex justify-content-center">
                                        <p style="color: white; padding-bottom: 0px;">Agregar Fotos</p>
                                        <input type="file" id="file-5-`+ id5 + `" accept="image/*">
                                    </label>
                                </div>
                            </div>
                            <div class="col-6">
                                <h1 style="text-align: center;">Despues</h1>
                                <div class="container">
                                    <input type="file" id="file" accept="image/*" hidden>
                                    <div class="img-area" data-img="">
                                        <div class="form-element">
                                            <label for="file-6-`+ id6 + `" id="file-6-` + id6 + `-preview">
                                                <img src="https://bit.ly/3ubuq5o" alt="">
                                                <div>
                                                    <span>+</span>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <label class="botonLabel d-flex justify-content-center">
                                        <p style="color: white; padding-bottom: 0px;">Agregar Fotos</p>
                                        <input type="file" id="file-6-`+ id6 +`" accept="image/*">
                                    </label>                                                
                                </div>
                            </div>
                            <div class="col d-flex justify-content-center contDescripcion"
                                style="display: flex; flex-direction: column; justify-content: center; padding-bottom: 170px;">
                                <div class="container">
                                    <h1>Descripción Procedimiento TANQUE #1</h1>
                                    <textarea class="textArea" placeholder="Describa el proceso que se realizado a los equipos...."></textarea>
                                </div>
                            </div>
                        </div>`;
    contenedor.appendChild(p);
    function previewBeforeUpload(id) {
        document.querySelector("#" + id).addEventListener("change", function (e) {
            if (e.target.files.size < 200) {
                alert("Imagen muy pesada")

            }
            else if (e.target.files.length == 0) {
                return;
            }
            let file = e.target.files[0];
            let url = URL.createObjectURL(file);
            document.querySelector("#" + id + "-preview div").innerText = file.name;
            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-5-" + id5);
    previewBeforeUpload("file-6-" + id6);
    id5++;
    id6++;

}
function agregarHtlm3() {
    count3++
    let contenedor = document.querySelector('#tabElectrico1');
    let p = document.createElement('div');
    p.setAttribute("class", "container");
    p.innerHTML = `<div class="row">
                        <h1> Equipo1</h1>
                            <div class="col-6">
                                <h1 style="text-align: center;">Antes</h1>
                                <div class="container">
                                    <input type="file" id="file" accept="image/*" hidden>
                                    <div class="img-area" data-img="">
                                        <div class="form-element">
                                            <label for="file-7-`+ id7 + `" id="file-7-` + id7 + `-preview">
                                                <img src="https://bit.ly/3ubuq5o" alt="">
                                                <div>
                                                    <span>+</span>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <label class="botonLabel d-flex justify-content-center">
                                        <p style="color: white; padding-bottom: 0px;">Agregar Fotos</p>
                                        <input type="file" id="file-7-`+ id7 + `" accept="image/*">
                                    </label>
                                </div>
                            </div>
                            <div class="col-6">
                                <h1 style="text-align: center;">Despues</h1>
                                <div class="container">
                                    <input type="file" id="file" accept="image/*" hidden>
                                    <div class="img-area" data-img="">
                                        <div class="form-element">
                                            <label for="file-8-`+ id8 + `" id="file-8-` + id8 + `-preview">
                                                <img src="https://bit.ly/3ubuq5o" alt="">
                                                <div>
                                                    <span>+</span>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <label class="botonLabel d-flex justify-content-center">
                                        <p style="color: white; padding-bottom: 0px;">Agregar Fotos</p>
                                        <input type="file" id="file-8-`+ id8 +`" accept="image/*">
                                    </label>                                                
                                </div>
                            </div>
                            <div class="col d-flex justify-content-center contDescripcion"
                                style="display: flex; flex-direction: column; justify-content: center; padding-bottom: 170px;">
                                <div class="container">
                                    <h1>Descripción Procedimiento TANQUE #1</h1>
                                    <textarea class="textArea" placeholder="Describa el proceso que se realizado a los equipos...."></textarea>
                                </div>
                            </div>
                        </div>`;
    contenedor.appendChild(p);
    function previewBeforeUpload(id) {
        document.querySelector("#" + id).addEventListener("change", function (e) {
            if (e.target.files.size < 200) {
                alert("Imagen muy pesada")

            }
            else if (e.target.files.length == 0) {
                return;
            }
            let file = e.target.files[0];
            let url = URL.createObjectURL(file);
            document.querySelector("#" + id + "-preview div").innerText = file.name;
            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-7-" + id7);
    previewBeforeUpload("file-8-" + id8);
    id7++;
    id8++;
}
function agregarHtlm4() {
    count4++
    let contenedor = document.querySelector('#fotosSecciones2-1');
    let p = document.createElement('div');
    p.setAttribute("class", "container");
    p.innerHTML = `<div class="row">
                        <h1> Equipo1</h1>
                            <div class="col-6">
                                <h1 style="text-align: center;">Antes</h1>
                                <div class="container">
                                    <input type="file" id="file" accept="image/*" hidden>
                                    <div class="img-area" data-img="">
                                        <div class="form-element">
                                            <label for="file-9-`+ id9 + `" id="file-9-` + id9 + `-preview">
                                                <img src="https://bit.ly/3ubuq5o" alt="">
                                                <div>
                                                    <span>+</span>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <label class="botonLabel d-flex justify-content-center">
                                        <p style="color: white; padding-bottom: 0px;">Agregar Fotos</p>
                                        <input type="file" id="file-9-`+ id9 + `" accept="image/*">
                                    </label>
                                </div>
                            </div>
                            <div class="col-6">
                                <h1 style="text-align: center;">Despues</h1>
                                <div class="container">
                                    <input type="file" id="file" accept="image/*" hidden>
                                    <div class="img-area" data-img="">
                                        <div class="form-element">
                                            <label for="file-10-`+ id10 + `" id="file-10-` + id10 + `-preview">
                                                <img src="https://bit.ly/3ubuq5o" alt="">
                                                <div>
                                                    <span>+</span>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <label class="botonLabel d-flex justify-content-center">
                                        <p style="color: white; padding-bottom: 0px;">Agregar Fotos</p>
                                        <input type="file" id="file-10-`+ id10 + `" accept="image/*">
                                    </label>                                                
                                </div>
                            </div>
                            <div class="col d-flex justify-content-center contDescripcion"
                                style="display: flex; flex-direction: column; justify-content: center; padding-bottom: 170px;">
                                <div class="container">
                                    <h1>Descripción Procedimiento TANQUE #1</h1>
                                    <textarea class="textArea" placeholder="Describa el proceso que se realizado a los equipos...."></textarea>
                                </div>
                            </div>
                        </div>`;
    contenedor.appendChild(p);
    function previewBeforeUpload(id) {
        document.querySelector("#" + id).addEventListener("change", function (e) {
            if (e.target.files.size < 200) {
                alert("Imagen muy pesada")

            }
            else if (e.target.files.length == 0) {
                return;
            }
            let file = e.target.files[0];
            let url = URL.createObjectURL(file);
            document.querySelector("#" + id + "-preview div").innerText = file.name;
            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-9-" + id9);
    previewBeforeUpload("file-10-" + id10);
    id9++;
    id10++;
}
function agregarHtlm5() {
    count5++
    let contenedor = document.querySelector('#fotosSecciones2-2');
    let p = document.createElement('div');
    p.setAttribute("class", "container");
    p.innerHTML = `<div class="row">
                        <h1> Equipo1</h1>
                            <div class="col-6">
                                <h1 style="text-align: center;">Antes</h1>
                                <div class="container">
                                    <input type="file" id="file" accept="image/*" hidden>
                                    <div class="img-area" data-img="">
                                        <div class="form-element">
                                            <label for="file-11-`+ id11 + `" id="file-11-` + id11 + `-preview">
                                                <img src="https://bit.ly/3ubuq5o" alt="">
                                                <div>
                                                    <span>+</span>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <label class="botonLabel d-flex justify-content-center">
                                        <p style="color: white; padding-bottom: 0px;">Agregar Fotos</p>
                                        <input type="file" id="file-11-`+ id11 + `" accept="image/*">
                                    </label>
                                </div>
                            </div>
                            <div class="col-6">
                                <h1 style="text-align: center;">Despues</h1>
                                <div class="container">
                                    <input type="file" id="file" accept="image/*" hidden>
                                    <div class="img-area" data-img="">
                                        <div class="form-element">
                                            <label for="file-12-`+ id12 + `" id="file-12-` + id12 + `-preview">
                                                <img src="https://bit.ly/3ubuq5o" alt="">
                                                <div>
                                                    <span>+</span>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <label class="botonLabel d-flex justify-content-center">
                                        <p style="color: white; padding-bottom: 0px;">Agregar Fotos</p>
                                        <input type="file" id="file-12-`+ id12 + `" accept="image/*">
                                    </label>                                                
                                </div>
                            </div>
                            <div class="col d-flex justify-content-center contDescripcion"
                                style="display: flex; flex-direction: column; justify-content: center; padding-bottom: 170px;">
                                <div class="container">
                                    <h1>Descripción Procedimiento TANQUE #1</h1>
                                    <textarea class="textArea" placeholder="Describa el proceso que se realizado a los equipos...."></textarea>
                                </div>
                            </div>
                        </div>`;
    contenedor.appendChild(p);
    function previewBeforeUpload(id) {
        document.querySelector("#" + id).addEventListener("change", function (e) {
            if (e.target.files.size < 200) {
                alert("Imagen muy pesada")

            }
            else if (e.target.files.length == 0) {
                return;
            }
            let file = e.target.files[0];
            let url = URL.createObjectURL(file);
            document.querySelector("#" + id + "-preview div").innerText = file.name;
            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-11-" + id11);
    previewBeforeUpload("file-12-" + id12);
    id11++;
    id12++;
}
function agregarHtlm6() {
    count6++
    let contenedor = document.querySelector('#fotosSecciones2-3');
    let p = document.createElement('div');
    p.setAttribute("class", "container");
    p.innerHTML = `<div class="row">
                        <h1> Equipo1</h1>
                            <div class="col-6">
                                <h1 style="text-align: center;">Antes</h1>
                                <div class="container">
                                    <input type="file" id="file" accept="image/*" hidden>
                                    <div class="img-area" data-img="">
                                        <div class="form-element">
                                            <label for="file-13-`+ id13 + `" id="file-13-` + id13 + `-preview">
                                                <img src="https://bit.ly/3ubuq5o" alt="">
                                                <div>
                                                    <span>+</span>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <label class="botonLabel d-flex justify-content-center">
                                        <p style="color: white; padding-bottom: 0px;">Agregar Fotos</p>
                                        <input type="file" id="file-13-`+ id13 + `" accept="image/*">
                                    </label>
                                </div>
                            </div>
                            <div class="col-6">
                                <h1 style="text-align: center;">Despues</h1>
                                <div class="container">
                                    <input type="file" id="file" accept="image/*" hidden>
                                    <div class="img-area" data-img="">
                                        <div class="form-element">
                                            <label for="file-14-`+ id14 + `" id="file-14-` + id14 + `-preview">
                                                <img src="https://bit.ly/3ubuq5o" alt="">
                                                <div>
                                                    <span>+</span>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <label class="botonLabel d-flex justify-content-center">
                                        <p style="color: white; padding-bottom: 0px;">Agregar Fotos</p>
                                        <input type="file" id="file-14-`+ id14 + `" accept="image/*">
                                    </label>                                                
                                </div>
                            </div>
                            <div class="col d-flex justify-content-center contDescripcion"
                                style="display: flex; flex-direction: column; justify-content: center; padding-bottom: 170px;">
                                <div class="container">
                                    <h1>Descripción Procedimiento TANQUE #1</h1>
                                    <textarea class="textArea" placeholder="Describa el proceso que se realizado a los equipos...."></textarea>
                                </div>
                            </div>
                        </div>`;
    contenedor.appendChild(p);
    function previewBeforeUpload(id) {
        document.querySelector("#" + id).addEventListener("change", function (e) {
            if (e.target.files.size < 200) {
                alert("Imagen muy pesada")

            }
            else if (e.target.files.length == 0) {
                return;
            }
            let file = e.target.files[0];
            let url = URL.createObjectURL(file);
            document.querySelector("#" + id + "-preview div").innerText = file.name;
            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-13-" + id13);
    previewBeforeUpload("file-14-" + id14);
    id13++;
    id14++;
}
function agregarHtlm7() {
    count7++
    let contenedor = document.querySelector('#fotosSecciones2-4');
    let p = document.createElement('div');
    p.setAttribute("class", "container");
    p.innerHTML = `<div class="row">
                        <h1> Equipo1</h1>
                            <div class="col-6">
                                <h1 style="text-align: center;">Antes</h1>
                                <div class="container">
                                    <input type="file" id="file" accept="image/*" hidden>
                                    <div class="img-area" data-img="">
                                        <div class="form-element">
                                            <label for="file-15-`+ id15 + `" id="file-15-` + id15 + `-preview">
                                                <img src="https://bit.ly/3ubuq5o" alt="">
                                                <div>
                                                    <span>+</span>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <label class="botonLabel d-flex justify-content-center">
                                        <p style="color: white; padding-bottom: 0px;">Agregar Fotos</p>
                                        <input type="file" id="file-15-`+ id15 + `" accept="image/*">
                                    </label>
                                </div>
                            </div>
                            <div class="col-6">
                                <h1 style="text-align: center;">Despues</h1>
                                <div class="container">
                                    <input type="file" id="file" accept="image/*" hidden>
                                    <div class="img-area" data-img="">
                                        <div class="form-element">
                                            <label for="file-16-`+ id16 + `" id="file-16-` + id16 + `-preview">
                                                <img src="https://bit.ly/3ubuq5o" alt="">
                                                <div>
                                                    <span>+</span>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <label class="botonLabel d-flex justify-content-center">
                                        <p style="color: white; padding-bottom: 0px;">Agregar Fotos</p>
                                        <input type="file" id="file-16-`+ id16 + `" accept="image/*">
                                    </label>                                                
                                </div>
                            </div>
                            <div class="col d-flex justify-content-center contDescripcion"
                                style="display: flex; flex-direction: column; justify-content: center; padding-bottom: 170px;">
                                <div class="container">
                                    <h1>Descripción Procedimiento TANQUE #1</h1>
                                    <textarea class="textArea" placeholder="Describa el proceso que se realizado a los equipos...."></textarea>
                                </div>
                            </div>
                        </div>`;
    contenedor.appendChild(p);
    function previewBeforeUpload(id) {
        document.querySelector("#" + id).addEventListener("change", function (e) {
            if (e.target.files.size < 200) {
                alert("Imagen muy pesada")

            }
            else if (e.target.files.length == 0) {
                return;
            }
            let file = e.target.files[0];
            let url = URL.createObjectURL(file);
            document.querySelector("#" + id + "-preview div").innerText = file.name;
            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-15-" + id15);
    previewBeforeUpload("file-16-" + id16);
    id15++;
    id16++;
}
function agregarHtlm8() {
    count8++
    let contenedor = document.querySelector('#fotosSecciones3-1');
    let p = document.createElement('div');
    p.setAttribute("class", "container");
    p.innerHTML = `<div class="row">
                        <h1> Equipo1</h1>
                            <div class="col-6">
                                <h1 style="text-align: center;">Antes</h1>
                                <div class="container">
                                    <input type="file" id="file" accept="image/*" hidden>
                                    <div class="img-area" data-img="">
                                        <div class="form-element">
                                            <label for="file-17-`+ id17 + `" id="file-17-` + id17 + `-preview">
                                                <img src="https://bit.ly/3ubuq5o" alt="">
                                                <div>
                                                    <span>+</span>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <label class="botonLabel d-flex justify-content-center">
                                        <p style="color: white; padding-bottom: 0px;">Agregar Fotos</p>
                                        <input type="file" id="file-17-`+ id17 + `" accept="image/*">
                                    </label>
                                </div>
                            </div>
                            <div class="col-6">
                                <h1 style="text-align: center;">Despues</h1>
                                <div class="container">
                                    <input type="file" id="file" accept="image/*" hidden>
                                    <div class="img-area" data-img="">
                                        <div class="form-element">
                                            <label for="file-18-`+ id18 + `" id="file-18-` + id18 + `-preview">
                                                <img src="https://bit.ly/3ubuq5o" alt="">
                                                <div>
                                                    <span>+</span>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <label class="botonLabel d-flex justify-content-center">
                                        <p style="color: white; padding-bottom: 0px;">Agregar Fotos</p>
                                        <input type="file" id="file-18-`+ id18 + `" accept="image/*">
                                    </label>                                                
                                </div>
                            </div>
                            <div class="col d-flex justify-content-center contDescripcion"
                                style="display: flex; flex-direction: column; justify-content: center; padding-bottom: 170px;">
                                <div class="container">
                                    <h1>Descripción Procedimiento TANQUE #1</h1>
                                    <textarea class="textArea" placeholder="Describa el proceso que se realizado a los equipos...."></textarea>
                                </div>
                            </div>
                        </div>`;
    contenedor.appendChild(p);
    function previewBeforeUpload(id) {
        document.querySelector("#" + id).addEventListener("change", function (e) {
            if (e.target.files.size < 200) {
                alert("Imagen muy pesada")

            }
            else if (e.target.files.length == 0) {
                return;
            }
            let file = e.target.files[0];
            let url = URL.createObjectURL(file);
            document.querySelector("#" + id + "-preview div").innerText = file.name;
            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-17-" + id17);
    previewBeforeUpload("file-18-" + id18);
    id17++;
    id18++;
}
function agregarHtlm9() {
    count9++
    let contenedor = document.querySelector('#fotosSecciones3-2');
    let p = document.createElement('div');
    p.setAttribute("class", "container");
    p.innerHTML = `<div class="row">
                        <h1> Equipo1</h1>
                            <div class="col-6">
                                <h1 style="text-align: center;">Antes</h1>
                                <div class="container">
                                    <input type="file" id="file" accept="image/*" hidden>
                                    <div class="img-area" data-img="">
                                        <div class="form-element">
                                            <label for="file-19-`+ id19 + `" id="file-19-` + id19 + `-preview">
                                                <img src="https://bit.ly/3ubuq5o" alt="">
                                                <div>
                                                    <span>+</span>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <label class="botonLabel d-flex justify-content-center">
                                        <p style="color: white; padding-bottom: 0px;">Agregar Fotos</p>
                                        <input type="file" id="file-19-`+ id19 + `" accept="image/*">
                                    </label>
                                </div>
                            </div>
                            <div class="col-6">
                                <h1 style="text-align: center;">Despues</h1>
                                <div class="container">
                                    <input type="file" id="file" accept="image/*" hidden>
                                    <div class="img-area" data-img="">
                                        <div class="form-element">
                                            <label for="file-20-`+ id20 + `" id="file-20-` + id20 + `-preview">
                                                <img src="https://bit.ly/3ubuq5o" alt="">
                                                <div>
                                                    <span>+</span>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <label class="botonLabel d-flex justify-content-center">
                                        <p style="color: white; padding-bottom: 0px;">Agregar Fotos</p>
                                        <input type="file" id="file-20-`+ id20 + `" accept="image/*">
                                    </label>                                                
                                </div>
                            </div>
                            <div class="col d-flex justify-content-center contDescripcion"
                                style="display: flex; flex-direction: column; justify-content: center; padding-bottom: 170px;">
                                <div class="container">
                                    <h1>Descripción Procedimiento TANQUE #1</h1>
                                    <textarea class="textArea" placeholder="Describa el proceso que se realizado a los equipos...."></textarea>
                                </div>
                            </div>
                        </div>`;
    contenedor.appendChild(p);
    function previewBeforeUpload(id) {
        document.querySelector("#" + id).addEventListener("change", function (e) {
            if (e.target.files.size < 200) {
                alert("Imagen muy pesada")

            }
            else if (e.target.files.length == 0) {
                return;
            }
            let file = e.target.files[0];
            let url = URL.createObjectURL(file);
            document.querySelector("#" + id + "-preview div").innerText = file.name;
            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-19-" + id19);
    previewBeforeUpload("file-20-" + id20);
    id19++;
    id20++;
}
function agregarHtlm10() {
    count10++
    let contenedor = document.querySelector('#fotosSecciones3-3');
    let p = document.createElement('div');
    p.setAttribute("class", "container");
    p.innerHTML = `<div class="row">
                        <h1> Equipo1</h1>
                            <div class="col-6">
                                <h1 style="text-align: center;">Antes</h1>
                                <div class="container">
                                    <input type="file" id="file" accept="image/*" hidden>
                                    <div class="img-area" data-img="">
                                        <div class="form-element">
                                            <label for="file-21-`+ id21 + `" id="file-21-` + id21 + `-preview">
                                                <img src="https://bit.ly/3ubuq5o" alt="">
                                                <div>
                                                    <span>+</span>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <label class="botonLabel d-flex justify-content-center">
                                        <p style="color: white; padding-bottom: 0px;">Agregar Fotos</p>
                                        <input type="file" id="file-21-`+ id21 + `" accept="image/*">
                                    </label>
                                </div>
                            </div>
                            <div class="col-6">
                                <h1 style="text-align: center;">Despues</h1>
                                <div class="container">
                                    <input type="file" id="file" accept="image/*" hidden>
                                    <div class="img-area" data-img="">
                                        <div class="form-element">
                                            <label for="file-22-`+ id22 + `" id="file-22-` + id22 + `-preview">
                                                <img src="https://bit.ly/3ubuq5o" alt="">
                                                <div>
                                                    <span>+</span>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <label class="botonLabel d-flex justify-content-center">
                                        <p style="color: white; padding-bottom: 0px;">Agregar Fotos</p>
                                        <input type="file" id="file-22-`+ id22 + `" accept="image/*">
                                    </label>                                                
                                </div>
                            </div>
                            <div class="col d-flex justify-content-center contDescripcion"
                                style="display: flex; flex-direction: column; justify-content: center; padding-bottom: 170px;">
                                <div class="container">
                                    <h1>Descripción Procedimiento TANQUE #1</h1>
                                    <textarea class="textArea" placeholder="Describa el proceso que se realizado a los equipos...."></textarea>
                                </div>
                            </div>
                        </div>`;
    contenedor.appendChild(p);
    function previewBeforeUpload(id) {
        document.querySelector("#" + id).addEventListener("change", function (e) {
            if (e.target.files.size < 200) {
                alert("Imagen muy pesada")

            }
            else if (e.target.files.length == 0) {
                return;
            }
            let file = e.target.files[0];
            let url = URL.createObjectURL(file);
            document.querySelector("#" + id + "-preview div").innerText = file.name;
            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-21-" + id21);
    previewBeforeUpload("file-22-" + id22);
    id21++;
    id22++;
}
function agregarHtlm11() {
    count11++
    let contenedor = document.querySelector('#fotosSecciones3-4');
    let p = document.createElement('div');
    p.setAttribute("class", "container");
    p.innerHTML = `<div class="row">
                        <h1> Equipo1</h1>
                            <div class="col-6">
                                <h1 style="text-align: center;">Antes</h1>
                                <div class="container">
                                    <input type="file" id="file" accept="image/*" hidden>
                                    <div class="img-area" data-img="">
                                        <div class="form-element">
                                            <label for="file-23-`+ id23 + `" id="file-23-` + id23 + `-preview">
                                                <img src="https://bit.ly/3ubuq5o" alt="">
                                                <div>
                                                    <span>+</span>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <label class="botonLabel d-flex justify-content-center">
                                        <p style="color: white; padding-bottom: 0px;">Agregar Fotos</p>
                                        <input type="file" id="file-23-`+ id23 + `" accept="image/*">
                                    </label>
                                </div>
                            </div>
                            <div class="col-6">
                                <h1 style="text-align: center;">Despues</h1>
                                <div class="container">
                                    <input type="file" id="file" accept="image/*" hidden>
                                    <div class="img-area" data-img="">
                                        <div class="form-element">
                                            <label for="file-24-`+ id24 + `" id="file-24-` + id24 + `-preview">
                                                <img src="https://bit.ly/3ubuq5o" alt="">
                                                <div>
                                                    <span>+</span>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <label class="botonLabel d-flex justify-content-center">
                                        <p style="color: white; padding-bottom: 0px;">Agregar Fotos</p>
                                        <input type="file" id="file-24-`+ id24 + `" accept="image/*">
                                    </label>                                                
                                </div>
                            </div>
                            <div class="col d-flex justify-content-center contDescripcion"
                                style="display: flex; flex-direction: column; justify-content: center; padding-bottom: 170px;">
                                <div class="container">
                                    <h1>Descripción Procedimiento TANQUE #1</h1>
                                    <textarea class="textArea" placeholder="Describa el proceso que se realizado a los equipos...."></textarea>
                                </div>
                            </div>
                        </div>`;
    contenedor.appendChild(p);
    function previewBeforeUpload(id) {
        document.querySelector("#" + id).addEventListener("change", function (e) {
            if (e.target.files.size < 200) {
                alert("Imagen muy pesada")

            }
            else if (e.target.files.length == 0) {
                return;
            }
            let file = e.target.files[0];
            let url = URL.createObjectURL(file);
            document.querySelector("#" + id + "-preview div").innerText = file.name;
            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-23-" + id23);
    previewBeforeUpload("file-24-" + id24);
    id23++;
    id24++;
}

///////////////////////////////////////////////////////////////////
