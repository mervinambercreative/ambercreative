'use strict';

/**
 * Header.js controller
 *
 * @description: A set of functions called "actions" for managing `Header`.
 */

module.exports = {

  /**
   * Retrieve header records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.header.search(ctx.query);
    } else {
      return strapi.services.header.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a header record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.header.fetch(ctx.params);
  },

  /**
   * Count header records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.header.count(ctx.query);
  },

  /**
   * Create a/an header record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.header.add(ctx.request.body);
  },

  /**
   * Update a/an header record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.header.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an header record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.header.remove(ctx.params);
  },

  /**
   * Add relation to a/an header record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.header.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an header record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.header.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an header record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.header.removeRelation(ctx.params, ctx.request.body);
  }
};
