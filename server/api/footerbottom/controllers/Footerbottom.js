'use strict';

/**
 * Footerbottom.js controller
 *
 * @description: A set of functions called "actions" for managing `Footerbottom`.
 */

module.exports = {

  /**
   * Retrieve footerbottom records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.footerbottom.search(ctx.query);
    } else {
      return strapi.services.footerbottom.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a footerbottom record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.footerbottom.fetch(ctx.params);
  },

  /**
   * Count footerbottom records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.footerbottom.count(ctx.query);
  },

  /**
   * Create a/an footerbottom record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.footerbottom.add(ctx.request.body);
  },

  /**
   * Update a/an footerbottom record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.footerbottom.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an footerbottom record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.footerbottom.remove(ctx.params);
  },

  /**
   * Add relation to a/an footerbottom record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.footerbottom.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an footerbottom record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.footerbottom.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an footerbottom record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.footerbottom.removeRelation(ctx.params, ctx.request.body);
  }
};
