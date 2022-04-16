goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26243 = arguments.length;
var i__4865__auto___26244 = (0);
while(true){
if((i__4865__auto___26244 < len__4864__auto___26243)){
args__4870__auto__.push((arguments[i__4865__auto___26244]));

var G__26245 = (i__4865__auto___26244 + (1));
i__4865__auto___26244 = G__26245;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq25961){
var G__25962 = cljs.core.first(seq25961);
var seq25961__$1 = cljs.core.next(seq25961);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25962,seq25961__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__25964 = cljs.core.seq(sources);
var chunk__25965 = null;
var count__25966 = (0);
var i__25967 = (0);
while(true){
if((i__25967 < count__25966)){
var map__25973 = chunk__25965.cljs$core$IIndexed$_nth$arity$2(null,i__25967);
var map__25973__$1 = cljs.core.__destructure_map(map__25973);
var src = map__25973__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25973__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25973__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25973__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25973__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e25974){var e_26246 = e25974;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_26246);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_26246.message)].join('')));
}

var G__26247 = seq__25964;
var G__26248 = chunk__25965;
var G__26249 = count__25966;
var G__26250 = (i__25967 + (1));
seq__25964 = G__26247;
chunk__25965 = G__26248;
count__25966 = G__26249;
i__25967 = G__26250;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__25964);
if(temp__5753__auto__){
var seq__25964__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25964__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__25964__$1);
var G__26251 = cljs.core.chunk_rest(seq__25964__$1);
var G__26252 = c__4679__auto__;
var G__26253 = cljs.core.count(c__4679__auto__);
var G__26254 = (0);
seq__25964 = G__26251;
chunk__25965 = G__26252;
count__25966 = G__26253;
i__25967 = G__26254;
continue;
} else {
var map__25975 = cljs.core.first(seq__25964__$1);
var map__25975__$1 = cljs.core.__destructure_map(map__25975);
var src = map__25975__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25975__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25975__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25975__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25975__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e25976){var e_26255 = e25976;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_26255);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_26255.message)].join('')));
}

var G__26256 = cljs.core.next(seq__25964__$1);
var G__26257 = null;
var G__26258 = (0);
var G__26259 = (0);
seq__25964 = G__26256;
chunk__25965 = G__26257;
count__25966 = G__26258;
i__25967 = G__26259;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__25977 = cljs.core.seq(js_requires);
var chunk__25978 = null;
var count__25979 = (0);
var i__25980 = (0);
while(true){
if((i__25980 < count__25979)){
var js_ns = chunk__25978.cljs$core$IIndexed$_nth$arity$2(null,i__25980);
var require_str_26260 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_26260);


var G__26261 = seq__25977;
var G__26262 = chunk__25978;
var G__26263 = count__25979;
var G__26264 = (i__25980 + (1));
seq__25977 = G__26261;
chunk__25978 = G__26262;
count__25979 = G__26263;
i__25980 = G__26264;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__25977);
if(temp__5753__auto__){
var seq__25977__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25977__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__25977__$1);
var G__26265 = cljs.core.chunk_rest(seq__25977__$1);
var G__26266 = c__4679__auto__;
var G__26267 = cljs.core.count(c__4679__auto__);
var G__26268 = (0);
seq__25977 = G__26265;
chunk__25978 = G__26266;
count__25979 = G__26267;
i__25980 = G__26268;
continue;
} else {
var js_ns = cljs.core.first(seq__25977__$1);
var require_str_26269 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_26269);


