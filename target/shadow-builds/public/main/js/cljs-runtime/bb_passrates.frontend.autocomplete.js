goog.provide('bb_passrates.frontend.autocomplete');
bb_passrates.frontend.autocomplete.hide_char_limit = (function bb_passrates$frontend$autocomplete$hide_char_limit(){
var box = document.querySelector(".char-limit");
box.classList.remove("show");

return box.classList.add("hidden");
});
bb_passrates.frontend.autocomplete.display_char_limit = (function bb_passrates$frontend$autocomplete$display_char_limit(){
var box = document.querySelector(".char-limit");
box.classList.remove("hidden");

return box.classList.add("show");
});
bb_passrates.frontend.autocomplete.dom_build_li = (function bb_passrates$frontend$autocomplete$dom_build_li(p__19537){
var map__19538 = p__19537;
var map__19538__$1 = cljs.core.__destructure_map(map__19538);
var suggestion = map__19538__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19538__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19538__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19538__$1,new cljs.core.Keyword(null,"k","k",-2146297393));
var search_field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19538__$1,new cljs.core.Keyword(null,"search-field","search-field",546910583));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19538__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var li = document.createElement("li");
var a = document.createElement("a");
var label = type;
a.setAttribute("href",href);

(a.innerText = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),")"].join(''));

li.appendChild(a);

return li.outerHTML;
});
bb_passrates.frontend.autocomplete.dom_toggle_search_wrapper = (function bb_passrates$frontend$autocomplete$dom_toggle_search_wrapper(){
var search_wrapper = document.querySelector(".search-wrapper .search-input");
if(cljs.core.truth_(search_wrapper.classList.contains("active"))){
return search_wrapper.classList.remove("active");
} else {
return search_wrapper.classList.add("active");
}
});
bb_passrates.frontend.autocomplete.dom_show_search_wrapper = (function bb_passrates$frontend$autocomplete$dom_show_search_wrapper(){
var search_wrapper = document.querySelector(".search-wrapper .search-input");
return search_wrapper.classList.add("active");
});
bb_passrates.frontend.autocomplete.dom_hide_search_wrapper = (function bb_passrates$frontend$autocomplete$dom_hide_search_wrapper(){
var search_wrapper = document.querySelector(".search-wrapper .search-input");
return search_wrapper.classList.remove("active");
});
bb_passrates.frontend.autocomplete.on_key_fn = (function bb_passrates$frontend$autocomplete$on_key_fn(ev){
var query_string = ev.target.value;
if((cljs.core.count(query_string) > (1))){
var suggestion_box = document.querySelector(".search-input .autocomplete-box");
var li_html = cljs.core.map.cljs$core$IFn$_invoke$arity$2(bb_passrates.frontend.autocomplete.dom_build_li,bb_passrates.shared.main.query_place_list(bb_passrates.shared.places.places,query_string));
(suggestion_box.innerHTML = clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("\n",li_html)));

bb_passrates.frontend.autocomplete.hide_char_limit();

return bb_passrates.frontend.autocomplete.dom_show_search_wrapper();
} else {
bb_passrates.frontend.autocomplete.dom_hide_search_wrapper();

return bb_passrates.frontend.autocomplete.display_char_limit();
}
});
bb_passrates.frontend.autocomplete.autocomplete_cmp = (function bb_passrates$frontend$autocomplete$autocomplete_cmp(){
var input = document.querySelector(".search-wrapper .search-input input");
if(cljs.core.truth_(input)){
return (input.onkeyup = bb_passrates.frontend.autocomplete.on_key_fn);
} else {
return null;
}
});

//# sourceMappingURL=bb_passrates.frontend.autocomplete.js.map
