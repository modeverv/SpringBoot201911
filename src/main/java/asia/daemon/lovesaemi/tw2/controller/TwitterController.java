package asia.daemon.lovesaemi.tw2.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import asia.daemon.lovesaemi.tw2.domain.model.Favo;
import asia.daemon.lovesaemi.tw2.domain.service.FavoService;

@RestController
public class TwitterController {

	@Autowired
	private FavoService favoService;

	@GetMapping("/hello")
	public String getHello() {
		return "ok";
	}
	
	@GetMapping("/favos")
	public List<Favo> getFavo(@RequestParam(name = "offset",required = false) Long offset, @RequestParam(name = "tag", required = false) String tag) {
		List<Favo> result = favoService.getFavos(offset, tag);
		return result;
	}

	@GetMapping("tags")
	public List<String> getTags(){
		return favoService.getTags();
	}
}
