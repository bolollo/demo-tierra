// @flow
"use strict";

const Router = require("express").Router;
const EstadosService = require("../services/estados");
const VTilesService = require("../services/vTiles");

module.exports = () => {

	const api = new Router();

	api.get("/:z/:x/:y.pbf", async (req, res) => {

		const { z, x, y } = req.params;
		res.setHeader("Content-Type", "application/x-protobuf");
		res.send(await VTilesService.getTile(z, x, y));

	});

	api.get("/estados", async (req, res) => {

		res.json(await EstadosService.getEstados());

	});

	return api;

};
