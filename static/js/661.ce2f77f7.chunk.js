"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[661],{3793:function(e,t,n){n.d(t,{y:function(){return l}});var a=n(1087),s="LoggedOut_unauthorized__ahyCH",r="LoggedOut_title__668wH",o="LoggedOut_notification__bxP1z",c="LoggedOut_link__4l8SF",i=n(184),l=function(){return(0,i.jsxs)("div",{className:s,children:[(0,i.jsx)("h2",{className:r,children:"Hi there, stranger!"}),(0,i.jsx)("p",{className:o,children:"You need to be signed in to be able to use the Phonebook."}),(0,i.jsxs)("p",{className:o,children:["If you do not have an account, you can ",(0,i.jsx)(a.rU,{to:"/register",className:c,children:"register"})," here."]}),(0,i.jsxs)("p",{className:o,children:["If you already have an account, please ",(0,i.jsx)(a.rU,{to:"/login",className:c,children:"sign in"})," here."]})]})}},1661:function(e,t,n){n.r(t),n.d(t,{default:function(){return H}});var a=n(9434),s=n(4289),r=n(9439),o=n(2791),c=n(208),i=function(e){return e.contacts},l=function(e){return e.filter},u=n(9126),_=n(8174),d="ContactForm_phonebook__form__XB6ku",m="ContactForm_phonebook__label__PN-+-",h="ContactForm_icon__wGMYw",p="ContactForm_phonebook__input__efLHZ",b="ContactForm_phonebook__button__639X2",f=n(184),x=function(){var e=(0,o.useState)(""),t=(0,r.Z)(e,2),n=t[0],s=t[1],l=(0,o.useState)(""),x=(0,r.Z)(l,2),j=x[0],N=x[1],C=(0,a.v9)(i).items.map((function(e){return e.name})),g=(0,a.I0)(),v=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":s(a);break;case"number":N(a);break;default:return}},k=function(){s(""),N("")};return(0,f.jsxs)("form",{className:d,onSubmit:function(e){e.preventDefault();var t={name:n,number:j};C.includes(n)?_.Am.error("".concat(n," is already in contacts.")):(g((0,c.uK)(t)),k())},children:[(0,f.jsxs)("label",{htmlFor:"nameInputId",className:m,children:[(0,f.jsx)(u._Tb,{className:h})," Name"]}),(0,f.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",id:"nameInputId",required:!0,onChange:v,className:p,value:n}),(0,f.jsxs)("label",{htmlFor:"telInputId",className:m,children:[(0,f.jsx)(u.lfG,{className:h})," Number"]}),(0,f.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",id:"telInputId",required:!0,onChange:v,className:p,value:j}),(0,f.jsx)("button",{type:"submit",className:b,children:"Add Contact"})]})},j=n(6895),N="Filter_filterInput__1Cysk",C=function(){var e=(0,a.v9)(l),t=(0,a.I0)();return(0,f.jsx)("label",{children:(0,f.jsx)("input",{type:"text",value:e,onChange:function(e){t((0,j.x)(e.currentTarget.value))},className:N,placeholder:"Filter by name"})})},g=n(6673),v=n(6856),k="ContactList_contacts__list__hSN0M",y="ContactList_error__uCB2f",I="ContactList_error_icon__Dx7D1",L="ContactListItem_contacts__listItem__LyXHe",F="ContactListItem_contacts__delBtn__+cklu",w=function(e){var t=e.contact,n=t.id,s=t.name,r=t.number,o=(0,a.I0)();return(0,f.jsxs)("li",{className:L,children:[(0,f.jsxs)("span",{children:[s,": ",r]}),(0,f.jsx)("button",{type:"button",className:F,onClick:function(){return function(e){o((0,c.GK)(e))}(n)},children:"Delete"})]})},A=function(){var e=(0,a.v9)(i),t=e.items,n=e.isLoading,s=e.error,r=(0,a.v9)(l),u=(0,a.I0)(),_=r.toLowerCase(),d=t.filter((function(e){return e.name.toLowerCase().includes(_)}));return(0,o.useEffect)((function(){u((0,c.yF)())}),[u]),(0,f.jsxs)("ul",{className:k,children:[n&&(0,f.jsx)(g.a,{}),s&&(0,f.jsxs)("div",{className:y,children:[(0,f.jsx)(v.Fbu,{className:I})," ",s]}),d.length>0&&d.map((function(e){return(0,f.jsx)(w,{contact:e},e.id)}))]})},z=n(3793),Z={phonebook:"Contacts_phonebook__G9bQK",title:"Contacts_title__LxdN4"},H=function(){var e=(0,a.v9)(s.Q);return(0,f.jsx)("section",{className:Z.phonebook,children:e?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(x,{}),(0,f.jsxs)("div",{className:Z.contactList,children:[(0,f.jsx)("h2",{className:Z.title,children:"Your Contacts"}),(0,f.jsx)(C,{}),(0,f.jsx)(A,{})]})]}):(0,f.jsx)(z.y,{})})}}}]);
//# sourceMappingURL=661.ce2f77f7.chunk.js.map