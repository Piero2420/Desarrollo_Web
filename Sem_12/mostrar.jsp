<!DOCTYPE html>
<html>
<head>
    <title>Datos Capturados</title>
</head>
<body>
    <h2>Datos Capturados</h2>
    <p>Nombre: <%= request.getParameter("nombre") %></p>
    <p>Apellidos: <%= request.getParameter("apellidos") %></p>
    <p>Genero: <%= request.getParameter("genero") %></p>
    <p>Pasatiempos:</p>
    <ul>
        <%
            String[] pasatiempos = request.getParameterValues("pasatiempos");
            if (pasatiempos != null) {
                for (String pasatiempo : pasatiempos) {
                    out.println("<li>" + pasatiempo + "</li>");
                }
            } else {
                out.println("<li>No se seleccionaron pasatiempos</li>");
            }
        %>
    </ul>
</body>
</html>
