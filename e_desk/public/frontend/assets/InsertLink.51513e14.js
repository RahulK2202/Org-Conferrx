import{n as d,_ as m,v as g,D as L,m as i,o as f,c as p,x as D,y as h,z as c,b as l,w as a,E as v,d as _,F as w}from"./index.65942a57.js";const x={name:"InsertLink",props:["editor"],components:{Button:m,FormControl:g,Dialog:L},data(){return{setLinkDialog:{url:"",show:!1}}},methods:{openDialog(){let t=this.editor.getAttributes("link").href;t&&(this.setLinkDialog.url=t),this.setLinkDialog.show=!0},setLink(t){t===""?this.editor.chain().focus().extendMarkRange("link").unsetLink().run():this.editor.chain().focus().extendMarkRange("link").setLink({href:t}).run(),this.setLinkDialog.show=!1,this.setLinkDialog.url=""},reset(){this.setLinkDialog=this.$options.data().setLinkDialog}}};function V(t,e,C,y,n,s){const r=i("FormControl"),u=i("Button"),k=i("Dialog");return f(),p(w,null,[D(t.$slots,"default",h(c({onClick:s.openDialog}))),l(k,{options:{title:"Set Link"},modelValue:n.setLinkDialog.show,"onUpdate:modelValue":e[3]||(e[3]=o=>n.setLinkDialog.show=o),onAfterLeave:s.reset},{"body-content":a(()=>[l(r,{type:"text",label:"URL",modelValue:n.setLinkDialog.url,"onUpdate:modelValue":e[0]||(e[0]=o=>n.setLinkDialog.url=o),onKeydown:e[1]||(e[1]=v(o=>s.setLink(o.target.value),["enter"]))},null,8,["modelValue"])]),actions:a(()=>[l(u,{variant:"solid",onClick:e[2]||(e[2]=o=>s.setLink(n.setLinkDialog.url))},{default:a(()=>e[4]||(e[4]=[_(" Save ")])),_:1})]),_:1},8,["modelValue","onAfterLeave"])],64)}var F=d(x,[["render",V]]);export{F as default};