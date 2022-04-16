goog.provide('bb_passrates.frontend.background_color_click_handler');
bb_passrates.frontend.background_color_click_handler.mount = (function bb_passrates$frontend$background_color_click_handler$mount(){
var btn = document.getElementById("background-color");
if(cljs.core.truth_(btn)){
return btn.addEventListener("click",(function (_){
return (document.body.style.background = "#644bff");
}));
} else {
return null;
}
});

//# sourceMappingURL=bb_passrates.frontend.background_color_click_handler.js.map
