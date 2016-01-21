define("cardSlider",function(a,b,c){"use zeptojs";var d=a("prefix"),e=a("isDom"),f=function(a){var b,c,g,h,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,e="",f="",i=document.documentElement.clientHeight;if("string"==typeof a.container){if(b=document.querySelector(a.container))throw"Container unexist!"}else{if(!a.container.nodeType||1!=a.container.nodeType)throw"Container unexist!";b=a.container}if(a.onchange="function"==typeof a.onchange?a.onchange:function(){},a.duration=a.duration||300,a.duration2=a.duration2||100,a.direction=a.direction||"Y",j=!!a.scale,c="Y"==a.direction,c?(e="translate3d(0,",f=",0)"):(e="translate3d(",f=",0,0)"),h=c?"pageY":"pageX",k=c?"center top":"left center",l=c?"center bottom":"right center",i=c?document.documentElement.clientHeight:document.documentElement.clientWidth,m=function(){var d,e,a=b.childNodes,c=[];for(d=0,e=a.length;e>d;++d)1==b.childNodes[d].nodeType&&c.push(b.childNodes[d]);return c}(),m.length){for(n=m.length,a.first=a.first||0,a.first>=n?a.first=n-1:a.first<0&&(a.first=0),o=a.first,p=o+1,q=o-1,a.infinite&&(0>q&&(q=n-1),p>n-1&&(p=0)),b.parentNode.style.overflow="hidden",window.addEventListener("resize",function(){i=c?document.documentElement.clientHeight:document.documentElement.clientWidth}),t=function(a,b){s=a,r=setTimeout(function(){a(),s=a=null},b)},u=function(){clearTimeout(r),"function"==typeof s&&s()},v=!1,w=!1,x=function(a){var b=a.targetTouches||a.changedTouches,c=b[0];J=c.pageX,K=c.pageY,g=c[h],u()},y=function(a){var b=a.targetTouches||a.changedTouches,c=b[0],j=c[h],k=j-g;m[q].style[d+"transform"]=e+(k-i)+"px"+f,m[p].style[d+"transform"]=e+(k+i)+"px"+f,A(k)},z=function(a){var b=a.targetTouches||a.changedTouches,c=b[0],j=c[h],k=j-g;n-1>o&&o>0?(m[q].style[d+"transform"]=e+(k-i)+"px"+f,m[p].style[d+"transform"]=e+(k+i)+"px"+f,A(k),v=w=!1):k>0?0==o?(m[o].style[d+"transform"]=e+k/3+"px"+f,m[p].style[d+"transform"]=e+i+"px"+f,v=!0):(m[q].style[d+"transform"]=e+(k-i)+"px"+f,A(k),w=!1):0>k&&(o==n-1?(m[o].style[d+"transform"]=e+k/3+"px"+f,m[q].style[d+"transform"]=e+-1*i+"px"+f,w=!0):(m[p].style[d+"transform"]=e+(k+i)+"px"+f,A(k),v=!1))},A=function(a){j&&(a>0?(m[o].style[d+"transform-origin"]=l,m[o].style[d+"transform"]="scale("+(1-.2*Math.abs(a/i))+") translateZ(0)"):0>a?(m[o].style[d+"transform-origin"]=k,m[o].style[d+"transform"]="scale("+(1-.2*Math.abs(a/i))+") translateZ(0)"):(m[o].style[d+"transform-origin"]="",m[o].style[d+"transform"]=""))},B=function(b){var s,u,v,w,c=b.changedTouches||b.targetTouches,k=c[0],l=k[h],r=l-g;r>0&&r>=a.offset?(s=d+"transform "+a.duration/1e3+"s linear",m[q].style[d+"transition"]=s,m[q].style[d+"transform"]=e+0+"px"+f,j&&(m[o].style[d+"transition"]=s,m[o].style[d+"transform"]="scale(.8,.8) translateZ(0)"),n-1>=p&&(m[p].style[d+"transform"]=e+i+"px"+f),u=o,v=q,w=p,t(function(){m[u].style[d+"transition"]="",m[u].style[d+"transform"]=e+i+"px"+f,m[u].style.zIndex="1",m[v].style[d+"transition"]="",m[v].style.zIndex="0",a.onchange.call(m,u,v)},a.duration),E(-1)):0>r&&-1*r>=a.offset?(s=d+"transform "+a.duration/1e3+"s linear",j&&(m[o].style[d+"transition"]=s,m[o].style[d+"transform"]="scale(.8,.8) translateZ(0)"),m[p].style[d+"transition"]=s,m[p].style[d+"transform"]=e+0+"px"+f,q>=0&&(m[q].style[d+"transform"]=e+-1*i+"px"+f),u=o,v=q,w=p,t(function(){m[u].style[d+"transition"]="",m[u].style[d+"transform"]=e+-1*i+"px"+f,m[u].style.zIndex="1",m[w].style[d+"transition"]="",m[w].style.zIndex="0",a.onchange.call(m,u,w)},a.duration),E(1)):0!=r&&(s=d+"transform "+a.duration2/1e3+"s linear",q>=0&&(m[q].style[d+"transition"]=s,m[q].style[d+"transform"]=e+-1*i+"px"+f),j&&(m[o].style[d+"transition"]=s,m[o].style[d+"transform"]="scale(1,1) translateZ(0)"),n-1>=p&&(m[p].style[d+"transition"]=s,m[p].style[d+"transform"]=e+i+"px"+f),u=o,v=q,w=p,t(function(){C||(m[u].style[d+"transition"]=""),q>=0&&(m[v].style[d+"transition"]=""),n-1>=p&&(m[w].style[d+"transition"]="")},a.duration2))},C=!1,D=function(b){v||w?(m[o].style[d+"transition"]=d+"transform "+a.duration2/1e3+"s linear",m[o].style[d+"transform"]=e+0+"px"+f,t(function(){v=w=!1,m[o].style[d+"transition"]=""},a.duration2)):B(b)},E=function(b){o+=b,q=o-1,p=o+1,a.infinite&&(o>=n?(o=0,q=n-1,p=1):o==n-1?p=0:0>o?(o=n-1,q=o-1,p=0):0==o&&(q=n-1))},F=function(){for(var b=0,c=m.length;c>b;++b)m[b].addEventListener("touchstart",x),a.infinite?(m[b].addEventListener("touchmove",y),m[b].addEventListener("touchend",B),m[b].addEventListener("touchcancel",B)):(m[b].addEventListener("touchmove",z),m[b].addEventListener("touchend",D),m[b].addEventListener("touchcancel",D))},G=function(){for(var b=0,c=m.length;c>b;++b)m[b].removeEventListener("touchstart",x),a.infinite?(m[b].removeEventListener("touchmove",y),m[b].removeEventListener("touchend",B),m[b].removeEventListener("touchcancel",B)):(m[b].removeEventListener("touchmove",z),m[b].removeEventListener("touchend",D),m[b].removeEventListener("touchcancel",D))},H=0,I=m.length;I>H;++H)m[H].style.cssText="position:absolute; left:0; top:0; width:100%; height:100%; "+(a.first==H?" z-index:0;":d+"transform:"+e+i+"px"+f+"; z-index:1;");return F(),J=0,K=0,L={},L.lock=function(){G()},L.unlock=function(){F()},L.move=function(b){var c,g,h,r;b=parseInt(b)||0,b!=o&&(b>=0||n-1>=b)&&(c=d+"transform "+a.duration/1e3+"s linear",g=b>o?-1:1,a.infinite&&(g=m[b].style[d+"transform"].indexOf("-")>=0?1:-1),console.log(g),j&&(m[o].style[d+"transform-origin"]=-1==g?k:l,m[o].style[d+"transition"]=c,m[o].style[d+"transform"]="scale(.8,.8) translateZ(0)"),m[b].style[d+"transition"]=c,m[b].style[d+"transform"]=e+0+"px"+f,C=!0,h=o,r=b,t(function(){C=!1,m[h].style[d+"transition"]="",m[h].style[d+"transform-origin"]="",m[h].style[d+"transform"]="",m[h].style.zIndex=1,m[h].style[d+"transform"]=e+g*i+"px"+f,m[r].style[d+"transition"]="",m[r].style.zIndex=0,a.onchange.call(m,h,r)},a.duration),a.infinite?(o=b,q=o-1,p=o+1,0>q&&(q=n-1),p>n-1&&(p=0)):(o=b,q=o-1,p=o+1))},L}};c.exports=function(a){if(e(this))a.container=this,f(a);else if("[object Array]"==Object.prototype.toString.call(this))for(var b=0,c=this.length;c>b;++c)a.container=this[b],e(this[b])&&f(a);else f(a)}});