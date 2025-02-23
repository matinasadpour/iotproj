"use strict";

/**
 * led router
 */

module.exports = {
  routes: [
    {
      // Path defined with an URL parameter
      method: "POST",
      path: "/leds",
      handler: "led.update",
    },
    {
      // Path defined with a regular expression
      method: "GET",
      path: "/leds", // Only match when the URL parameter is composed of lowercase letters
      handler: "led.find",
    },
  ],
};
