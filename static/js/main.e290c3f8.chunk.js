(this.webpackJsonptriple7=this.webpackJsonptriple7||[]).push([[5],{147:function(e,t,i){},230:function(e,t,i){},231:function(e,t,i){},341:function(e,t,i){"use strict";i.r(t);var a=i(1),n=i(206),s=i.n(n),o=(i(230),i(231),i(77)),r=i(10),l=i(18),c=i.p+"static/media/I_candleChartWhite.dfa39177.svg",A=i.p+"static/media/I_dnPolWhite.a263bcf5.svg",p=i(45),d=i(0);function x(e){let{bg:t,blur:i,off:a,index:n}=e;Object(p.b)();return Object(d.jsx)(b,{onClick:function(){a&&a()},className:function(){let e="";return t&&(e+=" bg"),i&&(e+=" blur"),e}(),style:{zIndex:n&&n}})}const b=l.b.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  cursor: pointer;
  z-index: 5;

  &.bg {
    background: rgba(0, 0, 0, 0.3);
  }

  &.blur {
    backdrop-filter: blur(50px);
    -webkit-backdrop-filter: blur(50px);
  }
`;function g(){const e=Object(a.useRef)(),[t,i]=Object(a.useState)(!0);return Object(a.useEffect)((()=>{t?setTimeout((()=>{i(!1)}),2320):setTimeout((()=>{i(!0)}),1e3)}),[t]),Object(d.jsx)(h,{duration:.24,children:t&&Object(d.jsx)("ul",{className:"loaderList",ref:e,children:new Array(4).fill("").map(((e,t)=>Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:"body"}),Object(d.jsx)("span",{className:"bar"})]},t)))})})}const f=l.c`
  0%{
    opacity: 0;
    transform: scale(1,0);
  }
  100%{
    opacity: 1;
    transform: scale(1,1)
  }
`,h=l.b.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #0a0e17;

  .loaderList {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 10px;
      height: 49px;
      position: relative;

      span {
        display: inline-block;
        background: #f7ab1f;
        position: absolute;
        transform: scale(1, 0);

        &.body {
          border-radius: 1.6px;
          width: inherit;
        }

        &.bar {
          border-radius: 0.6px;
          width: 2px;
        }
      }

      &:nth-of-type(1) {
        span {
          &.body {
            height: 23px;
            top: 12px;
            animation: ${f} ${e=>e.duration}s forwards
              linear;
          }

          &.bar {
            height: 39px;
            top: 0;
            animation: ${f} ${e=>e.duration}s
              ${e=>e.duration}s forwards linear;
          }
        }
      }

      &:nth-of-type(2) {
        span {
          &.body {
            height: 15px;
            bottom: 7px;
            animation: ${f} ${e=>e.duration}s
              ${e=>2*e.duration}s forwards linear;
          }

          &.bar {
            height: 26px;
            bottom: 0;
            animation: ${f} ${e=>e.duration}s
              ${e=>3*e.duration}s forwards linear;
          }
        }
      }

      &:nth-of-type(3) {
        span {
          &.body {
            height: 21px;
            bottom: 14px;
            animation: ${f} ${e=>e.duration}s
              ${e=>4*e.duration}s forwards linear;
          }

          &.bar {
            height: 39px;
            bottom: 0;
            animation: ${f} ${e=>e.duration}s
              ${e=>5*e.duration}s forwards linear;
          }
        }
      }

      &:nth-of-type(4) {
        span {
          &.body {
            height: 17px;
            top: 10px;
            animation: ${f} ${e=>e.duration}s
              ${e=>6*e.duration}s forwards linear;
          }

          &.bar {
            height: 29px;
            top: 6px;
            animation: ${f} ${e=>e.duration}s
              ${e=>7*e.duration}s forwards linear;
          }
        }
      }
    }
  }
`,j=[{icon:c,type:"candlestick",typeStr:"Candles"}],u=[{key:"5s",value:5e3},{key:"10s",value:1e4},{key:"30s",value:3e4},{key:"1m",value:6e4},{key:"5m",value:3e5},{key:"30m",value:18e5},{key:"1h",value:36e5},{key:"4h",value:144e5},{key:"1d",value:844e5}];new Date,new Date,new Date,new Date,new Date,new Date,new Date,new Date,new Date;var m=i(363);function O(e){let{off:t,chartOpt:i,setChartOpt:a}=e;const{t:n}=Object(m.a)();return Object(d.jsxs)(w,{children:[Object(d.jsx)("p",{className:"key",children:n("Time frames")}),Object(d.jsx)("ul",{className:"value",children:u.map(((e,t)=>Object(d.jsx)("li",{className:`${i.barSize===e.value&&"on"}`,onClick:()=>function(e){let t=i;t.barSizeStr=e.key,t.barSize=e.value,a({...t})}(e),children:Object(d.jsx)("strong",{children:e.key})},t)))})]})}l.b.section`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 202px;
  padding: 20px;
  color: rgba(255, 255, 255, 0.4);
  background: #22262e;
  border-radius: 20px;
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  box-shadow: drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.8));
  top: 46px;
  position: absolute;
  z-index: 6;

  .key {
    font-size: 14px;
  }

  .value {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48px;
      height: 34px;
      font-size: 16px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 6px;
      cursor: pointer;

      &.on {
        color: #fff;
        background: rgba(255, 255, 255, 0.1);
        border-color: #fff;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);
      }
    }
  }
`;const w=l.b.section`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 202px;
  padding: 20px;
  color: rgba(255, 255, 255, 0.4);
  background: #22262e;
  border-radius: 20px;
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  box-shadow: drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.8));
  top: 46px;
  position: absolute;
  z-index: 6;

  .key {
    font-size: 14px;
  }

  .value {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48px;
      height: 34px;
      font-size: 16px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 6px;
      cursor: pointer;

      &.on {
        color: #fff;
        background: rgba(255, 255, 255, 0.1);
        border-color: #fff;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);
      }
    }
  }
`;function B(e){let{off:t,chartOpt:i,setChartOpt:a}=e;const{t:n}=Object(m.a)();return Object(d.jsxs)(y,{children:[Object(d.jsx)("p",{className:"key",children:n("Chart types")}),Object(d.jsx)("ul",{className:"value",children:j.map(((e,t)=>Object(d.jsxs)("li",{className:`${i.typeStr===e.typeStr&&"on"}`,onClick:()=>function(e){let t=i;t.type=e.type,t.typeStr=e.typeStr,a({...t})}(e),children:[Object(d.jsx)("img",{src:e.icon,alt:""}),Object(d.jsx)("p",{children:n(e.typeStr)})]},t)))})]})}l.b.section`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 20px 24px 30px;
  color: rgba(255, 255, 255, 0.4);
  background: #22262e;
  border-radius: 20px;
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  box-shadow: drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.8));
  top: 46px;
  right: 0;
  left: 0;
  position: absolute;
  z-index: 6;

  .key {
    font-size: 14px;
  }

  .value {
    display: flex;
    gap: 14px;

    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 12px;
      width: 100px;
      height: 100px;
      font-size: 12px;
      font-weight: 700;
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 8px;
      cursor: pointer;

      &:hover,
      &.on {
        color: #fff;
        background: rgba(255, 255, 255, 0.1);
        border-color: #fff;

        img {
          opacity: 1;
        }
      }

      img {
        width: 48px;
        opacity: 0.4;
      }
    }
  }
`;const y=l.b.section`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 430px;
  padding: 20px 24px 30px;
  color: rgba(255, 255, 255, 0.4);
  background: #22262e;
  border-radius: 20px;
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  box-shadow: drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.8));
  top: 46px;
  position: absolute;
  z-index: 6;

  .key {
    font-size: 14px;
  }

  .value {
    display: flex;
    gap: 14px;

    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 12px;
      width: 118px;
      height: 118px;
      font-size: 14px;
      font-weight: 700;
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 8px;
      cursor: pointer;

      &:hover,
      &.on {
        color: #fff;
        background: rgba(255, 255, 255, 0.1);
        border-color: #fff;

        img {
          opacity: 1;
        }
      }

      img {
        width: 52px;
        opacity: 0.4;
      }
    }
  }
`;var v=i(158),k=i(14),N=i(163),I=i(6),C=i(33),E=i(5),S=i(179),z=i(28),Q=i(67),D=i(218),R=i(219),T=i(357),L=i(353),F=i(356),P=i(352),U=i(136),H=i(354),M=i(355),X=i(349),G=i(166),Y=i(135),J=i(350),q=i(23),V=i.n(q);const W="http://localhost:8082",K="/api/v1",Z={GET_ASSETS_TICKER_PRICE:"http://localhost:30708/assets/ticker/price",GET_ASSETS:W+"/assets/list",SIGNUP:W+K+"/auth/signup",LOGIN:W+K+"/auth/signin",GET_USER_WALLET:W+K+"/wallets",GET_USER_INFO:W+K+"/users",GET_MY_FOLLOWERS:W+K+"/subscriptions/follower",GET_MY_FOLLOWERWINGS:W+K+"/subscriptions/following",GET_CRYPTO_LIST:W+K+"/cryptos/list",GET_TRADE_HISTORY:W+K+"/cryptos",GET_LATEST_CRYPTO_PRICE:W+K+"/cryptos/latest/price",GET_RANKING:W+K+"/rankings/crypto",DEPOSIT:W+K+"/wallets/charge",GET_DEPOSIT_HISTORY:W+K+"/wallets/history",GET_TOP_RANKING:W+K+"/rankings/top",REQUEST_FOLLOW:W+K+"/subscriptions",AUTH:W+"/users/auth",RESET_PW:W+"/users/reset/password",RESET_VERIFY:W+"/users/reset/verify",CHANGE_PW:W+"/users/change/password",REFRESH:W+"/users/refresh",EDIT_REF:W+"/users/edit/ref",MY_POSITION:W+"/users/my/position",USER_PROFILE:W+"/users/profile",USER_DAILY_SUMMARY:W+"/users02/daily-summary",USER_SEND_CERTIFICATION:W+"/users/send/verification",USER_VERIFY:W+"/users/verify",USER_QUERY:W+"/users/query",USER_BALANCE:W+"/users/balance",USER_BRANCH:W+"/users/branch",USER_BRANCH_FEE_LOG:W+"/users/branch/fee/log",USER_PREDEPOSIT:W+"/users/predeposit",USER_BETLOGS:W+"/users/betlogs",USER_DEMO_TOKEN:W+"/users/demo/token",USER_REFERRAL:W+"/users/myreferrals",NOTI:W+"/users/notice/setting",USER_REFERRAL_HISTORY:W+"/users/myreferrals/fee/log",INQUIRY_ENROLL:W+"/inquiry/enroll",NOTI_SET:W+"/users/notice/set",PHONE_COUNTRY_CODE:W+"/queries/v1/rows/country_code",BETS:W+"/bets/join",MY_BETS:W+"/bets/my",TRANSACTION_BRANCH_LIST:W+"/transactions/branch/list",TRANSACTION_BRANCH_TRANSFER:W+"/transactions/branch/transfer",TRANS_DEPOSIT:W+"/transactions/live/DEPOSIT",LISTEN_TRANSACTION:W+"/transactions/listen",TRANS_DEMO_FUND:W+"/transactions/demo/fund",TRANS_WITHDRAW:W+"/transactions/live/withdraw",WITHDRAW:W+"/transactions/withdraw",BOOKMARKS:W+"/bookmarks",BOOKMARKS_MY:W+"/bookmarks/my",QUERIES_FOREX:W+"/queries/forex",ADMIN_LEVEL_FEE:W+"/admins/level/fee",ADMIN_FEE_SETTING:W+"/admins/fee/setting",ADMIN_QR:W+"/admins/domain/setting/qr"};var _=i(49),$=i.n(_),ee=i(104);const te=Object(ee.b)({name:"chart",initialState:{betFlag:!1,closedFlag:!1,tokenPopupData:[],openedData:[],dividObj:"",currentPrice:0,pastPrice:0},reducers:{setBetFlag:(e,t)=>{e.betFlag=!e.betFlag},setClosedFlag:(e,t)=>{e.closedFlag=!e.closedFlag},setTokenPopupData:(e,t)=>{e.tokenPopupData=t.payload},setOpenedData:(e,t)=>{e.openedData=t.payload},setDividObj:(e,t)=>{e.dividObj=t.payload},setPrice:(e,t)=>{e.currentPrice=t.payload.currentPrice,e.pastPrice=t.payload.pastPrice}}}),{setBetFlag:ie,setClosedFlag:ae,setTokenPopupData:ne,setOpenedData:se,setDividObj:oe,setPrice:re}=te.actions;var le=te.reducer,ce=i(215),Ae=i.n(ce),pe=i(362);function de(e){let{assetInfo:t,chartOpt:i,openedData:n}=e;const s=Object(p.b)(),[o,r]=Object(a.useState)(),[l,c]=Object(a.useState)(),[A,x]=Object(a.useState)(),[b,g]=Object(a.useState)([]),[f,h]=Object(a.useState)(),[j,u]=Object(a.useState)(),[m,O]=Object(a.useState)(),[w,B]=Object(a.useState)(),[y,q]=Object(a.useState)(0),W=Object(a.useRef)(null);return Object(a.useLayoutEffect)((()=>{var e=S.a.new("ChartBox");x(e),e.setThemes([D.a.new(e),R.a.new(e)]);var i=e.container.children.push(T.a.new(e,{background:z.a.new(e,{fill:I.b(1580069)})}));e.interfaceColors.setAll({grid:"rgba(255, 255, 255, 0.1)",negative:I.b(16733011),positive:I.b(4175499)}),O(i),e.numberFormatter.set("numberFormat","#,###.####");var a=i.panels.push(L.a.new(e,{wheelY:"zoomX",panX:!0,panY:!0})),n=a.yAxes.push(U.a.new(e,{renderer:H.a.new(e,{pan:"zoom"}),extraMin:.1,tooltip:Q.a.new(e,{}),numberFormat:"#,###.####",extraTooltipPrecision:2})),s=a.xAxes.push(M.a.new(e,{baseInterval:{timeUnit:"second",count:1},renderer:X.a.new(e,{}),tooltip:Q.a.new(e,{})}));c(s);let o=n.createAxisRange(n.makeDataItem({value:0}));B(o);let l=o.get("label");u(l),l&&l.setAll({fill:I.b(16777215),background:z.a.new(e,{fill:I.b(0)})});let A=o.get("grid");A&&A.setAll({strokeOpacity:.5,strokeDasharray:[2,5],stroke:I.b(16777215)});var p=a.series.push(G.a.new(e,{name:t.symbol,clustered:!1,valueXField:"Date",valueYField:"Close",highValueYField:"High",lowValueYField:"Low",openValueYField:"Open",calculateAggregates:!0,xAxis:s,yAxis:n,legendValueText:"open: [bold]{openValueY}[/] high: [bold]{highValueY}[/] low: [bold]{lowValueY}[/] close: [bold]{valueY}[/]",legendRangeValueText:""}));r(p),i.set("stockSeries",p);var d=a.plotContainer.children.push(F.a.new(e,{stockChart:i,paddingTop:50,paddingLeft:0})),b=H.a.new(e,{inside:!0});b.labels.template.set("forceHidden",!0),b.grid.template.set("forceHidden",!0);var g=a.yAxes.push(U.a.new(e,{numberFormat:"#.#a",height:E.f(20),y:E.f(100),centerY:E.f(100),renderer:b})),f=a.series.push(Y.a.new(e,{name:"Volume",clustered:!1,valueXField:"Date",valueYField:"Volume",xAxis:s,yAxis:g,legendValueText:"[bold]{valueY.formatNumber('#,###.0a')}[/]"}));f.columns.template.setAll({strokeOpacity:0,fillOpacity:.5}),i.set("volumeSeries",f),d.data.setAll([p,f]),a.set("cursor",J.a.new(e,{yAxis:n,xAxis:s,snapToSeries:[p],snapToSeriesBy:"y!"}));let j=a.get("cursor");j.lineX.setAll({strokeDasharray:[2,5],stroke:I.b(16777215)}),j.lineY.setAll({strokeDasharray:[2,5],stroke:I.b(16777215)});var m=Q.a.new(e,{getStrokeFromSprite:!1,getFillFromSprite:!1});h(m),m.get("background").setAll({stroke:I.b(16777215),strokeOpacity:.8}),a.set("tooltip",m)}),[]),Object(a.useEffect)((()=>{A&&(console.log("chartOpt.barSize",i.barSize),V.a.get(`${Z.GET_LATEST_CRYPTO_PRICE}`,{params:{symbol:t.symbol,limit:900}}).then((e=>{let{data:t}=e,a=[];console.log("data",t),t.prices.map(((e,t)=>{let n,s,o=e.split(",");n=o[0],s=o[1];const r=new Date(s),l=new Date(r.getTime()+6e4*r.getTimezoneOffset());if(l%i.barSize){var c;let e=a.length-1;if(null===(c=a[e])||void 0===c||!c.Open)return;Number(n)>a[e].High?a[e].High=Number(n):Number(n)<a[e].Low&&(a[e].Low=Number(n)),a[e].Close=Number(n)}else{var A;let e=a.length-1;a.push({Date:l.getTime(),Open:null!==(A=a[e])&&void 0!==A&&A.Close?a[e].Close:Number(n),High:Number(n),Low:Number(n),Close:Number(n)})}})),g([...a])})))}),[A,i]),Object(a.useEffect)((()=>{const e=new Ae.a("http://localhost:8081/ws");return W.current=new pe.a({webSocketFactory:()=>e,onConnect:()=>{console.log("Connected"),W.current.subscribe(`/topic/get_ticker_price/${t.symbol}`,(e=>{try{const t=JSON.parse(e.body);q(Number(t))}catch(t){console.error("Error parsing message: ",t)}}))},onStompError:e=>{console.error("Broker error: ",e.headers.message)}}),W.current.activate(),()=>{W.current.deactivate()}}),[]),Object(a.useEffect)((()=>{if(!b[0])return;o.data.setAll([...b]);let e=setTimeout((()=>{y&&function(e){let t,a=b,n=a[a.length-1],r=(new Date).setMilliseconds(0);if(s(re({currentPrice:e,pastPrice:n.Close})),Math.floor(r/i.barSize)===Math.floor(n.Date/i.barSize)?(e>n.High?n.High=e:e<n.Low&&(n.Low=e),n.Close=e,a[a.length-1]=n,o.data.setIndex(o.data.length-1,n)):(t={Date:r,Open:n.Close,High:e,Low:e,Close:e},o.data.push(t)),g([...o.data]),j){w.animate({key:"value",to:e,duration:500,easing:v.ease.out(v.ease.cubic)}),j.set("text",m.getNumberFormatter().format(e));let t=j.get("background");t&&(e<n.Open?t.set("fill",A.interfaceColors.get("negative")):t.set("fill",A.interfaceColors.get("positive")))}}(y)}),100);return()=>{clearTimeout(e)}}),[b,y,o,j,w,m]),Object(a.useEffect)((()=>{n&&(console.log(n),n.map((e=>{!function(e,t,i,a,n,s,o){if(e){var r=e.createAxisRange(e.makeDataItem({value:a})),l=r.get("grid");l&&l.setAll({visible:!0,strokeOpacity:.2,strokeDasharray:[3,3],stroke:s});var c=k.a.new(t,{y:-100});c.children.push(N.a.new(t,{radius:10,stroke:s,fill:I.b(1580069),tooltipText:o,tooltip:i,tooltipY:0})),c.children.push(C.a.new(t,{text:n,stroke:s,strokeOpacity:.6,centerX:E.e,centerY:E.e})),r.set("bullet",P.a.new(t,{location:0,sprite:c}))}}(l,A,f,Number($()(e.createdat).format("x")),"HIGH"===e.side?"H":"L",I.b("HIGH"===e.side?4175499:16733011),Number(e.startingPrice).toFixed(2))})))}),[l,A,f,n]),Object(d.jsx)(xe,{id:"ChartBox"})}const xe=l.b.div`
  flex: 1;
  overflow: hidden;
`;function be(e){let{assetInfo:t,chartOpt:i,openData:n}=e;const[s,o]=Object(a.useState)(!1);return console.log(t),Object(a.useEffect)((()=>{null!==t&&void 0!==t&&t.symbol&&(o(!0),setTimeout((()=>o(!1)),1e3))}),[t]),s?Object(d.jsx)(d.Fragment,{}):Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(de,{assetInfo:t,chartOpt:i,openedData:n})})}function ge(e){let{off:t,setAssetInfo:i}=e;const n=Object(p.b)(),[s,o]=Object(a.useState)([]);return Object(a.useEffect)((()=>{V.a.get(`${Z.GET_CRYPTO_LIST}`).then((e=>{let{data:t}=e;console.log(t),o(t.symbolList||[]),n(ne(t.symbolList))})).catch((e=>console.error(e)))}),[]),Object(d.jsx)(fe,{children:Object(d.jsx)("article",{className:"listArea",children:Object(d.jsx)("ul",{className:"tokenList",children:s.map(((e,a)=>Object(d.jsx)("li",{onClick:()=>{return a=e,console.log(a),i(a),void t();var a},children:Object(d.jsx)("span",{className:"nameBox",children:Object(d.jsx)("p",{className:"name",children:e.symbol})})},a)))})})})}const fe=l.b.section`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 380px;
  max-height: 80vh;
  padding: 30px 20px;
  background: #22262e;
  border-radius: 20px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.8);
  top: 120px;
  position: fixed;
  z-index: 6;

  .topArea {
    display: flex;
    flex-direction: column;
    gap: 30px;

    .categoryList {
      display: flex;
      gap: 10px;

      li {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        padding: 0 20px;
        font-size: 16px;
        font-weight: 700;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid transparent;
        border-radius: 20px;
        cursor: pointer;

        &.on {
          border-color: #fff;
        }
      }
    }

    .searchBox {
      flex: 1;
      display: flex;
      gap: 14px;
      height: inherit;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 20px;

      &:hover {
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
      }

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        aspect-ratio: 1;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 50%;

        &.searchBtn {
          img {
            width: 18px;
          }
        }

        &.cancelBtn {
          border: 1.2px solid rgba(255, 255, 255, 0.4);

          img {
            width: 16px;
            opacity: 0.4;
          }
        }
      }

      input {
        &::placeholder {
          color: #fff;
          opacity: 0.2;
        }
      }
    }
  }

  .listArea {
    flex: 1;
    overflow-y: scroll;

    .tokenList {
      display: flex;
      flex-direction: column;
      font-size: 16px;

      & > li {
        display: flex;
        align-items: center;
        gap: 10px;
        height: 50px;
        padding: 0 14px;
        border-radius: 6px;
        cursor: pointer;

        &:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .favBtn {
          img {
            width: 14px;
          }
        }

        .tknImg {
          height: 34px;
        }

        p {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .nameBox {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 10px;

          .name {
          }

          .inital {
            padding: 4px;
            font-size: 12px;
            line-height: 20px;
            color: rgba(255, 255, 255, 0.6);
            background: rgba(255, 255, 255, 0.2);
            border-radius: 4px;
          }
        }

        .percent {
          &.red {
            color: #ff5353;
          }

          &.green {
            color: #3fb68b;
          }
        }
      }
    }
  }
`,he=[{key:"Exchange",url:"/crypto"},{key:"Ranking",url:"/ranking"},{key:"Profile",url:"/setting/prof"}];i.p;var je=i.p+"static/media/I_defaultProfImg.303a5d69.svg",ue=i.p+"static/media/I_wallet.3911a94e.svg",me=i.p+"static/media/I_x.61772e17.svg";function Oe(e){let{off:t,offAll:i}=e;const{t:n}=Object(m.a)(),s=Object(r.p)(),[o,l]=Object(a.useState)(""),c=localStorage.getItem("token");return Object(a.useEffect)((()=>{V.a.get(Z.GET_USER_INFO,{headers:{Authorization:`Bearer ${c}`}}).then((e=>{let{data:t}=e;console.log(t),l(t)})).catch(console.error)}),[]),Object(d.jsxs)(we,{className:"profPopup",children:[Object(d.jsx)("button",{className:"exitBtn",onClick:()=>t(),children:Object(d.jsx)("img",{src:me,alt:""})}),Object(d.jsx)("div",{className:"profBox",children:Object(d.jsx)("div",{className:"textBox",children:Object(d.jsx)("p",{className:"id",children:o.name})})}),Object(d.jsxs)("div",{className:"accountBox",children:[Object(d.jsx)("div",{className:"title"}),Object(d.jsx)("ul",{className:"infoList"})]}),Object(d.jsx)("ul",{className:"navList",children:Object(d.jsx)("li",{children:Object(d.jsx)("button",{className:"navBtn",onClick:()=>function(e){s(e),t(),i&&i()}("/setting/prof"),children:n("Profile")})})}),Object(d.jsx)("button",{className:"logOutBtn",onClick:function(){localStorage.removeItem("token"),s("/"),i&&i(),t()},children:n("Sign Out")})]})}const we=l.b.section`
  display: flex;
  flex-direction: column;
  width: 380px;
  padding: 24px 30px 34px;
  background: #22262e;
  border-radius: 20px;
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.8);
  top: 70px;
  right: 30px;
  bottom: 30px;
  position: fixed;
  z-index: 6;

  .exitBtn {
    display: block;
    margin: 0 0 0 auto;
    opacity: 0.4;

    img {
      width: 14px;
    }
  }

  .profBox {
    display: flex;
    align-items: center;
    gap: 8px;

    .tierImg {
      height: 68px;
    }

    .textBox {
      display: flex;
      flex-direction: column;
      gap: 2px;

      .id {
        font-size: 18px;
        color: #fff;
      }

      .pos {
        font-size: 14px;
        color: rgba(255, 255, 255, 0.4);
      }
    }
  }

  .accountBox {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 24px 0;
    font-size: 14px;

    .title {
      display: flex;
      align-items: center;
      gap: 6px;
      color: #fff;

      .dot {
        width: 6px;
        height: 6px;
        background: #fff;
        border-radius: 50%;
      }
    }

    .infoList {
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding: 14px 20px;
      background: rgba(0, 0, 0, 0.4);
      border-radius: 10px;

      li {
        display: flex;
        justify-content: space-between;
        height: 18px;

        .key {
          color: rgba(255, 255, 255, 0.4);
        }

        .value {
          color: #fff;
        }
      }
    }
  }

  .navList {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 12px 0;
    border-top: 1.4px solid rgba(255, 255, 255, 0.2);

    li {
      button {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
        height: 100%;
        padding: 0 14px;
        height: 40px;
        border-radius: 6px;
        color: rgba(255, 255, 255, 0.4);

        &:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.1);
        }

        .new {
          color: #ff5353;
        }
      }
    }
  }

  .logOutBtn {
    width: 100%;
    height: 50px;
    font-size: 16px;
    color: #fff;
    border: 1.2px solid rgba(255, 255, 255, 0.2);
    border-radius: 10px;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: #fff;
    }
  }
`;var Be=i.p+"static/media/I_xWhite.914d7123.svg",ye=i.p+"static/media/I_chkOrange.9a19cf27.svg";function ve(e){var t;let{off:i,setAddPopup:n}=e;const{t:s}=Object(m.a)(),o=Object(r.p)(),[l,c]=Object(a.useState)([]),A=localStorage.getItem("token");return console.log(l),Object(a.useEffect)((()=>{!async function(){if(A)try{const{data:e}=await V.a.get(`${Z.GET_USER_WALLET}`,{headers:{Authorization:`Bearer ${A}`}});c(e)}catch(e){console.error(e)}}()}),[A]),Object(d.jsxs)(ke,{className:"defaultPopup",children:[Object(d.jsxs)("article",{className:"topArea",children:[Object(d.jsx)("span",{className:"blank"}),Object(d.jsx)("p",{className:"title",children:s("My Wallet")}),Object(d.jsx)("button",{className:"exitBtn",onClick:()=>i(),children:Object(d.jsx)("img",{src:Be,alt:""})})]}),Object(d.jsxs)("article",{className:"contArea",children:[Object(d.jsxs)("div",{className:"targetBox",children:[Object(d.jsxs)("div",{className:"leftBox",children:[Object(d.jsx)("p",{className:"type",children:s("my assets")}),Object(d.jsxs)("p",{className:"balance",children:[null===(t=l[0])||void 0===t?void 0:t.cash.toLocaleString(),"\u20a9"]}),Object(d.jsx)("p",{className:"type"})]}),Object(d.jsx)("button",{className:"actionBtn",onClick:()=>function(e){let{nextProc:t,isNotNavigate:a}=e;i(),a?t(!0):o("/market/deposit")}({nextProc:o("/market/deposit"),isNotNavigate:!1}),children:s("Deposit")})]}),Object(d.jsx)("ul",{className:"typeList",children:l.map((e=>Object(d.jsxs)("li",{className:`${e.cryptoSymbol}`,children:[Object(d.jsx)("p",{className:"key",children:s(e.cryptoSymbol)}),Object(d.jsx)("strong",{className:"value",children:e.amount})]})))})]})]})}const ke=l.b.section`
  width: 500px;
  color: #fff;

  .topArea {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    padding: 0 30px;

    .title {
      font-size: 18px;
    }

    .blank,
    .exitBtn img {
      width: 16px;
    }
  }

  .contArea {
    padding: 30px 40px 60px;

    .targetBox {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100px;

      .leftBox {
        display: flex;
        flex-direction: column;
        gap: 6px;

        .type {
          font-size: 14px;
          height: 18px;
        }

        .balance {
          font-size: 24px;
        }
      }

      .actionBtn {
        height: 40px;
        padding: 0 20px;
        font-size: 16px;
        font-weight: 700;
        background: rgba(255, 255, 255, 0.1);
        border: 1.4px solid #fff;
        border-radius: 20px;

        &:hover {
          color: #f7ab1f;
          background: rgba(247, 171, 31, 0.1);
          border-color: #f7ab1f;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
        }
      }
    }

    .typeList {
      display: flex;
      flex-direction: column;
      gap: 10px;

      li {
        display: flex;
        align-items: center;
        gap: 10px;
        height: 48px;
        padding: 0 24px;
        font-size: 16px;
        background: rgba(0, 0, 0, 0.4);
        border: 1.4px solid transparent;
        border-radius: 10px;
        cursor: pointer;

        &.on {
          border-color: rgba(247, 171, 31, 0.4);

          img {
            opacity: 1;
          }
        }

        img {
          opacity: 0;
          width: 18px;
        }

        .key {
          flex: 1;
        }

        .value {
        }
      }
    }
  }
`;function Ne(e){let{off:t}=e;const{t:i}=Object(m.a)(),[n,s]=Object(a.useState)("");return Object(d.jsxs)(Ie,{className:"defaultPopup",children:[Object(d.jsxs)("article",{className:"topArea",children:[Object(d.jsx)("span",{className:"blank"}),Object(d.jsx)("p",{className:"title",children:i("Add")}),Object(d.jsx)("button",{className:"exitBtn",onClick:()=>t(),children:Object(d.jsx)("img",{src:Be,alt:""})})]}),Object(d.jsx)("article",{className:"contArea",children:Object(d.jsxs)("div",{className:"inputCont",children:[Object(d.jsx)("p",{className:"key",children:i("Add virtual money on Demo account")}),Object(d.jsxs)("div",{className:"value",children:[Object(d.jsx)("input",{value:n,onChange:e=>s(e.target.value),placeholder:""}),Object(d.jsx)("p",{className:"unit",children:"USDT"})]})]})})]})}const Ie=l.b.section`
  width: 380px;
  color: #fff;

  .topArea {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    padding: 0 30px;

    .title {
      font-size: 18px;
    }

    .blank,
    .exitBtn img {
      width: 16px;
    }
  }

  .contArea {
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 14px 30px 40px;

    .inputCont {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      .key {
        font-size: 14px;
        color: rgba(255, 255, 255, 0.4);
      }

      .value {
        display: flex;
        align-items: center;
        width: 100%;
        height: 44px;
        padding: 0 20px;
        font-size: 16px;
        background: rgba(0, 0, 0, 0.4);
        border: 1.4px solid transparent;
        border-radius: 10px;

        &:focus-within {
          border-color: rgba(247, 171, 31, 0.4);
        }

        input {
          flex: 1;
        }
      }
    }

    .addBtn {
      height: 56px;
      font-size: 18px;
      font-weight: 700;
      color: #4e3200;
      background: linear-gradient(99.16deg, #604719 3.95%, #f7ab1f 52.09%);
      border-radius: 12px;
    }
  }
`;var Ce=i.p+"static/media/I_LOGO.940fb018.png";function Ee(e){var t;let{white:i,border:n,title:s,demoToken:o}=e;const l=Object(r.p)(),c=Object(r.n)(),{i18n:A,t:p}=Object(m.a)(),b=localStorage.getItem("token"),[g,f]=Object(a.useState)(!1),[h,j]=Object(a.useState)(!1),[u,O]=Object(a.useState)(!1),[w,B]=Object(a.useState)(!1),[y,v]=Object(a.useState)(!1),[k,N]=Object(a.useState)({}),[I,C]=Object(a.useState)({}),[E,S]=Object(a.useState)(!1);return Object(a.useEffect)((()=>{!async function(){b&&(console.log("token",b),await V.a.get(`${Z.GET_USER_WALLET}`,{headers:{Authorization:`Bearer ${b}`}}).then((e=>{let{data:t}=e;console.log(t),C(t)})).catch((e=>{console.error(e)})))}()}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(Se,{className:`${i&&"white"} ${n&&"border"}`,children:[Object(d.jsx)("div",{className:"filterBox"}),Object(d.jsxs)("article",{className:"leftArea",children:[Object(d.jsx)("button",{className:"logoBtn",onClick:()=>l("/"),children:Object(d.jsx)("img",{src:Ce,alt:""})}),!i&&Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("ul",{className:"navList",children:he.map(((e,t)=>Object(d.jsx)("li",{className:`${-1!==c.pathname.indexOf(String(e.key).toLocaleLowerCase())&&"on"}`,onClick:()=>l(e.url),children:p(e.key)},t)))})})]}),Object(d.jsx)("article",{className:"rightArea",children:-1===c.pathname.indexOf("auth")?b?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("span",{className:"accountBox",children:[Object(d.jsx)("button",{className:"accountBtn",onClick:()=>O(!0),children:Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("strong",{className:"value",children:[null===(t=I[0])||void 0===t?void 0:t.cash.toLocaleString(),"\u20a9"]})})}),Object(d.jsxs)("button",{className:"depositBtn",onClick:function(){l(b?"/market/deposit":"/auth")},children:[Object(d.jsx)("img",{src:ue,alt:""}),Object(d.jsx)("strong",{children:p("Deposit")})]})]}),b&&Object(d.jsx)("button",{className:"myBtn",onClick:()=>j(!0),children:Object(d.jsx)("img",{src:je,alt:""})})]}):Object(d.jsx)("button",{className:"loginBtn",onClick:()=>l("/auth"),children:p("LOGIN")}):Object(d.jsx)("div",{className:"lngBox",children:Object(d.jsx)("button",{className:"lngBtn",onClick:()=>f(!0)})})})]}),u&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(ve,{off:O,setAddPopup:S}),Object(d.jsx)(x,{off:O})]}),E&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(Ne,{off:S}),Object(d.jsx)(x,{off:S})]}),h&&b&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(Oe,{off:j,userData:k}),Object(d.jsx)(x,{off:j})]})]})}const Se=l.b.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 30px;
  color: #fff;
  top: 0;
  right: 0;
  left: 0;
  position: fixed;
  z-index: 3;

  .filterBox {
    width: 100%;
    height: 100%;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    top: 0;
    left: 0;
    position: absolute;
    z-index: -1;
  }

  &.border {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  &.white {
    color: #2a2a2a;
    border-bottom: none;

    .rightArea {
      .profBox {
        .profPopup {
          color: #fff;
          background: #2a2a2a;
        }
      }

      .lngBox {
        .selectPopup {
          background: #fff;
          box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.2);

          li {
            &.on {
              color: #f7ab1f;
            }
          }
        }
      }

      .loginBtn {
        color: #2a2a2a;
        border: 1px solid #2a2a2a;
      }
    }
  }

  .leftArea {
    display: flex;
    align-items: center;
    gap: 24px;

    .logoBtn {
      display: flex;

      align-items: center;
      img {
        height: 40px;
      }
    }

    .navList {
      display: flex;
      gap: 24px;

      li {
        display: flex;
        align-items: center;
        height: 30px;
        padding: 0 12px;
        font-size: 14px;
        border-radius: 6px;
        cursor: pointer;

        &.on {
          background: rgba(255, 255, 255, 0.1);

          &.moreBox {
            .moreBtn {
              img {
                transform: rotate(180deg);
              }
            }
          }
        }

        &.moreBox {
          position: relative;

          .moreBtn {
            display: flex;
            align-items: center;
            gap: 6px;
          }
        }
      }
    }
  }

  .lngBox {
    position: relative;

    .lngBtn {
      height: 30px;
      padding: 0 12px;
      font-size: 14px;
      font-weight: 700;
      border-radius: 6px;

      &:hover {
        background: rgba(255, 255, 255, 0.1);
      }
    }
  }

  .rightArea {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;

    .accountBox {
      display: flex;
      height: 38px;
      font-size: 14px;
      background: rgba(247, 171, 31, 0.2);
      border-radius: 28px;

      .accountBtn {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 6px;
        width: 138px;
      }

      .depositBtn {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        width: 122px;
        height: 100%;
        color: #2a2a2a;
        background: #f7ab1f;
        border-radius: 28px;

        img {
          height: 18px;
        }
      }
    }

    .myBtn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 34px;
      aspect-ratio: 1;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50%;

      img {
        width: 22px;
      }
    }

    .loginBtn {
      width: 132px;
      height: 34px;
      font-weight: 700;
      border: 1px solid #fff;
      border-radius: 28px;

      &:hover {
        color: #f7ab1f;
        border-color: #f7ab1f;
      }
    }
  }
