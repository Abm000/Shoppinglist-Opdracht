package com.example.backend;

import com.example.backend.models.Product;
import com.example.backend.models.User;
import com.example.backend.repository.ProductServ;
import com.example.backend.repository.UserServ;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class BackendApplication implements CommandLineRunner {
    @Autowired
    private UserServ userServ;

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

        User user = new User();
        user.setPassword("30");
        user.setUserName("John");
        userServ.save(user);
    }

/*    @Bean
    public WebMvcConfigurer configure() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry reg) {
                reg.addMapping("/*").allowedOrigins("*");
            }
        };
    }*/
}
