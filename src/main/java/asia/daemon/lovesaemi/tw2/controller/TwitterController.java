package asia.daemon.lovesaemi.tw2.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TwitterController {

	@GetMapping("/hello")
	public String getHello() {
		return "ok";
	}
}
