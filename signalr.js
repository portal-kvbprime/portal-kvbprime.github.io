!
function(global, factory) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = factory() : "function" == typeof define && define.amd ? define(factory) : global.signalR = factory()
} (this,
function() {
  "use strict";
  var commonjsGlobal = "undefined" != typeof window ? window: "undefined" != typeof global ? global: "undefined" != typeof self ? self: {};
  function commonjsRequire() {
    throw new Error("Dynamic requires are not currently supported by rollup-plugin-commonjs")
  }
  function unwrapExports(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x.
  default:
    x
  }
  function createCommonjsModule(fn, module) {
    return fn(module = {
      exports: {}
    },
    module.exports),
    module.exports
  }
  var extendStatics = Object.setPrototypeOf || {
    __proto__: []
  }
  instanceof Array &&
  function(d, b) {
    d.__proto__ = b
  } ||
  function(d, b) {
    for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p])
  };
  var __assign = Object.assign ||
  function(t) {
    for (var s, i = 1,
    n = arguments.length; i < n; i++) for (var p in s = arguments[i]) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
    return t
  };
  function __values(o) {
    var m = "function" == typeof Symbol && o[Symbol.iterator],
    i = 0;
    return m ? m.call(o) : {
      next: function() {
        return o && i >= o.length && (o = void 0),
        {
          value: o && o[i++],
          done: !o
        }
      }
    }
  }
  function __read(o, n) {
    var m = "function" == typeof Symbol && o[Symbol.iterator];
    if (!m) return o;
    var r, e, i = m.call(o),
    ar = [];
    try {
      for (; (void 0 === n || 0 < n--) && !(r = i.next()).done;) ar.push(r.value)
    } catch(error) {
      e = {
        error: error
      }
    } finally {
      try {
        r && !r.done && (m = i.
        return) && m.call(i)
      } finally {
        if (e) throw e.error
      }
    }
    return ar
  }
  function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v)
  }
  var tslib_1 = Object.freeze({
    __extends: function(d, b) {
      function __() {
        this.constructor = d
      }
      extendStatics(d, b),
      d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __)
    },
    __assign: __assign,
    __rest: function(s, e) {
      var t = {};
      for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0 && (t[p] = s[p]);
      if (null != s && "function" == typeof Object.getOwnPropertySymbols) {
        var i = 0;
        for (p = Object.getOwnPropertySymbols(s); i < p.length; i++) e.indexOf(p[i]) < 0 && (t[p[i]] = s[p[i]])
      }
      return t
    },
    __decorate: function(decorators, target, key, desc) {
      var d, c = arguments.length,
      r = c < 3 ? target: null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; 0 <= i; i--)(d = decorators[i]) && (r = (c < 3 ? d(r) : 3 < c ? d(target, key, r) : d(target, key)) || r);
      return 3 < c && r && Object.defineProperty(target, key, r),
      r
    },
    __param: function(paramIndex, decorator) {
      return function(target, key) {
        decorator(target, key, paramIndex)
      }
    },
    __metadata: function(metadataKey, metadataValue) {
      if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(metadataKey, metadataValue)
    },
    __awaiter: function(thisArg, _arguments, P, generator) {
      return new(P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value))
          } catch(e) {
            reject(e)
          }
        }
        function rejected(value) {
          try {
            step(generator.
            throw (value))
          } catch(e) {
            reject(e)
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : new P(function(resolve) {
            resolve(result.value)
          }).then(fulfilled, rejected)
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next())
      })
    },
    __generator: function(thisArg, body) {
      var f, y, t, g, _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1]
        },
        trys: [],
        ops: []
      };
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      },
      "function" == typeof Symbol && (g[Symbol.iterator] = function() {
        return this
      }),
      g;
      function verb(n) {
        return function(v) {
          return function(op) {
            if (f) throw new TypeError("Generator is already executing.");
            for (; _;) try {
              if (f = 1, y && (t = y[2 & op[0] ? "return": op[0] ? "throw": "next"]) && !(t = t.call(y, op[1])).done) return t;
              switch (y = 0, t && (op = [0, t.value]), op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                return _.label++,
                {
                  value: op[1],
                  done: !1
                };
              case 5:
                _.label++,
                y = op[1],
                op = [0];
                continue;
              case 7:
                op = _.ops.pop(),
                _.trys.pop();
                continue;
              default:
                if (! (t = 0 < (t = _.trys).length && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
                  _ = 0;
                  continue
                }
                if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break
                }
                if (6 === op[0] && _.label < t[1]) {
                  _.label = t[1],
                  t = op;
                  break
                }
                if (t && _.label < t[2]) {
                  _.label = t[2],
                  _.ops.push(op);
                  break
                }
                t[2] && _.ops.pop(),
                _.trys.pop();
                continue
              }
              op = body.call(thisArg, _)
            } catch(e) {
              op = [6, e],
              y = 0
            } finally {
              f = t = 0
            }
            if (5 & op[0]) throw op[1];
            return {
              value: op[0] ? op[1] : void 0,
              done: !0
            }
          } ([n, v])
        }
      }
    },
    __exportStar: function(m, exports) {
      for (var p in m) exports.hasOwnProperty(p) || (exports[p] = m[p])
    },
    __values: __values,
    __read: __read,
    __spread: function() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
      return ar
    },
    __await: __await,
    __asyncGenerator: function(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var i, g = generator.apply(thisArg, _arguments || []),
      q = [];
      return i = {},
      verb("next"),
      verb("throw"),
      verb("return"),
      i[Symbol.asyncIterator] = function() {
        return this
      },
      i;
      function verb(n) {
        g[n] && (i[n] = function(v) {
          return new Promise(function(a, b) {
            1 < q.push([n, v, a, b]) || resume(n, v)
          })
        })
      }
      function resume(n, v) {
        try { (r = g[n](v)).value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r)
        } catch(e) {
          settle(q[0][3], e)
        }
        var r
      }
      function fulfill(value) {
        resume("next", value)
      }
      function reject(value) {
        resume("throw", value)
      }
      function settle(f, v) {
        f(v),
        q.shift(),
        q.length && resume(q[0][0], q[0][1])
      }
    },
    __asyncDelegator: function(o) {
      var i, p;
      return i = {},
      verb("next"),
      verb("throw",
      function(e) {
        throw e
      }),
      verb("return"),
      i[Symbol.iterator] = function() {
        return this
      },
      i;
      function verb(n, f) {
        o[n] && (i[n] = function(v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: "return" === n
          }: f ? f(v) : v
        })
      }
    },
    __asyncValues: function(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator];
      return m ? m.call(o) : __values(o)
    },
    __makeTemplateObject: function(cooked, raw) {
      return Object.defineProperty ? Object.defineProperty(cooked, "raw", {
        value: raw
      }) : cooked.raw = raw,
      cooked
    },
    __importStar: function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (null != mod) for (var k in mod) Object.hasOwnProperty.call(mod, k) && (result[k] = mod[k]);
      return result.
    default = mod,
      result
    },
    __importDefault: function(mod) {
      return mod && mod.__esModule ? mod: {
      default:
        mod
      }
    }
  }),
  Errors = (createCommonjsModule(function(module, exports) {
    module.exports = function() {
      function isFunction(x) {
        return "function" == typeof x
      }
      var isArray = Array.isArray ? Array.isArray: function(x) {
        return "[object Array]" === Object.prototype.toString.call(x)
      },
      len = 0,
      vertxNext = void 0,
      customSchedulerFn = void 0,
      asap = function(callback, arg) {
        queue[len] = callback,
        queue[len + 1] = arg,
        2 === (len += 2) && (customSchedulerFn ? customSchedulerFn(flush) : scheduleFlush())
      },
      browserWindow = "undefined" != typeof window ? window: void 0,
      browserGlobal = browserWindow || {},
      BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver,
      isNode = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process),
      isWorker = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;
      function useSetTimeout() {
        var globalSetTimeout = setTimeout;
        return function() {
          return globalSetTimeout(flush, 1)
        }
      }
      var queue = new Array(1e3);
      function flush() {
        for (var i = 0; i < len; i += 2) {
          var callback = queue[i],
          arg = queue[i + 1];
          callback(arg),
          queue[i] = void 0,
          queue[i + 1] = void 0
        }
        len = 0
      }
      var channel, iterations, observer, node, scheduleFlush = void 0;
      function then(onFulfillment, onRejection) {
        var parent = this,
        child = new this.constructor(noop);
        void 0 === child[PROMISE_ID] && makePromise(child);
        var _state = parent._state;
        if (_state) {
          var callback = arguments[_state - 1];
          asap(function() {
            return invokeCallback(_state, child, callback, parent._result)
          })
        } else subscribe(parent, child, onFulfillment, onRejection);
        return child
      }
      function resolve$1(object) {
        if (object && "object" == typeof object && object.constructor === this) return object;
        var promise = new this(noop);
        return resolve(promise, object),
        promise
      }
      isNode ? scheduleFlush = function() {
        return process.nextTick(flush)
      }: BrowserMutationObserver ? (iterations = 0, observer = new BrowserMutationObserver(flush), node = document.createTextNode(""), observer.observe(node, {
        characterData: !0
      }), scheduleFlush = function() {
        node.data = iterations = ++iterations % 2
      }) : isWorker ? ((channel = new MessageChannel).port1.onmessage = flush, scheduleFlush = function() {
        return channel.port2.postMessage(0)
      }) : scheduleFlush = void 0 === browserWindow ?
      function() {
        try {
          var r = commonjsRequire,
          vertx = r("vertx");
          return void 0 === (vertxNext = vertx.runOnLoop || vertx.runOnContext) ? useSetTimeout() : function() {
            vertxNext(flush)
          }
        } catch(e) {
          return useSetTimeout()
        }
      } () : useSetTimeout();
      var PROMISE_ID = Math.random().toString(36).substring(16);
      function noop() {}
      var PENDING = void 0,
      FULFILLED = 1,
      REJECTED = 2,
      GET_THEN_ERROR = new ErrorObject;
      function getThen(promise) {
        try {
          return promise.then
        } catch(error) {
          return GET_THEN_ERROR.error = error,
          GET_THEN_ERROR
        }
      }
      function handleMaybeThenable(promise, maybeThenable, then$$1) {
        maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1 ?
        function(promise, thenable) {
          thenable._state === FULFILLED ? fulfill(promise, thenable._result) : thenable._state === REJECTED ? reject(promise, thenable._result) : subscribe(thenable, void 0,
          function(value) {
            return resolve(promise, value)
          },
          function(reason) {
            return reject(promise, reason)
          })
        } (promise, maybeThenable) : then$$1 === GET_THEN_ERROR ? (reject(promise, GET_THEN_ERROR.error), GET_THEN_ERROR.error = null) : void 0 === then$$1 ? fulfill(promise, maybeThenable) : isFunction(then$$1) ?
        function(promise, thenable, then$$1) {
          asap(function(promise) {
            var sealed = !1,
            error = function(then$$1, value, fulfillmentHandler, rejectionHandler) {
              try {
                then$$1.call(value, fulfillmentHandler, rejectionHandler)
              } catch(e) {
                return e
              }
            } (then$$1, thenable,
            function(value) {
              sealed || (sealed = !0, thenable !== value ? resolve(promise, value) : fulfill(promise, value))
            },
            function(reason) {
              sealed || (sealed = !0, reject(promise, reason))
            },
            promise._label); ! sealed && error && (sealed = !0, reject(promise, error))
          },
          promise)
        } (promise, maybeThenable, then$$1) : fulfill(promise, maybeThenable)
      }
      function resolve(promise, value) {
        var x, type;
        promise === value ? reject(promise, new TypeError("You cannot resolve a promise with itself")) : (type = typeof(x = value), null === x || "object" !== type && "function" !== type ? fulfill(promise, value) : handleMaybeThenable(promise, value, getThen(value)))
      }
      function publishRejection(promise) {
        promise._onerror && promise._onerror(promise._result),
        publish(promise)
      }
      function fulfill(promise, value) {
        promise._state === PENDING && (promise._result = value, promise._state = FULFILLED, 0 !== promise._subscribers.length && asap(publish, promise))
      }
      function reject(promise, reason) {
        promise._state === PENDING && (promise._state = REJECTED, promise._result = reason, asap(publishRejection, promise))
      }
      function subscribe(parent, child, onFulfillment, onRejection) {
        var _subscribers = parent._subscribers,
        length = _subscribers.length;
        parent._onerror = null,
        _subscribers[length] = child,
        _subscribers[length + FULFILLED] = onFulfillment,
        _subscribers[length + REJECTED] = onRejection,
        0 === length && parent._state && asap(publish, parent)
      }
      function publish(promise) {
        var subscribers = promise._subscribers,
        settled = promise._state;
        if (0 !== subscribers.length) {
          for (var child = void 0,
          callback = void 0,
          detail = promise._result,
          i = 0; i < subscribers.length; i += 3) child = subscribers[i],
          callback = subscribers[i + settled],
          child ? invokeCallback(settled, child, callback, detail) : callback(detail);
          promise._subscribers.length = 0
        }
      }
      function ErrorObject() {
        this.error = null
      }
      var TRY_CATCH_ERROR = new ErrorObject;
      function invokeCallback(settled, promise, callback, detail) {
        var hasCallback = isFunction(callback),
        value = void 0,
        error = void 0,
        succeeded = void 0,
        failed = void 0;
        if (hasCallback) {
          if ((value = function(callback, detail) {
            try {
              return callback(detail)
            } catch(e) {
              return TRY_CATCH_ERROR.error = e,
              TRY_CATCH_ERROR
            }
          } (callback, detail)) === TRY_CATCH_ERROR ? (failed = !0, error = value.error, value.error = null) : succeeded = !0, promise === value) return void reject(promise, new TypeError("A promises callback cannot return that same promise."))
        } else value = detail,
        succeeded = !0;
        promise._state !== PENDING || (hasCallback && succeeded ? resolve(promise, value) : failed ? reject(promise, error) : settled === FULFILLED ? fulfill(promise, value) : settled === REJECTED && reject(promise, value))
      }
      var id = 0;
      function makePromise(promise) {
        promise[PROMISE_ID] = id++,
        promise._state = void 0,
        promise._result = void 0,
        promise._subscribers = []
      }
      var Enumerator = function() {
        function Enumerator(Constructor, input) {
          this._instanceConstructor = Constructor,
          this.promise = new Constructor(noop),
          this.promise[PROMISE_ID] || makePromise(this.promise),
          isArray(input) ? (this.length = input.length, this._remaining = input.length, this._result = new Array(this.length), 0 === this.length ? fulfill(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(input), 0 === this._remaining && fulfill(this.promise, this._result))) : reject(this.promise, new Error("Array Methods must be provided an Array"))
        }
        return Enumerator.prototype._enumerate = function(input) {
          for (var i = 0; this._state === PENDING && i < input.length; i++) this._eachEntry(input[i], i)
        },
        Enumerator.prototype._eachEntry = function(entry, i) {
          var c = this._instanceConstructor,
          resolve$$1 = c.resolve;
          if (resolve$$1 === resolve$1) {
            var _then = getThen(entry);
            if (_then === then && entry._state !== PENDING) this._settledAt(entry._state, i, entry._result);
            else if ("function" != typeof _then) this._remaining--,
            this._result[i] = entry;
            else if (c === Promise$2) {
              var promise = new c(noop);
              handleMaybeThenable(promise, entry, _then),
              this._willSettleAt(promise, i)
            } else this._willSettleAt(new c(function(resolve$$1) {
              return resolve$$1(entry)
            }), i)
          } else this._willSettleAt(resolve$$1(entry), i)
        },
        Enumerator.prototype._settledAt = function(state, i, value) {
          var promise = this.promise;
          promise._state === PENDING && (this._remaining--, state === REJECTED ? reject(promise, value) : this._result[i] = value),
          0 === this._remaining && fulfill(promise, this._result)
        },
        Enumerator.prototype._willSettleAt = function(promise, i) {
          var enumerator = this;
          subscribe(promise, void 0,
          function(value) {
            return enumerator._settledAt(FULFILLED, i, value)
          },
          function(reason) {
            return enumerator._settledAt(REJECTED, i, reason)
          })
        },
        Enumerator
      } (),
      Promise$2 = function() {
        function Promise(resolver) {
          this[PROMISE_ID] = id++,
          this._result = this._state = void 0,
          this._subscribers = [],
          noop !== resolver && ("function" != typeof resolver &&
          function() {
            throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
          } (), this instanceof Promise ?
          function(promise, resolver) {
            try {
              resolver(function(value) {
                resolve(promise, value)
              },
              function(reason) {
                reject(promise, reason)
              })
            } catch(e) {
              reject(promise, e)
            }
          } (this, resolver) : function() {
            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
          } ())
        }
        return Promise.prototype.
        catch = function(onRejection) {
          return this.then(null, onRejection)
        },
        Promise.prototype.
        finally = function(callback) {
          var constructor = this.constructor;
          return this.then(function(value) {
            return constructor.resolve(callback()).then(function() {
              return value
            })
          },
          function(reason) {
            return constructor.resolve(callback()).then(function() {
              throw reason
            })
          })
        },
        Promise
      } ();
      return Promise$2.prototype.then = then,
      Promise$2.all = function(entries) {
        return new Enumerator(this, entries).promise
      },
      Promise$2.race = function(entries) {
        var Constructor = this;
        return isArray(entries) ? new Constructor(function(resolve, reject) {
          for (var length = entries.length,
          i = 0; i < length; i++) Constructor.resolve(entries[i]).then(resolve, reject)
        }) : new Constructor(function(_, reject) {
          return reject(new TypeError("You must pass an array to race."))
        })
      },
      Promise$2.resolve = resolve$1,
      Promise$2.reject = function(reason) {
        var promise = new this(noop);
        return reject(promise, reason),
        promise
      },
      Promise$2._setScheduler = function(scheduleFn) {
        customSchedulerFn = scheduleFn
      },
      Promise$2._setAsap = function(asapFn) {
        asap = asapFn
      },
      Promise$2._asap = asap,
      Promise$2.polyfill = function() {
        var local = void 0;
        if (void 0 !== commonjsGlobal) local = commonjsGlobal;
        else if ("undefined" != typeof self) local = self;
        else try {
          local = Function("return this")()
        } catch(e) {
          throw new Error("polyfill failed because global object is unavailable in this environment")
        }
        var P = local.Promise;
        if (P) {
          var promiseToString = null;
          try {
            promiseToString = Object.prototype.toString.call(P.resolve())
          } catch(e) {}
          if ("[object Promise]" === promiseToString && !P.cast) return
        }
        local.Promise = Promise$2
      },
      (Promise$2.Promise = Promise$2).polyfill(),
      Promise$2
    } ()
  }), createCommonjsModule(function(module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var HttpError = function(_super) {
      function HttpError(errorMessage, statusCode) {
        var _this = this,
        trueProto = this.constructor.prototype;
        return (_this = _super.call(this, errorMessage) || this).statusCode = statusCode,
        _this.__proto__ = trueProto,
        _this
      }
      return tslib_1.__extends(HttpError, _super),
      HttpError
    } (Error);
    exports.HttpError = HttpError;
    var TimeoutError = function(_super) {
      function TimeoutError(errorMessage) {
        void 0 === errorMessage && (errorMessage = "A timeout occurred.");
        var _this = this,
        trueProto = this.constructor.prototype;
        return (_this = _super.call(this, errorMessage) || this).__proto__ = trueProto,
        _this
      }
      return tslib_1.__extends(TimeoutError, _super),
      TimeoutError
    } (Error);
    exports.TimeoutError = TimeoutError
  }));
  unwrapExports(Errors);
  Errors.HttpError,
  Errors.TimeoutError;
  var ILogger = createCommonjsModule(function(module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }),
    function(LogLevel) {
      LogLevel[LogLevel.Trace = 0] = "Trace",
      LogLevel[LogLevel.Debug = 1] = "Debug",
      LogLevel[LogLevel.Information = 2] = "Information",
      LogLevel[LogLevel.Warning = 3] = "Warning",
      LogLevel[LogLevel.Error = 4] = "Error",
      LogLevel[LogLevel.Critical = 5] = "Critical",
      LogLevel[LogLevel.None = 6] = "None"
    } (exports.LogLevel || (exports.LogLevel = {}))
  });
  unwrapExports(ILogger);
  ILogger.LogLevel;
  var HttpClient_1 = createCommonjsModule(function(module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var HttpResponse = function(statusCode, statusText, content) {
      this.statusCode = statusCode,
      this.statusText = statusText,
      this.content = content
    };
    exports.HttpResponse = HttpResponse;
    var HttpClient = function() {
      function HttpClient() {}
      return HttpClient.prototype.get = function(url, options) {
        return this.send(tslib_1.__assign({},
        options, {
          method: "GET",
          url: url
        }))
      },
      HttpClient.prototype.post = function(url, options) {
        return this.send(tslib_1.__assign({},
        options, {
          method: "POST",
          url: url
        }))
      },
      HttpClient.prototype.delete = function(url, options) {
        return this.send(tslib_1.__assign({},
        options, {
          method: "DELETE",
          url: url
        }))
      },
      HttpClient
    } (),
    DefaultHttpClient = function(_super) {
      function DefaultHttpClient(logger) {
        var _this = _super.call(this) || this;
        return _this.logger = logger,
        _this
      }
      return tslib_1.__extends(DefaultHttpClient, _super),
      DefaultHttpClient.prototype.send = function(request) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          var xhr = new XMLHttpRequest;
          xhr.open(request.method, request.url, !0),
          xhr.withCredentials = !0,
          xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
          xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8"),
          request.headers && Object.keys(request.headers).forEach(function(header) {
            return xhr.setRequestHeader(header, request.headers[header])
          }),
          request.responseType && (xhr.responseType = request.responseType),
          request.abortSignal && (request.abortSignal.onabort = function() {
            xhr.abort()
          }),
          request.timeout && (xhr.timeout = request.timeout),
          xhr.onload = function() {
            request.abortSignal && (request.abortSignal.onabort = null),
            200 <= xhr.status && xhr.status < 300 ? resolve(new HttpResponse(xhr.status, xhr.statusText, xhr.response || xhr.responseText)) : reject(new Errors.HttpError(xhr.statusText, xhr.status))
          },
          xhr.onerror = function() {
            _this.logger.log(ILogger.LogLevel.Warning, "Error from HTTP request. " + xhr.status + ": " + xhr.statusText),
            reject(new Errors.HttpError(xhr.statusText, xhr.status))
          },
          xhr.ontimeout = function() {
            _this.logger.log(ILogger.LogLevel.Warning, "Timeout from HTTP request."),
            reject(new Errors.TimeoutError)
          },
          xhr.send(request.content || "")
        })
      },
      DefaultHttpClient
    } (exports.HttpClient = HttpClient);
    exports.DefaultHttpClient = DefaultHttpClient
  });
  unwrapExports(HttpClient_1);
  HttpClient_1.HttpResponse,
  HttpClient_1.HttpClient,
  HttpClient_1.DefaultHttpClient;
  var TextMessageFormat_1 = createCommonjsModule(function(module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var TextMessageFormat = function() {
      function TextMessageFormat() {}
      return TextMessageFormat.write = function(output) {
        return "" + output + TextMessageFormat.RecordSeparator
      },
      TextMessageFormat.parse = function(input) {
        if (input[input.length - 1] !== TextMessageFormat.RecordSeparator) throw new Error("Message is incomplete.");
        var messages = input.split(TextMessageFormat.RecordSeparator);
        return messages.pop(),
        messages
      },
      TextMessageFormat.RecordSeparatorCode = 30,
      TextMessageFormat.RecordSeparator = String.fromCharCode(TextMessageFormat.RecordSeparatorCode),
      TextMessageFormat
    } ();
    exports.TextMessageFormat = TextMessageFormat
  });
  unwrapExports(TextMessageFormat_1);
  TextMessageFormat_1.TextMessageFormat;
  var HandshakeProtocol_1 = createCommonjsModule(function(module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var HandshakeProtocol = function() {
      function HandshakeProtocol() {}
      return HandshakeProtocol.prototype.writeHandshakeRequest = function(handshakeRequest) {
        return TextMessageFormat_1.TextMessageFormat.write(JSON.stringify(handshakeRequest))
      },
      HandshakeProtocol.prototype.parseHandshakeResponse = function(data) {
        var messageData, remainingData;
        if (data instanceof ArrayBuffer) {
          var binaryData = new Uint8Array(data);
          if ( - 1 === (separatorIndex = binaryData.indexOf(TextMessageFormat_1.TextMessageFormat.RecordSeparatorCode))) throw new Error("Message is incomplete.");
          var responseLength = separatorIndex + 1;
          messageData = String.fromCharCode.apply(null, binaryData.slice(0, responseLength)),
          remainingData = binaryData.byteLength > responseLength ? binaryData.slice(responseLength).buffer: null
        } else {
          var separatorIndex, textData = data;
          if ( - 1 === (separatorIndex = textData.indexOf(TextMessageFormat_1.TextMessageFormat.RecordSeparator))) throw new Error("Message is incomplete.");
          responseLength = separatorIndex + 1;
          messageData = textData.substring(0, responseLength),
          remainingData = textData.length > responseLength ? textData.substring(responseLength) : null
        }
        var messages = TextMessageFormat_1.TextMessageFormat.parse(messageData);
        return [remainingData, JSON.parse(messages[0])]
      },
      HandshakeProtocol
    } ();
    exports.HandshakeProtocol = HandshakeProtocol
  });
  unwrapExports(HandshakeProtocol_1);
  HandshakeProtocol_1.HandshakeProtocol;
  var IHubProtocol = createCommonjsModule(function(module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }),
    function(MessageType) {
      MessageType[MessageType.Invocation = 1] = "Invocation",
      MessageType[MessageType.StreamItem = 2] = "StreamItem",
      MessageType[MessageType.Completion = 3] = "Completion",
      MessageType[MessageType.StreamInvocation = 4] = "StreamInvocation",
      MessageType[MessageType.CancelInvocation = 5] = "CancelInvocation",
      MessageType[MessageType.Ping = 6] = "Ping",
      MessageType[MessageType.Close = 7] = "Close"
    } (exports.MessageType || (exports.MessageType = {}))
  });
  unwrapExports(IHubProtocol);
  IHubProtocol.MessageType;
  var Loggers = createCommonjsModule(function(module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var NullLogger = function() {
      function NullLogger() {}
      return NullLogger.prototype.log = function(logLevel, message) {},
      NullLogger.instance = new NullLogger,
      NullLogger
    } ();
    exports.NullLogger = NullLogger
  });
  unwrapExports(Loggers);
  Loggers.NullLogger;
  var Utils = createCommonjsModule(function(module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var Arg = function() {
      function Arg() {}
      return Arg.isRequired = function(val, name) {
        if (null == val) throw new Error("The '" + name + "' argument is required.")
      },
      Arg.isIn = function(val, values, name) {
        if (! (val in values)) throw new Error("Unknown " + name + " value: " + val + ".")
      },
      Arg
    } ();
    function getDataDetail(data, includeContent) {
      var length = null;
      return data instanceof ArrayBuffer ? (length = "Binary data of length " + data.byteLength, includeContent && (length += ". Content: '" + formatArrayBuffer(data) + "'")) : "string" == typeof data && (length = "String data of length " + data.length, includeContent && (length += ". Content: '" + data + "'.")),
      length
    }
    function formatArrayBuffer(data) {
      var view = new Uint8Array(data),
      str = "";
      return view.forEach(function(num) {
        str += "0x" + (num < 16 ? "0": "") + num.toString(16) + " "
      }),
      str.substr(0, str.length - 1)
    }
    exports.Arg = Arg,
    exports.getDataDetail = getDataDetail,
    exports.formatArrayBuffer = formatArrayBuffer,
    exports.sendMessage = function(logger, transportName, httpClient, url, accessTokenFactory, content, logMessageContent) {
      return tslib_1.__awaiter(this, void 0, void 0,
      function() {
        var headers, token, response, _a;
        return tslib_1.__generator(this,
        function(_b) {
          switch (_b.label) {
          case 0:
            return [4, accessTokenFactory()];
          case 1:
            return (token = _b.sent()) && ((_a = {}).Authorization = "Bearer " + token, headers = _a),
            logger.log(ILogger.LogLevel.Trace, "(" + transportName + " transport) sending data. " + getDataDetail(content, logMessageContent) + "."),
            [4, httpClient.post(url, {
              content: content,
              headers: headers
            })];
          case 2:
            return response = _b.sent(),
            logger.log(ILogger.LogLevel.Trace, "(" + transportName + " transport) request complete. Response status: " + response.statusCode + "."),
            [2]
          }
        })
      })
    },
    exports.createLogger = function(logger) {
      return void 0 === logger ? new ConsoleLogger(ILogger.LogLevel.Information) : null === logger ? Loggers.NullLogger.instance: logger.log ? logger: new ConsoleLogger(logger)
    };
    var Subject = function() {
      function Subject(cancelCallback) {
        this.observers = [],
        this.cancelCallback = cancelCallback
      }
      return Subject.prototype.next = function(item) {
        for (var _i = 0,
        _a = this.observers; _i < _a.length; _i++) {
          _a[_i].next(item)
        }
      },
      Subject.prototype.error = function(err) {
        for (var _i = 0,
        _a = this.observers; _i < _a.length; _i++) {
          var observer = _a[_i];
          observer.error && observer.error(err)
        }
      },
      Subject.prototype.complete = function() {
        for (var _i = 0,
        _a = this.observers; _i < _a.length; _i++) {
          var observer = _a[_i];
          observer.complete && observer.complete()
        }
      },
      Subject.prototype.subscribe = function(observer) {
        return this.observers.push(observer),
        new SubjectSubscription(this, observer)
      },
      Subject
    } ();
    exports.Subject = Subject;
    var SubjectSubscription = function() {
      function SubjectSubscription(subject, observer) {
        this.subject = subject,
        this.observer = observer
      }
      return SubjectSubscription.prototype.dispose = function() {
        var index = this.subject.observers.indexOf(this.observer); - 1 < index && this.subject.observers.splice(index, 1),
        0 === this.subject.observers.length && this.subject.cancelCallback().
        catch(function(_) {})
      },
      SubjectSubscription
    } ();
    exports.SubjectSubscription = SubjectSubscription;
    var ConsoleLogger = function() {
      function ConsoleLogger(minimumLogLevel) {
        this.minimumLogLevel = minimumLogLevel
      }
      return ConsoleLogger.prototype.log = function(logLevel, message) {
        if (logLevel >= this.minimumLogLevel) switch (logLevel) {
        case ILogger.LogLevel.Critical:
        case ILogger.LogLevel.Error:
          console.error(ILogger.LogLevel[logLevel] + ": " + message);
          break;
        case ILogger.LogLevel.Warning:
          console.warn(ILogger.LogLevel[logLevel] + ": " + message);
          break;
        case ILogger.LogLevel.Information:
          console.info(ILogger.LogLevel[logLevel] + ": " + message);
          break;
        default:
          console.log(ILogger.LogLevel[logLevel] + ": " + message)
        }
      },
      ConsoleLogger
    } ();
    exports.ConsoleLogger = ConsoleLogger
  });
  unwrapExports(Utils);
  Utils.Arg,
  Utils.getDataDetail,
  Utils.formatArrayBuffer,
  Utils.sendMessage,
  Utils.createLogger,
  Utils.Subject,
  Utils.SubjectSubscription,
  Utils.ConsoleLogger;
  var HubConnection_1 = createCommonjsModule(function(module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var HubConnection = function() {
      function HubConnection(connection, logger, protocol) {
        var _this = this;
        Utils.Arg.isRequired(connection, "connection"),
        Utils.Arg.isRequired(logger, "logger"),
        Utils.Arg.isRequired(protocol, "protocol"),
        this.serverTimeoutInMilliseconds = 3e4,
        this.logger = logger,
        this.protocol = protocol,
        this.connection = connection,
        this.handshakeProtocol = new HandshakeProtocol_1.HandshakeProtocol,
        this.connection.onreceive = function(data) {
          return _this.processIncomingData(data)
        },
        this.connection.onclose = function(error) {
          return _this.connectionClosed(error)
        },
        this.callbacks = {},
        this.methods = {},
        this.closedCallbacks = [],
        this.id = 0
      }
      return HubConnection.create = function(connection, logger, protocol) {
        return new HubConnection(connection, logger, protocol)
      },
      HubConnection.prototype.start = function() {
        return tslib_1.__awaiter(this, void 0, void 0,
        function() {
          var handshakeRequest;
          return tslib_1.__generator(this,
          function(_a) {
            switch (_a.label) {
            case 0:
              return handshakeRequest = {
                protocol: this.protocol.name,
                version: this.protocol.version
              },
              this.logger.log(ILogger.LogLevel.Debug, "Starting HubConnection."),
              this.receivedHandshakeResponse = !1,
              [4, this.connection.start(this.protocol.transferFormat)];
            case 1:
              return _a.sent(),
              this.logger.log(ILogger.LogLevel.Debug, "Sending handshake request."),
              [4, this.connection.send(this.handshakeProtocol.writeHandshakeRequest(handshakeRequest))];
            case 2:
              return _a.sent(),
              this.logger.log(ILogger.LogLevel.Information, "Using HubProtocol '" + this.protocol.name + "'."),
              this.cleanupTimeout(),
              this.configureTimeout(),
              [2]
            }
          })
        })
      },
      HubConnection.prototype.stop = function() {
        return this.logger.log(ILogger.LogLevel.Debug, "Stopping HubConnection."),
        this.cleanupTimeout(),
        this.connection.stop()
      },
      HubConnection.prototype.stream = function(methodName) {
        for (var _this = this,
        args = [], _i = 1; _i < arguments.length; _i++) args[_i - 1] = arguments[_i];
        var invocationDescriptor = this.createStreamInvocation(methodName, args),
        subject = new Utils.Subject(function() {
          var cancelInvocation = _this.createCancelInvocation(invocationDescriptor.invocationId),
          cancelMessage = _this.protocol.writeMessage(cancelInvocation);
          return delete _this.callbacks[invocationDescriptor.invocationId],
          _this.connection.send(cancelMessage)
        });
        this.callbacks[invocationDescriptor.invocationId] = function(invocationEvent, error) {
          error ? subject.error(error) : invocationEvent.type === IHubProtocol.MessageType.Completion ? invocationEvent.error ? subject.error(new Error(invocationEvent.error)) : subject.complete() : subject.next(invocationEvent.item)
        };
        var message = this.protocol.writeMessage(invocationDescriptor);
        return this.connection.send(message).
        catch(function(e) {
          subject.error(e),
          delete _this.callbacks[invocationDescriptor.invocationId]
        }),
        subject
      },
      HubConnection.prototype.send = function(methodName) {
        for (var args = [], _i = 1; _i < arguments.length; _i++) args[_i - 1] = arguments[_i];
        var invocationDescriptor = this.createInvocation(methodName, args, !0),
        message = this.protocol.writeMessage(invocationDescriptor);
        return this.connection.send(message)
      },
      HubConnection.prototype.invoke = function(methodName) {
        for (var _this = this,
        args = [], _i = 1; _i < arguments.length; _i++) args[_i - 1] = arguments[_i];
        var invocationDescriptor = this.createInvocation(methodName, args, !1);
        return new Promise(function(resolve, reject) {
          _this.callbacks[invocationDescriptor.invocationId] = function(invocationEvent, error) {
            if (error) reject(error);
            else if (invocationEvent.type === IHubProtocol.MessageType.Completion) {
              var completionMessage = invocationEvent;
              completionMessage.error ? reject(new Error(completionMessage.error)) : resolve(completionMessage.result)
            } else reject(new Error("Unexpected message type: " + invocationEvent.type))
          };
          var message = _this.protocol.writeMessage(invocationDescriptor);
          _this.connection.send(message).
          catch(function(e) {
            reject(e),
            delete _this.callbacks[invocationDescriptor.invocationId]
          })
        })
      },
      HubConnection.prototype.on = function(methodName, newMethod) {
        methodName && newMethod && (methodName = methodName.toLowerCase(), this.methods[methodName] || (this.methods[methodName] = []), -1 === this.methods[methodName].indexOf(newMethod) && this.methods[methodName].push(newMethod))
      },
      HubConnection.prototype.off = function(methodName, method) {
        if (methodName) {
          methodName = methodName.toLowerCase();
          var handlers = this.methods[methodName];
          if (handlers) if (method) {
            var removeIdx = handlers.indexOf(method); - 1 !== removeIdx && (handlers.splice(removeIdx, 1), 0 === handlers.length && delete this.methods[methodName])
          } else delete this.methods[methodName]
        }
      },
      HubConnection.prototype.onclose = function(callback) {
        callback && this.closedCallbacks.push(callback)
      },
      HubConnection.prototype.processIncomingData = function(data) {
        if (this.cleanupTimeout(), this.receivedHandshakeResponse || (data = this.processHandshakeResponse(data), this.receivedHandshakeResponse = !0), data) for (var _i = 0,
        messages_1 = this.protocol.parseMessages(data, this.logger); _i < messages_1.length; _i++) {
          var message = messages_1[_i];
          switch (message.type) {
          case IHubProtocol.MessageType.Invocation:
            this.invokeClientMethod(message);
            break;
          case IHubProtocol.MessageType.StreamItem:
          case IHubProtocol.MessageType.Completion:
            var callback = this.callbacks[message.invocationId];
            null != callback && (message.type === IHubProtocol.MessageType.Completion && delete this.callbacks[message.invocationId], callback(message));
            break;
          case IHubProtocol.MessageType.Ping:
            break;
          case IHubProtocol.MessageType.Close:
            this.logger.log(ILogger.LogLevel.Information, "Close message received from server."),
            this.connection.stop(message.error ? new Error("Server returned an error on close: " + message.error) : null);
            break;
          default:
            this.logger.log(ILogger.LogLevel.Warning, "Invalid message type: " + message.type)
          }
        }
        this.configureTimeout()
      },
      HubConnection.prototype.processHandshakeResponse = function(data) {
        var responseMessage, remainingData, _a;
        try {
          remainingData = (_a = this.handshakeProtocol.parseHandshakeResponse(data))[0],
          responseMessage = _a[1]
        } catch(e) {
          var message = "Error parsing handshake response: " + e;
          this.logger.log(ILogger.LogLevel.Error, message);
          var error = new Error(message);
          throw this.connection.stop(error),
          error
        }
        if (responseMessage.error) {
          message = "Server returned handshake error: " + responseMessage.error;
          this.logger.log(ILogger.LogLevel.Error, message),
          this.connection.stop(new Error(message))
        } else this.logger.log(ILogger.LogLevel.Debug, "Server handshake complete.");
        return remainingData
      },
      HubConnection.prototype.configureTimeout = function() {
        var _this = this;
        this.connection.features && this.connection.features.inherentKeepAlive || (this.timeoutHandle = setTimeout(function() {
          return _this.serverTimeout()
        },
        this.serverTimeoutInMilliseconds))
      },
      HubConnection.prototype.serverTimeout = function() {
        this.connection.stop(new Error("Server timeout elapsed without receiving a message from the server."))
      },
      HubConnection.prototype.invokeClientMethod = function(invocationMessage) {
        var _this = this,
        methods = this.methods[invocationMessage.target.toLowerCase()];
        if (methods) {
          if (methods.forEach(function(m) {
            return m.apply(_this, invocationMessage.arguments)
          }), invocationMessage.invocationId) {
            var message = "Server requested a response, which is not supported in this version of the client.";
            this.logger.log(ILogger.LogLevel.Error, message),
            this.connection.stop(new Error(message))
          }
        } else this.logger.log(ILogger.LogLevel.Warning, "No client method with the name '" + invocationMessage.target + "' found.")
      },
      HubConnection.prototype.connectionClosed = function(error) {
        var _this = this,
        callbacks = this.callbacks;
        this.callbacks = {},
        Object.keys(callbacks).forEach(function(key) { (0, callbacks[key])(void 0, error || new Error("Invocation canceled due to connection being closed."))
        }),
        this.cleanupTimeout(),
        this.closedCallbacks.forEach(function(c) {
          return c.apply(_this, [error])
        })
      },
      HubConnection.prototype.cleanupTimeout = function() {
        this.timeoutHandle && clearTimeout(this.timeoutHandle)
      },
      HubConnection.prototype.createInvocation = function(methodName, args, nonblocking) {
        if (nonblocking) return {
          arguments: args,
          target: methodName,
          type: IHubProtocol.MessageType.Invocation
        };
        var id = this.id;
        return this.id++,
        {
          arguments: args,
          invocationId: id.toString(),
          target: methodName,
          type: IHubProtocol.MessageType.Invocation
        }
      },
      HubConnection.prototype.createStreamInvocation = function(methodName, args) {
        var id = this.id;
        return this.id++,
        {
          arguments: args,
          invocationId: id.toString(),
          target: methodName,
          type: IHubProtocol.MessageType.StreamInvocation
        }
      },
      HubConnection.prototype.createCancelInvocation = function(id) {
        return {
          invocationId: id,
          type: IHubProtocol.MessageType.CancelInvocation
        }
      },
      HubConnection
    } ();
    exports.HubConnection = HubConnection
  });
  unwrapExports(HubConnection_1);
  HubConnection_1.HubConnection;
  var ITransport = createCommonjsModule(function(module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }),
    function(HttpTransportType) {
      HttpTransportType[HttpTransportType.None = 0] = "None",
      HttpTransportType[HttpTransportType.WebSockets = 1] = "WebSockets",
      HttpTransportType[HttpTransportType.ServerSentEvents = 2] = "ServerSentEvents",
      HttpTransportType[HttpTransportType.LongPolling = 4] = "LongPolling"
    } (exports.HttpTransportType || (exports.HttpTransportType = {})),
    function(TransferFormat) {
      TransferFormat[TransferFormat.Text = 1] = "Text",
      TransferFormat[TransferFormat.Binary = 2] = "Binary"
    } (exports.TransferFormat || (exports.TransferFormat = {}))
  });
  unwrapExports(ITransport);
  ITransport.HttpTransportType,
  ITransport.TransferFormat;
  var AbortController_1 = createCommonjsModule(function(module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var AbortController = function() {
      function AbortController() {
        this.isAborted = !1
      }
      return AbortController.prototype.abort = function() {
        this.isAborted || (this.isAborted = !0, this.onabort && this.onabort())
      },
      Object.defineProperty(AbortController.prototype, "signal", {
        get: function() {
          return this
        },
        enumerable: !0,
        configurable: !0
      }),
      Object.defineProperty(AbortController.prototype, "aborted", {
        get: function() {
          return this.isAborted
        },
        enumerable: !0,
        configurable: !0
      }),
      AbortController
    } ();
    exports.AbortController = AbortController
  });
  unwrapExports(AbortController_1);
  AbortController_1.AbortController;
  var LongPollingTransport_1 = createCommonjsModule(function(module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var LongPollingTransport = function() {
      function LongPollingTransport(httpClient, accessTokenFactory, logger, logMessageContent, shutdownTimeout) {
        this.httpClient = httpClient,
        this.accessTokenFactory = accessTokenFactory ||
        function() {
          return null
        },
        this.logger = logger,
        this.pollAbort = new AbortController_1.AbortController,
        this.logMessageContent = logMessageContent,
        this.shutdownTimeout = shutdownTimeout || 5e3
      }
      return Object.defineProperty(LongPollingTransport.prototype, "pollAborted", {
        get: function() {
          return this.pollAbort.aborted
        },
        enumerable: !0,
        configurable: !0
      }),
      LongPollingTransport.prototype.connect = function(url, transferFormat) {
        return tslib_1.__awaiter(this, void 0, void 0,
        function() {
          var pollOptions, token, closeError, pollUrl, response;
          return tslib_1.__generator(this,
          function(_a) {
            switch (_a.label) {
            case 0:
              if (Utils.Arg.isRequired(url, "url"), Utils.Arg.isRequired(transferFormat, "transferFormat"), Utils.Arg.isIn(transferFormat, ITransport.TransferFormat, "transferFormat"), this.url = url, this.logger.log(ILogger.LogLevel.Trace, "(LongPolling transport) Connecting"), transferFormat === ITransport.TransferFormat.Binary && "string" != typeof(new XMLHttpRequest).responseType) throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
              return pollOptions = {
                abortSignal: this.pollAbort.signal,
                headers: {},
                timeout: 9e4
              },
              transferFormat === ITransport.TransferFormat.Binary && (pollOptions.responseType = "arraybuffer"),
              [4, this.accessTokenFactory()];
            case 1:
              return token = _a.sent(),
              this.updateHeaderToken(pollOptions, token),
              pollUrl = url + "&_=" + Date.now(),
              this.logger.log(ILogger.LogLevel.Trace, "(LongPolling transport) polling: " + pollUrl),
              [4, this.httpClient.get(pollUrl, pollOptions)];
            case 2:
              return 200 !== (response = _a.sent()).statusCode ? (this.logger.log(ILogger.LogLevel.Error, "(LongPolling transport) Unexpected response code: " + response.statusCode), closeError = new Errors.HttpError(response.statusText, response.statusCode), this.running = !1) : this.running = !0,
              this.poll(this.url, pollOptions, closeError),
              [2, Promise.resolve()]
            }
          })
        })
      },
      LongPollingTransport.prototype.updateHeaderToken = function(request, token) {
        token ? request.headers.Authorization = "Bearer " + token: request.headers.Authorization && delete request.headers.Authorization
      },
      LongPollingTransport.prototype.poll = function(url, pollOptions, closeError) {
        return tslib_1.__awaiter(this, void 0, void 0,
        function() {
          var token, pollUrl, response, e_1;
          return tslib_1.__generator(this,
          function(_a) {
            switch (_a.label) {
            case 0:
              _a.trys.push([0, , 8, 9]),
              _a.label = 1;
            case 1:
              return this.running ? [4, this.accessTokenFactory()] : [3, 7];
            case 2:
              token = _a.sent(),
              this.updateHeaderToken(pollOptions, token),
              _a.label = 3;
            case 3:
              return _a.trys.push([3, 5, , 6]),
              pollUrl = url + "&_=" + Date.now(),
              this.logger.log(ILogger.LogLevel.Trace, "(LongPolling transport) polling: " + pollUrl),
              [4, this.httpClient.get(pollUrl, pollOptions)];
            case 4:
              return 204 === (response = _a.sent()).statusCode ? (this.logger.log(ILogger.LogLevel.Information, "(LongPolling transport) Poll terminated by server"), this.running = !1) : 200 !== response.statusCode ? (this.logger.log(ILogger.LogLevel.Error, "(LongPolling transport) Unexpected response code: " + response.statusCode), closeError = new Errors.HttpError(response.statusText, response.statusCode), this.running = !1) : response.content ? (this.logger.log(ILogger.LogLevel.Trace, "(LongPolling transport) data received. " + Utils.getDataDetail(response.content, this.logMessageContent)), this.onreceive && this.onreceive(response.content)) : this.logger.log(ILogger.LogLevel.Trace, "(LongPolling transport) Poll timed out, reissuing."),
              [3, 6];
            case 5:
              return e_1 = _a.sent(),
              this.running ? e_1 instanceof Errors.TimeoutError ? this.logger.log(ILogger.LogLevel.Trace, "(LongPolling transport) Poll timed out, reissuing.") : (closeError = e_1, this.running = !1) : this.logger.log(ILogger.LogLevel.Trace, "(LongPolling transport) Poll errored after shutdown: " + e_1.message),
              [3, 6];
            case 6:
              return [3, 1];
            case 7:
              return [3, 9];
            case 8:
              return this.stopped = !0,
              this.shutdownTimer && clearTimeout(this.shutdownTimer),
              this.onclose && (this.logger.log(ILogger.LogLevel.Trace, "(LongPolling transport) Firing onclose event. Error: " + (closeError || "<undefined>")), this.onclose(closeError)),
              this.logger.log(ILogger.LogLevel.Trace, "(LongPolling transport) Transport finished."),
              [7];
            case 9:
              return [2]
            }
          })
        })
      },
      LongPollingTransport.prototype.send = function(data) {
        return tslib_1.__awaiter(this, void 0, void 0,
        function() {
          return tslib_1.__generator(this,
          function(_a) {
            return this.running ? [2, Utils.sendMessage(this.logger, "LongPolling", this.httpClient, this.url, this.accessTokenFactory, data, this.logMessageContent)] : [2, Promise.reject(new Error("Cannot send until the transport is connected"))]
          })
        })
      },
      LongPollingTransport.prototype.stop = function() {
        return tslib_1.__awaiter(this, void 0, void 0,
        function() {
          var deleteOptions, token, _this = this;
          return tslib_1.__generator(this,
          function(_a) {
            switch (_a.label) {
            case 0:
              return _a.trys.push([0, , 3, 4]),
              this.running = !1,
              this.logger.log(ILogger.LogLevel.Trace, "(LongPolling transport) sending DELETE request to " + this.url + "."),
              deleteOptions = {
                headers: {}
              },
              [4, this.accessTokenFactory()];
            case 1:
              return token = _a.sent(),
              this.updateHeaderToken(deleteOptions, token),
              [4, this.httpClient.delete(this.url, deleteOptions)];
            case 2:
              return _a.sent(),
              this.logger.log(ILogger.LogLevel.Trace, "(LongPolling transport) DELETE request accepted."),
              [3, 4];
            case 3:
              return this.stopped || (this.shutdownTimer = setTimeout(function() {
                _this.logger.log(ILogger.LogLevel.Warning, "(LongPolling transport) server did not terminate after DELETE request, canceling poll."),
                _this.pollAbort.abort()
              },
              this.shutdownTimeout)),
              [7];
            case 4:
              return [2]
            }
          })
        })
      },
      LongPollingTransport
    } ();
    exports.LongPollingTransport = LongPollingTransport
  });
  unwrapExports(LongPollingTransport_1);
  LongPollingTransport_1.LongPollingTransport;
  var ServerSentEventsTransport_1 = createCommonjsModule(function(module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var ServerSentEventsTransport = function() {
      function ServerSentEventsTransport(httpClient, accessTokenFactory, logger, logMessageContent) {
        this.httpClient = httpClient,
        this.accessTokenFactory = accessTokenFactory ||
        function() {
          return null
        },
        this.logger = logger,
        this.logMessageContent = logMessageContent
      }
      return ServerSentEventsTransport.prototype.connect = function(url, transferFormat) {
        return tslib_1.__awaiter(this, void 0, void 0,
        function() {
          var token, _this = this;
          return tslib_1.__generator(this,
          function(_a) {
            switch (_a.label) {
            case 0:
              if (Utils.Arg.isRequired(url, "url"), Utils.Arg.isRequired(transferFormat, "transferFormat"), Utils.Arg.isIn(transferFormat, ITransport.TransferFormat, "transferFormat"), "undefined" == typeof EventSource) throw new Error("'EventSource' is not supported in your environment.");
              return this.logger.log(ILogger.LogLevel.Trace, "(SSE transport) Connecting"),
              [4, this.accessTokenFactory()];
            case 1:
              return (token = _a.sent()) && (url += (url.indexOf("?") < 0 ? "?": "&") + "access_token=" + encodeURIComponent(token)),
              this.url = url,
              [2, new Promise(function(resolve, reject) {
                var opened = !1;
                transferFormat !== ITransport.TransferFormat.Text && reject(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"));
                var eventSource = new EventSource(url, {
                  withCredentials: !0
                });
                try {
                  eventSource.onmessage = function(e) {
                    if (_this.onreceive) try {
                      _this.logger.log(ILogger.LogLevel.Trace, "(SSE transport) data received. " + Utils.getDataDetail(e.data, _this.logMessageContent) + "."),
                      _this.onreceive(e.data)
                    } catch(error) {
                      return void(_this.onclose && _this.onclose(error))
                    }
                  },
                  eventSource.onerror = function(e) {
                    var error = new Error(e.message || "Error occurred");
                    opened ? _this.close(error) : reject(error)
                  },
                  eventSource.onopen = function() {
                    _this.logger.log(ILogger.LogLevel.Information, "SSE connected to " + _this.url),
                    _this.eventSource = eventSource,
                    opened = !0,
                    resolve()
                  }
                } catch(e) {
                  return Promise.reject(e)
                }
              })]
            }
          })
        })
      },
      ServerSentEventsTransport.prototype.send = function(data) {
        return tslib_1.__awaiter(this, void 0, void 0,
        function() {
          return tslib_1.__generator(this,
          function(_a) {
            return this.eventSource ? [2, Utils.sendMessage(this.logger, "SSE", this.httpClient, this.url, this.accessTokenFactory, data, this.logMessageContent)] : [2, Promise.reject(new Error("Cannot send until the transport is connected"))]
          })
        })
      },
      ServerSentEventsTransport.prototype.stop = function() {
        return this.close(),
        Promise.resolve()
      },
      ServerSentEventsTransport.prototype.close = function(e) {
        this.eventSource && (this.eventSource.close(), this.eventSource = null, this.onclose && this.onclose(e))
      },
      ServerSentEventsTransport
    } ();
    exports.ServerSentEventsTransport = ServerSentEventsTransport
  });
  unwrapExports(ServerSentEventsTransport_1);
  ServerSentEventsTransport_1.ServerSentEventsTransport;
  var WebSocketTransport_1 = createCommonjsModule(function(module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var WebSocketTransport = function() {
      function WebSocketTransport(accessTokenFactory, logger, logMessageContent) {
        this.logger = logger,
        this.accessTokenFactory = accessTokenFactory ||
        function() {
          return null
        },
        this.logMessageContent = logMessageContent
      }
      return WebSocketTransport.prototype.connect = function(url, transferFormat) {
        return tslib_1.__awaiter(this, void 0, void 0,
        function() {
          var token, _this = this;
          return tslib_1.__generator(this,
          function(_a) {
            switch (_a.label) {
            case 0:
              if (Utils.Arg.isRequired(url, "url"), Utils.Arg.isRequired(transferFormat, "transferFormat"), Utils.Arg.isIn(transferFormat, ITransport.TransferFormat, "transferFormat"), "undefined" == typeof WebSocket) throw new Error("'WebSocket' is not supported in your environment.");
              return this.logger.log(ILogger.LogLevel.Trace, "(WebSockets transport) Connecting"),
              [4, this.accessTokenFactory()];
            case 1:
              return (token = _a.sent()) && (url += (url.indexOf("?") < 0 ? "?": "&") + "access_token=" + encodeURIComponent(token)),
              [2, new Promise(function(resolve, reject) {
                url = url.replace(/^http/, "ws");
                var webSocket = new WebSocket(url);
                transferFormat === ITransport.TransferFormat.Binary && (webSocket.binaryType = "arraybuffer"),
                webSocket.onopen = function(event) {
                  _this.logger.log(ILogger.LogLevel.Information, "WebSocket connected to " + url),
                  _this.webSocket = webSocket,
                  resolve()
                },
                webSocket.onerror = function(event) {
                  reject(event.error)
                },
                webSocket.onmessage = function(message) {
                  _this.logger.log(ILogger.LogLevel.Trace, "(WebSockets transport) data received. " + Utils.getDataDetail(message.data, _this.logMessageContent) + "."),
                  _this.onreceive && _this.onreceive(message.data)
                },
                webSocket.onclose = function(event) {
                  _this.logger.log(ILogger.LogLevel.Trace, "(WebSockets transport) socket closed."),
                  _this.onclose && (!1 === event.wasClean || 1e3 !== event.code ? _this.onclose(new Error("Websocket closed with status code: " + event.code + " (" + event.reason + ")")) : _this.onclose())
                }
              })]
            }
          })
        })
      },
      WebSocketTransport.prototype.send = function(data) {
        return this.webSocket && this.webSocket.readyState === WebSocket.OPEN ? (this.logger.log(ILogger.LogLevel.Trace, "(WebSockets transport) sending data. " + Utils.getDataDetail(data, this.logMessageContent) + "."), this.webSocket.send(data), Promise.resolve()) : Promise.reject("WebSocket is not in the OPEN state")
      },
      WebSocketTransport.prototype.stop = function() {
        return this.webSocket && (this.webSocket.close(), this.webSocket = null),
        Promise.resolve()
      },
      WebSocketTransport
    } ();
    exports.WebSocketTransport = WebSocketTransport
  });
  unwrapExports(WebSocketTransport_1);
  WebSocketTransport_1.WebSocketTransport;
  var HttpConnection_1 = createCommonjsModule(function(module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var HttpConnection = function() {
      function HttpConnection(url, options) {
        void 0 === options && (options = {}),
        this.features = {},
        Utils.Arg.isRequired(url, "url"),
        this.logger = Utils.createLogger(options.logger),
        this.baseUrl = this.resolveUrl(url),
        (options = options || {}).accessTokenFactory = options.accessTokenFactory ||
        function() {
          return null
        },
        options.logMessageContent = options.logMessageContent || !1,
        this.httpClient = options.httpClient || new HttpClient_1.DefaultHttpClient(this.logger),
        this.connectionState = 2,
        this.options = options
      }
      return HttpConnection.prototype.start = function(transferFormat) {
        return transferFormat = transferFormat || ITransport.TransferFormat.Binary,
        Utils.Arg.isIn(transferFormat, ITransport.TransferFormat, "transferFormat"),
        this.logger.log(ILogger.LogLevel.Debug, "Starting connection with transfer format '" + ITransport.TransferFormat[transferFormat] + "'."),
        2 !== this.connectionState ? Promise.reject(new Error("Cannot start a connection that is not in the 'Disconnected' state.")) : (this.connectionState = 0, this.startPromise = this.startInternal(transferFormat), this.startPromise)
      },
      HttpConnection.prototype.send = function(data) {
        if (1 !== this.connectionState) throw new Error("Cannot send data if the connection is not in the 'Connected' State.");
        return this.transport.send(data)
      },
      HttpConnection.prototype.stop = function(error) {
        return tslib_1.__awaiter(this, void 0, void 0,
        function() {
          return tslib_1.__generator(this,
          function(_a) {
            switch (_a.label) {
            case 0:
              this.connectionState = 2,
              _a.label = 1;
            case 1:
              return _a.trys.push([1, 3, , 4]),
              [4, this.startPromise];
            case 2:
              return _a.sent(),
              [3, 4];
            case 3:
              return _a.sent(),
              [3, 4];
            case 4:
              return this.transport ? (this.stopError = error, [4, this.transport.stop()]) : [3, 6];
            case 5:
              _a.sent(),
              this.transport = null,
              _a.label = 6;
            case 6:
              return [2]
            }
          })
        })
      },
      HttpConnection.prototype.startInternal = function(transferFormat) {
        return tslib_1.__awaiter(this, void 0, void 0,
        function() {
          var url, negotiateResponse, redirects, _loop_1, this_1, state_1, e_2, _this = this;
          return tslib_1.__generator(this,
          function(_a) {
            switch (_a.label) {
            case 0:
              url = this.baseUrl,
              this.accessTokenFactory = this.options.accessTokenFactory,
              _a.label = 1;
            case 1:
              return _a.trys.push([1, 12, , 13]),
              this.options.skipNegotiation ? this.options.transport !== ITransport.HttpTransportType.WebSockets ? [3, 3] : (this.transport = this.constructTransport(ITransport.HttpTransportType.WebSockets), [4, this.transport.connect(url, transferFormat)]) : [3, 5];
            case 2:
              return _a.sent(),
              [3, 4];
            case 3:
              throw Error("Negotiation can only be skipped when using the WebSocket transport directly.");
            case 4:
              return [3, 11];
            case 5:
              negotiateResponse = null,
              redirects = 0,
              _loop_1 = function() {
                var accessToken_1;
                return tslib_1.__generator(this,
                function(_a) {
                  switch (_a.label) {
                  case 0:
                    return [4, this_1.getNegotiationResponse(url)];
                  case 1:
                    return negotiateResponse = _a.sent(),
                    2 === this_1.connectionState ? [2, {
                      value: void 0
                    }] : (negotiateResponse.url && (url = negotiateResponse.url), negotiateResponse.accessToken && (accessToken_1 = negotiateResponse.accessToken, this_1.accessTokenFactory = function() {
                      return accessToken_1
                    }), redirects++, [2])
                  }
                })
              },
              this_1 = this,
              _a.label = 6;
            case 6:
              return [5, _loop_1()];
            case 7:
              if ("object" == typeof(state_1 = _a.sent())) return [2, state_1.value];
              _a.label = 8;
            case 8:
              if (negotiateResponse.url && redirects < 100) return [3, 6];
              _a.label = 9;
            case 9:
              if (100 === redirects && negotiateResponse.url) throw Error("Negotiate redirection limit exceeded.");
              return [4, this.createTransport(url, this.options.transport, negotiateResponse, transferFormat)];
            case 10:
              _a.sent(),
              _a.label = 11;
            case 11:
              return this.transport instanceof LongPollingTransport_1.LongPollingTransport && (this.features.inherentKeepAlive = !0),
              this.transport.onreceive = this.onreceive,
              this.transport.onclose = function(e) {
                return _this.stopConnection(e)
              },
              this.changeState(0, 1),
              [3, 13];
            case 12:
              throw e_2 = _a.sent(),
              this.logger.log(ILogger.LogLevel.Error, "Failed to start the connection: " + e_2),
              this.connectionState = 2,
              this.transport = null,
              e_2;
            case 13:
              return [2]
            }
          })
        })
      },
      HttpConnection.prototype.getNegotiationResponse = function(url) {
        return tslib_1.__awaiter(this, void 0, void 0,
        function() {
          var token, headers, negotiateUrl, response, e_3, _a;
          return tslib_1.__generator(this,
          function(_b) {
            switch (_b.label) {
            case 0:
              return [4, this.accessTokenFactory()];
            case 1:
              (token = _b.sent()) && ((_a = {}).Authorization = "Bearer " + token, headers = _a),
              negotiateUrl = this.resolveNegotiateUrl(url),
              this.logger.log(ILogger.LogLevel.Debug, "Sending negotiation request: " + negotiateUrl),
              _b.label = 2;
            case 2:
              return _b.trys.push([2, 4, , 5]),
              [4, this.httpClient.post(negotiateUrl, {
                content: "",
                headers: headers
              })];
            case 3:
              if (200 !== (response = _b.sent()).statusCode) throw Error("Unexpected status code returned from negotiate " + response.statusCode);
              return [2, JSON.parse(response.content)];
            case 4:
              throw e_3 = _b.sent(),
              this.logger.log(ILogger.LogLevel.Error, "Failed to complete negotiation with the server: " + e_3),
              e_3;
            case 5:
              return [2]
            }
          })
        })
      },
      HttpConnection.prototype.createConnectUrl = function(url, connectionId) {
        return url + ( - 1 === url.indexOf("?") ? "?": "&") + "id=" + connectionId
      },
      HttpConnection.prototype.createTransport = function(url, requestedTransport, negotiateResponse, requestedTransferFormat) {
        return tslib_1.__awaiter(this, void 0, void 0,
        function() {
          var connectUrl, transports, _i, transports_1, endpoint, transport, ex_1;
          return tslib_1.__generator(this,
          function(_a) {
            switch (_a.label) {
            case 0:
              return connectUrl = this.createConnectUrl(url, negotiateResponse.connectionId),
              this.isITransport(requestedTransport) ? (this.logger.log(ILogger.LogLevel.Debug, "Connection was provided an instance of ITransport, using that directly."), this.transport = requestedTransport, [4, this.transport.connect(connectUrl, requestedTransferFormat)]) : [3, 2];
            case 1:
              return _a.sent(),
              this.changeState(0, 1),
              [2];
            case 2:
              transports = negotiateResponse.availableTransports,
              _i = 0,
              transports_1 = transports,
              _a.label = 3;
            case 3:
              return _i < transports_1.length ? (endpoint = transports_1[_i], this.connectionState = 0, "number" != typeof(transport = this.resolveTransport(endpoint, requestedTransport, requestedTransferFormat)) ? [3, 8] : (this.transport = this.constructTransport(transport), null !== negotiateResponse.connectionId ? [3, 5] : [4, this.getNegotiationResponse(url)])) : [3, 9];
            case 4:
              negotiateResponse = _a.sent(),
              connectUrl = this.createConnectUrl(url, negotiateResponse.connectionId),
              _a.label = 5;
            case 5:
              return _a.trys.push([5, 7, , 8]),
              [4, this.transport.connect(connectUrl, requestedTransferFormat)];
            case 6:
              return _a.sent(),
              this.changeState(0, 1),
              [2];
            case 7:
              return ex_1 = _a.sent(),
              this.logger.log(ILogger.LogLevel.Error, "Failed to start the transport '" + ITransport.HttpTransportType[transport] + "': " + ex_1),
              this.connectionState = 2,
              negotiateResponse.connectionId = null,
              [3, 8];
            case 8:
              return _i++,
              [3, 3];
            case 9:
              throw new Error("Unable to initialize any of the available transports.")
            }
          })
        })
      },
      HttpConnection.prototype.constructTransport = function(transport) {
        switch (transport) {
        case ITransport.HttpTransportType.WebSockets:
          return new WebSocketTransport_1.WebSocketTransport(this.accessTokenFactory, this.logger, this.options.logMessageContent);
        case ITransport.HttpTransportType.ServerSentEvents:
          return new ServerSentEventsTransport_1.ServerSentEventsTransport(this.httpClient, this.accessTokenFactory, this.logger, this.options.logMessageContent);
        case ITransport.HttpTransportType.LongPolling:
          return new LongPollingTransport_1.LongPollingTransport(this.httpClient, this.accessTokenFactory, this.logger, this.options.logMessageContent);
        default:
          throw new Error("Unknown transport: " + transport + ".")
        }
      },
      HttpConnection.prototype.resolveTransport = function(endpoint, requestedTransport, requestedTransferFormat) {
        var transport = ITransport.HttpTransportType[endpoint.transport];
        if (null == transport) this.logger.log(ILogger.LogLevel.Debug, "Skipping transport '" + endpoint.transport + "' because it is not supported by this client.");
        else {
          var transferFormats = endpoint.transferFormats.map(function(s) {
            return ITransport.TransferFormat[s]
          });
          if (function(requestedTransport, actualTransport) {
            return ! requestedTransport || 0 != (actualTransport & requestedTransport)
          } (requestedTransport, transport)) if (0 <= transferFormats.indexOf(requestedTransferFormat)) {
            if (! (transport === ITransport.HttpTransportType.WebSockets && "undefined" == typeof WebSocket || transport === ITransport.HttpTransportType.ServerSentEvents && "undefined" == typeof EventSource)) return this.logger.log(ILogger.LogLevel.Debug, "Selecting transport '" + ITransport.HttpTransportType[transport] + "'"),
            transport;
            this.logger.log(ILogger.LogLevel.Debug, "Skipping transport '" + ITransport.HttpTransportType[transport] + "' because it is not supported in your environment.'")
          } else this.logger.log(ILogger.LogLevel.Debug, "Skipping transport '" + ITransport.HttpTransportType[transport] + "' because it does not support the requested transfer format '" + ITransport.TransferFormat[requestedTransferFormat] + "'.");
          else this.logger.log(ILogger.LogLevel.Debug, "Skipping transport '" + ITransport.HttpTransportType[transport] + "' because it was disabled by the client.")
        }
        return null
      },
      HttpConnection.prototype.isITransport = function(transport) {
        return transport && "object" == typeof transport && "connect" in transport
      },
      HttpConnection.prototype.changeState = function(from, to) {
        return this.connectionState === from && (this.connectionState = to, !0)
      },
      HttpConnection.prototype.stopConnection = function(error) {
        return tslib_1.__awaiter(this, void 0, void 0,
        function() {
          return tslib_1.__generator(this,
          function(_a) {
            return this.transport = null,
            (error = this.stopError || error) ? this.logger.log(ILogger.LogLevel.Error, "Connection disconnected with error '" + error + "'.") : this.logger.log(ILogger.LogLevel.Information, "Connection disconnected."),
            this.connectionState = 2,
            this.onclose && this.onclose(error),
            [2]
          })
        })
      },
      HttpConnection.prototype.resolveUrl = function(url) {
        if (0 === url.lastIndexOf("https://", 0) || 0 === url.lastIndexOf("http://", 0)) return url;
        if ("undefined" == typeof window || !window || !window.document) throw new Error("Cannot resolve '" + url + "'.");
        var aTag = window.document.createElement("a");
        return aTag.href = url,
        this.logger.log(ILogger.LogLevel.Information, "Normalizing '" + url + "' to '" + aTag.href + "'."),
        aTag.href
      },
      HttpConnection.prototype.resolveNegotiateUrl = function(url) {
        var index = url.indexOf("?"),
        negotiateUrl = url.substring(0, -1 === index ? url.length: index);
        return "/" !== negotiateUrl[negotiateUrl.length - 1] && (negotiateUrl += "/"),
        negotiateUrl += "negotiate",
        negotiateUrl += -1 === index ? "": url.substring(index)
      },
      HttpConnection
    } ();
    exports.HttpConnection = HttpConnection
  });
  unwrapExports(HttpConnection_1);
  HttpConnection_1.HttpConnection;
  var JsonHubProtocol_1 = createCommonjsModule(function(module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var JsonHubProtocol = function() {
      function JsonHubProtocol() {
        this.name = "json",
        this.version = 1,
        this.transferFormat = ITransport.TransferFormat.Text
      }
      return JsonHubProtocol.prototype.parseMessages = function(input, logger) {
        if ("string" != typeof input) throw new Error("Invalid input for JSON hub protocol. Expected a string.");
        if (!input) return [];
        null === logger && (logger = Loggers.NullLogger.instance);
        for (var hubMessages = [], _i = 0, messages_1 = TextMessageFormat_1.TextMessageFormat.parse(input); _i < messages_1.length; _i++) {
          var message = messages_1[_i],
          parsedMessage = JSON.parse(message);
          if ("number" != typeof parsedMessage.type) throw new Error("Invalid payload.");
          switch (parsedMessage.type) {
          case IHubProtocol.MessageType.Invocation:
            this.isInvocationMessage(parsedMessage);
            break;
          case IHubProtocol.MessageType.StreamItem:
            this.isStreamItemMessage(parsedMessage);
            break;
          case IHubProtocol.MessageType.Completion:
            this.isCompletionMessage(parsedMessage);
            break;
          case IHubProtocol.MessageType.Ping:
          case IHubProtocol.MessageType.Close:
            break;
          default:
            logger.log(ILogger.LogLevel.Information, "Unknown message type '" + parsedMessage.type + "' ignored.");
            continue
          }
          hubMessages.push(parsedMessage)
        }
        return hubMessages
      },
      JsonHubProtocol.prototype.writeMessage = function(message) {
        return TextMessageFormat_1.TextMessageFormat.write(JSON.stringify(message))
      },
      JsonHubProtocol.prototype.isInvocationMessage = function(message) {
        this.assertNotEmptyString(message.target, "Invalid payload for Invocation message."),
        void 0 !== message.invocationId && this.assertNotEmptyString(message.invocationId, "Invalid payload for Invocation message.")
      },
      JsonHubProtocol.prototype.isStreamItemMessage = function(message) {
        if (this.assertNotEmptyString(message.invocationId, "Invalid payload for StreamItem message."), void 0 === message.item) throw new Error("Invalid payload for StreamItem message.")
      },
      JsonHubProtocol.prototype.isCompletionMessage = function(message) {
        if (message.result && message.error) throw new Error("Invalid payload for Completion message."); ! message.result && message.error && this.assertNotEmptyString(message.error, "Invalid payload for Completion message."),
        this.assertNotEmptyString(message.invocationId, "Invalid payload for Completion message.")
      },
      JsonHubProtocol.prototype.assertNotEmptyString = function(value, errorMessage) {
        if ("string" != typeof value || "" === value) throw new Error(errorMessage)
      },
      JsonHubProtocol
    } ();
    exports.JsonHubProtocol = JsonHubProtocol
  });
  unwrapExports(JsonHubProtocol_1);
  JsonHubProtocol_1.JsonHubProtocol;
  var HubConnectionBuilder_1 = createCommonjsModule(function(module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var HubConnectionBuilder = function() {
      function HubConnectionBuilder() {}
      return HubConnectionBuilder.prototype.configureLogging = function(logging) {
        return Utils.Arg.isRequired(logging, "logging"),
        void 0 !== logging.log ? this.logger = logging: this.logger = new Utils.ConsoleLogger(logging),
        this
      },
      HubConnectionBuilder.prototype.withUrl = function(url, transportTypeOrOptions) {
        return Utils.Arg.isRequired(url, "url"),
        this.url = url,
        this.httpConnectionOptions = "object" == typeof transportTypeOrOptions ? transportTypeOrOptions: {
          transport: transportTypeOrOptions
        },
        this
      },
      HubConnectionBuilder.prototype.withHubProtocol = function(protocol) {
        return Utils.Arg.isRequired(protocol, "protocol"),
        this.protocol = protocol,
        this
      },
      HubConnectionBuilder.prototype.build = function() {
        var httpConnectionOptions = this.httpConnectionOptions || {};
        if (void 0 === httpConnectionOptions.logger && (httpConnectionOptions.logger = this.logger), !this.url) throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");
        var connection = new HttpConnection_1.HttpConnection(this.url, httpConnectionOptions);
        return HubConnection_1.HubConnection.create(connection, this.logger || Loggers.NullLogger.instance, this.protocol || new JsonHubProtocol_1.JsonHubProtocol)
      },
      HubConnectionBuilder
    } ();
    exports.HubConnectionBuilder = HubConnectionBuilder
  });
  unwrapExports(HubConnectionBuilder_1);
  HubConnectionBuilder_1.HubConnectionBuilder;
  var cjs = createCommonjsModule(function(module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }),
    exports.VERSION = "0.0.0-DEV_BUILD",
    exports.HttpError = Errors.HttpError,
    exports.TimeoutError = Errors.TimeoutError,
    exports.DefaultHttpClient = HttpClient_1.DefaultHttpClient,
    exports.HttpClient = HttpClient_1.HttpClient,
    exports.HttpResponse = HttpClient_1.HttpResponse,
    exports.HubConnection = HubConnection_1.HubConnection,
    exports.HubConnectionBuilder = HubConnectionBuilder_1.HubConnectionBuilder,
    exports.MessageType = IHubProtocol.MessageType,
    exports.LogLevel = ILogger.LogLevel,
    exports.HttpTransportType = ITransport.HttpTransportType,
    exports.TransferFormat = ITransport.TransferFormat,
    exports.NullLogger = Loggers.NullLogger,
    exports.JsonHubProtocol = JsonHubProtocol_1.JsonHubProtocol
  });
  unwrapExports(cjs);
  cjs.VERSION,
  cjs.HttpError,
  cjs.TimeoutError,
  cjs.DefaultHttpClient,
  cjs.HttpClient,
  cjs.HttpResponse,
  cjs.HubConnection,
  cjs.HubConnectionBuilder,
  cjs.MessageType,
  cjs.LogLevel,
  cjs.HttpTransportType,
  cjs.TransferFormat,
  cjs.NullLogger,
  cjs.JsonHubProtocol;
  return unwrapExports(createCommonjsModule(function(module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }),
    Uint8Array.prototype.indexOf || Object.defineProperty(Uint8Array.prototype, "indexOf", {
      value: Array.prototype.indexOf,
      writable: !0
    }),
    Uint8Array.prototype.slice || Object.defineProperty(Uint8Array.prototype, "slice", {
      value: Array.prototype.slice,
      writable: !0
    }),
    Uint8Array.prototype.forEach || Object.defineProperty(Uint8Array.prototype, "forEach", {
      value: Array.prototype.forEach,
      writable: !0
    }),
    tslib_1.__exportStar(cjs, exports)
  }))
}),
function(undefined) {
  var isArray = Array.isArray ? Array.isArray: function(obj) {
    return "[object Array]" === Object.prototype.toString.call(obj)
  },
  defaultMaxListeners = 10;
  function init() {
    this._events = {},
    this._conf && configure.call(this, this._conf)
  }
  function configure(conf) {
    conf ? ((this._conf = conf).delimiter && (this.delimiter = conf.delimiter), this._maxListeners = conf.maxListeners !== undefined ? conf.maxListeners: defaultMaxListeners, conf.wildcard && (this.wildcard = conf.wildcard), conf.newListener && (this._newListener = conf.newListener), conf.removeListener && (this._removeListener = conf.removeListener), conf.verboseMemoryLeak && (this.verboseMemoryLeak = conf.verboseMemoryLeak), this.wildcard && (this.listenerTree = {})) : this._maxListeners = defaultMaxListeners
  }
  function logPossibleMemoryLeak(count, eventName) {
    var errorMsg = "(node) warning: possible EventEmitter memory leak detected. " + count + " listeners added. Use emitter.setMaxListeners() to increase limit.";
    if (this.verboseMemoryLeak && (errorMsg += " Event name: " + eventName + "."), "undefined" != typeof process && process.emitWarning) {
      var e = new Error(errorMsg);
      e.name = "MaxListenersExceededWarning",
      e.emitter = this,
      e.count = count,
      process.emitWarning(e)
    } else console.error(errorMsg),
    console.trace && console.trace()
  }
  function EventEmitter(conf) {
    this._events = {},
    this._newListener = !1,
    this._removeListener = !1,
    this.verboseMemoryLeak = !1,
    configure.call(this, conf)
  }
  function searchListenerTree(handlers, type, tree, i) {
    if (!tree) return [];
    var leaf, len, branch, xTree, xxTree, isolatedBranch, endReached, listeners = [],
    typeLength = type.length,
    currentType = type[i],
    nextType = type[i + 1];
    if (i === typeLength && tree._listeners) {
      if ("function" == typeof tree._listeners) return handlers && handlers.push(tree._listeners),
      [tree];
      for (leaf = 0, len = tree._listeners.length; leaf < len; leaf++) handlers && handlers.push(tree._listeners[leaf]);
      return [tree]
    }
    if ("*" === currentType || "**" === currentType || tree[currentType]) {
      if ("*" === currentType) {
        for (branch in tree)"_listeners" !== branch && tree.hasOwnProperty(branch) && (listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i + 1)));
        return listeners
      }
      if ("**" === currentType) {
        for (branch in (endReached = i + 1 === typeLength || i + 2 === typeLength && "*" === nextType) && tree._listeners && (listeners = listeners.concat(searchListenerTree(handlers, type, tree, typeLength))), tree)"_listeners" !== branch && tree.hasOwnProperty(branch) && ("*" === branch || "**" === branch ? (tree[branch]._listeners && !endReached && (listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], typeLength))), listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i))) : listeners = branch === nextType ? listeners.concat(searchListenerTree(handlers, type, tree[branch], i + 2)) : listeners.concat(searchListenerTree(handlers, type, tree[branch], i)));
        return listeners
      }
      listeners = listeners.concat(searchListenerTree(handlers, type, tree[currentType], i + 1))
    }
    if ((xTree = tree["*"]) && searchListenerTree(handlers, type, xTree, i + 1), xxTree = tree["**"]) if (i < typeLength) for (branch in xxTree._listeners && searchListenerTree(handlers, type, xxTree, typeLength), xxTree)"_listeners" !== branch && xxTree.hasOwnProperty(branch) && (branch === nextType ? searchListenerTree(handlers, type, xxTree[branch], i + 2) : branch === currentType ? searchListenerTree(handlers, type, xxTree[branch], i + 1) : ((isolatedBranch = {})[branch] = xxTree[branch], searchListenerTree(handlers, type, {
      "**": isolatedBranch
    },
    i + 1)));
    else xxTree._listeners ? searchListenerTree(handlers, type, xxTree, typeLength) : xxTree["*"] && xxTree["*"]._listeners && searchListenerTree(handlers, type, xxTree["*"], typeLength);
    return listeners
  } (EventEmitter.EventEmitter2 = EventEmitter).prototype.delimiter = ".",
  EventEmitter.prototype.setMaxListeners = function(n) {
    n !== undefined && (this._maxListeners = n, this._conf || (this._conf = {}), this._conf.maxListeners = n)
  },
  EventEmitter.prototype.event = "",
  EventEmitter.prototype.once = function(event, fn) {
    return this._once(event, fn, !1)
  },
  EventEmitter.prototype.prependOnceListener = function(event, fn) {
    return this._once(event, fn, !0)
  },
  EventEmitter.prototype._once = function(event, fn, prepend) {
    return this._many(event, 1, fn, prepend),
    this
  },
  EventEmitter.prototype.many = function(event, ttl, fn) {
    return this._many(event, ttl, fn, !1)
  },
  EventEmitter.prototype.prependMany = function(event, ttl, fn) {
    return this._many(event, ttl, fn, !0)
  },
  EventEmitter.prototype._many = function(event, ttl, fn, prepend) {
    var self = this;
    if ("function" != typeof fn) throw new Error("many only accepts instances of Function");
    function listener() {
      return 0 == --ttl && self.off(event, listener),
      fn.apply(this, arguments)
    }
    return listener._origin = fn,
    this._on(event, listener, prepend),
    self
  },
  EventEmitter.prototype.emit = function() {
    this._events || init.call(this);
    var type = arguments[0];
    if ("newListener" === type && !this._newListener && !this._events.newListener) return ! 1;
    var args, l, i, j, handler, al = arguments.length;
    if (this._all && this._all.length) {
      if (handler = this._all.slice(), 3 < al) for (args = new Array(al), j = 0; j < al; j++) args[j] = arguments[j];
      for (i = 0, l = handler.length; i < l; i++) switch (this.event = type, al) {
      case 1:
        handler[i].call(this, type);
        break;
      case 2:
        handler[i].call(this, type, arguments[1]);
        break;
      case 3:
        handler[i].call(this, type, arguments[1], arguments[2]);
        break;
      default:
        handler[i].apply(this, args)
      }
    }
    if (this.wildcard) {
      handler = [];
      var ns = "string" == typeof type ? type.split(this.delimiter) : type.slice();
      searchListenerTree.call(this, handler, ns, this.listenerTree, 0)
    } else {
      if ("function" == typeof(handler = this._events[type])) {
        switch (this.event = type, al) {
        case 1:
          handler.call(this);
          break;
        case 2:
          handler.call(this, arguments[1]);
          break;
        case 3:
          handler.call(this, arguments[1], arguments[2]);
          break;
        default:
          for (args = new Array(al - 1), j = 1; j < al; j++) args[j - 1] = arguments[j];
          handler.apply(this, args)
        }
        return ! 0
      }
      handler && (handler = handler.slice())
    }
    if (handler && handler.length) {
      if (3 < al) for (args = new Array(al - 1), j = 1; j < al; j++) args[j - 1] = arguments[j];
      for (i = 0, l = handler.length; i < l; i++) switch (this.event = type, al) {
      case 1:
        handler[i].call(this);
        break;
      case 2:
        handler[i].call(this, arguments[1]);
        break;
      case 3:
        handler[i].call(this, arguments[1], arguments[2]);
        break;
      default:
        handler[i].apply(this, args)
      }
      return ! 0
    }
    if (!this._all && "error" === type) throw arguments[1] instanceof Error ? arguments[1] : new Error("Uncaught, unspecified 'error' event.");
    return !! this._all
  },
  EventEmitter.prototype.emitAsync = function() {
    this._events || init.call(this);
    var type = arguments[0];
    if ("newListener" === type && !this._newListener && !this._events.newListener) return Promise.resolve([!1]);
    var args, l, i, j, handler, promises = [],
    al = arguments.length;
    if (this._all) {
      if (3 < al) for (args = new Array(al), j = 1; j < al; j++) args[j] = arguments[j];
      for (i = 0, l = this._all.length; i < l; i++) switch (this.event = type, al) {
      case 1:
        promises.push(this._all[i].call(this, type));
        break;
      case 2:
        promises.push(this._all[i].call(this, type, arguments[1]));
        break;
      case 3:
        promises.push(this._all[i].call(this, type, arguments[1], arguments[2]));
        break;
      default:
        promises.push(this._all[i].apply(this, args))
      }
    }
    if (this.wildcard) {
      handler = [];
      var ns = "string" == typeof type ? type.split(this.delimiter) : type.slice();
      searchListenerTree.call(this, handler, ns, this.listenerTree, 0)
    } else handler = this._events[type];
    if ("function" == typeof handler) switch (this.event = type, al) {
    case 1:
      promises.push(handler.call(this));
      break;
    case 2:
      promises.push(handler.call(this, arguments[1]));
      break;
    case 3:
      promises.push(handler.call(this, arguments[1], arguments[2]));
      break;
    default:
      for (args = new Array(al - 1), j = 1; j < al; j++) args[j - 1] = arguments[j];
      promises.push(handler.apply(this, args))
    } else if (handler && handler.length) {
      if (handler = handler.slice(), 3 < al) for (args = new Array(al - 1), j = 1; j < al; j++) args[j - 1] = arguments[j];
      for (i = 0, l = handler.length; i < l; i++) switch (this.event = type, al) {
      case 1:
        promises.push(handler[i].call(this));
        break;
      case 2:
        promises.push(handler[i].call(this, arguments[1]));
        break;
      case 3:
        promises.push(handler[i].call(this, arguments[1], arguments[2]));
        break;
      default:
        promises.push(handler[i].apply(this, args))
      }
    } else if (!this._all && "error" === type) return arguments[1] instanceof Error ? Promise.reject(arguments[1]) : Promise.reject("Uncaught, unspecified 'error' event.");
    return Promise.all(promises)
  },
  EventEmitter.prototype.on = function(type, listener) {
    return this._on(type, listener, !1)
  },
  EventEmitter.prototype.prependListener = function(type, listener) {
    return this._on(type, listener, !0)
  },
  EventEmitter.prototype.onAny = function(fn) {
    return this._onAny(fn, !1)
  },
  EventEmitter.prototype.prependAny = function(fn) {
    return this._onAny(fn, !0)
  },
  EventEmitter.prototype.addListener = EventEmitter.prototype.on,
  EventEmitter.prototype._onAny = function(fn, prepend) {
    if ("function" != typeof fn) throw new Error("onAny only accepts instances of Function");
    return this._all || (this._all = []),
    prepend ? this._all.unshift(fn) : this._all.push(fn),
    this
  },
  EventEmitter.prototype._on = function(type, listener, prepend) {
    if ("function" == typeof type) return this._onAny(type, listener),
    this;
    if ("function" != typeof listener) throw new Error("on only accepts instances of Function");
    return this._events || init.call(this),
    this._newListener && this.emit("newListener", type, listener),
    this.wildcard ?
    function(type, listener) {
      for (var i = 0,
      len = (type = "string" == typeof type ? type.split(this.delimiter) : type.slice()).length; i + 1 < len; i++) if ("**" === type[i] && "**" === type[i + 1]) return;
      for (var tree = this.listenerTree,
      name = type.shift(); name !== undefined;) {
        if (tree[name] || (tree[name] = {}), tree = tree[name], 0 === type.length) return tree._listeners ? ("function" == typeof tree._listeners && (tree._listeners = [tree._listeners]), tree._listeners.push(listener), !tree._listeners.warned && 0 < this._maxListeners && tree._listeners.length > this._maxListeners && (tree._listeners.warned = !0, logPossibleMemoryLeak.call(this, tree._listeners.length, name))) : tree._listeners = listener,
        !0;
        name = type.shift()
      }
      return ! 0
    }.call(this, type, listener) : this._events[type] ? ("function" == typeof this._events[type] && (this._events[type] = [this._events[type]]), prepend ? this._events[type].unshift(listener) : this._events[type].push(listener), !this._events[type].warned && 0 < this._maxListeners && this._events[type].length > this._maxListeners && (this._events[type].warned = !0, logPossibleMemoryLeak.call(this, this._events[type].length, type))) : this._events[type] = listener,
    this
  },
  EventEmitter.prototype.off = function(type, listener) {
    if ("function" != typeof listener) throw new Error("removeListener only takes instances of Function");
    var handlers, leafs = [];
    if (this.wildcard) {
      var ns = "string" == typeof type ? type.split(this.delimiter) : type.slice();
      leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0)
    } else {
      if (!this._events[type]) return this;
      handlers = this._events[type],
      leafs.push({
        _listeners: handlers
      })
    }
    for (var iLeaf = 0; iLeaf < leafs.length; iLeaf++) {
      var leaf = leafs[iLeaf];
      if (handlers = leaf._listeners, isArray(handlers)) {
        for (var position = -1,
        i = 0,
        length = handlers.length; i < length; i++) if (handlers[i] === listener || handlers[i].listener && handlers[i].listener === listener || handlers[i]._origin && handlers[i]._origin === listener) {
          position = i;
          break
        }
        if (position < 0) continue;
        return this.wildcard ? leaf._listeners.splice(position, 1) : this._events[type].splice(position, 1),
        0 === handlers.length && (this.wildcard ? delete leaf._listeners: delete this._events[type]),
        this._removeListener && this.emit("removeListener", type, listener),
        this
      } (handlers === listener || handlers.listener && handlers.listener === listener || handlers._origin && handlers._origin === listener) && (this.wildcard ? delete leaf._listeners: delete this._events[type], this._removeListener && this.emit("removeListener", type, listener))
    }
    return function recursivelyGarbageCollect(root) {
      if (root !== undefined) {
        var keys = Object.keys(root);
        for (var i in keys) {
          var key = keys[i],
          obj = root[key];
          obj instanceof Function || "object" != typeof obj || null === obj || (0 < Object.keys(obj).length && recursivelyGarbageCollect(root[key]), 0 === Object.keys(obj).length && delete root[key])
        }
      }
    } (this.listenerTree),
    this
  },
  EventEmitter.prototype.offAny = function(fn) {
    var fns, i = 0,
    l = 0;
    if (fn && this._all && 0 < this._all.length) {
      for (i = 0, l = (fns = this._all).length; i < l; i++) if (fn === fns[i]) return fns.splice(i, 1),
      this._removeListener && this.emit("removeListenerAny", fn),
      this
    } else {
      if (fns = this._all, this._removeListener) for (i = 0, l = fns.length; i < l; i++) this.emit("removeListenerAny", fns[i]);
      this._all = []
    }
    return this
  },
  EventEmitter.prototype.removeListener = EventEmitter.prototype.off,
  EventEmitter.prototype.removeAllListeners = function(type) {
    if (type === undefined) return ! this._events || init.call(this),
    this;
    if (this.wildcard) for (var ns = "string" == typeof type ? type.split(this.delimiter) : type.slice(), leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0), iLeaf = 0; iLeaf < leafs.length; iLeaf++) {
      leafs[iLeaf]._listeners = null
    } else this._events && (this._events[type] = null);
    return this
  },
  EventEmitter.prototype.listeners = function(type) {
    if (this.wildcard) {
      var handlers = [],
      ns = "string" == typeof type ? type.split(this.delimiter) : type.slice();
      return searchListenerTree.call(this, handlers, ns, this.listenerTree, 0),
      handlers
    }
    return this._events || init.call(this),
    this._events[type] || (this._events[type] = []),
    isArray(this._events[type]) || (this._events[type] = [this._events[type]]),
    this._events[type]
  },
  EventEmitter.prototype.eventNames = function() {
    return Object.keys(this._events)
  },
  EventEmitter.prototype.listenerCount = function(type) {
    return this.listeners(type).length
  },
  EventEmitter.prototype.listenersAny = function() {
    return this._all ? this._all: []
  },
  "function" == typeof define && define.amd ? define(function() {
    return EventEmitter
  }) : "object" == typeof exports ? module.exports = EventEmitter: window.EventEmitter2 = EventEmitter
} (),
window.server = window._eventEmitter2 = new EventEmitter2({
  wildcard: !0,
  delimiter: "::",
  newListener: !1,
  maxListeners: 20,
  verboseMemoryLeak: !1
}),
function() {
    // 推送链接
  var url = 'https://quote.kvbprime.com/hubs/quote';
  var connect = '';
  window.server.on('startSignalr', startSignalrFn);
  window.server.on('closeSignalr', function(){
    if (connect) {
      // console.log('关闭');
      connect.stop();
    }
  });
  function startSignalrFn(result) {
    // console.log(result + '==================');
    url = result + '/hubs/quote';
    connect = (new signalR.HubConnectionBuilder).withUrl(url, {
      withCredentials: !0
    }).configureLogging(signalR.LogLevel.Information).build();
    connect.start().then(function () {
      setTimeout(function () {
        window._eventEmitter2.emit("signalrError", 'success');
      }, 2000);
    }).
    catch(function(e) {
      setTimeout(function() {
        connect.start()
      }, 3000);
      window._eventEmitter2.emit("signalrError", 'error');
      // console.log("network Error:11111111", e)
      console.error(e.message);
    }),
    connect.onclose(function(e) {
      window._eventEmitter2.emit("signalrError", 'error');
      // console.log('链接已经关闭');
      // setTimeout(function() {
      //   connect.start()
      // }, 3000);
    }),
    connect.on("quote", function(data) {
      try {
        if (typeof data === 'string') {
          var d = JSON.parse(data);
          window._eventEmitter2.emit("pushMessage", d);
        } else {
          window._eventEmitter2.emit("pushMessage", data);
        }
      } catch(e) {
        console.log("parse error", e)
      }
    })   
  } 
} (),
function() {
} ();