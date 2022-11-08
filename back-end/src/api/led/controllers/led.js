'use strict';

/**
 * data controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::led.led', ({ strapi }) => ({
  async update(ctx) {
    let data = ctx.request.query;
    if (data.IMEI) {
      const entry = await strapi.db
        .query('plugin::users-permissions.user')
        .findOne({ where: { IMEI: data.IMEI } });
      ctx.send(entry, 400);
    } else {
      ctx.send(
        {
          message: 'IMEI required!',
        },
        400
      );
    }
  },
}));
