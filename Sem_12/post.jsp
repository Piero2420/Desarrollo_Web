<!DOCTYPE html>
<html lang="es">
<head>
    <title>Formulario de Registro Post</title>
</head>
<body>
    <h1>Formulario Post</h1>
    <form action="mostrar.jsp" method="post">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre"><br><br>

        <label for="apellidos">Apellidos:</label>
        <input type="text" id="apellidos" name="apellidos"><br><br>

        <label>Genero:</label>
        <input type="radio" id="masculino" name="genero" value="Masculino">
        <label for="masculino">Masculino</label>
        <input type="radio" id="femenino" name="genero" value="Femenino">
        <label for="femenino">Femenino</label><br><br>

        <label>Pasatiempos:</label>
        <input type="checkbox" id="futbol" name="pasatiempos" value="Futbol">
        <label for="futbol">Futbol</label>
        <input type="checkbox" id="natacion" name="pasatiempos" value="Natacion">
        <label for="natacion">Natacion</label>
        <input type="checkbox" id="lectura" name="pasatiempos" value="Lectura">
        <label for="lectura">Lectura</label><br><br>

        <input type="submit" value="Enviar">
    </form>
</body>
</html>
