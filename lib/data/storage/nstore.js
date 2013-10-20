var klass = require('klass');
var nStore = require('nstore');
nStore = nStore.extend(require('nstore/query')());

/*
 * NStore Storage class.
 */

var NStorePersistentStorage = module.exports = klass({

  initialize: function(config, cb) {
    cb = cb || function(){};

    this.config = config;

    var dbLocation = config.location||'NStorePersistentStorage.db';

    console.log("dbLocation = ",dbLocation);

    this._index = nStore.new(dbLocation, function () {
      console.log("NStorePersistentStorage loaded");
      cb.call(this, this);
    });
  },

  save: function(kv, cb) {
    cb = cb || function(){};
    var that = this;

    this._index.save(kv.key, kv, function(err){
      if (err) { throw err; }
      cb.call(that, kv);
    });

    return this;
  },

  get: function(key, cb) {
    cb = cb || function(){};
    var that = this;

    this._index.get(key, function (err, doc, key) {
        if (err) {
          console.log(err);
          cb.call(that, null);
          return that;
        }
        cb.call(that, doc.value);
    });

    return this;
  },

  exists: function(key, cb) {
    var that = this;
    this._index.get(key, function (err, doc, key) {
        if (err) {
          console.log(err);
          cb.call(that, false);
          return that;
        }
        cb.call(that, true);
    });

    return this;

  },

  remove: function(key, cb) {
    cb = cb || function(){};
    var that = this;
    this._index.remove(key, function (err) {
        if (err) {
          console.log(err);
          return that;
        }
        cb.call(that, true);
    });
    return this;
  },

  nuke: function(cb) {
    cb = cb || function(){};
    var that = this;
    this._index.clear(function (err) {
        if (err) { throw err; }
        cb.call(that);
      });
  },

  each: function(cb) {
    var that = this;
    this._index.all(function(err, results){
      if (err) { throw err; }
      for(var key in results) {
        // Note: appears to be a bug in the example basic store?
        // Seems weird to return just the key, but I'll do it to maintain consistency.
        cb.call(that, key);
      }
    });
  },

  keys: function(cb) {
    var that = this;
    this._index.all(function(err, results){
      if (err) { throw err; }
      var keys = [];
      for(var key in results) {
        keys.push(key);
      }
      cb(keys);
    });
  }
});