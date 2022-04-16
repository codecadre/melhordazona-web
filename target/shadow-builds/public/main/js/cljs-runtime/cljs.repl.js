goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__24853){
var map__24855 = p__24853;
var map__24855__$1 = cljs.core.__destructure_map(map__24855);
var m = map__24855__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24855__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24855__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24857_25429 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24858_25430 = null;
var count__24859_25431 = (0);
var i__24860_25432 = (0);
while(true){
if((i__24860_25432 < count__24859_25431)){
var f_25433 = chunk__24858_25430.cljs$core$IIndexed$_nth$arity$2(null,i__24860_25432);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_25433], 0));


var G__25434 = seq__24857_25429;
var G__25435 = chunk__24858_25430;
var G__25436 = count__24859_25431;
var G__25437 = (i__24860_25432 + (1));
seq__24857_25429 = G__25434;
chunk__24858_25430 = G__25435;
count__24859_25431 = G__25436;
i__24860_25432 = G__25437;
continue;
} else {
var temp__5753__auto___25439 = cljs.core.seq(seq__24857_25429);
if(temp__5753__auto___25439){
var seq__24857_25440__$1 = temp__5753__auto___25439;
if(cljs.core.chunked_seq_QMARK_(seq__24857_25440__$1)){
var c__4679__auto___25441 = cljs.core.chunk_first(seq__24857_25440__$1);
var G__25442 = cljs.core.chunk_rest(seq__24857_25440__$1);
var G__25443 = c__4679__auto___25441;
var G__25444 = cljs.core.count(c__4679__auto___25441);
var G__25445 = (0);
seq__24857_25429 = G__25442;
chunk__24858_25430 = G__25443;
count__24859_25431 = G__25444;
i__24860_25432 = G__25445;
continue;
} else {
var f_25446 = cljs.core.first(seq__24857_25440__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_25446], 0));


var G__25448 = cljs.core.next(seq__24857_25440__$1);
var G__25449 = null;
var G__25450 = (0);
var G__25451 = (0);
seq__24857_25429 = G__25448;
chunk__24858_25430 = G__25449;
count__24859_25431 = G__25450;
i__24860_25432 = G__25451;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25452 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_25452], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_25452)))?cljs.core.second(arglists_25452):arglists_25452)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24953_25453 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24954_25454 = null;
var count__24955_25455 = (0);
var i__24956_25456 = (0);
while(true){
if((i__24956_25456 < count__24955_25455)){
var vec__25011_25457 = chunk__24954_25454.cljs$core$IIndexed$_nth$arity$2(null,i__24956_25456);
var name_25458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25011_25457,(0),null);
var map__25014_25459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25011_25457,(1),null);
var map__25014_25460__$1 = cljs.core.__destructure_map(map__25014_25459);
var doc_25461 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25014_25460__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_25462 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25014_25460__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_25458], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_25462], 0));

if(cljs.core.truth_(doc_25461)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_25461], 0));
} else {
}


var G__25463 = seq__24953_25453;
var G__25464 = chunk__24954_25454;
var G__25465 = count__24955_25455;
var G__25466 = (i__24956_25456 + (1));
seq__24953_25453 = G__25463;
chunk__24954_25454 = G__25464;
count__24955_25455 = G__25465;
i__24956_25456 = G__25466;
continue;
} else {
var temp__5753__auto___25467 = cljs.core.seq(seq__24953_25453);
if(temp__5753__auto___25467){
var seq__24953_25468__$1 = temp__5753__auto___25467;
if(cljs.core.chunked_seq_QMARK_(seq__24953_25468__$1)){
var c__4679__auto___25469 = cljs.core.chunk_first(seq__24953_25468__$1);
var G__25470 = cljs.core.chunk_rest(seq__24953_25468__$1);
var G__25471 = c__4679__auto___25469;
var G__25472 = cljs.core.count(c__4679__auto___25469);
var G__25473 = (0);
seq__24953_25453 = G__25470;
chunk__24954_25454 = G__25471;
count__24955_25455 = G__25472;
i__24956_25456 = G__25473;
continue;
} else {
var vec__25019_25477 = cljs.core.first(seq__24953_25468__$1);
var name_25478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25019_25477,(0),null);
var map__25022_25479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25019_25477,(1),null);
var map__25022_25480__$1 = cljs.core.__destructure_map(map__25022_25479);
var doc_25481 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25022_25480__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_25482 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25022_25480__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_25478], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_25482], 0));

if(cljs.core.truth_(doc_25481)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_25481], 0));
} else {
}


var G__25483 = cljs.core.next(seq__24953_25468__$1);
var G__25484 = null;
var G__25485 = (0);
var G__25486 = (0);
seq__24953_25453 = G__25483;
chunk__24954_25454 = G__25484;
count__24955_25455 = G__25485;
i__24956_25456 = G__25486;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__25025 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__25026 = null;
var count__25027 = (0);
var i__25028 = (0);
while(true){
if((i__25028 < count__25027)){
var role = chunk__25026.cljs$core$IIndexed$_nth$arity$2(null,i__25028);
var temp__5753__auto___25487__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___25487__$1)){
var spec_25488 = temp__5753__auto___25487__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_25488)], 0));
} else {
}


var G__25489 = seq__25025;
var G__25490 = chunk__25026;
var G__25491 = count__25027;
var G__25492 = (i__25028 + (1));
seq__25025 = G__25489;
chunk__25026 = G__25490;
count__25027 = G__25491;
i__25028 = G__25492;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__25025);
if(temp__5753__auto____$1){
var seq__25025__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__25025__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__25025__$1);
var G__25493 = cljs.core.chunk_rest(seq__25025__$1);
var G__25494 = c__4679__auto__;
var G__25495 = cljs.core.count(c__4679__auto__);
var G__25496 = (0);
seq__25025 = G__25493;
chunk__25026 = G__25494;
count__25027 = G__25495;
i__25028 = G__25496;
continue;
} else {
var role = cljs.core.first(seq__25025__$1);
var temp__5753__auto___25497__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___25497__$2)){
var spec_25498 = temp__5753__auto___25497__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_25498)], 0));
} else {
}


