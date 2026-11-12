'use strict';

/**
 * god-art service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::god-art.god-art');
