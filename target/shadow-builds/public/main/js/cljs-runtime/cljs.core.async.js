goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__19837 = arguments.length;
switch (G__19837) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19838 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19838 = (function (f,blockable,meta19839){
this.f = f;
this.blockable = blockable;
this.meta19839 = meta19839;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19840,meta19839__$1){
var self__ = this;
var _19840__$1 = this;
return (new cljs.core.async.t_cljs$core$async19838(self__.f,self__.blockable,meta19839__$1));
}));

(cljs.core.async.t_cljs$core$async19838.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19840){
var self__ = this;
var _19840__$1 = this;
return self__.meta19839;
}));

(cljs.core.async.t_cljs$core$async19838.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19838.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async19838.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async19838.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async19838.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta19839","meta19839",1853807773,null)], null);
}));

(cljs.core.async.t_cljs$core$async19838.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19838.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19838");

(cljs.core.async.t_cljs$core$async19838.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async19838");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19838.
 */
cljs.core.async.__GT_t_cljs$core$async19838 = (function cljs$core$async$__GT_t_cljs$core$async19838(f__$1,blockable__$1,meta19839){
return (new cljs.core.async.t_cljs$core$async19838(f__$1,blockable__$1,meta19839));
});

}

return (new cljs.core.async.t_cljs$core$async19838(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__19864 = arguments.length;
switch (G__19864) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__19880 = arguments.length;
switch (G__19880) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__19888 = arguments.length;
switch (G__19888) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_23011 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_23011) : fn1.call(null,val_23011));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_23011) : fn1.call(null,val_23011));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__19918 = arguments.length;
switch (G__19918) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___23015 = n;
var x_23016 = (0);
while(true){
if((x_23016 < n__4741__auto___23015)){
(a[x_23016] = x_23016);

var G__23020 = (x_23016 + (1));
x_23016 = G__23020;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19942 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19942 = (function (flag,meta19943){
this.flag = flag;
this.meta19943 = meta19943;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19944,meta19943__$1){
var self__ = this;
var _19944__$1 = this;
return (new cljs.core.async.t_cljs$core$async19942(self__.flag,meta19943__$1));
}));

(cljs.core.async.t_cljs$core$async19942.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19944){
var self__ = this;
var _19944__$1 = this;
return self__.meta19943;
}));

(cljs.core.async.t_cljs$core$async19942.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19942.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async19942.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async19942.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async19942.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta19943","meta19943",-1006959466,null)], null);
}));

(cljs.core.async.t_cljs$core$async19942.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19942.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19942");

(cljs.core.async.t_cljs$core$async19942.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async19942");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19942.
 */
cljs.core.async.__GT_t_cljs$core$async19942 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async19942(flag__$1,meta19943){
return (new cljs.core.async.t_cljs$core$async19942(flag__$1,meta19943));
});

}

return (new cljs.core.async.t_cljs$core$async19942(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19962 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19962 = (function (flag,cb,meta19963){
this.flag = flag;
this.cb = cb;
this.meta19963 = meta19963;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19962.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19964,meta19963__$1){
var self__ = this;
var _19964__$1 = this;
return (new cljs.core.async.t_cljs$core$async19962(self__.flag,self__.cb,meta19963__$1));
}));

(cljs.core.async.t_cljs$core$async19962.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19964){
var self__ = this;
var _19964__$1 = this;
return self__.meta19963;
}));

(cljs.core.async.t_cljs$core$async19962.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19962.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async19962.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async19962.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async19962.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta19963","meta19963",-1327559730,null)], null);
}));

(cljs.core.async.t_cljs$core$async19962.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19962.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19962");

(cljs.core.async.t_cljs$core$async19962.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async19962");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19962.
 */
cljs.core.async.__GT_t_cljs$core$async19962 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async19962(flag__$1,cb__$1,meta19963){
return (new cljs.core.async.t_cljs$core$async19962(flag__$1,cb__$1,meta19963));
});

}

