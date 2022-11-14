"use strict";

/**
 * data controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::error.error", ({ strapi }) => ({
  async create(ctx) {
    let data = ctx.request.query;
    await strapi.entityService.create("api::error.error", {
      data: {
        IMEI: data.IMEI,
        d1: data.d1,
        d2: data.d2,
        d3: data.d3,
        d4: data.d4,
      },
    });
    ctx.send(
      {
        message: "Successful!",
      },
      201
    );
  },
}));
