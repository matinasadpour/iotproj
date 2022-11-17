"use strict";

/**
 * patient controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::patient.patient", ({ strapi }) => ({
  async find(ctx) {
    if (ctx.state.user.role.name === "doctor") {
      const entries = await strapi.entityService.findMany(
        "api::patient.patient",
        {
          filters: { doctor: ctx.state.user.id },
        }
      );
      if (entries.length) return entries;
      ctx.response.status = 204;
    } else if (ctx.state.user.role.name === "admin") {
      return await super.find(ctx);
    }
  },
}));