var G__26270 = cljs.core.next(seq__25977__$1);
var G__26271 = null;
var G__26272 = (0);
var G__26273 = (0);
seq__25977 = G__26270;
chunk__25978 = G__26271;
count__25979 = G__26272;
i__25980 = G__26273;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__25982){
var map__25983 = p__25982;
var map__25983__$1 = cljs.core.__destructure_map(map__25983);
var msg = map__25983__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25983__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25983__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__25984(s__25985){
return (new cljs.core.LazySeq(null,(function (){
var s__25985__$1 = s__25985;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__25985__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__25990 = cljs.core.first(xs__6308__auto__);
var map__25990__$1 = cljs.core.__destructure_map(map__25990);
var src = map__25990__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25990__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25990__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__25985__$1,map__25990,map__25990__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__25983,map__25983__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__25984_$_iter__25986(s__25987){
return (new cljs.core.LazySeq(null,((function (s__25985__$1,map__25990,map__25990__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__25983,map__25983__$1,msg,info,reload_info){
return (function (){
var s__25987__$1 = s__25987;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__25987__$1);
if(temp__5753__auto____$1){
var s__25987__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__25987__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__25987__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__25989 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__25988 = (0);
while(true){
if((i__25988 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__25988);
cljs.core.chunk_append(b__25989,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__26274 = (i__25988 + (1));
i__25988 = G__26274;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25989),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__25984_$_iter__25986(cljs.core.chunk_rest(s__25987__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25989),null);
}
} else {
var warning = cljs.core.first(s__25987__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__25984_$_iter__25986(cljs.core.rest(s__25987__$2)));
}
} else {
return null;
}
break;
}
});})(s__25985__$1,map__25990,map__25990__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__25983,map__25983__$1,msg,info,reload_info))
,null,null));
});})(s__25985__$1,map__25990,map__25990__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__25983,map__25983__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__25984(cljs.core.rest(s__25985__$1)));
} else {
var G__26275 = cljs.core.rest(s__25985__$1);
s__25985__$1 = G__26275;
continue;
}
} else {
var G__26276 = cljs.core.rest(s__25985__$1);
s__25985__$1 = G__26276;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__25991_26277 = cljs.core.seq(warnings);
var chunk__25992_26278 = null;
var count__25993_26279 = (0);
var i__25994_26280 = (0);
while(true){
if((i__25994_26280 < count__25993_26279)){
var map__25997_26281 = chunk__25992_26278.cljs$core$IIndexed$_nth$arity$2(null,i__25994_26280);
var map__25997_26282__$1 = cljs.core.__destructure_map(map__25997_26281);
var w_26283 = map__25997_26282__$1;
var msg_26284__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25997_26282__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_26285 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25997_26282__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_26286 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25997_26282__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_26287 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25997_26282__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_26287)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_26285),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_26286),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_26284__$1)].join(''));


var G__26288 = seq__25991_26277;
var G__26289 = chunk__25992_26278;
var G__26290 = count__25993_26279;
var G__26291 = (i__25994_26280 + (1));
seq__25991_26277 = G__26288;
chunk__25992_26278 = G__26289;
count__25993_26279 = G__26290;
i__25994_26280 = G__26291;
continue;
} else {
var temp__5753__auto___26292 = cljs.core.seq(seq__25991_26277);
if(temp__5753__auto___26292){
var seq__25991_26293__$1 = temp__5753__auto___26292;
if(cljs.core.chunked_seq_QMARK_(seq__25991_26293__$1)){
var c__4679__auto___26294 = cljs.core.chunk_first(seq__25991_26293__$1);
var G__26295 = cljs.core.chunk_rest(seq__25991_26293__$1);
var G__26296 = c__4679__auto___26294;
var G__26297 = cljs.core.count(c__4679__auto___26294);
var G__26298 = (0);
seq__25991_26277 = G__26295;
chunk__25992_26278 = G__26296;
count__25993_26279 = G__26297;
i__25994_26280 = G__26298;
continue;
} else {
var map__25998_26299 = cljs.core.first(seq__25991_26293__$1);
var map__25998_26300__$1 = cljs.core.__destructure_map(map__25998_26299);
var w_26301 = map__25998_26300__$1;
var msg_26302__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25998_26300__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_26303 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25998_26300__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_26304 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25998_26300__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_26305 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25998_26300__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_26305)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_26303),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_26304),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_26302__$1)].join(''));


