'use strict';

/**
 * Portfolio.js controller
 *
 * @description: A set of functions called "actions" for managing `Portfolio`.
 */

module.exports = {

  /**
   * Retrieve portfolio records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.portfolio.search(ctx.query);
    } else {
      return strapi.services.portfolio.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a portfolio record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.portfolio.fetch(ctx.params);
  },

  /**
   * Count portfolio records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.portfolio.count(ctx.query);
  },

  /**
   * Create a/an portfolio record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.portfolio.add(ctx.request.body);
  },

  /**
   * Update a/an portfolio record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.portfolio.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an portfolio record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.portfolio.remove(ctx.params);
  },

  /**
   * Add relation to a/an portfolio record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.portfolio.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an portfolio record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.portfolio.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an portfolio record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.portfolio.removeRelation(ctx.params, ctx.request.body);
  }
};
