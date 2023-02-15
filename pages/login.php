<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Document</title>

    <link rel="stylesheet" href="../CSS/login.css">

</head>
<header id="header" style="z-index: 99999;">
    <div class="topnav" id="myTopnav" style="width: 95%;">
        <a href="#" id="active" style="color: black;">INSEPET</a>
        <div class="container w-100">
            <a href="../index.html">INICIO</a>
            <a href="#seccion1">IMPORTANTE</a>
            <a href="#seccion2">MANTENIMIENTO</a>
            <a href="#inicio"><button id="exportarpdf" style="line-height: 18px; width: 0;">EXPORTAR</button></a>
            <a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="NavBar()">&#9776;</a>
        </div>
    </div>
</header>

<body>
    <p class="tip"></p>

    <h1 class="titulo">Bienvenido</h1>
    <div class="cont" style="background: dimgrey;">
        <form method="POST" action="controller.php">
            <div class="form sign-in">
                <h2>Inicie Sesión</h2>
                <label>
                    <span>Email</span>
                    <input type="text" name ="txtUsuario" />
                </label>
                <label>
                    <span>Contraseña</span>
                    <input type="password" name = "txtPassword"/>
                </label>
                <button type="submit" class="submit">Iniciar Sesión</button>
            </div>
        </form>
        <div class="sub-cont" style="background: dimgrey;">
            <div class="img">
                <div class="img__text m--up">
                    <h2>Titulo</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum beatae fugit corporis iste. In
                        assumenda expedita cumque optio. Qui modi vel quos saepe sit eligendi odit et tempore quae esse!
                    </p>
                </div>
        </div>
    </div>
</body>
<script>
    document.querySelector('.img__btn').addEventListener('click', function () {
        document.querySelector('.cont').classList.toggle('s--signup');
    });
</script>

</html>