var G__26306 = cljs.core.next(seq__25991_26293__$1);
var G__26307 = null;
var G__26308 = (0);
var G__26309 = (0);
seq__25991_26277 = G__26306;
chunk__25992_26278 = G__26307;
count__25993_26279 = G__26308;
i__25994_26280 = G__26309;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__25981_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__25981_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__25999){
var map__26000 = p__25999;
var map__26000__$1 = cljs.core.__destructure_map(map__26000);
var msg = map__26000__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26000__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26000__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__26001 = cljs.core.seq(updates);
var chunk__26003 = null;
var count__26004 = (0);
var i__26005 = (0);
while(true){
if((i__26005 < count__26004)){
var path = chunk__26003.cljs$core$IIndexed$_nth$arity$2(null,i__26005);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__26115_26310 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__26119_26311 = null;
var count__26120_26312 = (0);
var i__26121_26313 = (0);
while(true){
if((i__26121_26313 < count__26120_26312)){
var node_26314 = chunk__26119_26311.cljs$core$IIndexed$_nth$arity$2(null,i__26121_26313);
if(cljs.core.not(node_26314.shadow$old)){
var path_match_26315 = shadow.cljs.devtools.client.browser.match_paths(node_26314.getAttribute("href"),path);
if(cljs.core.truth_(path_match_26315)){
var new_link_26316 = (function (){var G__26147 = node_26314.cloneNode(true);
G__26147.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_26315),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__26147;
})();
(node_26314.shadow$old = true);

(new_link_26316.onload = ((function (seq__26115_26310,chunk__26119_26311,count__26120_26312,i__26121_26313,seq__26001,chunk__26003,count__26004,i__26005,new_link_26316,path_match_26315,node_26314,path,map__26000,map__26000__$1,msg,updates,reload_info){
return (function (e){
var seq__26148_26317 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__26150_26318 = null;
var count__26151_26319 = (0);
var i__26152_26320 = (0);
while(true){
if((i__26152_26320 < count__26151_26319)){
var map__26156_26321 = chunk__26150_26318.cljs$core$IIndexed$_nth$arity$2(null,i__26152_26320);
var map__26156_26322__$1 = cljs.core.__destructure_map(map__26156_26321);
var task_26323 = map__26156_26322__$1;
var fn_str_26324 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26156_26322__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_26325 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26156_26322__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_26326 = goog.getObjectByName(fn_str_26324,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_26325)].join(''));

(fn_obj_26326.cljs$core$IFn$_invoke$arity$2 ? fn_obj_26326.cljs$core$IFn$_invoke$arity$2(path,new_link_26316) : fn_obj_26326.call(null,path,new_link_26316));


var G__26327 = seq__26148_26317;
var G__26328 = chunk__26150_26318;
var G__26329 = count__26151_26319;
var G__26330 = (i__26152_26320 + (1));
seq__26148_26317 = G__26327;
chunk__26150_26318 = G__26328;
count__26151_26319 = G__26329;
i__26152_26320 = G__26330;
continue;
} else {
var temp__5753__auto___26331 = cljs.core.seq(seq__26148_26317);
if(temp__5753__auto___26331){
var seq__26148_26332__$1 = temp__5753__auto___26331;
if(cljs.core.chunked_seq_QMARK_(seq__26148_26332__$1)){
var c__4679__auto___26333 = cljs.core.chunk_first(seq__26148_26332__$1);
var G__26334 = cljs.core.chunk_rest(seq__26148_26332__$1);
var G__26335 = c__4679__auto___26333;
var G__26336 = cljs.core.count(c__4679__auto___26333);
var G__26337 = (0);
seq__26148_26317 = G__26334;
chunk__26150_26318 = G__26335;
count__26151_26319 = G__26336;
i__26152_26320 = G__26337;
continue;
} else {
var map__26157_26338 = cljs.core.first(seq__26148_26332__$1);
var map__26157_26339__$1 = cljs.core.__destructure_map(map__26157_26338);
var task_26340 = map__26157_26339__$1;
var fn_str_26341 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26157_26339__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_26342 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26157_26339__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_26343 = goog.getObjectByName(fn_str_26341,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_26342)].join(''));

(fn_obj_26343.cljs$core$IFn$_invoke$arity$2 ? fn_obj_26343.cljs$core$IFn$_invoke$arity$2(path,new_link_26316) : fn_obj_26343.call(null,path,new_link_26316));


var G__26344 = cljs.core.next(seq__26148_26332__$1);
var G__26345 = null;
var G__26346 = (0);
var G__26347 = (0);
seq__26148_26317 = G__26344;
chunk__26150_26318 = G__26345;
count__26151_26319 = G__26346;
i__26152_26320 = G__26347;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_26314);
});})(seq__26115_26310,chunk__26119_26311,count__26120_26312,i__26121_26313,seq__26001,chunk__26003,count__26004,i__26005,new_link_26316,path_match_26315,node_26314,path,map__26000,map__26000__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_26315], 0));

goog.dom.insertSiblingAfter(new_link_26316,node_26314);


var G__26348 = seq__26115_26310;
var G__26349 = chunk__26119_26311;
var G__26350 = count__26120_26312;
var G__26351 = (i__26121_26313 + (1));
seq__26115_26310 = G__26348;
chunk__26119_26311 = G__26349;
count__26120_26312 = G__26350;
i__26121_26313 = G__26351;
continue;
} else {
var G__26352 = seq__26115_26310;
var G__26353 = chunk__26119_26311;
var G__26354 = count__26120_26312;
var G__26355 = (i__26121_26313 + (1));
seq__26115_26310 = G__26352;
chunk__26119_26311 = G__26353;
count__26120_26312 = G__26354;
i__26121_26313 = G__26355;
continue;
}
} else {
var G__26356 = seq__26115_26310;
var G__26357 = chunk__26119_26311;
var G__26358 = count__26120_26312;
var G__26359 = (i__26121_26313 + (1));
seq__26115_26310 = G__26356;
chunk__26119_26311 = G__26357;
count__26120_26312 = G__26358;
i__26121_26313 = G__26359;
continue;
}
} else {
var temp__5753__auto___26360 = cljs.core.seq(seq__26115_26310);
if(temp__5753__auto___26360){
var seq__26115_26361__$1 = temp__5753__auto___26360;
if(cljs.core.chunked_seq_QMARK_(seq__26115_26361__$1)){
var c__4679__auto___26362 = cljs.core.chunk_first(seq__26115_26361__$1);
var G__26363 = cljs.core.chunk_rest(seq__26115_26361__$1);
var G__26364 = c__4679__auto___26362;
var G__26365 = cljs.core.count(c__4679__auto___26362);
var G__26366 = (0);
seq__26115_26310 = G__26363;
chunk__26119_26311 = G__26364;
count__26120_26312 = G__26365;
i__26121_26313 = G__26366;
continue;
} else {
var node_26367 = cljs.core.first(seq__26115_26361__$1);
if(cljs.core.not(node_26367.shadow$old)){
var path_match_26368 = shadow.cljs.devtools.client.browser.match_paths(node_26367.getAttribute("href"),path);
if(cljs.core.truth_(path_match_26368)){
var new_link_26369 = (function (){var G__26158 = node_26367.cloneNode(true);
G__26158.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_26368),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__26158;
})();
(node_26367.shadow$old = true);

(new_link_26369.onload = ((function (seq__26115_26310,chunk__26119_26311,count__26120_26312,i__26121_26313,seq__26001,chunk__26003,count__26004,i__26005,new_link_26369,path_match_26368,node_26367,seq__26115_26361__$1,temp__5753__auto___26360,path,map__26000,map__26000__$1,msg,updates,reload_info){
return (function (e){
var seq__26159_26370 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__26161_26371 = null;
var count__26162_26372 = (0);
var i__26163_26373 = (0);
while(true){
if((i__26163_26373 < count__26162_26372)){
var map__26167_26374 = chunk__26161_26371.cljs$core$IIndexed$_nth$arity$2(null,i__26163_26373);
var map__26167_26375__$1 = cljs.core.__destructure_map(map__26167_26374);
var task_26376 = map__26167_26375__$1;
var fn_str_26377 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26167_26375__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_26378 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26167_26375__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_26379 = goog.getObjectByName(fn_str_26377,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_26378)].join(''));

(fn_obj_26379.cljs$core$IFn$_invoke$arity$2 ? fn_obj_26379.cljs$core$IFn$_invoke$arity$2(path,new_link_26369) : fn_obj_26379.call(null,path,new_link_26369));


var G__26380 = seq__26159_26370;
var G__26381 = chunk__26161_26371;
var G__26382 = count__26162_26372;
var G__26383 = (i__26163_26373 + (1));
seq__26159_26370 = G__26380;
chunk__26161_26371 = G__26381;
count__26162_26372 = G__26382;
i__26163_26373 = G__26383;
continue;
} else {
var temp__5753__auto___26384__$1 = cljs.core.seq(seq__26159_26370);
if(temp__5753__auto___26384__$1){
var seq__26159_26385__$1 = temp__5753__auto___26384__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26159_26385__$1)){
var c__4679__auto___26386 = cljs.core.chunk_first(seq__26159_26385__$1);
var G__26387 = cljs.core.chunk_rest(seq__26159_26385__$1);
var G__26388 = c__4679__auto___26386;
var G__26389 = cljs.core.count(c__4679__auto___26386);
var G__26390 = (0);
seq__26159_26370 = G__26387;
chunk__26161_26371 = G__26388;
count__26162_26372 = G__26389;
i__26163_26373 = G__26390;
continue;
} else {
var map__26168_26391 = cljs.core.first(seq__26159_26385__$1);
var map__26168_26392__$1 = cljs.core.__destructure_map(map__26168_26391);
var task_26393 = map__26168_26392__$1;
var fn_str_26394 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26168_26392__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_26395 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26168_26392__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_26396 = goog.getObjectByName(fn_str_26394,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_26395)].join(''));

(fn_obj_26396.cljs$core$IFn$_invoke$arity$2 ? fn_obj_26396.cljs$core$IFn$_invoke$arity$2(path,new_link_26369) : fn_obj_26396.call(null,path,new_link_26369));


var G__26397 = cljs.core.next(seq__26159_26385__$1);
var G__26398 = null;
var G__26399 = (0);
var G__26400 = (0);
seq__26159_26370 = G__26397;
chunk__26161_26371 = G__26398;
count__26162_26372 = G__26399;
i__26163_26373 = G__26400;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_26367);
});})(seq__26115_26310,chunk__26119_26311,count__26120_26312,i__26121_26313,seq__26001,chunk__26003,count__26004,i__26005,new_link_26369,path_match_26368,node_26367,seq__26115_26361__$1,temp__5753__auto___26360,path,map__26000,map__26000__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_26368], 0));

goog.dom.insertSiblingAfter(new_link_26369,node_26367);


var G__26401 = cljs.core.next(seq__26115_26361__$1);
var G__26402 = null;
var G__26403 = (0);
var G__26404 = (0);
seq__26115_26310 = G__26401;
chunk__26119_26311 = G__26402;
count__26120_26312 = G__26403;
i__26121_26313 = G__26404;
continue;
} else {
var G__26405 = cljs.core.next(seq__26115_26361__$1);
var G__26406 = null;
var G__26407 = (0);
var G__26408 = (0);
seq__26115_26310 = G__26405;
chunk__26119_26311 = G__26406;
count__26120_26312 = G__26407;
i__26121_26313 = G__26408;
continue;
}
} else {
var G__26409 = cljs.core.next(seq__26115_26361__$1);
var G__26410 = null;
var G__26411 = (0);
var G__26412 = (0);
seq__26115_26310 = G__26409;
chunk__26119_26311 = G__26410;
count__26120_26312 = G__26411;
i__26121_26313 = G__26412;
continue;
}
}
} else {
}
}
break;
}


