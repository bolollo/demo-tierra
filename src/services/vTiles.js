// @flow
"use strict";

const db = require("../db/db");

class vTilesService {

	static async getTile(z: number, x: number, y: number) {

		const SQL = `SELECT public.tile_pbf(${z}, ${x}, ${y})`;

		const {rows} = await db.query(SQL);

		return rows[0].tile_pbf;

	}

}

module.exports = vTilesService;
