"use strict";define(["app","$window"],(function(e,r){var t;return function t(){var n={},i={iframeMouseOver:false},o=function e(r){return n.element=r,n.bind(),n},u=function t(){var i=n.element.querySelector("iframe");if(!i)return;i.addEventListener("mouseover",(function(){return n.config.iframeMouseOver=true})),i.addEventListener("mouseout",(function(){return n.config.iframeMouseOver=false})),r.addEventListener("blur",(function(){n.config.iframeMouseOver&&e.publish("columbo/track","_tracking_footer_credit_trustpilot","click","footer trustpilot widget")}))};return n.config=i,n.init=o,n.bind=u,n}}));
//# sourceMappingURL=trustPilotWidget-9aefc1b221.js.map