var G__26413 = seq__26001;
var G__26414 = chunk__26003;
var G__26415 = count__26004;
var G__26416 = (i__26005 + (1));
seq__26001 = G__26413;
chunk__26003 = G__26414;
count__26004 = G__26415;
i__26005 = G__26416;
continue;
} else {
var G__26417 = seq__26001;
var G__26418 = chunk__26003;
var G__26419 = count__26004;
var G__26420 = (i__26005 + (1));
seq__26001 = G__26417;
chunk__26003 = G__26418;
count__26004 = G__26419;
i__26005 = G__26420;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__26001);
if(temp__5753__auto__){
var seq__26001__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26001__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__26001__$1);
var G__26421 = cljs.core.chunk_rest(seq__26001__$1);
var G__26422 = c__4679__auto__;
var G__26423 = cljs.core.count(c__4679__auto__);
var G__26424 = (0);
seq__26001 = G__26421;
chunk__26003 = G__26422;
count__26004 = G__26423;
i__26005 = G__26424;
continue;
} else {
var path = cljs.core.first(seq__26001__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__26169_26425 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__26173_26426 = null;
var count__26174_26427 = (0);
var i__26175_26428 = (0);
while(true){
if((i__26175_26428 < count__26174_26427)){
var node_26429 = chunk__26173_26426.cljs$core$IIndexed$_nth$arity$2(null,i__26175_26428);
if(cljs.core.not(node_26429.shadow$old)){
var path_match_26430 = shadow.cljs.devtools.client.browser.match_paths(node_26429.getAttribute("href"),path);
if(cljs.core.truth_(path_match_26430)){
var new_link_26431 = (function (){var G__26201 = node_26429.cloneNode(true);
G__26201.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_26430),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__26201;
})();
(node_26429.shadow$old = true);

(new_link_26431.onload = ((function (seq__26169_26425,chunk__26173_26426,count__26174_26427,i__26175_26428,seq__26001,chunk__26003,count__26004,i__26005,new_link_26431,path_match_26430,node_26429,path,seq__26001__$1,temp__5753__auto__,map__26000,map__26000__$1,msg,updates,reload_info){
return (function (e){
var seq__26202_26432 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__26204_26433 = null;
var count__26205_26434 = (0);
var i__26206_26435 = (0);
while(true){
if((i__26206_26435 < count__26205_26434)){
var map__26210_26436 = chunk__26204_26433.cljs$core$IIndexed$_nth$arity$2(null,i__26206_26435);
var map__26210_26437__$1 = cljs.core.__destructure_map(map__26210_26436);
var task_26438 = map__26210_26437__$1;
var fn_str_26439 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26210_26437__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_26440 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26210_26437__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_26441 = goog.getObjectByName(fn_str_26439,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_26440)].join(''));

(fn_obj_26441.cljs$core$IFn$_invoke$arity$2 ? fn_obj_26441.cljs$core$IFn$_invoke$arity$2(path,new_link_26431) : fn_obj_26441.call(null,path,new_link_26431));


var G__26442 = seq__26202_26432;
var G__26443 = chunk__26204_26433;
var G__26444 = count__26205_26434;
var G__26445 = (i__26206_26435 + (1));
seq__26202_26432 = G__26442;
chunk__26204_26433 = G__26443;
count__26205_26434 = G__26444;
i__26206_26435 = G__26445;
continue;
} else {
var temp__5753__auto___26446__$1 = cljs.core.seq(seq__26202_26432);
if(temp__5753__auto___26446__$1){
var seq__26202_26447__$1 = temp__5753__auto___26446__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26202_26447__$1)){
var c__4679__auto___26448 = cljs.core.chunk_first(seq__26202_26447__$1);
var G__26449 = cljs.core.chunk_rest(seq__26202_26447__$1);
var G__26450 = c__4679__auto___26448;
var G__26451 = cljs.core.count(c__4679__auto___26448);
var G__26452 = (0);
seq__26202_26432 = G__26449;
chunk__26204_26433 = G__26450;
count__26205_26434 = G__26451;
i__26206_26435 = G__26452;
continue;
} else {
var map__26211_26453 = cljs.core.first(seq__26202_26447__$1);
var map__26211_26454__$1 = cljs.core.__destructure_map(map__26211_26453);
var task_26455 = map__26211_26454__$1;
var fn_str_26456 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26211_26454__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_26457 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26211_26454__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_26458 = goog.getObjectByName(fn_str_26456,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_26457)].join(''));

(fn_obj_26458.cljs$core$IFn$_invoke$arity$2 ? fn_obj_26458.cljs$core$IFn$_invoke$arity$2(path,new_link_26431) : fn_obj_26458.call(null,path,new_link_26431));


var G__26459 = cljs.core.next(seq__26202_26447__$1);
var G__26460 = null;
var G__26461 = (0);
var G__26462 = (0);
seq__26202_26432 = G__26459;
chunk__26204_26433 = G__26460;
count__26205_26434 = G__26461;
i__26206_26435 = G__26462;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_26429);
});})(seq__26169_26425,chunk__26173_26426,count__26174_26427,i__26175_26428,seq__26001,chunk__26003,count__26004,i__26005,new_link_26431,path_match_26430,node_26429,path,seq__26001__$1,temp__5753__auto__,map__26000,map__26000__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_26430], 0));

goog.dom.insertSiblingAfter(new_link_26431,node_26429);


var G__26463 = seq__26169_26425;
var G__26464 = chunk__26173_26426;
var G__26465 = count__26174_26427;
var G__26466 = (i__26175_26428 + (1));
seq__26169_26425 = G__26463;
chunk__26173_26426 = G__26464;
count__26174_26427 = G__26465;
i__26175_26428 = G__26466;
continue;
} else {
var G__26467 = seq__26169_26425;
var G__26468 = chunk__26173_26426;
var G__26469 = count__26174_26427;
var G__26470 = (i__26175_26428 + (1));
seq__26169_26425 = G__26467;
chunk__26173_26426 = G__26468;
count__26174_26427 = G__26469;
i__26175_26428 = G__26470;
continue;
}
} else {
var G__26471 = seq__26169_26425;
var G__26472 = chunk__26173_26426;
var G__26473 = count__26174_26427;
var G__26474 = (i__26175_26428 + (1));
seq__26169_26425 = G__26471;
chunk__26173_26426 = G__26472;
count__26174_26427 = G__26473;
i__26175_26428 = G__26474;
continue;
}
} else {
var temp__5753__auto___26475__$1 = cljs.core.seq(seq__26169_26425);
if(temp__5753__auto___26475__$1){
var seq__26169_26476__$1 = temp__5753__auto___26475__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26169_26476__$1)){
var c__4679__auto___26477 = cljs.core.chunk_first(seq__26169_26476__$1);
var G__26478 = cljs.core.chunk_rest(seq__26169_26476__$1);
var G__26479 = c__4679__auto___26477;
var G__26480 = cljs.core.count(c__4679__auto___26477);
var G__26481 = (0);
seq__26169_26425 = G__26478;
chunk__26173_26426 = G__26479;
count__26174_26427 = G__26480;
i__26175_26428 = G__26481;
continue;
} else {
var node_26482 = cljs.core.first(seq__26169_26476__$1);
if(cljs.core.not(node_26482.shadow$old)){
var path_match_26483 = shadow.cljs.devtools.client.browser.match_paths(node_26482.getAttribute("href"),path);
if(cljs.core.truth_(path_match_26483)){
var new_link_26484 = (function (){var G__26212 = node_26482.cloneNode(true);
G__26212.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_26483),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__26212;
})();
(node_26482.shadow$old = true);

(new_link_26484.onload = ((function (seq__26169_26425,chunk__26173_26426,count__26174_26427,i__26175_26428,seq__26001,chunk__26003,count__26004,i__26005,new_link_26484,path_match_26483,node_26482,seq__26169_26476__$1,temp__5753__auto___26475__$1,path,seq__26001__$1,temp__5753__auto__,map__26000,map__26000__$1,msg,updates,reload_info){
return (function (e){
var seq__26213_26485 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__26215_26486 = null;
var count__26216_26487 = (0);
var i__26217_26488 = (0);
while(true){
if((i__26217_26488 < count__26216_26487)){
var map__26221_26489 = chunk__26215_26486.cljs$core$IIndexed$_nth$arity$2(null,i__26217_26488);
var map__26221_26490__$1 = cljs.core.__destructure_map(map__26221_26489);
var task_26491 = map__26221_26490__$1;
var fn_str_26492 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26221_26490__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_26493 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26221_26490__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_26494 = goog.getObjectByName(fn_str_26492,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_26493)].join(''));

(fn_obj_26494.cljs$core$IFn$_invoke$arity$2 ? fn_obj_26494.cljs$core$IFn$_invoke$arity$2(path,new_link_26484) : fn_obj_26494.call(null,path,new_link_26484));


var G__26495 = seq__26213_26485;
var G__26496 = chunk__26215_26486;
var G__26497 = count__26216_26487;
var G__26498 = (i__26217_26488 + (1));
seq__26213_26485 = G__26495;
chunk__26215_26486 = G__26496;
count__26216_26487 = G__26497;
i__26217_26488 = G__26498;
continue;
} else {
var temp__5753__auto___26499__$2 = cljs.core.seq(seq__26213_26485);
if(temp__5753__auto___26499__$2){
var seq__26213_26500__$1 = temp__5753__auto___26499__$2;
if(cljs.core.chunked_seq_QMARK_(seq__26213_26500__$1)){
var c__4679__auto___26501 = cljs.core.chunk_first(seq__26213_26500__$1);
var G__26502 = cljs.core.chunk_rest(seq__26213_26500__$1);
var G__26503 = c__4679__auto___26501;
var G__26504 = cljs.core.count(c__4679__auto___26501);
var G__26505 = (0);
seq__26213_26485 = G__26502;
chunk__26215_26486 = G__26503;
count__26216_26487 = G__26504;
i__26217_26488 = G__26505;
continue;
} else {
var map__26222_26506 = cljs.core.first(seq__26213_26500__$1);
var map__26222_26507__$1 = cljs.core.__destructure_map(map__26222_26506);
var task_26508 = map__26222_26507__$1;
var fn_str_26509 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26222_26507__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_26510 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26222_26507__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_26511 = goog.getObjectByName(fn_str_26509,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_26510)].join(''));

(fn_obj_26511.cljs$core$IFn$_invoke$arity$2 ? fn_obj_26511.cljs$core$IFn$_invoke$arity$2(path,new_link_26484) : fn_obj_26511.call(null,path,new_link_26484));


var G__26512 = cljs.core.next(seq__26213_26500__$1);
var G__26513 = null;
var G__26514 = (0);
var G__26515 = (0);
seq__26213_26485 = G__26512;
chunk__26215_26486 = G__26513;
count__26216_26487 = G__26514;
i__26217_26488 = G__26515;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_26482);
});})(seq__26169_26425,chunk__26173_26426,count__26174_26427,i__26175_26428,seq__26001,chunk__26003,count__26004,i__26005,new_link_26484,path_match_26483,node_26482,seq__26169_26476__$1,temp__5753__auto___26475__$1,path,seq__26001__$1,temp__5753__auto__,map__26000,map__26000__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_26483], 0));

goog.dom.insertSiblingAfter(new_link_26484,node_26482);


var G__26516 = cljs.core.next(seq__26169_26476__$1);
var G__26517 = null;
var G__26518 = (0);
var G__26519 = (0);
seq__26169_26425 = G__26516;
chunk__26173_26426 = G__26517;
count__26174_26427 = G__26518;
i__26175_26428 = G__26519;
continue;
} else {
var G__26520 = cljs.core.next(seq__26169_26476__$1);
var G__26521 = null;
var G__26522 = (0);
var G__26523 = (0);
seq__26169_26425 = G__26520;
chunk__26173_26426 = G__26521;
count__26174_26427 = G__26522;
i__26175_26428 = G__26523;
continue;
}
} else {
var G__26524 = cljs.core.next(seq__26169_26476__$1);
var G__26525 = null;
var G__26526 = (0);
var G__26527 = (0);
seq__26169_26425 = G__26524;
chunk__26173_26426 = G__26525;
count__26174_26427 = G__26526;
i__26175_26428 = G__26527;
continue;
}
}
} else {
}
}
break;
}


