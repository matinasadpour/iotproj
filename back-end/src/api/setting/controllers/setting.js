"use strict";

/**
 * setting controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::setting.setting", ({ strapi }) => ({
  async find(ctx) {
    const { IMEI } = ctx.request.query;
    if (IMEI) {
      const entry = await strapi.db.query("api::setting.setting").findOne({
        where: { IMEI },
      });
      return ctx.send(entry, 200);
    } else {
      return ctx.send(
        {
          message: "IMEI required!",
        },
        400
      );
    }
  },
}));
