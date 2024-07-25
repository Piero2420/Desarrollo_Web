package com.prueba.proy01;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class rutas {
    @GetMapping("/home")
    public String home() {
        return "<h2>Desde Home Hola <h2>";
    }

    @GetMapping(path = "/cursos")
    public String cursos() {
        return "<h2>Desde Cursos Hola <h2>";
    }

    @GetMapping("estudiantes")
    public String estudiantes(@RequestParam String name, @RequestParam String address) {
        return "<h2>Desde Estudiantes Hola: " + name + " " + address + "</h2>";
    }
}
