package com.example;


import org.springframework.context.annotation.AnnotationConfigApplicationContext;

// Special class in Spring apps that is used to configure the Spring container
// @Configuration
// public class ProjectConfig {

//     @Bean
//     Parrot parrot() {
//         var p = new Parrot();
//         p.setName("Parrot");
//         return p;
//     }

//     @Bean
//     String greet() {
//         return "Hi, there!";
//     }

//     @Bean 
//     Integer ten() {
//         return 10;
//     }
// }

// public class Parrot {
//     private String name;

//     public void setName(String name) {
//         this.name = name;
//     }
    
//     public String getName() {
//         return name;
//     }
// }

public class Main {
    public static void main(String[] args) {
        
        // Create a class to configure the Spring container 
        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(ProjectConfig.class);

        // Get the Parrot bean from the container
        Parrot p = context.getBean(Parrot.class);
        System.out.println(p.getName());

        String greeting = context.getBean(String.class);
        System.out.println(greeting);

        Integer ten = context.getBean(Integer.class);
        System.out.println(ten);

        // instantiated Parrot object but not inside the container
        Parrot p_outside = new Parrot();
    }
}