`;var ze=i.p+"static/media/I_qnaWhite.d7a7e0b8.svg",Qe=(i.p,i.p,i(106));i(107);function De(e){let{type:t,cont:i,assetInfo:a,amount:n,profit:s}=e;switch(t){case"alarm":Object(Qe.b)(Object(d.jsxs)("div",{className:"customBox",children:[Object(d.jsx)("span",{className:"iconBox",children:Object(d.jsx)("img",{src:ye,alt:""})}),Object(d.jsx)("p",{className:"cont",children:i})]}),{className:"CustomToastAlarm"});break;case"alarm_black":Object(Qe.b)(Object(d.jsxs)("div",{className:"customBox",children:[Object(d.jsx)("span",{className:"iconBox",children:Object(d.jsx)("img",{src:ye,alt:""})}),Object(d.jsx)("p",{className:"cont",children:i})]}),{className:"CustomToastAlarm black"})}}function Re(){const[e,t]=Object(a.useState)(),[i,n]=(Object(p.b)(),Object(a.useState)(!0)),[s,o]=Object(a.useState)({type:"candlestick",typeStr:"Candles",barSize:u[0].value,barSizeStr:u[0].key}),[r,l]=Object(a.useState)(!1),[b,f]=Object(a.useState)(!1),[h,j]=Object(a.useState)(!1),[m,w]=Object(a.useState)(""),y=Object(p.c)((e=>e.chart.openedData)),v=Object(p.c)((e=>e.chart.tokenPopupData));async function k(t){De({type:t,assetInfo:e,amount:m}),console.log(t,"---",e,"---",m)}return Object(a.useLayoutEffect)((()=>{localStorage.setItem("balanceType","Live")}),[]),Object(a.useEffect)((()=>{V.a.get(`${Z.GET_CRYPTO_LIST}`).then((e=>{let{data:i}=e;console.log("asset",i.symbolList),t(i.symbolList[0])})).catch((e=>console.error(e))),setTimeout((()=>{n(!1)}),5e3)}),[]),Object(a.useEffect)((()=>{}),[e,y,v]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(Ee,{}),i?Object(d.jsx)(g,{}):Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(Te,{children:Object(d.jsxs)("section",{className:"innerBox",children:[Object(d.jsx)("article",{className:"tokenArea",children:Object(d.jsxs)("div",{className:"selectBox",children:[Object(d.jsxs)("button",{className:"selectBtn",onClick:()=>j(!0),children:[Object(d.jsx)("p",{children:null===e||void 0===e?void 0:e.symbol}),Object(d.jsx)("img",{src:A,alt:""})]}),h&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(ge,{off:j,setAssetInfo:t}),Object(d.jsx)(x,{off:j})]})]})}),Object(d.jsxs)("article",{className:"contArea",children:[Object(d.jsxs)("div",{className:"chartCont",children:[Object(d.jsxs)("ul",{className:"btnList",children:[Object(d.jsxs)("li",{children:[Object(d.jsx)("button",{className:"utilBtn",onClick:()=>l(!0),children:Object(d.jsx)("p",{children:s.barSizeStr})}),Object(d.jsx)("p",{className:"info",children:`Time frames : ${s.barSizeStr}`})]}),r&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(O,{off:l,chartOpt:s,setChartOpt:o}),Object(d.jsx)(x,{off:l})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("button",{className:"utilBtn",onClick:()=>f(!0),children:Object(d.jsx)("img",{src:c,alt:""})}),Object(d.jsx)("p",{className:"info",children:`Chart type : ${s.typeStr}`})]}),b&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(B,{off:f,chartOpt:s,setChartOpt:o}),Object(d.jsx)(x,{off:f})]})]}),Object(d.jsx)(be,{assetInfo:e,chartOpt:s,openedData:y})]}),Object(d.jsxs)("div",{className:"actionBox",children:[Object(d.jsxs)("div",{className:"amountBox contBox",children:[Object(d.jsxs)("div",{className:"key",children:[Object(d.jsx)("p",{children:"Amount"}),Object(d.jsxs)("button",{className:"infoBtn",onClick:()=>{},children:[Object(d.jsx)("img",{src:ze,alt:""}),Object(d.jsx)("span",{className:"hoverPopup",children:Object(d.jsx)("p",{children:"Specify the exact amount of trade."})})]})]}),Object(d.jsxs)("div",{className:"value",children:[Object(d.jsx)("p",{className:"unit",children:"$"}),Object(d.jsx)("input",{value:m,onChange:e=>{const t=e.target.value.replace(/[^0-9]/g,"");w(t)},placeholder:"0"})]})]}),Object(d.jsx)("span",{className:"btnBox",children:Object(d.jsx)("button",{className:"highBtn",disabled:!m,onClick:()=>k("Buy"),children:Object(d.jsx)("span",{className:"defaultBox",children:Object(d.jsx)("strong",{children:"BUY"})})})}),Object(d.jsx)("span",{className:"btnBox",children:Object(d.jsx)("button",{className:"lowBtn",disabled:!m,onClick:()=>k("Sell"),children:Object(d.jsx)("span",{className:"defaultBox",children:Object(d.jsx)("strong",{children:"SELL"})})})})]})]})]})})})]})}const Te=l.b.main`
  height: 100vh;
  padding: 0 30px 0;
  color: #fff;
  background: #0a0e17;
  overflow-y: scroll;

  .innerBox {
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 60px 0 30px 0;

    .tokenArea {
      display: flex;
      align-items: center;
      gap: 30px;
      height: 60px;

      .selectBox {
        position: relative;

        .selectBtn {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          min-width: 154px;
          height: 40px;
          padding: 0 24px;
          font-size: 16px;
          font-weight: 700;
          border: 1px solid #ffffff;
          border-radius: 20px;

          img {
            width: 8px;
          }
        }
      }

      & > .tokenList {
        flex: 1;
        display: flex;
        gap: 8px;
        overflow-x: scroll;
        position: relative;

        li {
          display: flex;
          align-items: center;
          gap: 10px;
          height: 40px;
          padding: 0 20px;
          background: rgba(255, 255, 255, 0.06);
          border-radius: 20px;
          cursor: pointer;

          img {
            width: 15px;
          }

          .textBox {
            display: flex;
            gap: 20px;
            font-size: 14px;
            cursor: pointer;

            p {
              white-space: nowrap;
            }
          }
        }

        .filter {
          width: 120px;
          background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 0.94)
          );
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
        }
      }
    }

    .contArea {
      flex: 1;
      display: flex;
      overflow: hidden;

      .chartCont {
        flex: 1;
        display: flex;
        border-radius: 12px;
        overflow: hidden;
        position: relative;

        .btnList {
          display: flex;
          align-items: center;
          gap: 8px;
          top: 24px;
          left: 20px;
          position: absolute;
          z-index: 1;

          li {
            &:hover {
              .info {
                display: inline-block;
              }
            }

            .utilBtn {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 32px;
              height: 32px;
              font-size: 16px;
              font-weight: 700;
              background: #32323d;
              border-radius: 6px;

              &:hover {
                background: #474751;
              }

              img {
                width: 23px;
              }
            }

            .info {
              display: none;
              height: 34px;
              padding: 0 12px;
              font-size: 12px;
              white-space: nowrap;
              line-height: 34px;
              background: rgba(255, 255, 255, 0.2);
              border-radius: 4px;
              backdrop-filter: blur(10px);
              -webkit-backdrop-filter: blur(10px);
              top: 44px;
              position: absolute;
            }

            .priceBox {
              display: flex;
              align-items: center;
              gap: 6px;
              margin: 0 0 0 4px;

              &.up {
                .price {
                  color: #3fb68b;
                }

                .percent {
                  background: #3fb68b;
                }
              }

              &.dn {
                .price {
                  color: #ff5353;
                }
              }

              .percent {
                padding: 3px 8px;
                font-size: 12px;
                background: #ff5353;
                border-radius: 6px;
              }
            }
          }
        }
      }

      .actionBox {
        display: flex;
        flex-direction: column;
        gap: 14px;
        min-width: 180px;
        width: 180px;
        padding: 20px;
        margin: 0 0 0 10px;
        background: #181c25;
        border-radius: 12px;

        .contBox {
          display: flex;
          flex-direction: column;
          gap: 6px;

          .key {
            display: flex;
            align-items: center;
            gap: 4px;
            font-size: 12px;
            color: rgba(255, 255, 255, 0.4);

            .infoBtn {
              position: relative;

              &:hover {
                .hoverPopup {
                  display: block;
                }
              }

              img {
                width: 12px;
              }

              .hoverPopup {
                display: none;
                width: 210px;
                padding: 10px 12px;
                background: rgba(255, 255, 255, 0.2);
                border-radius: 4px;
                backdrop-filter: blur(40px);
                -webkit-backdrop-filter: blur(40px);
                top: 18px;
                right: 0;
                position: absolute;

                p {
                  color: #fff;
                }
              }
            }
          }

          .value {
            display: flex;
            align-items: center;
            gap: 4px;
            height: 48px;
            padding: 0 18px;
            font-size: 16px;
            border: 1px solid rgba(255, 255, 255, 0.4);
            border-radius: 8px;
            position: relative;

            input {
              flex: 1;
            }

            .contBtn {
              display: flex;
              align-items: center;
              width: 100%;
              height: 100%;

              p {
                flex: 1;
                text-align: start;
              }
            }

            img {
              width: 20px;
              height: 20px;
              object-fit: contain;
            }
          }
        }

        .btnBox {
          width: 100%;

          button {
            width: 100%;
            height: 48px;
            font-size: 16px;
            border: 1.2px solid;
            border-radius: 8px;
            position: relative;

            .defaultBox {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 20px;
            }

            .hoverBox {
              display: none;

              .hoverPopup {
                padding: 10px;
                font-size: 12px;
                color: #fff;
                white-space: nowrap;
                background: rgba(0, 0, 0, 0.4);
                border-radius: 4px;
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                position: fixed;
                transform: translate(-100%, 0);
              }
            }

            &:hover {
              .defaultBox {
                display: none;
              }

              .hoverBox {
                display: block;

                .percent {
                }

                .amount {
                  font-size: 12px;
                }
              }
            }

            &.highBtn {
              color: #3fb68b;
              border-color: #3fb68b;

              &:hover {
                background: rgba(63, 182, 139, 0.2);
                box-shadow: 0px 0px 10px rgba(63, 182, 139, 0.6);
              }
            }

            &.lowBtn {
              color: #ff5353;
              border-color: #ff5353;

              &:hover {
                background: rgba(255, 83, 83, 0.2);
                box-shadow: 0px 0px 10px rgba(255, 83, 83, 0.6);
              }
            }
          }
        }
      }

      & > .plusBtn {
        display: flex;
        align-items: flex-start;
        min-width: 20px;
        width: 20px;
        height: 20px;
        margin: 6px 0 0 10px;
        opacity: 0.6;

        img {
          height: 20px;
          transition: all 0.3s;
        }

        &.on {
          img {
            transform: rotate(45deg);
          }
        }
      }
    }
  }

  footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 14px;
    padding: 0 0 30px;

    button {
      img {
        height: 22px;
      }
    }
  }
