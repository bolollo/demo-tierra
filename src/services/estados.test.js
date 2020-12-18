// @flow
"use strict";

const EstadosService = require("./estados");

describe("Test the EstadosService", () => {

	test("getEstados should return a Array of 32 items", async () => {

		expect(await EstadosService.getEstados()).toHaveLength(32);

	});

	test("getEstados item should have propeties nombre_igg and p_total", async () => {

		const estados = await EstadosService.getEstados();
		expect(estados[0]).toHaveProperty("nombre_igg");
		expect(estados[0]).toHaveProperty("p_total");

	});

});
