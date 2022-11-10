"use strict";

/**
 * data service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::error.error");
