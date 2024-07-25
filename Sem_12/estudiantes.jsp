<!-- estudiantes.jsp -->
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <title>Lista de Estudiantes</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: black;
            color: white;
        }
        tr:nth-child(even) {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <h2>Lista de Estudiantes</h2>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Edad</th>
                <th>Género</th>
            </tr>
        </thead>
        <tbody>
            <%
                String[][] estudiantes = {
                    {"1", "pedro", "Pérez", "20", "Masculino"},
                    {"2", "María", "López", "21", "Femenino"},
                    {"3", "Carlos", "García", "22", "Masculino"},
                    {"4", "Ana", "Martínez", "23", "Femenino"},
                    {"5", "Luis", "Hernández", "20", "Masculino"},
                    {"6", "Sofía", "González", "21", "Femenino"},
                    {"7", "Miguel", "Rodríguez", "22", "Masculino"},
                    {"8", "Laura", "Fernández", "23", "Femenino"},
                    {"9", "David", "Sánchez", "20", "Masculino"},
                    {"10", "Elena", "Ramírez", "21", "Femenino"}
                };

                for (int i = 0; i < estudiantes.length; i++) {
                    out.println("<tr>");
                    for (int j = 0; j < estudiantes[i].length; j++) {
                        out.println("<td>" + estudiantes[i][j] + "</td>");
                    }
                    out.println("</tr>");
                }
            %>
        </tbody>
    </table>
</body>
</html>
