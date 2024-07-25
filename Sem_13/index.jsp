<%@ page import="java.sql.*" %>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro y Gestion de Estudiantes</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.0.1/dist/tailwind.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</head>
<body class="bg-gray-100">
    <div class="container mx-auto p-6">
        <div class="bg-white p-6 rounded shadow-md mb-6">
            <h1 class="text-3xl font-bold mb-4 text-center text-blue-600">Registro de Estudiantes</h1>
            <form action="connect.jsp" method="post">
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label for="id" class="block text-sm font-medium text-gray-700">Codigo</label>
                        <input type="text" id="id" name="id" class="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                    </div>
                    <div>
                        <label for="nombre" class="block text-sm font-medium text-gray-700">Nombre</label>
                        <input type="text" id="nombre" name="nombre" class="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                    </div>
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" name="email" class="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                    </div>
                    <div>
                        <label for="telefono" class="block text-sm font-medium text-gray-700">Telefono</label>
                        <input type="text" id="telefono" name="telefono" class="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                    </div>
                </div>
                <input type="submit" value="Registrar Estudiante" class="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mt-4">
            </form>
        </div>

        <div class="bg-white p-6 rounded shadow-md">
            <h2 class="text-2xl font-bold mb-4 text-center text-blue-600">Lista de Estudiantes</h2>
            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Codigo</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Telefono</th>
                            <th class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <% 
                        try {
                            Class.forName("com.mysql.jdbc.Driver");
                            Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/escuela", "root", "");
                            Statement stmt = conn.createStatement();
                            ResultSet rs = stmt.executeQuery("SELECT * FROM estudiante");
                            while (rs.next()) {
                        %>
                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><%= rs.getString("id") %></td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><%= rs.getString("nombre") %></td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><%= rs.getString("email") %></td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><%= rs.getString("telefono") %></td>
                            <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                <div class="flex items-center justify-center space-x-2">
                                    <form action="update.jsp" method="get">
                                        <input type="hidden" name="id" value="<%= rs.getString("id") %>">
                                        <button type="submit" class="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700">Editar</button>
                                    </form>
                                    <form action="delete.jsp" method="get">
                                        <input type="hidden" name="id" value="<%= rs.getString("id") %>">
                                        <button type="submit" class="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700">Eliminar</button>
                                    </form>
                                </div>
                            </td>
                        </tr>
                        <% 
                            }
                            conn.close();
                        } catch (Exception e) {
                            out.println(e);
                        }
                        %>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <%-- Notificaciones --%>
    <script>
        <% if (request.getParameter("status") != null && request.getParameter("message") != null) { %>
            var status = "<%= request.getParameter("status") %>";
            var message = "<%= request.getParameter("message") %>";
            if (status === "success") {
                Swal.fire({
                    icon: 'success',
                    title: 'Exito!',
                    text: message,
                });
            } else if (status === "error") {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: message,
                });
            }
        <% } %>
    </script>
</body>
</html>
