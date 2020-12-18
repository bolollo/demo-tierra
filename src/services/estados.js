// @flow
"use strict";

const db = require("../db/db");

class EstadosService {

	static async getEstados() {

		const SQL = "SELECT nombre_igg, p_total FROM public.estados";

		const {rows} = await db.query(SQL);

		return rows;

	}

}

module.exports = EstadosService;
