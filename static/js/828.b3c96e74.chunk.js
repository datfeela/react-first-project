"use strict";(self.webpackChunkfirst_project=self.webpackChunkfirst_project||[]).push([[828],{5828:function(e,r,n){n.r(r),n.d(r,{default:function(){return d}});var s=n(885),t="Friends_wrap__t2Kkp",a=n(1548),i=n(6768),c=(n(3029),n(2791)),u=n(3379),o=n(9067),l=n(184),d=(0,a.D)((function(e){var r=(0,c.useState)({observer:null,target:null}),n=(0,s.Z)(r,2),a=n[0],d=n[1],h=(0,c.useContext)(o.I);return(0,c.useEffect)((function(){document.title="eng"===h.currentLanguage?"Friends | Feelanet":"ru"===h.currentLanguage&&"\u0414\u0440\u0443\u0437\u044c\u044f | Feelanet"}),[]),(0,l.jsxs)("div",{className:t+" wrap",children:[(0,l.jsx)(u.Z,{}),(0,l.jsx)(i.Z,{isLoadingFriends:!0,observerRef:a,setObserverRef:d})]})}))},3379:function(e,r,n){n.d(r,{Z:function(){return _}});var s="UsersHeader_wrap__TfRkM",t="UsersHeader_wrap_dark__R2H9l",a="UsersHeader_innerWrap__eRkYv",i="UsersHeader_title__wXUvn",c="UsersHeader_count__TdLm7",u=n(364),o=n(3029),l=n(75),d=n(6871),h=n(2791),f=n(9067),g=n(184),_=(0,u.$j)((function(e){return{usersFound:(0,l.TD)(e)}}),{})((function(e){var r,n,u=e.usersFound,l=(0,h.useContext)(f.I);switch((0,d.TH)().pathname){case"/friends":r="eng"===l.currentLanguage?"Your friends ":"ru"===l.currentLanguage&&"\u0414\u0440\u0443\u0437\u044c\u044f ",n=" ".concat(u);break;case"/users":r="eng"===l.currentLanguage?"Search results ":"ru"===l.currentLanguage&&"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u043f\u043e\u0438\u0441\u043a\u0430 ",n="(".concat(u," ").concat("eng"===l.currentLanguage?"found":"ru"===l.currentLanguage&&"\u043d\u0430\u0439\u0434\u0435\u043d\u043e",")")}return(0,g.jsxs)("div",{className:"dark"===l.currentTheme?s+" wrapNoPadding "+t:s+" wrapNoPadding",children:[(0,g.jsx)("div",{className:a+" wrap",children:(0,g.jsxs)("h1",{className:i,children:[r," ",(0,g.jsx)("span",{className:c,children:u&&n})]})}),(0,g.jsx)(o.Z,{})]})}))},6768:function(e,r,n){n.d(r,{Z:function(){return F}});var s=n(5987),t=n(2791),a=n(364),i=n(4639),c=n(75),u="User_wrap__J9He3",o="User_wrap_dark__itgCr",l="User_name__4U9vE",d="User_actions_item__qR4nV",h="User_status__ExTSD",f="User_avatar__5oNpk",g="User_info__LibdO",_="User_actions__wyZCI",p="User_button_disabled__lxvje",x="User_divider__d2K9H",m=n(3504),v=n(9067),b=n(184),U=function(e){var r=e.user,n=e.subscribe,s=(0,t.useContext)(v.I),a=r.followed?"eng"===s.currentLanguage?"Unsubscribe":"ru"===s.currentLanguage&&"\u041e\u0442\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f":"eng"===s.currentLanguage?"Subscribe":"ru"===s.currentLanguage&&"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f",i=null!=r.photos.small?r.photos.small:"https://via.placeholder.com/160x160?text=Pic";return(0,b.jsxs)("div",{className:"dark"===s.currentTheme?u+" "+o:u,id:r.id,children:[(0,b.jsx)(m.OL,{to:"/profile/".concat(r.id),children:(0,b.jsx)("img",{src:i,alt:"avatar",className:f})}),(0,b.jsxs)("div",{className:g,children:[(0,b.jsx)(m.OL,{to:"/profile/".concat(r.id),children:(0,b.jsx)("span",{className:l,children:r.name})}),(0,b.jsx)("span",{className:h,children:r.status}),(0,b.jsxs)("div",{className:_,children:[(0,b.jsxs)(m.OL,{to:"/dialog/".concat(r.id),className:d,children:["eng"===s.currentLanguage&&"Message"," ","ru"===s.currentLanguage&&"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"]}),(0,b.jsx)("span",{className:x}),(0,b.jsx)("button",{onClick:function(){r.subscribeBtnIsActive&&n(r.id)},className:r.subscribeBtnIsActive?d:d+" "+p,children:a})]})]})]})},j="UsersList_wrap__zVXBk",L="UsersList_preloader__viTnh",N="UsersList_preloader_disabled__sMDaI",w=n(5556),I=n(4786),k=n(6613),C=function(e){var r=e.isAllUsersLoaded,n=e.isFetching,s=e.users,a=e.searchTerm,i=e.subscribe,c=e.resetUsers,u=e.updateUsersLoadPage,o=e.cleanUp,l=e.getUsers,d=(0,t.useContext)(v.I);(0,t.useEffect)((function(){(0,k.J)()?d.setIsScrollbarActive(!0):d.setIsScrollbarActive(!1)})),(0,t.useEffect)((function(){0===s.length&&l()}),[s.length,a]),(0,t.useEffect)((function(){u(1),s.length&&c()}),[a]),(0,t.useEffect)((function(){return function(){o()}}),[]);var h={root:document.querySelector(j+" wrap")},f=function(){l()};(0,t.useEffect)((function(){if(s&&s[s.length-2]&&!r){var e=document.querySelector('[id="'.concat(s[s.length-2].id,'"]'));(0,I.H)(h,f).observe(e)}}),[s]);var g=s.map((function(e){return(0,b.jsx)(U,{user:e,subscribe:i},e.id)}));return(0,b.jsxs)("div",{className:j+" wrap",children:[g,(0,b.jsx)("div",{className:n?L:N,children:(0,b.jsx)(w.Z,{})})]})},T=["isInit","initializeUsers","subscribe"],H={initializeUsers:i.dw,getUsers:i.Rf,subscribe:i.Ld,selectSearchTerm:c.$p,cleanUp:i.Lx,setAllUsersLoaded:i.Ms,updateUsersLoadPage:i.N4,resetUsers:i.qh},F=(0,a.$j)((function(e){return{isInit:(0,c.u$)(e),users:(0,c.YN)(e),usersPerLoad:(0,c.aF)(e),currentPage:(0,c.e3)(e),isFetching:(0,c.pT)(e),isAllUsersLoaded:(0,c.yH)(e),searchTerm:(0,c.$p)(e)}}),H)((function(e){var r=e.isInit,n=e.initializeUsers,a=e.subscribe,i=(0,s.Z)(e,T);return(0,t.useEffect)((function(){r||n(i.isLoadingFriends)}),[r]),r?r?(0,b.jsx)(C,{users:i.users,searchTerm:i.searchTerm,cleanUp:i.cleanUp,subscribe:a,getUsers:function(){i.getUsers(i.isLoadingFriends)},resetUsers:i.resetUsers,updateUsersLoadPage:i.updateUsersLoadPage,isFetching:i.isFetching,isAllUsersLoaded:i.isAllUsersLoaded}):void 0:(0,b.jsx)("div",{children:"fix this pls"})}))},3029:function(e,r,n){n.d(r,{Z:function(){return g}});var s="UsersSearch_wrap__GLZj2",t="UsersSearch_wrap_dark__01hFD",a=n(5705),i=n(4759),c=n(4639),u=n(364),o=n(75),l=n(2791),d=n(9067),h=n(184),f={setSearchTerm:c.Cl},g=(0,u.$j)((function(e){return{searchTerm:(0,o.$p)(e)}}),f)((function(e){var r=(0,l.useContext)(d.I),n=function(r){r!==e.searchTerm&&e.setSearchTerm(r)};return(0,h.jsx)("div",{className:"dark"===r.currentTheme?s+" wrapNoPadding  "+t:s+" wrapNoPadding",children:(0,h.jsx)(a.J9,{initialValues:{usersSearchInput:""},onSubmit:function(e,r){r.setSubmitting(!1)},children:function(){return(0,h.jsx)(a.l0,{children:(0,h.jsx)(a.gN,{type:"text",name:"usersSearchInput",component:i.P,placeholder:"eng"===r.currentLanguage?"Search":"ru"===r.currentLanguage&&"\u041f\u043e\u0438\u0441\u043a",onValueChange:n,autoComplete:"off",options:{border:"none",icon:"search",padding:"0px"}})})}})})}))},4759:function(e,r,n){n.d(r,{P:function(){return j},C:function(){return L}});var s=n(1413),t=n(5987),a="Inputs_inputWrap__bxhik",i="Inputs_inputWrap_withIcon__xxyLT",c="Inputs_inputWrap_dark__wb1gX",u="Inputs_input__6JgzO",o="Inputs_icon__v2Fgu",l="Inputs_input_error__N+OzZ",d="Inputs_textarea__K0ZBr",h="Inputs_textarea_dark__ibBbA",f="Inputs_checkboxWrap__AZQyn",g="Inputs_checkbox__gnsjA",_="Inputs_checkbox__label__G4bqt",p=n(2791),x=n(9029),m=n(9067),v=n(184),b=["form","field","options","onValueChange","children"],U=["form","field"],j=function(e){var r=e.form,n=e.field,d=e.options,h=e.onValueChange,U=(e.children,(0,t.Z)(e,b)),j=(0,p.useContext)(m.I);d&&d.inputMaxLength&&n.value.length>d.inputMaxLength&&(n.value=n.value.substr(0,d.inputMaxLength)),(0,p.useEffect)((function(){h&&h(n.value)}),[n.value]);var L,N="dark"===j.currentTheme?a+" "+c:a;switch(U.type){case"text":N=d&&d.icon?N+" "+i:N,L=d&&d.showErrors&&r.errors[n.name]?u+" "+l:u;break;case"checkbox":N=f,L=g;break;default:L=d&&d.showErrors&&r.errors[n.name]?u+" "+l:u}return(0,v.jsxs)("div",{className:N,children:[(0,v.jsx)("input",(0,s.Z)({style:{border:d&&d.border,padding:d&&d.padding},name:n.name,value:n.value,onChange:r.handleChange,className:L,checked:n.checked},U)),d&&d.icon&&(0,v.jsx)(x.O,{className:o,id:d.icon}),U.label&&(0,v.jsx)("span",{className:_,children:U.label})]})},L=function(e){var r=e.form,n=e.field,s=(0,t.Z)(e,U),a=(0,p.useContext)(m.I),i=p.createRef();(0,p.useEffect)((function(){r.values[n.name]||c()}),[r.values]);var c=function(){i.current.style.height="".concat(s.defaultHeight+2,"px")},u=(s.inputType,"dark"===a.currentTheme?d+" "+h:d);return(0,v.jsx)("textarea",{ref:i,style:{height:"".concat(s.defaultHeight,"px"),maxHeight:s.maxHeight},type:s.type,name:n.name,onChange:function(e){r.handleChange(e),function(e){i.current.style.height="".concat(s.defaultHeight+2,"px");var r="".concat(e.target.scrollHeight,"px");i.current.style.height=r,s.onHeightChange&&s.onHeightChange()}(e)},onFocus:function(){s.onFocus&&s.onFocus()},onBlur:function(){s.onBlur&&s.onBlur()},value:n.value,className:u,placeholder:s.placeholder})}},5556:function(e,r,n){n.d(r,{Z:function(){return c}});var s=n(695),t="Preloader_wrap__BkHvc",a="Preloader_gif__18c7L",i=n(184),c=function(e){return(0,i.jsx)("div",{className:t,children:(0,i.jsx)("img",{className:a,src:s})})}},1548:function(e,r,n){n.d(r,{D:function(){return u}});var s=n(1413),t=n(364),a=n(6871),i=n(7561),c=n(184),u=function(e){var r={getUserData:i.is};return(0,t.$j)((function(e){return{isAuth:e.auth.isAuth}}),r)((function(r){return r.isAuth?(0,c.jsx)(e,(0,s.Z)({},r)):(0,c.jsx)(a.Fg,{replace:!0,to:"/login"})}))}},6613:function(e,r,n){n.d(r,{J:function(){return s}});var s=function(){return document.body.clientWidth<window.innerWidth}},4786:function(e,r,n){n.d(r,{H:function(){return s}});var s=function(e,r){var n=e.root,s=e.rootMargin,t=void 0===s?"0px":s,a=e.threshold;return new IntersectionObserver((function(e,n){e.forEach((function(e){e.isIntersecting&&(r(),n.unobserve(e.target))}))}),{root:n,rootMargin:t,threshold:void 0===a?.1:a})}},695:function(e,r,n){e.exports=n.p+"static/media/preloading.20a21d3c5d14bc614403.gif"}}]);
//# sourceMappingURL=828.b3c96e74.chunk.js.map