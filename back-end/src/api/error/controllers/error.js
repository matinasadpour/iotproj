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
        error: data.error,
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
