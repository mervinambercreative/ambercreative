'use strict';

/**
 * Career.js controller
 *
 * @description: A set of functions called "actions" for managing `Career`.
 */

module.exports = {

  /**
   * Retrieve career records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.career.search(ctx.query);
    } else {
      return strapi.services.career.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a career record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.career.fetch(ctx.params);
  },

  /**
   * Count career records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.career.count(ctx.query);
  },

  /**
   * Create a/an career record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.career.add(ctx.request.body);
  },

  /**
   * Update a/an career record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.career.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an career record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.career.remove(ctx.params);
  },

  /**
   * Add relation to a/an career record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.career.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an career record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.career.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an career record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.career.removeRelation(ctx.params, ctx.request.body);
  }
};
