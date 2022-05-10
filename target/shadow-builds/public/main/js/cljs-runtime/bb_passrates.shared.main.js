goog.provide('bb_passrates.shared.main');
/**
 * Allow:
 *   - alphanumeric
 *   - spaces
 *   - comma: ','
 *   
 */
bb_passrates.shared.main.clean_q = (function bb_passrates$shared$main$clean_q(q){
var words = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(clojure.string.lower_case(q),/[^0-9a-z_ ]/,""),/ /);
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,words);
});
bb_passrates.shared.main.query_place_list = (function bb_passrates$shared$main$query_place_list(list,q){
var q__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",bb_passrates.shared.main.clean_q(q)));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__11432_SHARP_){
return clojure.string.includes_QMARK_(new cljs.core.Keyword(null,"search-field","search-field",546910583).cljs$core$IFn$_invoke$arity$1(p1__11432_SHARP_),q__$1);
}),list);
});
bb_passrates.shared.main.lang = new cljs.core.Keyword(null,"pt","pt",556460867);
bb_passrates.shared.main.seo = new cljs.core.PersistentArrayMap(null, 3, ["district","distritos","municipality","municipios","city","cidades"], null);
bb_passrates.shared.main.url__GT_canonical = clojure.set.map_invert(bb_passrates.shared.main.seo);
/**
 * builds href taking into account a variable number of query strings
 */
bb_passrates.shared.main.build_href = (function bb_passrates$shared$main$build_href(path,p__11456){
var map__11457 = p__11456;
var map__11457__$1 = cljs.core.__destructure_map(map__11457);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11457__$1,new cljs.core.Keyword("url","lang","url/lang",-1820087265));
var foo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11457__$1,new cljs.core.Keyword("url","foo","url/foo",1268843297));
var qs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__11449_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("=",p1__11449_SHARP_);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(lang)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["lang",lang], null):null),(cljs.core.truth_(foo)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo",foo], null):null)], null)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(null,foo,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lang], 0))){
return path;
} else {
if((cljs.core.count(qs) > (1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("&",qs),(new cljs.core.List(null,"?",(new cljs.core.List(null,path,null,(1),null)),(2),null))));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.into.cljs$core$IFn$_invoke$arity$2(qs,(new cljs.core.List(null,"?",(new cljs.core.List(null,path,null,(1),null)),(2),null))));

}
}
});
bb_passrates.shared.main.query_string__GT_map = (function bb_passrates$shared$main$query_string__GT_map(query_string){
if((!(cljs.core.empty_QMARK_(query_string)))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__11499){
var vec__11500 = p__11499;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11500,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11500,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("url",k),v);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__11494_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__11494_SHARP_,/=/);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__11493_SHARP_){
return clojure.string.includes_QMARK_(p1__11493_SHARP_,"=");
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(query_string,/&/))));
} else {
return null;
}
});
/**
 * parses query params and build a request map
 */
bb_passrates.shared.main.url__GT_req_map = (function bb_passrates$shared$main$url__GT_req_map(uri,req_method,query_string){
var uri__$1 = cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(uri,/\?/));
var req_method__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(req_method));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uri","uri",-774711847),uri__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830),req_method__$1], null),bb_passrates.shared.main.query_string__GT_map(query_string)], 0));
});

//# sourceMappingURL=bb_passrates.shared.main.js.map
