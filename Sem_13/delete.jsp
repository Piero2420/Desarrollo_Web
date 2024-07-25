<%@ page import="java.sql.*" %>
<%
String id = request.getParameter("id");
String status = "";
String message = "";
try {
    Class.forName("com.mysql.jdbc.Driver");
    Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/escuela", "root", "");
    PreparedStatement ps = conn.prepareStatement("DELETE FROM estudiante WHERE id=?");
    ps.setString(1, id);
    int x = ps.executeUpdate();
    if (x > 0) {
        status = "success";
        message = "Estudiante eliminado correctamente";
    } else {
        status = "error";
        message = "No se pudo eliminar el estudiante";
    }
    conn.close();
} catch (Exception e) {
    status = "error";
    message = e.getMessage();
}
response.sendRedirect("index.jsp?status=" + status + "&message=" + message);
%>
