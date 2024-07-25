<%@ page import="java.sql.*" %>
<%
String id = request.getParameter("id");
try {
    Class.forName("com.mysql.jdbc.Driver");
    Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/escuela", "root", "");
    PreparedStatement ps = conn.prepareStatement("SELECT * FROM estudiante WHERE id=?");
    ps.setString(1, id);
    ResultSet rs = ps.executeQuery();
    if (rs.next()) {
        String nombre = rs.getString("nombre");
        String email = rs.getString("email");
        String telefono = rs.getString("telefono");
%>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modificar Estudiante</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.0.1/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100">
    <div class="container mx-auto p-6">
        <div class="bg-white p-6 rounded shadow-md">
            <h1 class="text-2xl font-bold mb-4 text-center text-blue-600">Modificar Estudiante</h1>
            <form action="update_process.jsp" method="post">
                <input type="hidden" name="id" value="<%= id %>">
                <div class="mb-4">
                    <label for="nombre" class="block text-sm font-medium text-gray-700">Nombre</label>
                    <input type="text" id="nombre" name="nombre" class="mt-1 p-2 block w-full border border-gray-300 rounded-md" value="<%= nombre %>">
                </div>
                <div class="mb-4">
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" name="email" class="mt-1 p-2 block w-full border border-gray-300 rounded-md" value="<%= email %>">
                </div>
                <div class="mb-4">
                    <label for="telefono" class="block text-sm font-medium text-gray-700">Telefono</label>
                    <input type="text" id="telefono" name="telefono" class="mt-1 p-2 block w-full border border-gray-300 rounded-md" value="<%= telefono %>">
                </div>
                <input type="submit" value="Guardar Cambios" class="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
            </form>
        </div>
    </div>
</body>
</html>
<%
    } else {
        request.setAttribute("message", "No se encontró el estudiante con ID " + id);
        RequestDispatcher rd = request.getRequestDispatcher("index.jsp");
        rd.forward(request, response);
    }
    conn.close();
} catch (Exception e) {
    request.setAttribute("message", e.getMessage());
    RequestDispatcher rd = request.getRequestDispatcher("index.jsp");
    rd.forward(request, response);
}
%>
