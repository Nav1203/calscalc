var lanternTracker=function(f,_){function T(e){return e?(e^16*Math.random()>>e/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,T)}return{doTrack:function(e){var n,r,o,t,i,a;(e=void 0===e?{}:e).site="Myprotein",0<=_.cookie.indexOf("lantern=")||(n=T(),r="lantern",o=n,a=(t=60)?((i=new Date).setTime(i.getTime()+24*t*60*60*1e3),"; expires="+i.toGMTString()):"",_.cookie=r+"="+o+a+"; path=/; domain=myprotein.com");var c,d,l=_.referrer||"",m=_.referrer.split("/")[2]||"",p=f.location.href||"",s=f.location.hostname||"",g=navigator&&navigator.userAgent?navigator.userAgent:"",h=(c="lantern",(d=_.cookie.match("(^|;)\\s*"+c+"\\s*=\\s*([^;]+)"))?d.pop():"");e.action_tracker_id&&(e.order_id=e.order_id||"!missing",e.order_value=e.order_value||1,e.lantern_type="conversion");var u,v,k="";for(var y in e)k+="&"+y+"="+encodeURIComponent(e[y]);("myprotein.com"==m&&"checkout.myprotein.com"==s||"checkout.myprotein.com"==m&&"myprotein.com"==s)&&(s=m="internal"),m==s&&!e.action_tracker_id||(u=_.createElement("img"),v="https://lantern.roeye.com/track.php?",v+="fingerprint="+h,v+="&referrer="+encodeURIComponent(l),v+="&landingpage="+encodeURIComponent(p),v+="&useragent="+encodeURIComponent(g),v+=k,u.src=v,u.width=u.height=u.border=0,u.style.position="absolute",u.style.visibility="hidden",_.body.appendChild(u))}}}(window,document,window.lantern),lantern=void 0===lantern?{}:lantern;lanternTracker.doTrack(lantern);
