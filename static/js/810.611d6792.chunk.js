"use strict";(self.webpackChunkfirst_project=self.webpackChunkfirst_project||[]).push([[810],{6810:function(e,n,r){r.r(n),r.d(n,{default:function(){return Ze}});var t=r(364),a=r(473),s=r(3874),i=r(871),o=r(885),c=r(5987),l={preloaderWrap:"Profile_preloaderWrap__DIi17",columns_wrap:"Profile_columns_wrap__Ldx6-",wrap_side:"Profile_wrap_side__mfMaa",column_main:"Profile_column_main__XTp0F",editModeButton:"Profile_editModeButton__t36h2"},u=r(2791),d=r(1413),p=r(9067),_=r(9029),f="EditMode_wrap__EdBC-",h="EditMode_wrap_dark__8DmaO",m="EditMode_wrapInner__3Wa48",x="EditMode_closeButton__PTTGD",g="EditMode_closeButtonWrap__Gm7dQ",j=r(184),b=["deactivateEditMode","ChildComponent"],v=function(e){var n=e.deactivateEditMode,r=e.ChildComponent,t=(0,c.Z)(e,b),a=(0,u.useContext)(p.I),s=(0,u.useRef)(),i=(0,u.useRef)();return(0,j.jsx)("div",{onClick:function(e){i.current.contains(e.target)&&n(),!s.current.contains(e.target)&&n()},className:"dark"===a.currentTheme?f+" "+h:f,children:(0,j.jsxs)("div",{className:m,ref:s,children:[(0,j.jsx)("div",{className:g,ref:i,children:(0,j.jsx)(_.O,{id:"close",className:x})}),(0,j.jsx)("div",{children:(0,j.jsx)(r,(0,d.Z)((0,d.Z)({},t),{},{deactivateEditMode:n}))})]})})},N="Avatar_wrap__km-O2",w="Avatar_wrap_editable__6opH7",I="Avatar_popup__fCxgS",P="Avatar_avatar__W1eEf",k="Avatar_popup__action__duA3E",L="Avatar_popup__icon__jdxln",A=r(5861),F=r(7757),W=r.n(F),C={title:"UploadAvatarForm_title__8BgDo",input:"UploadAvatarForm_input__U5WYR",button:"UploadAvatarForm_button__5i9Rt",icon:"UploadAvatarForm_icon__iRz1F",footer:"UploadAvatarForm_footer__Ja4YY"},y=function(e){var n=e.savePhoto,r=e.deactivateEditMode,t=function(){var e=(0,A.Z)(W().mark((function e(t){return W().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.target.files.length){e.next=5;break}return e.next=3,n(t.target.files[0]);case 3:0===e.sent.resultCode&&r();case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,j.jsxs)("div",{children:[(0,j.jsx)("h2",{className:C.title,children:"Upload a new photo"}),(0,j.jsxs)("div",{children:[(0,j.jsx)("input",{onChange:t,name:"file-input",type:"file",id:"input__file",className:C.input}),(0,j.jsxs)("label",{htmlFor:"input__file",className:C.button+" button",children:[(0,j.jsx)(_.O,{className:C.icon,id:"upload"}),(0,j.jsx)("span",{className:C.buttonText,children:"Select a file"})]})]}),(0,j.jsx)("div",{className:C.footer,children:"If you are having problems uploading, try choosing a smaller photo."})]})},E={savePhoto:i.Ju},S=(0,t.$j)((function(e){return{}}),E)((function(e){var n=e.photo,r=e.savePhoto,t=e.isOwner,a=(0,u.useState)(!1),s=(0,o.Z)(a,2),i=s[0],c=s[1],l=(0,u.useContext)(p.I),d=t?N+" "+w:N;return(0,j.jsxs)("div",{children:[(0,j.jsxs)("div",{className:d,children:[(0,j.jsx)("img",{className:P,src:n||"https://via.placeholder.com/250x250",alt:"profileimg"}),(0,j.jsx)("div",{className:I,children:(0,j.jsxs)("div",{onClick:function(){c(!0)},className:k,children:[(0,j.jsx)(_.O,{className:L,id:"upload"}),(0,j.jsxs)("span",{children:["eng"===l.currentLanguage&&"Set new image","ru"===l.currentLanguage&&"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e"]})]})})]}),i&&(0,j.jsx)(v,{deactivateEditMode:function(){c(!1)},ChildComponent:y,savePhoto:r})]})})),Z={wrap:"ProfileInfo_wrap__yI6D9",wrap_dark:"ProfileInfo_wrap_dark__fX+FU",top:"ProfileInfo_top__agJ9W",name:"ProfileInfo_name__JrCn9",header:"ProfileInfo_header__-THF5",headerLine:"ProfileInfo_headerLine__vnryI",link_labeled:"ProfileInfo_link_labeled__wPUk+",headerWrap:"ProfileInfo_headerWrap__Vkvvb",row:"ProfileInfo_row__G4yH6",label:"ProfileInfo_label__KhgTl",personal_info:"ProfileInfo_personal_info__quL7j"},B="Status_wrap__K45jk",M="Status_wrap_dark__NNmrk",T="Status_text__55AXJ",U="Status_edit_mode_block__b2xyB",O="Status_text_editable__e52fz",J="Status_save_button__5l03V",H=r(5556),R=r(5705),D=r(4759),q=function(e){var n=(0,u.useContext)(p.I),r=(0,u.useState)(!1),t=(0,o.Z)(r,2),a=t[0],s=t[1],i=u.useRef(),c=function(){s(!1),document.removeEventListener("mousedown",l)},l=function e(n){i.current||document.removeEventListener("mousedown",e),i.current.contains(n.target)||c()},d=e.isOwner?T+" "+O:T;return(0,j.jsxs)("div",{ref:i,className:"dark"===n.currentTheme?B+" "+M:B,children:[(0,j.jsx)("span",{onClick:function(){!e.requestInProgress&&e.isOwner&&(s(!0),document.addEventListener("mousedown",l))},className:d,children:e.status?e.status:e.isOwner?"type something here...":""}),e.requestInProgress&&(0,j.jsx)(H.Z,{}),a&&(0,j.jsx)(Y,{saveStatus:function(n){s(!1),document.removeEventListener("mousedown",l),e.updateStatus(n)},value:e.status})]})},Y=function(e){var n=e.saveStatus,r=e.value,t=(0,u.useContext)(p.I);return(0,j.jsx)("div",{className:U,children:(0,j.jsx)(R.J9,{initialValues:{statusEditMode:r},onSubmit:function(e,r){n(e.statusEditMode),r.setSubmitting(!1)},children:function(e){var n=e.isSubmitting;return(0,j.jsxs)(R.l0,{children:[(0,j.jsx)(R.gN,{type:"text",name:"statusEditMode",component:D.P,autoComplete:"off",autoFocus:!0,options:{padding:"5px 9px",showErrors:!0,inputMaxLength:300}}),(0,j.jsxs)("button",{type:"submit",disabled:n,className:J+" button",children:["eng"===t.currentLanguage&&"Save"," ","ru"===t.currentLanguage&&"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"]})]})}})})},G=function(e){var n=!1;return Object.values(e).forEach((function(e){if(e)return n=!0})),n},V=function(e){return e.includes("http")?e:"https://".concat(e)},Q=function(e){var n=(0,u.useContext)(p.I);return(0,j.jsxs)("div",{className:"dark"===n.currentTheme?Z.wrap+" wrap "+Z.wrap_dark:Z.wrap+" wrap",children:[(0,j.jsxs)("div",{className:Z.top,children:[(0,j.jsx)("h1",{className:Z.name,children:e.profileInfo.fullName}),(0,j.jsx)(q,{isOwner:e.isOwner,userId:e.userId,status:e.status,updateStatus:e.updateStatus,requestInProgress:!1})]}),(0,j.jsx)("div",{className:Z.headerWrap,children:(0,j.jsxs)("h2",{className:Z.header+" "+Z.header_lfaj,children:["eng"===n.currentLanguage&&"Looking for a job:"," ","ru"===n.currentLanguage&&"\u0418\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443:",e.profileInfo.lookingForAJob?(0,j.jsx)("span",{children:" \u2705 "}):(0,j.jsx)("span",{children:" \u274c "})]})}),e.profileInfo.lookingForAJobDescription&&(0,j.jsx)("div",{className:Z.personal_info,children:e.profileInfo.lookingForAJobDescription}),e.profileInfo.aboutMe&&(0,j.jsxs)("div",{children:[(0,j.jsxs)("div",{className:Z.headerWrap,children:[(0,j.jsxs)("h2",{className:Z.header,children:["eng"===n.currentLanguage&&"About Me"," ","ru"===n.currentLanguage&&"\u041e \u0441\u0435\u0431\u0435"]}),(0,j.jsx)("span",{className:Z.headerLine})]}),(0,j.jsx)("div",{className:Z.personal_info,children:e.profileInfo.aboutMe})]}),G(e.profileInfo.contacts)&&(0,j.jsxs)("div",{className:Z.headerWrap,children:[(0,j.jsxs)("h2",{className:Z.header,children:["eng"===n.currentLanguage&&"Contacts"," ","ru"===n.currentLanguage&&"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"]}),(0,j.jsx)("span",{className:Z.headerLine})]}),(0,j.jsxs)("div",{children:[e.profileInfo.contacts.vk&&(0,j.jsxs)("div",{className:Z.row,children:[(0,j.jsx)("h3",{className:Z.label,children:"vk:"}),(0,j.jsx)("a",{href:V(e.profileInfo.contacts.vk),className:Z.link_labeled,children:e.profileInfo.contacts.vk})]}),e.profileInfo.contacts.facebook&&(0,j.jsxs)("div",{className:Z.row,children:[(0,j.jsx)("h3",{className:Z.label,children:"facebook:"}),(0,j.jsx)("a",{href:V(e.profileInfo.contacts.facebook),className:Z.link_labeled,children:e.profileInfo.contacts.facebook})]}),e.profileInfo.contacts.twitter&&(0,j.jsxs)("div",{className:Z.row,children:[(0,j.jsx)("h3",{className:Z.label,children:"twitter:"}),(0,j.jsx)("a",{href:V(e.profileInfo.contacts.twitter),className:Z.link_labeled,children:e.profileInfo.contacts.twitter})]}),e.profileInfo.contacts.instagram&&(0,j.jsxs)("div",{className:Z.row,children:[(0,j.jsx)("h3",{className:Z.label,children:"instagram:"}),(0,j.jsx)("a",{href:V(e.profileInfo.contacts.instagram),className:Z.link_labeled,children:e.profileInfo.contacts.instagram})]}),e.profileInfo.contacts.youtube&&(0,j.jsxs)("div",{className:Z.row,children:[(0,j.jsx)("h3",{className:Z.label,children:"youtube:"}),(0,j.jsx)("a",{href:V(e.profileInfo.contacts.youtube),className:Z.link_labeled,children:e.profileInfo.contacts.youtube})]}),e.profileInfo.contacts.github&&(0,j.jsxs)("div",{className:Z.row,children:[(0,j.jsx)("h3",{className:Z.label,children:"github:"}),(0,j.jsx)("a",{href:V(e.profileInfo.contacts.github),className:Z.link_labeled,children:e.profileInfo.contacts.github})]})]})]})},K="Posts_wrap__Y7c1e",z="Posts_noPostsWrap__av-S8",X=r(3504),$="Post_wrap__qetL6",ee="Post_wrap_dark__liT4g",ne="Post_author__Clw9A",re="Post_content__text__toX8R",te="Post_header__yT5hy",ae="Post_avatar__OKw3l",se="Post_info__jB7Pc",ie="Post_date__5pU2e",oe="Post_content__5Dof3",ce=function(e){var n=(0,u.useContext)(p.I);return(0,j.jsxs)("div",{className:"dark"===n.currentTheme?$+" wrap "+ee:$+" wrap",children:[(0,j.jsxs)("div",{className:te,children:[(0,j.jsx)("img",{src:"https://via.placeholder.com/120x120?text=Pic",alt:"",className:ae}),(0,j.jsxs)("div",{className:se,children:[(0,j.jsx)(X.OL,{to:"/profile/".concat(e.authorId),children:(0,j.jsx)("span",{className:ne,children:e.author})}),(0,j.jsx)("span",{className:ie,children:e.date})]})]}),(0,j.jsx)("div",{className:oe,children:(0,j.jsx)("span",{className:re,children:e.text})})]})},le="Input_button__jb2gQ",ue=r(5689),de=function(e){var n=(0,u.useContext)(p.I),r=function(e){var r=(0,ue.sx)(e);return!r&&(r=(0,ue.BS)(e,500,n.currentLanguage)),r},t=(0,u.useState)(!1),a=(0,o.Z)(t,2),s=a[0],i=a[1],c=s?62:40,l=function(){i(!0)};return(0,j.jsx)(R.J9,{initialValues:{newPostText:""},onSubmit:function(n,r){e.addPost(n.newPostText,e.currentUserId),r.setSubmitting(!1),r.resetForm(),i(!1)},children:function(e){var t=e.isSubmitting;return(0,j.jsxs)(R.l0,{children:[(0,j.jsx)(R.gN,{type:"text",name:"newPostText",component:D.C,validate:r,placeholder:"eng"===n.currentLanguage?"What's new?":"ru"===n.currentLanguage&&"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u0447\u0442\u043e-\u043d\u0438\u0431\u0443\u0434\u044c...",defaultHeight:c,maxHeight:"240px",onFocus:l}),(0,j.jsx)(R.Bc,{name:"newPostText",component:pe}),s&&(0,j.jsxs)("button",{className:le+" button",type:"submit",disabled:t,children:["eng"===n.currentLanguage&&"Publish"," ","ru"===n.currentLanguage&&"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c"]})]})}})},pe=function(e){return console.log(e),(0,j.jsx)("div",{children:e.children})},_e=function(e){var n=(0,u.useContext)(p.I),r=e.posts&&e.posts.map((function(e){return(0,j.jsx)(ce,{authorId:e.authorId,author:e.author,date:e.date,text:e.text},e.id)}));return(0,j.jsxs)("div",{className:K,children:[(0,j.jsx)("div",{className:"wrap",children:(0,j.jsx)(de,{addPost:e.addPost,currentUserId:e.currentUserId})}),r||(0,j.jsxs)("div",{className:z+" wrap",children:["eng"===n.currentLanguage&&"There is no posts... Yet"," ","ru"===n.currentLanguage&&"\u041f\u043e\u043a\u0430 \u043d\u0435\u0442 \u043d\u0438 \u043e\u0434\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438..."]})]})},fe=r(6871),he={wrap_dark:"EditProfileForm_wrap_dark__ZOYCH",title:"EditProfileForm_title__HqYCG",subtitle:"EditProfileForm_subtitle__tlBoC",inputGroup:"EditProfileForm_inputGroup__hUJb4",submitNotification:"EditProfileForm_submitNotification__0G-WY",inputWrap:"EditProfileForm_inputWrap__o69bk",errorWrapAbsolute:"EditProfileForm_errorWrapAbsolute__LxVfZ",errorWrapAbsolute_textarea:"EditProfileForm_errorWrapAbsolute_textarea__wuJzC",label:"EditProfileForm_label__6f71P",submitTitle:"EditProfileForm_submitTitle__4oO7j",submitIcon:"EditProfileForm_submitIcon__2T6ZM",submitButton:"EditProfileForm_submitButton__egn9f",submitButton_disabled:"EditProfileForm_submitButton_disabled__4peEU"},me=r(5309),xe=function(e){var n=e.authUserId,r=e.profileInfo,t=e.changeProfileInfo,a=(0,u.useState)(!1),s=(0,o.Z)(a,2),i=s[0],c=s[1],l=(0,u.useContext)(p.I),d=function(e){return(0,ue.q9)(e,l.currentLanguage)},f=function(e){return(0,ue.mQ)(e,l.currentLanguage)},h=function(){var e=(0,A.Z)(W().mark((function e(r,a){var s;return W().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(n,r.fullName,r.aboutMe,r.lookingForAJob,r.lookingForAJobDescription,{github:r.github,vk:r.vk,facebook:r.facebook,instagram:r.instagram,twitter:r.twitter,website:r.website,youtube:r.youtube,mainLink:""});case 2:s=e.sent,a.setSubmitting(!1),0===s.resultCode&&c(!0);case 5:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}();return(0,j.jsxs)("div",{className:"dark"===l.currentTheme?he.wrap+" "+he.wrap_dark:he.wrap,children:[(0,j.jsxs)("h2",{className:he.title,children:["eng"===l.currentLanguage&&"Edit info","ru"===l.currentLanguage&&"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0444\u0438\u043b\u044f"]}),i&&(0,j.jsxs)("div",{className:he.submitNotification,children:[(0,j.jsx)(_.O,{className:he.submitIcon,id:"success"}),(0,j.jsxs)("span",{className:he.submitText,children:["eng"===l.currentLanguage&&(0,j.jsxs)("span",{children:["Your changes have been submited successfully. ",(0,j.jsx)("br",{})," They will be displayed on your page."]}),"ru"===l.currentLanguage&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("span",{className:he.submitTitle,children:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u044b. "})," ",(0,j.jsx)("br",{}),(0,j.jsx)("span",{children:" \u041d\u043e\u0432\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u043e\u0442\u0440\u0430\u0436\u0435\u043d\u044b \u043d\u0430 \u0432\u0430\u0448\u0435\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435."})]})]})]}),(0,j.jsx)(R.J9,{initialValues:{fullName:r.fullName,lookingForAJob:r.lookingForAJob,lookingForAJobDescription:r.lookingForAJobDescription,aboutMe:r.aboutMe||"",github:r.contacts.github||"",vk:r.contacts.vk||"",facebook:r.contacts.facebook||"",instagram:r.contacts.instagram||"",twitter:r.contacts.twitter||"",website:r.contacts.website||"",youtube:r.contacts.youtube||""},onSubmit:h,children:function(e){var n=e.isSubmitting;return(0,j.jsxs)(R.l0,{children:[(0,j.jsxs)("div",{className:he.inputGroup,children:[(0,j.jsxs)("h3",{className:he.subtitle,children:["eng"===l.currentLanguage&&"About you","ru"===l.currentLanguage&&"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0435"]}),(0,j.jsxs)("div",{className:he.inputWrap,children:[(0,j.jsxs)("span",{className:he.label,children:["eng"===l.currentLanguage&&"Full name:","ru"===l.currentLanguage&&"\u041f\u043e\u043b\u043d\u043e\u0435 \u0438\u043c\u044f:"]}),(0,j.jsx)(R.gN,{type:"text",name:"fullName",component:D.P,validate:d,options:{padding:"5px 12px",showErrors:!0}}),(0,j.jsx)("div",{className:he.errorWrapAbsolute,children:(0,j.jsx)(R.Bc,{name:"fullName",component:me.Z})})]}),(0,j.jsxs)("div",{className:he.inputWrap,children:[(0,j.jsxs)("span",{className:he.label,children:["eng"===l.currentLanguage&&"Looking for a job:","ru"===l.currentLanguage&&"\u0412 \u043f\u043e\u0438\u0441\u043a\u0430\u0445 \u0440\u0430\u0431\u043e\u0442\u044b:"]}),(0,j.jsx)(R.gN,{type:"checkbox",name:"lookingForAJob",component:D.P})]}),(0,j.jsxs)("div",{className:he.inputWrap,children:[(0,j.jsxs)("span",{className:he.label,children:["eng"===l.currentLanguage&&(0,j.jsxs)("span",{children:["Looking for a job ",(0,j.jsx)("br",{})," description:"]}),"ru"===l.currentLanguage&&(0,j.jsxs)("span",{children:["\u0412 \u043f\u043e\u0438\u0441\u043a\u0430\u0445 \u0440\u0430\u0431\u043e\u0442\u044b ",(0,j.jsx)("br",{})," \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435:"]})]}),(0,j.jsx)(R.gN,{type:"text",name:"lookingForAJobDescription",component:D.C,validate:d,defaultHeight:40,maxHeight:"120px"}),(0,j.jsx)("div",{className:he.errorWrapAbsolute+" "+he.errorWrapAbsolute_textarea,children:(0,j.jsx)(R.Bc,{name:"lookingForAJobDescription",component:me.Z})})]}),(0,j.jsxs)("div",{className:he.inputWrap,children:[(0,j.jsxs)("span",{className:he.label,children:["eng"===l.currentLanguage&&"About you:","ru"===l.currentLanguage&&"\u041e \u0441\u0435\u0431\u0435"]}),(0,j.jsx)(R.gN,{type:"text",name:"aboutMe",component:D.C,defaultHeight:40,maxHeight:"120px"}),(0,j.jsx)(R.Bc,{name:"aboutMe",component:ge})]})]}),(0,j.jsxs)("div",{className:he.inputGroup,children:[(0,j.jsxs)("h3",{className:he.subtitle,children:["eng"===l.currentLanguage&&"Your contacts:","ru"===l.currentLanguage&&"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b:"]}),(0,j.jsxs)("div",{className:he.inputWrap,children:[(0,j.jsx)("span",{className:he.label,children:"GitHub: "}),(0,j.jsx)(R.gN,{type:"text",name:"github",component:D.P,validate:f,options:{padding:"5px 12px",showErrors:!0}}),(0,j.jsx)("div",{className:he.errorWrapAbsolute,children:(0,j.jsx)(R.Bc,{name:"github",component:me.Z})})]}),(0,j.jsxs)("div",{className:he.inputWrap,children:[(0,j.jsx)("span",{className:he.label,children:"VK: "}),(0,j.jsx)(R.gN,{type:"text",name:"vk",component:D.P,validate:f,options:{padding:"5px 12px",showErrors:!0}}),(0,j.jsx)("div",{className:he.errorWrapAbsolute,children:(0,j.jsx)(R.Bc,{name:"vk",component:me.Z})})]}),(0,j.jsxs)("div",{className:he.inputWrap,children:[(0,j.jsx)("span",{className:he.label,children:"Facebook: "}),(0,j.jsx)(R.gN,{type:"text",name:"facebook",component:D.P,validate:f,options:{padding:"5px 12px",showErrors:!0}}),(0,j.jsx)("div",{className:he.errorWrapAbsolute,children:(0,j.jsx)(R.Bc,{name:"facebook",component:me.Z})})]}),(0,j.jsxs)("div",{className:he.inputWrap,children:[(0,j.jsx)("span",{className:he.label,children:"Instagram: "}),(0,j.jsx)(R.gN,{type:"text",name:"instagram",component:D.P,validate:f,options:{padding:"5px 12px",showErrors:!0}}),(0,j.jsx)("div",{className:he.errorWrapAbsolute,children:(0,j.jsx)(R.Bc,{name:"instagram",component:me.Z})})]}),(0,j.jsxs)("div",{className:he.inputWrap,children:[(0,j.jsx)("span",{className:he.label,children:"Twitter: "}),(0,j.jsx)(R.gN,{type:"text",name:"twitter",component:D.P,validate:f,options:{padding:"5px 12px",showErrors:!0}}),(0,j.jsx)("div",{className:he.errorWrapAbsolute,children:(0,j.jsx)(R.Bc,{name:"twitter",component:me.Z})})]}),(0,j.jsxs)("div",{className:he.inputWrap,children:[(0,j.jsxs)("span",{className:he.label,children:["eng"===l.currentLanguage&&"Your website:","ru"===l.currentLanguage&&"\u0421\u0432\u043e\u0439 \u0441\u0430\u0439\u0442:"]}),(0,j.jsx)(R.gN,{type:"text",name:"website",component:D.P,validate:f,options:{padding:"5px 12px",showErrors:!0}}),(0,j.jsx)("div",{className:he.errorWrapAbsolute,children:(0,j.jsx)(R.Bc,{name:"website",component:me.Z})})]}),(0,j.jsxs)("div",{className:he.inputWrap,children:[(0,j.jsxs)("span",{className:he.label,children:["eng"===l.currentLanguage&&"Youtube channel:","ru"===l.currentLanguage&&"Youtube \u043a\u0430\u043d\u0430\u043b:"]}),(0,j.jsx)(R.gN,{type:"text",name:"youtube",component:D.P,validate:f,options:{padding:"5px 12px",showErrors:!0}}),(0,j.jsx)("div",{className:he.errorWrapAbsolute,children:(0,j.jsx)(R.Bc,{name:"youtube",component:me.Z})})]})]}),(0,j.jsxs)("button",{className:he.submitButton+" button",type:"submit",disabled:n,children:["eng"===l.currentLanguage&&"Submit","ru"===l.currentLanguage&&"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"]})]})}})]})},ge=function(e){return(0,j.jsx)("div",{children:e.children})},je={wrap_dark:"ProfileFriends_wrap_dark__GMQRu",header:"ProfileFriends_header__YhUmA",header_link:"ProfileFriends_header_link__Q7iuW",friendsCount:"ProfileFriends_friendsCount__nxq1K",friendsWrap:"ProfileFriends_friendsWrap__M53jR",friend:"ProfileFriends_friend__P6gOH",friend_dark:"ProfileFriends_friend_dark__PlArQ",friend__name:"ProfileFriends_friend__name__eGfA8",friend__link:"ProfileFriends_friend__link__xXPtQ",friend__imgWrap:"ProfileFriends_friend__imgWrap__HixQs",friend__img:"ProfileFriends_friend__img__0IpR7"},be=["currentUserId","friends","friendsCount"],ve=function(e){var n=e.id,r=e.name,t=e.photos,a=e.appContext;return(0,j.jsxs)("div",{className:"dark"===a.currentTheme?je.friend+" "+je.friend_dark:je.friend,children:[(0,j.jsx)(X.OL,{to:"/profile/".concat(n),children:(0,j.jsx)("div",{className:je.friend__imgWrap,children:(0,j.jsx)("img",{className:je.friend__img,src:t.small?t.small:"https://via.placeholder.com/100x100?text=Pic",alt:"img"})})}),(0,j.jsx)(X.OL,{className:je.friend__link,to:"/profile/".concat(n),children:(0,j.jsx)("span",{className:je.friend__name,children:r})})]})},Ne=(0,t.$j)((function(e){return{friends:(0,s.Ze)(e),friendsCount:(0,s.Ny)(e)}}),{})((function(e){e.currentUserId;var n=e.friends,r=e.friendsCount,t=((0,c.Z)(e,be),(0,u.useContext)(p.I)),a=n.length&&n.map((function(e){return(0,j.jsx)(ve,{appContext:t,id:e.id,name:e.name,photos:e.photos},e.id)}));return(0,j.jsxs)("div",{className:"dark"===t.currentTheme?je.wrap+" "+je.wrap_dark:je.wrap,children:[(0,j.jsx)("h2",{className:je.header,children:(0,j.jsxs)(X.OL,{className:je.header_link,to:"/friends",children:["eng"===t.currentLanguage&&"Friends "," ","ru"===t.currentLanguage&&"\u0414\u0440\u0443\u0437\u044c\u044f ",(0,j.jsx)("span",{className:je.friendsCount,children:r})]})}),(0,j.jsx)("div",{className:je.friendsWrap,children:a})]})})),we=r(6613),Ie="ProfileActions_wrap__Ugoyq",Pe="ProfileActions_wrap_dark__wNbVj",ke="ProfileActions_button__4DPSy",Le="ProfileActions_icon__EdaC3",Ae="ProfileActions_button_disabled__vKuAu",Fe=["currentUserId","isFollowed","isFetching"],We={subscribe:i.Ld},Ce=(0,t.$j)((function(e){return{isFollowed:(0,s.qB)(e),isFetching:(0,s.gp)(e)}}),We)((function(e){var n=e.currentUserId,r=e.isFollowed,t=e.isFetching,a=(0,c.Z)(e,Fe),s=(0,u.useContext)(p.I);return(0,j.jsxs)("div",{className:Ie+" "+("dark"===s.currentTheme?Pe:""),children:[(0,j.jsx)(X.OL,{to:"/dialog/".concat(n),children:(0,j.jsxs)("button",{className:ke,children:[(0,j.jsx)(_.O,{id:"messenger",className:Le}),"eng"===s.currentLanguage&&"Send a message","ru"===s.currentLanguage&&"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"]})}),(0,j.jsxs)("button",{onClick:function(){a.subscribe(n)},disabled:t,className:ke+" "+(t&&Ae),children:[(0,j.jsx)(_.O,{id:r?"deleteFriend":"addFriend",className:Le}),!r&&("eng"===s.currentLanguage?"Add friend":"ru"===s.currentLanguage&&"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0434\u0440\u0443\u0437\u044c\u044f"),r&&("eng"===s.currentLanguage?"Delete friend":"ru"===s.currentLanguage&&"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0437 \u0434\u0440\u0443\u0437\u0435\u0439")]})]})})),ye=["isInit","profileInfo","changeProfileInfo","authUserId","isAuth","profileStatus","updateStatus","posts","addPost"],Ee=function(e){var n=e.isInit,r=e.profileInfo,t=e.changeProfileInfo,a=e.authUserId,s=e.isAuth,i=e.profileStatus,d=e.updateStatus,_=e.posts,f=e.addPost,h=(0,c.Z)(e,ye),m=(0,u.useContext)(p.I);(0,u.useEffect)((function(){(0,we.J)()?m.setIsScrollbarActive(!0):m.setIsScrollbarActive(!1)})),(0,u.useEffect)((function(){n&&(document.title="".concat(r.fullName," | Feelanet"))}),[r]);var x=(0,fe.UO)(),g=x.userId?x.userId:a,b=x.userId==a||!x.userId;(0,u.useEffect)((function(){r&&r.userId===g||g&&function(e,n){h.initializeProfile(e,n)}(g,b)}),[g]);var N=(0,u.useState)(!1),w=(0,o.Z)(N,2),I=w[0],P=w[1];return g||s?n?n?(0,j.jsxs)("div",{className:l.wrap,children:[I&&(0,j.jsx)(v,{ChildComponent:xe,authUserId:a,profileInfo:r,changeProfileInfo:t,deactivateEditMode:function(){P(!1)}}),(0,j.jsxs)("div",{className:l.columns_wrap,children:[(0,j.jsxs)("div",{className:l.column_side,children:[(0,j.jsxs)("div",{className:l.wrap_side+" wrap",children:[(0,j.jsx)(S,{isOwner:b,photo:r.photos.large}),b&&(0,j.jsxs)("button",{className:l.editModeButton+" button",onClick:function(){P(!0)},children:["eng"===m.currentLanguage&&"Edit profile info","ru"===m.currentLanguage&&"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c"]}),!b&&(0,j.jsx)(Ce,{currentUserId:g})]}),b&&(0,j.jsx)("div",{className:l.wrap_side+" wrap",children:(0,j.jsx)(Ne,{currentUserId:g})})]}),(0,j.jsxs)("div",{className:l.column_main,children:[(0,j.jsx)(Q,{userId:g,profileInfo:r,status:i,updateStatus:d,isOwner:b}),(0,j.jsx)(_e,{posts:_,addPost:f,currentUserId:g})]})]})]}):void 0:(0,j.jsx)("div",{className:l.preloaderWrap,children:(0,j.jsx)(H.Z,{})}):(0,j.jsx)(fe.Fg,{to:"../login"})},Se={initializeProfile:i.Fv,changeProfileInfo:i._L,updateStatus:i.Nf,addPost:i.q2},Ze=(0,t.$j)((function(e){return{isInit:(0,s.Ac)(e),profileInfo:(0,s.Rs)(e),profileStatus:(0,s.mW)(e),posts:(0,s.xK)(e),authUserId:(0,a.nR)(e),isAuth:(0,a.Jt)(e)}}),Se)(Ee)},4759:function(e,n,r){r.d(n,{P:function(){return N},C:function(){return w}});var t=r(1413),a=r(5987),s="Inputs_inputWrap__bxhik",i="Inputs_inputWrap_withIcon__xxyLT",o="Inputs_inputWrap_dark__wb1gX",c="Inputs_input__6JgzO",l="Inputs_icon__v2Fgu",u="Inputs_input_error__N+OzZ",d="Inputs_textarea__K0ZBr",p="Inputs_textarea_dark__ibBbA",_="Inputs_checkboxWrap__AZQyn",f="Inputs_checkbox__gnsjA",h="Inputs_checkbox__label__G4bqt",m=r(2791),x=r(9029),g=r(9067),j=r(184),b=["form","field","options","onValueChange","children"],v=["form","field"],N=function(e){var n=e.form,r=e.field,d=e.options,p=e.onValueChange,v=(e.children,(0,a.Z)(e,b)),N=(0,m.useContext)(g.I);d&&d.inputMaxLength&&r.value.length>d.inputMaxLength&&(r.value=r.value.substr(0,d.inputMaxLength)),(0,m.useEffect)((function(){p&&p(r.value)}),[r.value]);var w,I="dark"===N.currentTheme?s+" "+o:s;switch(v.type){case"text":I=d&&d.icon?I+" "+i:I,w=d&&d.showErrors&&n.errors[r.name]?c+" "+u:c;break;case"checkbox":I=_,w=f;break;default:w=d&&d.showErrors&&n.errors[r.name]?c+" "+u:c}return(0,j.jsxs)("div",{className:I,children:[(0,j.jsx)("input",(0,t.Z)({style:{border:d&&d.border,padding:d&&d.padding},name:r.name,value:r.value,onChange:n.handleChange,className:w,checked:r.checked},v)),d&&d.icon&&(0,j.jsx)(x.O,{className:l,id:d.icon}),v.label&&(0,j.jsx)("span",{className:h,children:v.label})]})},w=function(e){var n=e.form,r=e.field,t=(0,a.Z)(e,v),s=(0,m.useContext)(g.I),i=m.createRef();(0,m.useEffect)((function(){n.values[r.name]||o()}),[n.values]);var o=function(){i.current.style.height="".concat(t.defaultHeight+2,"px")},c=(t.inputType,"dark"===s.currentTheme?d+" "+p:d);return(0,j.jsx)("textarea",{ref:i,style:{height:"".concat(t.defaultHeight,"px"),maxHeight:t.maxHeight},type:t.type,name:r.name,onChange:function(e){n.handleChange(e),function(e){i.current.style.height="".concat(t.defaultHeight+2,"px");var n="".concat(e.target.scrollHeight,"px");i.current.style.height=n,t.onHeightChange&&t.onHeightChange()}(e)},onFocus:function(){t.onFocus&&t.onFocus()},onBlur:function(){t.onBlur&&t.onBlur()},value:r.value,className:c,placeholder:t.placeholder})}},5556:function(e,n,r){r.d(n,{Z:function(){return o}});var t=r(695),a="Preloader_wrap__BkHvc",s="Preloader_gif__18c7L",i=r(184),o=function(e){return(0,i.jsx)("div",{className:a,children:(0,i.jsx)("img",{className:s,src:t})})}},5309:function(e,n,r){r.d(n,{Z:function(){return u}});var t=r(9029),a="WarningWithPopup_wrapRelative__sNJ98",s="WarningWithPopup_popupWrap__nVpZk",i="WarningWithPopup_icon__+hTA9",o="WarningWithPopup_popup__mUVXv",c="WarningWithPopup_text__mjsA2",l=r(184),u=function(e){return(0,l.jsxs)("div",{className:a,children:[(0,l.jsx)(t.O,{className:i,id:"warning"}),(0,l.jsx)("div",{className:s,children:(0,l.jsx)("div",{className:o,children:(0,l.jsx)("span",{className:c,children:e.error||e.children})})})]})}},6613:function(e,n,r){r.d(n,{J:function(){return t}});var t=function(){return document.body.clientWidth<window.innerWidth}},5689:function(e,n,r){r.d(n,{q9:function(){return t},sx:function(){return a},BS:function(){return s},Ei:function(){return i},oH:function(){return o},mQ:function(){return c}});var t=function(e,n){var r="Field is required";return"ru"===n&&(r="\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),e?void 0:r},a=function(e){return e?void 0:" "},s=function(e,n,r){var t=null;return e&&e.length>n&&(t="Must be ".concat(n," characters or less")),e&&e.length>n&&"ru"===r&&(t="\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u0441\u0442\u0440\u043e\u043a\u0438 - ".concat(n," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")),t},i=function(e,n,r){var t=null;return e&&e.length<n&&(t="Must be ".concat(n," characters or less")),e&&e.length<n&&"ru"===r&&(t="\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u0441\u0442\u0440\u043e\u043a\u0438 - ".concat(n," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")),t},o=function(e,n){var r;return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)||(r="Invalid Email address","ru"===n&&(r="\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 Email \u0430\u0434\u0440\u0435\u0441")),r},c=function(e,n){var r;return 0===e.length||/^[A-Z0-9._%+-]+\.[A-Z0-9/._-]{2,1000}$/i.test(e)||(r="Invalid URL","ru"===n&&(r="\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 URL \u0430\u0434\u0440\u0435\u0441")),r}},695:function(e,n,r){e.exports=r.p+"static/media/preloading.20a21d3c5d14bc614403.gif"}}]);
//# sourceMappingURL=810.611d6792.chunk.js.map