var G__25499 = cljs.core.next(seq__25025__$1);
var G__25500 = null;
var G__25501 = (0);
var G__25502 = (0);
seq__25025 = G__25499;
chunk__25026 = G__25500;
count__25027 = G__25501;
i__25028 = G__25502;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__25503 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__25504 = cljs.core.ex_cause(t);
via = G__25503;
t = G__25504;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__25116 = datafied_throwable;
var map__25116__$1 = cljs.core.__destructure_map(map__25116);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25116__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25116__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25116__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__25117 = cljs.core.last(via);
var map__25117__$1 = cljs.core.__destructure_map(map__25117);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25117__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25117__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25117__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__25118 = data;
var map__25118__$1 = cljs.core.__destructure_map(map__25118);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25118__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25118__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25118__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__25119 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__25119__$1 = cljs.core.__destructure_map(map__25119);
var top_data = map__25119__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25119__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__25129 = phase;
var G__25129__$1 = (((G__25129 instanceof cljs.core.Keyword))?G__25129.fqn:null);
switch (G__25129__$1) {
case "read-source":
var map__25130 = data;
var map__25130__$1 = cljs.core.__destructure_map(map__25130);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25130__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25130__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__25131 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__25131__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25131,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__25131);
var G__25131__$2 = (cljs.core.truth_((function (){var fexpr__25132 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__25132.cljs$core$IFn$_invoke$arity$1 ? fexpr__25132.cljs$core$IFn$_invoke$arity$1(source) : fexpr__25132.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__25131__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__25131__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25131__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__25131__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__25137 = top_data;
var G__25137__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25137,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__25137);
var G__25137__$2 = (cljs.core.truth_((function (){var fexpr__25147 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__25147.cljs$core$IFn$_invoke$arity$1 ? fexpr__25147.cljs$core$IFn$_invoke$arity$1(source) : fexpr__25147.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__25137__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__25137__$1);
var G__25137__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25137__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__25137__$2);
var G__25137__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25137__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__25137__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25137__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__25137__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__25157 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25157,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25157,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25157,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25157,(3),null);
var G__25167 = top_data;
var G__25167__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25167,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__25167);
var G__25167__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25167__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__25167__$1);
var G__25167__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25167__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__25167__$2);
var G__25167__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25167__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__25167__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25167__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__25167__$4;
}

break;
case "execution":
var vec__25206 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25206,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25206,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25206,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25206,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__25113_SHARP_){
var or__4253__auto__ = (p1__25113_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__25216 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__25216.cljs$core$IFn$_invoke$arity$1 ? fexpr__25216.cljs$core$IFn$_invoke$arity$1(p1__25113_SHARP_) : fexpr__25216.call(null,p1__25113_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__25228 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__25228__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25228,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__25228);
var G__25228__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25228__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__25228__$1);
var G__25228__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25228__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__25228__$2);
var G__25228__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25228__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__25228__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25228__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__25228__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25129__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__25239){
var map__25240 = p__25239;
var map__25240__$1 = cljs.core.__destructure_map(map__25240);
var triage_data = map__25240__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25240__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25240__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25240__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25240__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25240__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25240__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25240__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25240__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__25269 = phase;
var G__25269__$1 = (((G__25269 instanceof cljs.core.Keyword))?G__25269.fqn:null);
switch (G__25269__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__25270 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__25271 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__25272 = loc;
var G__25273 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__25274_25530 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__25275_25531 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__25276_25532 = true;
var _STAR_print_fn_STAR__temp_val__25277_25533 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__25276_25532);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__25277_25533);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25237_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__25237_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__25275_25531);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__25274_25530);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__25270,G__25271,G__25272,G__25273) : format.call(null,G__25270,G__25271,G__25272,G__25273));

break;
case "macroexpansion":
var G__25374 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__25375 = cause_type;
var G__25376 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__25377 = loc;
var G__25378 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__25374,G__25375,G__25376,G__25377,G__25378) : format.call(null,G__25374,G__25375,G__25376,G__25377,G__25378));

break;
case "compile-syntax-check":
var G__25382 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__25383 = cause_type;
var G__25384 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__25385 = loc;
var G__25386 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__25382,G__25383,G__25384,G__25385,G__25386) : format.call(null,G__25382,G__25383,G__25384,G__25385,G__25386));

break;
case "compilation":
var G__25387 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__25388 = cause_type;
var G__25389 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__25390 = loc;
var G__25391 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__25387,G__25388,G__25389,G__25390,G__25391) : format.call(null,G__25387,G__25388,G__25389,G__25390,G__25391));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__25393 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__25394 = symbol;
var G__25395 = loc;
var G__25396 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__25400_25534 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__25401_25535 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__25402_25536 = true;
var _STAR_print_fn_STAR__temp_val__25403_25537 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__25402_25536);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__25403_25537);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25238_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__25238_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__25401_25535);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__25400_25534);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__25393,G__25394,G__25395,G__25396) : format.call(null,G__25393,G__25394,G__25395,G__25396));
} else {
var G__25407 = "Execution error%s at %s(%s).\n%s\n";
var G__25408 = cause_type;
var G__25409 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__25410 = loc;
var G__25411 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__25407,G__25408,G__25409,G__25410,G__25411) : format.call(null,G__25407,G__25408,G__25409,G__25410,G__25411));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25269__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
