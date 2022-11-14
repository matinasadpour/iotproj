"use strict";

/**
 * data router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::data.data", {
  config: {
    create: {
      middlewares: ["api::data.data"],
    },
  },
});
