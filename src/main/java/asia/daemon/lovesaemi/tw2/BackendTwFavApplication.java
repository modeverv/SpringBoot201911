package asia.daemon.lovesaemi.tw2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendTwFavApplication {

	public static void main(String[] args) {
		System.setProperty("tomcat.util.http.parser.HttpParser.requestTargetAllow", "{}");
		SpringApplication.run(BackendTwFavApplication.class, args);
	}

}
