package com.reins.sjtu_stranding;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


//@EntityScan("com.reins.zyc_bookstore.entity")
//@ComponentScan("com.reins.zyc_bookstore.controller")


@SpringBootApplication
public class SJTUStrandingApplication {

    public static void main(String[] args) {
        SpringApplication.run(SJTUStrandingApplication.class, args);
    }

}
