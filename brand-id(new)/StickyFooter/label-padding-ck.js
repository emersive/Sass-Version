var Lance={uniformButton:function(e){var t=$$("#"+e+" label"),n=0,r,i;for(r in t)t.hasOwnProperty(r)&&t[r].offsetHeight>n&&(n=t[r].offsetHeight);for(r in t)if(t.hasOwnProperty(r)&&t[r].offsetHeight<=n){i=parseInt($(t[r]).getStyle("padding-top"))+parseInt($(t[r]).getStyle("padding-bottom"));var s=n-t[r].offsetHeight;s=parseInt(s/2);var o=parseInt($(t[r]).getStyle("padding-top"))+s,u=parseInt($(t[r]).getStyle("padding-bottom"))+s;if(t[r].hasClassName("q-radio")==0&&t[r].hasClassName("q-checkbox")==0){t[r].style.paddingTop=o+"px";t[r].style.paddingBottom=u+"px"}}}};window.onload=function(){$$(".QuestionOuter").each(function(e){$(e).hasClassName("MC")&&Lance.uniformButton(e.id)})};