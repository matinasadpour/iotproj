"use strict";

/**
 * led router
 */

module.exports = {
  routes: [
    {
      // Path defined with an URL parameter
      method: "POST",
      path: "/countdowns",
      handler: "countdown.update",
    },
    {
      // Path defined with a regular expression
      method: "GET",
      path: "/countdowns", // Only match when the URL parameter is composed of lowercase letters
      handler: "countdown.find",
    },
  ],
};
