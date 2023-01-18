"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[661],{1661:function(t,e,n){n.r(e),n.d(e,{default:function(){return z}});var a=n(9439),s=n(2791),r=n(9434),o=n(208),c=n(9126),i=n(8174),u="ContactForm_phonebook__form__XB6ku",l="ContactForm_phonebook__label__PN-+-",_="ContactForm_icon__wGMYw",m="ContactForm_phonebook__input__efLHZ",d="ContactForm_phonebook__button__639X2",h=function(t){return t.contacts},p=function(t){return t.filter},f=n(184),b=function(){var t=(0,s.useState)(""),e=(0,a.Z)(t,2),n=e[0],p=e[1],b=(0,s.useState)(""),x=(0,a.Z)(b,2),C=x[0],j=x[1],N=(0,r.v9)(h).items.map((function(t){return t.name})),k=(0,r.I0)(),v=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":p(a);break;case"number":j(a);break;default:return}},I=function(){p(""),j("")};return(0,f.jsxs)("form",{className:u,onSubmit:function(t){t.preventDefault();var e={name:n,number:C};N.includes(n)?i.Am.error("".concat(n," is already in contacts.")):(k((0,o.uK)(e)),I())},children:[(0,f.jsxs)("label",{htmlFor:"nameInputId",className:l,children:[(0,f.jsx)(c._Tb,{className:_})," Name"]}),(0,f.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",id:"nameInputId",required:!0,onChange:v,className:m,value:n}),(0,f.jsxs)("label",{htmlFor:"telInputId",className:l,children:[(0,f.jsx)(c.lfG,{className:_})," Number"]}),(0,f.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",id:"telInputId",required:!0,onChange:v,className:m,value:C}),(0,f.jsx)("button",{type:"submit",className:d,children:"Add Contact"})]})},x=n(6895),C="Filter_filterInput__1Cysk",j=function(){var t=(0,r.v9)(p),e=(0,r.I0)();return(0,f.jsx)("label",{children:(0,f.jsx)("input",{type:"text",value:t,onChange:function(t){e((0,x.x)(t.currentTarget.value))},className:C})})},N=n(6673),k=n(6856),v="ContactList_contacts__list__hSN0M",I="ContactList_error__uCB2f",g="ContactList_error_icon__Dx7D1",y="ContactListItem_contacts__listItem__LyXHe",F="ContactListItem_contacts__delBtn__+cklu",L=function(t){var e=t.contact,n=e.id,a=e.name,s=e.number,c=(0,r.I0)();return(0,f.jsxs)("li",{className:y,children:[(0,f.jsxs)("span",{children:[a,": ",s]}),(0,f.jsx)("button",{type:"button",className:F,onClick:function(){return function(t){c((0,o.GK)(t))}(n)},children:"Delete"})]})},w=function(){var t=(0,r.v9)(h),e=t.items,n=t.isLoading,a=t.error,c=(0,r.v9)(p),i=(0,r.I0)(),u=c.toLowerCase(),l=e.filter((function(t){return t.name.toLowerCase().includes(u)}));return(0,s.useEffect)((function(){i((0,o.yF)())}),[i]),(0,f.jsxs)("ul",{className:v,children:[n&&(0,f.jsx)(N.a,{}),a&&(0,f.jsxs)("div",{className:I,children:[(0,f.jsx)(k.Fbu,{className:g})," ",a]}),l.length>0&&l.map((function(t){return(0,f.jsx)(L,{contact:t},t.id)}))]})},A="Contacts_phonebook__title__ylLCu",Z="Contacts_contacts__title__ZEWHT",z=function(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h1",{className:A,children:"Phonebook"}),(0,f.jsx)(b,{}),(0,f.jsx)("h2",{className:Z,children:"Contacts"}),(0,f.jsx)(j,{}),(0,f.jsx)(w,{})]})}}}]);
//# sourceMappingURL=661.c453b2be.chunk.js.map