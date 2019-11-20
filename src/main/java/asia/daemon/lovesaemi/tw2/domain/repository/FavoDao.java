package asia.daemon.lovesaemi.tw2.domain.repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import asia.daemon.lovesaemi.tw2.domain.model.Favo;

@Repository
public class FavoDao {

	@Autowired
	JdbcTemplate jdbc;

	@Autowired
	private NamedParameterJdbcTemplate npJdbc;

	public List<Favo> getFav(Long offset, String tag) {
		Map<String, Object> params = new HashMap<>();
		String sql = " SELECT * FROM twitter ";
		if(null != tag) {
			if("::::NULL::::".equals(tag)) {
				sql = sql + " WHERE tag IS NULL";
			} else {
				sql = sql + " WHERE tag = :tag ";
				params.put("tag", tag);
			}
		}
		sql = sql + " ORDER by created_at desc ";
		if(null != offset) {
			sql = sql + " limit 50 offset " + String.valueOf(offset);
		} else {
			sql = sql + " limit 50 ";
		}
		return  npJdbc.query(sql, params, new BeanPropertyRowMapper<Favo>(Favo.class));
	}

	public List<Favo> getTags() {
		Map<String, Object> params = new HashMap<>();
		String sql = " select distinct tag from twitter where tag is not null ";
		return npJdbc.query(sql, params, new BeanPropertyRowMapper<Favo>(Favo.class));
	}
}
