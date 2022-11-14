"use strict";

/**
 * data controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::led.led", ({ strapi }) => ({
  // async update(ctx) {
  //   let data = ctx.request.query;
  //   if (data.IMEI) {
  //     const entry = await strapi.db
  //       .query("plugin::users-permissions.user")
  //       .findOne({
  //         where: { IMEI: data.IMEI },
  //         populate: ["role"],
  //       });
  //     if (entry && entry.role.name === "admin") {
  //       const entry3 = await strapi.db.query("api::led.led").findOne({
  //         where: { IMEI: data.IMEI },
  //       });
  //       for (const prop in data) {
  //         if (prop === "IMEI") continue;
  //         if (!(data[prop] === "LOW" || data[prop] === "HIGH")) {
  //           return ctx.send(
  //             {
  //               message: "Invalid parameters!",
  //             },
  //             400
  //           );
  //         }
  //       }
  //       if (entry3) {
  //         // updaate
  //         const temp = await strapi.db.query("api::led.led").update({
  //           where: { IMEI: data.IMEI },
  //           data: {
  //             led1: data.led1 || entry3.led1,
  //             led2: data.led2 || entry3.led2,
  //             led3: data.led3 || entry3.led3,
  //           },
  //         });
  //         return ctx.send(temp, 200);
  //       } else {
  //         // create
  //         const temp = await strapi.db.query("api::led.led").create({
  //           data: {
  //             IMEI: data.IMEI,
  //             led1: data.led1,
  //             led2: data.led2,
  //             led3: data.led3,
  //           },
  //         });
  //         ctx.send(temp, 200);
  //       }
  //     } else {
  //       return ctx.send(
  //         {
  //           message: "Invalid IMEI!",
  //         },
  //         400
  //       );
  //     }
  //   } else {
  //     return ctx.send(
  //       {
  //         message: "IMEI required!",
  //       },
  //       400
  //     );
  //   }
  // },
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