`,Le=l.c`
0%{
  transform: rotate(0)
}
100%{
  transform: rotate(360deg)
}
`;var Fe=l.a`

  body{
    &::-webkit-scrollbar {
      display: none;
    }
  }

  *{
    padding:0;
    margin:0;
    font-family: "Oxygen", sans-serif;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
    border: none;
    user-select: none;
    -webkit-text-size-adjust: none;
    -moz-text-size-adjust: none;
    -ms-text-size-adjust: none;
  }
  
  body{

  }
  
  u{
    text-decoration: underline;
  }
  
  *:link,
  *:visited{
    color:unset;
  }

  *:disabled {
    cursor: not-allowed;
  }
  
  *::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  
  *:focus{
    outline:none;
  }
  
  input{
    min-width: 0;
    font-size: inherit;
    font-family: inherit;
    color: inherit;
    background: unset;
    outline: none;
    user-select: auto;

    &::placeholder{
      color:#D0D0D0;
    }
    
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  textarea{
    font-size: inherit;
    font-family: inherit;
    color: inherit;
    
    &::placeholder{
      color:#D0D0D0;
    }
  }

  label,
  summary{
    cursor: pointer;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  button{
    font-size: inherit;
    font-family: inherit;
    color: inherit;
    font-weight: inherit;
    background: none;
    cursor: pointer;
  }

  textarea{
    resize: none;
    user-select:auto;
  }

  &#BroadBox {
    background: #373737;
  }

  .nospace{
    width: 0;
    height: 0;
    position: absolute;
  }

  
  .posBox{
    position: relative;
  }
  
  
  //custom 
  
  .defaultPopup {
    background: rgba(255, 255, 255, 0.1);
    border: 1.4px solid rgba(255, 255, 255, 0.14);
    border-radius: 20px;
    backdrop-filter: blur(40px);
    -webkit-backdrop-filter: blur(40px);
    box-shadow: inset 0px 3px 3px rgba(255, 255, 255, 0.4),
      0px 10px 40px rgba(0, 0, 0, 0.2);
    top: 50%;
    left: 50%;
    position: fixed;
    transform: translate(-50%, -50%);
    z-index: 6;
  }

  .datePickerHeader{
    display: flex;
    align-items: center;
    gap: 20px;
    height: 34px;
    padding: 0 26px;

    p{
      flex:1;
      font-size: 16px;
      text-align: start;
    }

  }
  
  #CustomToast {
    padding: 0 22px;
  }

  button{
    .loader{
      display: none;
      margin: auto;
      animation: ${Le} 2s infinite linear;
    }

    &.loading{
      .common{
        display: none;
      }

      .loader{
        display: block;
      }
    }
  }
  
