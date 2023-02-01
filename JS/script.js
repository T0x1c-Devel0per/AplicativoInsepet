z
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
var id1 = 2;
var id2 = 3;

function agregarHtlm(){
    count1++;
    id1++;
    id2++;
    let contenedor = document.querySelector('#fotosSecciones');
    let p = document.createElement('div');
    p.setAttribute("class", "container");
    p.innerHTML = `<div class="row"> 
                                    <h1 style="text-align: center;" > Equipo1</h1>                                
                                    <div class="col-6">
                                        <h1 style="text-align: center;">Antes</h1>
                                        <div class="center">
                                            <div class="form-input">
                                                <label for="file-ip-`+id1+`">Upload Image</label>
                                                <input type="file" id="file-ip-`+id1+`" accept="image/*" onchange="showPreview`+id1+`(event);">
                                                <div class="preview">
                                                    <img id="file-ip-1-preview`+id1+`">
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-6">
                                        <h1 style="text-align: center;">Despues</h1>
                                        <div class="container">
                                            <div class="center">
                                                <div class="form-input">
                                                    <label for="file-ip-`+id2+`">Upload Image</label>
                                                    <input type="file" id="file-ip-`+id2+`" accept="image/*" onchange="showPreview`+id2+`(event);">
                                                    <div class="preview">
                                                        <img id="file-ip-1-preview`+id2+`">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 d-flex justify-content-center contDescripcion" style="display: flex; flex-direction: column; justify-content: center;padding-bottom: 50px;">
                                        <div class="container">
                                            <h1>Descripción Procedimiento</h1>
                                            <textarea class="textArea" placeholder= "Describa el proceso que se realizado a los equipos...."></textarea>                                            
                                        </div>
                                            
                                    </div>
                               </div>`;
        contenedor.appendChild(p);
    
}
function agregarHtlm1() {
    count1++;
    let contenedor = document.querySelector('#fotosSecciones1');
    let p = document.createElement('div');
    p.setAttribute("class", "container");
    p.innerHTML = `<div class="row">
                        <h1> Equipo#`+ count1 + `</h1>                                
                            <div class="col-6">
                                <h1 style="text-align: center;">Antes</h1>
                                <div class="container">
                                    <input type="file" id="file" accept="image/*" hidden>
                                    <div class="img-area" data-img="">
                                        <ion-icon name="image-outline"></ion-icon>
                                    </div>
                                    <button class="select-image">Select Image</button>
                                </div>
                            </div>
                            <div class="col-6">
                                <h1 style="text-align: center;">Despues</h1>
                                <div class="container">
                                    <input type="file" id="file" accept="image/*" hidden>
                                    <div class="img-area" data-img="">
                                        <ion-icon name="image-outline"></ion-icon>
                                    </div>
                                    <button class="select-image">Select Image</button>
                                </div>
                            </div>
                            <div class="col d-flex justify-content-center contDescripcion" style="display: flex; flex-direction: column; justify-content: center;" >
                                <div class="container"style="padding-bottom: 50px;">
                                    <h1 >Descripción Procedimiento Tanque #1</h1>
                                    <textarea class="textArea" placeholder= "Describa el proceso que se realizado a los equipos...."></textarea>                                            
                                </div>            
                            </div>
                        </div>`;
    contenedor.appendChild(p);
}
function agregarHtlm2() {
    count2++
    let contenedor = document.querySelector('#fotosSecciones2');
    let p = document.createElement('div');
    p.setAttribute("class", "container");
    p.innerHTML = `<div class="row">
                        <h1> Equipo#`+ count1 + `</h1>                                
                            <div class="col-6">
                                <h1 style="text-align: center;">Antes</h1>
                                <div class="container">
                                    <input type="file" id="file" accept="image/*" hidden>
                                    <div class="img-area" data-img="">
                                        <ion-icon name="image-outline"></ion-icon>
                                    </div>
                                    <button class="select-image">Select Image</button>
                                </div>
                            </div>
                            <div class="col-6">
                                <h1 style="text-align: center;">Despues</h1>
                                <div class="container">
                                    <input type="file" id="file" accept="image/*" hidden>
                                    <div class="img-area" data-img="">
                                        <ion-icon name="image-outline"></ion-icon>
                                    </div>
                                    <button class="select-image">Select Image</button>
                                </div>
                            </div>
                            <div class="col d-flex justify-content-center contDescripcion" style="display: flex; flex-direction: column; justify-content: center;" >
                                <div class="container"style="padding-bottom: 50px;">
                                    <h1 >Descripción Procedimiento Consola #1</h1>
                                    <textarea class="textArea" placeholder= "Describa el proceso que se realizado a los equipos...."></textarea>                                            
                                </div>            
                            </div>
                        </div>`;
    contenedor.appendChild(p);
}
function agregarHtlm3() {
    count3++
    let contenedor = document.querySelector('#tabElectrico1');
    let p = document.createElement('div');
    p.setAttribute("class", "container");
    p.innerHTML = `<div class="row">
                        <h1> Equipo#`+ count3 + `</h1>                                
                            <div class="col-6">
                                <h1 style="text-align: center;">Antes</h1>
                                <div class="container">
                                    <input type="file" id="file" accept="image/*" hidden>
                                    <div class="img-area" data-img="">
                                        <ion-icon name="image-outline"></ion-icon>
                                    </div>
                                    <button class="select-image">Select Image</button>
                                </div>
                            </div>
                            <div class="col-6">
                                <h1 style="text-align: center;">Despues</h1>
                                <div class="container">
                                    <input type="file" id="file" accept="image/*" hidden>
                                    <div class="img-area" data-img="">
                                        <ion-icon name="image-outline"></ion-icon>
                                    </div>
                                    <button class="select-image">Select Image</button>
                                </div>
                            </div>
                            <div class="col d-flex justify-content-center contDescripcion" style="display: flex; flex-direction: column; justify-content: center;" >
                                <div class="container"style="padding-bottom: 50px;">
                                    <h1 >Descripción Procedimiento Consola #1</h1>
                                    <textarea class="textArea" placeholder= "Describa el proceso que se realizado a los equipos...."></textarea>                                            
                                </div>            
                            </div>
                        </div>`;
    contenedor.appendChild(p);
}
function agregarHtlm4() {
    count4++
    let contenedor = document.querySelector('#fotosSecciones2-1');
    let p = document.createElement('div');
    p.setAttribute("class", "container");
    p.innerHTML = `<div class="row">
                        <h1> Equipo#`+ count4 + `</h1>                                
                            <div class="col-6">
                                <h1 style="text-align: center;">Antes</h1>
                                <div class="container">
                                    <input type="file" id="file" accept="image/*" hidden>
                                    <div class="img-area" data-img="">
                                        <ion-icon name="image-outline"></ion-icon>
                                    </div>
                                    <button class="select-image">Select Image</button>
                                </div>
                            </div>
                            <div class="col-6">
                                <h1 style="text-align: center;">Despues</h1>
                                <div class="container">
                                    <input type="file" id="file" accept="image/*" hidden>
                                    <div class="img-area" data-img="">
                                        <ion-icon name="image-outline"></ion-icon>
                                    </div>
                                    <button class="select-image">Select Image</button>
                                </div>
                            </div>
                            <div class="col d-flex justify-content-center contDescripcion" style="display: flex; flex-direction: column; justify-content: center;" >
                                <div class="container"style="padding-bottom: 50px;">
                                    <h1 >Descripción Procedimiento Consola #1</h1>
                                    <textarea class="textArea" placeholder= "Describa el proceso que se realizado a los equipos...."></textarea>                                            
                                </div>            
                            </div>
                        </div>`;
    contenedor.appendChild(p);
}
function agregarHtlm5() {
    count5++
    let contenedor = document.querySelector('#fotosSecciones2-2');
    let p = document.createElement('div');
    p.setAttribute("class", "container");
    p.innerHTML = `<div class="row">
                        <h1> Equipo#`+ count5 + `</h1>                                
                            <div class="col-6">
                                <h1 style="text-align: center;">Antes</h1>
                                <div class="container">
                                    <input type="file" id="file" accept="image/*" hidden>
                                    <div class="img-area" data-img="">
                                        <ion-icon name="image-outline"></ion-icon>
                                    </div>
                                    <button class="select-image">Select Image</button>
                                </div>
                            </div>
                            <div class="col-6">
                                <h1 style="text-align: center;">Despues</h1>
                                <div class="container">
                                    <input type="file" id="file" accept="image/*" hidden>
                                    <div class="img-area" data-img="">
                                        <ion-icon name="image-outline"></ion-icon>
                                    </div>
                                    <button class="select-image">Select Image</button>
                                </div>
                            </div>
                            <div class="col d-flex justify-content-center contDescripcion" style="display: flex; flex-direction: column; justify-content: center;" >
                                <div class="container"style="padding-bottom: 50px;">
                                    <h1 >Descripción Procedimiento Consola #1</h1>
                                    <textarea class="textArea" placeholder= "Describa el proceso que se realizado a los equipos...."></textarea>                                            
                                </div>            
                            </div>
                        </div>`;
    contenedor.appendChild(p);
}
function agregarHtlm6() {
    count6++
    let contenedor = document.querySelector('#fotosSecciones2-3');
    let p = document.createElement('div');
    p.setAttribute("class", "container");
    p.innerHTML = `<div class="row">
                        <h1> Equipo#`+ count5 + `</h1>                                
                            <div class="col-6">
                                <h1 style="text-align: center;">Antes</h1>
                                <div class="container">
                                    <input type="file" id="file" accept="image/*" hidden>
                                    <div class="img-area" data-img="">
                                        <ion-icon name="image-outline"></ion-icon>
                                    </div>
                                    <button class="select-image">Select Image</button>
                                </div>
                            </div>
                            <div class="col-6">
                                <h1 style="text-align: center;">Despues</h1>
                                <div class="container">
                                    <input type="file" id="file" accept="image/*" hidden>
                                    <div class="img-area" data-img="">
                                        <ion-icon name="image-outline"></ion-icon>
                                    </div>
                                    <button class="select-image">Select Image</button>
                                </div>
                            </div>
                            <div class="col d-flex justify-content-center contDescripcion" style="display: flex; flex-direction: column; justify-content: center;" >
                                <div class="container"style="padding-bottom: 50px;">
                                    <h1 >Descripción Procedimiento Consola #1</h1>
                                    <textarea class="textArea" placeholder= "Describa el proceso que se realizado a los equipos...."></textarea>                                            
                                </div>            
                            </div>
                        </div>`;
    contenedor.appendChild(p);
}
function agregarHtlm7() {
    count7++
    let contenedor = document.querySelector('#fotosSecciones2-4');
    let p = document.createElement('div');
    p.setAttribute("class", "container");
    p.innerHTML = `<div class="row">
                        <h1> Equipo#`+ count7 + `</h1>                                
                            <div class="col-6">
                                <h1 style="text-align: center;">Antes</h1>
                                <div class="container">
                                    <input type="file" id="file" accept="image/*" hidden>
                                    <div class="img-area" data-img="">
                                        <ion-icon name="image-outline"></ion-icon>
                                    </div>
                                    <button class="select-image">Select Image</button>
                                </div>
                            </div>
                            <div class="col-6">
                                <h1 style="text-align: center;">Despues</h1>
                                <div class="container">
                                    <input type="file" id="file" accept="image/*" hidden>
                                    <div class="img-area" data-img="">
                                        <ion-icon name="image-outline"></ion-icon>
                                    </div>
                                    <button class="select-image">Select Image</button>
                                </div>
                            </div>
                            <div class="col d-flex justify-content-center contDescripcion" style="display: flex; flex-direction: column; justify-content: center;" >
                                <div class="container"style="padding-bottom: 50px;">
                                    <h1 >Descripción Procedimiento Consola #1</h1>
                                    <textarea class="textArea" placeholder= "Describa el proceso que se realizado a los equipos...."></textarea>                                            
                                </div>            
                            </div>
                        </div>`;
    contenedor.appendChild(p);
}
function agregarHtlm8() {
    count8++
    let contenedor = document.querySelector('#fotosSecciones3-1');
    let p = document.createElement('div');
    p.setAttribute("class", "container");
    p.innerHTML = `<div class="row">
                        <h1> Equipo#`+ count8 + `</h1>                                
                            <div class="col-6">
                                <h1 style="text-align: center;">Antes</h1>
                                <div class="container">
                                    <input type="file" id="file" accept="image/*" hidden>
                                    <div class="img-area" data-img="">
                                        <ion-icon name="image-outline"></ion-icon>
                                    </div>
                                    <button class="select-image">Select Image</button>
                                </div>
                            </div>
                            <div class="col-6">
                                <h1 style="text-align: center;">Despues</h1>
                                <div class="container">
                                    <input type="file" id="file" accept="image/*" hidden>
                                    <div class="img-area" data-img="">
                                        <ion-icon name="image-outline"></ion-icon>
                                    </div>
                                    <button class="select-image">Select Image</button>
                                </div>
                            </div>
                            <div class="col d-flex justify-content-center contDescripcion" style="display: flex; flex-direction: column; justify-content: center;" >
                                <div class="container"style="padding-bottom: 50px;">
                                    <h1 >Descripción Procedimiento Consola #1</h1>
                                    <textarea class="textArea" placeholder= "Describa el proceso que se realizado a los equipos...."></textarea>                                            
                                </div>            
                            </div>
                        </div>`;
    contenedor.appendChild(p);
}
function agregarHtlm9() {
    count9++
    let contenedor = document.querySelector('#fotosSecciones3-2');
    let p = document.createElement('div');
    p.setAttribute("class", "container");
    p.innerHTML = `<div class="row">
                        <h1> Equipo#`+ count9 + `</h1>                                
                            <div class="col-6">
                                <h1 style="text-align: center;">Antes</h1>
                                <div class="container">
                                    <input type="file" id="file" accept="image/*" hidden>
                                    <div class="img-area" data-img="">
                                        <ion-icon name="image-outline"></ion-icon>
                                    </div>
                                    <button class="select-image">Select Image</button>
                                </div>
                            </div>
                            <div class="col-6">
                                <h1 style="text-align: center;">Despues</h1>
                                <div class="container">
                                    <input type="file" id="file" accept="image/*" hidden>
                                    <div class="img-area" data-img="">
                                        <ion-icon name="image-outline"></ion-icon>
                                    </div>
                                    <button class="select-image">Select Image</button>
                                </div>
                            </div>
                            <div class="col d-flex justify-content-center contDescripcion" style="display: flex; flex-direction: column; justify-content: center;" >
                                <div class="container"style="padding-bottom: 50px;">
                                    <h1 >Descripción Procedimiento Consola #1</h1>
                                    <textarea class="textArea" placeholder= "Describa el proceso que se realizado a los equipos...."></textarea>                                            
                                </div>            
                            </div>
                        </div>`;
    contenedor.appendChild(p);
}
function agregarHtlm10() {
    count10++
    let contenedor = document.querySelector('#fotosSecciones3-3');
    let p = document.createElement('div');
    p.setAttribute("class", "container");
    p.innerHTML = `<div class="row">
                        <h1> Equipo#`+ count10 + `</h1>                                
                            <div class="col-6">
                                <h1 style="text-align: center;">Antes</h1>
                                <div class="container">
                                    <input type="file" id="file" accept="image/*" hidden>
                                    <div class="img-area" data-img="">
                                        <ion-icon name="image-outline"></ion-icon>
                                    </div>
                                    <button class="select-image">Select Image</button>
                                </div>
                            </div>
                            <div class="col-6">
                                <h1 style="text-align: center;">Despues</h1>
                                <div class="container">
                                    <input type="file" id="file" accept="image/*" hidden>
                                    <div class="img-area" data-img="">
                                        <ion-icon name="image-outline"></ion-icon>
                                    </div>
                                    <button class="select-image">Select Image</button>
                                </div>
                            </div>
                            <div class="col d-flex justify-content-center contDescripcion" style="display: flex; flex-direction: column; justify-content: center;" >
                                <div class="container"style="padding-bottom: 50px;">
                                    <h1 >Descripción Procedimiento Consola #1</h1>
                                    <textarea class="textArea" placeholder= "Describa el proceso que se realizado a los equipos...."></textarea>                                            
                                </div>            
                            </div>
                        </div>`;
    contenedor.appendChild(p);
}
function agregarHtlm11() {
    count11++
    let contenedor = document.querySelector('#fotosSecciones3-4');
    let p = document.createElement('div');
    p.setAttribute("class", "container");
    p.innerHTML = `<div class="row">
                        <h1> Equipo#`+ count10 + `</h1>                                
                            <div class="col-6">
                                <h1 style="text-align: center;">Antes</h1>
                                <div class="container">
                                    <input type="file" id="file" accept="image/*" hidden>
                                    <div class="img-area" data-img="">
                                        <ion-icon name="image-outline"></ion-icon>
                                    </div>
                                    <button class="select-image">Select Image</button>
                                </div>
                            </div>
                            <div class="col-6">
                                <h1 style="text-align: center;">Despues</h1>
                                <div class="container">
                                    <input type="file" id="file" accept="image/*" hidden>
                                    <div class="img-area" data-img="">
                                        <ion-icon name="image-outline"></ion-icon>
                                    </div>
                                    <button class="select-image">Select Image</button>
                                </div>
                            </div>
                            <div class="col d-flex justify-content-center contDescripcion" style="display: flex; flex-direction: column; justify-content: center;" >
                                <div class="container"style="padding-bottom: 50px;">
                                    <h1 >Descripción Procedimiento Consola #1</h1>
                                    <textarea class="textArea" placeholder= "Describa el proceso que se realizado a los equipos...."></textarea>                                            
                                </div>            
                            </div>
                        </div>`;
    contenedor.appendChild(p);
}

///////////////////////////////////////////////////////////////////
