package cn.dreamleilei.eat;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;

/**
 * @author dreamleilei
 * Created on 2020-01-15
 */
@SpringBootApplication
@EnableScheduling
@EnableCaching
@EnableAsync
public class EatRecordApplication {

    public static void main(String[] args) {
        SpringApplication springApplication = new SpringApplication(EatRecordApplication.class);
        springApplication.run(args);
    }
}
