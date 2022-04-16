goog.provide('bb_passrates.frontend.map');
bb_passrates.frontend.map.set_map = (function bb_passrates$frontend$map$set_map(){
var el = document.querySelector("#map");
if(cljs.core.truth_(el)){
var vec__28538 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseFloat(el.attributes.lat.value),parseFloat(el.attributes.long.value)], null);
var lat_centre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28538,(0),null);
var long_centre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28538,(1),null);
var map = L.map("map").setView(L.latLng(lat_centre,long_centre),(13));
var tile_server = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
var attribution = "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors";
L.tileLayer(tile_server,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attribution","attribution",1937239286),attribution], null))).addTo(map);

return Array.from(document.querySelectorAll(".school")).forEach((function (el__$1){
var lat = parseFloat(el.attributes.lat.value);
var long$ = parseFloat(el.attributes.long.value);
return L.marker(L.latLng(lat,long$)).addTo(map);
}));
} else {
return null;
}
});

//# sourceMappingURL=bb_passrates.frontend.map.js.map
