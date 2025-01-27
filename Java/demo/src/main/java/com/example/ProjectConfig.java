package com.example;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ProjectConfig {

    @Bean
    Parrot parrot() {
        Parrot p = new Parrot();
        p.setName("Parrot");
        // System.out.println(p.getName());
        return p;
    }

    @Bean
    String greet() {
        return "Hi, there!";
    }

    @Bean
    Integer ten() {
        return 10;
    }

}
