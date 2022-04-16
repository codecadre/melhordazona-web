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
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__28845_SHARP_){
return clojure.string.includes_QMARK_(new cljs.core.Keyword(null,"search-field","search-field",546910583).cljs$core$IFn$_invoke$arity$1(p1__28845_SHARP_),q__$1);
}),list);
});
bb_passrates.shared.main.lang = new cljs.core.Keyword(null,"pt","pt",556460867);
bb_passrates.shared.main.seo = new cljs.core.PersistentArrayMap(null, 3, ["district","distritos","municipality","municipios","city","cidades"], null);
bb_passrates.shared.main.url__GT_canonical = clojure.set.map_invert(bb_passrates.shared.main.seo);
/**
 * builds href taking into account a variable number of query strings
 */
bb_passrates.shared.main.build_href = (function bb_passrates$shared$main$build_href(path,p__28847){
var map__28848 = p__28847;
var map__28848__$1 = cljs.core.__destructure_map(map__28848);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28848__$1,new cljs.core.Keyword("url","lang","url/lang",-1820087265));
var foo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28848__$1,new cljs.core.Keyword("url","foo","url/foo",1268843297));
var qs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28846_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("=",p1__28846_SHARP_);
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
bb_passrates.shared.main.url__GT_params = (function bb_passrates$shared$main$url__GT_params(s){
var word_list = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__28849_SHARP_){
return clojure.string.includes_QMARK_(p1__28849_SHARP_,"?");
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/\//)));
var word_set = cljs.core.set(word_list);
if(cljs.core.empty_QMARK_(word_set)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("url","home","url/home",-74449548),true], null);
} else {
if(cljs.core.contains_QMARK_(word_set,"cidades")){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("url","city","url/city",-392073447),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(word_list,(1)),new cljs.core.Keyword("url","type","url/type",1175431675),new cljs.core.Keyword(null,"city","city",-393302614)], null);
} else {
if(cljs.core.contains_QMARK_(word_set,"distritos")){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("url","district","url/district",-150595376),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(word_list,(1)),new cljs.core.Keyword("url","type","url/type",1175431675),new cljs.core.Keyword(null,"district","district",-151530433)], null);
} else {
if(cljs.core.contains_QMARK_(word_set,"municipios")){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("url","municipality","url/municipality",1576121337),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(word_list,(1)),new cljs.core.Keyword("url","type","url/type",1175431675),new cljs.core.Keyword(null,"municipality","municipality",1576025836)], null);
} else {
if(cljs.core.contains_QMARK_(word_set,"escolas")){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("url","school","url/school",578478613),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(word_list,(1)),new cljs.core.Keyword("url","type","url/type",1175431675),new cljs.core.Keyword(null,"school","school",578332550)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("url","page","url/page",849183646),cljs.core.first(word_list),new cljs.core.Keyword("url","type","url/type",1175431675),new cljs.core.Keyword(null,"page","page",849072397)], null);

}
}
}
}
}
});
bb_passrates.shared.main.query_string__GT_map = (function bb_passrates$shared$main$query_string__GT_map(query_string){
if((!(cljs.core.empty_QMARK_(query_string)))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__28852){
var vec__28853 = p__28852;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28853,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28853,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("url",k),v);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28851_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__28851_SHARP_,/=/);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__28850_SHARP_){
return clojure.string.includes_QMARK_(p1__28850_SHARP_,"=");
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(query_string,/&/))));
} else {
return null;
}
});
bb_passrates.shared.main.url__GT_map = (function bb_passrates$shared$main$url__GT_map(url,query_string){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bb_passrates.shared.main.query_string__GT_map(query_string),bb_passrates.shared.main.url__GT_params(url)], 0));
});

//# sourceMappingURL=bb_passrates.shared.main.js.map
