var contador = 1, count1 = 1, count2 = 1, count3 = 1, count4 = 1, count5 = 1, count6 = 1, count7 = 1, count8 = 1, count9 = 1, count10 = 1, count11 = 1; count12 = 1;
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
        var input = '<input class="form-control input-sm" value="' + cont + '"required>';
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
function agregarHtlm(){
    count1++;
    let contenedor = document.querySelector('#tablaDispensadores1');
    let p = document.createElement('div');
    p.setAttribute("class", "row ");
    p.setAttribute("id", "dispensadoresElim"+count1);

    p.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,202.7C384,181,480,139,576,149.3C672,160,768,224,864,234.7C960,245,1056,203,1152,197.3C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                    <div class="container">
                        <h1> Equipo `+ count1 + `</h1>
                        <div class="row" id="AgregarFila1-`+ count1 +`"style="min-height: 500px;">
                            <div class="col">
                                <h1 style="text-align: center;">Antes</h1>
                                <div class="container container d-grid justify-content-center">
                                    <input type="file" id="file" accept="image/*" hidden>                                    
                                    <div class="img-area" data-img="">
                                        <div class="form-element">
                                            <label for="file-1-`+ id1 + `" id="file-1-` + id1 + `-preview">
                                                <img src="https://bit.ly/3ubuq5o" alt="">
                                                <div>
                                                    <span>+</span>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <label class=" d-flex justify-content-center">
                                        <p style="color: white; padding-bottom: 0px;"><img src="/IMG/add.png">
                                        <input type="file" id="file-1-`+ id1 + `" accept="image/*">
                                    </label>
                                </div>
                            </div>
                            <div class="col">
                                <h1 style="text-align: center;">Despues</h1>
                                <div class="container container d-grid justify-content-center">
                                    <input type="file" id="file" accept="image/*" hidden>
                                    <div class="img-area" data-img="">
                                        <div class="form-element">
                                            <label for="file-2-`+ id2 + `" id="file-2-` + id2 + `-preview">
                                                <img src="https://bit.ly/3ubuq5o" alt="">
                                                <div>
                                                    <span>+</span>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <label class=" d-flex justify-content-center">
                                        <p style="color: white; padding-bottom: 0px;"><img src="/IMG/add.png">
                                        <input type="file" id="file-2-`+ id2 + `" accept="image/*">
                                    </label>                                                
                                </div>
                            </div>
                        </div>
                        <div class="row d-flex justify-content-center contDescripcion"
                            style="display: flex; justify-content: center;">
                            <div class="container">
                                <textarea class="textArea" placeholder="Describa el proceso que se realizado a los equipos...."></textarea>
                            </div>
                            <div class="col-sm d-flex justify-content-center">
                                <button class="btn-info" id="botonSeccionFotos1-`+ count1 + `" onclick="agregarSeccion` + count1 +`()">
                                    <span class="glyphicon glyphicon-plus-sign"></span>AÑADIR FOTOGRAFIAS
                                </button>
                            </div>
                            <div class="col-sm d-flex justify-content-center">
                                <button class="btn-info" id="Elimbtn" onclick="EliminarSeccion()">Eliminar Seccion `+count1+`</button>
                            </div>
                        </div>
                    </div>
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,202.7C384,181,480,139,576,149.3C672,160,768,224,864,234.7C960,245,1056,203,1152,197.3C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                    `;
        contenedor.appendChild(p);    
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos1-2").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos1-2").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos1-3").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos1-3").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos1-4").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos1-4").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos1-5").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos1-5").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos1-6").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos1-6").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos1-7").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos1-7").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos1-8").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos1-8").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos1-9").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos1-9").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos1-10").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos1-10").css("display", "none")
            }
        })
    })

    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos1-11").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos1-11").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos1-12").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos1-12").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos1-13").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos1-13").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos1-14").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos1-14").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos1-15").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos1-15").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos1-16").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos1-16").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos1-17").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos1-17").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos1-18").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos1-18").css("display", "none")
            }
        })
    })
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
function EliminarSeccion() {
    if (confirm('¿Desea Eliminar Esta Seccion?')) {
        $("#dispensadoresElim" + count1).remove();
    }
    else{

    };
    count1--;
}
countSeccion = 19;
function agregarHtlm1() {
    count2++;
    countSeccion++;
    let contenedor = document.querySelector('#tablaTanques1');
    let p = document.createElement('div');
    p.setAttribute("class", "row");
    p.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,202.7C384,181,480,139,576,149.3C672,160,768,224,864,234.7C960,245,1056,203,1152,197.3C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                    <div class="container">
                        <h1> Tanque `+ count2 + `</h1>
                        <div class="row" id="AgregarFila2-`+ count2 + `"style="min-height: 500px;">
                            <div class="col">
                                <h1 style="text-align: center;">Antes</h1>
                                <div class="container container d-grid justify-content-center">
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
                                    <label class=" d-flex justify-content-center">
                                        <p style="color: white; padding-bottom: 0px;"><img src="/IMG/add.png">
                                        <input type="file" id="file-3-`+ id3 + `" accept="image/*">
                                    </label>
                                </div>
                            </div>
                            <div class="col">
                                <h1 style="text-align: center;">Despues</h1>
                                <div class="container container d-grid justify-content-center">
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
                                    <label class=" d-flex justify-content-center">
                                        <p style="color: white; padding-bottom: 0px;"><img src="/IMG/add.png">
                                        <input type="file" id="file-4-`+ id4 + `" accept="image/*">
                                    </label>                                                
                                </div>
                            </div>
                        </div>
                        <div class="row d-flex justify-content-center contDescripcion"
                            style="display: flex; justify-content: center;">
                            <div class="container">
                                <textarea class="textArea" placeholder="Describa el proceso que se realizado a los tanques...."></textarea>
                            </div>
                            <div class="col-sm d-flex justify-content-center">
                                <button class="btn-info" id="botonSeccionFotos2-`+ count2 + `" onclick="agregarSeccion` + countSeccion +`()">
                                    <span class="glyphicon glyphicon-plus-sign"></span>AÑADIR FOTOGRAFIAS
                                </button>
                            </div>
                            <div class="col-sm d-flex justify-content-center">
                                <button class="btn-info" id="Elimbtn" onclick="EliminarSeccion()">Eliminar Seccion `+ count1 +`</button>
                            </div>
                        </div>
                    </div>
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,202.7C384,181,480,139,576,149.3C672,160,768,224,864,234.7C960,245,1056,203,1152,197.3C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                    `;
                                    
    contenedor.appendChild(p);
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos2-2").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos2-2").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos2-3").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos2-3").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos2-4").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos2-4").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos2-5").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos2-5").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos2-6").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos2-6").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos2-7").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos2-7").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos2-8").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos2-8").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos2-9").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos2-9").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos2-10").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos2-10").css("display", "none")
            }
        })
    })

    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos2-11").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos2-11").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos2-12").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos2-12").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos2-13").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos2-13").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos2-14").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos2-14").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos2-15").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos2-15").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos2-16").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos2-16").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos2-17").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos2-17").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos2-18").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos2-18").css("display", "none")
            }
        })
    })
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
countSeccion1 = 37;
function agregarHtlm2() {
    count3++;
    countSeccion1++;
    let contenedor = document.querySelector('#consolaVeeder1');
    let p = document.createElement('div');
    p.setAttribute("class", "row");
    p.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,202.7C384,181,480,139,576,149.3C672,160,768,224,864,234.7C960,245,1056,203,1152,197.3C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                    <div class="container">
                        <h1> Control Ventas `+ count3 + `</h1>
                        <div class="row" id="AgregarFila3-`+ count3 + `"style="min-height: 500px;">
                            <div class="col">
                                <h1 style="text-align: center;">Antes</h1>
                                <div class="container container d-grid justify-content-center">
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
                                    <label class=" d-flex justify-content-center">
                                        <p style="color: white; padding-bottom: 0px;"><img src="/IMG/add.png">
                                        <input type="file" id="file-5-`+ id5 + `" accept="image/*">
                                    </label>
                                </div>
                            </div>
                            <div class="col">
                                <h1 style="text-align: center;">Despues</h1>
                                <div class="container container d-grid justify-content-center">
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
                                    <label class=" d-flex justify-content-center">
                                        <p style="color: white; padding-bottom: 0px;"><img src="/IMG/add.png">
                                        <input type="file" id="file-6-`+ id6 + `" accept="image/*">
                                    </label>                                                
                                </div>
                            </div>
                        </div>
                        <div class="row d-flex justify-content-center contDescripcion"
                            style="display: flex; flex-direction: column; justify-content: center;">
                            <div class="container">
                                <textarea class="textArea" placeholder="Describa el proceso que se realizado al Sistema...."></textarea>
                            </div>
                            <button class="btn-info" id="botonSeccionFotos3-`+ count3 + `" onclick="agregarSeccion` + countSeccion1 +`()">
                                <span class="glyphicon glyphicon-plus-sign"></span>AÑADIR FOTOGRAFIAS
                            </button>
                        </div>
                    </div>
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,202.7C384,181,480,139,576,149.3C672,160,768,224,864,234.7C960,245,1056,203,1152,197.3C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                    `;
    contenedor.appendChild(p);
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos3-2").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos3-2").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos3-3").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos3-3").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos3-4").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos3-4").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos3-5").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos3-5").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos3-6").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos3-6").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos3-7").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos3-7").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos3-8").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos3-8").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos3-9").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos3-9").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos3-10").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos3-10").css("display", "none")
            }
        })
    })

    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos3-11").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos3-11").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos3-12").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos3-12").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos3-13").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos3-13").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos3-14").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos3-14").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos3-15").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos3-15").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos3-16").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos3-16").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos3-17").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos3-17").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos3-18").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos3-18").css("display", "none")
            }
        })
    })
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
countSeccion2 = 55;
function agregarHtlm3() {
    count4++;
    countSeccion2++;
    let contenedor = document.querySelector('#tablaSistemasnx1');
    let p = document.createElement('div');
    p.setAttribute("class", "row");
    p.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,202.7C384,181,480,139,576,149.3C672,160,768,224,864,234.7C960,245,1056,203,1152,197.3C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                    <div class="container">
                        <h1> Tablero Electrico `+ count4 + `</h1>
                        <div class="row" id="AgregarFila4-`+ count4 + `"style="min-height: 500px;">
                            <div class="col">
                                <h1 style="text-align: center;">Antes</h1>
                                <div class="container container d-grid justify-content-center">
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
                                    <label class=" d-flex justify-content-center">
                                        <p style="color: white; padding-bottom: 0px;"><img src="/IMG/add.png">
                                        <input type="file" id="file-7-`+ id7 + `" accept="image/*">
                                    </label>
                                </div>
                            </div>
                            <div class="col">
                                <h1 style="text-align: center;">Despues</h1>
                                <div class="container container d-grid justify-content-center">
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
                                    <label class=" d-flex justify-content-center">
                                        <p style="color: white; padding-bottom: 0px;"><img src="/IMG/add.png">
                                        <input type="file" id="file-8-`+ id8 +`" accept="image/*">
                                    </label>                                                
                                </div>
                            </div>
                        </div>
                        <div class="row d-flex justify-content-center contDescripcion"
                            style="display: flex; flex-direction: column; justify-content: center;">
                            <div class="container">
                                <textarea class="textArea" placeholder="Describa el proceso que se realizado al Sistema...."></textarea>
                            </div>
                            <button class="btn-info" id="botonSeccionFotos4-`+ count4 + `" onclick="agregarSeccion` + countSeccion2 +`()">
                                <span class="glyphicon glyphicon-plus-sign"></span>AÑADIR FOTOGRAFIAS
                            </button>
                        </div>
                    </div>
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,202.7C384,181,480,139,576,149.3C672,160,768,224,864,234.7C960,245,1056,203,1152,197.3C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                    `;
    contenedor.appendChild(p);
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos4-2").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos4-2").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos4-3").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos4-3").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos4-4").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos4-4").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos4-5").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos4-5").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos4-6").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos4-6").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos4-7").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos4-7").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos4-8").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos4-8").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos4-9").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos4-9").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos4-10").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos4-10").css("display", "none")
            }
        })
    })

    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos4-11").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos4-11").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos4-12").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos4-12").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos4-13").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos4-13").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos4-14").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos4-14").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos4-15").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos4-15").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos4-16").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos4-16").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos4-17").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos4-17").css("display", "none")
            }
        })
    })
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos4-18").click(function () {

            contadorFotos++;
            if (contadorFotos >= 5) {
                $("#botonSeccionFotos4-18").css("display", "none")
            }
        })
    })
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
///////////////////////////////////////////////////////////////////
var countFotos = 1;
function agregarSeccion1() {

    let contenedor = document.querySelector('#AgregarFila1-1');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-1">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion2() {

    let contenedor = document.querySelector('#AgregarFila1-2');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion3() {

    let contenedor = document.querySelector('#AgregarFila1-3');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion4() {

    let contenedor = document.querySelector('#AgregarFila1-4');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion5() {

    let contenedor = document.querySelector('#AgregarFila1-5');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion6() {

    let contenedor = document.querySelector('#AgregarFila1-6');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion7() {

    let contenedor = document.querySelector('#AgregarFila1-7');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion8() {

    let contenedor = document.querySelector('#AgregarFila1-8');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion9() {

    let contenedor = document.querySelector('#AgregarFila1-9');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion10() {

    let contenedor = document.querySelector('#AgregarFila1-10');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion11() {

    let contenedor = document.querySelector('#AgregarFila1-11');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion12() {

    let contenedor = document.querySelector('#AgregarFila1-12');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion13() {

    let contenedor = document.querySelector('#AgregarFila1-13');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion14() {

    let contenedor = document.querySelector('#AgregarFila1-14');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion15() {

    let contenedor = document.querySelector('#AgregarFila1-15');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion16() {

    let contenedor = document.querySelector('#AgregarFila1-16');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion17() {

    let contenedor = document.querySelector('#AgregarFila1-17');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion18() {

    let contenedor = document.querySelector('#AgregarFila1-18');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
/******************************************************************************/
var countFotos = 1;
function agregarSeccion19() {

    let contenedor = document.querySelector('#AgregarFila2-1');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-1">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion20() {

    let contenedor = document.querySelector('#AgregarFila2-2');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion21() {

    let contenedor = document.querySelector('#AgregarFila2-3');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion22() {

    let contenedor = document.querySelector('#AgregarFila2-4');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion23() {

    let contenedor = document.querySelector('#AgregarFila2-5');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion24() {

    let contenedor = document.querySelector('#AgregarFila2-6');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion25() {

    let contenedor = document.querySelector('#AgregarFila2-7');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion26() {

    let contenedor = document.querySelector('#AgregarFila2-8');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion27() {

    let contenedor = document.querySelector('#AgregarFila2-9');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion28() {

    let contenedor = document.querySelector('#AgregarFila2-10');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion29() {

    let contenedor = document.querySelector('#AgregarFila2-11');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion30() {

    let contenedor = document.querySelector('#AgregarFila2-12');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion31() {

    let contenedor = document.querySelector('#AgregarFila2-13');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion32() {

    let contenedor = document.querySelector('#AgregarFila2-14');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion33() {

    let contenedor = document.querySelector('#AgregarFila2-15');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion34() {

    let contenedor = document.querySelector('#AgregarFila2-16');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion35() {

    let contenedor = document.querySelector('#AgregarFila2-17');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion36() {

    let contenedor = document.querySelector('#AgregarFila2-18');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
/*************************************************************************************************/
var countFotos = 1;
function agregarSeccion37() {

    let contenedor = document.querySelector('#AgregarFila3-1');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-1">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion38() {

    let contenedor = document.querySelector('#AgregarFila3-2');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-1">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion39() {

    let contenedor = document.querySelector('#AgregarFila3-3');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion40() {

    let contenedor = document.querySelector('#AgregarFila3-4');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion41() {

    let contenedor = document.querySelector('#AgregarFila3-5');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion42() {

    let contenedor = document.querySelector('#AgregarFila3-6');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion43() {

    let contenedor = document.querySelector('#AgregarFila3-7');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion44() {

    let contenedor = document.querySelector('#AgregarFila3-8');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion45() {

    let contenedor = document.querySelector('#AgregarFila3-9');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion46() {

    let contenedor = document.querySelector('#AgregarFila3-10');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion47() {

    let contenedor = document.querySelector('#AgregarFila3-11');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion48() {

    let contenedor = document.querySelector('#AgregarFila3-12');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion49() {

    let contenedor = document.querySelector('#AgregarFila3-13');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion50() {

    let contenedor = document.querySelector('#AgregarFila3-14');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion51() {

    let contenedor = document.querySelector('#AgregarFila3-15');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion52() {

    let contenedor = document.querySelector('#AgregarFila3-16');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion53() {

    let contenedor = document.querySelector('#AgregarFila3-17');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion54() {

    let contenedor = document.querySelector('#AgregarFila3-18');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion55() {

    let contenedor = document.querySelector('#AgregarFila3-19');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
/***************************************************************************************************************/
var countFotos = 1;
function agregarSeccion55() {

    let contenedor = document.querySelector('#AgregarFila4-1');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-1">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion56() {

    let contenedor = document.querySelector('#AgregarFila4-2');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-1">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion57() {

    let contenedor = document.querySelector('#AgregarFila4-3');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion58() {

    let contenedor = document.querySelector('#AgregarFila4-4');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion59() {

    let contenedor = document.querySelector('#AgregarFila4-5');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion60() {

    let contenedor = document.querySelector('#AgregarFila4-6');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion61() {

    let contenedor = document.querySelector('#AgregarFila4-7');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion62() {

    let contenedor = document.querySelector('#AgregarFila4-8');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion63() {

    let contenedor = document.querySelector('#AgregarFila4-9');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion64() {

    let contenedor = document.querySelector('#AgregarFila4-10');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion65() {

    let contenedor = document.querySelector('#AgregarFila4-11');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion66() {

    let contenedor = document.querySelector('#AgregarFila4-12');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion67() {

    let contenedor = document.querySelector('#AgregarFila4-13');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion68() {

    let contenedor = document.querySelector('#AgregarFila4-14');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion69() {

    let contenedor = document.querySelector('#AgregarFila4-15');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion70() {

    let contenedor = document.querySelector('#AgregarFila4-16');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion71() {

    let contenedor = document.querySelector('#AgregarFila4-17');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
function agregarSeccion72() {

    let contenedor = document.querySelector('#AgregarFila4-18');
    let p = document.createElement('div');
    p.setAttribute("class", "col");
    p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-2">
                        <input type="file" id="file" accept="image/*" hidden>
                        <br><br>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
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

            document.querySelector("#" + id + "-preview img").src = url;
        });
    }
    previewBeforeUpload("file-seccionFotos-1-" + countFotos);
    countFotos++
}
