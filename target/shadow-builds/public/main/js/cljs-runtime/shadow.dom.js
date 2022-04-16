goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_24095 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_24095(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_24096 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_24096(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__23193 = coll;
var G__23194 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__23193,G__23194) : shadow.dom.lazy_native_coll_seq.call(null,G__23193,G__23194));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__23292 = arguments.length;
switch (G__23292) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__23294 = arguments.length;
switch (G__23294) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__23303 = arguments.length;
switch (G__23303) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__23312 = arguments.length;
switch (G__23312) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__23354 = arguments.length;
switch (G__23354) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__23368 = arguments.length;
switch (G__23368) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e23374){if((e23374 instanceof Object)){
var e = e23374;
return console.log("didnt support attachEvent",el,e);
} else {
throw e23374;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__23376 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__23377 = null;
var count__23378 = (0);
var i__23379 = (0);
while(true){
if((i__23379 < count__23378)){
var el = chunk__23377.cljs$core$IIndexed$_nth$arity$2(null,i__23379);
var handler_24106__$1 = ((function (seq__23376,chunk__23377,count__23378,i__23379,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__23376,chunk__23377,count__23378,i__23379,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_24106__$1);


var G__24107 = seq__23376;
var G__24108 = chunk__23377;
var G__24109 = count__23378;
var G__24110 = (i__23379 + (1));
seq__23376 = G__24107;
chunk__23377 = G__24108;
count__23378 = G__24109;
i__23379 = G__24110;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__23376);
if(temp__5753__auto__){
var seq__23376__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23376__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__23376__$1);
var G__24111 = cljs.core.chunk_rest(seq__23376__$1);
var G__24112 = c__4679__auto__;
var G__24113 = cljs.core.count(c__4679__auto__);
var G__24114 = (0);
seq__23376 = G__24111;
chunk__23377 = G__24112;
count__23378 = G__24113;
i__23379 = G__24114;
continue;
} else {
var el = cljs.core.first(seq__23376__$1);
var handler_24115__$1 = ((function (seq__23376,chunk__23377,count__23378,i__23379,el,seq__23376__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__23376,chunk__23377,count__23378,i__23379,el,seq__23376__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_24115__$1);


var G__24116 = cljs.core.next(seq__23376__$1);
var G__24117 = null;
var G__24118 = (0);
var G__24119 = (0);
seq__23376 = G__24116;
chunk__23377 = G__24117;
count__23378 = G__24118;
i__23379 = G__24119;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__23406 = arguments.length;
switch (G__23406) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__23420 = cljs.core.seq(events);
var chunk__23421 = null;
var count__23422 = (0);
var i__23423 = (0);
while(true){
if((i__23423 < count__23422)){
var vec__23437 = chunk__23421.cljs$core$IIndexed$_nth$arity$2(null,i__23423);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23437,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23437,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__24121 = seq__23420;
var G__24122 = chunk__23421;
var G__24123 = count__23422;
var G__24124 = (i__23423 + (1));
seq__23420 = G__24121;
chunk__23421 = G__24122;
count__23422 = G__24123;
i__23423 = G__24124;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__23420);
if(temp__5753__auto__){
var seq__23420__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23420__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__23420__$1);
var G__24125 = cljs.core.chunk_rest(seq__23420__$1);
var G__24126 = c__4679__auto__;
var G__24127 = cljs.core.count(c__4679__auto__);
var G__24128 = (0);
seq__23420 = G__24125;
chunk__23421 = G__24126;
count__23422 = G__24127;
i__23423 = G__24128;
continue;
} else {
var vec__23448 = cljs.core.first(seq__23420__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23448,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23448,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__24129 = cljs.core.next(seq__23420__$1);
var G__24130 = null;
var G__24131 = (0);
var G__24132 = (0);
seq__23420 = G__24129;
chunk__23421 = G__24130;
count__23422 = G__24131;
i__23423 = G__24132;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__23461 = cljs.core.seq(styles);
var chunk__23462 = null;
var count__23463 = (0);
var i__23464 = (0);
while(true){
if((i__23464 < count__23463)){
var vec__23480 = chunk__23462.cljs$core$IIndexed$_nth$arity$2(null,i__23464);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23480,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23480,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__24133 = seq__23461;
var G__24134 = chunk__23462;
var G__24135 = count__23463;
var G__24136 = (i__23464 + (1));
seq__23461 = G__24133;
chunk__23462 = G__24134;
count__23463 = G__24135;
i__23464 = G__24136;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__23461);
if(temp__5753__auto__){
var seq__23461__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23461__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__23461__$1);
var G__24137 = cljs.core.chunk_rest(seq__23461__$1);
var G__24138 = c__4679__auto__;
var G__24139 = cljs.core.count(c__4679__auto__);
var G__24140 = (0);
seq__23461 = G__24137;
chunk__23462 = G__24138;
count__23463 = G__24139;
i__23464 = G__24140;
continue;
} else {
var vec__23488 = cljs.core.first(seq__23461__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23488,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23488,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__24141 = cljs.core.next(seq__23461__$1);
var G__24142 = null;
var G__24143 = (0);
var G__24144 = (0);
seq__23461 = G__24141;
chunk__23462 = G__24142;
count__23463 = G__24143;
i__23464 = G__24144;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__23501_24145 = key;
var G__23501_24146__$1 = (((G__23501_24145 instanceof cljs.core.Keyword))?G__23501_24145.fqn:null);
switch (G__23501_24146__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_24148 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_24148,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_24148,"aria-");
}
})())){
el.setAttribute(ks_24148,value);
} else {
(el[ks_24148] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__23543){
var map__23544 = p__23543;
var map__23544__$1 = cljs.core.__destructure_map(map__23544);
var props = map__23544__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23544__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__23547 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23547,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23547,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23547,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__23551 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__23551,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__23551;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__23561 = arguments.length;
switch (G__23561) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__23577){
var vec__23582 = p__23577;
var seq__23585 = cljs.core.seq(vec__23582);
var first__23586 = cljs.core.first(seq__23585);
var seq__23585__$1 = cljs.core.next(seq__23585);
var nn = first__23586;
var first__23586__$1 = cljs.core.first(seq__23585__$1);
var seq__23585__$2 = cljs.core.next(seq__23585__$1);
var np = first__23586__$1;
var nc = seq__23585__$2;
var node = vec__23582;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__23589 = nn;
var G__23590 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__23589,G__23590) : create_fn.call(null,G__23589,G__23590));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__23595 = nn;
var G__23596 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__23595,G__23596) : create_fn.call(null,G__23595,G__23596));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__23605 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23605,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23605,(1),null);
var seq__23609_24158 = cljs.core.seq(node_children);
var chunk__23610_24159 = null;
var count__23611_24160 = (0);
var i__23612_24161 = (0);
while(true){
if((i__23612_24161 < count__23611_24160)){
var child_struct_24162 = chunk__23610_24159.cljs$core$IIndexed$_nth$arity$2(null,i__23612_24161);
var children_24163 = shadow.dom.dom_node(child_struct_24162);
if(cljs.core.seq_QMARK_(children_24163)){
var seq__23663_24164 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_24163));
var chunk__23665_24165 = null;
var count__23666_24166 = (0);
var i__23667_24167 = (0);
while(true){
if((i__23667_24167 < count__23666_24166)){
var child_24168 = chunk__23665_24165.cljs$core$IIndexed$_nth$arity$2(null,i__23667_24167);
if(cljs.core.truth_(child_24168)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_24168);


var G__24172 = seq__23663_24164;
var G__24173 = chunk__23665_24165;
var G__24174 = count__23666_24166;
var G__24175 = (i__23667_24167 + (1));
seq__23663_24164 = G__24172;
chunk__23665_24165 = G__24173;
count__23666_24166 = G__24174;
i__23667_24167 = G__24175;
continue;
} else {
var G__24176 = seq__23663_24164;
var G__24177 = chunk__23665_24165;
var G__24178 = count__23666_24166;
var G__24179 = (i__23667_24167 + (1));
seq__23663_24164 = G__24176;
chunk__23665_24165 = G__24177;
count__23666_24166 = G__24178;
i__23667_24167 = G__24179;
continue;
}
} else {
var temp__5753__auto___24180 = cljs.core.seq(seq__23663_24164);
if(temp__5753__auto___24180){
var seq__23663_24181__$1 = temp__5753__auto___24180;
if(cljs.core.chunked_seq_QMARK_(seq__23663_24181__$1)){
var c__4679__auto___24182 = cljs.core.chunk_first(seq__23663_24181__$1);
var G__24183 = cljs.core.chunk_rest(seq__23663_24181__$1);
var G__24184 = c__4679__auto___24182;
var G__24185 = cljs.core.count(c__4679__auto___24182);
var G__24186 = (0);
seq__23663_24164 = G__24183;
chunk__23665_24165 = G__24184;
count__23666_24166 = G__24185;
i__23667_24167 = G__24186;
continue;
} else {
var child_24187 = cljs.core.first(seq__23663_24181__$1);
if(cljs.core.truth_(child_24187)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_24187);


var G__24188 = cljs.core.next(seq__23663_24181__$1);
var G__24189 = null;
var G__24190 = (0);
var G__24191 = (0);
seq__23663_24164 = G__24188;
chunk__23665_24165 = G__24189;
count__23666_24166 = G__24190;
i__23667_24167 = G__24191;
continue;
} else {
var G__24192 = cljs.core.next(seq__23663_24181__$1);
var G__24193 = null;
var G__24194 = (0);
var G__24195 = (0);
seq__23663_24164 = G__24192;
chunk__23665_24165 = G__24193;
count__23666_24166 = G__24194;
i__23667_24167 = G__24195;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_24163);
}


var G__24196 = seq__23609_24158;
var G__24197 = chunk__23610_24159;
var G__24198 = count__23611_24160;
var G__24199 = (i__23612_24161 + (1));
seq__23609_24158 = G__24196;
chunk__23610_24159 = G__24197;
count__23611_24160 = G__24198;
i__23612_24161 = G__24199;
continue;
} else {
var temp__5753__auto___24200 = cljs.core.seq(seq__23609_24158);
if(temp__5753__auto___24200){
var seq__23609_24201__$1 = temp__5753__auto___24200;
if(cljs.core.chunked_seq_QMARK_(seq__23609_24201__$1)){
var c__4679__auto___24202 = cljs.core.chunk_first(seq__23609_24201__$1);
var G__24203 = cljs.core.chunk_rest(seq__23609_24201__$1);
var G__24204 = c__4679__auto___24202;
var G__24205 = cljs.core.count(c__4679__auto___24202);
var G__24206 = (0);
seq__23609_24158 = G__24203;
chunk__23610_24159 = G__24204;
count__23611_24160 = G__24205;
i__23612_24161 = G__24206;
continue;
} else {
var child_struct_24207 = cljs.core.first(seq__23609_24201__$1);
var children_24208 = shadow.dom.dom_node(child_struct_24207);
if(cljs.core.seq_QMARK_(children_24208)){
var seq__23686_24209 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_24208));
var chunk__23688_24210 = null;
var count__23689_24211 = (0);
var i__23690_24212 = (0);
while(true){
if((i__23690_24212 < count__23689_24211)){
var child_24213 = chunk__23688_24210.cljs$core$IIndexed$_nth$arity$2(null,i__23690_24212);
if(cljs.core.truth_(child_24213)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_24213);


var G__24214 = seq__23686_24209;
var G__24215 = chunk__23688_24210;
var G__24216 = count__23689_24211;
var G__24217 = (i__23690_24212 + (1));
seq__23686_24209 = G__24214;
chunk__23688_24210 = G__24215;
count__23689_24211 = G__24216;
i__23690_24212 = G__24217;
continue;
} else {
var G__24218 = seq__23686_24209;
var G__24219 = chunk__23688_24210;
var G__24220 = count__23689_24211;
var G__24221 = (i__23690_24212 + (1));
seq__23686_24209 = G__24218;
chunk__23688_24210 = G__24219;
count__23689_24211 = G__24220;
i__23690_24212 = G__24221;
continue;
}
} else {
var temp__5753__auto___24222__$1 = cljs.core.seq(seq__23686_24209);
if(temp__5753__auto___24222__$1){
var seq__23686_24223__$1 = temp__5753__auto___24222__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23686_24223__$1)){
var c__4679__auto___24224 = cljs.core.chunk_first(seq__23686_24223__$1);
var G__24225 = cljs.core.chunk_rest(seq__23686_24223__$1);
var G__24226 = c__4679__auto___24224;
var G__24227 = cljs.core.count(c__4679__auto___24224);
var G__24228 = (0);
seq__23686_24209 = G__24225;
chunk__23688_24210 = G__24226;
count__23689_24211 = G__24227;
i__23690_24212 = G__24228;
continue;
} else {
var child_24229 = cljs.core.first(seq__23686_24223__$1);
if(cljs.core.truth_(child_24229)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_24229);


var G__24230 = cljs.core.next(seq__23686_24223__$1);
var G__24231 = null;
var G__24232 = (0);
var G__24233 = (0);
seq__23686_24209 = G__24230;
chunk__23688_24210 = G__24231;
count__23689_24211 = G__24232;
i__23690_24212 = G__24233;
continue;
} else {
var G__24234 = cljs.core.next(seq__23686_24223__$1);
var G__24235 = null;
var G__24236 = (0);
var G__24237 = (0);
seq__23686_24209 = G__24234;
chunk__23688_24210 = G__24235;
count__23689_24211 = G__24236;
i__23690_24212 = G__24237;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_24208);
}


var G__24238 = cljs.core.next(seq__23609_24201__$1);
var G__24239 = null;
var G__24240 = (0);
var G__24241 = (0);
seq__23609_24158 = G__24238;
chunk__23610_24159 = G__24239;
count__23611_24160 = G__24240;
i__23612_24161 = G__24241;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__23699 = cljs.core.seq(node);
var chunk__23700 = null;
var count__23701 = (0);
var i__23702 = (0);
while(true){
if((i__23702 < count__23701)){
var n = chunk__23700.cljs$core$IIndexed$_nth$arity$2(null,i__23702);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__24242 = seq__23699;
var G__24243 = chunk__23700;
var G__24244 = count__23701;
var G__24245 = (i__23702 + (1));
seq__23699 = G__24242;
chunk__23700 = G__24243;
count__23701 = G__24244;
i__23702 = G__24245;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__23699);
if(temp__5753__auto__){
var seq__23699__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23699__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__23699__$1);
var G__24246 = cljs.core.chunk_rest(seq__23699__$1);
var G__24247 = c__4679__auto__;
var G__24248 = cljs.core.count(c__4679__auto__);
var G__24249 = (0);
seq__23699 = G__24246;
chunk__23700 = G__24247;
count__23701 = G__24248;
i__23702 = G__24249;
continue;
} else {
var n = cljs.core.first(seq__23699__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__24250 = cljs.core.next(seq__23699__$1);
var G__24251 = null;
var G__24252 = (0);
var G__24253 = (0);
seq__23699 = G__24250;
chunk__23700 = G__24251;
count__23701 = G__24252;
i__23702 = G__24253;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__23721 = arguments.length;
switch (G__23721) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__23729 = arguments.length;
switch (G__23729) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__23745 = arguments.length;
switch (G__23745) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___24257 = arguments.length;
var i__4865__auto___24258 = (0);
while(true){
if((i__4865__auto___24258 < len__4864__auto___24257)){
args__4870__auto__.push((arguments[i__4865__auto___24258]));

var G__24259 = (i__4865__auto___24258 + (1));
i__4865__auto___24258 = G__24259;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__23767_24260 = cljs.core.seq(nodes);
var chunk__23768_24261 = null;
var count__23769_24262 = (0);
var i__23770_24263 = (0);
while(true){
if((i__23770_24263 < count__23769_24262)){
var node_24264 = chunk__23768_24261.cljs$core$IIndexed$_nth$arity$2(null,i__23770_24263);
fragment.appendChild(shadow.dom._to_dom(node_24264));


var G__24265 = seq__23767_24260;
var G__24266 = chunk__23768_24261;
var G__24267 = count__23769_24262;
var G__24268 = (i__23770_24263 + (1));
seq__23767_24260 = G__24265;
chunk__23768_24261 = G__24266;
count__23769_24262 = G__24267;
i__23770_24263 = G__24268;
continue;
} else {
var temp__5753__auto___24269 = cljs.core.seq(seq__23767_24260);
if(temp__5753__auto___24269){
var seq__23767_24270__$1 = temp__5753__auto___24269;
if(cljs.core.chunked_seq_QMARK_(seq__23767_24270__$1)){
var c__4679__auto___24271 = cljs.core.chunk_first(seq__23767_24270__$1);
var G__24272 = cljs.core.chunk_rest(seq__23767_24270__$1);
var G__24273 = c__4679__auto___24271;
var G__24274 = cljs.core.count(c__4679__auto___24271);
var G__24275 = (0);
seq__23767_24260 = G__24272;
chunk__23768_24261 = G__24273;
count__23769_24262 = G__24274;
i__23770_24263 = G__24275;
continue;
} else {
var node_24276 = cljs.core.first(seq__23767_24270__$1);
fragment.appendChild(shadow.dom._to_dom(node_24276));


var G__24277 = cljs.core.next(seq__23767_24270__$1);
var G__24278 = null;
var G__24279 = (0);
var G__24280 = (0);
seq__23767_24260 = G__24277;
chunk__23768_24261 = G__24278;
count__23769_24262 = G__24279;
i__23770_24263 = G__24280;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq23760){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23760));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__23789_24282 = cljs.core.seq(scripts);
var chunk__23790_24283 = null;
var count__23791_24284 = (0);
var i__23792_24285 = (0);
while(true){
if((i__23792_24285 < count__23791_24284)){
var vec__23806_24287 = chunk__23790_24283.cljs$core$IIndexed$_nth$arity$2(null,i__23792_24285);
var script_tag_24288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23806_24287,(0),null);
var script_body_24289 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23806_24287,(1),null);
eval(script_body_24289);


var G__24290 = seq__23789_24282;
var G__24291 = chunk__23790_24283;
var G__24292 = count__23791_24284;
var G__24293 = (i__23792_24285 + (1));
seq__23789_24282 = G__24290;
chunk__23790_24283 = G__24291;
count__23791_24284 = G__24292;
i__23792_24285 = G__24293;
continue;
} else {
var temp__5753__auto___24294 = cljs.core.seq(seq__23789_24282);
if(temp__5753__auto___24294){
var seq__23789_24295__$1 = temp__5753__auto___24294;
if(cljs.core.chunked_seq_QMARK_(seq__23789_24295__$1)){
var c__4679__auto___24296 = cljs.core.chunk_first(seq__23789_24295__$1);
var G__24297 = cljs.core.chunk_rest(seq__23789_24295__$1);
var G__24298 = c__4679__auto___24296;
var G__24299 = cljs.core.count(c__4679__auto___24296);
var G__24300 = (0);
seq__23789_24282 = G__24297;
chunk__23790_24283 = G__24298;
count__23791_24284 = G__24299;
i__23792_24285 = G__24300;
continue;
} else {
var vec__23810_24301 = cljs.core.first(seq__23789_24295__$1);
var script_tag_24302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23810_24301,(0),null);
var script_body_24303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23810_24301,(1),null);
eval(script_body_24303);


var G__24304 = cljs.core.next(seq__23789_24295__$1);
var G__24305 = null;
var G__24306 = (0);
var G__24307 = (0);
seq__23789_24282 = G__24304;
chunk__23790_24283 = G__24305;
count__23791_24284 = G__24306;
i__23792_24285 = G__24307;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__23816){
var vec__23818 = p__23816;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23818,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23818,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__23832 = arguments.length;
switch (G__23832) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__23874 = cljs.core.seq(style_keys);
var chunk__23875 = null;
var count__23876 = (0);
var i__23877 = (0);
while(true){
if((i__23877 < count__23876)){
var it = chunk__23875.cljs$core$IIndexed$_nth$arity$2(null,i__23877);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__24313 = seq__23874;
var G__24314 = chunk__23875;
var G__24315 = count__23876;
var G__24316 = (i__23877 + (1));
seq__23874 = G__24313;
chunk__23875 = G__24314;
count__23876 = G__24315;
i__23877 = G__24316;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__23874);
if(temp__5753__auto__){
var seq__23874__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23874__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__23874__$1);
var G__24317 = cljs.core.chunk_rest(seq__23874__$1);
var G__24318 = c__4679__auto__;
var G__24319 = cljs.core.count(c__4679__auto__);
var G__24320 = (0);
seq__23874 = G__24317;
chunk__23875 = G__24318;
count__23876 = G__24319;
i__23877 = G__24320;
continue;
} else {
var it = cljs.core.first(seq__23874__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__24323 = cljs.core.next(seq__23874__$1);
var G__24324 = null;
var G__24325 = (0);
var G__24326 = (0);
seq__23874 = G__24323;
chunk__23875 = G__24324;
count__23876 = G__24325;
i__23877 = G__24326;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k23879,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__23893 = k23879;
var G__23893__$1 = (((G__23893 instanceof cljs.core.Keyword))?G__23893.fqn:null);
switch (G__23893__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23879,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__23897){
var vec__23898 = p__23897;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23898,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23898,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23878){
var self__ = this;
var G__23878__$1 = this;
return (new cljs.core.RecordIter((0),G__23878__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23880,other23881){
var self__ = this;
var this23880__$1 = this;
return (((!((other23881 == null)))) && ((((this23880__$1.constructor === other23881.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23880__$1.x,other23881.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23880__$1.y,other23881.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23880__$1.__extmap,other23881.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k23879){
var self__ = this;
var this__4509__auto____$1 = this;
var G__23901 = k23879;
var G__23901__$1 = (((G__23901 instanceof cljs.core.Keyword))?G__23901.fqn:null);
switch (G__23901__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k23879);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__23878){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__23906 = cljs.core.keyword_identical_QMARK_;
var expr__23907 = k__4511__auto__;
if(cljs.core.truth_((pred__23906.cljs$core$IFn$_invoke$arity$2 ? pred__23906.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__23907) : pred__23906.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__23907)))){
return (new shadow.dom.Coordinate(G__23878,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__23906.cljs$core$IFn$_invoke$arity$2 ? pred__23906.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__23907) : pred__23906.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__23907)))){
return (new shadow.dom.Coordinate(self__.x,G__23878,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__23878),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__23878){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__23878,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__23886){
var extmap__4542__auto__ = (function (){var G__23909 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23886,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__23886)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__23909);
} else {
return G__23909;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__23886),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__23886),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k23911,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__23915 = k23911;
var G__23915__$1 = (((G__23915 instanceof cljs.core.Keyword))?G__23915.fqn:null);
switch (G__23915__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23911,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__23916){
var vec__23917 = p__23916;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23917,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23917,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23910){
var self__ = this;
var G__23910__$1 = this;
return (new cljs.core.RecordIter((0),G__23910__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23912,other23913){
var self__ = this;
var this23912__$1 = this;
return (((!((other23913 == null)))) && ((((this23912__$1.constructor === other23913.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23912__$1.w,other23913.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23912__$1.h,other23913.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23912__$1.__extmap,other23913.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k23911){
var self__ = this;
var this__4509__auto____$1 = this;
var G__23928 = k23911;
var G__23928__$1 = (((G__23928 instanceof cljs.core.Keyword))?G__23928.fqn:null);
switch (G__23928__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k23911);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__23910){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__23929 = cljs.core.keyword_identical_QMARK_;
var expr__23930 = k__4511__auto__;
if(cljs.core.truth_((pred__23929.cljs$core$IFn$_invoke$arity$2 ? pred__23929.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__23930) : pred__23929.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__23930)))){
return (new shadow.dom.Size(G__23910,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__23929.cljs$core$IFn$_invoke$arity$2 ? pred__23929.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__23930) : pred__23929.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__23930)))){
return (new shadow.dom.Size(self__.w,G__23910,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__23910),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__23910){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__23910,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__23914){
var extmap__4542__auto__ = (function (){var G__23939 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23914,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__23914)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__23939);
} else {
return G__23939;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__23914),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__23914),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__24350 = (i + (1));
var G__24351 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__24350;
ret = G__24351;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__23944){
var vec__23945 = p__23944;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23945,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23945,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__23949 = arguments.length;
switch (G__23949) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__24365 = ps;
var G__24366 = (i + (1));
el__$1 = G__24365;
i = G__24366;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__23970 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23970,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23970,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23970,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__23973_24380 = cljs.core.seq(props);
var chunk__23974_24381 = null;
var count__23975_24382 = (0);
var i__23976_24383 = (0);
while(true){
if((i__23976_24383 < count__23975_24382)){
var vec__23988_24388 = chunk__23974_24381.cljs$core$IIndexed$_nth$arity$2(null,i__23976_24383);
var k_24389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23988_24388,(0),null);
var v_24390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23988_24388,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_24389);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_24389),v_24390);


var G__24391 = seq__23973_24380;
var G__24392 = chunk__23974_24381;
var G__24393 = count__23975_24382;
var G__24394 = (i__23976_24383 + (1));
seq__23973_24380 = G__24391;
chunk__23974_24381 = G__24392;
count__23975_24382 = G__24393;
i__23976_24383 = G__24394;
continue;
} else {
var temp__5753__auto___24395 = cljs.core.seq(seq__23973_24380);
if(temp__5753__auto___24395){
var seq__23973_24396__$1 = temp__5753__auto___24395;
if(cljs.core.chunked_seq_QMARK_(seq__23973_24396__$1)){
var c__4679__auto___24398 = cljs.core.chunk_first(seq__23973_24396__$1);
var G__24399 = cljs.core.chunk_rest(seq__23973_24396__$1);
var G__24400 = c__4679__auto___24398;
var G__24401 = cljs.core.count(c__4679__auto___24398);
var G__24402 = (0);
seq__23973_24380 = G__24399;
chunk__23974_24381 = G__24400;
count__23975_24382 = G__24401;
i__23976_24383 = G__24402;
continue;
} else {
var vec__23991_24403 = cljs.core.first(seq__23973_24396__$1);
var k_24404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23991_24403,(0),null);
var v_24405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23991_24403,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_24404);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_24404),v_24405);


var G__24406 = cljs.core.next(seq__23973_24396__$1);
var G__24407 = null;
var G__24408 = (0);
var G__24409 = (0);
seq__23973_24380 = G__24406;
chunk__23974_24381 = G__24407;
count__23975_24382 = G__24408;
i__23976_24383 = G__24409;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__23995 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23995,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23995,(1),null);
var seq__23998_24412 = cljs.core.seq(node_children);
var chunk__24000_24413 = null;
var count__24001_24414 = (0);
var i__24002_24415 = (0);
while(true){
if((i__24002_24415 < count__24001_24414)){
var child_struct_24416 = chunk__24000_24413.cljs$core$IIndexed$_nth$arity$2(null,i__24002_24415);
if((!((child_struct_24416 == null)))){
if(typeof child_struct_24416 === 'string'){
var text_24418 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_24418),child_struct_24416].join(''));
} else {
var children_24419 = shadow.dom.svg_node(child_struct_24416);
if(cljs.core.seq_QMARK_(children_24419)){
var seq__24016_24420 = cljs.core.seq(children_24419);
var chunk__24018_24421 = null;
var count__24019_24422 = (0);
var i__24020_24423 = (0);
while(true){
if((i__24020_24423 < count__24019_24422)){
var child_24425 = chunk__24018_24421.cljs$core$IIndexed$_nth$arity$2(null,i__24020_24423);
if(cljs.core.truth_(child_24425)){
node.appendChild(child_24425);


var G__24426 = seq__24016_24420;
var G__24427 = chunk__24018_24421;
var G__24428 = count__24019_24422;
var G__24429 = (i__24020_24423 + (1));
seq__24016_24420 = G__24426;
chunk__24018_24421 = G__24427;
count__24019_24422 = G__24428;
i__24020_24423 = G__24429;
continue;
} else {
var G__24430 = seq__24016_24420;
var G__24431 = chunk__24018_24421;
var G__24432 = count__24019_24422;
var G__24433 = (i__24020_24423 + (1));
seq__24016_24420 = G__24430;
chunk__24018_24421 = G__24431;
count__24019_24422 = G__24432;
i__24020_24423 = G__24433;
continue;
}
} else {
var temp__5753__auto___24434 = cljs.core.seq(seq__24016_24420);
if(temp__5753__auto___24434){
var seq__24016_24435__$1 = temp__5753__auto___24434;
if(cljs.core.chunked_seq_QMARK_(seq__24016_24435__$1)){
var c__4679__auto___24436 = cljs.core.chunk_first(seq__24016_24435__$1);
var G__24437 = cljs.core.chunk_rest(seq__24016_24435__$1);
var G__24438 = c__4679__auto___24436;
var G__24439 = cljs.core.count(c__4679__auto___24436);
var G__24440 = (0);
seq__24016_24420 = G__24437;
chunk__24018_24421 = G__24438;
count__24019_24422 = G__24439;
i__24020_24423 = G__24440;
continue;
} else {
var child_24441 = cljs.core.first(seq__24016_24435__$1);
if(cljs.core.truth_(child_24441)){
node.appendChild(child_24441);


var G__24442 = cljs.core.next(seq__24016_24435__$1);
var G__24443 = null;
var G__24444 = (0);
var G__24445 = (0);
seq__24016_24420 = G__24442;
chunk__24018_24421 = G__24443;
count__24019_24422 = G__24444;
i__24020_24423 = G__24445;
continue;
} else {
var G__24446 = cljs.core.next(seq__24016_24435__$1);
var G__24447 = null;
var G__24448 = (0);
var G__24449 = (0);
seq__24016_24420 = G__24446;
chunk__24018_24421 = G__24447;
count__24019_24422 = G__24448;
i__24020_24423 = G__24449;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_24419);
}
}


var G__24450 = seq__23998_24412;
var G__24451 = chunk__24000_24413;
var G__24452 = count__24001_24414;
var G__24453 = (i__24002_24415 + (1));
seq__23998_24412 = G__24450;
chunk__24000_24413 = G__24451;
count__24001_24414 = G__24452;
i__24002_24415 = G__24453;
continue;
} else {
var G__24454 = seq__23998_24412;
var G__24455 = chunk__24000_24413;
var G__24456 = count__24001_24414;
var G__24457 = (i__24002_24415 + (1));
seq__23998_24412 = G__24454;
chunk__24000_24413 = G__24455;
count__24001_24414 = G__24456;
i__24002_24415 = G__24457;
continue;
}
} else {
var temp__5753__auto___24458 = cljs.core.seq(seq__23998_24412);
if(temp__5753__auto___24458){
var seq__23998_24459__$1 = temp__5753__auto___24458;
if(cljs.core.chunked_seq_QMARK_(seq__23998_24459__$1)){
var c__4679__auto___24460 = cljs.core.chunk_first(seq__23998_24459__$1);
var G__24461 = cljs.core.chunk_rest(seq__23998_24459__$1);
var G__24462 = c__4679__auto___24460;
var G__24463 = cljs.core.count(c__4679__auto___24460);
var G__24464 = (0);
seq__23998_24412 = G__24461;
chunk__24000_24413 = G__24462;
count__24001_24414 = G__24463;
i__24002_24415 = G__24464;
continue;
} else {
var child_struct_24465 = cljs.core.first(seq__23998_24459__$1);
if((!((child_struct_24465 == null)))){
if(typeof child_struct_24465 === 'string'){
var text_24466 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_24466),child_struct_24465].join(''));
} else {
var children_24467 = shadow.dom.svg_node(child_struct_24465);
if(cljs.core.seq_QMARK_(children_24467)){
var seq__24023_24469 = cljs.core.seq(children_24467);
var chunk__24025_24470 = null;
var count__24026_24471 = (0);
var i__24027_24472 = (0);
while(true){
if((i__24027_24472 < count__24026_24471)){
var child_24473 = chunk__24025_24470.cljs$core$IIndexed$_nth$arity$2(null,i__24027_24472);
if(cljs.core.truth_(child_24473)){
node.appendChild(child_24473);


var G__24474 = seq__24023_24469;
var G__24475 = chunk__24025_24470;
var G__24476 = count__24026_24471;
var G__24477 = (i__24027_24472 + (1));
seq__24023_24469 = G__24474;
chunk__24025_24470 = G__24475;
count__24026_24471 = G__24476;
i__24027_24472 = G__24477;
continue;
} else {
var G__24478 = seq__24023_24469;
var G__24479 = chunk__24025_24470;
var G__24480 = count__24026_24471;
var G__24481 = (i__24027_24472 + (1));
seq__24023_24469 = G__24478;
chunk__24025_24470 = G__24479;
count__24026_24471 = G__24480;
i__24027_24472 = G__24481;
continue;
}
} else {
var temp__5753__auto___24482__$1 = cljs.core.seq(seq__24023_24469);
if(temp__5753__auto___24482__$1){
var seq__24023_24483__$1 = temp__5753__auto___24482__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24023_24483__$1)){
var c__4679__auto___24484 = cljs.core.chunk_first(seq__24023_24483__$1);
var G__24485 = cljs.core.chunk_rest(seq__24023_24483__$1);
var G__24486 = c__4679__auto___24484;
var G__24487 = cljs.core.count(c__4679__auto___24484);
var G__24488 = (0);
seq__24023_24469 = G__24485;
chunk__24025_24470 = G__24486;
count__24026_24471 = G__24487;
i__24027_24472 = G__24488;
continue;
} else {
var child_24489 = cljs.core.first(seq__24023_24483__$1);
if(cljs.core.truth_(child_24489)){
node.appendChild(child_24489);


var G__24490 = cljs.core.next(seq__24023_24483__$1);
var G__24491 = null;
var G__24492 = (0);
var G__24493 = (0);
seq__24023_24469 = G__24490;
chunk__24025_24470 = G__24491;
count__24026_24471 = G__24492;
i__24027_24472 = G__24493;
continue;
} else {
var G__24494 = cljs.core.next(seq__24023_24483__$1);
var G__24495 = null;
var G__24496 = (0);
var G__24497 = (0);
seq__24023_24469 = G__24494;
chunk__24025_24470 = G__24495;
count__24026_24471 = G__24496;
i__24027_24472 = G__24497;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_24467);
}
}


var G__24498 = cljs.core.next(seq__23998_24459__$1);
var G__24499 = null;
var G__24500 = (0);
var G__24501 = (0);
seq__23998_24412 = G__24498;
chunk__24000_24413 = G__24499;
count__24001_24414 = G__24500;
i__24002_24415 = G__24501;
continue;
} else {
var G__24502 = cljs.core.next(seq__23998_24459__$1);
var G__24503 = null;
var G__24504 = (0);
var G__24505 = (0);
seq__23998_24412 = G__24502;
chunk__24000_24413 = G__24503;
count__24001_24414 = G__24504;
i__24002_24415 = G__24505;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___24508 = arguments.length;
var i__4865__auto___24509 = (0);
while(true){
if((i__4865__auto___24509 < len__4864__auto___24508)){
args__4870__auto__.push((arguments[i__4865__auto___24509]));

var G__24510 = (i__4865__auto___24509 + (1));
i__4865__auto___24509 = G__24510;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq24036){
var G__24037 = cljs.core.first(seq24036);
var seq24036__$1 = cljs.core.next(seq24036);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24037,seq24036__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__24039 = arguments.length;
switch (G__24039) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__19754__auto___24515 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19755__auto__ = (function (){var switch__19413__auto__ = (function (state_24044){
var state_val_24045 = (state_24044[(1)]);
if((state_val_24045 === (1))){
var state_24044__$1 = state_24044;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24044__$1,(2),once_or_cleanup);
} else {
if((state_val_24045 === (2))){
var inst_24041 = (state_24044[(2)]);
var inst_24042 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_24044__$1 = (function (){var statearr_24060 = state_24044;
(statearr_24060[(7)] = inst_24041);

return statearr_24060;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24044__$1,inst_24042);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__19415__auto__ = null;
var shadow$dom$state_machine__19415__auto____0 = (function (){
var statearr_24067 = [null,null,null,null,null,null,null,null];
(statearr_24067[(0)] = shadow$dom$state_machine__19415__auto__);

(statearr_24067[(1)] = (1));

return statearr_24067;
});
var shadow$dom$state_machine__19415__auto____1 = (function (state_24044){
while(true){
var ret_value__19416__auto__ = (function (){try{while(true){
var result__19417__auto__ = switch__19413__auto__(state_24044);
if(cljs.core.keyword_identical_QMARK_(result__19417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19417__auto__;
}
break;
}
}catch (e24068){var ex__19418__auto__ = e24068;
var statearr_24069_24516 = state_24044;
(statearr_24069_24516[(2)] = ex__19418__auto__);


if(cljs.core.seq((state_24044[(4)]))){
var statearr_24070_24517 = state_24044;
(statearr_24070_24517[(1)] = cljs.core.first((state_24044[(4)])));

} else {
throw ex__19418__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24518 = state_24044;
state_24044 = G__24518;
continue;
} else {
return ret_value__19416__auto__;
}
break;
}
});
shadow$dom$state_machine__19415__auto__ = function(state_24044){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__19415__auto____0.call(this);
case 1:
return shadow$dom$state_machine__19415__auto____1.call(this,state_24044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__19415__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__19415__auto____0;
shadow$dom$state_machine__19415__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__19415__auto____1;
return shadow$dom$state_machine__19415__auto__;
})()
})();
var state__19756__auto__ = (function (){var statearr_24079 = f__19755__auto__();
(statearr_24079[(6)] = c__19754__auto___24515);

return statearr_24079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19756__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
