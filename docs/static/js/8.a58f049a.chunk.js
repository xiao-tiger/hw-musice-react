(this["webpackJsonphw-music-react"]=this["webpackJsonphw-music-react"]||[]).push([[8],{176:function(n,t,e){"use strict";e.r(t);var i=e(4),a=e(0),r=e(53),c=e(42),o=e(39),l=e(62);var s=function(){return function(n){Object(l.a)({url:"/banner"}).then((function(t){n(function(n){return{type:o.e,data:n.banners}}(t))}))}},p=function(n){return function(t){(function(n){return Object(l.a)({url:"/personalized",params:{limit:n}})})(n).then((function(n){t(function(n){return{type:o.a,data:n.result}}(n))}))}},b=function(n){return function(t){(function(n){return Object(l.a)({url:"/top/album",params:{limit:n}})})(n).then((function(n){t(function(n){return{type:o.b,data:n.albums}}(n))}))}},m=function(n){return function(t){var e;(e=n,Object(l.a)({url:"/top/list",params:{idx:e}})).then((function(e){switch(n){case 0:t(function(n){return{type:o.c,data:n.playlist}}(e));break;case 2:t(function(n){return{type:o.d,data:n.playlist}}(e));break;case 3:t(function(n){return{type:o.f,data:n.playlist}}(e));break;default:return}}))}},u=e(177),d=e(40),x=e(41),h=e.p+"static/media/download.3d89cf30.png";function j(){var n=Object(d.a)(["\n  background: url(",") center/6000px;\n  height: 285px;\n\n  .wrap {\n    position: relative;\n    display: flex;\n    width: 982px;\n    height: 285px;\n    margin: 0 auto;\n    \n    .banner-left {\n      width: 730px;\n      height: 100%;\n      .banner-item {\n        width: 100%;\n        height: 285px;\n        img {\n          width: 100%;\n          height: 100%;\n        }\n      }\n\n    }\n    .banner-right {\n      width: 254px;\n      height: 285px;\n      top: 259px;\n      text-align: center;\n      background: url(",");\n      .btn {\n        display: block;\n        width: 215px;\n        height: 56px;\n        margin: 185px 0 0 19px;\n        text-indent: -9999px;\n        &:hover {\n          background: url(",") no-repeat 0 0;\n          background-position: 0 -290px;\n          text-decoration: none;\n        }\n      }\n    }\n    .c-btn {\n      position: absolute;\n      top: 50%;\n      transform: translateY(-50%);\n      display: block;\n      width: 37px;\n      height: 63px;\n      background-color: transparent;\n      background-image: url(",");\n      cursor: pointer;\n      &:hover {\n        background-color: rgba(0, 0, 0, .1);\n      }\n    }\n    .btnl {\n      left: -68px;\n      background-position: 0 -360px;\n    }\n    .btnr {\n      right: -68px;\n      background-position: 0 -508px;\n    }\n  }\n"]);return j=function(){return n},n}var g=x.a.div(j(),(function(n){return n.bannerImg}),h,h,"data:image/png;base64,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");function J(){var n=Object(a.useState)(0),t=Object(r.a)(n,2),e=t[0],o=t[1],l=Object(a.useRef)(),p=Object(c.d)((function(n){return{topBanners:n.getIn(["recommend","topBanners"])}}),c.b).topBanners,b=Object(c.c)();Object(a.useEffect)((function(){b(s())}),[b]);var m=Object(a.useCallback)((function(n,t){o(t)}),[]);return Object(i.jsx)(g,{bannerImg:p[e]&&p[e].imageUrl+"?imageView&blur=40x20",children:Object(i.jsxs)("div",{className:"wrap",children:[Object(i.jsx)("div",{className:"banner-left",children:Object(i.jsx)(u.a,{ref:l,effect:"fade",autoplay:!0,beforeChange:m,children:p.map((function(n){return Object(i.jsx)("div",{className:"banner-item",children:Object(i.jsx)("img",{src:n.imageUrl,alt:""})},n.imageUrl)}))})}),Object(i.jsx)("div",{className:"banner-right",children:Object(i.jsx)("a",{href:"https://music.163.com/#/download",rel:"noopener noreferrer",target:"_blank",className:"btn",children:"\u4e0b\u8f7d\u5ba2\u6237\u7aef"})}),Object(i.jsx)("span",{className:"c-btn btnl",onClick:function(n){return l.current.prev()}}),Object(i.jsx)("span",{className:"c-btn btnr",onClick:function(n){return l.current.next()}})]})})}var f=Object(a.memo)(J);function W(){var n=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 35px;\n  padding: 0 10px 0 34px;\n  background-position: -225px -154px;\n  border-bottom: 2px solid #C10D0C;\n\n  .hot-left {\n    display: flex;\n    align-items: center;\n    .title {\n      font-size: 20px;\n      font-weight: normal;\n      line-height: 28px;\n    }\n    .tab {\n      color: #666;\n      font-size: 12px;\n      margin-left: 20px;\n      span {\n        cursor: pointer;\n      }\n      .line {\n        margin: 0 10px;\n        color: #ccc;\n      }\n    }\n  }\n  .hot-right {\n    color: #666;\n    cursor: pointer;\n    .icon {\n      display: inline-block;\n      width: 12px;\n      height: 12px;\n      margin-left: 4px;\n      background-position: 0 -239px;\n    }\n  }\n\n"]);return W=function(){return n},n}var O=x.a.div(W());function k(n){var t=n.title,e=n.tab;return Object(i.jsxs)(O,{className:"sprite_02",children:[Object(i.jsxs)("div",{className:"hot-left",children:[Object(i.jsx)("h3",{className:"title",children:t}),Object(i.jsx)("p",{className:"tab",children:e.map((function(n){return Object(i.jsxs)(a.Fragment,{children:[Object(i.jsx)("span",{children:"\u534e\u8bed"}),Object(i.jsx)("span",{className:"line",children:"|"})]},n)}))})]}),Object(i.jsxs)("p",{className:"hot-right",children:["\u66f4\u591a",Object(i.jsx)("i",{className:"icon sprite_02"})]})]})}k.defaultProps={title:"\u70ed\u95e8\u63a8\u8350",tab:[]};var V=Object(a.memo)(k),v=e.p+"static/media/sprite_cover.741609ed.png";function q(){var n=Object(d.a)(["\n  width: 140px;\n  height: 204px;\n  box-sizing: content-box;\n\n  .u-cover {\n    position: relative;\n    width: 140px;\n    height: 140px;\n    img {\n      width: 140px;\n      height: 140px;\n    }\n    .msk {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background: url(",") no-repeat;\n      background-position: 0 0;\n      cursor: pointer;\n      text-indent: -9999px;\n    }\n    .bottom {\n      position: absolute;\n      left: 0;\n      bottom: 0;\n      width: 100%;\n      height: 27px;\n      padding: 0 10px;\n      color: #cccccc;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      background: url(",") no-repeat;\n      background-position: 0 -537px;\n\n      .erji {\n        margin-right: 5px;\n        display: inline-block;\n        width: 14px;\n        height: 11px;\n        background-position: 0 -24px;\n      }\n\n      .play {\n        display: inline-block;\n        width: 16px;\n        height: 17px;\n        background-position: 0 0;\n      }\n    }\n  }\n\n  .desc {\n    margin: 8px 0 3px;\n    font-size: 14px;\n    text-overflow: -o-ellipsis-lastline;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    line-clamp: 2;\n    -webkit-box-orient: vertical;\n  }\n\n"]);return q=function(){return n},n}var S=x.a.div(q(),v,v),w=e(57);function Y(n){var t=n.className,e=n.id,a=n.name,r=n.picUrl,c=n.playCount;return Object(i.jsxs)(S,{className:t,children:[Object(i.jsxs)("div",{className:"u-cover",children:[Object(i.jsx)("img",{src:r+"?param=140y140",alt:""}),Object(i.jsx)("a",{className:"msk",href:"https://music.163.com/#/playlist?id=".concat(e),children:"hahah"}),Object(i.jsxs)("div",{className:"cover-bottom bottom",children:[Object(i.jsxs)("span",{children:[Object(i.jsx)("i",{className:"sprite_icon erji"}),Object(w.b)(c)]}),Object(i.jsx)("i",{className:"sprite_icon play"})]})]}),Object(i.jsx)("p",{className:"desc",children:a})]})}Y.defaultProps={id:"5326454936",name:"\u300a\u59d0\u59d0\u7684\u7231\u4e50\u4e4b\u7a0b\u300b\u97f3\u9891\u5168\u6536\u5f55",picUrl:"https://p2.music.126.net/QsjD4ctmHYfS3fHaGYhpLA==/109951165556875064.jpg",playCount:0};var U=Object(a.memo)(Y);function Z(){var n=Object(d.a)(["\n  .song-list {\n    margin-top: 20px;\n    margin-left: -42px;\n    display: flex;\n    flex-wrap: wrap;\n    .song-item {\n      padding: 0 0 30px 42px;\n    }\n  }\n"]);return Z=function(){return n},n}var N=x.a.div(Z());function K(){var n=Object(c.d)((function(n){return{hotRecommed:n.getIn(["recommend","hotRecommend"])}}),c.b).hotRecommed,t=Object(c.c)();return Object(a.useEffect)((function(){t(p(8))}),[t]),Object(i.jsxs)(N,{children:[Object(i.jsx)(V,{title:"\u70ed\u95e8\u63a8\u8350",tab:["\u534e\u8bed","\u6d41\u884c","\u6447\u6eda","\u6c11\u8c23","\u7535\u5b50"]}),Object(i.jsx)("div",{className:"song-list",children:n.map((function(n){return Object(i.jsx)(U,{id:n.id,name:n.name,picUrl:n.picUrl,playCount:n.playCount,className:"song-item"},n.id)}))})]})}var y=Object(a.memo)(K);function X(){var n=Object(d.a)(["\n  width: 118px;\n  height: 150px;\n  margin-left: 11px;\n  .u-cover {\n    position: relative;\n    width: 100px;\n    height: 100px;\n    margin-bottom: 7px;\n    img {\n      width: 100%;\n      height: 100%;\n    }\n    .msk {\n      position: absolute;\n      top: 0;\n      left: 0;\n      display: block;\n      width: 118px;\n      height: 100px;\n      background-position: 0 -570px;\n      text-indent: -9999px;\n    }\n  }\n\n  .title {\n    width: 90%;\n    color: #000;\n    line-height: 18px;\n    cursor: pointer;\n  }\n  .author {\n    width: 90%;\n    color: #666;\n    line-height: 18px;\n    cursor: pointer;\n  }\n\n"]);return X=function(){return n},n}var G=x.a.div(X());function R(n){var t=n.id,e=n.picUrl,a=n.name,r=n.author;return Object(i.jsxs)(G,{children:[Object(i.jsxs)("div",{className:"u-cover",children:[Object(i.jsx)("img",{src:e+"?param=100y100",alt:""}),Object(i.jsx)("a",{href:"https://music.163.com/#/album?id=".concat(t),className:"msk image_cover",title:a,children:a})]}),Object(i.jsx)("p",{className:"title text-nowrap",children:a}),Object(i.jsx)("p",{className:"author text-nowrap",children:r})]})}var C=Object(a.memo)(R);function A(){var n=Object(d.a)(["\n  .album-content {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    height: 186px;\n    margin: 20px 0 37px;\n    border: 1px solid #d3d3d3;\n    background: #f5f5f5;\n    \n    .ablum-list {\n      width: 645px;\n      height: 150px;\n      margin-top: 28px;\n    }\n\n    .album-banner {\n      display: flex !important;\n      width: 645px;\n      height: 150px;\n    }\n    .btn {\n      width: 16px;\n      height: 25px;\n      cursor: pointer;\n    }\n    .btn-left {\n      background-position: -257px -75px;\n    }\n    .btn-right {\n      background-position: -302px -75px;\n    }\n  }\n"]);return A=function(){return n},n}var M=x.a.div(A());function E(){var n=Object(a.useRef)(),t=Object(c.d)((function(n){return{newAlbum:n.getIn(["recommend","newAlbum"])}}),c.b).newAlbum,e=Object(c.c)();return Object(a.useEffect)((function(){e(b(10))}),[e]),Object(i.jsxs)(M,{children:[Object(i.jsx)(V,{title:"\u65b0\u789f\u4e0a\u67b6"}),Object(i.jsxs)("div",{className:"album-content",children:[Object(i.jsx)("span",{className:"btn btn-left sprite_02",onClick:function(t){return n.current.prev()}}),Object(i.jsx)("div",{className:"ablum-list",children:Object(i.jsx)(u.a,{ref:n,dots:!1,autoplay:!0,children:[0,1].map((function(n){return Object(i.jsx)("div",{className:"album-banner",children:t.slice(5*n,5*(n+1)).map((function(n){return Object(i.jsx)(C,{id:n.id,picUrl:n.picUrl,name:n.name,author:n.artist.name},n.id)}))},n)}))})}),Object(i.jsx)("span",{className:"btn btn-right sprite_02",onClick:function(t){return n.current.next()}})]})]})}var I=Object(a.memo)(E);function z(){var n=Object(d.a)(["\n  width: 230px;\n\n  .header-box {\n    display: flex;\n    padding: 20px 0 0 19px;\n\n    .img-box {\n      position: relative;\n      width: 80px;\n      height: 80px;\n    }\n    .info {\n      margin: 6px 0 0 10px;\n      .info-title {\n        cursor: pointer;\n        text-decoration: none;\n        color: #333;\n        font-size: 14px;\n        font-weight: bold;\n      }\n      .btn {\n        display: inline-block;\n        text-indent: -9999px;\n        width: 22px;\n        height: 22px;\n        margin: 8px 10px 0 0;\n        cursor: pointer;\n      }\n\n      .play {\n        background-position: -267px -205px;\n        &:hover {\n          background-position: -267px -235px;\n        }\n      }\n\n      .favor {\n        background-position: -300px -205px;\n        &:hover {\n          background-position: -300px -235px;\n        }\n      }\n    }\n  }\n\n  .song-box {\n    padding-left: 15px;\n    margin-top: 20px;\n    .song-item {\n      display: flex;\n      justify-content: space-between;\n      height: 32px;\n      line-height: 32px;\n      cursor: pointer;\n      &:hover .song-name {\n        width: 96px;\n      }\n      &:hover .operate {\n        display: flex;\n      }\n      &:nth-child(-n+3) .num{\n        color: #c10d0c;\n      }\n      .num {\n        display: inline-block;\n        width: 35px;\n        color: #666;\n        text-align: center;\n        font-size: 16px;\n        vertical-align: middle;\n      }\n      .song-name {\n        display: inline-block;\n        width: 170px;\n        color: #000;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        vertical-align: middle;\n      }\n      .operate {\n        display: none;\n        align-items: center;\n        width: 82px;\n        height: 32px;\n        transition: all .3s;\n        \n        .btn {\n          display: inline-block;\n          width: 17px;\n          height: 17px;\n          margin-left: 8px;\n          cursor: pointer;\n        }\n\n        .play {\n          background-position: -267px -268px;\n        }\n\n        .addto {\n          position: relative;\n          top: 2px;\n          background-position: 0 -700px;\n        }\n\n        .favor {\n          background-position: -297px -268px;\n        }\n      }\n    }\n    .more {\n      height: 32px;\n      line-height: 32px;\n      text-align: right;\n      padding-right: 32px;\n      cursor: pointer;\n      \n      a {\n        color: #000;\n      }\n    }\n\n  }\n\n"]);return z=function(){return n},n}var D=x.a.div(z()),T=e(37);function L(n){var t=n.id,e=n.name,a=n.coverImgUrl,r=n.tracks,o=Object(c.c)();return Object(i.jsxs)(D,{children:[Object(i.jsxs)("div",{className:"header-box",children:[Object(i.jsxs)("div",{className:"img-box",children:[Object(i.jsx)("img",{src:a+"?param=80y80",alt:""}),Object(i.jsx)("a",{href:"https://music.163.com/#/discover/toplist?id=".concat(t),className:"image_cover",title:e,children:e})]}),Object(i.jsxs)("div",{className:"info",children:[Object(i.jsx)("h3",{className:"info-title",children:e}),Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{className:"btn play sprite_02"}),Object(i.jsx)("span",{className:"btn favor sprite_02"})]})]})]}),Object(i.jsxs)("ul",{className:"song-box",children:[r.slice(0,10).map((function(n,e){return Object(i.jsxs)("li",{className:"song-item",children:[Object(i.jsxs)("span",{children:[Object(i.jsx)("span",{className:"num",children:e+1}),Object(i.jsx)("span",{className:"song-name",children:n.name})]}),Object(i.jsxs)("div",{className:"operate",children:[Object(i.jsx)("span",{className:"btn sprite_02 play",onClick:function(n){return function(n){o(Object(T.e)(n))}(t)}}),Object(i.jsx)("button",{className:"btn sprite_icon2 addto"}),Object(i.jsx)("button",{className:"btn sprite_02 favor"})]})]},n.id)})),Object(i.jsx)("li",{className:"more",children:Object(i.jsx)("a",{href:"https://music.163.com/#/discover/toplist?id=".concat(t),children:"\u67e5\u770b\u5168\u90e8>"})})]})]})}L.defaultProps={id:0,name:"",coverImgUrl:"",tracks:[]};var F=Object(a.memo)(L);function H(){var n=Object(d.a)(["\n  \n  .top-list {\n    display: flex;\n    height: 472px;\n    margin-top: 20px;\n    background-image: url(",");\n  }\n\n"]);return H=function(){return n},n}var B=x.a.div(H(),"data:image/png;base64,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");function P(){var n=Object(c.d)((function(n){return{upRanking:n.getIn(["recommend","upRanking"]),newRanking:n.getIn(["recommend","newRanking"]),originRanking:n.getIn(["recommend","originRanking"])}}),c.b),t=n.upRanking,e=n.newRanking,r=n.originRanking,o=Object(c.c)();return Object(a.useEffect)((function(){o(m(0)),o(m(2)),o(m(3))}),[o]),Object(i.jsxs)(B,{children:[Object(i.jsx)(V,{title:"\u699c\u5355"}),Object(i.jsxs)("div",{className:"top-list",children:[Object(i.jsx)(F,{id:t.id,name:t.name,coverImgUrl:t.coverImgUrl,tracks:t.tracks}),Object(i.jsx)(F,{id:e.id,name:e.name,coverImgUrl:e.coverImgUrl,tracks:e.tracks}),Object(i.jsx)(F,{id:r.id,name:r.name,coverImgUrl:r.coverImgUrl,tracks:r.tracks})]})]})}var Q=Object(a.memo)(P);function _(){var n=Object(d.a)(["\n  width: 730px;\n  padding: 20px 20px 40px;\n  border-right: 1px solid #d3d3d3;\n"]);return _=function(){return n},n}function $(){var n=Object(d.a)(["\n  background-color: #ffffff;\n"]);return $=function(){return n},n}var nn=x.a.div($()),tn=x.a.div(_());function en(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(f,{}),Object(i.jsx)(nn,{className:"wrap-v2",children:Object(i.jsxs)(tn,{children:[Object(i.jsx)(y,{}),Object(i.jsx)(I,{}),Object(i.jsx)(Q,{})]})})]})}t.default=Object(a.memo)(en)}}]);
//# sourceMappingURL=8.a58f049a.chunk.js.map