var G__26528 = cljs.core.next(seq__26001__$1);
var G__26529 = null;
var G__26530 = (0);
var G__26531 = (0);
seq__26001 = G__26528;
chunk__26003 = G__26529;
count__26004 = G__26530;
i__26005 = G__26531;
continue;
} else {
var G__26532 = cljs.core.next(seq__26001__$1);
var G__26533 = null;
var G__26534 = (0);
var G__26535 = (0);
seq__26001 = G__26532;
chunk__26003 = G__26533;
count__26004 = G__26534;
i__26005 = G__26535;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__26223){
var map__26224 = p__26223;
var map__26224__$1 = cljs.core.__destructure_map(map__26224);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26224__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__26225){
var map__26226 = p__26225;
var map__26226__$1 = cljs.core.__destructure_map(map__26226);
var _ = map__26226__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26226__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__26227,done,error){
var map__26228 = p__26227;
var map__26228__$1 = cljs.core.__destructure_map(map__26228);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26228__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__26229,done,error){
var map__26230 = p__26229;
var map__26230__$1 = cljs.core.__destructure_map(map__26230);
var msg = map__26230__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26230__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26230__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26230__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__26231){
var map__26232 = p__26231;
var map__26232__$1 = cljs.core.__destructure_map(map__26232);
var src = map__26232__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26232__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__26233 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__26233) : done.call(null,G__26233));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__26234){
var map__26235 = p__26234;
var map__26235__$1 = cljs.core.__destructure_map(map__26235);
var msg__$1 = map__26235__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26235__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e26236){var ex = e26236;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__26237){
var map__26238 = p__26237;
var map__26238__$1 = cljs.core.__destructure_map(map__26238);
var env = map__26238__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26238__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__26239){
var map__26240 = p__26239;
var map__26240__$1 = cljs.core.__destructure_map(map__26240);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26240__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26240__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__26241){
var map__26242 = p__26241;
var map__26242__$1 = cljs.core.__destructure_map(map__26242);
var svc = map__26242__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26242__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
