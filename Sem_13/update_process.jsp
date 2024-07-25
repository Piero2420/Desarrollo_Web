<%@ page import="java.sql.*" %>
<%
String id = request.getParameter("id");
String nombre = request.getParameter("nombre");
String email = request.getParameter("email");
String telefono = request.getParameter("telefono");
String status = "";
String message = "";
try {
    Class.forName("com.mysql.jdbc.Driver");
    Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/escuela", "root", "");
    PreparedStatement ps = conn.prepareStatement("UPDATE estudiante SET nombre=?, email=?, telefono=? WHERE id=?");
    ps.setString(1, nombre);
    ps.setString(2, email);
    ps.setString(3, telefono);
    ps.setString(4, id);
    int x = ps.executeUpdate();
    if (x > 0) {
        status = "success";
        message = "Estudiante actualizado correctamente";
    } else {
        status = "error";
        message = "No se pudo actualizar el estudiante";
    }
    conn.close();
} catch (Exception e) {
    status = "error";
    message = e.getMessage();
}
response.sendRedirect("index.jsp?status=" + status + "&message=" + message);
%>
