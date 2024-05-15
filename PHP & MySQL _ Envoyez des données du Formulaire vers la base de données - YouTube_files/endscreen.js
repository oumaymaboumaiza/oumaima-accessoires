(function(g){var window=this;'use strict';var fub=function(a,b){a.ib("onAutonavCoundownStarted",b)},k6=function(a,b,c){g.xv(a.element,"ytp-suggestion-set",!!b.videoId);
var d=b.playlistId;c=b.Yg(c?c:"mqdefault.jpg");var e=null,f=null;b instanceof g.rS&&(b.lengthText?(e=b.lengthText||null,f=b.Jw||null):b.lengthSeconds&&(e=g.jG(b.lengthSeconds),f=g.jG(b.lengthSeconds,!0)));var h=!!d;d=h&&"RD"===g.uUa(d).type;var l=b instanceof g.rS?b.isLivePlayback:null,m=b instanceof g.rS?b.isUpcoming:null,n=b.author,p=b.shortViewCount,q=b.publishedTimeText,r=[],t=[];n&&r.push(n);p&&(r.push(p),t.push(p));q&&t.push(q);c={title:b.title,author:n,author_and_views:r.join(" \u2022 "),aria_label:b.ariaLabel||
g.zJ("Watch $TITLE",{TITLE:b.title}),duration:e,timestamp:f,url:b.Nk(),is_live:l,is_upcoming:m,is_list:h,is_mix:d,background:c?"background-image: url("+c+")":"",views_and_publish_time:t.join(" \u2022 "),autoplayAlternativeHeader:b.As};b instanceof g.qS&&(c.playlist_length=b.playlistLength);a.update(c)},l6=function(a){var b=a.U(),c=b.D;
g.W.call(this,{I:"a",S:"ytp-autonav-suggestion-card",X:{href:"{{url}}",target:c?b.Y:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},V:[{I:"div",Ka:["ytp-autonav-endscreen-upnext-thumbnail","ytp-autonav-thumbnail-small"],X:{style:"{{background}}"},V:[{I:"div",X:{"aria-label":"{{timestamp}}"},Ka:["ytp-autonav-timestamp"],xa:"{{duration}}"},{I:"div",Ka:["ytp-autonav-live-stamp"],xa:"Live"},{I:"div",
Ka:["ytp-autonav-upcoming-stamp"],xa:"Upcoming"},{I:"div",S:"ytp-autonav-list-overlay",V:[{I:"div",S:"ytp-autonav-mix-text",xa:"Mix"},{I:"div",S:"ytp-autonav-mix-icon"}]}]},{I:"div",Ka:["ytp-autonav-endscreen-upnext-title","ytp-autonav-title-card"],xa:"{{title}}"},{I:"div",Ka:["ytp-autonav-endscreen-upnext-author","ytp-autonav-author-card"],xa:"{{author}}"},{I:"div",Ka:["ytp-autonav-endscreen-upnext-author","ytp-autonav-view-and-date-card"],xa:"{{views_and_publish_time}}"}]});this.J=a;this.suggestion=
null;this.j=c;this.listen("click",this.onClick);this.listen("keypress",this.onKeyPress)},m6=function(a,b){b=void 0===b?!1:b;
g.W.call(this,{I:"div",S:"ytp-autonav-endscreen-countdown-overlay"});var c=this;this.K=b;this.cancelCommand=this.G=void 0;this.C=0;this.container=new g.W({I:"div",S:"ytp-autonav-endscreen-countdown-container"});g.N(this,this.container);this.container.Ja(this.element);b=a.U();var d=b.D;this.J=a;this.suggestion=null;this.onVideoDataChange("newdata",this.J.getVideoData());this.T(a,"videodatachange",this.onVideoDataChange);this.j=new g.W({I:"div",S:"ytp-autonav-endscreen-upnext-container",X:{"aria-label":"{{aria_label}}",
"data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},V:[{I:"div",S:"ytp-autonav-endscreen-upnext-header"},{I:"div",S:"ytp-autonav-endscreen-upnext-alternative-header",xa:"{{autoplayAlternativeHeader}}"},{I:"a",S:"ytp-autonav-endscreen-link-container",X:{href:"{{url}}",target:d?b.Y:""},V:[{I:"div",S:"ytp-autonav-endscreen-upnext-thumbnail",X:{style:"{{background}}"},V:[{I:"div",X:{"aria-label":"{{timestamp}}"},Ka:["ytp-autonav-timestamp"],
xa:"{{duration}}"},{I:"div",Ka:["ytp-autonav-live-stamp"],xa:"Live"},{I:"div",Ka:["ytp-autonav-upcoming-stamp"],xa:"Upcoming"}]},{I:"div",S:"ytp-autonav-endscreen-video-info",V:[{I:"div",S:"ytp-autonav-endscreen-premium-badge"},{I:"div",S:"ytp-autonav-endscreen-upnext-title",xa:"{{title}}"},{I:"div",S:"ytp-autonav-endscreen-upnext-author",xa:"{{author}}"},{I:"div",S:"ytp-autonav-view-and-date",xa:"{{views_and_publish_time}}"},{I:"div",S:"ytp-autonav-author-and-view",xa:"{{author_and_views}}"}]}]}]});
g.N(this,this.j);this.j.Ja(this.container.element);d||this.T(this.j.Fa("ytp-autonav-endscreen-link-container"),"click",this.TT);this.J.createClientVe(this.container.element,this,115127);this.J.createClientVe(this.j.Fa("ytp-autonav-endscreen-link-container"),this,115128);this.overlay=new g.W({I:"div",S:"ytp-autonav-overlay"});g.N(this,this.overlay);this.overlay.Ja(this.container.element);this.B=new g.W({I:"div",S:"ytp-autonav-endscreen-button-container"});g.N(this,this.B);this.B.Ja(this.container.element);
this.cancelButton=new g.W({I:"button",Ka:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-cancel-button",b.L("web_modern_buttons")?"ytp-autonav-endscreen-upnext-button-rounded":""],X:{"aria-label":"Cancel auto-play"},xa:"Cancel"});g.N(this,this.cancelButton);this.cancelButton.Ja(this.B.element);this.cancelButton.listen("click",this.M3,this);this.J.createClientVe(this.cancelButton.element,this,115129);this.playButton=new g.W({I:"a",Ka:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-play-button",
b.L("web_modern_buttons")?"ytp-autonav-endscreen-upnext-button-rounded":""],X:{href:"{{url}}",role:"button","aria-label":"Play next video"},xa:"Play now"});g.N(this,this.playButton);this.playButton.Ja(this.B.element);this.playButton.listen("click",this.TT,this);this.J.L("web_player_autonav_next_button_renderer")?(this.J.createServerVe(this.playButton.element,this.playButton,!0),(b=this.J.getVideoData())&&gub(this,b)):this.J.createClientVe(this.playButton.element,this,115130);this.D=new g.fv(function(){hub(c)},
500);
g.N(this,this.D);this.ST();this.T(a,"autonavvisibility",this.ST);this.J.L("web_autonav_color_transition")&&(this.T(a,"autonavchange",this.L3),this.T(a,"onAutonavCoundownStarted",this.n$))},n6=function(a){var b=a.J.Bn(!0,a.J.isFullscreen());
g.xv(a.container.element,"ytp-autonav-endscreen-small-mode",a.Ig(b));g.xv(a.container.element,"ytp-autonav-endscreen-is-premium",!!a.suggestion&&!!a.suggestion.vL);g.xv(a.J.getRootNode(),"ytp-autonav-endscreen-cancelled-state",!a.J.Ff());g.xv(a.J.getRootNode(),"countdown-running",a.Rk());g.xv(a.container.element,"ytp-player-content",a.J.Ff());g.zs(a.overlay.element,{width:b.width+"px"});if(!a.Rk()){a.J.Ff()?iub(a,Math.round(jub(a)/1E3)):iub(a);b=!!a.suggestion&&!!a.suggestion.As;var c=a.J.Ff()||!b;
g.xv(a.container.element,"ytp-autonav-endscreen-upnext-alternative-header-only",!c&&b);g.xv(a.container.element,"ytp-autonav-endscreen-upnext-no-alternative-header",c&&!b);g.pF(a.B,a.J.Ff());g.xv(a.element,"ytp-enable-w2w-color-transitions",kub(a))}},hub=function(a){var b=jub(a),c=Math,d=c.min;
var e=a.C?Date.now()-a.C:0;c=d.call(c,e,b);iub(a,Math.ceil((b-c)/1E3));500>=b-c&&a.Rk()?a.select(!0):a.Rk()&&a.D.start()},jub=function(a){if(a.J.isFullscreen()){var b;
a=null==(b=a.J.getVideoData())?void 0:b.lC;return-1===a||void 0===a?8E3:a}return 0<=a.J.Xs()?a.J.Xs():g.NI(a.J.U().experiments,"autoplay_time")||1E4},gub=function(a,b){a.J.L("web_player_autonav_next_button_renderer");
b=b.Rba;a.G=null==b?void 0:b.navigationEndpoint;b=null==b?void 0:b.trackingParams;a.playButton&&b&&a.J.setTrackingParams(a.playButton.element,b)},kub=function(a){var b;
return!(null==(b=a.J.getVideoData())||!b.watchToWatchTransitionRenderer)},iub=function(a,b){b=void 0===b?-1:b;
a=a.j.Fa("ytp-autonav-endscreen-upnext-header");g.Df(a);if(0<=b){b=String(b);var c="Up next in $SECONDS".match(RegExp("\\$SECONDS","gi"))[0],d="Up next in $SECONDS".indexOf(c);if(0<=d){a.appendChild(g.zf("Up next in $SECONDS".slice(0,d)));var e=g.yf("span");g.qv(e,"ytp-autonav-endscreen-upnext-header-countdown-number");g.Of(e,b);a.appendChild(e);a.appendChild(g.zf("Up next in $SECONDS".slice(d+c.length)));return}}g.Of(a,"Up next")},o6=function(a,b){g.W.call(this,{I:"div",
Ka:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.created=!1;this.player=a},p6=function(a){g.W.call(this,{I:"div",
Ka:["ytp-upnext","ytp-player-content"],X:{"aria-label":"{{aria_label}}"},V:[{I:"div",S:"ytp-cued-thumbnail-overlay-image",X:{style:"{{background}}"}},{I:"span",S:"ytp-upnext-top",V:[{I:"span",S:"ytp-upnext-header",xa:"Up Next"},{I:"span",S:"ytp-upnext-title",xa:"{{title}}"},{I:"span",S:"ytp-upnext-author",xa:"{{author}}"}]},{I:"a",S:"ytp-upnext-autoplay-icon",X:{role:"button",href:"{{url}}","aria-label":"Play next video"},V:[{I:"svg",X:{height:"100%",version:"1.1",viewBox:"0 0 72 72",width:"100%"},
V:[{I:"circle",S:"ytp-svg-autoplay-circle",X:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{I:"circle",S:"ytp-svg-autoplay-ring",X:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{I:"path",S:"ytp-svg-fill",X:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{I:"span",S:"ytp-upnext-bottom",V:[{I:"span",S:"ytp-upnext-cancel"},{I:"span",S:"ytp-upnext-paused",
xa:"Auto-play is paused"}]}]});this.api=a;this.cancelButton=null;this.G=this.Fa("ytp-svg-autoplay-ring");this.C=this.notification=this.j=this.suggestion=null;this.D=new g.fv(this.bI,5E3,this);this.B=0;var b=this.Fa("ytp-upnext-cancel");this.cancelButton=new g.W({I:"button",Ka:["ytp-upnext-cancel-button","ytp-button"],X:{tabindex:"0","aria-label":"Cancel auto-play"},xa:"Cancel"});g.N(this,this.cancelButton);this.cancelButton.listen("click",this.N3,this);this.cancelButton.Ja(b);this.cancelButton&&this.api.createClientVe(this.cancelButton.element,
this,115129);g.N(this,this.D);this.api.createClientVe(this.element,this,18788);b=this.Fa("ytp-upnext-autoplay-icon");this.T(b,"click",this.O3);this.api.createClientVe(b,this,115130);this.UT();this.T(a,"autonavvisibility",this.UT);this.T(a,"mdxnowautoplaying",this.Z$);this.T(a,"mdxautoplaycanceled",this.aaa);g.xv(this.element,"ytp-upnext-mobile",this.api.U().B)},lub=function(a,b){if(b)return b;
if(a.api.isFullscreen()){var c;a=null==(c=a.api.getVideoData())?void 0:c.lC;return-1===a||void 0===a?8E3:a}return 0<=a.api.Xs()?a.api.Xs():g.NI(a.api.U().experiments,"autoplay_time")||1E4},mub=function(a,b){b=lub(a,b);
var c=Math,d=c.min;var e=(0,g.MC)()-a.B;c=d.call(c,e,b);b=0===b?1:Math.min(c/b,1);a.G.setAttribute("stroke-dashoffset",""+-211*(b+1));1<=b&&a.Rk()&&3!==a.api.getPresentingPlayerType()?a.select(!0):a.Rk()&&a.j.start()},q6=function(a){o6.call(this,a,"autonav-endscreen");
this.overlay=this.videoData=null;this.table=new g.W({I:"div",S:"ytp-suggestion-panel",V:[{I:"div",Ka:["ytp-autonav-endscreen-upnext-header","ytp-autonav-endscreen-more-videos"],xa:"More videos"}]});this.N=new g.W({I:"div",S:"ytp-suggestions-container"});this.videos=[];this.C=null;this.G=this.K=!1;this.B=new m6(this.player);g.N(this,this.B);this.B.Ja(this.element);a.getVideoData().Of?this.j=this.B:(this.j=new p6(a),g.WT(this.player,this.j.element,4),g.N(this,this.j));this.overlay=new g.W({I:"div",
S:"ytp-autonav-overlay-cancelled-state"});g.N(this,this.overlay);this.overlay.Ja(this.element);this.D=new g.lK(this);g.N(this,this.D);g.N(this,this.table);this.table.Ja(this.element);this.table.show();g.N(this,this.N);this.N.Ja(this.table.element);this.hide()},r6=function(a){var b=a.Ff();
b!==a.G&&(a.G=b,a.player.publish("autonavvisibility"),a.G?(a.B!==a.j&&a.B.hide(),a.table.hide()):(a.B!==a.j&&a.B.show(),a.table.show()))},s6=function(a,b){g.W.call(this,{I:"button",
Ka:["ytp-watch-on-youtube-button","ytp-button"],xa:"{{content}}"});this.J=a;this.buttonType=this.buttonType=b;this.C0();2===this.buttonType&&g.tv(this.element,"ytp-continue-watching-button");this.listen("click",this.onClick);this.listen("videodatachange",this.C0);g.pF(this,!0)},t6=function(a,b){o6.call(this,a,"embeds-lite-endscreen");
this.J=a;this.Qe=b;this.J.createClientVe(this.element,this,156943);this.watchButton=new s6(a,2);g.N(this,this.watchButton);this.watchButton.Ja(this.element);this.hide()},nub=function(a){o6.call(this,a,"subscribecard-endscreen");
this.j=new g.W({I:"div",S:"ytp-subscribe-card",V:[{I:"img",S:"ytp-author-image",X:{src:"{{profilePicture}}"}},{I:"div",S:"ytp-subscribe-card-right",V:[{I:"div",S:"ytp-author-name",xa:"{{author}}"},{I:"div",S:"html5-subscribe-button-container"}]}]});g.N(this,this.j);this.j.Ja(this.element);var b=a.getVideoData();this.subscribeButton=new g.dW("Subscribe",null,"Unsubscribe",null,!0,!1,b.yl,b.subscribed,"trailer-endscreen",null,a,!1);g.N(this,this.subscribeButton);this.subscribeButton.Ja(this.j.Fa("html5-subscribe-button-container"));
this.T(a,"videodatachange",this.Sa);this.Sa();this.hide()},u6=function(a){var b=a.U(),c=g.jK||g.CR?{style:"will-change: opacity"}:void 0,d=b.D,e=["ytp-videowall-still"];
b.B&&e.push("ytp-videowall-show-text");g.W.call(this,{I:"a",Ka:e,X:{href:"{{url}}",target:d?b.Y:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},V:[{I:"div",S:"ytp-videowall-still-image",X:{style:"{{background}}"}},{I:"span",S:"ytp-videowall-still-info",X:{"aria-hidden":"true"},V:[{I:"span",S:"ytp-videowall-still-info-bg",V:[{I:"span",S:"ytp-videowall-still-info-content",X:c,V:[{I:"span",S:"ytp-videowall-still-info-title",xa:"{{title}}"},
{I:"span",S:"ytp-videowall-still-info-author",xa:"{{author_and_views}}"},{I:"span",S:"ytp-videowall-still-info-live",xa:"Live"},{I:"span",S:"ytp-videowall-still-info-duration",xa:"{{duration}}"}]}]}]},{I:"span",Ka:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],X:{"aria-hidden":"true"},V:[{I:"span",S:"ytp-videowall-still-listlabel-icon"},"Playlist",{I:"span",S:"ytp-videowall-still-listlabel-length",V:[" (",{I:"span",xa:"{{playlist_length}}"},")"]}]},{I:"span",Ka:["ytp-videowall-still-listlabel-mix",
"ytp-videowall-still-listlabel"],X:{"aria-hidden":"true"},V:[{I:"span",S:"ytp-videowall-still-listlabel-mix-icon"},"Mix",{I:"span",S:"ytp-videowall-still-listlabel-length",xa:" (50+)"}]}]});this.suggestion=null;this.B=d;this.api=a;this.j=new g.lK(this);g.N(this,this.j);this.listen("click",this.onClick);this.listen("keypress",this.onKeyPress);this.j.T(a,"videodatachange",this.onVideoDataChange);a.createServerVe(this.element,this);this.onVideoDataChange()},v6=function(a){o6.call(this,a,"videowall-endscreen");
var b=this;this.J=a;this.C=0;this.stills=[];this.D=this.videoData=null;this.G=this.N=!1;this.Y=null;this.B=new g.lK(this);g.N(this,this.B);this.K=new g.fv(function(){g.tv(b.element,"ytp-show-tiles")},0);
g.N(this,this.K);var c=new g.W({I:"button",Ka:["ytp-button","ytp-endscreen-previous"],X:{"aria-label":"Previous"},V:[g.vF()]});g.N(this,c);c.Ja(this.element);c.listen("click",this.S3,this);this.table=new g.mF({I:"div",S:"ytp-endscreen-content"});g.N(this,this.table);this.table.Ja(this.element);c=new g.W({I:"button",Ka:["ytp-button","ytp-endscreen-next"],X:{"aria-label":"Next"},V:[g.wF()]});g.N(this,c);c.Ja(this.element);c.listen("click",this.R3,this);a.getVideoData().Of?this.j=new m6(a,!0):this.j=
new p6(a);g.N(this,this.j);g.WT(this.player,this.j.element,4);a.createClientVe(this.element,this,158789);this.hide()},w6=function(a){return g.XT(a.player)&&a.fD()&&!a.D},x6=function(a){var b=a.Ff();
b!==a.N&&(a.N=b,a.player.publish("autonavvisibility"))},y6=function(a){o6.call(this,a,"watch-again-on-youtube-endscreen");
this.watchButton=new s6(a,1);g.N(this,this.watchButton);this.watchButton.Ja(this.element);g.tib(a)&&(this.j=new g.f2(a),g.N(this,this.j),this.B=new g.W({I:"div",Ka:["ytp-watch-again-on-youtube-endscreen-more-videos-container"],X:{tabIndex:"-1"},V:[this.j]}),g.N(this,this.B),this.j.Ja(this.B.element),this.B.Ja(this.element));a.createClientVe(this.element,this,156914);this.hide()},rub=function(a){g.uV.call(this,a);
var b=this;this.endScreen=null;this.B=this.j=this.C=this.D=!1;this.listeners=new g.lK(this);g.N(this,this.listeners);var c=a.U(),d=a.getVideoData();d=d&&0!==d.limitedPlaybackDurationInSeconds;g.NB(g.LR(c))&&d&&!g.TT(a)?(this.B=!0,this.endScreen=new t6(a,g.KT(a))):a.Vc()?this.endScreen=new y6(a):oub(a)?(this.D=!0,pub(this),this.j?this.endScreen=new q6(a):this.endScreen=new v6(a)):c.Pg?this.endScreen=new nub(a):this.endScreen=new o6(a);g.N(this,this.endScreen);g.WT(a,this.endScreen.element,4);qub(this);
this.listeners.T(a,"videodatachange",this.onVideoDataChange,this);this.listeners.T(a,g.tJ("endscreen"),function(e){b.onCueRangeEnter(e)});
this.listeners.T(a,g.uJ("endscreen"),function(e){b.onCueRangeExit(e)})},pub=function(a){var b=a.player.getVideoData();
if(!b||a.j===b.Gl&&a.C===b.Of)return!1;a.j=b.Gl;a.C=b.Of;return!0},oub=function(a){a=a.U();
return a.ud&&!a.Pg},qub=function(a){a.player.rf("endscreen");
var b=a.player.getVideoData();b=new g.sJ(Math.max(1E3*(b.lengthSeconds-10),0),0x8000000000000,{id:"preload",namespace:"endscreen"});var c=new g.sJ(0x8000000000000,0x8000000000000,{id:"load",priority:8,namespace:"endscreen"});a.player.kf([b,c])};
g.PT.prototype.Xs=g.ea(15,function(){return this.app.Xs()});
g.I0.prototype.Xs=g.ea(14,function(){return this.getVideoData().EV});
g.LT.prototype.Or=g.ea(13,function(a){this.xi().Or(a)});
g.tW.prototype.Or=g.ea(12,function(a){this.j!==a&&(this.j=a,this.Sa())});
g.zX.prototype.Or=g.ea(11,function(a){this.overflowButton&&this.overflowButton.Or(a)});
g.LT.prototype.Pr=g.ea(10,function(a){this.xi().Pr(a)});
g.yW.prototype.Pr=g.ea(9,function(a){this.j!==a&&(this.j=a,this.Sa())});
g.zX.prototype.Pr=g.ea(8,function(a){this.shareButton&&this.shareButton.Pr(a)});
g.LT.prototype.DB=g.ea(7,function(a){this.xi().DB(a)});
g.XV.prototype.DB=g.ea(6,function(a){this.rR!==a&&(this.rR=a,this.mq())});
g.LT.prototype.CB=g.ea(5,function(a){this.xi().CB(a)});
g.zX.prototype.CB=g.ea(4,function(a){this.qR!==a&&(this.qR=a,this.lq())});g.y(l6,g.W);l6.prototype.select=function(){this.J.Jo(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.DD||void 0)&&this.J.logClick(this.element)};
l6.prototype.onClick=function(a){g.nU(a,this.J,this.j,this.suggestion.sessionData||void 0)&&this.select()};
l6.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:a.defaultPrevented||(this.select(),a.preventDefault())}};g.y(m6,g.W);g.k=m6.prototype;g.k.jH=function(a){this.suggestion!==a&&(this.suggestion=a,k6(this.j,a),this.playButton.updateValue("url",this.suggestion.Nk()),n6(this))};
g.k.Rk=function(){return 0<this.C};
g.k.LB=function(){this.Rk()||(this.C=Date.now(),hub(this),fub(this.J,jub(this)),g.xv(this.J.getRootNode(),"countdown-running",this.Rk()))};
g.k.nx=function(){this.hq();hub(this);var a=this.j.Fa("ytp-autonav-endscreen-upnext-header");a&&g.Of(a,"Up next")};
g.k.hq=function(){this.Rk()&&(this.D.stop(),this.C=0)};
g.k.select=function(a){this.J.nextVideo(!1,void 0===a?!1:a);this.hq()};
g.k.TT=function(a){g.nU(a,this.J)&&(a.currentTarget===this.playButton.element?this.J.logClick(this.playButton.element):a.currentTarget===this.j.Fa("ytp-autonav-endscreen-link-container")&&(a=this.j.Fa("ytp-autonav-endscreen-link-container"),this.J.logVisibility(a,!0),this.J.logClick(a)),this.J.L("web_player_autonav_next_button_renderer")&&this.G?(this.J.ib("innertubeCommand",this.G),this.hq()):this.select())};
g.k.M3=function(){this.J.logClick(this.cancelButton.element);g.RT(this.J,!0);this.cancelCommand&&this.J.ib("innertubeCommand",this.cancelCommand)};
g.k.onVideoDataChange=function(a,b){this.J.L("web_player_autonav_next_button_renderer")&&gub(this,b);var c;this.cancelCommand=null==(c=b.j9)?void 0:c.command};
g.k.n$=function(a){if(kub(this)){var b=this.J.getVideoData().watchToWatchTransitionRenderer,c=null==b?void 0:b.fromColorPaletteDark;b=null==b?void 0:b.toColorPaletteDark;if(c&&b){var d=this.element;d.style.setProperty("--w2w-start-background-color",g.rG(c.surgeColor));d.style.setProperty("--w2w-start-primary-text-color",g.rG(c.primaryTitleColor));d.style.setProperty("--w2w-start-secondary-text-color",g.rG(c.secondaryTitleColor));d.style.setProperty("--w2w-end-background-color",g.rG(b.surgeColor));
d.style.setProperty("--w2w-end-primary-text-color",g.rG(b.primaryTitleColor));d.style.setProperty("--w2w-end-secondary-text-color",g.rG(b.secondaryTitleColor));d.style.setProperty("--w2w-animation-duration",a+"ms")}g.xv(this.element,"ytp-w2w-animate",!0)}};
g.k.L3=function(a){this.J.L("web_autonav_color_transition")&&2!==a&&g.xv(this.element,"ytp-w2w-animate",!1)};
g.k.ST=function(){var a=this.J.Ff();this.K&&this.Eb!==a&&g.pF(this,a);n6(this);this.J.logVisibility(this.container.element,a);this.J.logVisibility(this.cancelButton.element,a);this.J.logVisibility(this.j.Fa("ytp-autonav-endscreen-link-container"),a);this.J.logVisibility(this.playButton.element,a)};
g.k.Ig=function(a){return 400>a.width||459>a.height};g.y(o6,g.W);g.k=o6.prototype;g.k.create=function(){this.created=!0};
g.k.destroy=function(){this.created=!1};
g.k.fD=function(){return!1};
g.k.Ff=function(){return!1};
g.k.HY=function(){return!1};g.y(p6,g.W);g.k=p6.prototype;g.k.bI=function(){this.notification&&(this.D.stop(),this.Mc(this.C),this.C=null,this.notification.close(),this.notification=null)};
g.k.jH=function(a){this.suggestion=a;k6(this,a,"hqdefault.jpg")};
g.k.UT=function(){g.pF(this,this.api.Ff());this.api.logVisibility(this.element,this.api.Ff());this.api.logVisibility(this.Fa("ytp-upnext-autoplay-icon"),this.api.Ff());this.cancelButton&&this.api.logVisibility(this.cancelButton.element,this.api.Ff())};
g.k.jaa=function(){window.focus();this.bI()};
g.k.LB=function(a){var b=this;this.Rk()||(g.WD("a11y-announce","Up Next "+this.suggestion.title),this.B=(0,g.MC)(),this.j=new g.fv(function(){mub(b,a)},25),mub(this,a),fub(this.api,lub(this,a)));
g.vv(this.element,"ytp-upnext-autoplay-paused")};
g.k.hide=function(){g.W.prototype.hide.call(this)};
g.k.Rk=function(){return!!this.j};
g.k.nx=function(){this.hq();this.B=(0,g.MC)();mub(this);g.tv(this.element,"ytp-upnext-autoplay-paused")};
g.k.hq=function(){this.Rk()&&(this.j.dispose(),this.j=null)};
g.k.select=function(a){a=void 0===a?!1:a;if(this.api.U().L("autonav_notifications")&&a&&window.Notification&&"function"===typeof document.hasFocus){var b=Notification.permission;"default"===b?Notification.requestPermission():"granted"!==b||document.hasFocus()||(this.bI(),this.notification=new Notification("Up Next",{body:this.suggestion.title,icon:this.suggestion.Yg()}),this.C=this.T(this.notification,"click",this.jaa),this.D.start())}this.hq();this.api.nextVideo(!1,a)};
g.k.O3=function(a){!g.Nf(this.cancelButton.element,a.target)&&g.nU(a,this.api)&&(this.api.Ff()&&this.api.logClick(this.Fa("ytp-upnext-autoplay-icon")),this.select())};
g.k.N3=function(){this.api.Ff()&&this.cancelButton&&this.api.logClick(this.cancelButton.element);g.RT(this.api,!0)};
g.k.Z$=function(a){this.api.getPresentingPlayerType();this.show();this.LB(a)};
g.k.aaa=function(){this.api.getPresentingPlayerType();this.hq();this.hide()};
g.k.va=function(){this.hq();this.bI();g.W.prototype.va.call(this)};g.y(q6,o6);g.k=q6.prototype;g.k.create=function(){o6.prototype.create.call(this);this.D.T(this.player,"appresize",this.sC);this.D.T(this.player,"onVideoAreaChange",this.sC);this.D.T(this.player,"videodatachange",this.onVideoDataChange);this.D.T(this.player,"autonavchange",this.VT);this.D.T(this.player,"onAutonavCancelled",this.P3);this.onVideoDataChange()};
g.k.show=function(){o6.prototype.show.call(this);(this.K||this.C&&this.C!==this.videoData.clientPlaybackNonce)&&g.RT(this.player,!1);g.XT(this.player)&&this.fD()&&!this.C?(r6(this),2===this.videoData.autonavState?3===this.player.getVisibilityState()?this.j.select(!0):this.j.LB():3===this.videoData.autonavState&&this.j.nx()):(g.RT(this.player,!0),r6(this));this.sC()};
g.k.hide=function(){o6.prototype.hide.call(this);this.j.nx();r6(this)};
g.k.sC=function(){var a=this.player.Bn(!0,this.player.isFullscreen());r6(this);n6(this.B);g.xv(this.element,"ytp-autonav-cancelled-small-mode",this.Ig(a));g.xv(this.element,"ytp-autonav-cancelled-tiny-mode",this.zJ(a));g.xv(this.element,"ytp-autonav-cancelled-mini-mode",400>=a.width||360>=a.height);this.overlay&&g.zs(this.overlay.element,{width:a.width+"px"});if(!this.G)for(a=0;a<this.videos.length;a++)g.xv(this.videos[a].element,"ytp-suggestion-card-with-margin",1===a%2)};
g.k.onVideoDataChange=function(){var a=this.player.getVideoData();if(this.videoData!==a&&a){this.videoData=a;if((a=this.videoData.suggestions)&&a.length||this.player.L("web_player_autonav_empty_suggestions_fix")){var b=g.SS(this.videoData);b&&(this.j.jH(b),this.j!==this.B&&this.B.jH(b))}if(a&&a.length)for(b=0;b<sub.length;++b){var c=sub[b];if(a&&a[c]){this.videos[b]=new l6(this.player);var d=this.videos[b];c=a[c];d.suggestion!==c&&(d.suggestion=c,k6(d,c));g.N(this,this.videos[b]);this.videos[b].Ja(this.N.element)}}this.sC()}};
g.k.VT=function(a){1===a?(this.K=!1,this.C=this.videoData.clientPlaybackNonce,this.j.hq(),this.Eb&&this.sC()):(this.K=!0,this.Ff()&&(2===a?this.j.LB():3===a&&this.j.nx()))};
g.k.P3=function(a){a?this.VT(1):(this.C=null,this.K=!1)};
g.k.fD=function(){return 1!==this.videoData.autonavState};
g.k.Ig=function(a){return(910>a.width||459>a.height)&&!this.zJ(a)&&!(400>=a.width||360>=a.height)};
g.k.zJ=function(a){return 800>a.width&&!(400>=a.width||360>=a.height)};
g.k.Ff=function(){return this.Eb&&g.XT(this.player)&&this.fD()&&!this.C};
var sub=[1,3,2,4];g.y(s6,g.W);g.k=s6.prototype;g.k.C0=function(){switch(this.buttonType){case 1:var a="Watch again on YouTube";var b=156915;break;case 2:a="Continue watching on YouTube";b=156942;break;default:a="Continue watching on YouTube",b=156942}this.update({content:a});this.J.hasVe(this.element)&&this.J.destroyVe(this.element);this.J.createClientVe(this.element,this,b)};
g.k.onClick=function(a){this.J.L("web_player_log_click_before_generating_ve_conversion_params")&&this.J.logClick(this.element);g.oU(this.getVideoUrl(),this.J,a);this.J.L("web_player_log_click_before_generating_ve_conversion_params")||this.J.logClick(this.element)};
g.k.getVideoUrl=function(){var a=!0;switch(this.buttonType){case 1:a=!0;break;case 2:a=!1}a=this.J.getVideoUrl(a,!1,!1,!0);var b=this.J.U();if(g.DR(b)){var c={};g.DR(b)&&g.ET(this.J,"addEmbedsConversionTrackingParams",[c]);a:{switch(this.buttonType){case 2:b="emb_ytp_continue_watching";break a}b="emb_ytp_watch_again"}g.YO(c,b);a=g.Mn(a,c)}return a};
g.k.logVisibility=function(){this.J.logVisibility(this.element,this.Eb&&this.Z)};
g.k.show=function(){g.W.prototype.show.call(this);this.logVisibility()};
g.k.hide=function(){g.W.prototype.hide.call(this);this.logVisibility()};
g.k.Jc=function(a){g.W.prototype.Jc.call(this,a);this.logVisibility()};g.y(t6,o6);t6.prototype.show=function(){3!==this.player.getPlayerState()&&(o6.prototype.show.call(this),this.Qe.CB(!0),this.Qe.Pr(!0),this.J.U().ke||this.Qe.Or(!0),this.J.logVisibility(this.element,!0),this.watchButton.Jc(!0))};
t6.prototype.hide=function(){o6.prototype.hide.call(this);this.Qe.CB(!1);this.Qe.Pr(!1);this.Qe.Or(!1);this.J.logVisibility(this.element,!1);this.watchButton.Jc(!1)};g.y(nub,o6);nub.prototype.Sa=function(){var a=this.player.getVideoData();this.j.update({profilePicture:a.profilePicture,author:a.author});this.subscribeButton.channelId=a.yl;var b=this.subscribeButton;a.subscribed?b.j():b.B()};g.y(u6,g.W);u6.prototype.select=function(){this.api.Jo(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.DD||void 0)&&this.api.logClick(this.element)};
u6.prototype.onClick=function(a){if(g.DR(this.api.U())&&this.api.L("web_player_log_click_before_generating_ve_conversion_params")){this.api.logClick(this.element);var b=this.suggestion.Nk(),c={};g.TWa(this.api,c,"emb_rel_end");b=g.Mn(b,c);g.oU(b,this.api,a)}else g.nU(a,this.api,this.B,this.suggestion.sessionData||void 0)&&this.select()};
u6.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:a.defaultPrevented||(this.select(),a.preventDefault())}};
u6.prototype.onVideoDataChange=function(){var a=this.api.getVideoData(),b=this.api.U();this.B=a.Hf?!1:b.D};g.y(v6,o6);g.k=v6.prototype;g.k.create=function(){o6.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.videoData=a);this.wq();this.B.T(this.player,"appresize",this.wq);this.B.T(this.player,"onVideoAreaChange",this.wq);this.B.T(this.player,"videodatachange",this.onVideoDataChange);this.B.T(this.player,"autonavchange",this.lM);this.B.T(this.player,"onAutonavCancelled",this.Q3);a=this.videoData.autonavState;a!==this.Y&&this.lM(a);this.B.T(this.element,"transitionend",this.Dba)};
g.k.destroy=function(){g.bC(this.B);g.wb(this.stills);this.stills=[];o6.prototype.destroy.call(this);g.vv(this.element,"ytp-show-tiles");this.K.stop();this.Y=this.videoData.autonavState};
g.k.fD=function(){return 1!==this.videoData.autonavState};
g.k.show=function(){var a=this.Eb;o6.prototype.show.call(this);g.vv(this.element,"ytp-show-tiles");this.player.U().B?g.mv(this.K):this.K.start();(this.G||this.D&&this.D!==this.videoData.clientPlaybackNonce)&&g.RT(this.player,!1);w6(this)?(x6(this),2===this.videoData.autonavState?3===this.player.getVisibilityState()?this.j.select(!0):this.j.LB():3===this.videoData.autonavState&&this.j.nx()):(g.RT(this.player,!0),x6(this));a!==this.Eb&&this.player.logVisibility(this.element,!0)};
g.k.hide=function(){var a=this.Eb;o6.prototype.hide.call(this);this.j.nx();x6(this);a!==this.Eb&&this.player.logVisibility(this.element,!1)};
g.k.Dba=function(a){a.target===this.element&&this.wq()};
g.k.wq=function(){var a,b,c,d;var e=(null==(a=this.videoData)?0:null==(b=a.suggestions)?0:b.length)?null==(c=this.videoData)?void 0:c.suggestions:[null==(d=this.videoData)?void 0:g.SS(d)];if(e.length){g.tv(this.element,"ytp-endscreen-paginate");var f=this.J.Bn(!0,this.J.isFullscreen());if(a=g.KT(this.J))a=a.Ah()?48:32,f.width-=2*a;var h=f.width/f.height;d=96/54;b=a=2;var l=Math.max(f.width/96,2),m=Math.max(f.height/54,2);c=e.length;var n=Math.pow(2,2);var p=c*n+(Math.pow(2,2)-n);p+=Math.pow(2,2)-
n;for(p-=n;0<p&&(a<l||b<m);){var q=a/2,r=b/2,t=a<=l-2&&p>=r*n,v=b<=m-2&&p>=q*n;if((q+1)/r*d/h>h/(q/(r+1)*d)&&v)p-=q*n,b+=2;else if(t)p-=r*n,a+=2;else if(v)p-=q*n,b+=2;else break}d=!1;p>=3*n&&6>=c*n-p&&(4<=b||4<=a)&&(d=!0);n=96*a;p=54*b;h=n/p<h?f.height/p:f.width/n;h=Math.min(h,2);n=Math.floor(Math.min(f.width,n*h));p=Math.floor(Math.min(f.height,p*h));f=this.table.element;f.ariaLive="polite";g.Ks(f,n,p);g.zs(f,{marginLeft:n/-2+"px",marginTop:p/-2+"px"});this.j.jH(g.SS(this.videoData));this.j instanceof
m6&&n6(this.j);g.xv(this.element,"ytp-endscreen-takeover",w6(this));x6(this);n+=4;p+=4;h=0;f.ariaBusy="true";for(l=0;l<a;l++)for(m=0;m<b;m++)if(q=h,t=0,d&&l>=a-2&&m>=b-2?t=1:0===m%2&&0===l%2&&(2>m&&2>l?0===m&&0===l&&(t=2):t=2),q=g.ze(q+this.C,c),0!==t){r=this.stills[h];r||(r=new u6(this.player),this.stills[h]=r,f.appendChild(r.element));v=Math.floor(p*m/b);var w=Math.floor(n*l/a),A=Math.floor(p*(m+t)/b)-v-4,C=Math.floor(n*(l+t)/a)-w-4;g.Gs(r.element,w,v);g.Ks(r.element,C,A);g.zs(r.element,"transitionDelay",
(m+l)/20+"s");g.xv(r.element,"ytp-videowall-still-mini",1===t);g.xv(r.element,"ytp-videowall-still-large",2<t);t=Math.max(C,A);g.xv(r.element,"ytp-videowall-still-round-large",256<=t);g.xv(r.element,"ytp-videowall-still-round-medium",96<t&&256>t);g.xv(r.element,"ytp-videowall-still-round-small",96>=t);q=e[q];r.suggestion!==q&&(r.suggestion=q,t=r.api.U(),v=g.rv(r.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg",k6(r,q,v),g.DR(t)&&!r.api.L("web_player_log_click_before_generating_ve_conversion_params")&&
(t=q.Nk(),v={},g.ET(r.api,"addEmbedsConversionTrackingParams",[v]),t=g.Mn(t,g.YO(v,"emb_rel_end")),r.updateValue("url",t)),(q=(q=q.sessionData)&&q.itct)&&r.api.setTrackingParams(r.element,q));h++}f.ariaBusy="false";g.xv(this.element,"ytp-endscreen-paginate",h<c);for(e=this.stills.length-1;e>=h;e--)a=this.stills[e],g.Ff(a.element),g.vb(a);this.stills.length=h}};
g.k.onVideoDataChange=function(){var a=this.player.getVideoData(1);this.videoData!==a&&(null!=a&&g.SS(a)?(this.C=0,this.videoData=a,this.wq()):this.player.ma("missg",{vid:(null==a?void 0:a.videoId)||"",cpn:(null==a?void 0:a.clientPlaybackNonce)||""}))};
g.k.R3=function(){this.C+=this.stills.length;this.wq()};
g.k.S3=function(){this.C-=this.stills.length;this.wq()};
g.k.HY=function(){return this.j.Rk()};
g.k.lM=function(a){1===a?(this.G=!1,this.D=this.videoData.clientPlaybackNonce,this.j.hq(),this.Eb&&this.wq()):(this.G=!0,this.Eb&&w6(this)&&(2===a?this.j.LB():3===a&&this.j.nx()))};
g.k.Q3=function(a){if(a){for(a=0;a<this.stills.length;a++)this.J.logVisibility(this.stills[a].element,!0);this.lM(1)}else this.D=null,this.G=!1;this.wq()};
g.k.Ff=function(){return this.Eb&&w6(this)};g.y(y6,o6);y6.prototype.show=function(){if(3!==this.player.getPlayerState()){o6.prototype.show.call(this);var a=this.B;if(a){var b=0<this.j.suggestionData.length;g.xv(this.element,"ytp-shorts-branded-ui",b);b?a.show():a.hide()}var c;null==(c=g.KT(this.player))||c.DB(!0);this.player.logVisibility(this.element,!0);this.watchButton.Jc(!0)}};
y6.prototype.hide=function(){o6.prototype.hide.call(this);var a;null==(a=g.KT(this.player))||a.DB(!1);this.player.logVisibility(this.element,!1);this.watchButton.Jc(!1)};g.y(rub,g.uV);g.k=rub.prototype;g.k.vu=function(){var a=this.player.getVideoData(),b=a.mutedAutoplay;if((this.player.Vc()||this.B)&&!b)return!0;var c;var d=!!((null==a?0:g.SS(a))||(null==a?0:null==(c=a.suggestions)?0:c.length));d=!oub(this.player)||d;a=a.yj;c=this.player.RD();return d&&!a&&!c&&!b};
g.k.Ff=function(){return this.endScreen.Ff()};
g.k.c9=function(){return this.Ff()?this.endScreen.HY():!1};
g.k.va=function(){this.player.rf("endscreen");g.uV.prototype.va.call(this)};
g.k.load=function(){var a=this.player.getVideoData();var b=a.transitionEndpointAtEndOfStream;if(b&&b.videoId){var c=this.player.yb().Ge.get("heartbeat"),d=g.SS(a);!d||b.videoId!==d.videoId||a.FT?(this.player.Jo(b.videoId,void 0,void 0,!0,!0,b),c&&c.JJ("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END","HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"),a=!0):a=!1}else a=!1;a||(g.uV.prototype.load.call(this),this.endScreen.show())};
g.k.unload=function(){g.uV.prototype.unload.call(this);this.endScreen.hide();this.endScreen.destroy()};
g.k.onCueRangeEnter=function(a){this.vu()&&(this.endScreen.created||this.endScreen.create(),"load"===a.getId()&&this.load())};
g.k.onCueRangeExit=function(a){"load"===a.getId()&&this.loaded&&this.unload()};
g.k.onVideoDataChange=function(){qub(this);this.D&&pub(this)&&(this.endScreen&&(this.endScreen.hide(),this.endScreen.created&&this.endScreen.destroy(),this.endScreen.dispose()),this.j?this.endScreen=new q6(this.player):this.endScreen=new v6(this.player),g.N(this,this.endScreen),g.WT(this.player,this.endScreen.element,4))};g.tV("endscreen",rub);})(_yt_player);
