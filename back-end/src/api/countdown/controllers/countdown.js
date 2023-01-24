"use strict";

/**
 * data controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::countdown.countdown",
  ({ strapi }) => ({
    async update(ctx) {
      let data = ctx.request.query;
      if (data.IMEI) {
        if (data.countdown === "start") {
          const temp = await strapi.db
            .query("api::countdown.countdown")
            .update({
              where: { IMEI: data.IMEI },
              data: {
                date: Date.now(),
              },
            });
          return ctx.send(temp, 200);
        } else if (data.countdown === "stop") {
          const temp = await strapi.db
            .query("api::countdown.countdown")
            .update({
              where: { IMEI: data.IMEI },
              data: {
                date: null,
              },
            });
          return ctx.send(temp, 200);
        } else {
          return ctx.send(
            {
              message: "Invalid parameters!",
            },
            400
          );
        }
      } else {
        return ctx.send(
          {
            message: "IMEI required!",
          },
          400
        );
      }
    },

    async find(ctx) {
      let { IMEI } = ctx.request.query;
      if (IMEI) {
        const entry = await strapi.db
          .query("api::countdown.countdown")
          .findOne({
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
  })
);
