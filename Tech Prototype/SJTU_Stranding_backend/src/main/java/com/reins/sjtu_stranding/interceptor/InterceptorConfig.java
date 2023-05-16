package com.reins.sjtu_stranding.interceptor;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

//拦截器（Interceptor）同 Servlet 中的过滤器（Filter） 类似
@Configuration//标识当前类为配置类
public class InterceptorConfig implements WebMvcConfigurer {//配置拦截器
    private CorsConfiguration buildConfig() {
        //返回一个CorsConfiguration对象，用于配置跨域资源共享
        CorsConfiguration corsConfig = new CorsConfiguration();
        corsConfig.addAllowedOrigin("http://localhost:3000/");//设置允许的请求来源
        corsConfig.addAllowedHeader("*");
        corsConfig.addAllowedMethod("*");
        corsConfig.setAllowCredentials(true);//设置允许发送身份验证信息
        return corsConfig;
    }

    @Bean
    //将下面的方法返回的对象注册为Bean，以便在Spring容器中管理
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();//基于URL的跨域资源共享配置
        source.registerCorsConfiguration("/**", buildConfig());
        return new CorsFilter(source);
    }
}
