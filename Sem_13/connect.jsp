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
    PreparedStatement ps = conn.prepareStatement("INSERT INTO estudiante (id, nombre, email, telefono) VALUES (?, ?, ?, ?)");
    ps.setString(1, id);
    ps.setString(2, nombre);
    ps.setString(3, email);
    ps.setString(4, telefono);
    int x = ps.executeUpdate();
    if (x > 0) {
        status = "success";
        message = "Registro exitoso";
    } else {
        status = "error";
        message = "Registro fallido";
    }
    conn.close();
} catch (Exception e) {
    status = "error";
    message = e.getMessage();
}
response.sendRedirect("index.jsp?status=" + status + "&message=" + message);
%>
