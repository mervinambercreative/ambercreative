'use strict';

/**
 * Frontpage.js controller
 *
 * @description: A set of functions called "actions" for managing `Frontpage`.
 */

module.exports = {

  /**
   * Retrieve frontpage records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.frontpage.search(ctx.query);
    } else {
      return strapi.services.frontpage.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a frontpage record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.frontpage.fetch(ctx.params);
  },

  /**
   * Count frontpage records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.frontpage.count(ctx.query);
  },

  /**
   * Create a/an frontpage record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.frontpage.add(ctx.request.body);
  },

  /**
   * Update a/an frontpage record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.frontpage.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an frontpage record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.frontpage.remove(ctx.params);
  },

  /**
   * Add relation to a/an frontpage record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.frontpage.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an frontpage record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.frontpage.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an frontpage record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.frontpage.removeRelation(ctx.params, ctx.request.body);
  }
};
