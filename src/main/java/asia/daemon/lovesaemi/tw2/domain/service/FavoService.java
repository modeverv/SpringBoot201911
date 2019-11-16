package asia.daemon.lovesaemi.tw2.domain.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import asia.daemon.lovesaemi.tw2.domain.model.Favo;
import asia.daemon.lovesaemi.tw2.domain.repository.FavoDao;

@Service
public class FavoService {
	@Autowired
	private FavoDao dao;

	public List<Favo> getFavos(Long offset, String tag) {
		return dao.getFav(offset, tag);
	}

	public List<String> getTags(){
		List<Favo> list = dao.getTags();
		List<String> result = new ArrayList<String>();
		for (Favo favo : list) {
			result.add(favo.getTag());
		}
		return result;
	}
}