`,Pe=i.p+"static/media/B_auth.a398fa5c.svg";const Ue={email:"",emailAlarm:"",name:"",nameAlarm:"",phone:"",phoneLoc:"",phoneAlarm:"",pw:"",pwAlarm:"",referral:"",referralAlarm:""};function He(e){let{userData:t,setUserData:i,type:n}=e;const{t:s}=Object(m.a)();return Object(a.useEffect)((()=>{var e;t.email&&(e=t.email,!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e))?i({...t,emailAlarm:"\uc774\uba54\uc77c \ud615\uc2dd\uc774 \uc544\ub2d9\ub2c8\ub2e4."}):i({...t,emailAlarm:""})}),[t.email]),Object(a.useEffect)((()=>{var e;t.name&&(e=t.name,!/(?=.*[a-zA-Z\uac00-\ud7a3].*[a-zA-Z\uac00-\ud7a3])/.test(e))?i({...t,nameAlarm:"\uc774\ub984\uc740 \ub450\uae00\uc790 \uc774\uc0c1\uc774\uc5b4\uc57c \ud569\ub2c8\ub2e4."}):i({...t,nameAlarm:""})}),[t.name]),Object(a.useEffect)((()=>{var e;t.pw&&(e=t.pw,!/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-]).{8,15}/.test(e))?i({...t,pwAlarm:"\ube44\ubc00\ubc88\ud638\ub294 8\uc790 \uc774\uc0c1 15\uc790 \uc774\ud558\ub85c, \ub300\ubb38\uc790, \uc18c\ubb38\uc790, \uc22b\uc790, \ud2b9\uc218\ubb38\uc790\ub97c \uac01\uac01 \ucd5c\uc18c 1\uac1c\uc529 \ud3ec\ud568\ud574\uc57c \ud569\ub2c8\ub2e4"}):i({...t,pwAlarm:""})}),[t.pw]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(Me,{children:[Object(d.jsxs)("li",{children:[Object(d.jsx)("p",{className:"key",children:s("Email")}),Object(d.jsxs)("div",{className:"value",children:[Object(d.jsxs)("div",{className:`${t.emailAlarm&&"alarm"} inputBox`,children:[Object(d.jsx)("input",{type:"email",value:t.email,onChange:e=>i({...t,email:e.target.value}),placeholder:""}),t.email&&Object(d.jsx)("button",{className:"delBtn",onClick:()=>i({...t,email:""}),children:Object(d.jsx)("img",{src:Be,alt:""})})]}),t.emailAlarm&&Object(d.jsx)("p",{className:"alarm",children:s(t.emailAlarm)})]})]}),"signup"===n&&Object(d.jsxs)("li",{children:[Object(d.jsx)("p",{className:"key",children:s("Name")}),Object(d.jsxs)("div",{className:"value",children:[Object(d.jsx)("div",{className:`${t.nameAlarm&&"alarm"} inputBox`,children:Object(d.jsx)("input",{type:"name",value:t.name,onChange:e=>i({...t,name:e.target.value}),placeholder:""})}),t.nameAlarm&&Object(d.jsx)("p",{className:"alarm",children:s(t.nameAlarm)})]})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("p",{className:"key",children:s("Password")}),Object(d.jsxs)("div",{className:"value",children:[Object(d.jsx)("div",{className:`${t.pwAlarm&&"alarm"} inputBox`,children:Object(d.jsx)("input",{type:"password",value:t.pw,onChange:e=>i({...t,pw:e.target.value}),placeholder:""})}),t.pwAlarm&&Object(d.jsx)("p",{className:"alarm",children:s(t.pwAlarm)})]})]})]})})}const Me=l.b.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;

  li {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 14px;

    .key {
    }

    .value {
      display: flex;
      flex-direction: column;
      gap: 10px;

      .inputBox {
        display: flex;
        align-items: center;
        height: 44px;
        padding: 0 16px;
        border-radius: 8px;
        border: 1px solid #ddd;

        &:focus-within {
          border-color: #f7ab1f;
        }

        &.alarm {
          border-color: #f00;
        }

        input {
          flex: 1;
        }

        .delBtn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 16px;
          height: 16px;
          background: #ddd;
          border-radius: 50%;

          img {
            width: 8px;
          }
        }
      }

      p.alarm {
        font-size: 12px;
        color: #ff5353;
      }
    }
  }
`;function Xe(){const{t:e}=Object(m.a)(),t=Object(r.p)(),[i,n]=Object(a.useState)(Ue);function s(){let e={email:i.email,password:i.pw};console.log(e),V.a.post(`${Z.LOGIN}`,e).then((e=>{let{data:a}=e;console.log(a);let s=a.bearerToken.replace("Bearer ","");if(localStorage.setItem("token",s),t("/"),"TOKEN_CREATED"===a.message)return localStorage.setItem("token",a.result.tokenId),void t("/");"EMAIL-DOESNT-EXIST"!==a.message?"ACCESS-NOT-ALLOWED"!==a.message?"PHONE-NUMBER-DOESNT-EXIST"!==a.message?"INVALID-PASSWORD"===a.message&&n({...i,pwAlarm:"The password you have entered does not coincide"}):n({...i,phoneAlarm:"The account doesn't exist."}):n({...i,emailAlarm:"The account not allowed"}):n({...i,emailAlarm:"The account doesn't exist."})})).catch((e=>{console.error(e)}))}return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(Ge,{onKeyDown:function(e){"Enter"===e.key&&s()},children:Object(d.jsxs)("section",{className:"innerBox",children:[Object(d.jsxs)("article",{className:"contArea",children:[Object(d.jsxs)("div",{className:"titleBox",children:[Object(d.jsx)("strong",{className:"pgTitle",children:e("Welcome")}),Object(d.jsx)("p",{className:"explain",children:e("By creating an account you agree to our Terms and Conditions and Data Protection Guidelines.")})]}),Object(d.jsxs)("div",{className:"loginArc",children:[Object(d.jsx)("div",{className:"contBox",children:Object(d.jsx)(He,{userData:i,setUserData:n,type:"login"})}),Object(d.jsx)("div",{className:"btnCont",children:Object(d.jsx)("button",{className:"loginBtn",onClick:s,children:e("Login")})}),Object(d.jsx)("div",{className:"btnBox",children:Object(d.jsx)("button",{className:"signUpBtn",onClick:()=>t("/auth/signup"),children:e("Sign up with email")})})]})]}),Object(d.jsx)("article",{className:"bgArea",children:Object(d.jsx)("img",{src:Pe,alt:""})})]})})})}const Ge=l.b.main`
  display: flex;
  justify-content: center;
  padding: 70px 0;

  .innerBox {
    display: flex;
    gap: 118px;
    padding: 90px 0;

    .contArea {
      width: 440px;

      .titleBox {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 30px; /* 아래쪽 간격을 늘립니다 */

        .pgTitle {
          font-size: 28px;
        }
      }

      .btnBox {
        display: flex;
        flex-direction: column;
        gap: 24px;
        margin: 40px 0 0 0;

        .signUpBtn,
        .googleBtn {
          height: 60px;
          font-size: 18px;
          font-weight: 700;
          border-radius: 8px;

          &.signUpBtn {
            color: #fff;
            background: #000;
          }

          &.googleBtn {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 14px;
            border: 1px solid #e6e6e6;
          }
        }

        .or {
          font-size: 16px;
          text-align: center;
        }
      }

      .utilBox {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
        margin: 24px 0 0 0;
        font-size: 14px;

        .loginBox {
          display: flex;
          align-items: center;
        }

        button {
          font-size: 14px;
          color: #f7ab1f;
        }
      }
    }

    .bgArea {
      img {
        width: 394px;
      }
    }
  }

  .cpRight {
    font-size: 12px;
    bottom: 30px;
    left: 50%;
    position: fixed;
    transform: translate(-50%);
  }

  .btnCont {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    margin: 40px 0 0 0;

    button {
      width: 100%;
      height: 56px;
      font-size: 18px;
      border-radius: 8px;

      &.loginBtn {
        font-weight: 700;
        color: #fff;
        background: #2a2a2a;
      }

      &.googleBtn {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 14px;
        font-weight: 700;
        border: 1px solid #e6e6e6;
      }
    }

    .btnBox {
      display: flex;
      flex-direction: column;
      gap: 18px;
    }

    .or {
      font-size: 16px;
    }
  }
`;function Ye(){const{t:e}=Object(m.a)(),t=Object(r.p)(),[i,n]=Object(a.useState)(Ue);return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(Je,{children:Object(d.jsxs)("section",{className:"innerBox",children:[Object(d.jsxs)("div",{className:"titleBox",children:[Object(d.jsx)("strong",{className:"pgTitle",children:e("Create Account")}),Object(d.jsx)("p",{className:"explain",children:e("Register with your email")})]}),Object(d.jsx)("article",{className:"contArea",children:Object(d.jsxs)("div",{className:"loginArc",children:[Object(d.jsx)("div",{className:"contBox",children:Object(d.jsx)(He,{userData:i,setUserData:n,type:"signup"})}),Object(d.jsx)("div",{className:"btnBox",children:Object(d.jsx)("button",{className:"nextBtn",disabled:!i.email||!i.name||!i.pw||i.emailAlarm||i.nameAlarm||i.pwAlarm,onClick:function(){let a;a={email:i.email,name:i.name,password:i.pw},V.a.post(`${Z.SIGNUP}`,a).then((i=>{let{data:a}=i;console.log(a),"ERR"===a.status&&De({type:"alarm_black",cont:e(a.message)}),a.message;let n=a.bearerToken.replace("Bearer ","");localStorage.setItem("token",n),t("/")})).catch((e=>console.error(e)))},children:e("Next")})}),Object(d.jsx)("div",{className:"utilBox",children:Object(d.jsx)("span",{className:"loginBox",children:Object(d.jsx)("button",{className:"loginBtn",onClick:()=>t("/auth/login"),children:e("LogIn")})})})]})})]})})})}const Je=l.b.main`
  display: flex;
  justify-content: center;
  padding: 70px 0;

  .innerBox {
    display: flex;
    flex-direction: column;
    gap: 44px;
    padding: 90px 0;

    .titleBox {
      display: flex;
      flex-direction: column;
      gap: 10px;

      .pgTitle {
        font-size: 28px;
      }
    }

    .contArea {
      display: flex;
      gap: 125px;

      .loginArc {
        width: 400px;

        .contBox {
          .categoryList {
            display: flex;
            margin: 0 0 40px 0;

            li {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 34px;
              color: #ddd;
              border: 3px solid transparent;
              border-bottom: unset;

              &.on {
                color: inherit;
                border: solid transparent;
                border-width: 3px 3px 0 3px;
                background-image: linear-gradient(#fff, #fff),
                  linear-gradient(
                    180deg,
                    #000000 -12.12%,
                    rgba(0, 0, 0, 0) 131.82%
                  );
                border-radius: 8px 8px 0 0;
                background-origin: border-box;
                background-clip: content-box, border-box;
              }

              button {
                width: 100%;
                height: 100%;
                padding: 0 22px;
              }
            }
          }

          .referralDet {
            margin: 24px 0 0 0;

            &[open] {
              summary {
                img {
                  transform: rotate(180deg);
                }
              }
            }

            summary {
              display: flex;
              align-items: center;
              gap: 6px;
              font-size: 14px;

              img {
                width: 8px;
              }
            }

            .inputCont {
              display: flex;
              flex-direction: column;
              gap: 10px;
              margin: 8px 0 0 0;

              .inputBox {
                display: flex;
                align-items: center;
                height: 44px;
                padding: 0 16px;
                border-radius: 8px;
                border: 1px solid #ddd;

                &:focus-within {
                  border-color: #f7ab1f;
                }

                &.alarm {
                  border-color: #f00;
                }

                input {
                  flex: 1;
                }
              }

              p.alarm {
                font-size: 12px;
                color: #ff5353;
              }
            }
          }
        }

        .btnBox {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin: 40px 0 0 0;

          .termBox {
            display: flex;
            align-items: center;
            gap: 8px;

            .chkBtn {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 20px;
              height: 20px;
              border-radius: 4px;
              box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.3);

              &.on {
                img {
                  display: block;
                }
              }

              img {
                display: none;
                width: 14px;
              }
            }

            .agreeBox {
              display: flex;
              align-items: center;
              font-size: 14px;

              .termBtn {
                color: #f7ab1f;
              }
            }
          }

          .nextBtn {
            height: 56px;
            font-size: 18px;
            font-weight: 700;
            color: #fff;
            background: #2a2a2a;
            border-radius: 8px;
          }
        }

        .utilBox {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          margin: 24px 0 0 0;
          font-size: 14px;

          .loginBox {
            display: flex;
            align-items: center;
          }

          button {
            font-size: 14px;
            color: #f7ab1f;
          }
        }
      }

      .qrArea {
        display: flex;
        flex-direction: column;
        gap: 40px;
        width: 240px;

        .qrBox {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 240px;
          height: 240px;
          padding: 10px;
          border-radius: 14px;
          box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.14);
        }

        .textBox {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;

          .title {
            font-size: 16px;
          }

          .explain {
            font-size: 14px;
            color: #888;
            text-align: center;
          }
        }
      }
    }
  }

  .cpRight {
    font-size: 12px;
    bottom: 30px;
    left: 50%;
    position: fixed;
    transform: translate(-50%);
  }
`;function qe(){const{t:e}=Object(m.a)(),t=Object(r.p)(),[i,n]=Object(a.useState)(Ue);function s(){let e={email:i.email,password:i.pw};console.log(e),V.a.post(`${Z.LOGIN}`,e).then((e=>{let{data:a}=e;console.log(a);let s=a.bearerToken.replace("Bearer ","");if(localStorage.setItem("token",s),t("/"),"TOKEN_CREATED"===a.message)return localStorage.setItem("token",a.result.tokenId),void t("/");"EMAIL-DOESNT-EXIST"!==a.message?"ACCESS-NOT-ALLOWED"!==a.message?"PHONE-NUMBER-DOESNT-EXIST"!==a.message?"INVALID-PASSWORD"===a.message&&n({...i,pwAlarm:"The password you have entered does not coincide"}):n({...i,phoneAlarm:"The account doesn't exist."}):n({...i,emailAlarm:"The account not allowed"}):n({...i,emailAlarm:"The account doesn't exist."})})).catch((e=>{console.error(e)}))}return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(Ve,{onKeyDown:function(e){"Enter"===e.key&&s()},children:Object(d.jsxs)("section",{className:"innerBox",children:[Object(d.jsx)("div",{className:"titleBox",children:Object(d.jsx)("strong",{className:"pgTitle",children:e("Login")})}),Object(d.jsx)("article",{className:"contArea",children:Object(d.jsxs)("div",{className:"loginArc",children:[Object(d.jsx)("div",{className:"contBox",children:Object(d.jsx)(He,{userData:i,setUserData:n,type:"login"})}),Object(d.jsx)("div",{className:"btnCont",children:Object(d.jsx)("button",{className:"loginBtn",onClick:s,children:e("Login")})}),Object(d.jsx)("div",{className:"btnBox",children:Object(d.jsx)("button",{className:"signUpBtn",onClick:()=>t("/auth/signup"),children:e("Sign up with email")})}),Object(d.jsx)("div",{className:"utilBox",children:Object(d.jsx)("button",{className:"signupBtn",onClick:()=>t("/auth/signup"),children:e("Register now")})})]})})]})})})}const Ve=l.b.main`
  display: flex;
  justify-content: center;
  padding: 70px 0;

  .innerBox {
    display: flex;
    flex-direction: column;
    gap: 44px;
    padding: 90px 0;

    .titleBox {
      display: flex;
      flex-direction: column;
      gap: 10px;

      .pgTitle {
        font-size: 28px;
      }
    }

    .contArea {
      display: flex;
      gap: 125px;

      .loginArc {
        width: 400px;

        .contBox {
          .categoryList {
            display: flex;
            margin: 0 0 40px 0;

            li {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 34px;
              color: #ddd;
              border: 3px solid transparent;
              border-bottom: unset;

              &.on {
                color: inherit;
                border: solid transparent;
                border-width: 3px 3px 0 3px;
                background-image: linear-gradient(#fff, #fff),
                  linear-gradient(
                    180deg,
                    #000000 -12.12%,
                    rgba(0, 0, 0, 0) 131.82%
                  );
                border-radius: 8px 8px 0 0;
                background-origin: border-box;
                background-clip: content-box, border-box;
              }

              button {
                width: 100%;
                height: 100%;
                padding: 0 22px;
              }
            }
          }
        }

        .btnCont {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          margin: 40px 0 0 0;

          button {
            width: 100%;
            height: 56px;
            font-size: 18px;
            border-radius: 8px;

            &.loginBtn {
              font-weight: 700;
              color: #fff;
              background: #2a2a2a;
            }
          }

          .btnBox {
            display: flex;
            flex-direction: column;
            gap: 18px;
          }

          .or {
            font-size: 16px;
          }
        }

        .utilBox {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          margin: 24px 0 0 0;
          font-size: 14px;

          button {
            color: #f7ab1f;
          }
        }
      }

      .qrArea {
        display: flex;
        flex-direction: column;
        gap: 40px;
        width: 240px;

        .qrBox {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 240px;
          height: 240px;
          padding: 10px;
          border-radius: 14px;
          box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.14);
        }

        .textBox {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;

          .title {
            font-size: 16px;
          }

          .explain {
            font-size: 14px;
            color: #888;
            text-align: center;
          }
        }
      }
    }
  }

  .cpRight {
    font-size: 12px;
    bottom: 30px;
    left: 50%;
    position: fixed;
    transform: translate(-50%);
  }

  .btnBox {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin: 40px 0 0 0;

    .signUpBtn,
    .googleBtn {
      height: 60px;
      font-size: 18px;
      font-weight: 700;
      border-radius: 8px;

      &.signUpBtn {
        color: #fff;
        background: #000;
      }

      &.googleBtn {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 14px;
        border: 1px solid #e6e6e6;
      }
    }

    .or {
      font-size: 16px;
      text-align: center;
    }
  }
`;function We(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(Ee,{white:!0}),Object(d.jsxs)(r.d,{children:[Object(d.jsx)(r.b,{path:"/",element:Object(d.jsx)(Xe,{})}),Object(d.jsx)(r.b,{path:"/login",element:Object(d.jsx)(qe,{})}),Object(d.jsx)(r.b,{path:"/signup",element:Object(d.jsx)(Ye,{})})]})]})}var Ke=i.p+"static/media/B_lending1.29ee88ed.png",Ze=i.p+"static/media/B_lending2.6869336d.png",_e=i.p+"static/media/I_2.d170d8eb.png",$e=i.p+"static/media/I_3.8b57f1e3.png",et=i.p+"static/media/I_5.907008fe.png";function tt(){const{t:e}=Object(m.a)(),[t,i]=(Object(r.p)(),Object(a.useState)([])),[n,s]=Object(a.useState)([]),o={0:"data:image/png;base64,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",1:_e,2:$e,3:"data:image/png;base64,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",4:et};return Object(a.useEffect)((()=>{!async function(){let e=await V.a.get(`${Z.GET_TOP_RANKING}/5/BTCUSDT`).then((e=>{let{data:t}=e;return t}));console.log(e),s(e.rankingList)}()}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(Ee,{}),Object(d.jsxs)(st,{assetListLength:3,children:[Object(d.jsxs)("section",{className:"placeSec",children:[Object(d.jsx)("article",{className:"contArea",children:Object(d.jsxs)("div",{className:"textCont",children:[Object(d.jsxs)("strong",{className:"explain",children:[e("THE MOST"),Object(d.jsx)("br",{})," ",e("TRUSTED PLATFORM")]}),Object(d.jsx)("strong",{className:"do",children:e("Place Your Trades On Best Conditions")})]})}),Object(d.jsx)("img",{className:"bg",src:Ke,alt:""})]}),Object(d.jsxs)("section",{className:"rankingSec",children:[Object(d.jsx)("strong",{className:"title",children:"Ranking"}),Object(d.jsxs)("article",{className:"contArea",children:[Object(d.jsx)("span",{className:"filter"}),Object(d.jsx)("span",{className:"filter"}),Object(d.jsx)("ul",{className:"slideList assetList",children:n.map(((e,t)=>Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:"assetImgBox",children:Object(d.jsx)("img",{src:o[t],alt:""})}),Object(d.jsxs)("div",{className:"textBox",children:[Object(d.jsx)("strong",{className:"name",children:e.userEmail}),Object(d.jsx)("p",{className:"close",children:Number(e.yield).toLocaleString()})]})]},t)))})]})]}),Object(d.jsx)("section",{className:"featureSec",children:Object(d.jsx)("article",{className:"windowArea",children:Object(d.jsxs)("div",{className:"window",children:[Object(d.jsxs)("span",{className:"floatBox",children:[Object(d.jsx)("img",{className:"float",src:"data:image/png;base64,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",alt:""}),Object(d.jsx)("img",{className:"float",src:"data:image/png;base64,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",alt:""}),Object(d.jsx)("img",{className:"float",src:"data:image/png;base64,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",alt:""}),Object(d.jsx)("img",{className:"float",src:"data:image/png;base64,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",alt:""})]}),Object(d.jsx)("div",{className:"imgBox",children:Object(d.jsx)("img",{src:Ze,alt:""})})]})})})]})]})}const it=l.c`
  0%{
    transform: translate(100%)
  }
  100%{
    transform: translate(-100%)
  }
`,at=l.c`
  0%{
    transform: translate(0%)
  }
  100%{
    transform: translate(-200%)
  }
`,nt=l.c`
  0%{
    transform: translate(0)
  }
  100%{
    transform: translate(-8px, -20px)
  }
`,st=l.b.main`
  height: 100vh;
  padding: 60px 0 0;
  color: #fff;
  background: #0a0e17;
  overflow-y: scroll;

  .placeSec {
    width: 1120px;
    padding: 176px 0 210px 0;
    margin: 0 auto;
    position: relative;

    .contArea {
      display: flex;
      flex-direction: column;
      gap: 30px;

      .textCont {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 14px;

        .explain {
          display: inline-block;
          font-size: 64px;
          font-weight: 700;
          font-family: 'Noto Sans JP';
          background: linear-gradient(
            96deg,
            #ffffff 40.65%,
            rgba(255, 255, 255, 0) 127.33%
          );
          color: transparent;
          -webkit-background-clip: text;
        }

        .do {
          font-size: 30px;
          font-family: 'Noto Sans JP';
          background: linear-gradient(
            96deg,
            #ffffff 40.65%,
            rgba(255, 255, 255, 0) 127.33%
          );
          color: transparent;
          -webkit-background-clip: text;
        }
      }

      .tradeBtn {
        width: 180px;
        height: 50px;
        font-size: 20px;
        font-weight: 700;
        background: rgba(235, 235, 235, 0.2);
        border: 1.6px solid #fbfbfb;
        box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.25);
        border-radius: 30px;

        &:hover {
          color: #0a0e17;
          background: #fff;
        }
      }
    }

    .bg {
      width: 740px;
      right: -18%;
      top: 50%;
      position: absolute;
      transform: translate(0, -50%);
    }
  }

  .rankingSec {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 1180px;
    margin: 0 auto;
    overflow: hidden;

    .title {
      font-size: 20px;
    }

    .contArea {
      display: flex;
      position: relative;

      .filter {
        width: 120px;
        top: 0;
        bottom: 0;
        position: absolute;
        z-index: 1;

        &:nth-of-type(1) {
          left: 0;
          background: linear-gradient(to left, rgba(0, 0, 0, 0), #0a0e17);
        }

        &:nth-of-type(2) {
          right: 0;
          background: linear-gradient(to right, rgba(0, 0, 0, 0), #0a0e17);
        }
      }

      .slideList {
        display: flex;
        gap: 20px;
        padding: 0 10px;

        &:nth-of-type(1) {
          animation: ${it} ${e=>4*e.assetListLength||40}s
            ${e=>-2*e.assetListLength||20}s infinite linear;
        }

        &:nth-of-type(2) {
          animation: ${at} ${e=>4*e.assetListLength||40}s
            infinite linear;
        }

        li {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 12px;
          min-width: 280px;
          width: 280px;
          height: 140px;
          color: #000;
          background: #fafafc;
          border-radius: 12px;

          .assetImgBox {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;

            img {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
          }

          .textBox {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4px;

            .name {
            }

            .close {
              font-size: 12px;
              opacity: 1;
            }

            .change {
              &.up {
                color: #3fb68b;
              }

              &.dn {
                color: #ff5353;
              }
            }
          }
        }
      }

      .btnList {
        display: flex;
        align-items: center;
        gap: 4px;
        margin: 0 auto;

        button {
          width: 8px;
          height: 8px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;

          &.on {
            width: 30px;
            background: #fff;
            border-radius: 10px;
          }
        }
      }
    }
  }

  .featureSec {
    display: flex;
    flex-direction: column;
    gap: 36px;

    .windowArea {
      display: flex;
      justify-content: center;
      padding: 220px 0;

      .window {
        width: 1160px;
        color: inherit;
        border: 10px solid transparent;
        background-image: linear-gradient(
          180deg,
          rgba(255, 255, 255, 0.6) -41.6%,
          rgba(255, 255, 255, 0) 118.76%
        );
        border-radius: 20px;
        background-origin: border-box;
        background-clip: content-box, border-box;
        position: relative;

        .floatBox {
          .float {
            position: absolute;
            animation: ${nt} 2s infinite alternate
              cubic-bezier(0.6, 0.03, 0.6, 0.91);

            &:nth-of-type(1) {
              top: 474px;
              left: -152px;
            }

            &:nth-of-type(2) {
              top: -66px;
              left: 232px;
            }

            &:nth-of-type(3) {
              top: 54px;
              right: -86px;
            }

            &:nth-of-type(4) {
              top: 256px;
              right: -188px;
            }
          }
        }

        .imgBox {
          margin: 10px;
          border-radius: 20px;
          overflow: hidden;

          img {
            width: 100%;
            object-fit: cover;
          }
        }
      }
    }

    .featureList {
      display: flex;
      justify-content: center;
      gap: 30px;
      padding: 60px 0 0 0;

      li {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 460px;
        height: 264px;
        padding: 0 80px;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 20px;
        position: relative;

        &:nth-of-type(1) {
          &:hover {
            .shadowBox {
              .shadow {
                box-shadow: 0px 30px 60px rgba(251, 246, 40, 0.4);
              }
            }
          }

          .shadowBox {
            .shadow {
              box-shadow: 0px 30px 60px rgba(251, 246, 40, 0.2);
            }
          }

          .iconBox {
            background: radial-gradient(
              171.41% 92.71% at 50% 0%,
              rgba(251, 246, 40, 0.3) 0%,
              rgba(251, 246, 40, 0) 100%
            );

            .borderBox {
              border-color: rgba(251, 246, 40, 0.2);
            }
          }
        }

        &:nth-of-type(2) {
          &:hover {
            .shadowBox {
              .shadow {
                box-shadow: 0px 30px 60px rgba(247, 65, 207, 0.4);
              }
            }
          }

          .shadowBox {
            .shadow {
              box-shadow: 0px 30px 60px rgba(247, 65, 207, 0.2);
            }
          }

          .iconBox {
            background: radial-gradient(
              171.41% 92.71% at 50% 0%,
              rgba(247, 65, 207, 0.3) 0%,
              rgba(247, 65, 207, 0) 100%
            );

            .borderBox {
              border-color: rgba(247, 65, 207, 0.2);
            }
          }
        }

        &:nth-of-type(3) {
          &:hover {
            .shadowBox {
              .shadow {
                box-shadow: 0px 30px 60px rgba(247, 171, 31, 0.4);
              }
            }
          }

          .shadowBox {
            .shadow {
              box-shadow: 0px 30px 60px rgba(247, 171, 31, 0.2);
            }
          }

          .iconBox {
            background: radial-gradient(
              171.41% 92.71% at 50% 0%,
              rgba(247, 171, 31, 0.3) 0%,
              rgba(247, 171, 31, 0) 100%
            );

            .borderBox {
              border-color: rgba(247, 171, 31, 0.2);
            }
          }
        }

        .shadowBox {
          display: flex;
          justify-content: center;
          width: 100%;
          height: 100%;
          position: absolute;
          overflow: hidden;

          .shadow {
            width: 270px;
            height: 120px;

            top: -120px;
            position: absolute;
          }
        }

        .iconBox {
          width: 96px;
          height: 96px;
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-radius: 24px;
          top: -60px;
          position: absolute;

          .borderBox {
            display: flex;
            justify-content: center;
            align-items: center;
            width: inherit;
            height: inherit;
            border: 3px solid;
            border-radius: inherit;
            top: -3px;
            left: -3px;
            position: absolute;
          }
        }

        p {
          font-size: 22px;
          color: rgba(255, 255, 255, 0.7);
          text-align: center;
        }
      }
    }
  }
`;function ot(){const e=Object(r.n)();return Object(a.useEffect)((()=>{window.scrollTo(0,0),V.a.defaults.headers.Authorization=localStorage.getItem("token")}),[e]),Object(d.jsx)(d.Fragment,{})}function rt(e){let{list:t,baseUrl:i}=e;const{t:a}=Object(m.a)(),n=Object(r.p)(),s=Object(r.n)();return Object(d.jsx)(lt,{children:Object(d.jsx)("ul",{className:"navList",children:t.map(((e,t)=>Object(d.jsxs)("li",{className:`${-1!==s.pathname.indexOf(String(e.url).toLocaleLowerCase())&&"on"}`,onClick:()=>n(`/${i}/${e.url}`),children:[e.icon&&Object(d.jsx)("span",{className:"iconBox",children:Object(d.jsx)("img",{src:e.icon,alt:""})}),Object(d.jsx)("p",{children:a(e.key)})]},t)))})})}const lt=l.b.aside`
  width: 100%;
  min-width: 200px;
  max-width: 348px;
  padding: 130px 14px 14px 14px;
  border-right: 1px solid rgba(255, 255, 255, 0.2);

  .navList {
    li {
      display: flex;
      align-items: center;
      gap: 8px;
      height: 40px;
      padding: 0 16px;
      font-size: 14px;
      border-radius: 4px;
      cursor: pointer;

      &.on {
        background: rgba(255, 255, 255, 0.1);

        .iconBox {
          img {
            opacity: 1;
          }
        }
      }

      .iconBox {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 22px;
        height: 22px;
        padding: 4px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.1);

        img {
          width: 100%;
          opacity: 0.4;
        }
      }
    }
  }
`;var ct=i.p+"static/media/I_personWhite.6a7765ef.svg",At=(i.p,i.p,i.p+"static/media/I_historyWhite.0878779d.svg");const pt=[{icon:ct,key:"My Profile",url:"prof"},{icon:At,key:"Trading History",url:"history"}],dt=["Follower","Following"],xt=["No","Follower Account","Crypto","Amount","Max Percent","Date of subscription","Follow Period"],bt=["No","Following Account","Crypto","Amount","Max Percent","Date of subscription","Follow Period"];new Date,new Date;var gt=i.p+"static/media/I_ltArwWhite.e6bba942.svg",ft=i.p+"static/media/I_rtArwWhite.ab4c42df.svg";function ht(){const{t:e}=Object(m.a)(),[t,i]=Object(a.useState)(1),[n,s]=Object(a.useState)([]),[o,r]=Object(a.useState)(10);return console.log(o),Object(a.useEffect)((()=>{!function(){const e=localStorage.getItem("token");e?V.a.get(`${Z.GET_MY_FOLLOWERS}/0/10`,{headers:{Authorization:`Bearer ${e}`}}).then((e=>{let{data:t}=e;console.log(t),console.log(t.subscriptions),console.log(t.totalElements),s(t.subscriptions),r(t.totalElements)})).catch(console.error):console.error("No token found")}()}),[t]),Object(d.jsxs)(jt,{children:[Object(d.jsxs)("div",{className:"listBox",children:[Object(d.jsx)("ul",{className:"listHeader",children:xt.map(((t,i)=>Object(d.jsx)("li",{children:e(t)},i)))}),Object(d.jsx)("ul",{className:"list",children:Object(d.jsx)("ul",{className:"list",children:n.map(((e,i)=>Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{children:Object(d.jsx)("p",{children:String(i+1+10*(t-1)).padStart(2,"0")})}),Object(d.jsx)("span",{children:Object(d.jsx)("p",{children:e.followingEmail})}),Object(d.jsx)("span",{children:Object(d.jsx)("p",{children:`${e.cryptoSymbol}`})}),Object(d.jsx)("span",{children:Object(d.jsx)("p",{children:`${e.cryptoAmount}`})}),Object(d.jsx)("span",{children:Object(d.jsx)("p",{children:"5%"})}),Object(d.jsx)("span",{children:Object(d.jsx)("p",{children:$()(e.createdAt).format("YYYY-MM-DD")})}),Object(d.jsx)("span",{children:Object(d.jsx)("p",{children:"1 month"})})]},i)))})})]}),Object(d.jsxs)("div",{className:"pageBox",children:[Object(d.jsx)("button",{className:"arwBtn",disabled:t<=1,onClick:function(){i(t-1)},children:Object(d.jsx)("img",{src:gt,alt:""})}),Object(d.jsx)("ul",{className:"pageList",children:new Array(Math.ceil(o/10)).fill("").map(((e,a)=>a>t-6&&a<t+4&&Object(d.jsxs)("li",{className:`${a+1===t&&"on"}`,onClick:()=>i(a+1),children:[Object(d.jsx)("strong",{children:a+1}),Object(d.jsx)("span",{className:"onBar"})]},a)))}),Object(d.jsx)("button",{className:"arwBtn",disabled:t>=Math.ceil(o/10),onClick:function(){i(t+1)},children:Object(d.jsx)("img",{src:ft,alt:""})})]})]})}const jt=l.b.div`
  padding: 0 0 20px;

  .listBox {
    border: 1px solid #3b3e45;
    border-radius: 14px;
    width: 100%; // 박스를 가득 채우도록 설정
    overflow-x: auto;

    .listHeader {
      display: flex;
      align-items: center;
      height: 46px;
      width: 100%; /* 전체 너비 채우기 */
      flex: 1; // 가로 공간을 균등하게 나누기

      color: rgba(255, 255, 255, 0.6);
      li {
        flex: 1; /* 항목이 가로 공간을 균등하게 나누도록 설정 */
        text-align: center; /* 중앙 정렬 */
        padding: 0; /* 패딩 없애기 */
      }
    }

    .list {
      display: flex;
      flex-direction: column;

      li {
        display: flex;

        span {
          flex: 1; // 가로 공간을 균등하게 나누기
          height: 60px;
          border-top: 1px solid #3b3e45;

          .price {
            color: #3fb68b;
          }
        }
      }
    }

    .listHeader li,
    .list li span {
      display: flex;
      align-items: center;
      font-size: 14px;

      p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      &:first-of-type {
        padding: 0 0 0 20px;
      }

      &:last-of-type {
        padding: 0 20px 0 0;
      }

      &:nth-of-type(1) {
        width: 126px;
        min-width: 126px;
      }

      &:nth-of-type(2) {
        width: 260px;
        min-width: 260px;
      }

      &:nth-of-type(3) {
        width: 172px;
        min-width: 172px;
      }

      &:nth-of-type(4) {
        width: 212px;
        min-width: 212px;
      }

      &:nth-of-type(5) {
        width: 148px;
        min-width: 148px;
      }

      &:nth-of-type(6) {
        width: 202px;
        min-width: 202px;
      }

      &:nth-of-type(7) {
        width: 170px;
        min-width: 170px;
      }
    }
  }

  .pageBox {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 30px 0 0 0;

    .arwBtn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      border: 2px solid #fff;
      border-radius: 50%;

      &:disabled {
        opacity: 0.2;
      }
    }

    .pageList {
      display: flex;
      align-items: center;

      li {
        display: flex;
        justify-content: center;
        padding: 0 5px;
        font-size: 18px;
        position: relative;
        cursor: pointer;

        &.on {
          .onBar {
            background: #f7ab1f;
          }
        }

        .onBar {
          width: 100%;
          height: 6px;
          border-radius: 4px;
          bottom: -6px;
          position: absolute;
        }
      }
    }
  }
`;function ut(){const{t:e}=Object(m.a)(),[t,i]=Object(a.useState)(1),[n,s]=Object(a.useState)([]),[o,r]=Object(a.useState)(0);return Object(a.useEffect)((()=>{!function(){const e=localStorage.getItem("token");e?V.a.get(`${Z.GET_MY_FOLLOWERWINGS}/0/10`,{headers:{Authorization:`Bearer ${e}`}}).then((e=>{let{data:t}=e;console.log(t),console.log(t.subscriptions),console.log(t.totalElements),s(t.subscriptions),r(t.totalElements)})).catch(console.error):console.error("No token found")}()}),[t]),Object(d.jsxs)(mt,{children:[Object(d.jsxs)("div",{className:"listBox",children:[Object(d.jsx)("ul",{className:"listHeader",children:bt.map(((t,i)=>Object(d.jsx)("li",{children:e(t)},i)))}),Object(d.jsx)("ul",{className:"list",children:n.map(((e,i)=>Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{children:Object(d.jsx)("p",{children:String(i+1+10*(t-1)).padStart(2,"0")})}),Object(d.jsx)("span",{children:Object(d.jsx)("p",{children:e.followingEmail})}),Object(d.jsx)("span",{children:Object(d.jsx)("p",{children:`${e.cryptoSymbol}`})}),Object(d.jsx)("span",{children:Object(d.jsx)("p",{children:`${e.cryptoAmount}`})}),Object(d.jsx)("span",{children:Object(d.jsx)("p",{children:"5%"})}),Object(d.jsx)("span",{children:Object(d.jsx)("p",{children:$()(e.createdAt).format("YYYY-MM-DD")})}),Object(d.jsx)("span",{children:Object(d.jsx)("p",{children:"1 month"})})]},i)))})]}),Object(d.jsxs)("div",{className:"pageBox",children:[Object(d.jsx)("button",{className:"arwBtn",disabled:t<=1,onClick:function(){i(t-1)},children:Object(d.jsx)("img",{src:gt,alt:""})}),Object(d.jsx)("ul",{className:"pageList",children:new Array(Math.ceil(o/10)).fill("").map(((e,a)=>a>t-6&&a<t+4&&Object(d.jsxs)("li",{className:`${a+1===t&&"on"}`,onClick:()=>i(a+1),children:[Object(d.jsx)("strong",{children:a+1}),Object(d.jsx)("span",{className:"onBar"})]},a)))}),Object(d.jsx)("button",{className:"arwBtn",disabled:t>=Math.ceil(o/10),onClick:function(){i(t+1)},children:Object(d.jsx)("img",{src:ft,alt:""})})]})]})}const mt=l.b.div`
  padding: 0 0 20px;

  .listBox {
    border: 1px solid #3b3e45;
    border-radius: 14px;
    width: 100%; // 박스를 가득 채우도록 설정
    overflow-x: auto;

    .listHeader {
      display: flex;
      align-items: center;
      height: 46px;
      width: 100%; /* 전체 너비 채우기 */
      flex: 1; // 가로 공간을 균등하게 나누기

      color: rgba(255, 255, 255, 0.6);
      li {
        flex: 1; /* 항목이 가로 공간을 균등하게 나누도록 설정 */
        text-align: center; /* 중앙 정렬 */
        padding: 0; /* 패딩 없애기 */
      }
    }

    .list {
      display: flex;
      flex-direction: column;

      li {
        display: flex;

        span {
          flex: 1; // 가로 공간을 균등하게 나누기
          height: 60px;
          border-top: 1px solid #3b3e45;

          .price {
            color: #3fb68b;
          }
        }
      }
    }

    .listHeader li,
    .list li span {
      display: flex;
      align-items: center;
      font-size: 14px;

      p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      &:first-of-type {
        padding: 0 0 0 20px;
      }

      &:last-of-type {
        padding: 0 20px 0 0;
      }

      &:nth-of-type(1) {
        width: 126px;
        min-width: 126px;
      }

      &:nth-of-type(2) {
        width: 260px;
        min-width: 260px;
      }

      &:nth-of-type(3) {
        width: 172px;
        min-width: 172px;
      }

      &:nth-of-type(4) {
        width: 212px;
        min-width: 212px;
      }

      &:nth-of-type(5) {
        width: 148px;
        min-width: 148px;
      }

      &:nth-of-type(6) {
        width: 202px;
        min-width: 202px;
      }

      &:nth-of-type(7) {
        width: 170px;
        min-width: 170px;
      }
    }
  }

  .pageBox {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 30px 0 0 0;

    .arwBtn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      border: 2px solid #fff;
      border-radius: 50%;

      &:disabled {
        opacity: 0.2;
      }
    }

    .pageList {
      display: flex;
      align-items: center;

      li {
        display: flex;
        justify-content: center;
        padding: 0 5px;
        font-size: 18px;
        position: relative;
        cursor: pointer;

        &.on {
          .onBar {
            background: #f7ab1f;
          }
        }

        .onBar {
          width: 100%;
          height: 6px;
          border-radius: 4px;
          bottom: -6px;
          position: absolute;
        }
      }
    }
  }
`;function Ot(e){let{userData:t}=e;const{t:i}=Object(m.a)(),[n,s]=Object(a.useState)(0);return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(wt,{children:Object(d.jsxs)("section",{className:"innerBox",children:[Object(d.jsxs)("article",{className:"titleArea",children:[Object(d.jsx)("strong",{className:"title",children:i("My Profile")}),Object(d.jsx)("p",{className:"explain",children:i("Please for your security, please fill out the following form")})]}),Object(d.jsxs)("article",{className:"listArea",children:[Object(d.jsx)("ul",{className:"categoryList",children:dt.map(((e,t)=>Object(d.jsx)("li",{className:`${n===t&&"on"}`,onClick:()=>s(t),children:i(e)},t)))}),0===n&&Object(d.jsx)(ht,{}),1===n&&Object(d.jsx)(ut,{})]})]})})})}const wt=l.b.main`
  flex: 1;
  height: 100%;
  padding: 70px 140px 0;
  overflow-y: scroll;

  @media (max-width: 1440px) {
    max-width: 1020px;
    padding: 70px 40px 70px 80px;
  }

  .innerBox {
    height: 100%;

    .titleArea {
      display: flex;
      flex-direction: column;
      gap: 8px;
      width: 618px;

      .title {
        font-size: 24px;
      }

      .explain {
        font-size: 14px;
        color: rgba(255, 255, 255, 0.6);
      }
    }

    .recommendArea {
      display: flex;
      flex-direction: column;
      gap: 14px;
      width: 900px;
      margin: 44px 0 0 0;
      font-size: 16px;

      .title {
        font-size: 16px;
      }

      .dataList {
        display: flex;
        flex-direction: column;
        gap: 14px;

        li {
          display: flex;
          align-items: center;
          gap: 40px;
          height: 56px;
          padding: 0 24px;
          font-size: 16px;
          background: rgba(255, 255, 255, 0.1);
          border: 1.4px solid rgba(255, 255, 255, 0.2);
          border-radius: 10px;

          &:focus-within {
            border-color: #fff;
          }

          .key {
            color: rgba(255, 255, 255, 0.4);
          }

          .value {
            flex: 1;
            display: flex;
            align-items: center;
            gap: 10px;

            img {
              width: 16px;
            }
          }
        }
      }
    }

    .listArea {
      display: flex;
      flex-direction: column;
      gap: 20px;
      max-width: 100%;
      margin: 80px 0 0 0;

      .categoryList {
        display: flex;
        gap: 14px;

        li {
          height: 32px;
          font-size: 16px;
          font-weight: 700;
          border-bottom: 4px solid transparent;
          opacity: 0.4;
          cursor: pointer;

          &.on {
            border-color: #fff;
            opacity: 1;
          }
        }
      }
    }
  }
`;const Bt=[{icon:i.p+"static/media/I_ranking.cdd2116d.svg",key:"Rank",url:"rank"}],yt=["LIVE","DEMO"],vt=["No","Type","Trade By","Trade User","Crypto Symbol","Amount","Price","Total Price","Transaction Date"],kt=["No","Name","Crypto Symbol","Profit","Start Asset","End Asset","Follow"];new Date,new Date,new Date,new Date,new Date,new Date,new Date,new Date,new Date,new Date,new Date,new Date,new Date,new Date,new Date,new Date,new Date,new Date;var Nt=i(101),It=i.n(Nt),Ct=(i(147),i.p+"static/media/I_calender.fb26d93e.svg");var Et=e=>{let{date:t,decreaseMonth:i,increaseMonth:a,prevMonthButtonDisabled:n,nextMonthButtonDisabled:s}=e;return Object(d.jsxs)("div",{className:"datePickerHeader",children:[Object(d.jsx)("p",{children:$()(t).format("YYYY\ub144 M\uc6d4")}),Object(d.jsx)("button",{onClick:i,disabled:n,children:Object(d.jsx)("img",{src:gt,alt:""})}),Object(d.jsx)("button",{onClick:a,disabled:s,children:Object(d.jsx)("img",{src:ft,alt:""})})]})};function St(){const{t:e}=Object(m.a)(),[t,i]=Object(a.useState)(yt[0]),[n,s]=Object(a.useState)(new Date),[o,r]=Object(a.useState)(new Date),[l,c]=Object(a.useState)(!1),[p,b]=Object(a.useState)(""),[g,f]=Object(a.useState)(1),[h,j]=Object(a.useState)(0),[u,O]=Object(a.useState)([]),[w,B]=Object(a.useState)({}),[y,v]=Object(a.useState)(!1),k=localStorage.getItem("token");function N(e){let t={};null!==e&&void 0!==e&&e.filter&&l&&(t.startDate=n,t.endDate=o),console.log(n),console.log(o),V.a.get(`${Z.GET_TRADE_HISTORY}/${w.id}/trades/pagenation/${8*(g-1)}/8`,{headers:{Authorization:`Bearer ${k}`},params:t}).then((e=>{let{data:t}=e;console.log(t.dataList),O(t.dataList)})).catch((e=>console.error(e)))}const I=Object(a.forwardRef)(((e,t)=>{let{value:i,onClick:a}=e;return Object(d.jsxs)("button",{className:`${l&&"on"} dateBtn`,onClick:a,ref:t,children:[Object(d.jsx)("img",{src:Ct,alt:""}),Object(d.jsx)("p",{children:i})]})}));return Object(a.useEffect)((()=>{V.a.get(`${Z.GET_CRYPTO_LIST}`).then((e=>{let{data:t}=e;console.log("data",t.symbolList[0]),B(t.symbolList[0])})).catch((e=>console.error(e)))}),[]),Object(a.useEffect)((()=>{w.id&&N()}),[g,t,w.id]),Object(d.jsx)(zt,{children:Object(d.jsxs)("section",{className:"innerBox",children:[Object(d.jsx)("article",{className:"tokenArea",children:Object(d.jsxs)("div",{className:"selectBox",children:[Object(d.jsxs)("button",{className:"selectBtn",onClick:()=>v(!0),children:[Object(d.jsx)("p",{children:w.symbol}),Object(d.jsx)("img",{src:A,alt:""})]}),y&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(ge,{off:v,setAssetInfo:B}),Object(d.jsx)(x,{off:v})]})]})}),Object(d.jsxs)("article",{className:"contArea",children:[Object(d.jsx)("div",{className:"filterBar",children:Object(d.jsxs)("div",{className:"filterBox",children:[Object(d.jsx)("span",{className:"dateBox filterOpt",children:Object(d.jsx)(It.a,{selected:n,onChange:function(e){const[t,i]=e;c(!0),s(t),r(i)},startDate:n,endDate:o,selectsRange:!0,renderCustomHeader:Et,customInput:Object(d.jsx)(I,{})})}),Object(d.jsx)("button",{className:"applyBtn",onClick:()=>N({filter:!0}),children:e("Apply")})]})}),Object(d.jsxs)("div",{className:"listBox",children:[Object(d.jsx)("ul",{className:"listHeader",children:vt.map(((t,i)=>Object(d.jsx)("li",{children:Object(d.jsx)("p",{children:e(t)})},i)))}),Object(d.jsx)("ul",{className:"list",children:u.map(((e,t)=>Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{children:Object(d.jsx)("p",{children:t+1})}),Object(d.jsx)("span",{children:Object(d.jsx)("p",{children:e.tradeType})}),Object(d.jsx)("span",{children:Object(d.jsx)("p",{children:e.tradeFor})}),Object(d.jsx)("span",{children:Object(d.jsxs)("p",{children:[" ","SELF"===e.tradeFor?"-":e.moneyFromUserEmail]})}),Object(d.jsx)("span",{children:Object(d.jsx)("p",{children:e.crypto.symbol})}),Object(d.jsx)("span",{children:Object(d.jsx)("p",{children:e.amount})}),Object(d.jsx)("span",{children:Object(d.jsx)("p",{children:e.price})}),Object(d.jsx)("span",{children:Object(d.jsx)("p",{children:e.totalPrice})}),Object(d.jsx)("span",{children:Object(d.jsx)("p",{children:$()(e.createdAt).format("YYYY-MM-DD HH:mm:ss")})})]},t)))})]}),Object(d.jsxs)("div",{className:"pageBox",children:[Object(d.jsx)("button",{className:"arwBtn",disabled:g<=1,onClick:function(){f(g-1)},children:Object(d.jsx)("img",{src:gt,alt:""})}),Object(d.jsx)("ul",{className:"pageList",children:new Array(Math.ceil(h/10)).fill("").map(((e,t)=>t>g-6&&t<g+4&&Object(d.jsxs)("li",{className:`${t+1===g&&"on"}`,onClick:()=>f(t+1),children:[Object(d.jsx)("strong",{children:t+1}),Object(d.jsx)("span",{className:"onBar"})]},t)))}),Object(d.jsx)("button",{className:"arwBtn",disabled:g>=Math.ceil(h/10),onClick:function(){f(g+1)},children:Object(d.jsx)("img",{src:ft,alt:""})})]})]})]})})}const zt=l.b.main`
  flex: 1;
  padding: 70px 140px;
  overflow-y: scroll;

  @media (max-width: 1440px) {
    max-width: 1020px;
    padding: 70px 40px 70px 80px;
  }

  .innerBox {
    display: flex;
    flex-direction: column;
    gap: 40px;
    height: 100%;
    .tokenArea {
      display: flex;
      align-items: center;
      gap: 30px;
      height: 60px;

      .selectBox {
        position: relative;

        .selectBtn {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          min-width: 154px;
          height: 40px;
          padding: 0 24px;
          font-size: 16px;
          font-weight: 700;
          border: 1px solid #ffffff;
          border-radius: 20px;

          img {
            width: 8px;
          }
        }
      }

      & > .tokenList {
        flex: 1;
        display: flex;
        gap: 8px;
        overflow-x: scroll;
        position: relative;

        li {
          display: flex;
          align-items: center;
          gap: 10px;
          height: 40px;
          padding: 0 20px;
          background: rgba(255, 255, 255, 0.06);
          border-radius: 20px;
          cursor: pointer;

          img {
            width: 15px;
          }

          .textBox {
            display: flex;
            gap: 20px;
            font-size: 14px;
            cursor: pointer;

            p {
              white-space: nowrap;
            }
          }
        }

        .filter {
          width: 120px;
          background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 0.94)
          );
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
        }
      }
    }

    .contArea {
      display: flex;
      flex-direction: column;
      gap: 20px;

      .filterBar {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .filterBox {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;

          .filterOpt {
            display: flex;
            align-items: center;
            width: 280px;
            height: 40px;
            padding: 0 22px;
            color: rgba(255, 255, 255, 0.4);
            border: 1px solid #3b3e45;
            border-radius: 20px;

            &:focus-within {
              border-color: #fff;
              color: #fff;
            }

            &.dateBox {
              .dateBtn {
                display: flex;
                align-items: center;
                gap: 8px;

                &.on {
                  color: #fff;
                }

                img {
                  width: 16px;
                  height: 17px;
                }
              }
            }

            &.searchBox {
              input {
                color: #fff;

                &::placeholder {
                  color: rgba(255, 255, 255, 0.4);
                }
              }
            }
          }

          .applyBtn {
            width: 120px;
            height: 40px;
            font-weight: 700;
            border: 1px solid #3b3e45;
            border-radius: 20px;

            &:focus-within {
              border-color: #fff;
            }
          }
        }

        .exportBtn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          border: 1px solid #3b3e45;
          border-radius: 50%;

          img {
            width: 14px;
          }
        }
      }

      .listBox {
        border: 1px solid #3b3e45;
        border-radius: 14px;
        overflow-x: scroll;

        &::-webkit-scrollbar {
          height: 8px;
        }

        &::-webkit-scrollbar-thumb {
          height: 8px;
          background: #888;
          border-radius: 10px;

          &:hover {
            background: #fff;
          }
        }

        .listHeader {
          display: flex;
          align-items: center;

          height: 46px;
          color: rgba(255, 255, 255, 0.6);
        }

        .list {
          display: flex;
          flex-direction: column;

          li {
            display: flex;

            span {
              height: 60px;
              border-top: 1px solid #3b3e45;

              &:nth-of-type(1) {
                gap: 14px;
              }

              .timeImg {
                height: 16px;
              }

              .arwImg {
                height: 14px;
              }

              .percent {
                color: rgba(255, 255, 255, 0.6);
              }
            }
          }
        }

        .listHeader li,
        .list li span {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 14px;
          flex-grow: 1; /* flex-grow로 각 span이 여유롭게 확장 */

          p {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }

          &:first-of-type {
            padding: 0 0 0 20px;
          }

          &:last-of-type {
            padding: 0 20px 0 0;
          }

          &:nth-of-type(1) {
            width: 60px;
            min-width: 60px;
          }

          &:nth-of-type(2) {
            width: 98px;
            min-width: 98px;
          }

          &:nth-of-type(3) {
            width: 72px;
            min-width: 72px;
          }

          &:nth-of-type(4) {
            width: 210px;
            min-width: 210px;
          }

          &:nth-of-type(5) {
            width: 162px;
            min-width: 162px;
          }

          &:nth-of-type(6) {
            width: 162px;
            min-width: 162px;
          }

          &:nth-of-type(7) {
            width: 94px;
            min-width: 94px;
          }

          &:nth-of-type(8) {
            width: 94px;
            min-width: 94px;
          }

          &:nth-of-type(9) {
            width: 102px;
            min-width: 102px;
          }

          &:nth-of-type(10) {
            flex: 1;
            width: 124px;
            min-width: 124px;
          }
        }
      }

      .pageBox {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;

        .arwBtn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          border: 2px solid #fff;
          border-radius: 50%;

          &:disabled {
            opacity: 0.2;
          }
        }

        .pageList {
          display: flex;
          align-items: center;

          li {
            display: flex;
            justify-content: center;
            padding: 0 5px;
            font-size: 18px;
            position: relative;
            cursor: pointer;

            &.on {
              .onBar {
                background: #f7ab1f;
              }
            }

            .onBar {
              width: 100%;
              height: 6px;
              border-radius: 4px;
              bottom: -6px;
              position: absolute;
            }
          }
        }
      }
    }
  }
`;function Qt(){const[e,t]=Object(a.useState)({}),i=localStorage.getItem("token");return Object(a.useEffect)((()=>{i&&(console.log("token",i),V.a.get(`${Z.GET_USER_INFO}`,{headers:{Authorization:`Bearer ${i}`}}).then((async e=>{let{data:i}=e;console.log(i),t(i)})).catch((e=>{console.error(e)})))}),[]),Object(d.jsxs)(Dt,{children:[Object(d.jsx)(Ee,{border:!0}),Object(d.jsx)(rt,{list:pt,baseUrl:"setting"}),Object(d.jsxs)(r.d,{children:[Object(d.jsx)(r.b,{path:"/prof",element:Object(d.jsx)(Ot,{userData:e})}),Object(d.jsx)(r.b,{path:"/history",element:Object(d.jsx)(St,{})})]})]})}const Dt=l.b.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  padding: 60px 0 0 0;
  color: #fff;
  background: #0a0e17;
  overflow: hidden;
