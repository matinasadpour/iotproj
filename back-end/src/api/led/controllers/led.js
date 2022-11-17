"use strict";

/**
 * data controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::led.led", ({ strapi }) => ({
  async update(ctx) {
    let data = ctx.request.query;
    if (data.IMEI) {
      for (const prop in data) {
        if (prop === "IMEI") continue;
        if (!(data[prop] === "LOW" || data[prop] === "HIGH")) {
          return ctx.send(
            {
              message: "Invalid parameters!",
            },
            400
          );
        }
      }
      const entry = await strapi.db.query("api::led.led").findOne({
        where: { IMEI: data.IMEI },
      });
      const temp = await strapi.db.query("api::led.led").update({
        where: { IMEI: data.IMEI },
        data: {
          led1: data.led1 || entry.led1,
          led2: data.led2 || entry.led2,
          led3: data.led3 || entry.led3,
        },
      });
      return ctx.send(temp, 200);
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
      const entry = await strapi.db.query("api::led.led").findOne({
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
