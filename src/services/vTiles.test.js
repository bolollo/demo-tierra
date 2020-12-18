// @flow
"use strict";

const VTilesService = require("./vTiles");

describe("Test the VTilesService", () => {

	test("getTile should return a protobuf", async () => {

		const tile = await VTilesService.getTile(4, 3, 7);
		expect(tile).toBeInstanceOf(Buffer);

	});

});
