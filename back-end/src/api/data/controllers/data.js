"use strict";

/**
 * data controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::data.data", ({ strapi }) => ({
  async create(ctx) {
    let data = ctx.request.query;
    await strapi.entityService.create("api::data.data", {
      data: {
        IMEI: data.IMEI,
        type: data.type,

        a1: data.a1,
        a2: data.a2,
        a3: data.a3,
        a4: data.a4,

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