`;var Rt=i.p+"static/media/I_follow.df8d1b39.svg";function Tt(e){let{off:t,reqFollowCheck:i,userEmail:n,assetInfo:s}=e;const{t:o}=Object(m.a)(),r=localStorage.getItem("token"),[l,c]=Object(a.useState)(0);return console.log(n),console.log(s),Object(d.jsxs)(Lt,{className:"defaultPopup",children:[Object(d.jsxs)("article",{className:"topArea",children:[Object(d.jsx)("span",{className:"blank"}),Object(d.jsx)("p",{className:"title",children:o("Confirmation")}),Object(d.jsx)("button",{className:"exitBtn",onClick:()=>t(),children:Object(d.jsx)("img",{src:me,alt:""})})]}),Object(d.jsxs)("article",{className:"contArea",children:[Object(d.jsx)("p",{className:"explain",children:o("Enter the amount you want to subscribe to")}),Object(d.jsx)("div",{className:"actionBox",children:Object(d.jsxs)("div",{className:"amountBox contBox",children:[Object(d.jsxs)("div",{className:"key",children:[Object(d.jsx)("p",{children:"Amount"}),Object(d.jsxs)("button",{className:"infoBtn",onClick:()=>{},children:[Object(d.jsx)("img",{src:ze,alt:""}),Object(d.jsx)("span",{className:"hoverPopup",children:Object(d.jsx)("p",{children:"Specify the exact amount of trade."})})]})]}),Object(d.jsxs)("div",{className:"value",children:[Object(d.jsx)("p",{className:"unit",children:"$"}),Object(d.jsx)("input",{value:l,onChange:e=>{const t=e.target.value.replace(/[^0-9]/g,"");c(t)}})]})]})}),Object(d.jsxs)("div",{className:"btnBox",children:[Object(d.jsx)("button",{className:"confirmBtn",onClick:function(){V.a.post(Z.REQUEST_FOLLOW,{followingUserEmail:n,cryptoId:s.id,cryptoAmount:l},{headers:{Authorization:`Bearer ${r}`}}).then((e=>{i(),t()})).catch((e=>{console.error(e)}))},children:o("Yes")}),Object(d.jsx)("button",{className:"confirmBtn",onClick:function(){t()},children:o("No")})]})]})]})}const Lt=l.b.section`
  width: 500px;
  color: #fff;

  .topArea {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    padding: 0 30px;

    .title {
      font-size: 18px;
    }

    .exitBtn {
      img {
        width: 16px;
        opacity: 0.4;
      }
    }
  }

  .contArea {
    display: flex;
    flex-direction: column;
    gap: 44px;
    padding: 30px 40px 44px;

    .explain {
      font-size: 14px;
      text-align: center;
    }

    .btnBox {
      display: flex;
      align-items: center;
      gap: 20px;

      button {
        flex: 1;
        height: 56px;
        font-size: 18px;
        font-weight: 700;
        border-radius: 10px;

        &.confirmBtn {
          color: #4e3200;
          background: linear-gradient(99.16deg, #604719 3.95%, #f7ab1f 52.09%);
        }

        &.cancelBtn {
          color: #f7ab1f;
          border: 2px solid #f7ab1f;
        }
      }
    }
  }
    .actionBox {
        display: flex;
        flex-direction: column;
        
        gap: 14px;
        min-width: 180px;
        width: 180px;
        padding: 20px;
        margin: 0 0 0 10px;
   
        border-radius: 12px;

        .contBox {
          display: flex;
          flex-direction: column;
          gap: 6px;

          .key {
            display: flex;
            align-items: center;
            gap: 4px;
            font-size: 12px;
            color: rgba(255, 255, 255, 0.4);

            .infoBtn {
              position: relative;

              &:hover {
                .hoverPopup {
                  display: block;
                }
              }

              img {
                width: 12px;
              }

              .hoverPopup {
                display: none;
                width: 210px;
                padding: 10px 12px;
                background: rgba(255, 255, 255, 0.2);
                border-radius: 4px;
                backdrop-filter: blur(40px);
                -webkit-backdrop-filter: blur(40px);
                top: 18px;
                right: 0;
                position: absolute;

                p {
                  color: #fff;
                }
              }
            }
          }

          .value {
            display: flex;
            align-items: center;
            gap: 4px;
            height: 48px;
            padding: 0 18px;
            font-size: 16px;
            border: 1px solid rgba(255, 255, 255, 0.4);
            border-radius: 8px;
            position: relative;

            input {
              flex: 1;
            }

            .contBtn {
              display: flex;
              align-items: center;
              width: 100%;
              height: 100%;

              p {
                flex: 1;
                text-align: start;
              }
            }

            img {
              width: 20px;
              height: 20px;
              object-fit: contain;
            }
          }
        }

        .btnBox {
          width: 100%;

          button {
            width: 100%;
            height: 48px;
            font-size: 16px;
            border: 1.2px solid;
            border-radius: 8px;
            position: relative;

            .defaultBox {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 20px;
            }

            .hoverBox {
              display: none;

              .hoverPopup {
                padding: 10px;
                font-size: 12px;
                color: #fff;
                white-space: nowrap;
                background: rgba(0, 0, 0, 0.4);
                border-radius: 4px;
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                position: fixed;
                transform: translate(-100%, 0);
              }
            }

            &:hover {
              .defaultBox {
                display: none;
              }

              .hoverBox {
                display: block;

                .percent {
                }

                .amount {
                  font-size: 12px;
                }
              }
            }

            &.highBtn {
              color: #3fb68b;
              border-color: #3fb68b;

              &:hover {
                background: rgba(63, 182, 139, 0.2);
                box-shadow: 0px 0px 10px rgba(63, 182, 139, 0.6);
              }
            }

            &.lowBtn {
              color: #ff5353;
              border-color: #ff5353;

              &:hover {
                background: rgba(255, 83, 83, 0.2);
                box-shadow: 0px 0px 10px rgba(255, 83, 83, 0.6);
              }
            }
          }
        }
      }

      & > .plusBtn {
        display: flex;
        align-items: flex-start;
        min-width: 20px;
        width: 20px;
        height: 20px;
        margin: 6px 0 0 10px;
        opacity: 0.6;

        img {
          height: 20px;
          transition: all 0.3s;
        }

        &.on {
          img {
            transform: rotate(45deg);
          }
        }
      }
    }
  }
