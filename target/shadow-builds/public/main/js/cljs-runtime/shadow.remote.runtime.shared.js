goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__21502,res){
var map__21503 = p__21502;
var map__21503__$1 = cljs.core.__destructure_map(map__21503);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21503__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21503__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__21504 = res;
var G__21504__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21504,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__21504);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21504__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__21504__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__21515 = arguments.length;
switch (G__21515) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__21520,msg,handlers,timeout_after_ms){
var map__21523 = p__21520;
var map__21523__$1 = cljs.core.__destructure_map(map__21523);
var runtime = map__21523__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21523__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___21791 = arguments.length;
var i__4865__auto___21792 = (0);
while(true){
if((i__4865__auto___21792 < len__4864__auto___21791)){
args__4870__auto__.push((arguments[i__4865__auto___21792]));

var G__21798 = (i__4865__auto___21792 + (1));
i__4865__auto___21792 = G__21798;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__21542,ev,args){
var map__21543 = p__21542;
var map__21543__$1 = cljs.core.__destructure_map(map__21543);
var runtime = map__21543__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21543__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__21545 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__21548 = null;
var count__21549 = (0);
var i__21550 = (0);
while(true){
if((i__21550 < count__21549)){
var ext = chunk__21548.cljs$core$IIndexed$_nth$arity$2(null,i__21550);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__21817 = seq__21545;
var G__21818 = chunk__21548;
var G__21819 = count__21549;
var G__21820 = (i__21550 + (1));
seq__21545 = G__21817;
chunk__21548 = G__21818;
count__21549 = G__21819;
i__21550 = G__21820;
continue;
} else {
var G__21821 = seq__21545;
var G__21822 = chunk__21548;
var G__21823 = count__21549;
var G__21824 = (i__21550 + (1));
seq__21545 = G__21821;
chunk__21548 = G__21822;
count__21549 = G__21823;
i__21550 = G__21824;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21545);
if(temp__5753__auto__){
var seq__21545__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21545__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__21545__$1);
var G__21826 = cljs.core.chunk_rest(seq__21545__$1);
var G__21827 = c__4679__auto__;
var G__21828 = cljs.core.count(c__4679__auto__);
var G__21829 = (0);
seq__21545 = G__21826;
chunk__21548 = G__21827;
count__21549 = G__21828;
i__21550 = G__21829;
continue;
} else {
var ext = cljs.core.first(seq__21545__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__21831 = cljs.core.next(seq__21545__$1);
var G__21832 = null;
var G__21833 = (0);
var G__21834 = (0);
seq__21545 = G__21831;
chunk__21548 = G__21832;
count__21549 = G__21833;
i__21550 = G__21834;
continue;
} else {
var G__21835 = cljs.core.next(seq__21545__$1);
var G__21836 = null;
var G__21837 = (0);
var G__21838 = (0);
seq__21545 = G__21835;
chunk__21548 = G__21836;
count__21549 = G__21837;
i__21550 = G__21838;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq21526){
var G__21527 = cljs.core.first(seq21526);
var seq21526__$1 = cljs.core.next(seq21526);
var G__21528 = cljs.core.first(seq21526__$1);
var seq21526__$2 = cljs.core.next(seq21526__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21527,G__21528,seq21526__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__21567,p__21568){
var map__21569 = p__21567;
var map__21569__$1 = cljs.core.__destructure_map(map__21569);
var runtime = map__21569__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21569__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__21570 = p__21568;
var map__21570__$1 = cljs.core.__destructure_map(map__21570);
var msg = map__21570__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21570__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__21583 = cljs.core.deref(state_ref);
var map__21583__$1 = cljs.core.__destructure_map(map__21583);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21583__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21583__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__21593){
var map__21594 = p__21593;
var map__21594__$1 = cljs.core.__destructure_map(map__21594);
var runtime = map__21594__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21594__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__21597,msg){
var map__21598 = p__21597;
var map__21598__$1 = cljs.core.__destructure_map(map__21598);
var runtime = map__21598__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21598__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__21610,key,p__21611){
var map__21626 = p__21610;
var map__21626__$1 = cljs.core.__destructure_map(map__21626);
var state = map__21626__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21626__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__21627 = p__21611;
var map__21627__$1 = cljs.core.__destructure_map(map__21627);
var spec = map__21627__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21627__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__21652,key,spec){
var map__21654 = p__21652;
var map__21654__$1 = cljs.core.__destructure_map(map__21654);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21654__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__21656_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__21656_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__21657_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__21657_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__21658_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__21658_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__21659_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__21659_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__21660_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__21660_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__21680,key){
var map__21682 = p__21680;
var map__21682__$1 = cljs.core.__destructure_map(map__21682);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21682__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__21689,msg){
var map__21691 = p__21689;
var map__21691__$1 = cljs.core.__destructure_map(map__21691);
var runtime = map__21691__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21691__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__21703,p__21704){
var map__21705 = p__21703;
var map__21705__$1 = cljs.core.__destructure_map(map__21705);
var runtime = map__21705__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21705__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__21706 = p__21704;
var map__21706__$1 = cljs.core.__destructure_map(map__21706);
var msg = map__21706__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21706__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21706__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__21720 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__21722 = null;
var count__21723 = (0);
var i__21724 = (0);
while(true){
if((i__21724 < count__21723)){
var map__21741 = chunk__21722.cljs$core$IIndexed$_nth$arity$2(null,i__21724);
var map__21741__$1 = cljs.core.__destructure_map(map__21741);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21741__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__21873 = seq__21720;
var G__21874 = chunk__21722;
var G__21875 = count__21723;
var G__21876 = (i__21724 + (1));
seq__21720 = G__21873;
chunk__21722 = G__21874;
count__21723 = G__21875;
i__21724 = G__21876;
continue;
} else {
var G__21878 = seq__21720;
var G__21879 = chunk__21722;
var G__21880 = count__21723;
var G__21881 = (i__21724 + (1));
seq__21720 = G__21878;
chunk__21722 = G__21879;
count__21723 = G__21880;
i__21724 = G__21881;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21720);
if(temp__5753__auto__){
var seq__21720__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21720__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__21720__$1);
var G__21882 = cljs.core.chunk_rest(seq__21720__$1);
var G__21883 = c__4679__auto__;
var G__21884 = cljs.core.count(c__4679__auto__);
var G__21885 = (0);
seq__21720 = G__21882;
chunk__21722 = G__21883;
count__21723 = G__21884;
i__21724 = G__21885;
continue;
} else {
var map__21750 = cljs.core.first(seq__21720__$1);
var map__21750__$1 = cljs.core.__destructure_map(map__21750);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21750__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__21888 = cljs.core.next(seq__21720__$1);
var G__21889 = null;
var G__21890 = (0);
var G__21891 = (0);
seq__21720 = G__21888;
chunk__21722 = G__21889;
count__21723 = G__21890;
i__21724 = G__21891;
continue;
} else {
var G__21893 = cljs.core.next(seq__21720__$1);
var G__21894 = null;
var G__21895 = (0);
var G__21896 = (0);
seq__21720 = G__21893;
chunk__21722 = G__21894;
count__21723 = G__21895;
i__21724 = G__21896;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
