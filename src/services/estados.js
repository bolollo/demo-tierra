// @flow
"use strict";

const db = require("../db/db");

class EstadosService {

	static async getEstados() {

		const SQL = "SELECT ogc_fid, nombre_igg, p_total FROM public.estados order by p_total DESC";

		const {rows} = await db.query(SQL);

		return rows;

	}

}

module.exports = EstadosService;
