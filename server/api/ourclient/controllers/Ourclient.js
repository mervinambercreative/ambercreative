'use strict';

/**
 * Ourclient.js controller
 *
 * @description: A set of functions called "actions" for managing `Ourclient`.
 */

module.exports = {

  /**
   * Retrieve ourclient records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.ourclient.search(ctx.query);
    } else {
      return strapi.services.ourclient.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a ourclient record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.ourclient.fetch(ctx.params);
  },

  /**
   * Count ourclient records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.ourclient.count(ctx.query);
  },

  /**
   * Create a/an ourclient record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.ourclient.add(ctx.request.body);
  },

  /**
   * Update a/an ourclient record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.ourclient.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an ourclient record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.ourclient.remove(ctx.params);
  },

  /**
   * Add relation to a/an ourclient record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.ourclient.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an ourclient record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.ourclient.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an ourclient record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.ourclient.removeRelation(ctx.params, ctx.request.body);
  }
};