`;function Ft(){const{t:e}=Object(m.a)(),[t,i]=(Object(r.p)(),Object(a.useState)(yt[0])),[n,s]=Object(a.useState)(new Date),[o,l]=Object(a.useState)(new Date),[c,p]=Object(a.useState)(!1),[b,g]=Object(a.useState)(1),[f,h]=Object(a.useState)(0),[j,u]=Object(a.useState)([]),[O,w]=Object(a.useState)({}),[B,y]=Object(a.useState)(!1),[v,k]=Object(a.useState)(!1),[N,I]=Object(a.useState)("");localStorage.getItem("token");return Object(a.useEffect)((()=>{V.a.get(`${Z.GET_CRYPTO_LIST}`).then((e=>{let{data:t}=e;console.log("data",t.symbolList[0]),w(t.symbolList[0])})).catch((e=>console.error(e)))}),[]),Object(a.useEffect)((()=>{O.symbol&&function(){let e={};const t=new Date,i=`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-01T00:00:00`,a=new Date(t.getFullYear(),t.getMonth()+1,0),n=`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")}T23:59:59`;e.startDate=i,e.endDate=n,V.a.get(`${Z.GET_RANKING}/${O.symbol}/${8*(b-1)}/8`,{params:e}).then((e=>{let{data:t}=e;console.log(t),u(t.rankingList)})).catch((e=>console.error(e)))}()}),[b,t,O.symbol]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(Pt,{children:Object(d.jsxs)("section",{className:"innerBox",children:[Object(d.jsxs)("article",{className:"titleArea",children:[Object(d.jsx)("strong",{className:"title",children:e("Ranking")}),Object(d.jsx)("p",{className:"explain",children:e("This is users\u2019 monthly ranking.")})]}),Object(d.jsx)("article",{className:"tokenArea",children:Object(d.jsxs)("div",{className:"selectBox",children:[Object(d.jsxs)("button",{className:"selectBtn",onClick:()=>y(!0),children:[Object(d.jsx)("p",{children:O.symbol}),Object(d.jsx)("img",{src:A,alt:""})]}),B&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(ge,{off:y,setAssetInfo:w}),Object(d.jsx)(x,{off:y})]})]})}),Object(d.jsxs)("article",{className:"contArea",children:[Object(d.jsxs)("div",{className:"listBox",children:[Object(d.jsx)("ul",{className:"listHeader",children:kt.map(((t,i)=>Object(d.jsx)("li",{children:Object(d.jsx)("p",{children:e(t)})},i)))}),Object(d.jsx)("ul",{className:"list",children:j.map(((t,i)=>Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{children:Object(d.jsx)("p",{children:i+1})}),Object(d.jsx)("span",{children:Object(d.jsx)("p",{children:t.userEmail})}),Object(d.jsx)("span",{children:Object(d.jsx)("p",{children:t.cryptoSymbol})}),Object(d.jsx)("span",{children:Object(d.jsxs)("p",{children:[" ",t.yield]})}),Object(d.jsx)("span",{children:Object(d.jsx)("p",{children:"100"})}),Object(d.jsx)("span",{children:Object(d.jsx)("p",{children:"200"})}),Object(d.jsx)("span",{children:Object(d.jsxs)("button",{className:"followBtn",onClick:()=>function(e){I(e),k(!0)}(t.userEmail),children:[Object(d.jsx)("img",{src:Rt,alt:""}),Object(d.jsx)("strong",{children:e("Follow")})]})})]},i)))})]}),Object(d.jsxs)("div",{className:"pageBox",children:[Object(d.jsx)("button",{className:"arwBtn",disabled:b<=1,onClick:function(){g(b-1)},children:Object(d.jsx)("img",{src:gt,alt:""})}),Object(d.jsx)("ul",{className:"pageList",children:new Array(Math.ceil(f/10)).fill("").map(((e,t)=>t>b-6&&t<b+4&&Object(d.jsxs)("li",{className:`${t+1===b&&"on"}`,onClick:()=>g(t+1),children:[Object(d.jsx)("strong",{children:t+1}),Object(d.jsx)("span",{className:"onBar"})]},t)))}),Object(d.jsx)("button",{className:"arwBtn",disabled:b>=Math.ceil(f/10),onClick:function(){g(b+1)},children:Object(d.jsx)("img",{src:ft,alt:""})})]})]})]})}),v&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(Tt,{off:k,reqFollowCheck:function(){window.location.reload()},userEmail:N,assetInfo:O}),Object(d.jsx)(x,{off:k})]})]})}const Pt=l.b.main`
  flex: 1;
  padding: 70px 140px;
  overflow-y: scroll;

  @media (max-width: 1440px) {
    max-width: 1020px;
    padding: 70px 40px 70px 80px;
  }

  .innerBox {
    display: flex;
    flex-direction: column;
    gap: 40px;
    height: 100%;

    .titleArea {
      display: flex;
      flex-direction: column;
      gap: 8px;
      width: 618px;

      .title {
        font-size: 24px;
      }

      .explain {
        font-size: 14px;
        color: rgba(255, 255, 255, 0.6);
      }
    }
    .tokenArea {
      display: flex;
      align-items: center;
      gap: 30px;
      height: 60px;

      .selectBox {
        position: relative;

        .selectBtn {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          min-width: 154px;
          height: 40px;
          padding: 0 24px;
          font-size: 16px;
          font-weight: 700;
          border: 1px solid #ffffff;
          border-radius: 20px;

          img {
            width: 8px;
          }
        }
      }

      & > .tokenList {
        flex: 1;
        display: flex;
        gap: 8px;
        overflow-x: scroll;
        position: relative;

        li {
          display: flex;
          align-items: center;
          gap: 10px;
          height: 40px;
          padding: 0 20px;
          background: rgba(255, 255, 255, 0.06);
          border-radius: 20px;
          cursor: pointer;

          img {
            width: 15px;
          }

          .textBox {
            display: flex;
            gap: 20px;
            font-size: 14px;
            cursor: pointer;

            p {
              white-space: nowrap;
            }
          }
        }

        .filter {
          width: 120px;
          background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 0.94)
          );
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
        }
      }
    }

    .contArea {
      display: flex;
      flex-direction: column;
      gap: 20px;

      .filterBar {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .filterBox {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;

          .filterOpt {
            display: flex;
            align-items: center;
            width: 280px;
            height: 40px;
            padding: 0 22px;
            color: rgba(255, 255, 255, 0.4);
            border: 1px solid #3b3e45;
            border-radius: 20px;

            &:focus-within {
              border-color: #fff;
              color: #fff;
            }

            &.dateBox {
              .dateBtn {
                display: flex;
                align-items: center;
                gap: 8px;

                &.on {
                  color: #fff;
                }

                img {
                  width: 16px;
                  height: 17px;
                }
              }
            }

            &.searchBox {
              input {
                color: #fff;

                &::placeholder {
                  color: rgba(255, 255, 255, 0.4);
                }
              }
            }
          }

          .applyBtn {
            width: 120px;
            height: 40px;
            font-weight: 700;
            border: 1px solid #3b3e45;
            border-radius: 20px;

            &:focus-within {
              border-color: #fff;
            }
          }
        }

        .exportBtn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          border: 1px solid #3b3e45;
          border-radius: 50%;

          img {
            width: 14px;
          }
        }
      }

      .listBox {
        border: 1px solid #3b3e45;
        border-radius: 14px;
        overflow-x: scroll;

        &::-webkit-scrollbar {
          height: 8px;
        }

        &::-webkit-scrollbar-thumb {
          height: 8px;
          background: #888;
          border-radius: 10px;

          &:hover {
            background: #fff;
          }
        }

        .listHeader {
          display: flex;
          align-items: center;

          height: 46px;
          color: rgba(255, 255, 255, 0.6);
        }

        .list {
          display: flex;
          flex-direction: column;

          li {
            display: flex;
            align-items: center; /* 내부 요소 수직 중앙 정렬 */
            height: 60px; /* li의 높이를 지정하여 정렬을 도와줌 */

            .followBtn {
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 8px;
              width: 100px;
              height: 50%;
              color: #2a2a2a;
              background: #f7ab1f;
              border-radius: 28px;

              img {
                height: 18px;
                vertical-align: middle; /* 이미지 수직 정렬 (필요 시) */
              }
            }

            span {
              height: 60px;
              border-top: 1px solid #3b3e45;

              &:nth-of-type(1) {
                gap: 14px;
              }

              .timeImg {
                height: 16px;
              }

              .arwImg {
                height: 14px;
              }

              .percent {
                color: rgba(255, 255, 255, 0.6);
              }
            }
          }
        }

        .listHeader li,
        .list li span {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 14px;
          flex-grow: 1; /* flex-grow로 각 span이 여유롭게 확장 */

          p {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }

          &:first-of-type {
            padding: 0 0 0 20px;
          }

          &:last-of-type {
            padding: 0 20px 0 0;
          }

          &:nth-of-type(1) {
            width: 60px;
            min-width: 60px;
          }

          &:nth-of-type(2) {
            width: 98px;
            min-width: 98px;
          }

          &:nth-of-type(3) {
            width: 72px;
            min-width: 72px;
          }

          &:nth-of-type(4) {
            width: 210px;
            min-width: 210px;
          }

          &:nth-of-type(5) {
            width: 162px;
            min-width: 162px;
          }

          &:nth-of-type(6) {
            width: 162px;
            min-width: 162px;
          }

          &:nth-of-type(7) {
            width: 94px;
            min-width: 94px;
          }

          &:nth-of-type(8) {
            width: 94px;
            min-width: 94px;
          }

          &:nth-of-type(9) {
            width: 102px;
            min-width: 102px;
          }

          &:nth-of-type(10) {
            flex: 1;
            width: 124px;
            min-width: 124px;
          }
        }
      }

      .pageBox {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;

        .arwBtn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          border: 2px solid #fff;
          border-radius: 50%;

          &:disabled {
            opacity: 0.2;
          }
        }

        .pageList {
          display: flex;
          align-items: center;

          li {
            display: flex;
            justify-content: center;
            padding: 0 5px;
            font-size: 18px;
            position: relative;
            cursor: pointer;

            &.on {
              .onBar {
                background: #f7ab1f;
              }
            }

            .onBar {
              width: 100%;
              height: 6px;
              border-radius: 4px;
              bottom: -6px;
              position: absolute;
            }
          }
        }
      }
    }
  }
