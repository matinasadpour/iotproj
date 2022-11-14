module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    await next();
    const { IMEI } = ctx.request.query;
    if (IMEI) {
      let temp = await strapi.db.query("api::led.led").findOne({
        where: { IMEI },
      });
      if (!temp) {
        await strapi.entityService.create("api::led.led", {
          data: { IMEI },
        });
      }
      temp = await strapi.db.query("api::setting.setting").findOne({
        where: { IMEI },
      });
      if (!temp) {
        await strapi.entityService.create("api::setting.setting", {
          data: { IMEI },
        });
      }
      temp = await strapi.db.query("api::patient.patient").findOne({
        where: { IMEI },
      });
      if (!temp) {
        await strapi.entityService.create("api::patient.patient", {
          data: { IMEI },
        });
      }
    }
  };
};
