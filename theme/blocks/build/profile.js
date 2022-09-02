!function(){"use strict";var e=window.wp.element,t=(window.React,window.wp.blocks),a=window.wp.blockEditor,l=window.wp.components;(0,t.registerBlockType)("theme/profile",{title:"人物紹介",icon:"admin-users",category:"layout",attributes:{name:{type:"string",default:"",source:"text",selector:'[data-gb="name"]'},position:{type:"string",default:"",source:"text",selector:'[data-gb="position"]'},description:{type:"string",default:"",source:"html",selector:'[data-gb="description"]'},image:{type:"object",default:null},linkHref:{type:"string",default:""},linkText:{type:"string",default:""}},edit:t=>{const{className:n,attributes:{name:i,position:r,description:s,image:c,linkHref:o,linkText:m},setAttributes:d}=t,p=n.replace(/\s.+?$/,"");return(0,e.createElement)("div",{className:n},(0,e.createElement)("div",{className:`${p}__thumb`},(0,e.createElement)(a.MediaUploadCheck,null,null==c&&(0,e.createElement)(a.MediaUpload,{onSelect:e=>d({image:e}),allowedTypes:["image"],render:t=>{let{open:a}=t;return(0,e.createElement)(e.Fragment,null,(0,e.createElement)("div",{className:`${p}__picture`}),(0,e.createElement)(l.Button,{className:"image-button",isLink:!0,onClick:a},"画像をアップロード"))}}),c&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)("picture",{className:`${p}__picture`},(0,e.createElement)("img",{src:c.url,alt:i,className:`${p}__image`})),(0,e.createElement)(l.Button,{onClick:()=>{d({image:null})},isLink:!0,isDestructive:!0},"画像を削除")))),(0,e.createElement)("div",{className:`${p}__data`},(0,e.createElement)(l.TextControl,{className:`${p}_name`,value:i,onChange:e=>d({name:e}),placeholder:"名前",label:"名前"}),(0,e.createElement)(l.TextControl,{className:`${p}__position`,value:r,onChange:e=>d({position:e}),placeholder:"役職・肩書き",label:"役職・肩書き"}),(0,e.createElement)(a.RichText,{className:`${p}__description`,value:s,onChange:e=>d({description:e}),placeholder:"説明"}),(0,e.createElement)(a.URLInput,{className:`${p}__href`,value:o,onChange:e=>d({linkHref:e}),placeholder:"https://test.com/",label:"URL（任意）"}),(0,e.createElement)(l.TextControl,{className:`${p}__link`,value:m,onChange:e=>d({linkText:e}),placeholder:"サイト名",label:"サイト名（任意）"})))},save:t=>{const{className:l="wp-block-theme-profile",attributes:{name:n,position:i,description:r,image:s,linkHref:c,linkText:o}}=t,m=l.replace(/\s.+?$/,"");return(0,e.createElement)("div",{className:l},(0,e.createElement)("div",{className:`${m}__thumb`},s&&(0,e.createElement)("picture",{className:`${m}__picture`},(0,e.createElement)("img",{src:s.url,alt:n,className:`${m}__image`}))),(0,e.createElement)("div",{className:`${m}__data`},(0,e.createElement)("div",{className:`${m}__name`,"data-gb":"name"},n),(0,e.createElement)("div",{className:`${m}__position`,"data-gb":"position"},i),(0,e.createElement)(a.RichText.Content,{tagName:"div",className:`${m}__description`,"data-gb":"description",value:r}),c&&(0,e.createElement)("a",{className:`${m}__link`,href:c,target:"_blank",rel:"noopener noreferrer"},o||c)))}})}();