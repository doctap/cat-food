"use strict";(self.webpackChunkfun_box_tz=self.webpackChunkfun_box_tz||[]).push([[276],{4276:function(e,t,n){n.r(t),n.d(t,{getCLS:function(){return y},getFCP:function(){return g},getFID:function(){return C},getLCP:function(){return P},getTTFB:function(){return D}});var i,r,a,o,u=function(e,t){return{name:e,value:void 0===t?-1:t,delta:0,entries:[],id:"v2-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},c=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){if("first-input"===e&&!("PerformanceEventTiming"in self))return;var n=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return n.observe({type:e,buffered:!0}),n}}catch(e){}},f=function(e,t){var n=function n(i){"pagehide"!==i.type&&"hidden"!==document.visibilityState||(e(i),t&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},s=function(e){addEventListener("pageshow",(function(t){t.persisted&&e(t)}),!0)},m=function(e,t,n){var i;return function(r){t.value>=0&&(r||n)&&(t.delta=t.value-(i||0),(t.delta||void 0===i)&&(i=t.value,e(t)))}},v=-1,p=function(){return"hidden"===document.visibilityState?0:1/0},d=function(){f((function(e){var t=e.timeStamp;v=t}),!0)},l=function(){return v<0&&(v=p(),d(),s((function(){setTimeout((function(){v=p(),d()}),0)}))),{get firstHiddenTime(){return v}}},g=function(e,t){var n,i=l(),r=u("FCP"),a=function(e){"first-contentful-paint"===e.name&&(f&&f.disconnect(),e.startTime<i.firstHiddenTime&&(r.value=e.startTime,r.entries.push(e),n(!0)))},o=window.performance&&performance.getEntriesByName&&performance.getEntriesByName("first-contentful-paint")[0],f=o?null:c("paint",a);(o||f)&&(n=m(e,r,t),o&&a(o),s((function(i){r=u("FCP"),n=m(e,r,t),requestAnimationFrame((function(){requestAnimationFrame((function(){r.value=performance.now()-i.timeStamp,n(!0)}))}))})))},h=!1,T=-1,y=function(e,t){h||(g((function(e){T=e.value})),h=!0);var n,i=function(t){T>-1&&e(t)},r=u("CLS",0),a=0,o=[],v=function(e){if(!e.hadRecentInput){var t=o[0],i=o[o.length-1];a&&e.startTime-i.startTime<1e3&&e.startTime-t.startTime<5e3?(a+=e.value,o.push(e)):(a=e.value,o=[e]),a>r.value&&(r.value=a,r.entries=o,n())}},p=c("layout-shift",v);p&&(n=m(i,r,t),f((function(){p.takeRecords().map(v),n(!0)})),s((function(){a=0,T=-1,r=u("CLS",0),n=m(i,r,t)})))},E={passive:!0,capture:!0},w=new Date,L=function(e,t){i||(i=t,r=e,a=new Date,F(removeEventListener),S())},S=function(){if(r>=0&&r<a-w){var e={entryType:"first-input",name:i.type,target:i.target,cancelable:i.cancelable,startTime:i.timeStamp,processingStart:i.timeStamp+r};o.forEach((function(t){t(e)})),o=[]}},b=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){L(e,t),r()},i=function(){r()},r=function(){removeEventListener("pointerup",n,E),removeEventListener("pointercancel",i,E)};addEventListener("pointerup",n,E),addEventListener("pointercancel",i,E)}(t,e):L(t,e)}},F=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,b,E)}))},C=function(e,t){var n,a=l(),v=u("FID"),p=function(e){e.startTime<a.firstHiddenTime&&(v.value=e.processingStart-e.startTime,v.entries.push(e),n(!0))},d=c("first-input",p);n=m(e,v,t),d&&f((function(){d.takeRecords().map(p),d.disconnect()}),!0),d&&s((function(){var a;v=u("FID"),n=m(e,v,t),o=[],r=-1,i=null,F(addEventListener),a=p,o.push(a),S()}))},k={},P=function(e,t){var n,i=l(),r=u("LCP"),a=function(e){var t=e.startTime;t<i.firstHiddenTime&&(r.value=t,r.entries.push(e),n())},o=c("largest-contentful-paint",a);if(o){n=m(e,r,t);var v=function(){k[r.id]||(o.takeRecords().map(a),o.disconnect(),k[r.id]=!0,n(!0))};["keydown","click"].forEach((function(e){addEventListener(e,v,{once:!0,capture:!0})})),f(v,!0),s((function(i){r=u("LCP"),n=m(e,r,t),requestAnimationFrame((function(){requestAnimationFrame((function(){r.value=performance.now()-i.timeStamp,k[r.id]=!0,n(!0)}))}))}))}},D=function(e){var t,n=u("TTFB");t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var n in e)"navigationStart"!==n&&"toJSON"!==n&&(t[n]=Math.max(e[n]-e.navigationStart,0));return t}();if(n.value=n.delta=t.responseStart,n.value<0||n.value>performance.now())return;n.entries=[t],e(n)}catch(e){}},"complete"===document.readyState?setTimeout(t,0):addEventListener("load",(function(){return setTimeout(t,0)}))}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dWxlcy93ZWItdml0YWxzL2Rpc3Qvd2ViLXZpdGFscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZSxcbiAgdCxcbiAgbixcbiAgaSxcbiAgciA9IGZ1bmN0aW9uIHIoZSwgdCkge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBlLFxuICAgICAgdmFsdWU6IHZvaWQgMCA9PT0gdCA/IC0xIDogdCxcbiAgICAgIGRlbHRhOiAwLFxuICAgICAgZW50cmllczogW10sXG4gICAgICBpZDogXCJ2Mi1cIi5jb25jYXQoRGF0ZS5ub3coKSwgXCItXCIpLmNvbmNhdChNYXRoLmZsb29yKDg5OTk5OTk5OTk5OTkgKiBNYXRoLnJhbmRvbSgpKSArIDFlMTIpXG4gICAgfTtcbiAgfSxcbiAgYSA9IGZ1bmN0aW9uIGEoZSwgdCkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoUGVyZm9ybWFuY2VPYnNlcnZlci5zdXBwb3J0ZWRFbnRyeVR5cGVzLmluY2x1ZGVzKGUpKSB7XG4gICAgICAgIGlmIChcImZpcnN0LWlucHV0XCIgPT09IGUgJiYgIShcIlBlcmZvcm1hbmNlRXZlbnRUaW1pbmdcIiBpbiBzZWxmKSkgcmV0dXJuO1xuICAgICAgICB2YXIgbiA9IG5ldyBQZXJmb3JtYW5jZU9ic2VydmVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgcmV0dXJuIGUuZ2V0RW50cmllcygpLm1hcCh0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuLm9ic2VydmUoe1xuICAgICAgICAgIHR5cGU6IGUsXG4gICAgICAgICAgYnVmZmVyZWQ6ICEwXG4gICAgICAgIH0pLCBuO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH0sXG4gIG8gPSBmdW5jdGlvbiBvKGUsIHQpIHtcbiAgICB2YXIgbiA9IGZ1bmN0aW9uIG4oaSkge1xuICAgICAgXCJwYWdlaGlkZVwiICE9PSBpLnR5cGUgJiYgXCJoaWRkZW5cIiAhPT0gZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlIHx8IChlKGkpLCB0ICYmIChyZW1vdmVFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLCBuLCAhMCksIHJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwYWdlaGlkZVwiLCBuLCAhMCkpKTtcbiAgICB9O1xuICAgIGFkZEV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsIG4sICEwKSwgYWRkRXZlbnRMaXN0ZW5lcihcInBhZ2VoaWRlXCIsIG4sICEwKTtcbiAgfSxcbiAgdSA9IGZ1bmN0aW9uIHUoZSkge1xuICAgIGFkZEV2ZW50TGlzdGVuZXIoXCJwYWdlc2hvd1wiLCBmdW5jdGlvbiAodCkge1xuICAgICAgdC5wZXJzaXN0ZWQgJiYgZSh0KTtcbiAgICB9LCAhMCk7XG4gIH0sXG4gIGMgPSBmdW5jdGlvbiBjKGUsIHQsIG4pIHtcbiAgICB2YXIgaTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHIpIHtcbiAgICAgIHQudmFsdWUgPj0gMCAmJiAociB8fCBuKSAmJiAodC5kZWx0YSA9IHQudmFsdWUgLSAoaSB8fCAwKSwgKHQuZGVsdGEgfHwgdm9pZCAwID09PSBpKSAmJiAoaSA9IHQudmFsdWUsIGUodCkpKTtcbiAgICB9O1xuICB9LFxuICBmID0gLTEsXG4gIHMgPSBmdW5jdGlvbiBzKCkge1xuICAgIHJldHVybiBcImhpZGRlblwiID09PSBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPyAwIDogMSAvIDA7XG4gIH0sXG4gIG0gPSBmdW5jdGlvbiBtKCkge1xuICAgIG8oZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciB0ID0gZS50aW1lU3RhbXA7XG4gICAgICBmID0gdDtcbiAgICB9LCAhMCk7XG4gIH0sXG4gIHYgPSBmdW5jdGlvbiB2KCkge1xuICAgIHJldHVybiBmIDwgMCAmJiAoZiA9IHMoKSwgbSgpLCB1KGZ1bmN0aW9uICgpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBmID0gcygpLCBtKCk7XG4gICAgICB9LCAwKTtcbiAgICB9KSksIHtcbiAgICAgIGdldCBmaXJzdEhpZGRlblRpbWUoKSB7XG4gICAgICAgIHJldHVybiBmO1xuICAgICAgfVxuICAgIH07XG4gIH0sXG4gIGQgPSBmdW5jdGlvbiBkKGUsIHQpIHtcbiAgICB2YXIgbixcbiAgICAgIGkgPSB2KCksXG4gICAgICBvID0gcihcIkZDUFwiKSxcbiAgICAgIGYgPSBmdW5jdGlvbiBmKGUpIHtcbiAgICAgICAgXCJmaXJzdC1jb250ZW50ZnVsLXBhaW50XCIgPT09IGUubmFtZSAmJiAobSAmJiBtLmRpc2Nvbm5lY3QoKSwgZS5zdGFydFRpbWUgPCBpLmZpcnN0SGlkZGVuVGltZSAmJiAoby52YWx1ZSA9IGUuc3RhcnRUaW1lLCBvLmVudHJpZXMucHVzaChlKSwgbighMCkpKTtcbiAgICAgIH0sXG4gICAgICBzID0gd2luZG93LnBlcmZvcm1hbmNlICYmIHBlcmZvcm1hbmNlLmdldEVudHJpZXNCeU5hbWUgJiYgcGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5TmFtZShcImZpcnN0LWNvbnRlbnRmdWwtcGFpbnRcIilbMF0sXG4gICAgICBtID0gcyA/IG51bGwgOiBhKFwicGFpbnRcIiwgZik7XG4gICAgKHMgfHwgbSkgJiYgKG4gPSBjKGUsIG8sIHQpLCBzICYmIGYocyksIHUoZnVuY3Rpb24gKGkpIHtcbiAgICAgIG8gPSByKFwiRkNQXCIpLCBuID0gYyhlLCBvLCB0KSwgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBvLnZhbHVlID0gcGVyZm9ybWFuY2Uubm93KCkgLSBpLnRpbWVTdGFtcCwgbighMCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSkpO1xuICB9LFxuICBwID0gITEsXG4gIGwgPSAtMSxcbiAgaCA9IGZ1bmN0aW9uIGgoZSwgdCkge1xuICAgIHAgfHwgKGQoZnVuY3Rpb24gKGUpIHtcbiAgICAgIGwgPSBlLnZhbHVlO1xuICAgIH0pLCBwID0gITApO1xuICAgIHZhciBuLFxuICAgICAgaSA9IGZ1bmN0aW9uIGkodCkge1xuICAgICAgICBsID4gLTEgJiYgZSh0KTtcbiAgICAgIH0sXG4gICAgICBmID0gcihcIkNMU1wiLCAwKSxcbiAgICAgIHMgPSAwLFxuICAgICAgbSA9IFtdLFxuICAgICAgdiA9IGZ1bmN0aW9uIHYoZSkge1xuICAgICAgICBpZiAoIWUuaGFkUmVjZW50SW5wdXQpIHtcbiAgICAgICAgICB2YXIgdCA9IG1bMF0sXG4gICAgICAgICAgICBpID0gbVttLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIHMgJiYgZS5zdGFydFRpbWUgLSBpLnN0YXJ0VGltZSA8IDFlMyAmJiBlLnN0YXJ0VGltZSAtIHQuc3RhcnRUaW1lIDwgNWUzID8gKHMgKz0gZS52YWx1ZSwgbS5wdXNoKGUpKSA6IChzID0gZS52YWx1ZSwgbSA9IFtlXSksIHMgPiBmLnZhbHVlICYmIChmLnZhbHVlID0gcywgZi5lbnRyaWVzID0gbSwgbigpKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGggPSBhKFwibGF5b3V0LXNoaWZ0XCIsIHYpO1xuICAgIGggJiYgKG4gPSBjKGksIGYsIHQpLCBvKGZ1bmN0aW9uICgpIHtcbiAgICAgIGgudGFrZVJlY29yZHMoKS5tYXAodiksIG4oITApO1xuICAgIH0pLCB1KGZ1bmN0aW9uICgpIHtcbiAgICAgIHMgPSAwLCBsID0gLTEsIGYgPSByKFwiQ0xTXCIsIDApLCBuID0gYyhpLCBmLCB0KTtcbiAgICB9KSk7XG4gIH0sXG4gIFQgPSB7XG4gICAgcGFzc2l2ZTogITAsXG4gICAgY2FwdHVyZTogITBcbiAgfSxcbiAgeSA9IG5ldyBEYXRlKCksXG4gIGcgPSBmdW5jdGlvbiBnKGksIHIpIHtcbiAgICBlIHx8IChlID0gciwgdCA9IGksIG4gPSBuZXcgRGF0ZSgpLCB3KHJlbW92ZUV2ZW50TGlzdGVuZXIpLCBFKCkpO1xuICB9LFxuICBFID0gZnVuY3Rpb24gRSgpIHtcbiAgICBpZiAodCA+PSAwICYmIHQgPCBuIC0geSkge1xuICAgICAgdmFyIHIgPSB7XG4gICAgICAgIGVudHJ5VHlwZTogXCJmaXJzdC1pbnB1dFwiLFxuICAgICAgICBuYW1lOiBlLnR5cGUsXG4gICAgICAgIHRhcmdldDogZS50YXJnZXQsXG4gICAgICAgIGNhbmNlbGFibGU6IGUuY2FuY2VsYWJsZSxcbiAgICAgICAgc3RhcnRUaW1lOiBlLnRpbWVTdGFtcCxcbiAgICAgICAgcHJvY2Vzc2luZ1N0YXJ0OiBlLnRpbWVTdGFtcCArIHRcbiAgICAgIH07XG4gICAgICBpLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZShyKTtcbiAgICAgIH0pLCBpID0gW107XG4gICAgfVxuICB9LFxuICBTID0gZnVuY3Rpb24gUyhlKSB7XG4gICAgaWYgKGUuY2FuY2VsYWJsZSkge1xuICAgICAgdmFyIHQgPSAoZS50aW1lU3RhbXAgPiAxZTEyID8gbmV3IERhdGUoKSA6IHBlcmZvcm1hbmNlLm5vdygpKSAtIGUudGltZVN0YW1wO1xuICAgICAgXCJwb2ludGVyZG93blwiID09IGUudHlwZSA/IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgIHZhciBuID0gZnVuY3Rpb24gbigpIHtcbiAgICAgICAgICAgIGcoZSwgdCksIHIoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGkgPSBmdW5jdGlvbiBpKCkge1xuICAgICAgICAgICAgcigpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgciA9IGZ1bmN0aW9uIHIoKSB7XG4gICAgICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIG4sIFQpLCByZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBpLCBUKTtcbiAgICAgICAgICB9O1xuICAgICAgICBhZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIG4sIFQpLCBhZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBpLCBUKTtcbiAgICAgIH0odCwgZSkgOiBnKHQsIGUpO1xuICAgIH1cbiAgfSxcbiAgdyA9IGZ1bmN0aW9uIHcoZSkge1xuICAgIFtcIm1vdXNlZG93blwiLCBcImtleWRvd25cIiwgXCJ0b3VjaHN0YXJ0XCIsIFwicG9pbnRlcmRvd25cIl0uZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIGUodCwgUywgVCk7XG4gICAgfSk7XG4gIH0sXG4gIEwgPSBmdW5jdGlvbiBMKG4sIGYpIHtcbiAgICB2YXIgcyxcbiAgICAgIG0gPSB2KCksXG4gICAgICBkID0gcihcIkZJRFwiKSxcbiAgICAgIHAgPSBmdW5jdGlvbiBwKGUpIHtcbiAgICAgICAgZS5zdGFydFRpbWUgPCBtLmZpcnN0SGlkZGVuVGltZSAmJiAoZC52YWx1ZSA9IGUucHJvY2Vzc2luZ1N0YXJ0IC0gZS5zdGFydFRpbWUsIGQuZW50cmllcy5wdXNoKGUpLCBzKCEwKSk7XG4gICAgICB9LFxuICAgICAgbCA9IGEoXCJmaXJzdC1pbnB1dFwiLCBwKTtcbiAgICBzID0gYyhuLCBkLCBmKSwgbCAmJiBvKGZ1bmN0aW9uICgpIHtcbiAgICAgIGwudGFrZVJlY29yZHMoKS5tYXAocCksIGwuZGlzY29ubmVjdCgpO1xuICAgIH0sICEwKSwgbCAmJiB1KGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBhO1xuICAgICAgZCA9IHIoXCJGSURcIiksIHMgPSBjKG4sIGQsIGYpLCBpID0gW10sIHQgPSAtMSwgZSA9IG51bGwsIHcoYWRkRXZlbnRMaXN0ZW5lciksIGEgPSBwLCBpLnB1c2goYSksIEUoKTtcbiAgICB9KTtcbiAgfSxcbiAgYiA9IHt9LFxuICBGID0gZnVuY3Rpb24gRihlLCB0KSB7XG4gICAgdmFyIG4sXG4gICAgICBpID0gdigpLFxuICAgICAgZiA9IHIoXCJMQ1BcIiksXG4gICAgICBzID0gZnVuY3Rpb24gcyhlKSB7XG4gICAgICAgIHZhciB0ID0gZS5zdGFydFRpbWU7XG4gICAgICAgIHQgPCBpLmZpcnN0SGlkZGVuVGltZSAmJiAoZi52YWx1ZSA9IHQsIGYuZW50cmllcy5wdXNoKGUpLCBuKCkpO1xuICAgICAgfSxcbiAgICAgIG0gPSBhKFwibGFyZ2VzdC1jb250ZW50ZnVsLXBhaW50XCIsIHMpO1xuICAgIGlmIChtKSB7XG4gICAgICBuID0gYyhlLCBmLCB0KTtcbiAgICAgIHZhciBkID0gZnVuY3Rpb24gZCgpIHtcbiAgICAgICAgYltmLmlkXSB8fCAobS50YWtlUmVjb3JkcygpLm1hcChzKSwgbS5kaXNjb25uZWN0KCksIGJbZi5pZF0gPSAhMCwgbighMCkpO1xuICAgICAgfTtcbiAgICAgIFtcImtleWRvd25cIiwgXCJjbGlja1wiXS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoZSwgZCwge1xuICAgICAgICAgIG9uY2U6ICEwLFxuICAgICAgICAgIGNhcHR1cmU6ICEwXG4gICAgICAgIH0pO1xuICAgICAgfSksIG8oZCwgITApLCB1KGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIGYgPSByKFwiTENQXCIpLCBuID0gYyhlLCBmLCB0KSwgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZi52YWx1ZSA9IHBlcmZvcm1hbmNlLm5vdygpIC0gaS50aW1lU3RhbXAsIGJbZi5pZF0gPSAhMCwgbighMCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBQID0gZnVuY3Rpb24gUChlKSB7XG4gICAgdmFyIHQsXG4gICAgICBuID0gcihcIlRURkJcIik7XG4gICAgdCA9IGZ1bmN0aW9uIHQoKSB7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgdCA9IHBlcmZvcm1hbmNlLmdldEVudHJpZXNCeVR5cGUoXCJuYXZpZ2F0aW9uXCIpWzBdIHx8IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgZSA9IHBlcmZvcm1hbmNlLnRpbWluZyxcbiAgICAgICAgICAgIHQgPSB7XG4gICAgICAgICAgICAgIGVudHJ5VHlwZTogXCJuYXZpZ2F0aW9uXCIsXG4gICAgICAgICAgICAgIHN0YXJ0VGltZTogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICBmb3IgKHZhciBuIGluIGUpIFwibmF2aWdhdGlvblN0YXJ0XCIgIT09IG4gJiYgXCJ0b0pTT05cIiAhPT0gbiAmJiAodFtuXSA9IE1hdGgubWF4KGVbbl0gLSBlLm5hdmlnYXRpb25TdGFydCwgMCkpO1xuICAgICAgICAgIHJldHVybiB0O1xuICAgICAgICB9KCk7XG4gICAgICAgIGlmIChuLnZhbHVlID0gbi5kZWx0YSA9IHQucmVzcG9uc2VTdGFydCwgbi52YWx1ZSA8IDAgfHwgbi52YWx1ZSA+IHBlcmZvcm1hbmNlLm5vdygpKSByZXR1cm47XG4gICAgICAgIG4uZW50cmllcyA9IFt0XSwgZShuKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfSwgXCJjb21wbGV0ZVwiID09PSBkb2N1bWVudC5yZWFkeVN0YXRlID8gc2V0VGltZW91dCh0LCAwKSA6IGFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBzZXRUaW1lb3V0KHQsIDApO1xuICAgIH0pO1xuICB9O1xuZXhwb3J0IHsgaCBhcyBnZXRDTFMsIGQgYXMgZ2V0RkNQLCBMIGFzIGdldEZJRCwgRiBhcyBnZXRMQ1AsIFAgYXMgZ2V0VFRGQiB9OyJdLCJuYW1lcyI6WyJlIiwidCIsIm4iLCJpIiwiciIsIm5hbWUiLCJ2YWx1ZSIsImRlbHRhIiwiZW50cmllcyIsImlkIiwiY29uY2F0IiwiRGF0ZSIsIm5vdyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImEiLCJQZXJmb3JtYW5jZU9ic2VydmVyIiwic3VwcG9ydGVkRW50cnlUeXBlcyIsImluY2x1ZGVzIiwic2VsZiIsImdldEVudHJpZXMiLCJtYXAiLCJvYnNlcnZlIiwidHlwZSIsImJ1ZmZlcmVkIiwibyIsImRvY3VtZW50IiwidmlzaWJpbGl0eVN0YXRlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1IiwicGVyc2lzdGVkIiwiYyIsImYiLCJzIiwibSIsInRpbWVTdGFtcCIsInYiLCJzZXRUaW1lb3V0IiwiZmlyc3RIaWRkZW5UaW1lIiwiZCIsImRpc2Nvbm5lY3QiLCJzdGFydFRpbWUiLCJwdXNoIiwid2luZG93IiwicGVyZm9ybWFuY2UiLCJnZXRFbnRyaWVzQnlOYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicCIsImwiLCJoIiwiaGFkUmVjZW50SW5wdXQiLCJsZW5ndGgiLCJ0YWtlUmVjb3JkcyIsIlQiLCJwYXNzaXZlIiwiY2FwdHVyZSIsInkiLCJnIiwidyIsIkUiLCJlbnRyeVR5cGUiLCJ0YXJnZXQiLCJjYW5jZWxhYmxlIiwicHJvY2Vzc2luZ1N0YXJ0IiwiZm9yRWFjaCIsIlMiLCJMIiwiYiIsIkYiLCJvbmNlIiwiUCIsImdldEVudHJpZXNCeVR5cGUiLCJ0aW1pbmciLCJtYXgiLCJuYXZpZ2F0aW9uU3RhcnQiLCJyZXNwb25zZVN0YXJ0IiwicmVhZHlTdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=