return (new cljs.core.async.t_cljs$core$async19962(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19978_SHARP_){
var G__19984 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19978_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__19984) : fret.call(null,G__19984));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19979_SHARP_){
var G__19987 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19979_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__19987) : fret.call(null,G__19987));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23044 = (i + (1));
i = G__23044;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___23049 = arguments.length;
var i__4865__auto___23051 = (0);
while(true){
if((i__4865__auto___23051 < len__4864__auto___23049)){
args__4870__auto__.push((arguments[i__4865__auto___23051]));

var G__23052 = (i__4865__auto___23051 + (1));
i__4865__auto___23051 = G__23052;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20000){
var map__20001 = p__20000;
var map__20001__$1 = cljs.core.__destructure_map(map__20001);
var opts = map__20001__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq19992){
var G__19993 = cljs.core.first(seq19992);
var seq19992__$1 = cljs.core.next(seq19992);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19993,seq19992__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__20003 = arguments.length;
switch (G__20003) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19754__auto___23065 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19755__auto__ = (function (){var switch__19413__auto__ = (function (state_20062){
var state_val_20069 = (state_20062[(1)]);
if((state_val_20069 === (7))){
var inst_20050 = (state_20062[(2)]);
var state_20062__$1 = state_20062;
var statearr_20072_23067 = state_20062__$1;
(statearr_20072_23067[(2)] = inst_20050);

(statearr_20072_23067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20069 === (1))){
var state_20062__$1 = state_20062;
var statearr_20074_23068 = state_20062__$1;
(statearr_20074_23068[(2)] = null);

(statearr_20074_23068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20069 === (4))){
var inst_20025 = (state_20062[(7)]);
var inst_20025__$1 = (state_20062[(2)]);
var inst_20029 = (inst_20025__$1 == null);
var state_20062__$1 = (function (){var statearr_20075 = state_20062;
(statearr_20075[(7)] = inst_20025__$1);

return statearr_20075;
})();
if(cljs.core.truth_(inst_20029)){
var statearr_20076_23072 = state_20062__$1;
(statearr_20076_23072[(1)] = (5));

} else {
var statearr_20077_23073 = state_20062__$1;
(statearr_20077_23073[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20069 === (13))){
var state_20062__$1 = state_20062;
var statearr_20086_23074 = state_20062__$1;
(statearr_20086_23074[(2)] = null);

(statearr_20086_23074[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20069 === (6))){
var inst_20025 = (state_20062[(7)]);
var state_20062__$1 = state_20062;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20062__$1,(11),to,inst_20025);
} else {
if((state_val_20069 === (3))){
var inst_20056 = (state_20062[(2)]);
var state_20062__$1 = state_20062;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20062__$1,inst_20056);
} else {
if((state_val_20069 === (12))){
var state_20062__$1 = state_20062;
var statearr_20090_23076 = state_20062__$1;
(statearr_20090_23076[(2)] = null);

(statearr_20090_23076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20069 === (2))){
var state_20062__$1 = state_20062;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20062__$1,(4),from);
} else {
if((state_val_20069 === (11))){
var inst_20043 = (state_20062[(2)]);
var state_20062__$1 = state_20062;
if(cljs.core.truth_(inst_20043)){
var statearr_20094_23077 = state_20062__$1;
(statearr_20094_23077[(1)] = (12));

} else {
var statearr_20095_23078 = state_20062__$1;
(statearr_20095_23078[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20069 === (9))){
var state_20062__$1 = state_20062;
var statearr_20096_23079 = state_20062__$1;
(statearr_20096_23079[(2)] = null);

(statearr_20096_23079[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20069 === (5))){
var state_20062__$1 = state_20062;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20101_23082 = state_20062__$1;
(statearr_20101_23082[(1)] = (8));

} else {
var statearr_20102_23083 = state_20062__$1;
(statearr_20102_23083[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20069 === (14))){
var inst_20048 = (state_20062[(2)]);
var state_20062__$1 = state_20062;
var statearr_20104_23085 = state_20062__$1;
(statearr_20104_23085[(2)] = inst_20048);

(statearr_20104_23085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20069 === (10))){
var inst_20035 = (state_20062[(2)]);
var state_20062__$1 = state_20062;
var statearr_20107_23086 = state_20062__$1;
(statearr_20107_23086[(2)] = inst_20035);

(statearr_20107_23086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20069 === (8))){
var inst_20032 = cljs.core.async.close_BANG_(to);
var state_20062__$1 = state_20062;
var statearr_20108_23088 = state_20062__$1;
(statearr_20108_23088[(2)] = inst_20032);

(statearr_20108_23088[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__19415__auto__ = null;
var cljs$core$async$state_machine__19415__auto____0 = (function (){
var statearr_20109 = [null,null,null,null,null,null,null,null];
(statearr_20109[(0)] = cljs$core$async$state_machine__19415__auto__);

(statearr_20109[(1)] = (1));

return statearr_20109;
});
var cljs$core$async$state_machine__19415__auto____1 = (function (state_20062){
while(true){
var ret_value__19416__auto__ = (function (){try{while(true){
var result__19417__auto__ = switch__19413__auto__(state_20062);
if(cljs.core.keyword_identical_QMARK_(result__19417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19417__auto__;
}
break;
}
}catch (e20110){var ex__19418__auto__ = e20110;
var statearr_20111_23092 = state_20062;
(statearr_20111_23092[(2)] = ex__19418__auto__);


if(cljs.core.seq((state_20062[(4)]))){
var statearr_20112_23093 = state_20062;
(statearr_20112_23093[(1)] = cljs.core.first((state_20062[(4)])));

} else {
throw ex__19418__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23094 = state_20062;
state_20062 = G__23094;
continue;
} else {
return ret_value__19416__auto__;
}
break;
}
});
cljs$core$async$state_machine__19415__auto__ = function(state_20062){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19415__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19415__auto____1.call(this,state_20062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19415__auto____0;
cljs$core$async$state_machine__19415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19415__auto____1;
return cljs$core$async$state_machine__19415__auto__;
})()
})();
var state__19756__auto__ = (function (){var statearr_20117 = f__19755__auto__();
(statearr_20117[(6)] = c__19754__auto___23065);

return statearr_20117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19756__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__20123){
var vec__20125 = p__20123;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20125,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20125,(1),null);
var job = vec__20125;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__19754__auto___23096 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19755__auto__ = (function (){var switch__19413__auto__ = (function (state_20133){
var state_val_20134 = (state_20133[(1)]);
if((state_val_20134 === (1))){
var state_20133__$1 = state_20133;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20133__$1,(2),res,v);
} else {
if((state_val_20134 === (2))){
var inst_20130 = (state_20133[(2)]);
var inst_20131 = cljs.core.async.close_BANG_(res);
var state_20133__$1 = (function (){var statearr_20142 = state_20133;
(statearr_20142[(7)] = inst_20130);

return statearr_20142;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20133__$1,inst_20131);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19415__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19415__auto____0 = (function (){
var statearr_20144 = [null,null,null,null,null,null,null,null];
(statearr_20144[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19415__auto__);

(statearr_20144[(1)] = (1));

return statearr_20144;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19415__auto____1 = (function (state_20133){
while(true){
var ret_value__19416__auto__ = (function (){try{while(true){
var result__19417__auto__ = switch__19413__auto__(state_20133);
if(cljs.core.keyword_identical_QMARK_(result__19417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19417__auto__;
}
break;
}
}catch (e20145){var ex__19418__auto__ = e20145;
var statearr_20147_23101 = state_20133;
(statearr_20147_23101[(2)] = ex__19418__auto__);


if(cljs.core.seq((state_20133[(4)]))){
var statearr_20149_23103 = state_20133;
(statearr_20149_23103[(1)] = cljs.core.first((state_20133[(4)])));

} else {
throw ex__19418__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23106 = state_20133;
state_20133 = G__23106;
continue;
} else {
return ret_value__19416__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19415__auto__ = function(state_20133){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19415__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19415__auto____1.call(this,state_20133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19415__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19415__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19415__auto__;
})()
})();
var state__19756__auto__ = (function (){var statearr_20152 = f__19755__auto__();
(statearr_20152[(6)] = c__19754__auto___23096);

return statearr_20152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19756__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__20154){
var vec__20155 = p__20154;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20155,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20155,(1),null);
var job = vec__20155;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___23108 = n;
var __23109 = (0);
while(true){
if((__23109 < n__4741__auto___23108)){
var G__20159_23110 = type;
var G__20159_23112__$1 = (((G__20159_23110 instanceof cljs.core.Keyword))?G__20159_23110.fqn:null);
switch (G__20159_23112__$1) {
case "compute":
var c__19754__auto___23115 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__23109,c__19754__auto___23115,G__20159_23110,G__20159_23112__$1,n__4741__auto___23108,jobs,results,process,async){
return (function (){
var f__19755__auto__ = (function (){var switch__19413__auto__ = ((function (__23109,c__19754__auto___23115,G__20159_23110,G__20159_23112__$1,n__4741__auto___23108,jobs,results,process,async){
return (function (state_20176){
var state_val_20177 = (state_20176[(1)]);
if((state_val_20177 === (1))){
var state_20176__$1 = state_20176;
var statearr_20180_23117 = state_20176__$1;
(statearr_20180_23117[(2)] = null);

(statearr_20180_23117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20177 === (2))){
var state_20176__$1 = state_20176;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20176__$1,(4),jobs);
} else {
if((state_val_20177 === (3))){
var inst_20174 = (state_20176[(2)]);
var state_20176__$1 = state_20176;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20176__$1,inst_20174);
} else {
if((state_val_20177 === (4))){
var inst_20166 = (state_20176[(2)]);
var inst_20167 = process(inst_20166);
var state_20176__$1 = state_20176;
if(cljs.core.truth_(inst_20167)){
var statearr_20183_23120 = state_20176__$1;
(statearr_20183_23120[(1)] = (5));

} else {
var statearr_20184_23122 = state_20176__$1;
(statearr_20184_23122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20177 === (5))){
var state_20176__$1 = state_20176;
var statearr_20185_23124 = state_20176__$1;
(statearr_20185_23124[(2)] = null);

(statearr_20185_23124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20177 === (6))){
var state_20176__$1 = state_20176;
var statearr_20186_23125 = state_20176__$1;
(statearr_20186_23125[(2)] = null);

(statearr_20186_23125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20177 === (7))){
var inst_20172 = (state_20176[(2)]);
var state_20176__$1 = state_20176;
var statearr_20188_23127 = state_20176__$1;
(statearr_20188_23127[(2)] = inst_20172);

(statearr_20188_23127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__23109,c__19754__auto___23115,G__20159_23110,G__20159_23112__$1,n__4741__auto___23108,jobs,results,process,async))
;
return ((function (__23109,switch__19413__auto__,c__19754__auto___23115,G__20159_23110,G__20159_23112__$1,n__4741__auto___23108,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19415__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19415__auto____0 = (function (){
var statearr_20193 = [null,null,null,null,null,null,null];
(statearr_20193[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19415__auto__);

(statearr_20193[(1)] = (1));

return statearr_20193;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19415__auto____1 = (function (state_20176){
while(true){
var ret_value__19416__auto__ = (function (){try{while(true){
var result__19417__auto__ = switch__19413__auto__(state_20176);
if(cljs.core.keyword_identical_QMARK_(result__19417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19417__auto__;
}
break;
}
}catch (e20201){var ex__19418__auto__ = e20201;
var statearr_20203_23131 = state_20176;
(statearr_20203_23131[(2)] = ex__19418__auto__);


if(cljs.core.seq((state_20176[(4)]))){
var statearr_20211_23132 = state_20176;
(statearr_20211_23132[(1)] = cljs.core.first((state_20176[(4)])));

} else {
throw ex__19418__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23133 = state_20176;
state_20176 = G__23133;
continue;
} else {
return ret_value__19416__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19415__auto__ = function(state_20176){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19415__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19415__auto____1.call(this,state_20176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19415__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19415__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19415__auto__;
})()
;})(__23109,switch__19413__auto__,c__19754__auto___23115,G__20159_23110,G__20159_23112__$1,n__4741__auto___23108,jobs,results,process,async))
})();
var state__19756__auto__ = (function (){var statearr_20217 = f__19755__auto__();
(statearr_20217[(6)] = c__19754__auto___23115);

return statearr_20217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19756__auto__);
});})(__23109,c__19754__auto___23115,G__20159_23110,G__20159_23112__$1,n__4741__auto___23108,jobs,results,process,async))
);


break;
case "async":
var c__19754__auto___23135 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__23109,c__19754__auto___23135,G__20159_23110,G__20159_23112__$1,n__4741__auto___23108,jobs,results,process,async){
return (function (){
var f__19755__auto__ = (function (){var switch__19413__auto__ = ((function (__23109,c__19754__auto___23135,G__20159_23110,G__20159_23112__$1,n__4741__auto___23108,jobs,results,process,async){
return (function (state_20234){
var state_val_20235 = (state_20234[(1)]);
if((state_val_20235 === (1))){
var state_20234__$1 = state_20234;
var statearr_20245_23139 = state_20234__$1;
(statearr_20245_23139[(2)] = null);

(statearr_20245_23139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20235 === (2))){
var state_20234__$1 = state_20234;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20234__$1,(4),jobs);
} else {
if((state_val_20235 === (3))){
var inst_20232 = (state_20234[(2)]);
var state_20234__$1 = state_20234;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20234__$1,inst_20232);
} else {
if((state_val_20235 === (4))){
var inst_20220 = (state_20234[(2)]);
var inst_20221 = async(inst_20220);
var state_20234__$1 = state_20234;
if(cljs.core.truth_(inst_20221)){
var statearr_20256_23141 = state_20234__$1;
(statearr_20256_23141[(1)] = (5));

} else {
var statearr_20257_23142 = state_20234__$1;
(statearr_20257_23142[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20235 === (5))){
var state_20234__$1 = state_20234;
var statearr_20263_23143 = state_20234__$1;
(statearr_20263_23143[(2)] = null);

(statearr_20263_23143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20235 === (6))){
var state_20234__$1 = state_20234;
var statearr_20264_23146 = state_20234__$1;
(statearr_20264_23146[(2)] = null);

(statearr_20264_23146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20235 === (7))){
var inst_20230 = (state_20234[(2)]);
var state_20234__$1 = state_20234;
var statearr_20267_23148 = state_20234__$1;
(statearr_20267_23148[(2)] = inst_20230);

(statearr_20267_23148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__23109,c__19754__auto___23135,G__20159_23110,G__20159_23112__$1,n__4741__auto___23108,jobs,results,process,async))
;
return ((function (__23109,switch__19413__auto__,c__19754__auto___23135,G__20159_23110,G__20159_23112__$1,n__4741__auto___23108,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19415__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19415__auto____0 = (function (){
var statearr_20270 = [null,null,null,null,null,null,null];
(statearr_20270[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19415__auto__);

(statearr_20270[(1)] = (1));

return statearr_20270;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19415__auto____1 = (function (state_20234){
while(true){
var ret_value__19416__auto__ = (function (){try{while(true){
var result__19417__auto__ = switch__19413__auto__(state_20234);
if(cljs.core.keyword_identical_QMARK_(result__19417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19417__auto__;
}
break;
}
}catch (e20275){var ex__19418__auto__ = e20275;
var statearr_20277_23150 = state_20234;
(statearr_20277_23150[(2)] = ex__19418__auto__);


if(cljs.core.seq((state_20234[(4)]))){
var statearr_20283_23153 = state_20234;
(statearr_20283_23153[(1)] = cljs.core.first((state_20234[(4)])));

} else {
throw ex__19418__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23155 = state_20234;
state_20234 = G__23155;
continue;
} else {
return ret_value__19416__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19415__auto__ = function(state_20234){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19415__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19415__auto____1.call(this,state_20234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19415__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19415__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19415__auto__;
})()
;})(__23109,switch__19413__auto__,c__19754__auto___23135,G__20159_23110,G__20159_23112__$1,n__4741__auto___23108,jobs,results,process,async))
})();
var state__19756__auto__ = (function (){var statearr_20305 = f__19755__auto__();
(statearr_20305[(6)] = c__19754__auto___23135);

return statearr_20305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19756__auto__);
});})(__23109,c__19754__auto___23135,G__20159_23110,G__20159_23112__$1,n__4741__auto___23108,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20159_23112__$1)].join('')));

}

var G__23157 = (__23109 + (1));
__23109 = G__23157;
continue;
} else {
}
break;
}

var c__19754__auto___23158 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19755__auto__ = (function (){var switch__19413__auto__ = (function (state_20366){
var state_val_20367 = (state_20366[(1)]);
if((state_val_20367 === (7))){
var inst_20354 = (state_20366[(2)]);
var state_20366__$1 = state_20366;
var statearr_20391_23159 = state_20366__$1;
(statearr_20391_23159[(2)] = inst_20354);

(statearr_20391_23159[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20367 === (1))){
var state_20366__$1 = state_20366;
var statearr_20394_23162 = state_20366__$1;
(statearr_20394_23162[(2)] = null);

(statearr_20394_23162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20367 === (4))){
var inst_20316 = (state_20366[(7)]);
var inst_20316__$1 = (state_20366[(2)]);
var inst_20317 = (inst_20316__$1 == null);
var state_20366__$1 = (function (){var statearr_20395 = state_20366;
(statearr_20395[(7)] = inst_20316__$1);

return statearr_20395;
})();
if(cljs.core.truth_(inst_20317)){
var statearr_20396_23164 = state_20366__$1;
(statearr_20396_23164[(1)] = (5));

} else {
var statearr_20397_23165 = state_20366__$1;
(statearr_20397_23165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20367 === (6))){
var inst_20325 = (state_20366[(8)]);
var inst_20316 = (state_20366[(7)]);
var inst_20325__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_20336 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20339 = [inst_20316,inst_20325__$1];
var inst_20341 = (new cljs.core.PersistentVector(null,2,(5),inst_20336,inst_20339,null));
var state_20366__$1 = (function (){var statearr_20399 = state_20366;
(statearr_20399[(8)] = inst_20325__$1);

return statearr_20399;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20366__$1,(8),jobs,inst_20341);
} else {
if((state_val_20367 === (3))){
var inst_20356 = (state_20366[(2)]);
var state_20366__$1 = state_20366;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20366__$1,inst_20356);
} else {
if((state_val_20367 === (2))){
var state_20366__$1 = state_20366;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20366__$1,(4),from);
} else {
if((state_val_20367 === (9))){
var inst_20346 = (state_20366[(2)]);
var state_20366__$1 = (function (){var statearr_20411 = state_20366;
(statearr_20411[(9)] = inst_20346);

return statearr_20411;
})();
var statearr_20412_23169 = state_20366__$1;
(statearr_20412_23169[(2)] = null);

(statearr_20412_23169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20367 === (5))){
var inst_20319 = cljs.core.async.close_BANG_(jobs);
var state_20366__$1 = state_20366;
var statearr_20415_23171 = state_20366__$1;
(statearr_20415_23171[(2)] = inst_20319);

(statearr_20415_23171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20367 === (8))){
var inst_20325 = (state_20366[(8)]);
var inst_20343 = (state_20366[(2)]);
var state_20366__$1 = (function (){var statearr_20420 = state_20366;
(statearr_20420[(10)] = inst_20343);

return statearr_20420;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20366__$1,(9),results,inst_20325);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19415__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19415__auto____0 = (function (){
var statearr_20421 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20421[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19415__auto__);

(statearr_20421[(1)] = (1));

return statearr_20421;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19415__auto____1 = (function (state_20366){
while(true){
var ret_value__19416__auto__ = (function (){try{while(true){
var result__19417__auto__ = switch__19413__auto__(state_20366);
if(cljs.core.keyword_identical_QMARK_(result__19417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19417__auto__;
}
break;
}
}catch (e20422){var ex__19418__auto__ = e20422;
var statearr_20427_23175 = state_20366;
(statearr_20427_23175[(2)] = ex__19418__auto__);


if(cljs.core.seq((state_20366[(4)]))){
var statearr_20432_23177 = state_20366;
(statearr_20432_23177[(1)] = cljs.core.first((state_20366[(4)])));

} else {
throw ex__19418__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23178 = state_20366;
state_20366 = G__23178;
continue;
} else {
return ret_value__19416__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19415__auto__ = function(state_20366){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19415__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19415__auto____1.call(this,state_20366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19415__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19415__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19415__auto__;
})()
})();
var state__19756__auto__ = (function (){var statearr_20438 = f__19755__auto__();
(statearr_20438[(6)] = c__19754__auto___23158);

return statearr_20438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19756__auto__);
}));


var c__19754__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19755__auto__ = (function (){var switch__19413__auto__ = (function (state_20478){
var state_val_20479 = (state_20478[(1)]);
if((state_val_20479 === (7))){
var inst_20474 = (state_20478[(2)]);
var state_20478__$1 = state_20478;
var statearr_20482_23180 = state_20478__$1;
(statearr_20482_23180[(2)] = inst_20474);

(statearr_20482_23180[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20479 === (20))){
var state_20478__$1 = state_20478;
var statearr_20483_23183 = state_20478__$1;
(statearr_20483_23183[(2)] = null);

(statearr_20483_23183[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20479 === (1))){
var state_20478__$1 = state_20478;
var statearr_20484_23185 = state_20478__$1;
(statearr_20484_23185[(2)] = null);

(statearr_20484_23185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20479 === (4))){
var inst_20442 = (state_20478[(7)]);
var inst_20442__$1 = (state_20478[(2)]);
var inst_20443 = (inst_20442__$1 == null);
var state_20478__$1 = (function (){var statearr_20485 = state_20478;
(statearr_20485[(7)] = inst_20442__$1);

return statearr_20485;
})();
if(cljs.core.truth_(inst_20443)){
var statearr_20486_23187 = state_20478__$1;
(statearr_20486_23187[(1)] = (5));

} else {
var statearr_20487_23188 = state_20478__$1;
(statearr_20487_23188[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20479 === (15))){
var inst_20456 = (state_20478[(8)]);
var state_20478__$1 = state_20478;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20478__$1,(18),to,inst_20456);
} else {
if((state_val_20479 === (21))){
var inst_20469 = (state_20478[(2)]);
var state_20478__$1 = state_20478;
var statearr_20488_23190 = state_20478__$1;
(statearr_20488_23190[(2)] = inst_20469);

(statearr_20488_23190[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20479 === (13))){
var inst_20471 = (state_20478[(2)]);
var state_20478__$1 = (function (){var statearr_20489 = state_20478;
(statearr_20489[(9)] = inst_20471);

return statearr_20489;
})();
var statearr_20490_23195 = state_20478__$1;
(statearr_20490_23195[(2)] = null);

(statearr_20490_23195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20479 === (6))){
var inst_20442 = (state_20478[(7)]);
var state_20478__$1 = state_20478;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20478__$1,(11),inst_20442);
} else {
if((state_val_20479 === (17))){
var inst_20464 = (state_20478[(2)]);
var state_20478__$1 = state_20478;
if(cljs.core.truth_(inst_20464)){
var statearr_20491_23197 = state_20478__$1;
(statearr_20491_23197[(1)] = (19));

} else {
var statearr_20492_23198 = state_20478__$1;
(statearr_20492_23198[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20479 === (3))){
var inst_20476 = (state_20478[(2)]);
var state_20478__$1 = state_20478;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20478__$1,inst_20476);
} else {
if((state_val_20479 === (12))){
var inst_20452 = (state_20478[(10)]);
var state_20478__$1 = state_20478;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20478__$1,(14),inst_20452);
} else {
if((state_val_20479 === (2))){
var state_20478__$1 = state_20478;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20478__$1,(4),results);
} else {
if((state_val_20479 === (19))){
var state_20478__$1 = state_20478;
var statearr_20493_23202 = state_20478__$1;
(statearr_20493_23202[(2)] = null);

(statearr_20493_23202[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20479 === (11))){
var inst_20452 = (state_20478[(2)]);
var state_20478__$1 = (function (){var statearr_20503 = state_20478;
(statearr_20503[(10)] = inst_20452);

return statearr_20503;
})();
var statearr_20504_23203 = state_20478__$1;
(statearr_20504_23203[(2)] = null);

(statearr_20504_23203[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20479 === (9))){
var state_20478__$1 = state_20478;
var statearr_20505_23205 = state_20478__$1;
(statearr_20505_23205[(2)] = null);

(statearr_20505_23205[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20479 === (5))){
var state_20478__$1 = state_20478;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20506_23206 = state_20478__$1;
(statearr_20506_23206[(1)] = (8));

} else {
var statearr_20511_23207 = state_20478__$1;
(statearr_20511_23207[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20479 === (14))){
var inst_20456 = (state_20478[(8)]);
var inst_20458 = (state_20478[(11)]);
var inst_20456__$1 = (state_20478[(2)]);
var inst_20457 = (inst_20456__$1 == null);
var inst_20458__$1 = cljs.core.not(inst_20457);
var state_20478__$1 = (function (){var statearr_20512 = state_20478;
(statearr_20512[(8)] = inst_20456__$1);

(statearr_20512[(11)] = inst_20458__$1);

return statearr_20512;
})();
if(inst_20458__$1){
var statearr_20513_23211 = state_20478__$1;
(statearr_20513_23211[(1)] = (15));

} else {
var statearr_20516_23212 = state_20478__$1;
(statearr_20516_23212[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20479 === (16))){
var inst_20458 = (state_20478[(11)]);
var state_20478__$1 = state_20478;
var statearr_20519_23214 = state_20478__$1;
(statearr_20519_23214[(2)] = inst_20458);

(statearr_20519_23214[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20479 === (10))){
var inst_20449 = (state_20478[(2)]);
var state_20478__$1 = state_20478;
var statearr_20522_23215 = state_20478__$1;
(statearr_20522_23215[(2)] = inst_20449);

(statearr_20522_23215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20479 === (18))){
var inst_20461 = (state_20478[(2)]);
var state_20478__$1 = state_20478;
var statearr_20523_23218 = state_20478__$1;
(statearr_20523_23218[(2)] = inst_20461);

(statearr_20523_23218[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20479 === (8))){
var inst_20446 = cljs.core.async.close_BANG_(to);
var state_20478__$1 = state_20478;
var statearr_20524_23220 = state_20478__$1;
(statearr_20524_23220[(2)] = inst_20446);

(statearr_20524_23220[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19415__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19415__auto____0 = (function (){
var statearr_20525 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20525[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19415__auto__);

(statearr_20525[(1)] = (1));

return statearr_20525;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19415__auto____1 = (function (state_20478){
while(true){
var ret_value__19416__auto__ = (function (){try{while(true){
var result__19417__auto__ = switch__19413__auto__(state_20478);
if(cljs.core.keyword_identical_QMARK_(result__19417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19417__auto__;
}
break;
}
}catch (e20526){var ex__19418__auto__ = e20526;
var statearr_20527_23224 = state_20478;
(statearr_20527_23224[(2)] = ex__19418__auto__);


if(cljs.core.seq((state_20478[(4)]))){
var statearr_20530_23225 = state_20478;
(statearr_20530_23225[(1)] = cljs.core.first((state_20478[(4)])));

} else {
throw ex__19418__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23226 = state_20478;
state_20478 = G__23226;
continue;
} else {
return ret_value__19416__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19415__auto__ = function(state_20478){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19415__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19415__auto____1.call(this,state_20478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19415__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19415__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19415__auto__;
})()
})();
var state__19756__auto__ = (function (){var statearr_20540 = f__19755__auto__();
(statearr_20540[(6)] = c__19754__auto__);

return statearr_20540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19756__auto__);
}));

return c__19754__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__20546 = arguments.length;
switch (G__20546) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__20548 = arguments.length;
switch (G__20548) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__20564 = arguments.length;
switch (G__20564) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__19754__auto___23231 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19755__auto__ = (function (){var switch__19413__auto__ = (function (state_20599){
var state_val_20600 = (state_20599[(1)]);
if((state_val_20600 === (7))){
var inst_20595 = (state_20599[(2)]);
var state_20599__$1 = state_20599;
var statearr_20602_23232 = state_20599__$1;
(statearr_20602_23232[(2)] = inst_20595);

(statearr_20602_23232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20600 === (1))){
var state_20599__$1 = state_20599;
var statearr_20603_23233 = state_20599__$1;
(statearr_20603_23233[(2)] = null);

(statearr_20603_23233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20600 === (4))){
var inst_20571 = (state_20599[(7)]);
var inst_20571__$1 = (state_20599[(2)]);
var inst_20572 = (inst_20571__$1 == null);
var state_20599__$1 = (function (){var statearr_20604 = state_20599;
(statearr_20604[(7)] = inst_20571__$1);

return statearr_20604;
})();
if(cljs.core.truth_(inst_20572)){
var statearr_20605_23234 = state_20599__$1;
(statearr_20605_23234[(1)] = (5));

} else {
var statearr_20606_23235 = state_20599__$1;
(statearr_20606_23235[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20600 === (13))){
var state_20599__$1 = state_20599;
var statearr_20607_23236 = state_20599__$1;
(statearr_20607_23236[(2)] = null);

(statearr_20607_23236[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20600 === (6))){
var inst_20571 = (state_20599[(7)]);
var inst_20582 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_20571) : p.call(null,inst_20571));
var state_20599__$1 = state_20599;
if(cljs.core.truth_(inst_20582)){
var statearr_20612_23237 = state_20599__$1;
(statearr_20612_23237[(1)] = (9));

} else {
var statearr_20613_23238 = state_20599__$1;
(statearr_20613_23238[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20600 === (3))){
var inst_20597 = (state_20599[(2)]);
var state_20599__$1 = state_20599;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20599__$1,inst_20597);
} else {
if((state_val_20600 === (12))){
var state_20599__$1 = state_20599;
var statearr_20614_23239 = state_20599__$1;
(statearr_20614_23239[(2)] = null);

(statearr_20614_23239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20600 === (2))){
var state_20599__$1 = state_20599;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20599__$1,(4),ch);
} else {
if((state_val_20600 === (11))){
var inst_20571 = (state_20599[(7)]);
var inst_20586 = (state_20599[(2)]);
var state_20599__$1 = state_20599;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20599__$1,(8),inst_20586,inst_20571);
} else {
if((state_val_20600 === (9))){
var state_20599__$1 = state_20599;
var statearr_20620_23240 = state_20599__$1;
(statearr_20620_23240[(2)] = tc);

(statearr_20620_23240[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20600 === (5))){
var inst_20575 = cljs.core.async.close_BANG_(tc);
var inst_20576 = cljs.core.async.close_BANG_(fc);
var state_20599__$1 = (function (){var statearr_20621 = state_20599;
(statearr_20621[(8)] = inst_20575);

return statearr_20621;
})();
var statearr_20622_23241 = state_20599__$1;
(statearr_20622_23241[(2)] = inst_20576);

(statearr_20622_23241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20600 === (14))){
var inst_20593 = (state_20599[(2)]);
var state_20599__$1 = state_20599;
var statearr_20623_23242 = state_20599__$1;
(statearr_20623_23242[(2)] = inst_20593);

(statearr_20623_23242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20600 === (10))){
var state_20599__$1 = state_20599;
var statearr_20624_23243 = state_20599__$1;
(statearr_20624_23243[(2)] = fc);

(statearr_20624_23243[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20600 === (8))){
var inst_20588 = (state_20599[(2)]);
var state_20599__$1 = state_20599;
if(cljs.core.truth_(inst_20588)){
var statearr_20626_23244 = state_20599__$1;
(statearr_20626_23244[(1)] = (12));

} else {
var statearr_20627_23245 = state_20599__$1;
(statearr_20627_23245[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__19415__auto__ = null;
var cljs$core$async$state_machine__19415__auto____0 = (function (){
var statearr_20630 = [null,null,null,null,null,null,null,null,null];
(statearr_20630[(0)] = cljs$core$async$state_machine__19415__auto__);

(statearr_20630[(1)] = (1));

return statearr_20630;
});
var cljs$core$async$state_machine__19415__auto____1 = (function (state_20599){
while(true){
var ret_value__19416__auto__ = (function (){try{while(true){
var result__19417__auto__ = switch__19413__auto__(state_20599);
if(cljs.core.keyword_identical_QMARK_(result__19417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19417__auto__;
}
break;
}
}catch (e20631){var ex__19418__auto__ = e20631;
var statearr_20632_23246 = state_20599;
(statearr_20632_23246[(2)] = ex__19418__auto__);


if(cljs.core.seq((state_20599[(4)]))){
var statearr_20633_23247 = state_20599;
(statearr_20633_23247[(1)] = cljs.core.first((state_20599[(4)])));

} else {
throw ex__19418__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23248 = state_20599;
state_20599 = G__23248;
continue;
} else {
return ret_value__19416__auto__;
}
break;
}
});
cljs$core$async$state_machine__19415__auto__ = function(state_20599){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19415__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19415__auto____1.call(this,state_20599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19415__auto____0;
cljs$core$async$state_machine__19415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19415__auto____1;
return cljs$core$async$state_machine__19415__auto__;
})()
})();
var state__19756__auto__ = (function (){var statearr_20638 = f__19755__auto__();
(statearr_20638[(6)] = c__19754__auto___23231);

return statearr_20638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19756__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19754__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19755__auto__ = (function (){var switch__19413__auto__ = (function (state_20664){
var state_val_20665 = (state_20664[(1)]);
if((state_val_20665 === (7))){
var inst_20656 = (state_20664[(2)]);
var state_20664__$1 = state_20664;
var statearr_20667_23249 = state_20664__$1;
(statearr_20667_23249[(2)] = inst_20656);

(statearr_20667_23249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20665 === (1))){
var inst_20639 = init;
var inst_20640 = inst_20639;
var state_20664__$1 = (function (){var statearr_20669 = state_20664;
(statearr_20669[(7)] = inst_20640);

return statearr_20669;
})();
var statearr_20670_23250 = state_20664__$1;
(statearr_20670_23250[(2)] = null);

(statearr_20670_23250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20665 === (4))){
var inst_20643 = (state_20664[(8)]);
var inst_20643__$1 = (state_20664[(2)]);
var inst_20644 = (inst_20643__$1 == null);
var state_20664__$1 = (function (){var statearr_20671 = state_20664;
(statearr_20671[(8)] = inst_20643__$1);

return statearr_20671;
})();
if(cljs.core.truth_(inst_20644)){
var statearr_20676_23251 = state_20664__$1;
(statearr_20676_23251[(1)] = (5));

} else {
var statearr_20679_23252 = state_20664__$1;
(statearr_20679_23252[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20665 === (6))){
var inst_20643 = (state_20664[(8)]);
var inst_20647 = (state_20664[(9)]);
var inst_20640 = (state_20664[(7)]);
var inst_20647__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_20640,inst_20643) : f.call(null,inst_20640,inst_20643));
var inst_20648 = cljs.core.reduced_QMARK_(inst_20647__$1);
var state_20664__$1 = (function (){var statearr_20681 = state_20664;
(statearr_20681[(9)] = inst_20647__$1);

return statearr_20681;
})();
if(inst_20648){
var statearr_20682_23253 = state_20664__$1;
(statearr_20682_23253[(1)] = (8));

} else {
var statearr_20684_23254 = state_20664__$1;
(statearr_20684_23254[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20665 === (3))){
var inst_20662 = (state_20664[(2)]);
var state_20664__$1 = state_20664;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20664__$1,inst_20662);
} else {
if((state_val_20665 === (2))){
var state_20664__$1 = state_20664;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20664__$1,(4),ch);
} else {
if((state_val_20665 === (9))){
var inst_20647 = (state_20664[(9)]);
var inst_20640 = inst_20647;
var state_20664__$1 = (function (){var statearr_20685 = state_20664;
(statearr_20685[(7)] = inst_20640);

return statearr_20685;
})();
var statearr_20686_23255 = state_20664__$1;
(statearr_20686_23255[(2)] = null);

(statearr_20686_23255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20665 === (5))){
var inst_20640 = (state_20664[(7)]);
var state_20664__$1 = state_20664;
var statearr_20688_23256 = state_20664__$1;
(statearr_20688_23256[(2)] = inst_20640);

(statearr_20688_23256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20665 === (10))){
var inst_20654 = (state_20664[(2)]);
var state_20664__$1 = state_20664;
var statearr_20689_23257 = state_20664__$1;
(statearr_20689_23257[(2)] = inst_20654);

(statearr_20689_23257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20665 === (8))){
var inst_20647 = (state_20664[(9)]);
var inst_20650 = cljs.core.deref(inst_20647);
var state_20664__$1 = state_20664;
var statearr_20693_23258 = state_20664__$1;
(statearr_20693_23258[(2)] = inst_20650);

(statearr_20693_23258[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__19415__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19415__auto____0 = (function (){
var statearr_20694 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20694[(0)] = cljs$core$async$reduce_$_state_machine__19415__auto__);

(statearr_20694[(1)] = (1));

return statearr_20694;
});
var cljs$core$async$reduce_$_state_machine__19415__auto____1 = (function (state_20664){
while(true){
var ret_value__19416__auto__ = (function (){try{while(true){
var result__19417__auto__ = switch__19413__auto__(state_20664);
if(cljs.core.keyword_identical_QMARK_(result__19417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19417__auto__;
}
break;
}
}catch (e20695){var ex__19418__auto__ = e20695;
var statearr_20697_23259 = state_20664;
(statearr_20697_23259[(2)] = ex__19418__auto__);


if(cljs.core.seq((state_20664[(4)]))){
var statearr_20698_23260 = state_20664;
(statearr_20698_23260[(1)] = cljs.core.first((state_20664[(4)])));

} else {
throw ex__19418__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23261 = state_20664;
state_20664 = G__23261;
continue;
} else {
return ret_value__19416__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19415__auto__ = function(state_20664){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19415__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19415__auto____1.call(this,state_20664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19415__auto____0;
cljs$core$async$reduce_$_state_machine__19415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19415__auto____1;
return cljs$core$async$reduce_$_state_machine__19415__auto__;
})()
})();
var state__19756__auto__ = (function (){var statearr_20701 = f__19755__auto__();
(statearr_20701[(6)] = c__19754__auto__);

return statearr_20701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19756__auto__);
}));

return c__19754__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__19754__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19755__auto__ = (function (){var switch__19413__auto__ = (function (state_20707){
var state_val_20708 = (state_20707[(1)]);
if((state_val_20708 === (1))){
var inst_20702 = cljs.core.async.reduce(f__$1,init,ch);
var state_20707__$1 = state_20707;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20707__$1,(2),inst_20702);
} else {
if((state_val_20708 === (2))){
var inst_20704 = (state_20707[(2)]);
var inst_20705 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_20704) : f__$1.call(null,inst_20704));
var state_20707__$1 = state_20707;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20707__$1,inst_20705);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__19415__auto__ = null;
var cljs$core$async$transduce_$_state_machine__19415__auto____0 = (function (){
var statearr_20713 = [null,null,null,null,null,null,null];
(statearr_20713[(0)] = cljs$core$async$transduce_$_state_machine__19415__auto__);

(statearr_20713[(1)] = (1));

return statearr_20713;
});
var cljs$core$async$transduce_$_state_machine__19415__auto____1 = (function (state_20707){
while(true){
var ret_value__19416__auto__ = (function (){try{while(true){
var result__19417__auto__ = switch__19413__auto__(state_20707);
if(cljs.core.keyword_identical_QMARK_(result__19417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19417__auto__;
}
break;
}
}catch (e20719){var ex__19418__auto__ = e20719;
var statearr_20724_23263 = state_20707;
(statearr_20724_23263[(2)] = ex__19418__auto__);


if(cljs.core.seq((state_20707[(4)]))){
var statearr_20725_23264 = state_20707;
(statearr_20725_23264[(1)] = cljs.core.first((state_20707[(4)])));

} else {
throw ex__19418__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23265 = state_20707;
state_20707 = G__23265;
continue;
} else {
return ret_value__19416__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__19415__auto__ = function(state_20707){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__19415__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__19415__auto____1.call(this,state_20707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__19415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__19415__auto____0;
cljs$core$async$transduce_$_state_machine__19415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__19415__auto____1;
return cljs$core$async$transduce_$_state_machine__19415__auto__;
})()
})();
var state__19756__auto__ = (function (){var statearr_20726 = f__19755__auto__();
(statearr_20726[(6)] = c__19754__auto__);

return statearr_20726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19756__auto__);
}));

return c__19754__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__20728 = arguments.length;
switch (G__20728) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19754__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19755__auto__ = (function (){var switch__19413__auto__ = (function (state_20760){
var state_val_20762 = (state_20760[(1)]);
if((state_val_20762 === (7))){
var inst_20740 = (state_20760[(2)]);
var state_20760__$1 = state_20760;
var statearr_20767_23267 = state_20760__$1;
(statearr_20767_23267[(2)] = inst_20740);

(statearr_20767_23267[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20762 === (1))){
var inst_20734 = cljs.core.seq(coll);
var inst_20735 = inst_20734;
var state_20760__$1 = (function (){var statearr_20770 = state_20760;
(statearr_20770[(7)] = inst_20735);

return statearr_20770;
})();
var statearr_20771_23268 = state_20760__$1;
(statearr_20771_23268[(2)] = null);

(statearr_20771_23268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20762 === (4))){
var inst_20735 = (state_20760[(7)]);
var inst_20738 = cljs.core.first(inst_20735);
var state_20760__$1 = state_20760;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20760__$1,(7),ch,inst_20738);
} else {
if((state_val_20762 === (13))){
var inst_20754 = (state_20760[(2)]);
var state_20760__$1 = state_20760;
var statearr_20778_23270 = state_20760__$1;
(statearr_20778_23270[(2)] = inst_20754);

(statearr_20778_23270[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20762 === (6))){
var inst_20743 = (state_20760[(2)]);
var state_20760__$1 = state_20760;
if(cljs.core.truth_(inst_20743)){
var statearr_20780_23271 = state_20760__$1;
(statearr_20780_23271[(1)] = (8));

} else {
var statearr_20783_23272 = state_20760__$1;
(statearr_20783_23272[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20762 === (3))){
var inst_20758 = (state_20760[(2)]);
var state_20760__$1 = state_20760;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20760__$1,inst_20758);
} else {
if((state_val_20762 === (12))){
var state_20760__$1 = state_20760;
var statearr_20788_23273 = state_20760__$1;
(statearr_20788_23273[(2)] = null);

(statearr_20788_23273[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20762 === (2))){
var inst_20735 = (state_20760[(7)]);
var state_20760__$1 = state_20760;
if(cljs.core.truth_(inst_20735)){
var statearr_20790_23274 = state_20760__$1;
(statearr_20790_23274[(1)] = (4));

} else {
var statearr_20795_23275 = state_20760__$1;
(statearr_20795_23275[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20762 === (11))){
var inst_20751 = cljs.core.async.close_BANG_(ch);
var state_20760__$1 = state_20760;
var statearr_20796_23276 = state_20760__$1;
(statearr_20796_23276[(2)] = inst_20751);

(statearr_20796_23276[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20762 === (9))){
var state_20760__$1 = state_20760;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20797_23277 = state_20760__$1;
(statearr_20797_23277[(1)] = (11));

} else {
var statearr_20798_23278 = state_20760__$1;
(statearr_20798_23278[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20762 === (5))){
var inst_20735 = (state_20760[(7)]);
var state_20760__$1 = state_20760;
var statearr_20803_23280 = state_20760__$1;
(statearr_20803_23280[(2)] = inst_20735);

(statearr_20803_23280[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20762 === (10))){
var inst_20756 = (state_20760[(2)]);
var state_20760__$1 = state_20760;
var statearr_20805_23281 = state_20760__$1;
(statearr_20805_23281[(2)] = inst_20756);

(statearr_20805_23281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20762 === (8))){
var inst_20735 = (state_20760[(7)]);
var inst_20747 = cljs.core.next(inst_20735);
var inst_20735__$1 = inst_20747;
var state_20760__$1 = (function (){var statearr_20810 = state_20760;
(statearr_20810[(7)] = inst_20735__$1);

return statearr_20810;
})();
var statearr_20811_23282 = state_20760__$1;
(statearr_20811_23282[(2)] = null);

(statearr_20811_23282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__19415__auto__ = null;
var cljs$core$async$state_machine__19415__auto____0 = (function (){
var statearr_20815 = [null,null,null,null,null,null,null,null];
(statearr_20815[(0)] = cljs$core$async$state_machine__19415__auto__);

(statearr_20815[(1)] = (1));

return statearr_20815;
});
var cljs$core$async$state_machine__19415__auto____1 = (function (state_20760){
while(true){
var ret_value__19416__auto__ = (function (){try{while(true){
var result__19417__auto__ = switch__19413__auto__(state_20760);
if(cljs.core.keyword_identical_QMARK_(result__19417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19417__auto__;
}
break;
}
}catch (e20821){var ex__19418__auto__ = e20821;
var statearr_20822_23283 = state_20760;
(statearr_20822_23283[(2)] = ex__19418__auto__);


if(cljs.core.seq((state_20760[(4)]))){
var statearr_20825_23284 = state_20760;
(statearr_20825_23284[(1)] = cljs.core.first((state_20760[(4)])));

} else {
throw ex__19418__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23285 = state_20760;
state_20760 = G__23285;
continue;
} else {
return ret_value__19416__auto__;
}
break;
}
});
cljs$core$async$state_machine__19415__auto__ = function(state_20760){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19415__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19415__auto____1.call(this,state_20760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19415__auto____0;
cljs$core$async$state_machine__19415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19415__auto____1;
return cljs$core$async$state_machine__19415__auto__;
})()
})();
var state__19756__auto__ = (function (){var statearr_20826 = f__19755__auto__();
(statearr_20826[(6)] = c__19754__auto__);

return statearr_20826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19756__auto__);
}));

return c__19754__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__20830 = arguments.length;
switch (G__20830) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_23287 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_23287(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_23288 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_23288(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_23289 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_23289(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_23291 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_23291(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20838 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20838 = (function (ch,cs,meta20839){
this.ch = ch;
this.cs = cs;
this.meta20839 = meta20839;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20840,meta20839__$1){
var self__ = this;
var _20840__$1 = this;
return (new cljs.core.async.t_cljs$core$async20838(self__.ch,self__.cs,meta20839__$1));
}));

(cljs.core.async.t_cljs$core$async20838.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20840){
var self__ = this;
var _20840__$1 = this;
return self__.meta20839;
}));

(cljs.core.async.t_cljs$core$async20838.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20838.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async20838.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20838.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async20838.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async20838.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async20838.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta20839","meta20839",1609102446,null)], null);
}));

(cljs.core.async.t_cljs$core$async20838.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20838.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20838");

(cljs.core.async.t_cljs$core$async20838.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async20838");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20838.
 */
cljs.core.async.__GT_t_cljs$core$async20838 = (function cljs$core$async$mult_$___GT_t_cljs$core$async20838(ch__$1,cs__$1,meta20839){
return (new cljs.core.async.t_cljs$core$async20838(ch__$1,cs__$1,meta20839));
});

}

return (new cljs.core.async.t_cljs$core$async20838(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__19754__auto___23295 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19755__auto__ = (function (){var switch__19413__auto__ = (function (state_21000){
var state_val_21001 = (state_21000[(1)]);
if((state_val_21001 === (7))){
var inst_20996 = (state_21000[(2)]);
var state_21000__$1 = state_21000;
var statearr_21003_23296 = state_21000__$1;
(statearr_21003_23296[(2)] = inst_20996);

(statearr_21003_23296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (20))){
var inst_20895 = (state_21000[(7)]);
var inst_20908 = cljs.core.first(inst_20895);
var inst_20909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20908,(0),null);
var inst_20910 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20908,(1),null);
var state_21000__$1 = (function (){var statearr_21004 = state_21000;
(statearr_21004[(8)] = inst_20909);

return statearr_21004;
})();
if(cljs.core.truth_(inst_20910)){
var statearr_21005_23297 = state_21000__$1;
(statearr_21005_23297[(1)] = (22));

} else {
var statearr_21006_23298 = state_21000__$1;
(statearr_21006_23298[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (27))){
var inst_20862 = (state_21000[(9)]);
var inst_20941 = (state_21000[(10)]);
var inst_20947 = (state_21000[(11)]);
var inst_20939 = (state_21000[(12)]);
var inst_20947__$1 = cljs.core._nth(inst_20939,inst_20941);
var inst_20948 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_20947__$1,inst_20862,done);
var state_21000__$1 = (function (){var statearr_21007 = state_21000;
(statearr_21007[(11)] = inst_20947__$1);

return statearr_21007;
})();
if(cljs.core.truth_(inst_20948)){
var statearr_21008_23299 = state_21000__$1;
(statearr_21008_23299[(1)] = (30));

} else {
var statearr_21009_23300 = state_21000__$1;
(statearr_21009_23300[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (1))){
var state_21000__$1 = state_21000;
var statearr_21010_23302 = state_21000__$1;
(statearr_21010_23302[(2)] = null);

(statearr_21010_23302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (24))){
var inst_20895 = (state_21000[(7)]);
var inst_20916 = (state_21000[(2)]);
var inst_20917 = cljs.core.next(inst_20895);
var inst_20872 = inst_20917;
var inst_20873 = null;
var inst_20874 = (0);
var inst_20875 = (0);
var state_21000__$1 = (function (){var statearr_21019 = state_21000;
(statearr_21019[(13)] = inst_20875);

(statearr_21019[(14)] = inst_20874);

(statearr_21019[(15)] = inst_20916);

(statearr_21019[(16)] = inst_20872);

(statearr_21019[(17)] = inst_20873);

return statearr_21019;
})();
var statearr_21024_23304 = state_21000__$1;
(statearr_21024_23304[(2)] = null);

(statearr_21024_23304[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (39))){
var state_21000__$1 = state_21000;
var statearr_21029_23305 = state_21000__$1;
(statearr_21029_23305[(2)] = null);

(statearr_21029_23305[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (4))){
var inst_20862 = (state_21000[(9)]);
var inst_20862__$1 = (state_21000[(2)]);
var inst_20863 = (inst_20862__$1 == null);
var state_21000__$1 = (function (){var statearr_21030 = state_21000;
(statearr_21030[(9)] = inst_20862__$1);

return statearr_21030;
})();
if(cljs.core.truth_(inst_20863)){
var statearr_21034_23306 = state_21000__$1;
(statearr_21034_23306[(1)] = (5));

} else {
var statearr_21035_23307 = state_21000__$1;
(statearr_21035_23307[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (15))){
var inst_20875 = (state_21000[(13)]);
var inst_20874 = (state_21000[(14)]);
var inst_20872 = (state_21000[(16)]);
var inst_20873 = (state_21000[(17)]);
var inst_20890 = (state_21000[(2)]);
var inst_20891 = (inst_20875 + (1));
var tmp21026 = inst_20874;
var tmp21027 = inst_20872;
var tmp21028 = inst_20873;
var inst_20872__$1 = tmp21027;
var inst_20873__$1 = tmp21028;
var inst_20874__$1 = tmp21026;
var inst_20875__$1 = inst_20891;
var state_21000__$1 = (function (){var statearr_21036 = state_21000;
(statearr_21036[(13)] = inst_20875__$1);

(statearr_21036[(14)] = inst_20874__$1);

(statearr_21036[(18)] = inst_20890);

(statearr_21036[(16)] = inst_20872__$1);

(statearr_21036[(17)] = inst_20873__$1);

return statearr_21036;
})();
var statearr_21037_23308 = state_21000__$1;
(statearr_21037_23308[(2)] = null);

(statearr_21037_23308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (21))){
var inst_20920 = (state_21000[(2)]);
var state_21000__$1 = state_21000;
var statearr_21041_23309 = state_21000__$1;
(statearr_21041_23309[(2)] = inst_20920);

(statearr_21041_23309[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (31))){
var inst_20947 = (state_21000[(11)]);
var inst_20951 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_20947);
var state_21000__$1 = state_21000;
var statearr_21042_23310 = state_21000__$1;
(statearr_21042_23310[(2)] = inst_20951);

(statearr_21042_23310[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (32))){
var inst_20941 = (state_21000[(10)]);
var inst_20940 = (state_21000[(19)]);
var inst_20939 = (state_21000[(12)]);
var inst_20938 = (state_21000[(20)]);
var inst_20953 = (state_21000[(2)]);
var inst_20955 = (inst_20941 + (1));
var tmp21038 = inst_20940;
var tmp21039 = inst_20939;
var tmp21040 = inst_20938;
var inst_20938__$1 = tmp21040;
var inst_20939__$1 = tmp21039;
var inst_20940__$1 = tmp21038;
var inst_20941__$1 = inst_20955;
var state_21000__$1 = (function (){var statearr_21052 = state_21000;
(statearr_21052[(10)] = inst_20941__$1);

(statearr_21052[(19)] = inst_20940__$1);

(statearr_21052[(12)] = inst_20939__$1);

(statearr_21052[(20)] = inst_20938__$1);

(statearr_21052[(21)] = inst_20953);

return statearr_21052;
})();
var statearr_21053_23313 = state_21000__$1;
(statearr_21053_23313[(2)] = null);

(statearr_21053_23313[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (40))){
var inst_20967 = (state_21000[(22)]);
var inst_20971 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_20967);
var state_21000__$1 = state_21000;
var statearr_21057_23314 = state_21000__$1;
(statearr_21057_23314[(2)] = inst_20971);

(statearr_21057_23314[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (33))){
var inst_20958 = (state_21000[(23)]);
var inst_20960 = cljs.core.chunked_seq_QMARK_(inst_20958);
var state_21000__$1 = state_21000;
if(inst_20960){
var statearr_21059_23315 = state_21000__$1;
(statearr_21059_23315[(1)] = (36));

} else {
var statearr_21060_23316 = state_21000__$1;
(statearr_21060_23316[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (13))){
var inst_20884 = (state_21000[(24)]);
var inst_20887 = cljs.core.async.close_BANG_(inst_20884);
var state_21000__$1 = state_21000;
var statearr_21061_23318 = state_21000__$1;
(statearr_21061_23318[(2)] = inst_20887);

(statearr_21061_23318[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (22))){
var inst_20909 = (state_21000[(8)]);
var inst_20913 = cljs.core.async.close_BANG_(inst_20909);
var state_21000__$1 = state_21000;
var statearr_21066_23319 = state_21000__$1;
(statearr_21066_23319[(2)] = inst_20913);

(statearr_21066_23319[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (36))){
var inst_20958 = (state_21000[(23)]);
var inst_20962 = cljs.core.chunk_first(inst_20958);
var inst_20963 = cljs.core.chunk_rest(inst_20958);
var inst_20964 = cljs.core.count(inst_20962);
var inst_20938 = inst_20963;
var inst_20939 = inst_20962;
var inst_20940 = inst_20964;
var inst_20941 = (0);
var state_21000__$1 = (function (){var statearr_21072 = state_21000;
(statearr_21072[(10)] = inst_20941);

(statearr_21072[(19)] = inst_20940);

(statearr_21072[(12)] = inst_20939);

(statearr_21072[(20)] = inst_20938);

return statearr_21072;
})();
var statearr_21073_23320 = state_21000__$1;
(statearr_21073_23320[(2)] = null);

(statearr_21073_23320[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (41))){
var inst_20958 = (state_21000[(23)]);
var inst_20973 = (state_21000[(2)]);
var inst_20974 = cljs.core.next(inst_20958);
var inst_20938 = inst_20974;
var inst_20939 = null;
var inst_20940 = (0);
var inst_20941 = (0);
var state_21000__$1 = (function (){var statearr_21077 = state_21000;
(statearr_21077[(10)] = inst_20941);

(statearr_21077[(19)] = inst_20940);

(statearr_21077[(25)] = inst_20973);

(statearr_21077[(12)] = inst_20939);

(statearr_21077[(20)] = inst_20938);

return statearr_21077;
})();
var statearr_21078_23324 = state_21000__$1;
(statearr_21078_23324[(2)] = null);

(statearr_21078_23324[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (43))){
var state_21000__$1 = state_21000;
var statearr_21081_23325 = state_21000__$1;
(statearr_21081_23325[(2)] = null);

(statearr_21081_23325[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (29))){
var inst_20983 = (state_21000[(2)]);
var state_21000__$1 = state_21000;
var statearr_21085_23326 = state_21000__$1;
(statearr_21085_23326[(2)] = inst_20983);

(statearr_21085_23326[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (44))){
var inst_20993 = (state_21000[(2)]);
var state_21000__$1 = (function (){var statearr_21086 = state_21000;
(statearr_21086[(26)] = inst_20993);

return statearr_21086;
})();
var statearr_21088_23327 = state_21000__$1;
(statearr_21088_23327[(2)] = null);

(statearr_21088_23327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (6))){
var inst_20930 = (state_21000[(27)]);
var inst_20929 = cljs.core.deref(cs);
var inst_20930__$1 = cljs.core.keys(inst_20929);
var inst_20931 = cljs.core.count(inst_20930__$1);
var inst_20932 = cljs.core.reset_BANG_(dctr,inst_20931);
var inst_20937 = cljs.core.seq(inst_20930__$1);
var inst_20938 = inst_20937;
var inst_20939 = null;
var inst_20940 = (0);
var inst_20941 = (0);
var state_21000__$1 = (function (){var statearr_21093 = state_21000;
(statearr_21093[(27)] = inst_20930__$1);

(statearr_21093[(10)] = inst_20941);

(statearr_21093[(19)] = inst_20940);

(statearr_21093[(12)] = inst_20939);

(statearr_21093[(28)] = inst_20932);

(statearr_21093[(20)] = inst_20938);

return statearr_21093;
})();
var statearr_21096_23328 = state_21000__$1;
(statearr_21096_23328[(2)] = null);

(statearr_21096_23328[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (28))){
var inst_20958 = (state_21000[(23)]);
var inst_20938 = (state_21000[(20)]);
var inst_20958__$1 = cljs.core.seq(inst_20938);
var state_21000__$1 = (function (){var statearr_21100 = state_21000;
(statearr_21100[(23)] = inst_20958__$1);

return statearr_21100;
})();
if(inst_20958__$1){
var statearr_21103_23329 = state_21000__$1;
(statearr_21103_23329[(1)] = (33));

} else {
var statearr_21104_23332 = state_21000__$1;
(statearr_21104_23332[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (25))){
var inst_20941 = (state_21000[(10)]);
var inst_20940 = (state_21000[(19)]);
var inst_20943 = (inst_20941 < inst_20940);
var inst_20944 = inst_20943;
var state_21000__$1 = state_21000;
if(cljs.core.truth_(inst_20944)){
var statearr_21112_23333 = state_21000__$1;
(statearr_21112_23333[(1)] = (27));

} else {
var statearr_21113_23334 = state_21000__$1;
(statearr_21113_23334[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (34))){
var state_21000__$1 = state_21000;
var statearr_21116_23335 = state_21000__$1;
(statearr_21116_23335[(2)] = null);

(statearr_21116_23335[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (17))){
var state_21000__$1 = state_21000;
var statearr_21117_23336 = state_21000__$1;
(statearr_21117_23336[(2)] = null);

(statearr_21117_23336[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (3))){
var inst_20998 = (state_21000[(2)]);
var state_21000__$1 = state_21000;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21000__$1,inst_20998);
} else {
if((state_val_21001 === (12))){
var inst_20925 = (state_21000[(2)]);
var state_21000__$1 = state_21000;
var statearr_21121_23337 = state_21000__$1;
(statearr_21121_23337[(2)] = inst_20925);

(statearr_21121_23337[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (2))){
var state_21000__$1 = state_21000;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21000__$1,(4),ch);
} else {
if((state_val_21001 === (23))){
var state_21000__$1 = state_21000;
var statearr_21123_23338 = state_21000__$1;
(statearr_21123_23338[(2)] = null);

(statearr_21123_23338[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (35))){
var inst_20981 = (state_21000[(2)]);
var state_21000__$1 = state_21000;
var statearr_21124_23339 = state_21000__$1;
(statearr_21124_23339[(2)] = inst_20981);

(statearr_21124_23339[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (19))){
var inst_20895 = (state_21000[(7)]);
var inst_20899 = cljs.core.chunk_first(inst_20895);
var inst_20900 = cljs.core.chunk_rest(inst_20895);
var inst_20901 = cljs.core.count(inst_20899);
var inst_20872 = inst_20900;
var inst_20873 = inst_20899;
var inst_20874 = inst_20901;
var inst_20875 = (0);
var state_21000__$1 = (function (){var statearr_21126 = state_21000;
(statearr_21126[(13)] = inst_20875);

(statearr_21126[(14)] = inst_20874);

(statearr_21126[(16)] = inst_20872);

(statearr_21126[(17)] = inst_20873);

return statearr_21126;
})();
var statearr_21130_23340 = state_21000__$1;
(statearr_21130_23340[(2)] = null);

(statearr_21130_23340[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (11))){
var inst_20895 = (state_21000[(7)]);
var inst_20872 = (state_21000[(16)]);
var inst_20895__$1 = cljs.core.seq(inst_20872);
var state_21000__$1 = (function (){var statearr_21133 = state_21000;
(statearr_21133[(7)] = inst_20895__$1);

return statearr_21133;
})();
if(inst_20895__$1){
var statearr_21134_23341 = state_21000__$1;
(statearr_21134_23341[(1)] = (16));

} else {
var statearr_21135_23342 = state_21000__$1;
(statearr_21135_23342[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (9))){
var inst_20927 = (state_21000[(2)]);
var state_21000__$1 = state_21000;
var statearr_21138_23343 = state_21000__$1;
(statearr_21138_23343[(2)] = inst_20927);

(statearr_21138_23343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (5))){
var inst_20870 = cljs.core.deref(cs);
var inst_20871 = cljs.core.seq(inst_20870);
var inst_20872 = inst_20871;
var inst_20873 = null;
var inst_20874 = (0);
var inst_20875 = (0);
var state_21000__$1 = (function (){var statearr_21139 = state_21000;
(statearr_21139[(13)] = inst_20875);

(statearr_21139[(14)] = inst_20874);

(statearr_21139[(16)] = inst_20872);

(statearr_21139[(17)] = inst_20873);

return statearr_21139;
})();
var statearr_21141_23344 = state_21000__$1;
(statearr_21141_23344[(2)] = null);

(statearr_21141_23344[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (14))){
var state_21000__$1 = state_21000;
var statearr_21143_23345 = state_21000__$1;
(statearr_21143_23345[(2)] = null);

(statearr_21143_23345[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (45))){
var inst_20990 = (state_21000[(2)]);
var state_21000__$1 = state_21000;
var statearr_21145_23346 = state_21000__$1;
(statearr_21145_23346[(2)] = inst_20990);

(statearr_21145_23346[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (26))){
var inst_20930 = (state_21000[(27)]);
var inst_20985 = (state_21000[(2)]);
var inst_20987 = cljs.core.seq(inst_20930);
var state_21000__$1 = (function (){var statearr_21147 = state_21000;
(statearr_21147[(29)] = inst_20985);

return statearr_21147;
})();
if(inst_20987){
var statearr_21149_23347 = state_21000__$1;
(statearr_21149_23347[(1)] = (42));

} else {
var statearr_21150_23348 = state_21000__$1;
(statearr_21150_23348[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (16))){
var inst_20895 = (state_21000[(7)]);
var inst_20897 = cljs.core.chunked_seq_QMARK_(inst_20895);
var state_21000__$1 = state_21000;
if(inst_20897){
var statearr_21151_23349 = state_21000__$1;
(statearr_21151_23349[(1)] = (19));

} else {
var statearr_21153_23350 = state_21000__$1;
(statearr_21153_23350[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (38))){
var inst_20978 = (state_21000[(2)]);
var state_21000__$1 = state_21000;
var statearr_21154_23351 = state_21000__$1;
(statearr_21154_23351[(2)] = inst_20978);

(statearr_21154_23351[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (30))){
var state_21000__$1 = state_21000;
var statearr_21155_23352 = state_21000__$1;
(statearr_21155_23352[(2)] = null);

(statearr_21155_23352[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (10))){
var inst_20875 = (state_21000[(13)]);
var inst_20873 = (state_21000[(17)]);
var inst_20883 = cljs.core._nth(inst_20873,inst_20875);
var inst_20884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20883,(0),null);
var inst_20885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20883,(1),null);
var state_21000__$1 = (function (){var statearr_21163 = state_21000;
(statearr_21163[(24)] = inst_20884);

return statearr_21163;
})();
if(cljs.core.truth_(inst_20885)){
var statearr_21166_23355 = state_21000__$1;
(statearr_21166_23355[(1)] = (13));

} else {
var statearr_21167_23356 = state_21000__$1;
(statearr_21167_23356[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (18))){
var inst_20923 = (state_21000[(2)]);
var state_21000__$1 = state_21000;
var statearr_21168_23357 = state_21000__$1;
(statearr_21168_23357[(2)] = inst_20923);

(statearr_21168_23357[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (42))){
var state_21000__$1 = state_21000;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21000__$1,(45),dchan);
} else {
if((state_val_21001 === (37))){
var inst_20862 = (state_21000[(9)]);
var inst_20958 = (state_21000[(23)]);
var inst_20967 = (state_21000[(22)]);
var inst_20967__$1 = cljs.core.first(inst_20958);
var inst_20968 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_20967__$1,inst_20862,done);
var state_21000__$1 = (function (){var statearr_21175 = state_21000;
(statearr_21175[(22)] = inst_20967__$1);

return statearr_21175;
})();
if(cljs.core.truth_(inst_20968)){
var statearr_21178_23358 = state_21000__$1;
(statearr_21178_23358[(1)] = (39));

} else {
var statearr_21179_23359 = state_21000__$1;
(statearr_21179_23359[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (8))){
var inst_20875 = (state_21000[(13)]);
var inst_20874 = (state_21000[(14)]);
var inst_20877 = (inst_20875 < inst_20874);
var inst_20878 = inst_20877;
var state_21000__$1 = state_21000;
if(cljs.core.truth_(inst_20878)){
var statearr_21180_23361 = state_21000__$1;
(statearr_21180_23361[(1)] = (10));

} else {
var statearr_21181_23362 = state_21000__$1;
(statearr_21181_23362[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__19415__auto__ = null;
var cljs$core$async$mult_$_state_machine__19415__auto____0 = (function (){
var statearr_21182 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21182[(0)] = cljs$core$async$mult_$_state_machine__19415__auto__);

(statearr_21182[(1)] = (1));

return statearr_21182;
});
var cljs$core$async$mult_$_state_machine__19415__auto____1 = (function (state_21000){
while(true){
var ret_value__19416__auto__ = (function (){try{while(true){
var result__19417__auto__ = switch__19413__auto__(state_21000);
if(cljs.core.keyword_identical_QMARK_(result__19417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19417__auto__;
}
break;
}
}catch (e21183){var ex__19418__auto__ = e21183;
var statearr_21188_23364 = state_21000;
(statearr_21188_23364[(2)] = ex__19418__auto__);


if(cljs.core.seq((state_21000[(4)]))){
var statearr_21193_23365 = state_21000;
(statearr_21193_23365[(1)] = cljs.core.first((state_21000[(4)])));

} else {
throw ex__19418__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23366 = state_21000;
state_21000 = G__23366;
continue;
} else {
return ret_value__19416__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19415__auto__ = function(state_21000){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19415__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19415__auto____1.call(this,state_21000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19415__auto____0;
cljs$core$async$mult_$_state_machine__19415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19415__auto____1;
return cljs$core$async$mult_$_state_machine__19415__auto__;
})()
})();
var state__19756__auto__ = (function (){var statearr_21199 = f__19755__auto__();
(statearr_21199[(6)] = c__19754__auto___23295);

return statearr_21199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19756__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__21203 = arguments.length;
switch (G__21203) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_23370 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_23370(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_23371 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_23371(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_23372 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_23372(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_23373 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_23373(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_23375 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_23375(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___23382 = arguments.length;
var i__4865__auto___23383 = (0);
while(true){
if((i__4865__auto___23383 < len__4864__auto___23382)){
args__4870__auto__.push((arguments[i__4865__auto___23383]));

var G__23384 = (i__4865__auto___23383 + (1));
i__4865__auto___23383 = G__23384;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__21249){
var map__21250 = p__21249;
var map__21250__$1 = cljs.core.__destructure_map(map__21250);
var opts = map__21250__$1;
var statearr_21251_23385 = state;
(statearr_21251_23385[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_21252_23386 = state;
(statearr_21252_23386[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_21254_23387 = state;
(statearr_21254_23387[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21245){
var G__21246 = cljs.core.first(seq21245);
var seq21245__$1 = cljs.core.next(seq21245);
var G__21247 = cljs.core.first(seq21245__$1);
var seq21245__$2 = cljs.core.next(seq21245__$1);
var G__21248 = cljs.core.first(seq21245__$2);
var seq21245__$3 = cljs.core.next(seq21245__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21246,G__21247,G__21248,seq21245__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21273 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21273 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21274){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta21274 = meta21274;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21275,meta21274__$1){
var self__ = this;
var _21275__$1 = this;
return (new cljs.core.async.t_cljs$core$async21273(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21274__$1));
}));

(cljs.core.async.t_cljs$core$async21273.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21275){
var self__ = this;
var _21275__$1 = this;
return self__.meta21274;
}));

(cljs.core.async.t_cljs$core$async21273.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21273.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async21273.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21273.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async21273.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async21273.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async21273.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async21273.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async21273.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta21274","meta21274",1171999088,null)], null);
}));

(cljs.core.async.t_cljs$core$async21273.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21273.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21273");

(cljs.core.async.t_cljs$core$async21273.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async21273");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21273.
 */
cljs.core.async.__GT_t_cljs$core$async21273 = (function cljs$core$async$mix_$___GT_t_cljs$core$async21273(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21274){
return (new cljs.core.async.t_cljs$core$async21273(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21274));
});

}

return (new cljs.core.async.t_cljs$core$async21273(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19754__auto___23410 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19755__auto__ = (function (){var switch__19413__auto__ = (function (state_21367){
var state_val_21368 = (state_21367[(1)]);
if((state_val_21368 === (7))){
var inst_21311 = (state_21367[(2)]);
var state_21367__$1 = state_21367;
if(cljs.core.truth_(inst_21311)){
var statearr_21394_23412 = state_21367__$1;
(statearr_21394_23412[(1)] = (8));

} else {
var statearr_21395_23413 = state_21367__$1;
(statearr_21395_23413[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21368 === (20))){
var inst_21304 = (state_21367[(7)]);
var state_21367__$1 = state_21367;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21367__$1,(23),out,inst_21304);
} else {
if((state_val_21368 === (1))){
var inst_21287 = calc_state();
var inst_21288 = cljs.core.__destructure_map(inst_21287);
var inst_21289 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21288,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21290 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21288,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21291 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21288,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21292 = inst_21287;
var state_21367__$1 = (function (){var statearr_21399 = state_21367;
(statearr_21399[(8)] = inst_21289);

(statearr_21399[(9)] = inst_21290);

(statearr_21399[(10)] = inst_21291);

(statearr_21399[(11)] = inst_21292);

return statearr_21399;
})();
var statearr_21401_23414 = state_21367__$1;
(statearr_21401_23414[(2)] = null);

(statearr_21401_23414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21368 === (24))){
var inst_21295 = (state_21367[(12)]);
var inst_21292 = inst_21295;
var state_21367__$1 = (function (){var statearr_21402 = state_21367;
(statearr_21402[(11)] = inst_21292);

return statearr_21402;
})();
var statearr_21403_23415 = state_21367__$1;
(statearr_21403_23415[(2)] = null);

(statearr_21403_23415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21368 === (4))){
var inst_21304 = (state_21367[(7)]);
var inst_21306 = (state_21367[(13)]);
var inst_21303 = (state_21367[(2)]);
var inst_21304__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21303,(0),null);
var inst_21305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21303,(1),null);
var inst_21306__$1 = (inst_21304__$1 == null);
var state_21367__$1 = (function (){var statearr_21406 = state_21367;
(statearr_21406[(14)] = inst_21305);

(statearr_21406[(7)] = inst_21304__$1);

(statearr_21406[(13)] = inst_21306__$1);

return statearr_21406;
})();
if(cljs.core.truth_(inst_21306__$1)){
var statearr_21408_23416 = state_21367__$1;
(statearr_21408_23416[(1)] = (5));

} else {
var statearr_21409_23417 = state_21367__$1;
(statearr_21409_23417[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21368 === (15))){
var inst_21327 = (state_21367[(15)]);
var inst_21296 = (state_21367[(16)]);
var inst_21327__$1 = cljs.core.empty_QMARK_(inst_21296);
var state_21367__$1 = (function (){var statearr_21419 = state_21367;
(statearr_21419[(15)] = inst_21327__$1);

return statearr_21419;
})();
if(inst_21327__$1){
var statearr_21420_23418 = state_21367__$1;
(statearr_21420_23418[(1)] = (17));

} else {
var statearr_21421_23419 = state_21367__$1;
(statearr_21421_23419[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21368 === (21))){
var inst_21295 = (state_21367[(12)]);
var inst_21292 = inst_21295;
var state_21367__$1 = (function (){var statearr_21422 = state_21367;
(statearr_21422[(11)] = inst_21292);

return statearr_21422;
})();
var statearr_21423_23424 = state_21367__$1;
(statearr_21423_23424[(2)] = null);

(statearr_21423_23424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21368 === (13))){
var inst_21318 = (state_21367[(2)]);
var inst_21319 = calc_state();
var inst_21292 = inst_21319;
var state_21367__$1 = (function (){var statearr_21424 = state_21367;
(statearr_21424[(17)] = inst_21318);

(statearr_21424[(11)] = inst_21292);

return statearr_21424;
})();
var statearr_21425_23428 = state_21367__$1;
(statearr_21425_23428[(2)] = null);

(statearr_21425_23428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21368 === (22))){
var inst_21354 = (state_21367[(2)]);
var state_21367__$1 = state_21367;
var statearr_21426_23429 = state_21367__$1;
(statearr_21426_23429[(2)] = inst_21354);

(statearr_21426_23429[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21368 === (6))){
var inst_21305 = (state_21367[(14)]);
var inst_21309 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_21305,change);
var state_21367__$1 = state_21367;
var statearr_21427_23430 = state_21367__$1;
(statearr_21427_23430[(2)] = inst_21309);

(statearr_21427_23430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21368 === (25))){
var state_21367__$1 = state_21367;
var statearr_21428_23431 = state_21367__$1;
(statearr_21428_23431[(2)] = null);

(statearr_21428_23431[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21368 === (17))){
var inst_21305 = (state_21367[(14)]);
var inst_21297 = (state_21367[(18)]);
var inst_21330 = (inst_21297.cljs$core$IFn$_invoke$arity$1 ? inst_21297.cljs$core$IFn$_invoke$arity$1(inst_21305) : inst_21297.call(null,inst_21305));
var inst_21331 = cljs.core.not(inst_21330);
var state_21367__$1 = state_21367;
var statearr_21430_23432 = state_21367__$1;
(statearr_21430_23432[(2)] = inst_21331);

(statearr_21430_23432[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21368 === (3))){
var inst_21358 = (state_21367[(2)]);
var state_21367__$1 = state_21367;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21367__$1,inst_21358);
} else {
if((state_val_21368 === (12))){
var state_21367__$1 = state_21367;
var statearr_21431_23436 = state_21367__$1;
(statearr_21431_23436[(2)] = null);

(statearr_21431_23436[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21368 === (2))){
var inst_21295 = (state_21367[(12)]);
var inst_21292 = (state_21367[(11)]);
var inst_21295__$1 = cljs.core.__destructure_map(inst_21292);
var inst_21296 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21295__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21297 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21295__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21298 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21295__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_21367__$1 = (function (){var statearr_21436 = state_21367;
(statearr_21436[(18)] = inst_21297);

(statearr_21436[(12)] = inst_21295__$1);

(statearr_21436[(16)] = inst_21296);

return statearr_21436;
})();
return cljs.core.async.ioc_alts_BANG_(state_21367__$1,(4),inst_21298);
} else {
if((state_val_21368 === (23))){
var inst_21341 = (state_21367[(2)]);
var state_21367__$1 = state_21367;
if(cljs.core.truth_(inst_21341)){
var statearr_21446_23440 = state_21367__$1;
(statearr_21446_23440[(1)] = (24));

} else {
var statearr_21447_23441 = state_21367__$1;
(statearr_21447_23441[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21368 === (19))){
var inst_21334 = (state_21367[(2)]);
var state_21367__$1 = state_21367;
var statearr_21462_23442 = state_21367__$1;
(statearr_21462_23442[(2)] = inst_21334);

(statearr_21462_23442[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21368 === (11))){
var inst_21305 = (state_21367[(14)]);
var inst_21315 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_21305);
var state_21367__$1 = state_21367;
var statearr_21468_23446 = state_21367__$1;
(statearr_21468_23446[(2)] = inst_21315);

(statearr_21468_23446[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21368 === (9))){
var inst_21305 = (state_21367[(14)]);
var inst_21324 = (state_21367[(19)]);
var inst_21296 = (state_21367[(16)]);
var inst_21324__$1 = (inst_21296.cljs$core$IFn$_invoke$arity$1 ? inst_21296.cljs$core$IFn$_invoke$arity$1(inst_21305) : inst_21296.call(null,inst_21305));
var state_21367__$1 = (function (){var statearr_21470 = state_21367;
(statearr_21470[(19)] = inst_21324__$1);

return statearr_21470;
})();
if(cljs.core.truth_(inst_21324__$1)){
var statearr_21473_23451 = state_21367__$1;
(statearr_21473_23451[(1)] = (14));

} else {
var statearr_21475_23452 = state_21367__$1;
(statearr_21475_23452[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21368 === (5))){
var inst_21306 = (state_21367[(13)]);
var state_21367__$1 = state_21367;
var statearr_21476_23453 = state_21367__$1;
(statearr_21476_23453[(2)] = inst_21306);

(statearr_21476_23453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21368 === (14))){
var inst_21324 = (state_21367[(19)]);
var state_21367__$1 = state_21367;
var statearr_21477_23454 = state_21367__$1;
(statearr_21477_23454[(2)] = inst_21324);

(statearr_21477_23454[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21368 === (26))){
var inst_21346 = (state_21367[(2)]);
var state_21367__$1 = state_21367;
var statearr_21478_23455 = state_21367__$1;
(statearr_21478_23455[(2)] = inst_21346);

(statearr_21478_23455[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21368 === (16))){
var inst_21338 = (state_21367[(2)]);
var state_21367__$1 = state_21367;
if(cljs.core.truth_(inst_21338)){
var statearr_21479_23459 = state_21367__$1;
(statearr_21479_23459[(1)] = (20));

} else {
var statearr_21480_23460 = state_21367__$1;
(statearr_21480_23460[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21368 === (10))){
var inst_21356 = (state_21367[(2)]);
var state_21367__$1 = state_21367;
var statearr_21482_23466 = state_21367__$1;
(statearr_21482_23466[(2)] = inst_21356);

(statearr_21482_23466[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21368 === (18))){
var inst_21327 = (state_21367[(15)]);
var state_21367__$1 = state_21367;
var statearr_21484_23470 = state_21367__$1;
(statearr_21484_23470[(2)] = inst_21327);

(statearr_21484_23470[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21368 === (8))){
var inst_21304 = (state_21367[(7)]);
var inst_21313 = (inst_21304 == null);
var state_21367__$1 = state_21367;
if(cljs.core.truth_(inst_21313)){
var statearr_21485_23471 = state_21367__$1;
(statearr_21485_23471[(1)] = (11));

} else {
var statearr_21486_23472 = state_21367__$1;
(statearr_21486_23472[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__19415__auto__ = null;
var cljs$core$async$mix_$_state_machine__19415__auto____0 = (function (){
var statearr_21488 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21488[(0)] = cljs$core$async$mix_$_state_machine__19415__auto__);

(statearr_21488[(1)] = (1));

return statearr_21488;
});
var cljs$core$async$mix_$_state_machine__19415__auto____1 = (function (state_21367){
while(true){
var ret_value__19416__auto__ = (function (){try{while(true){
var result__19417__auto__ = switch__19413__auto__(state_21367);
if(cljs.core.keyword_identical_QMARK_(result__19417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19417__auto__;
}
break;
}
}catch (e21489){var ex__19418__auto__ = e21489;
var statearr_21490_23473 = state_21367;
(statearr_21490_23473[(2)] = ex__19418__auto__);


if(cljs.core.seq((state_21367[(4)]))){
var statearr_21491_23478 = state_21367;
(statearr_21491_23478[(1)] = cljs.core.first((state_21367[(4)])));

} else {
throw ex__19418__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23479 = state_21367;
state_21367 = G__23479;
continue;
} else {
return ret_value__19416__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19415__auto__ = function(state_21367){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19415__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19415__auto____1.call(this,state_21367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19415__auto____0;
cljs$core$async$mix_$_state_machine__19415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19415__auto____1;
return cljs$core$async$mix_$_state_machine__19415__auto__;
})()
})();
var state__19756__auto__ = (function (){var statearr_21492 = f__19755__auto__();
(statearr_21492[(6)] = c__19754__auto___23410);

return statearr_21492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19756__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_23483 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_23483(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_23494 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_23494(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_23496 = (function() {
var G__23497 = null;
var G__23497__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__23497__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__23497 = function(p,v){
switch(arguments.length){
case 1:
return G__23497__1.call(this,p);
case 2:
return G__23497__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23497.cljs$core$IFn$_invoke$arity$1 = G__23497__1;
G__23497.cljs$core$IFn$_invoke$arity$2 = G__23497__2;
return G__23497;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__21525 = arguments.length;
switch (G__21525) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_23496(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_23496(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__21534 = arguments.length;
switch (G__21534) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__21531_SHARP_){
if(cljs.core.truth_((p1__21531_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__21531_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__21531_SHARP_.call(null,topic)))){
return p1__21531_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__21531_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21538 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21538 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta21539){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta21539 = meta21539;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21540,meta21539__$1){
var self__ = this;
var _21540__$1 = this;
return (new cljs.core.async.t_cljs$core$async21538(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta21539__$1));
}));

(cljs.core.async.t_cljs$core$async21538.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21540){
var self__ = this;
var _21540__$1 = this;
return self__.meta21539;
}));

(cljs.core.async.t_cljs$core$async21538.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21538.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async21538.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21538.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async21538.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async21538.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async21538.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async21538.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta21539","meta21539",1937588285,null)], null);
}));

(cljs.core.async.t_cljs$core$async21538.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21538.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21538");

(cljs.core.async.t_cljs$core$async21538.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async21538");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21538.
 */
cljs.core.async.__GT_t_cljs$core$async21538 = (function cljs$core$async$__GT_t_cljs$core$async21538(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21539){
return (new cljs.core.async.t_cljs$core$async21538(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21539));
});

}

return (new cljs.core.async.t_cljs$core$async21538(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19754__auto___23513 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19755__auto__ = (function (){var switch__19413__auto__ = (function (state_21649){
var state_val_21650 = (state_21649[(1)]);
if((state_val_21650 === (7))){
var inst_21645 = (state_21649[(2)]);
var state_21649__$1 = state_21649;
var statearr_21653_23514 = state_21649__$1;
(statearr_21653_23514[(2)] = inst_21645);

(statearr_21653_23514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (20))){
var state_21649__$1 = state_21649;
var statearr_21655_23516 = state_21649__$1;
(statearr_21655_23516[(2)] = null);

(statearr_21655_23516[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (1))){
var state_21649__$1 = state_21649;
var statearr_21661_23517 = state_21649__$1;
(statearr_21661_23517[(2)] = null);

(statearr_21661_23517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (24))){
var inst_21628 = (state_21649[(7)]);
var inst_21637 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_21628);
var state_21649__$1 = state_21649;
var statearr_21663_23518 = state_21649__$1;
(statearr_21663_23518[(2)] = inst_21637);

(statearr_21663_23518[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (4))){
var inst_21560 = (state_21649[(8)]);
var inst_21560__$1 = (state_21649[(2)]);
var inst_21561 = (inst_21560__$1 == null);
var state_21649__$1 = (function (){var statearr_21667 = state_21649;
(statearr_21667[(8)] = inst_21560__$1);

return statearr_21667;
})();
if(cljs.core.truth_(inst_21561)){
var statearr_21669_23519 = state_21649__$1;
(statearr_21669_23519[(1)] = (5));

} else {
var statearr_21670_23520 = state_21649__$1;
(statearr_21670_23520[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (15))){
var inst_21620 = (state_21649[(2)]);
var state_21649__$1 = state_21649;
var statearr_21671_23521 = state_21649__$1;
(statearr_21671_23521[(2)] = inst_21620);

(statearr_21671_23521[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (21))){
var inst_21642 = (state_21649[(2)]);
var state_21649__$1 = (function (){var statearr_21674 = state_21649;
(statearr_21674[(9)] = inst_21642);

return statearr_21674;
})();
var statearr_21676_23526 = state_21649__$1;
(statearr_21676_23526[(2)] = null);

(statearr_21676_23526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (13))){
var inst_21600 = (state_21649[(10)]);
var inst_21602 = cljs.core.chunked_seq_QMARK_(inst_21600);
var state_21649__$1 = state_21649;
if(inst_21602){
var statearr_21681_23530 = state_21649__$1;
(statearr_21681_23530[(1)] = (16));

} else {
var statearr_21683_23531 = state_21649__$1;
(statearr_21683_23531[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (22))){
var inst_21634 = (state_21649[(2)]);
var state_21649__$1 = state_21649;
if(cljs.core.truth_(inst_21634)){
var statearr_21707_23533 = state_21649__$1;
(statearr_21707_23533[(1)] = (23));

} else {
var statearr_21709_23534 = state_21649__$1;
(statearr_21709_23534[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (6))){
var inst_21560 = (state_21649[(8)]);
var inst_21630 = (state_21649[(11)]);
var inst_21628 = (state_21649[(7)]);
var inst_21628__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_21560) : topic_fn.call(null,inst_21560));
var inst_21629 = cljs.core.deref(mults);
var inst_21630__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21629,inst_21628__$1);
var state_21649__$1 = (function (){var statearr_21711 = state_21649;
(statearr_21711[(11)] = inst_21630__$1);

(statearr_21711[(7)] = inst_21628__$1);

return statearr_21711;
})();
if(cljs.core.truth_(inst_21630__$1)){
var statearr_21714_23535 = state_21649__$1;
(statearr_21714_23535[(1)] = (19));

} else {
var statearr_21715_23536 = state_21649__$1;
(statearr_21715_23536[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (25))){
var inst_21639 = (state_21649[(2)]);
var state_21649__$1 = state_21649;
var statearr_21718_23537 = state_21649__$1;
(statearr_21718_23537[(2)] = inst_21639);

(statearr_21718_23537[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (17))){
var inst_21600 = (state_21649[(10)]);
var inst_21609 = cljs.core.first(inst_21600);
var inst_21612 = cljs.core.async.muxch_STAR_(inst_21609);
var inst_21613 = cljs.core.async.close_BANG_(inst_21612);
var inst_21614 = cljs.core.next(inst_21600);
var inst_21575 = inst_21614;
var inst_21576 = null;
var inst_21577 = (0);
var inst_21578 = (0);
var state_21649__$1 = (function (){var statearr_21727 = state_21649;
(statearr_21727[(12)] = inst_21578);

(statearr_21727[(13)] = inst_21613);

(statearr_21727[(14)] = inst_21575);

(statearr_21727[(15)] = inst_21577);

(statearr_21727[(16)] = inst_21576);

return statearr_21727;
})();
var statearr_21731_23542 = state_21649__$1;
(statearr_21731_23542[(2)] = null);

(statearr_21731_23542[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (3))){
var inst_21647 = (state_21649[(2)]);
var state_21649__$1 = state_21649;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21649__$1,inst_21647);
} else {
if((state_val_21650 === (12))){
var inst_21622 = (state_21649[(2)]);
var state_21649__$1 = state_21649;
var statearr_21737_23545 = state_21649__$1;
(statearr_21737_23545[(2)] = inst_21622);

(statearr_21737_23545[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (2))){
var state_21649__$1 = state_21649;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21649__$1,(4),ch);
} else {
if((state_val_21650 === (23))){
var state_21649__$1 = state_21649;
var statearr_21739_23546 = state_21649__$1;
(statearr_21739_23546[(2)] = null);

(statearr_21739_23546[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (19))){
var inst_21560 = (state_21649[(8)]);
var inst_21630 = (state_21649[(11)]);
var inst_21632 = cljs.core.async.muxch_STAR_(inst_21630);
var state_21649__$1 = state_21649;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21649__$1,(22),inst_21632,inst_21560);
} else {
if((state_val_21650 === (11))){
var inst_21600 = (state_21649[(10)]);
var inst_21575 = (state_21649[(14)]);
var inst_21600__$1 = cljs.core.seq(inst_21575);
var state_21649__$1 = (function (){var statearr_21746 = state_21649;
(statearr_21746[(10)] = inst_21600__$1);

return statearr_21746;
})();
if(inst_21600__$1){
var statearr_21748_23550 = state_21649__$1;
(statearr_21748_23550[(1)] = (13));

} else {
var statearr_21751_23552 = state_21649__$1;
(statearr_21751_23552[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (9))){
var inst_21624 = (state_21649[(2)]);
var state_21649__$1 = state_21649;
var statearr_21753_23553 = state_21649__$1;
(statearr_21753_23553[(2)] = inst_21624);

(statearr_21753_23553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (5))){
var inst_21572 = cljs.core.deref(mults);
var inst_21573 = cljs.core.vals(inst_21572);
var inst_21574 = cljs.core.seq(inst_21573);
var inst_21575 = inst_21574;
var inst_21576 = null;
var inst_21577 = (0);
var inst_21578 = (0);
var state_21649__$1 = (function (){var statearr_21756 = state_21649;
(statearr_21756[(12)] = inst_21578);

(statearr_21756[(14)] = inst_21575);

(statearr_21756[(15)] = inst_21577);

(statearr_21756[(16)] = inst_21576);

return statearr_21756;
})();
var statearr_21757_23557 = state_21649__$1;
(statearr_21757_23557[(2)] = null);

(statearr_21757_23557[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (14))){
var state_21649__$1 = state_21649;
var statearr_21770_23560 = state_21649__$1;
(statearr_21770_23560[(2)] = null);

(statearr_21770_23560[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (16))){
var inst_21600 = (state_21649[(10)]);
var inst_21604 = cljs.core.chunk_first(inst_21600);
var inst_21605 = cljs.core.chunk_rest(inst_21600);
var inst_21606 = cljs.core.count(inst_21604);
var inst_21575 = inst_21605;
var inst_21576 = inst_21604;
var inst_21577 = inst_21606;
var inst_21578 = (0);
var state_21649__$1 = (function (){var statearr_21779 = state_21649;
(statearr_21779[(12)] = inst_21578);

(statearr_21779[(14)] = inst_21575);

(statearr_21779[(15)] = inst_21577);

(statearr_21779[(16)] = inst_21576);

return statearr_21779;
})();
var statearr_21785_23562 = state_21649__$1;
(statearr_21785_23562[(2)] = null);

(statearr_21785_23562[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (10))){
var inst_21578 = (state_21649[(12)]);
var inst_21575 = (state_21649[(14)]);
var inst_21577 = (state_21649[(15)]);
var inst_21576 = (state_21649[(16)]);
var inst_21584 = cljs.core._nth(inst_21576,inst_21578);
var inst_21585 = cljs.core.async.muxch_STAR_(inst_21584);
var inst_21586 = cljs.core.async.close_BANG_(inst_21585);
var inst_21587 = (inst_21578 + (1));
var tmp21761 = inst_21575;
var tmp21762 = inst_21577;
var tmp21763 = inst_21576;
var inst_21575__$1 = tmp21761;
var inst_21576__$1 = tmp21763;
var inst_21577__$1 = tmp21762;
var inst_21578__$1 = inst_21587;
var state_21649__$1 = (function (){var statearr_21793 = state_21649;
(statearr_21793[(12)] = inst_21578__$1);

(statearr_21793[(14)] = inst_21575__$1);

(statearr_21793[(15)] = inst_21577__$1);

(statearr_21793[(17)] = inst_21586);

(statearr_21793[(16)] = inst_21576__$1);

return statearr_21793;
})();
var statearr_21803_23567 = state_21649__$1;
(statearr_21803_23567[(2)] = null);

(statearr_21803_23567[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (18))){
var inst_21617 = (state_21649[(2)]);
var state_21649__$1 = state_21649;
var statearr_21809_23568 = state_21649__$1;
(statearr_21809_23568[(2)] = inst_21617);

(statearr_21809_23568[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (8))){
var inst_21578 = (state_21649[(12)]);
var inst_21577 = (state_21649[(15)]);
var inst_21580 = (inst_21578 < inst_21577);
var inst_21581 = inst_21580;
var state_21649__$1 = state_21649;
if(cljs.core.truth_(inst_21581)){
var statearr_21825_23569 = state_21649__$1;
(statearr_21825_23569[(1)] = (10));

} else {
var statearr_21830_23570 = state_21649__$1;
(statearr_21830_23570[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__19415__auto__ = null;
var cljs$core$async$state_machine__19415__auto____0 = (function (){
var statearr_21842 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21842[(0)] = cljs$core$async$state_machine__19415__auto__);

(statearr_21842[(1)] = (1));

return statearr_21842;
});
var cljs$core$async$state_machine__19415__auto____1 = (function (state_21649){
while(true){
var ret_value__19416__auto__ = (function (){try{while(true){
var result__19417__auto__ = switch__19413__auto__(state_21649);
if(cljs.core.keyword_identical_QMARK_(result__19417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19417__auto__;
}
break;
}
}catch (e21843){var ex__19418__auto__ = e21843;
var statearr_21844_23572 = state_21649;
(statearr_21844_23572[(2)] = ex__19418__auto__);


if(cljs.core.seq((state_21649[(4)]))){
var statearr_21846_23573 = state_21649;
(statearr_21846_23573[(1)] = cljs.core.first((state_21649[(4)])));

} else {
throw ex__19418__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23574 = state_21649;
state_21649 = G__23574;
continue;
} else {
return ret_value__19416__auto__;
}
break;
}
});
cljs$core$async$state_machine__19415__auto__ = function(state_21649){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19415__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19415__auto____1.call(this,state_21649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19415__auto____0;
cljs$core$async$state_machine__19415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19415__auto____1;
return cljs$core$async$state_machine__19415__auto__;
})()
})();
var state__19756__auto__ = (function (){var statearr_21850 = f__19755__auto__();
(statearr_21850[(6)] = c__19754__auto___23513);

return statearr_21850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19756__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__21853 = arguments.length;
switch (G__21853) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__21869 = arguments.length;
switch (G__21869) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__21899 = arguments.length;
switch (G__21899) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__19754__auto___23598 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19755__auto__ = (function (){var switch__19413__auto__ = (function (state_22001){
var state_val_22002 = (state_22001[(1)]);
if((state_val_22002 === (7))){
var state_22001__$1 = state_22001;
var statearr_22003_23602 = state_22001__$1;
(statearr_22003_23602[(2)] = null);

(statearr_22003_23602[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22002 === (1))){
var state_22001__$1 = state_22001;
var statearr_22004_23604 = state_22001__$1;
(statearr_22004_23604[(2)] = null);

(statearr_22004_23604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22002 === (4))){
var inst_21917 = (state_22001[(7)]);
var inst_21916 = (state_22001[(8)]);
var inst_21919 = (inst_21917 < inst_21916);
var state_22001__$1 = state_22001;
if(cljs.core.truth_(inst_21919)){
var statearr_22010_23608 = state_22001__$1;
(statearr_22010_23608[(1)] = (6));

} else {
var statearr_22011_23613 = state_22001__$1;
(statearr_22011_23613[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22002 === (15))){
var inst_21959 = (state_22001[(9)]);
var inst_21964 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_21959);
var state_22001__$1 = state_22001;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22001__$1,(17),out,inst_21964);
} else {
if((state_val_22002 === (13))){
var inst_21959 = (state_22001[(9)]);
var inst_21959__$1 = (state_22001[(2)]);
var inst_21960 = cljs.core.some(cljs.core.nil_QMARK_,inst_21959__$1);
var state_22001__$1 = (function (){var statearr_22013 = state_22001;
(statearr_22013[(9)] = inst_21959__$1);

return statearr_22013;
})();
if(cljs.core.truth_(inst_21960)){
var statearr_22014_23614 = state_22001__$1;
(statearr_22014_23614[(1)] = (14));

} else {
var statearr_22015_23615 = state_22001__$1;
(statearr_22015_23615[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22002 === (6))){
var state_22001__$1 = state_22001;
var statearr_22016_23622 = state_22001__$1;
(statearr_22016_23622[(2)] = null);

(statearr_22016_23622[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22002 === (17))){
var inst_21966 = (state_22001[(2)]);
var state_22001__$1 = (function (){var statearr_22018 = state_22001;
(statearr_22018[(10)] = inst_21966);

return statearr_22018;
})();
var statearr_22019_23626 = state_22001__$1;
(statearr_22019_23626[(2)] = null);

(statearr_22019_23626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22002 === (3))){
var inst_21971 = (state_22001[(2)]);
var state_22001__$1 = state_22001;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22001__$1,inst_21971);
} else {
if((state_val_22002 === (12))){
var _ = (function (){var statearr_22020 = state_22001;
(statearr_22020[(4)] = cljs.core.rest((state_22001[(4)])));

return statearr_22020;
})();
var state_22001__$1 = state_22001;
var ex22017 = (state_22001__$1[(2)]);
var statearr_22021_23628 = state_22001__$1;
(statearr_22021_23628[(5)] = ex22017);


if((ex22017 instanceof Object)){
var statearr_22022_23629 = state_22001__$1;
(statearr_22022_23629[(1)] = (11));

(statearr_22022_23629[(5)] = null);

} else {
throw ex22017;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22002 === (2))){
var inst_21915 = cljs.core.reset_BANG_(dctr,cnt);
var inst_21916 = cnt;
var inst_21917 = (0);
var state_22001__$1 = (function (){var statearr_22023 = state_22001;
(statearr_22023[(11)] = inst_21915);

(statearr_22023[(7)] = inst_21917);

(statearr_22023[(8)] = inst_21916);

return statearr_22023;
})();
var statearr_22024_23630 = state_22001__$1;
(statearr_22024_23630[(2)] = null);

(statearr_22024_23630[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22002 === (11))){
var inst_21929 = (state_22001[(2)]);
var inst_21930 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_22001__$1 = (function (){var statearr_22025 = state_22001;
(statearr_22025[(12)] = inst_21929);

return statearr_22025;
})();
var statearr_22026_23631 = state_22001__$1;
(statearr_22026_23631[(2)] = inst_21930);

(statearr_22026_23631[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22002 === (9))){
var inst_21917 = (state_22001[(7)]);
var _ = (function (){var statearr_22030 = state_22001;
(statearr_22030[(4)] = cljs.core.cons((12),(state_22001[(4)])));

return statearr_22030;
})();
var inst_21942 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_21917) : chs__$1.call(null,inst_21917));
var inst_21943 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_21917) : done.call(null,inst_21917));
var inst_21944 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_21942,inst_21943);
var ___$1 = (function (){var statearr_22031 = state_22001;
(statearr_22031[(4)] = cljs.core.rest((state_22001[(4)])));

return statearr_22031;
})();
var state_22001__$1 = state_22001;
var statearr_22032_23632 = state_22001__$1;
(statearr_22032_23632[(2)] = inst_21944);

(statearr_22032_23632[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22002 === (5))){
var inst_21957 = (state_22001[(2)]);
var state_22001__$1 = (function (){var statearr_22035 = state_22001;
(statearr_22035[(13)] = inst_21957);

return statearr_22035;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22001__$1,(13),dchan);
} else {
if((state_val_22002 === (14))){
var inst_21962 = cljs.core.async.close_BANG_(out);
var state_22001__$1 = state_22001;
var statearr_22036_23633 = state_22001__$1;
(statearr_22036_23633[(2)] = inst_21962);

(statearr_22036_23633[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22002 === (16))){
var inst_21969 = (state_22001[(2)]);
var state_22001__$1 = state_22001;
var statearr_22040_23634 = state_22001__$1;
(statearr_22040_23634[(2)] = inst_21969);

(statearr_22040_23634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22002 === (10))){
var inst_21917 = (state_22001[(7)]);
var inst_21950 = (state_22001[(2)]);
var inst_21951 = (inst_21917 + (1));
var inst_21917__$1 = inst_21951;
var state_22001__$1 = (function (){var statearr_22043 = state_22001;
(statearr_22043[(7)] = inst_21917__$1);

(statearr_22043[(14)] = inst_21950);

return statearr_22043;
})();
var statearr_22045_23635 = state_22001__$1;
(statearr_22045_23635[(2)] = null);

(statearr_22045_23635[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22002 === (8))){
var inst_21955 = (state_22001[(2)]);
var state_22001__$1 = state_22001;
var statearr_22048_23636 = state_22001__$1;
(statearr_22048_23636[(2)] = inst_21955);

(statearr_22048_23636[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__19415__auto__ = null;
var cljs$core$async$state_machine__19415__auto____0 = (function (){
var statearr_22049 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22049[(0)] = cljs$core$async$state_machine__19415__auto__);

(statearr_22049[(1)] = (1));

return statearr_22049;
});
var cljs$core$async$state_machine__19415__auto____1 = (function (state_22001){
while(true){
var ret_value__19416__auto__ = (function (){try{while(true){
var result__19417__auto__ = switch__19413__auto__(state_22001);
if(cljs.core.keyword_identical_QMARK_(result__19417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19417__auto__;
}
break;
}
}catch (e22055){var ex__19418__auto__ = e22055;
var statearr_22056_23637 = state_22001;
(statearr_22056_23637[(2)] = ex__19418__auto__);


if(cljs.core.seq((state_22001[(4)]))){
var statearr_22057_23638 = state_22001;
(statearr_22057_23638[(1)] = cljs.core.first((state_22001[(4)])));

} else {
throw ex__19418__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23645 = state_22001;
state_22001 = G__23645;
continue;
} else {
return ret_value__19416__auto__;
}
break;
}
});
cljs$core$async$state_machine__19415__auto__ = function(state_22001){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19415__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19415__auto____1.call(this,state_22001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19415__auto____0;
cljs$core$async$state_machine__19415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19415__auto____1;
return cljs$core$async$state_machine__19415__auto__;
})()
})();
var state__19756__auto__ = (function (){var statearr_22058 = f__19755__auto__();
(statearr_22058[(6)] = c__19754__auto___23598);

return statearr_22058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19756__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__22061 = arguments.length;
switch (G__22061) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__19754__auto___23651 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19755__auto__ = (function (){var switch__19413__auto__ = (function (state_22110){
var state_val_22111 = (state_22110[(1)]);
if((state_val_22111 === (7))){
var inst_22086 = (state_22110[(7)]);
var inst_22087 = (state_22110[(8)]);
var inst_22086__$1 = (state_22110[(2)]);
var inst_22087__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22086__$1,(0),null);
var inst_22088 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22086__$1,(1),null);
var inst_22089 = (inst_22087__$1 == null);
var state_22110__$1 = (function (){var statearr_22116 = state_22110;
(statearr_22116[(7)] = inst_22086__$1);

(statearr_22116[(9)] = inst_22088);

(statearr_22116[(8)] = inst_22087__$1);

return statearr_22116;
})();
if(cljs.core.truth_(inst_22089)){
var statearr_22119_23652 = state_22110__$1;
(statearr_22119_23652[(1)] = (8));

} else {
var statearr_22120_23653 = state_22110__$1;
(statearr_22120_23653[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22111 === (1))){
var inst_22074 = cljs.core.vec(chs);
var inst_22075 = inst_22074;
var state_22110__$1 = (function (){var statearr_22121 = state_22110;
(statearr_22121[(10)] = inst_22075);

return statearr_22121;
})();
var statearr_22123_23655 = state_22110__$1;
(statearr_22123_23655[(2)] = null);

(statearr_22123_23655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22111 === (4))){
var inst_22075 = (state_22110[(10)]);
var state_22110__$1 = state_22110;
return cljs.core.async.ioc_alts_BANG_(state_22110__$1,(7),inst_22075);
} else {
if((state_val_22111 === (6))){
var inst_22104 = (state_22110[(2)]);
var state_22110__$1 = state_22110;
var statearr_22126_23656 = state_22110__$1;
(statearr_22126_23656[(2)] = inst_22104);

(statearr_22126_23656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22111 === (3))){
var inst_22106 = (state_22110[(2)]);
var state_22110__$1 = state_22110;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22110__$1,inst_22106);
} else {
if((state_val_22111 === (2))){
var inst_22075 = (state_22110[(10)]);
var inst_22078 = cljs.core.count(inst_22075);
var inst_22079 = (inst_22078 > (0));
var state_22110__$1 = state_22110;
if(cljs.core.truth_(inst_22079)){
var statearr_22129_23657 = state_22110__$1;
(statearr_22129_23657[(1)] = (4));

} else {
var statearr_22130_23658 = state_22110__$1;
(statearr_22130_23658[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22111 === (11))){
var inst_22075 = (state_22110[(10)]);
var inst_22097 = (state_22110[(2)]);
var tmp22127 = inst_22075;
var inst_22075__$1 = tmp22127;
var state_22110__$1 = (function (){var statearr_22132 = state_22110;
(statearr_22132[(11)] = inst_22097);

(statearr_22132[(10)] = inst_22075__$1);

return statearr_22132;
})();
var statearr_22137_23659 = state_22110__$1;
(statearr_22137_23659[(2)] = null);

(statearr_22137_23659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22111 === (9))){
var inst_22087 = (state_22110[(8)]);
var state_22110__$1 = state_22110;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22110__$1,(11),out,inst_22087);
} else {
if((state_val_22111 === (5))){
var inst_22102 = cljs.core.async.close_BANG_(out);
var state_22110__$1 = state_22110;
var statearr_22150_23660 = state_22110__$1;
(statearr_22150_23660[(2)] = inst_22102);

(statearr_22150_23660[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22111 === (10))){
var inst_22100 = (state_22110[(2)]);
var state_22110__$1 = state_22110;
var statearr_22163_23661 = state_22110__$1;
(statearr_22163_23661[(2)] = inst_22100);

(statearr_22163_23661[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22111 === (8))){
var inst_22086 = (state_22110[(7)]);
var inst_22088 = (state_22110[(9)]);
var inst_22087 = (state_22110[(8)]);
var inst_22075 = (state_22110[(10)]);
var inst_22092 = (function (){var cs = inst_22075;
var vec__22081 = inst_22086;
var v = inst_22087;
var c = inst_22088;
return (function (p1__22059_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__22059_SHARP_);
});
})();
var inst_22093 = cljs.core.filterv(inst_22092,inst_22075);
var inst_22075__$1 = inst_22093;
var state_22110__$1 = (function (){var statearr_22181 = state_22110;
(statearr_22181[(10)] = inst_22075__$1);

return statearr_22181;
})();
var statearr_22187_23662 = state_22110__$1;
(statearr_22187_23662[(2)] = null);

(statearr_22187_23662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__19415__auto__ = null;
var cljs$core$async$state_machine__19415__auto____0 = (function (){
var statearr_22201 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22201[(0)] = cljs$core$async$state_machine__19415__auto__);

(statearr_22201[(1)] = (1));

return statearr_22201;
});
var cljs$core$async$state_machine__19415__auto____1 = (function (state_22110){
while(true){
var ret_value__19416__auto__ = (function (){try{while(true){
var result__19417__auto__ = switch__19413__auto__(state_22110);
if(cljs.core.keyword_identical_QMARK_(result__19417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19417__auto__;
}
break;
}
}catch (e22203){var ex__19418__auto__ = e22203;
var statearr_22204_23669 = state_22110;
(statearr_22204_23669[(2)] = ex__19418__auto__);


if(cljs.core.seq((state_22110[(4)]))){
var statearr_22205_23670 = state_22110;
(statearr_22205_23670[(1)] = cljs.core.first((state_22110[(4)])));

} else {
throw ex__19418__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23671 = state_22110;
state_22110 = G__23671;
continue;
} else {
return ret_value__19416__auto__;
}
break;
}
});
cljs$core$async$state_machine__19415__auto__ = function(state_22110){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19415__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19415__auto____1.call(this,state_22110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19415__auto____0;
cljs$core$async$state_machine__19415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19415__auto____1;
return cljs$core$async$state_machine__19415__auto__;
})()
})();
var state__19756__auto__ = (function (){var statearr_22208 = f__19755__auto__();
(statearr_22208[(6)] = c__19754__auto___23651);

return statearr_22208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19756__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__22213 = arguments.length;
switch (G__22213) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__19754__auto___23674 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19755__auto__ = (function (){var switch__19413__auto__ = (function (state_22246){
var state_val_22247 = (state_22246[(1)]);
if((state_val_22247 === (7))){
var inst_22227 = (state_22246[(7)]);
var inst_22227__$1 = (state_22246[(2)]);
var inst_22228 = (inst_22227__$1 == null);
var inst_22229 = cljs.core.not(inst_22228);
var state_22246__$1 = (function (){var statearr_22251 = state_22246;
(statearr_22251[(7)] = inst_22227__$1);

return statearr_22251;
})();
if(inst_22229){
var statearr_22253_23676 = state_22246__$1;
(statearr_22253_23676[(1)] = (8));

} else {
var statearr_22255_23677 = state_22246__$1;
(statearr_22255_23677[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22247 === (1))){
var inst_22221 = (0);
var state_22246__$1 = (function (){var statearr_22258 = state_22246;
(statearr_22258[(8)] = inst_22221);

return statearr_22258;
})();
var statearr_22260_23678 = state_22246__$1;
(statearr_22260_23678[(2)] = null);

(statearr_22260_23678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22247 === (4))){
var state_22246__$1 = state_22246;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22246__$1,(7),ch);
} else {
if((state_val_22247 === (6))){
var inst_22240 = (state_22246[(2)]);
var state_22246__$1 = state_22246;
var statearr_22266_23679 = state_22246__$1;
(statearr_22266_23679[(2)] = inst_22240);

(statearr_22266_23679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22247 === (3))){
var inst_22242 = (state_22246[(2)]);
var inst_22243 = cljs.core.async.close_BANG_(out);
var state_22246__$1 = (function (){var statearr_22268 = state_22246;
(statearr_22268[(9)] = inst_22242);

return statearr_22268;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22246__$1,inst_22243);
} else {
if((state_val_22247 === (2))){
var inst_22221 = (state_22246[(8)]);
var inst_22223 = (inst_22221 < n);
var state_22246__$1 = state_22246;
if(cljs.core.truth_(inst_22223)){
var statearr_22269_23680 = state_22246__$1;
(statearr_22269_23680[(1)] = (4));

} else {
var statearr_22270_23681 = state_22246__$1;
(statearr_22270_23681[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22247 === (11))){
var inst_22221 = (state_22246[(8)]);
var inst_22232 = (state_22246[(2)]);
var inst_22233 = (inst_22221 + (1));
var inst_22221__$1 = inst_22233;
var state_22246__$1 = (function (){var statearr_22273 = state_22246;
(statearr_22273[(10)] = inst_22232);

(statearr_22273[(8)] = inst_22221__$1);

return statearr_22273;
})();
var statearr_22275_23682 = state_22246__$1;
(statearr_22275_23682[(2)] = null);

(statearr_22275_23682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22247 === (9))){
var state_22246__$1 = state_22246;
var statearr_22276_23683 = state_22246__$1;
(statearr_22276_23683[(2)] = null);

(statearr_22276_23683[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22247 === (5))){
var state_22246__$1 = state_22246;
var statearr_22278_23684 = state_22246__$1;
(statearr_22278_23684[(2)] = null);

(statearr_22278_23684[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22247 === (10))){
var inst_22237 = (state_22246[(2)]);
var state_22246__$1 = state_22246;
var statearr_22279_23685 = state_22246__$1;
(statearr_22279_23685[(2)] = inst_22237);

(statearr_22279_23685[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22247 === (8))){
var inst_22227 = (state_22246[(7)]);
var state_22246__$1 = state_22246;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22246__$1,(11),out,inst_22227);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__19415__auto__ = null;
var cljs$core$async$state_machine__19415__auto____0 = (function (){
var statearr_22283 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22283[(0)] = cljs$core$async$state_machine__19415__auto__);

(statearr_22283[(1)] = (1));

return statearr_22283;
});
var cljs$core$async$state_machine__19415__auto____1 = (function (state_22246){
while(true){
var ret_value__19416__auto__ = (function (){try{while(true){
var result__19417__auto__ = switch__19413__auto__(state_22246);
if(cljs.core.keyword_identical_QMARK_(result__19417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19417__auto__;
}
break;
}
}catch (e22284){var ex__19418__auto__ = e22284;
var statearr_22285_23692 = state_22246;
(statearr_22285_23692[(2)] = ex__19418__auto__);


if(cljs.core.seq((state_22246[(4)]))){
var statearr_22286_23693 = state_22246;
(statearr_22286_23693[(1)] = cljs.core.first((state_22246[(4)])));

} else {
throw ex__19418__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23694 = state_22246;
state_22246 = G__23694;
continue;
} else {
return ret_value__19416__auto__;
}
break;
}
});
cljs$core$async$state_machine__19415__auto__ = function(state_22246){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19415__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19415__auto____1.call(this,state_22246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19415__auto____0;
cljs$core$async$state_machine__19415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19415__auto____1;
return cljs$core$async$state_machine__19415__auto__;
})()
})();
var state__19756__auto__ = (function (){var statearr_22287 = f__19755__auto__();
(statearr_22287[(6)] = c__19754__auto___23674);

return statearr_22287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19756__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22289 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22289 = (function (f,ch,meta22290){
this.f = f;
this.ch = ch;
this.meta22290 = meta22290;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22289.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22291,meta22290__$1){
var self__ = this;
var _22291__$1 = this;
return (new cljs.core.async.t_cljs$core$async22289(self__.f,self__.ch,meta22290__$1));
}));

(cljs.core.async.t_cljs$core$async22289.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22291){
var self__ = this;
var _22291__$1 = this;
return self__.meta22290;
}));

(cljs.core.async.t_cljs$core$async22289.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22289.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async22289.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async22289.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22289.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22297 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22297 = (function (f,ch,meta22290,_,fn1,meta22298){
this.f = f;
this.ch = ch;
this.meta22290 = meta22290;
this._ = _;
this.fn1 = fn1;
this.meta22298 = meta22298;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22299,meta22298__$1){
var self__ = this;
var _22299__$1 = this;
return (new cljs.core.async.t_cljs$core$async22297(self__.f,self__.ch,self__.meta22290,self__._,self__.fn1,meta22298__$1));
}));

(cljs.core.async.t_cljs$core$async22297.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22299){
var self__ = this;
var _22299__$1 = this;
return self__.meta22298;
}));

(cljs.core.async.t_cljs$core$async22297.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22297.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async22297.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async22297.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__22288_SHARP_){
var G__22302 = (((p1__22288_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__22288_SHARP_) : self__.f.call(null,p1__22288_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__22302) : f1.call(null,G__22302));
});
}));

(cljs.core.async.t_cljs$core$async22297.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22290","meta22290",-459799915,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22289","cljs.core.async/t_cljs$core$async22289",-1037425570,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22298","meta22298",-1950146013,null)], null);
}));

(cljs.core.async.t_cljs$core$async22297.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22297.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22297");

(cljs.core.async.t_cljs$core$async22297.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async22297");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22297.
 */
cljs.core.async.__GT_t_cljs$core$async22297 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22297(f__$1,ch__$1,meta22290__$1,___$2,fn1__$1,meta22298){
return (new cljs.core.async.t_cljs$core$async22297(f__$1,ch__$1,meta22290__$1,___$2,fn1__$1,meta22298));
});

}

return (new cljs.core.async.t_cljs$core$async22297(self__.f,self__.ch,self__.meta22290,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__22308 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__22308) : self__.f.call(null,G__22308));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async22289.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22289.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async22289.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22290","meta22290",-459799915,null)], null);
}));

(cljs.core.async.t_cljs$core$async22289.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22289.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22289");

(cljs.core.async.t_cljs$core$async22289.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async22289");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22289.
 */
cljs.core.async.__GT_t_cljs$core$async22289 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22289(f__$1,ch__$1,meta22290){
return (new cljs.core.async.t_cljs$core$async22289(f__$1,ch__$1,meta22290));
});

}

return (new cljs.core.async.t_cljs$core$async22289(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22314 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22314 = (function (f,ch,meta22315){
this.f = f;
this.ch = ch;
this.meta22315 = meta22315;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22314.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22316,meta22315__$1){
var self__ = this;
var _22316__$1 = this;
return (new cljs.core.async.t_cljs$core$async22314(self__.f,self__.ch,meta22315__$1));
}));

(cljs.core.async.t_cljs$core$async22314.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22316){
var self__ = this;
var _22316__$1 = this;
return self__.meta22315;
}));

(cljs.core.async.t_cljs$core$async22314.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22314.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async22314.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22314.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async22314.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22314.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async22314.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22315","meta22315",2105989195,null)], null);
}));

(cljs.core.async.t_cljs$core$async22314.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22314.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22314");

(cljs.core.async.t_cljs$core$async22314.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async22314");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22314.
 */
cljs.core.async.__GT_t_cljs$core$async22314 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22314(f__$1,ch__$1,meta22315){
return (new cljs.core.async.t_cljs$core$async22314(f__$1,ch__$1,meta22315));
});

}

return (new cljs.core.async.t_cljs$core$async22314(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22320 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22320 = (function (p,ch,meta22321){
this.p = p;
this.ch = ch;
this.meta22321 = meta22321;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22322,meta22321__$1){
var self__ = this;
var _22322__$1 = this;
return (new cljs.core.async.t_cljs$core$async22320(self__.p,self__.ch,meta22321__$1));
}));

(cljs.core.async.t_cljs$core$async22320.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22322){
var self__ = this;
var _22322__$1 = this;
return self__.meta22321;
}));

(cljs.core.async.t_cljs$core$async22320.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22320.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async22320.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async22320.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22320.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async22320.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22320.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async22320.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22321","meta22321",812173031,null)], null);
}));

(cljs.core.async.t_cljs$core$async22320.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22320.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22320");

(cljs.core.async.t_cljs$core$async22320.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async22320");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22320.
 */
cljs.core.async.__GT_t_cljs$core$async22320 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22320(p__$1,ch__$1,meta22321){
return (new cljs.core.async.t_cljs$core$async22320(p__$1,ch__$1,meta22321));
});

}

return (new cljs.core.async.t_cljs$core$async22320(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__22347 = arguments.length;
switch (G__22347) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__19754__auto___23698 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19755__auto__ = (function (){var switch__19413__auto__ = (function (state_22384){
var state_val_22385 = (state_22384[(1)]);
if((state_val_22385 === (7))){
var inst_22380 = (state_22384[(2)]);
var state_22384__$1 = state_22384;
var statearr_22390_23704 = state_22384__$1;
(statearr_22390_23704[(2)] = inst_22380);

(statearr_22390_23704[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22385 === (1))){
var state_22384__$1 = state_22384;
var statearr_22391_23705 = state_22384__$1;
(statearr_22391_23705[(2)] = null);

(statearr_22391_23705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22385 === (4))){
var inst_22363 = (state_22384[(7)]);
var inst_22363__$1 = (state_22384[(2)]);
var inst_22364 = (inst_22363__$1 == null);
var state_22384__$1 = (function (){var statearr_22395 = state_22384;
(statearr_22395[(7)] = inst_22363__$1);

return statearr_22395;
})();
if(cljs.core.truth_(inst_22364)){
var statearr_22396_23706 = state_22384__$1;
(statearr_22396_23706[(1)] = (5));

} else {
var statearr_22398_23707 = state_22384__$1;
(statearr_22398_23707[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22385 === (6))){
var inst_22363 = (state_22384[(7)]);
var inst_22369 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_22363) : p.call(null,inst_22363));
var state_22384__$1 = state_22384;
if(cljs.core.truth_(inst_22369)){
var statearr_22399_23708 = state_22384__$1;
(statearr_22399_23708[(1)] = (8));

} else {
var statearr_22400_23709 = state_22384__$1;
(statearr_22400_23709[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22385 === (3))){
var inst_22382 = (state_22384[(2)]);
var state_22384__$1 = state_22384;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22384__$1,inst_22382);
} else {
if((state_val_22385 === (2))){
var state_22384__$1 = state_22384;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22384__$1,(4),ch);
} else {
if((state_val_22385 === (11))){
var inst_22373 = (state_22384[(2)]);
var state_22384__$1 = state_22384;
var statearr_22401_23710 = state_22384__$1;
(statearr_22401_23710[(2)] = inst_22373);

(statearr_22401_23710[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22385 === (9))){
var state_22384__$1 = state_22384;
var statearr_22402_23711 = state_22384__$1;
(statearr_22402_23711[(2)] = null);

(statearr_22402_23711[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22385 === (5))){
var inst_22366 = cljs.core.async.close_BANG_(out);
var state_22384__$1 = state_22384;
var statearr_22408_23712 = state_22384__$1;
(statearr_22408_23712[(2)] = inst_22366);

(statearr_22408_23712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22385 === (10))){
var inst_22376 = (state_22384[(2)]);
var state_22384__$1 = (function (){var statearr_22412 = state_22384;
(statearr_22412[(8)] = inst_22376);

return statearr_22412;
})();
var statearr_22414_23713 = state_22384__$1;
(statearr_22414_23713[(2)] = null);

(statearr_22414_23713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22385 === (8))){
var inst_22363 = (state_22384[(7)]);
var state_22384__$1 = state_22384;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22384__$1,(11),out,inst_22363);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__19415__auto__ = null;
var cljs$core$async$state_machine__19415__auto____0 = (function (){
var statearr_22426 = [null,null,null,null,null,null,null,null,null];
(statearr_22426[(0)] = cljs$core$async$state_machine__19415__auto__);

(statearr_22426[(1)] = (1));

return statearr_22426;
});
var cljs$core$async$state_machine__19415__auto____1 = (function (state_22384){
while(true){
var ret_value__19416__auto__ = (function (){try{while(true){
var result__19417__auto__ = switch__19413__auto__(state_22384);
if(cljs.core.keyword_identical_QMARK_(result__19417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19417__auto__;
}
break;
}
}catch (e22534){var ex__19418__auto__ = e22534;
var statearr_22537_23714 = state_22384;
(statearr_22537_23714[(2)] = ex__19418__auto__);


if(cljs.core.seq((state_22384[(4)]))){
var statearr_22553_23716 = state_22384;
(statearr_22553_23716[(1)] = cljs.core.first((state_22384[(4)])));

} else {
throw ex__19418__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23718 = state_22384;
state_22384 = G__23718;
continue;
} else {
return ret_value__19416__auto__;
}
break;
}
});
cljs$core$async$state_machine__19415__auto__ = function(state_22384){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19415__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19415__auto____1.call(this,state_22384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19415__auto____0;
cljs$core$async$state_machine__19415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19415__auto____1;
return cljs$core$async$state_machine__19415__auto__;
})()
})();
var state__19756__auto__ = (function (){var statearr_22589 = f__19755__auto__();
(statearr_22589[(6)] = c__19754__auto___23698);

return statearr_22589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19756__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__22591 = arguments.length;
switch (G__22591) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19754__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19755__auto__ = (function (){var switch__19413__auto__ = (function (state_22669){
var state_val_22674 = (state_22669[(1)]);
if((state_val_22674 === (7))){
var inst_22661 = (state_22669[(2)]);
var state_22669__$1 = state_22669;
var statearr_22675_23722 = state_22669__$1;
(statearr_22675_23722[(2)] = inst_22661);

(statearr_22675_23722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22674 === (20))){
var inst_22626 = (state_22669[(7)]);
var inst_22638 = (state_22669[(2)]);
var inst_22639 = cljs.core.next(inst_22626);
var inst_22610 = inst_22639;
var inst_22611 = null;
var inst_22612 = (0);
var inst_22613 = (0);
var state_22669__$1 = (function (){var statearr_22676 = state_22669;
(statearr_22676[(8)] = inst_22611);

(statearr_22676[(9)] = inst_22610);

(statearr_22676[(10)] = inst_22638);

(statearr_22676[(11)] = inst_22612);

(statearr_22676[(12)] = inst_22613);

return statearr_22676;
})();
var statearr_22677_23723 = state_22669__$1;
(statearr_22677_23723[(2)] = null);

(statearr_22677_23723[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22674 === (1))){
var state_22669__$1 = state_22669;
var statearr_22679_23724 = state_22669__$1;
(statearr_22679_23724[(2)] = null);

(statearr_22679_23724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22674 === (4))){
var inst_22599 = (state_22669[(13)]);
var inst_22599__$1 = (state_22669[(2)]);
var inst_22600 = (inst_22599__$1 == null);
var state_22669__$1 = (function (){var statearr_22680 = state_22669;
(statearr_22680[(13)] = inst_22599__$1);

return statearr_22680;
})();
if(cljs.core.truth_(inst_22600)){
var statearr_22681_23728 = state_22669__$1;
(statearr_22681_23728[(1)] = (5));

} else {
var statearr_22682_23730 = state_22669__$1;
(statearr_22682_23730[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22674 === (15))){
var state_22669__$1 = state_22669;
var statearr_22686_23731 = state_22669__$1;
(statearr_22686_23731[(2)] = null);

(statearr_22686_23731[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22674 === (21))){
var state_22669__$1 = state_22669;
var statearr_22687_23732 = state_22669__$1;
(statearr_22687_23732[(2)] = null);

(statearr_22687_23732[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22674 === (13))){
var inst_22611 = (state_22669[(8)]);
var inst_22610 = (state_22669[(9)]);
var inst_22612 = (state_22669[(11)]);
var inst_22613 = (state_22669[(12)]);
var inst_22622 = (state_22669[(2)]);
var inst_22623 = (inst_22613 + (1));
var tmp22683 = inst_22611;
var tmp22684 = inst_22610;
var tmp22685 = inst_22612;
var inst_22610__$1 = tmp22684;
var inst_22611__$1 = tmp22683;
var inst_22612__$1 = tmp22685;
var inst_22613__$1 = inst_22623;
var state_22669__$1 = (function (){var statearr_22688 = state_22669;
(statearr_22688[(8)] = inst_22611__$1);

(statearr_22688[(9)] = inst_22610__$1);

(statearr_22688[(14)] = inst_22622);

(statearr_22688[(11)] = inst_22612__$1);

(statearr_22688[(12)] = inst_22613__$1);

return statearr_22688;
})();
var statearr_22690_23733 = state_22669__$1;
(statearr_22690_23733[(2)] = null);

(statearr_22690_23733[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22674 === (22))){
var state_22669__$1 = state_22669;
var statearr_22691_23734 = state_22669__$1;
(statearr_22691_23734[(2)] = null);

(statearr_22691_23734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22674 === (6))){
var inst_22599 = (state_22669[(13)]);
var inst_22608 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_22599) : f.call(null,inst_22599));
var inst_22609 = cljs.core.seq(inst_22608);
var inst_22610 = inst_22609;
var inst_22611 = null;
var inst_22612 = (0);
var inst_22613 = (0);
var state_22669__$1 = (function (){var statearr_22695 = state_22669;
(statearr_22695[(8)] = inst_22611);

(statearr_22695[(9)] = inst_22610);

(statearr_22695[(11)] = inst_22612);

(statearr_22695[(12)] = inst_22613);

return statearr_22695;
})();
var statearr_22696_23735 = state_22669__$1;
(statearr_22696_23735[(2)] = null);

(statearr_22696_23735[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22674 === (17))){
var inst_22626 = (state_22669[(7)]);
var inst_22630 = cljs.core.chunk_first(inst_22626);
var inst_22631 = cljs.core.chunk_rest(inst_22626);
var inst_22632 = cljs.core.count(inst_22630);
var inst_22610 = inst_22631;
var inst_22611 = inst_22630;
var inst_22612 = inst_22632;
var inst_22613 = (0);
var state_22669__$1 = (function (){var statearr_22698 = state_22669;
(statearr_22698[(8)] = inst_22611);

(statearr_22698[(9)] = inst_22610);

(statearr_22698[(11)] = inst_22612);

(statearr_22698[(12)] = inst_22613);

return statearr_22698;
})();
var statearr_22699_23736 = state_22669__$1;
(statearr_22699_23736[(2)] = null);

(statearr_22699_23736[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22674 === (3))){
var inst_22663 = (state_22669[(2)]);
var state_22669__$1 = state_22669;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22669__$1,inst_22663);
} else {
if((state_val_22674 === (12))){
var inst_22651 = (state_22669[(2)]);
var state_22669__$1 = state_22669;
var statearr_22701_23737 = state_22669__$1;
(statearr_22701_23737[(2)] = inst_22651);

(statearr_22701_23737[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22674 === (2))){
var state_22669__$1 = state_22669;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22669__$1,(4),in$);
} else {
if((state_val_22674 === (23))){
var inst_22659 = (state_22669[(2)]);
var state_22669__$1 = state_22669;
var statearr_22702_23738 = state_22669__$1;
(statearr_22702_23738[(2)] = inst_22659);

(statearr_22702_23738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22674 === (19))){
var inst_22642 = (state_22669[(2)]);
var state_22669__$1 = state_22669;
var statearr_22703_23739 = state_22669__$1;
(statearr_22703_23739[(2)] = inst_22642);

(statearr_22703_23739[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22674 === (11))){
var inst_22626 = (state_22669[(7)]);
var inst_22610 = (state_22669[(9)]);
var inst_22626__$1 = cljs.core.seq(inst_22610);
var state_22669__$1 = (function (){var statearr_22704 = state_22669;
(statearr_22704[(7)] = inst_22626__$1);

return statearr_22704;
})();
if(inst_22626__$1){
var statearr_22705_23740 = state_22669__$1;
(statearr_22705_23740[(1)] = (14));

} else {
var statearr_22706_23741 = state_22669__$1;
(statearr_22706_23741[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22674 === (9))){
var inst_22653 = (state_22669[(2)]);
var inst_22654 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_22669__$1 = (function (){var statearr_22708 = state_22669;
(statearr_22708[(15)] = inst_22653);

return statearr_22708;
})();
if(cljs.core.truth_(inst_22654)){
var statearr_22709_23743 = state_22669__$1;
(statearr_22709_23743[(1)] = (21));

} else {
var statearr_22710_23744 = state_22669__$1;
(statearr_22710_23744[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22674 === (5))){
var inst_22602 = cljs.core.async.close_BANG_(out);
var state_22669__$1 = state_22669;
var statearr_22711_23746 = state_22669__$1;
(statearr_22711_23746[(2)] = inst_22602);

(statearr_22711_23746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22674 === (14))){
var inst_22626 = (state_22669[(7)]);
var inst_22628 = cljs.core.chunked_seq_QMARK_(inst_22626);
var state_22669__$1 = state_22669;
if(inst_22628){
var statearr_22712_23747 = state_22669__$1;
(statearr_22712_23747[(1)] = (17));

} else {
var statearr_22713_23748 = state_22669__$1;
(statearr_22713_23748[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22674 === (16))){
var inst_22649 = (state_22669[(2)]);
var state_22669__$1 = state_22669;
var statearr_22714_23749 = state_22669__$1;
(statearr_22714_23749[(2)] = inst_22649);

(statearr_22714_23749[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22674 === (10))){
var inst_22611 = (state_22669[(8)]);
var inst_22613 = (state_22669[(12)]);
var inst_22619 = cljs.core._nth(inst_22611,inst_22613);
var state_22669__$1 = state_22669;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22669__$1,(13),out,inst_22619);
} else {
if((state_val_22674 === (18))){
var inst_22626 = (state_22669[(7)]);
var inst_22636 = cljs.core.first(inst_22626);
var state_22669__$1 = state_22669;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22669__$1,(20),out,inst_22636);
} else {
if((state_val_22674 === (8))){
var inst_22612 = (state_22669[(11)]);
var inst_22613 = (state_22669[(12)]);
var inst_22615 = (inst_22613 < inst_22612);
var inst_22616 = inst_22615;
var state_22669__$1 = state_22669;
if(cljs.core.truth_(inst_22616)){
var statearr_22715_23750 = state_22669__$1;
(statearr_22715_23750[(1)] = (10));

} else {
var statearr_22717_23751 = state_22669__$1;
(statearr_22717_23751[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19415__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19415__auto____0 = (function (){
var statearr_22718 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22718[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19415__auto__);

(statearr_22718[(1)] = (1));

return statearr_22718;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19415__auto____1 = (function (state_22669){
while(true){
var ret_value__19416__auto__ = (function (){try{while(true){
var result__19417__auto__ = switch__19413__auto__(state_22669);
if(cljs.core.keyword_identical_QMARK_(result__19417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19417__auto__;
}
break;
}
}catch (e22719){var ex__19418__auto__ = e22719;
var statearr_22720_23752 = state_22669;
(statearr_22720_23752[(2)] = ex__19418__auto__);


if(cljs.core.seq((state_22669[(4)]))){
var statearr_22721_23753 = state_22669;
(statearr_22721_23753[(1)] = cljs.core.first((state_22669[(4)])));

} else {
throw ex__19418__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23754 = state_22669;
state_22669 = G__23754;
continue;
} else {
return ret_value__19416__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19415__auto__ = function(state_22669){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19415__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19415__auto____1.call(this,state_22669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19415__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19415__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19415__auto__;
})()
})();
var state__19756__auto__ = (function (){var statearr_22722 = f__19755__auto__();
(statearr_22722[(6)] = c__19754__auto__);

return statearr_22722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19756__auto__);
}));

return c__19754__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__22724 = arguments.length;
switch (G__22724) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__22727 = arguments.length;
switch (G__22727) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__22730 = arguments.length;
switch (G__22730) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__19754__auto___23758 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19755__auto__ = (function (){var switch__19413__auto__ = (function (state_22755){
var state_val_22756 = (state_22755[(1)]);
if((state_val_22756 === (7))){
var inst_22750 = (state_22755[(2)]);
var state_22755__$1 = state_22755;
var statearr_22757_23761 = state_22755__$1;
(statearr_22757_23761[(2)] = inst_22750);

(statearr_22757_23761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22756 === (1))){
var inst_22731 = null;
var state_22755__$1 = (function (){var statearr_22758 = state_22755;
(statearr_22758[(7)] = inst_22731);

return statearr_22758;
})();
var statearr_22759_23763 = state_22755__$1;
(statearr_22759_23763[(2)] = null);

(statearr_22759_23763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22756 === (4))){
var inst_22734 = (state_22755[(8)]);
var inst_22734__$1 = (state_22755[(2)]);
var inst_22735 = (inst_22734__$1 == null);
var inst_22736 = cljs.core.not(inst_22735);
var state_22755__$1 = (function (){var statearr_22760 = state_22755;
(statearr_22760[(8)] = inst_22734__$1);

return statearr_22760;
})();
if(inst_22736){
var statearr_22761_23764 = state_22755__$1;
(statearr_22761_23764[(1)] = (5));

} else {
var statearr_22762_23765 = state_22755__$1;
(statearr_22762_23765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22756 === (6))){
var state_22755__$1 = state_22755;
var statearr_22763_23766 = state_22755__$1;
(statearr_22763_23766[(2)] = null);

(statearr_22763_23766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22756 === (3))){
var inst_22752 = (state_22755[(2)]);
var inst_22753 = cljs.core.async.close_BANG_(out);
var state_22755__$1 = (function (){var statearr_22764 = state_22755;
(statearr_22764[(9)] = inst_22752);

return statearr_22764;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22755__$1,inst_22753);
} else {
if((state_val_22756 === (2))){
var state_22755__$1 = state_22755;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22755__$1,(4),ch);
} else {
if((state_val_22756 === (11))){
var inst_22734 = (state_22755[(8)]);
var inst_22743 = (state_22755[(2)]);
var inst_22731 = inst_22734;
var state_22755__$1 = (function (){var statearr_22765 = state_22755;
(statearr_22765[(10)] = inst_22743);

(statearr_22765[(7)] = inst_22731);

return statearr_22765;
})();
var statearr_22766_23772 = state_22755__$1;
(statearr_22766_23772[(2)] = null);

(statearr_22766_23772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22756 === (9))){
var inst_22734 = (state_22755[(8)]);
var state_22755__$1 = state_22755;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22755__$1,(11),out,inst_22734);
} else {
if((state_val_22756 === (5))){
var inst_22734 = (state_22755[(8)]);
var inst_22731 = (state_22755[(7)]);
var inst_22738 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22734,inst_22731);
var state_22755__$1 = state_22755;
if(inst_22738){
var statearr_22768_23776 = state_22755__$1;
(statearr_22768_23776[(1)] = (8));

} else {
var statearr_22769_23777 = state_22755__$1;
(statearr_22769_23777[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22756 === (10))){
var inst_22747 = (state_22755[(2)]);
var state_22755__$1 = state_22755;
var statearr_22771_23778 = state_22755__$1;
(statearr_22771_23778[(2)] = inst_22747);

(statearr_22771_23778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22756 === (8))){
var inst_22731 = (state_22755[(7)]);
var tmp22767 = inst_22731;
var inst_22731__$1 = tmp22767;
var state_22755__$1 = (function (){var statearr_22772 = state_22755;
(statearr_22772[(7)] = inst_22731__$1);

return statearr_22772;
})();
var statearr_22773_23779 = state_22755__$1;
(statearr_22773_23779[(2)] = null);

(statearr_22773_23779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__19415__auto__ = null;
var cljs$core$async$state_machine__19415__auto____0 = (function (){
var statearr_22774 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22774[(0)] = cljs$core$async$state_machine__19415__auto__);

(statearr_22774[(1)] = (1));

return statearr_22774;
});
var cljs$core$async$state_machine__19415__auto____1 = (function (state_22755){
while(true){
var ret_value__19416__auto__ = (function (){try{while(true){
var result__19417__auto__ = switch__19413__auto__(state_22755);
if(cljs.core.keyword_identical_QMARK_(result__19417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19417__auto__;
}
break;
}
}catch (e22775){var ex__19418__auto__ = e22775;
var statearr_22776_23781 = state_22755;
(statearr_22776_23781[(2)] = ex__19418__auto__);


if(cljs.core.seq((state_22755[(4)]))){
var statearr_22777_23782 = state_22755;
(statearr_22777_23782[(1)] = cljs.core.first((state_22755[(4)])));

} else {
throw ex__19418__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23783 = state_22755;
state_22755 = G__23783;
continue;
} else {
return ret_value__19416__auto__;
}
break;
}
});
cljs$core$async$state_machine__19415__auto__ = function(state_22755){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19415__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19415__auto____1.call(this,state_22755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19415__auto____0;
cljs$core$async$state_machine__19415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19415__auto____1;
return cljs$core$async$state_machine__19415__auto__;
})()
})();
var state__19756__auto__ = (function (){var statearr_22778 = f__19755__auto__();
(statearr_22778[(6)] = c__19754__auto___23758);

return statearr_22778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19756__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__22780 = arguments.length;
switch (G__22780) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__19754__auto___23786 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19755__auto__ = (function (){var switch__19413__auto__ = (function (state_22819){
var state_val_22820 = (state_22819[(1)]);
if((state_val_22820 === (7))){
var inst_22815 = (state_22819[(2)]);
var state_22819__$1 = state_22819;
var statearr_22822_23787 = state_22819__$1;
(statearr_22822_23787[(2)] = inst_22815);

(statearr_22822_23787[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22820 === (1))){
var inst_22782 = (new Array(n));
var inst_22783 = inst_22782;
var inst_22784 = (0);
var state_22819__$1 = (function (){var statearr_22823 = state_22819;
(statearr_22823[(7)] = inst_22783);

(statearr_22823[(8)] = inst_22784);

return statearr_22823;
})();
var statearr_22824_23788 = state_22819__$1;
(statearr_22824_23788[(2)] = null);

(statearr_22824_23788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22820 === (4))){
var inst_22787 = (state_22819[(9)]);
var inst_22787__$1 = (state_22819[(2)]);
var inst_22788 = (inst_22787__$1 == null);
var inst_22789 = cljs.core.not(inst_22788);
var state_22819__$1 = (function (){var statearr_22825 = state_22819;
(statearr_22825[(9)] = inst_22787__$1);

return statearr_22825;
})();
if(inst_22789){
var statearr_22826_23797 = state_22819__$1;
(statearr_22826_23797[(1)] = (5));

} else {
var statearr_22827_23798 = state_22819__$1;
(statearr_22827_23798[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22820 === (15))){
var inst_22809 = (state_22819[(2)]);
var state_22819__$1 = state_22819;
var statearr_22829_23802 = state_22819__$1;
(statearr_22829_23802[(2)] = inst_22809);

(statearr_22829_23802[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22820 === (13))){
var state_22819__$1 = state_22819;
var statearr_22830_23803 = state_22819__$1;
(statearr_22830_23803[(2)] = null);

(statearr_22830_23803[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22820 === (6))){
var inst_22784 = (state_22819[(8)]);
var inst_22805 = (inst_22784 > (0));
var state_22819__$1 = state_22819;
if(cljs.core.truth_(inst_22805)){
var statearr_22831_23804 = state_22819__$1;
(statearr_22831_23804[(1)] = (12));

} else {
var statearr_22832_23805 = state_22819__$1;
(statearr_22832_23805[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22820 === (3))){
var inst_22817 = (state_22819[(2)]);
var state_22819__$1 = state_22819;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22819__$1,inst_22817);
} else {
if((state_val_22820 === (12))){
var inst_22783 = (state_22819[(7)]);
var inst_22807 = cljs.core.vec(inst_22783);
var state_22819__$1 = state_22819;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22819__$1,(15),out,inst_22807);
} else {
if((state_val_22820 === (2))){
var state_22819__$1 = state_22819;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22819__$1,(4),ch);
} else {
if((state_val_22820 === (11))){
var inst_22799 = (state_22819[(2)]);
var inst_22800 = (new Array(n));
var inst_22783 = inst_22800;
var inst_22784 = (0);
var state_22819__$1 = (function (){var statearr_22834 = state_22819;
(statearr_22834[(10)] = inst_22799);

(statearr_22834[(7)] = inst_22783);

(statearr_22834[(8)] = inst_22784);

return statearr_22834;
})();
var statearr_22835_23809 = state_22819__$1;
(statearr_22835_23809[(2)] = null);

(statearr_22835_23809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22820 === (9))){
var inst_22783 = (state_22819[(7)]);
var inst_22797 = cljs.core.vec(inst_22783);
var state_22819__$1 = state_22819;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22819__$1,(11),out,inst_22797);
} else {
if((state_val_22820 === (5))){
var inst_22787 = (state_22819[(9)]);
var inst_22783 = (state_22819[(7)]);
var inst_22792 = (state_22819[(11)]);
var inst_22784 = (state_22819[(8)]);
var inst_22791 = (inst_22783[inst_22784] = inst_22787);
var inst_22792__$1 = (inst_22784 + (1));
var inst_22793 = (inst_22792__$1 < n);
var state_22819__$1 = (function (){var statearr_22836 = state_22819;
(statearr_22836[(11)] = inst_22792__$1);

(statearr_22836[(12)] = inst_22791);

return statearr_22836;
})();
if(cljs.core.truth_(inst_22793)){
var statearr_22837_23815 = state_22819__$1;
(statearr_22837_23815[(1)] = (8));

} else {
var statearr_22838_23817 = state_22819__$1;
(statearr_22838_23817[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22820 === (14))){
var inst_22812 = (state_22819[(2)]);
var inst_22813 = cljs.core.async.close_BANG_(out);
var state_22819__$1 = (function (){var statearr_22841 = state_22819;
(statearr_22841[(13)] = inst_22812);

return statearr_22841;
})();
var statearr_22842_23821 = state_22819__$1;
(statearr_22842_23821[(2)] = inst_22813);

(statearr_22842_23821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22820 === (10))){
var inst_22803 = (state_22819[(2)]);
var state_22819__$1 = state_22819;
var statearr_22843_23822 = state_22819__$1;
(statearr_22843_23822[(2)] = inst_22803);

(statearr_22843_23822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22820 === (8))){
var inst_22783 = (state_22819[(7)]);
var inst_22792 = (state_22819[(11)]);
var tmp22839 = inst_22783;
var inst_22783__$1 = tmp22839;
var inst_22784 = inst_22792;
var state_22819__$1 = (function (){var statearr_22844 = state_22819;
(statearr_22844[(7)] = inst_22783__$1);

(statearr_22844[(8)] = inst_22784);

return statearr_22844;
})();
var statearr_22845_23823 = state_22819__$1;
(statearr_22845_23823[(2)] = null);

(statearr_22845_23823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__19415__auto__ = null;
var cljs$core$async$state_machine__19415__auto____0 = (function (){
var statearr_22848 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22848[(0)] = cljs$core$async$state_machine__19415__auto__);

(statearr_22848[(1)] = (1));

return statearr_22848;
});
var cljs$core$async$state_machine__19415__auto____1 = (function (state_22819){
while(true){
var ret_value__19416__auto__ = (function (){try{while(true){
var result__19417__auto__ = switch__19413__auto__(state_22819);
if(cljs.core.keyword_identical_QMARK_(result__19417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19417__auto__;
}
break;
}
}catch (e22849){var ex__19418__auto__ = e22849;
var statearr_22850_23824 = state_22819;
(statearr_22850_23824[(2)] = ex__19418__auto__);


if(cljs.core.seq((state_22819[(4)]))){
var statearr_22851_23825 = state_22819;
(statearr_22851_23825[(1)] = cljs.core.first((state_22819[(4)])));

} else {
throw ex__19418__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23826 = state_22819;
state_22819 = G__23826;
continue;
} else {
return ret_value__19416__auto__;
}
break;
}
});
cljs$core$async$state_machine__19415__auto__ = function(state_22819){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19415__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19415__auto____1.call(this,state_22819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19415__auto____0;
cljs$core$async$state_machine__19415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19415__auto____1;
return cljs$core$async$state_machine__19415__auto__;
})()
})();
var state__19756__auto__ = (function (){var statearr_22852 = f__19755__auto__();
(statearr_22852[(6)] = c__19754__auto___23786);

return statearr_22852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19756__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__22856 = arguments.length;
switch (G__22856) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__19754__auto___23828 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19755__auto__ = (function (){var switch__19413__auto__ = (function (state_22901){
var state_val_22902 = (state_22901[(1)]);
if((state_val_22902 === (7))){
var inst_22897 = (state_22901[(2)]);
var state_22901__$1 = state_22901;
var statearr_22903_23829 = state_22901__$1;
(statearr_22903_23829[(2)] = inst_22897);

(statearr_22903_23829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22902 === (1))){
var inst_22857 = [];
var inst_22858 = inst_22857;
var inst_22859 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_22901__$1 = (function (){var statearr_22905 = state_22901;
(statearr_22905[(7)] = inst_22859);

(statearr_22905[(8)] = inst_22858);

return statearr_22905;
})();
var statearr_22907_23830 = state_22901__$1;
(statearr_22907_23830[(2)] = null);

(statearr_22907_23830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22902 === (4))){
var inst_22862 = (state_22901[(9)]);
var inst_22862__$1 = (state_22901[(2)]);
var inst_22863 = (inst_22862__$1 == null);
var inst_22864 = cljs.core.not(inst_22863);
var state_22901__$1 = (function (){var statearr_22908 = state_22901;
(statearr_22908[(9)] = inst_22862__$1);

return statearr_22908;
})();
if(inst_22864){
var statearr_22909_23833 = state_22901__$1;
(statearr_22909_23833[(1)] = (5));

} else {
var statearr_22910_23834 = state_22901__$1;
(statearr_22910_23834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22902 === (15))){
var inst_22858 = (state_22901[(8)]);
var inst_22889 = cljs.core.vec(inst_22858);
var state_22901__$1 = state_22901;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22901__$1,(18),out,inst_22889);
} else {
if((state_val_22902 === (13))){
var inst_22884 = (state_22901[(2)]);
var state_22901__$1 = state_22901;
var statearr_22911_23835 = state_22901__$1;
(statearr_22911_23835[(2)] = inst_22884);

(statearr_22911_23835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22902 === (6))){
var inst_22858 = (state_22901[(8)]);
var inst_22886 = inst_22858.length;
var inst_22887 = (inst_22886 > (0));
var state_22901__$1 = state_22901;
if(cljs.core.truth_(inst_22887)){
var statearr_22912_23836 = state_22901__$1;
(statearr_22912_23836[(1)] = (15));

} else {
var statearr_22913_23837 = state_22901__$1;
(statearr_22913_23837[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22902 === (17))){
var inst_22894 = (state_22901[(2)]);
var inst_22895 = cljs.core.async.close_BANG_(out);
var state_22901__$1 = (function (){var statearr_22914 = state_22901;
(statearr_22914[(10)] = inst_22894);

return statearr_22914;
})();
var statearr_22915_23838 = state_22901__$1;
(statearr_22915_23838[(2)] = inst_22895);

(statearr_22915_23838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22902 === (3))){
var inst_22899 = (state_22901[(2)]);
var state_22901__$1 = state_22901;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22901__$1,inst_22899);
} else {
if((state_val_22902 === (12))){
var inst_22858 = (state_22901[(8)]);
var inst_22877 = cljs.core.vec(inst_22858);
var state_22901__$1 = state_22901;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22901__$1,(14),out,inst_22877);
} else {
if((state_val_22902 === (2))){
var state_22901__$1 = state_22901;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22901__$1,(4),ch);
} else {
if((state_val_22902 === (11))){
var inst_22866 = (state_22901[(11)]);
var inst_22862 = (state_22901[(9)]);
var inst_22858 = (state_22901[(8)]);
var inst_22874 = inst_22858.push(inst_22862);
var tmp22918 = inst_22858;
var inst_22858__$1 = tmp22918;
var inst_22859 = inst_22866;
var state_22901__$1 = (function (){var statearr_22926 = state_22901;
(statearr_22926[(7)] = inst_22859);

(statearr_22926[(12)] = inst_22874);

(statearr_22926[(8)] = inst_22858__$1);

return statearr_22926;
})();
var statearr_22927_23842 = state_22901__$1;
(statearr_22927_23842[(2)] = null);

(statearr_22927_23842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22902 === (9))){
var inst_22859 = (state_22901[(7)]);
var inst_22870 = cljs.core.keyword_identical_QMARK_(inst_22859,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_22901__$1 = state_22901;
var statearr_22928_23843 = state_22901__$1;
(statearr_22928_23843[(2)] = inst_22870);

(statearr_22928_23843[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22902 === (5))){
var inst_22866 = (state_22901[(11)]);
var inst_22859 = (state_22901[(7)]);
var inst_22862 = (state_22901[(9)]);
var inst_22867 = (state_22901[(13)]);
var inst_22866__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_22862) : f.call(null,inst_22862));
var inst_22867__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22866__$1,inst_22859);
var state_22901__$1 = (function (){var statearr_22930 = state_22901;
(statearr_22930[(11)] = inst_22866__$1);

(statearr_22930[(13)] = inst_22867__$1);

return statearr_22930;
})();
if(inst_22867__$1){
var statearr_22934_23844 = state_22901__$1;
(statearr_22934_23844[(1)] = (8));

} else {
var statearr_22935_23845 = state_22901__$1;
(statearr_22935_23845[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22902 === (14))){
var inst_22866 = (state_22901[(11)]);
var inst_22862 = (state_22901[(9)]);
var inst_22879 = (state_22901[(2)]);
var inst_22880 = [];
var inst_22881 = inst_22880.push(inst_22862);
var inst_22858 = inst_22880;
var inst_22859 = inst_22866;
var state_22901__$1 = (function (){var statearr_22937 = state_22901;
(statearr_22937[(14)] = inst_22881);

(statearr_22937[(7)] = inst_22859);

(statearr_22937[(8)] = inst_22858);

(statearr_22937[(15)] = inst_22879);

return statearr_22937;
})();
var statearr_22941_23846 = state_22901__$1;
(statearr_22941_23846[(2)] = null);

(statearr_22941_23846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22902 === (16))){
var state_22901__$1 = state_22901;
var statearr_22942_23847 = state_22901__$1;
(statearr_22942_23847[(2)] = null);

(statearr_22942_23847[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22902 === (10))){
var inst_22872 = (state_22901[(2)]);
var state_22901__$1 = state_22901;
if(cljs.core.truth_(inst_22872)){
var statearr_22944_23848 = state_22901__$1;
(statearr_22944_23848[(1)] = (11));

} else {
var statearr_22947_23849 = state_22901__$1;
(statearr_22947_23849[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22902 === (18))){
var inst_22891 = (state_22901[(2)]);
var state_22901__$1 = state_22901;
var statearr_22950_23850 = state_22901__$1;
(statearr_22950_23850[(2)] = inst_22891);

(statearr_22950_23850[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22902 === (8))){
var inst_22867 = (state_22901[(13)]);
var state_22901__$1 = state_22901;
var statearr_22951_23851 = state_22901__$1;
(statearr_22951_23851[(2)] = inst_22867);

(statearr_22951_23851[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__19415__auto__ = null;
var cljs$core$async$state_machine__19415__auto____0 = (function (){
var statearr_22952 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22952[(0)] = cljs$core$async$state_machine__19415__auto__);

(statearr_22952[(1)] = (1));

return statearr_22952;
});
var cljs$core$async$state_machine__19415__auto____1 = (function (state_22901){
while(true){
var ret_value__19416__auto__ = (function (){try{while(true){
var result__19417__auto__ = switch__19413__auto__(state_22901);
if(cljs.core.keyword_identical_QMARK_(result__19417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19417__auto__;
}
break;
}
}catch (e22956){var ex__19418__auto__ = e22956;
var statearr_22957_23852 = state_22901;
(statearr_22957_23852[(2)] = ex__19418__auto__);


if(cljs.core.seq((state_22901[(4)]))){
var statearr_22959_23859 = state_22901;
(statearr_22959_23859[(1)] = cljs.core.first((state_22901[(4)])));

} else {
throw ex__19418__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23861 = state_22901;
state_22901 = G__23861;
continue;
} else {
return ret_value__19416__auto__;
}
break;
}
});
cljs$core$async$state_machine__19415__auto__ = function(state_22901){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19415__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19415__auto____1.call(this,state_22901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19415__auto____0;
cljs$core$async$state_machine__19415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19415__auto____1;
return cljs$core$async$state_machine__19415__auto__;
})()
})();
var state__19756__auto__ = (function (){var statearr_22963 = f__19755__auto__();
(statearr_22963[(6)] = c__19754__auto___23828);

return statearr_22963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19756__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
