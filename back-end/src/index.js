"use strict";

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    // strapi.service("plugin::users-permissions.user").find = (id) => {
    //   return strapi
    //     .query("plugin::users-permissions.user")
    //     .findOne({ where: { id }, populate: ["role"] });
    // };
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
    strapi.db.lifecycles.subscribe({
      models: ["plugin::users-permissions.user"],

      async afterCreate(event) {
        const temp = await strapi.db.query("api::led.led").create({
          data: {
            IMEI: event.result.IMEI,
          },
        });
      },
    });
  },
};
