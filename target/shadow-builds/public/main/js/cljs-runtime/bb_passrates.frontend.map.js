goog.provide('bb_passrates.frontend.map');
bb_passrates.frontend.map.set_map = (function bb_passrates$frontend$map$set_map(){
var el = document.querySelector("#map");
if(cljs.core.truth_(el)){
var vec__20951 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseFloat((function (){var target_obj_20954 = el;
var _STAR_runtime_state_STAR__orig_val__20958 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__20959 = oops.state.prepare_state(target_obj_20954,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__20959);

try{var next_obj_20955 = ((oops.core.validate_object_access_dynamically(target_obj_20954,(0),"attributes",true,true,false))?(target_obj_20954["attributes"]):null);
var next_obj_20956 = ((oops.core.validate_object_access_dynamically(next_obj_20955,(0),"lat",true,true,false))?(next_obj_20955["lat"]):null);
var next_obj_20957 = ((oops.core.validate_object_access_dynamically(next_obj_20956,(0),"value",true,true,false))?(next_obj_20956["value"]):null);
return next_obj_20957;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__20958);
}})()),parseFloat((function (){var target_obj_20960 = el;
var _STAR_runtime_state_STAR__orig_val__20964 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__20965 = oops.state.prepare_state(target_obj_20960,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__20965);

try{var next_obj_20961 = ((oops.core.validate_object_access_dynamically(target_obj_20960,(0),"attributes",true,true,false))?(target_obj_20960["attributes"]):null);
var next_obj_20962 = ((oops.core.validate_object_access_dynamically(next_obj_20961,(0),"long",true,true,false))?(next_obj_20961["long"]):null);
var next_obj_20963 = ((oops.core.validate_object_access_dynamically(next_obj_20962,(0),"value",true,true,false))?(next_obj_20962["value"]):null);
return next_obj_20963;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__20964);
}})())], null);
var lat_centre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20951,(0),null);
var long_centre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20951,(1),null);
var map = L.map("map").setView(L.latLng(lat_centre,long_centre),(13));
var tile_server = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
var attribution = "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors";
L.tileLayer(tile_server,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attribution","attribution",1937239286),attribution], null))).addTo(map);

return Array.from(document.querySelectorAll(".school")).forEach((function (el__$1){
var lat = (function (){var target_obj_20966 = el__$1;
var _STAR_runtime_state_STAR__orig_val__20970 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__20971 = oops.state.prepare_state(target_obj_20966,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__20971);

try{var next_obj_20967 = ((oops.core.validate_object_access_dynamically(target_obj_20966,(0),"attributes",true,true,false))?(target_obj_20966["attributes"]):null);
var next_obj_20968 = ((oops.core.validate_object_access_dynamically(next_obj_20967,(0),"lat",true,true,false))?(next_obj_20967["lat"]):null);
var next_obj_20969 = ((oops.core.validate_object_access_dynamically(next_obj_20968,(0),"value",true,true,false))?(next_obj_20968["value"]):null);
return next_obj_20969;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__20970);
}})();
var long$ = (function (){var target_obj_20972 = el__$1;
var _STAR_runtime_state_STAR__orig_val__20976 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__20977 = oops.state.prepare_state(target_obj_20972,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__20977);

try{var next_obj_20973 = ((oops.core.validate_object_access_dynamically(target_obj_20972,(0),"attributes",true,true,false))?(target_obj_20972["attributes"]):null);
var next_obj_20974 = ((oops.core.validate_object_access_dynamically(next_obj_20973,(0),"long",true,true,false))?(next_obj_20973["long"]):null);
var next_obj_20975 = ((oops.core.validate_object_access_dynamically(next_obj_20974,(0),"value",true,true,false))?(next_obj_20974["value"]):null);
return next_obj_20975;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__20976);
}})();
return L.marker(L.latLng(lat,long$)).addTo(map);
}));
} else {
return null;
}
});

//# sourceMappingURL=bb_passrates.frontend.map.js.map
