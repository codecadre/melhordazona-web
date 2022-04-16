goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__25717,p__25718){
var map__25720 = p__25717;
var map__25720__$1 = cljs.core.__destructure_map(map__25720);
var svc = map__25720__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25720__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25720__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25720__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__25721 = p__25718;
var map__25721__$1 = cljs.core.__destructure_map(map__25721);
var msg = map__25721__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25721__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25721__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25721__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25721__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__25725,p__25726){
var map__25727 = p__25725;
var map__25727__$1 = cljs.core.__destructure_map(map__25727);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25727__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__25728 = p__25726;
var map__25728__$1 = cljs.core.__destructure_map(map__25728);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25728__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__25742,p__25743){
var map__25744 = p__25742;
var map__25744__$1 = cljs.core.__destructure_map(map__25744);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25744__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25744__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__25745 = p__25743;
var map__25745__$1 = cljs.core.__destructure_map(map__25745);
var msg = map__25745__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25745__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__25750,tid){
var map__25751 = p__25750;
var map__25751__$1 = cljs.core.__destructure_map(map__25751);
var svc = map__25751__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25751__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__25765 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__25766 = null;
var count__25767 = (0);
var i__25768 = (0);
while(true){
if((i__25768 < count__25767)){
var vec__25776 = chunk__25766.cljs$core$IIndexed$_nth$arity$2(null,i__25768);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25776,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25776,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__25784 = seq__25765;
var G__25785 = chunk__25766;
var G__25786 = count__25767;
var G__25787 = (i__25768 + (1));
seq__25765 = G__25784;
chunk__25766 = G__25785;
count__25767 = G__25786;
i__25768 = G__25787;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__25765);
if(temp__5753__auto__){
var seq__25765__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25765__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__25765__$1);
var G__25788 = cljs.core.chunk_rest(seq__25765__$1);
var G__25789 = c__4679__auto__;
var G__25790 = cljs.core.count(c__4679__auto__);
var G__25791 = (0);
seq__25765 = G__25788;
chunk__25766 = G__25789;
count__25767 = G__25790;
i__25768 = G__25791;
continue;
} else {
var vec__25779 = cljs.core.first(seq__25765__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25779,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25779,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__25792 = cljs.core.next(seq__25765__$1);
var G__25793 = null;
var G__25794 = (0);
var G__25795 = (0);
seq__25765 = G__25792;
chunk__25766 = G__25793;
count__25767 = G__25794;
i__25768 = G__25795;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__25759_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__25759_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__25760_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__25760_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__25761_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__25761_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__25762_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__25762_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__25782){
var map__25783 = p__25782;
var map__25783__$1 = cljs.core.__destructure_map(map__25783);
var svc = map__25783__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25783__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25783__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
