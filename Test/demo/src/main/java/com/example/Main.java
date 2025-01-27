package com.example;

import java.util.function.Supplier;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Main {
    public static void main(String[] args) {
        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(ProjectConfig.class);
        Parrot p = context.getBean(Parrot.class);
        System.out.println(p.getName());

        Parrot x = new Parrot(); 
        x.setName("Tim"); 

        Supplier<Parrot> parrotSupplier = () -> x;

        context.registerBean("parrotTim", Parrot.class, parrotSupplier);
        Parrot t = context.getBean("parrotTim", Parrot.class);
        System.out.println(t.getName());
    }
}