`;function Ut(){return Object(d.jsxs)(Ht,{children:[Object(d.jsx)(Ee,{border:!0}),Object(d.jsx)(rt,{list:Bt,baseUrl:"ranking"}),Object(d.jsxs)(r.d,{children:[Object(d.jsx)(r.b,{path:"/",element:Object(d.jsx)(r.a,{to:"/ranking/rank",replace:!0})}),Object(d.jsx)(r.b,{path:"/rank",element:Object(d.jsx)(Ft,{})})]})]})}const Ht=l.b.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  padding: 60px 0 0 0;
  color: #fff;
  background: #0a0e17;
  overflow: hidden;
`;function Mt(e){let{off:t,reqDeposit:i}=e;const{t:a}=Object(m.a)();return Object(d.jsxs)(Xt,{className:"defaultPopup",children:[Object(d.jsxs)("article",{className:"topArea",children:[Object(d.jsx)("span",{className:"blank"}),Object(d.jsx)("p",{className:"title",children:a("Confirmation")}),Object(d.jsx)("button",{className:"exitBtn",onClick:()=>t(),children:Object(d.jsx)("img",{src:me,alt:""})})]}),Object(d.jsxs)("article",{className:"contArea",children:[Object(d.jsx)("p",{className:"explain",children:a("Successfully Deposit!")}),Object(d.jsx)("div",{className:"btnBox",children:Object(d.jsx)("button",{className:"confirmBtn",onClick:function(){i(),t()},children:a("Good!")})})]})]})}const Xt=l.b.section`
  width: 500px;
  color: #fff;

  .topArea {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    padding: 0 30px;

    .title {
      font-size: 18px;
    }

    .exitBtn {
      img {
        width: 16px;
        opacity: 0.4;
      }
    }
  }

  .contArea {
    display: flex;
    flex-direction: column;
    gap: 44px;
    padding: 30px 40px 44px;

    .explain {
      font-size: 14px;
      text-align: center;
    }

    .btnBox {
      display: flex;
      align-items: center;
      gap: 20px;

      button {
        flex: 1;
        height: 56px;
        font-size: 18px;
        font-weight: 700;
        border-radius: 10px;

        &.confirmBtn {
          color: #4e3200;
          background: linear-gradient(99.16deg, #604719 3.95%, #f7ab1f 52.09%);
        }

        &.cancelBtn {
          color: #f7ab1f;
          border: 2px solid #f7ab1f;
        }
      }
    }
  }
`;function Gt(){const{t:e}=Object(m.a)(),[t,i]=Object(a.useState)(""),[n,s]=Object(a.useState)(""),[o,r]=Object(a.useState)(!1),l=localStorage.getItem("token");function c(e){i((t=>(Number(t.replace(/,/g,""))+e).toLocaleString()))}return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(Yt,{children:[Object(d.jsxs)("article",{className:"deposit",children:[Object(d.jsxs)("div",{className:"key",children:[Object(d.jsx)("span",{className:"count",children:"1"}),Object(d.jsx)("strong",{className:"title",children:e("Deposit")})]}),Object(d.jsxs)("div",{className:"value",children:[Object(d.jsx)("ul",{className:"inputList",children:Object(d.jsxs)("li",{className:"amountBox",children:[Object(d.jsx)("p",{className:"key",children:e("Amount")}),Object(d.jsxs)("div",{className:"valueBox",children:[Object(d.jsx)("input",{type:"text",value:t,onChange:function(e){const t=e.target.value.replace(/,/g,"");i(Number(t).toLocaleString())},placeholder:""}),Object(d.jsx)("strong",{className:"unit",children:l.text})]}),Object(d.jsxs)("ul",{className:"optList",children:[Object(d.jsx)("button",{className:`${1e4===t&&"on"} optBtn`,onClick:()=>c(1e4),children:"10,000\u20a9"}),Object(d.jsx)("button",{className:`${5e4===t&&"on"} optBtn`,onClick:()=>c(5e4),children:"50,000\u20a9"}),Object(d.jsx)("button",{className:`${1e5===t&&"on"} optBtn`,onClick:()=>c(1e5),children:"100,000\u20a9"}),Object(d.jsx)("button",{className:`${5e5===t&&"on"} optBtn`,onClick:()=>c(5e5),children:"500,000\u20a9"})]})]})}),Object(d.jsx)("div",{className:"depositBox",children:Object(d.jsxs)("button",{className:`${"depositBtn"===n&&"loading"} depositBtn`,disabled:!t,onClick:function(){V.a.post(Z.DEPOSIT,{chargeAmount:t.replace(/,/g,"")},{headers:{Authorization:`Bearer ${l}`}}).then((e=>{let{data:t}=e;console.log(t),r(!0)})).catch((e=>console.error(e)))},children:[Object(d.jsx)("p",{className:"common",children:e("Deposit")}),Object(d.jsx)("img",{className:"loader",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMpSURBVHgBtVZLa1NBFD730TSxqQ9EbaoIrS5UFMWCQXThRhEVEREXrty4EboSdO9W8Cf4B9y50J1LBR+oxU2tYltFqUUXNprXffh9uWeSSYyNaZIPPs5kJvd855w7c+Y68n/YCG4GR4eGhvxqterAhrBVzBXA3+CK2lXhdFgf931/EjYVBEEIG4ARxKgVp1KpaqVSiXSe62XwhwbRleA6cArMqqM6EUDgOA7HFA0tsRrT6XRUKpUovKxzTfDaiO30PC8fx3EGFibmXAyhOGogAGvOkGWEtSgMQ2YaaSUkm82mkX21VbQ1w+3gUQjRgZ1ZCZyXpFy/NCu7GqPUpr9MJhMWi8UQgiEqEa0AmK+0ExwBT0PM02gpRDsHvmsRaQdfxUesQI0fitZKZZf0HLQyEHM0EJbjFfheH+wE/qesz/kqEKl1TcCu/nk3uB5irgZB+xxclO5B0YLJMpfLhZZoPcOT4DAnkaVgo8xg/EHWjvpGKRQKtc2krKU+Dm7QKLhZGN1H6R3MlFk56js2ghNqI138Jqsc3C7x17tnCbepkK+ckwHCxfvaSiEXUMEvMkD46Bg8N+wi/F2WAcPVzLhbPQw96T/OgovoOm9hr3gY5MEUSsvy8mg8kzZNtwfcB7dI0v72uygl247ZMMxwTPqHY2AONDfMAsv5CaKmrBSdlP7hkiQtzfANhWb13RkeB9PSO3aAR6S5kT+i4Dwy/GkJ8tI9Jb3jIpjTUobYHwuwT03zfmwJcree0OjWigvgdTCAkOmjd0UazfsreADcxGOCjDm/R5I2tyTd4Tx4S5ILWZAhzWfwpi1IzIJ5PRqcp83r+Lt0/iLjtp+GwLQ+ay539uXLklzCTYIlXTwkSZdnsvyo2YvxFMYTGPM/y9Yz7FL7wDPgbUk+vETFjOANcEashVYchPOrKGtWGpexb1lfg6Pltcbm4SMYX605YqzIHfCB7bxdK1vCQy9gD0uyY/kf+HLo2FGBNDgMutY6O5XoHL+BroEvW513+hDmmeT2HrMz1Uw8FffMWJJy3wMf/sthJ0EDvkcek12SXNi1UkpSWorwHT0BX3dy9Ae5S0ASw5giBQAAAABJRU5ErkJggg==",alt:""})]})})]})]}),Object(d.jsxs)("article",{className:"detailArea",children:[Object(d.jsxs)("div",{className:"key",children:[Object(d.jsx)("span",{className:"count",children:"2"}),Object(d.jsx)("strong",{className:"title",children:e("Confirm deposit details")})]}),Object(d.jsxs)("div",{className:"value",children:[Object(d.jsxs)("p",{className:"head",children:[e("Important")," :"]}),Object(d.jsxs)("ul",{className:"bodyList",children:[Object(d.jsx)("li",{children:e("Attention! Please note that the address the system gave you for this payment is unique and can only be used once. Each payment needs to be initiated anew.")}),Object(d.jsx)("li",{children:e("The funds will be credited as soon as we get 18 confirmations from the Polygon network.")}),Object(d.jsx)("li",{children:e("Coin deposits are monitored according to our AML program.")})]})]})]})]}),o&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(Mt,{off:r,reqDeposit:function(){window.location.reload()}}),Object(d.jsx)(x,{off:r})]})]})}const Yt=l.b.main`
  flex: 1;
  display: flex;
  gap: 100px;
  padding: 70px 140px;

  @media (max-width: 1440px) {
    max-width: 1020px;
    min-width: 1020px;
    padding: 70px 40px 70px 80px;
  }

  & > article {
    display: flex;
    flex-direction: column;
    gap: 40px;

    & > .key {
      display: flex;
      align-items: center;
      gap: 12px;

      .count {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
        font-size: 14px;
        color: #2a2a2a;
        border-radius: 50%;
        background: #f7ab1f;
      }

      .title {
        font-size: 24px;
      }
    }

    &.deposit {
      width: 454px;
      min-width: 392px;

      & > .value {
        display: flex;
        flex-direction: column;
        gap: 60px;

        .inputList {
          display: flex;
          flex-direction: column;
          gap: 20px;

          li {
            &.tokenBox {
              .selectBox {
                margin: 10px 0 0 0;
                position: relative;

                .selBtn {
                  display: flex;
                  align-items: center;
                  gap: 10px;
                  width: 100%;
                  height: 56px;
                  padding: 0 24px;
                  font-size: 20px;
                  font-weight: 700;
                  background: #22262e;
                  border-radius: 10px;
                  position: relative;
                  z-index: 7;

                  &.on {
                    .arw {
                      opacity: 1;
                      transform: rotate(180deg);
                    }
                  }

                  .token {
                    width: 38px;
                    aspect-ratio: 1;
                  }

                  .name {
                    text-align: start;
                    flex: 1;
                  }

                  .arw {
                    height: 8px;
                    opacity: 0.4;
                  }
                }
              }
            }

            &.paymentBox {
              .selectBox {
                margin: 10px 0 0 0;
                background: rgba(255, 255, 255, 0.1);
                border-radius: 10px;
                background: #22262e;
                position: relative;

                .selBtn {
                  display: flex;
                  align-items: center;
                  gap: 10px;
                  width: 100%;
                  height: 56px;
                  padding: 0 24px;
                  font-size: 20px;
                  font-weight: 700;

                  &.on {
                    .arw {
                      opacity: 1;
                      transform: rotate(180deg);
                    }
                  }

                  .name {
                    text-align: start;
                    flex: 1;
                  }

                  .arw {
                    height: 8px;
                    opacity: 0.4;
                  }
                }

                .selectPopup {
                  backdrop-filter: blur(20px);
                  -webkit-backdrop-filter: blur(20px);
                  top: unset;

                  li {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    gap: 10px;
                    height: 50px;
                    padding: 0 24px;
                    font-size: 18px;
                    font-weight: 700;
                    opacity: 0.4;
                    cursor: pointer;

                    &:hover {
                      opacity: 1;
                    }
                  }
                }
              }
            }

            &.amountBox {
              .optList {
                display: flex;
                gap: 12px;
                margin: 14px 0 0 0;
                font-size: 20px;
                overflow-x: scroll;

                .optBtn {
                  flex: 1;
                  height: 42px;
                  background: rgba(255, 255, 255, 0.1);
                  border-radius: 8px;
                  color: rgba(255, 255, 255, 0.6);
                  border: 1px solid rgba(255, 255, 255, 0.4);

                  &.on {
                    color: #fff;
                    border: 1px solid #fff;
                  }
                }
              }
            }

            .key {
              font-size: 16px;
            }

            .valueBox {
              display: flex;
              align-items: center;
              gap: 10px;
              height: 56px;
              padding: 0 24px;
              margin: 10px 0 0 0;
              font-size: 20px;
              font-weight: 700;
              background: rgba(255, 255, 255, 0.1);
              border-radius: 10px;
              border: 1.4px solid rgba(0, 0, 0, 0);
              cursor: pointer;
              position: relative;

              input {
                flex: 1;
                height: 100%;
              }

              &:focus-within {
                border-color: #f7ab1f;
              }
            }
          }
        }

        .depositBox {
          .infoList {
            display: flex;
            flex-direction: column;
            gap: 10px;
            padding: 16px 18px 20px;
            background: rgba(0, 0, 0, 0.6);

            li {
              display: flex;
              justify-content: space-between;
              font-size: 16px;

              .key {
                opacity: 0.6;
              }

              .value {
              }
            }
          }

          .depositBtn {
            width: 100%;
            height: 56px;
            font-size: 18px;
            font-weight: 700;
            color: #4e3200;
            background: linear-gradient(
              99.16deg,
              #604719 3.95%,
              #f7ab1f 52.09%
            );
            border-radius: 10px;

            &:disabled {
              color: #f7ab1f;
              background: #fff;
            }
          }
        }
      }
    }

    &.detailArea {
      width: 472px;

      & > .value {
        height: 478px;
        padding: 40px 28px;
        background: rgba(255, 255, 255, 0.2);
        border: 2px solid rgba(255, 255, 255, 0.1);
        border-radius: 20px;
        box-shadow:
          inset 0px 3px 3px rgba(255, 255, 255, 0.4),
          0px 10px 40px rgba(255, 255, 255, 0.2);

        .head {
          font-size: 16px;
        }

        .bodyList {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin: 14px 0 0 0;

          li {
            margin: 0 0 0 20px;
            font-size: 14px;
            opacity: 0.4;
            list-style-type: disc;
          }
        }
      }
    }
  }
`;var Jt=i.p+"static/media/I_depositWhite.04bf09e0.svg";i.p;const qt=[{icon:Jt,key:"Deposit",url:"deposit"},{icon:At,key:"History",url:"history"}],Vt=["DEPOSIT"],Wt=["No","Date","Amount","Type","Status"];new Date,new Date,new Date,new Date,new Date,new Date,new Date,new Date,new Date,new Date;function Kt(){const{t:e}=Object(m.a)(),[t,i]=Object(a.useState)(0),[n,s]=Object(a.useState)(new Date),[o,r]=Object(a.useState)(new Date),[l,c]=Object(a.useState)(!1),[A,p]=Object(a.useState)(1),[x,b]=Object(a.useState)([]),[g,f]=Object(a.useState)(0),h=localStorage.getItem("token"),j=Object(a.forwardRef)(((e,t)=>{let{value:i,onClick:a}=e;return Object(d.jsxs)("button",{className:`${l&&"on"} dateBtn`,onClick:a,ref:t,children:[Object(d.jsx)("img",{src:Ct,alt:""}),Object(d.jsx)("p",{children:i})]})}));function u(e){let t={};null!==e&&void 0!==e&&e.filter&&l&&(t.startDate=n,t.endDate=o),console.log(n),console.log(o),V.a.get(`${Z.GET_DEPOSIT_HISTORY}/${8*(A-1)}/8`,{headers:{Authorization:`Bearer ${h}`},params:t}).then((e=>{let{data:t}=e;console.log(t),b(t.dataList),f(t.totalElements)}))}return Object(a.useEffect)((()=>{u()}),[t,A]),Object(d.jsx)(Zt,{children:Object(d.jsxs)("section",{className:"innerBox",children:[Object(d.jsx)("ul",{className:"categoryList",children:Vt.map(((a,n)=>Object(d.jsx)("li",{className:`${t===n&&"on"}`,onClick:()=>i(n),children:e(a)},n)))}),Object(d.jsxs)("article",{className:"contArea",children:[Object(d.jsx)("div",{className:"filterBar",children:Object(d.jsxs)("div",{className:"filterBox",children:[Object(d.jsx)("span",{className:"dateBox filterOpt",children:Object(d.jsx)(It.a,{selected:n,onChange:function(e){const[t,i]=e;s(t),s(t),r(i)},startDate:n,endDate:o,selectsRange:!0,renderCustomHeader:Et,customInput:Object(d.jsx)(j,{})})}),Object(d.jsx)("button",{className:"applyBtn",onClick:()=>u({filter:!0}),children:e("Apply")})]})}),Object(d.jsxs)("div",{className:"listBox",children:[Object(d.jsx)("ul",{className:"listHeader",children:Wt.map(((t,i)=>Object(d.jsx)("li",{children:Object(d.jsx)("p",{children:e(t)})},i)))}),Object(d.jsx)("ul",{className:"list",children:x.map(((e,t)=>Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{children:t+1}),Object(d.jsx)("span",{children:Object(d.jsx)("p",{children:$()(e.createdAt).format("YYYY-MM-DD HH:mm:ss")})}),Object(d.jsx)("span",{children:Object(d.jsx)("p",{children:`${null===e||void 0===e?void 0:e.cash.toLocaleString()}\u20a9`})}),Object(d.jsx)("span",{children:Object(d.jsx)("p",{children:"Deposit"})}),Object(d.jsx)("span",{className:e.chargeStatus,children:Object(d.jsx)("p",{children:e.chargeStatus})})]},t)))})]}),Object(d.jsxs)("div",{className:"pageBox",children:[Object(d.jsx)("button",{className:"arwBtn",disabled:A<=1,onClick:function(){p(A-1)},children:Object(d.jsx)("img",{src:gt,alt:""})}),Object(d.jsx)("ul",{className:"pageList",children:new Array(Math.ceil(g/10)).fill("").map(((e,t)=>t>A-6&&t<A+4&&Object(d.jsxs)("li",{className:`${t+1===A&&"on"}`,onClick:()=>p(t+1),children:[Object(d.jsx)("strong",{children:t+1}),Object(d.jsx)("span",{className:"onBar"})]},t)))}),Object(d.jsx)("button",{className:"arwBtn",disabled:A>=Math.ceil(g/10),onClick:function(){p(A+1)},children:Object(d.jsx)("img",{src:ft,alt:""})})]})]})]})})}const Zt=l.b.main`
  flex: 1;
  padding: 70px 140px;
  overflow-y: scroll;

  @media (max-width: 1440px) {
    max-width: 1020px;
    padding: 70px 40px 70px 80px;
  }

  .innerBox {
    display: flex;
    flex-direction: column;
    gap: 40px;
    height: 100%;

    .categoryList {
      display: flex;
      gap: 20px;

      li {
        height: 36px;
        font-size: 18px;
        font-weight: 700;
        border-bottom: 4px solid transparent;
        opacity: 0.4;
        cursor: pointer;

        &.on {
          border-color: #fff;
          opacity: 1;
        }
      }
    }

    .contArea {
      display: flex;
      flex-direction: column;
      gap: 20px;

      .filterBar {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .filterBox {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;

          .filterOpt {
            display: flex;
            align-items: center;
            width: 280px;
            height: 40px;
            padding: 0 22px;
            color: rgba(255, 255, 255, 0.4);
            border: 1px solid #3b3e45;
            border-radius: 20px;

            &:focus-within {
              border-color: #fff;
              color: #fff;
            }

            &.dateBox {
              .dateBtn {
                display: flex;
                align-items: center;
                gap: 8px;

                &.on {
                  color: #fff;
                }

                img {
                  width: 16px;
                  height: 17px;
                }
              }
            }
          }

          .applyBtn {
            width: 120px;
            height: 40px;
            font-size: 14px;
            font-weight: 700;
            border: 1px solid #3b3e45;
            border-radius: 20px;

            &:focus-within {
              border-color: #fff;
            }
          }
        }

        .exportBtn {
          display: flex;
          justify-content: center;
          width: 40px;
          height: 40px;
          padding: 10px 13px 13px;
          border: 1px solid #3b3e45;
          border-radius: 50%;

          img {
            width: 14px;
          }
        }
      }

      .listBox {
        border: 1px solid #3b3e45;
        border-radius: 14px;
        overflow-x: scroll;

        &::-webkit-scrollbar {
          height: 8px;
        }

        &::-webkit-scrollbar-thumb {
          height: 8px;
          background: #888;
          border-radius: 10px;

          &:hover {
            background: #fff;
          }
        }

        .listHeader {
          display: flex;
          align-items: center;

          height: 46px;
          color: rgba(255, 255, 255, 0.6);
        }

        .list {
          display: flex;
          flex-direction: column;

          li {
            display: flex;

            span {
              height: 60px;
              border-top: 1px solid #3b3e45;

              &:nth-of-type(1) {
                gap: 14px;
              }

              .timeImg {
                height: 16px;
              }

              .arwImg {
                height: 14px;
              }

              .percent {
                color: rgba(255, 255, 255, 0.6);
              }
            }
          }
        }

        .listHeader li,
        .list li span {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 14px;
          flex-grow: 1; /* flex-grow로 각 span이 여유롭게 확장 */

          p {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }

          &:first-of-type {
            padding: 0 0 0 20px;
          }

          &:last-of-type {
            padding: 0 20px 0 0;
          }

          &:nth-of-type(1) {
            width: 60px;
            min-width: 60px;
          }

          &:nth-of-type(2) {
            width: 98px;
            min-width: 98px;
          }

          &:nth-of-type(3) {
            width: 72px;
            min-width: 72px;
          }

          &:nth-of-type(4) {
            width: 210px;
            min-width: 210px;
          }

          &:nth-of-type(5) {
            width: 162px;
            min-width: 162px;
          }

          &:nth-of-type(6) {
            width: 162px;
            min-width: 162px;
          }

          &:nth-of-type(7) {
            width: 94px;
            min-width: 94px;
          }

          &:nth-of-type(8) {
            width: 94px;
            min-width: 94px;
          }

          &:nth-of-type(9) {
            width: 102px;
            min-width: 102px;
          }

          &:nth-of-type(10) {
            flex: 1;
            width: 124px;
            min-width: 124px;
          }
        }
      }

      .pageBox {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        margin: 30px 0 0 0;

        .arwBtn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          border: 2px solid #fff;
          border-radius: 50%;

          &:disabled {
            opacity: 0.2;
          }
        }

        .pageList {
          display: flex;
          align-items: center;

          li {
            display: flex;
            justify-content: center;
            padding: 0 5px;
            font-size: 18px;
            position: relative;
            cursor: pointer;

            &.on {
              .onBar {
                background: #f7ab1f;
              }
            }

            .onBar {
              width: 100%;
              height: 6px;
              border-radius: 4px;
              bottom: -6px;
              position: absolute;
            }
          }
        }
      }
    }
  }
`;function _t(){return Object(d.jsxs)($t,{children:[Object(d.jsx)(Ee,{border:!0}),Object(d.jsx)(rt,{list:qt,baseUrl:"market"}),Object(d.jsxs)(r.d,{children:[Object(d.jsx)(r.b,{path:"/deposit",element:Object(d.jsx)(Gt,{})}),Object(d.jsx)(r.b,{path:"/history",element:Object(d.jsx)(Kt,{})})]})]})}const $t=l.b.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  padding: 60px 0 0 0;
  color: #fff;
  background: #0a0e17;
  overflow: hidden;
`;function ei(){return Object(d.jsxs)(ti,{className:"appBox",children:[Object(d.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),Object(d.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"true"}),Object(d.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;600;700&display=swap",rel:"stylesheet"}),Object(d.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap",rel:"stylesheet"}),Object(d.jsx)(Qe.a,{position:"top-center",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),Object(d.jsxs)(o.a,{children:[Object(d.jsx)(Fe,{}),Object(d.jsx)(ot,{}),Object(d.jsxs)(r.d,{children:[Object(d.jsx)(r.b,{path:"/",element:Object(d.jsx)(tt,{})}),Object(d.jsx)(r.b,{path:"/auth/*",element:Object(d.jsx)(We,{})}),Object(d.jsx)(r.b,{path:"/crypto/*",element:Object(d.jsx)(Re,{})}),Object(d.jsx)(r.b,{path:"/setting/*",element:Object(d.jsx)(Qt,{})}),Object(d.jsx)(r.b,{path:"/ranking/*",element:Object(d.jsx)(Ut,{})}),Object(d.jsx)(r.b,{path:"/market/*",element:Object(d.jsx)(_t,{})})]})]})]})}const ti=l.b.div`
  width: 100vw;
  color: #2a2a2a;
  overflow-x: hidden;
`;var ii=i(56);const ai=Object(ii.b)({chart:le});const ni=Object(ee.a)({reducer:ai,devTools:"production",middleware:Object(ee.c)({serializableCheck:!1})});s.a.createRoot(document.getElementById("root")).render(Object(d.jsx)(p.a,{store:ni,children:Object(d.jsx)(ei,{})}))}},[[341,6,7]]]);
//# sourceMappingURL=main.e290c3f8.chunk.js.map