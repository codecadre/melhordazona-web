goog.provide('bb_passrates.frontend.lang_toggle');
bb_passrates.frontend.lang_toggle.get_param = (function bb_passrates$frontend$lang_toggle$get_param(p){
return (new URLSearchParams(window.location.search)).get(p);
});
bb_passrates.frontend.lang_toggle.mount = (function bb_passrates$frontend$lang_toggle$mount(){
var lg = bb_passrates.frontend.lang_toggle.get_param("lang");
var pt = document.getElementById("pt");
var en = document.getElementById("en");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lg,"en")){
cljs.core.reset_BANG_(bb_passrates.frontend.lang_toggle.lang,new cljs.core.Keyword(null,"en","en",88457073));

pt.classList.remove("selected");

return en.classList.add("selected");
} else {
return null;
}
});

//# sourceMappingURL=bb_passrates.frontend.lang_toggle.js.map
