import{_ as v,m as _,D as k,q as r,o as u,c as p,v as C,x,y as w,h as t,w as l,a as y,k as n,t as B,d as h,f,F}from"./index.c85d7443.js";import{F as U}from"./FileUploader.62053cc9.js";const I={name:"InsertImage",props:["editor"],expose:["openDialog"],data(){return{addVideoDialog:{url:"",file:null,show:!1}}},components:{Button:_,Dialog:k,FileUploader:U},methods:{openDialog(){this.addVideoDialog.show=!0},onVideoSelect(i){let e=i.target.files[0];!e||(this.addVideoDialog.file=e)},addVideo(i){this.editor.chain().focus().insertContent(`<video src="${i}"></video>`).run(),this.reset()},reset(){this.addVideoDialog=this.$options.data().addVideoDialog}}},N={class:"flex items-center space-x-2"},S=["src"];function A(i,e,L,P,o,a){const s=r("Button"),V=r("FileUploader"),g=r("Dialog");return u(),p(F,null,[C(i.$slots,"default",x(w({onClick:a.openDialog}))),t(g,{options:{title:"Add Video"},modelValue:o.addVideoDialog.show,"onUpdate:modelValue":e[2]||(e[2]=d=>o.addVideoDialog.show=d),onAfterLeave:a.reset},{"body-content":l(()=>[t(V,{"file-types":"video/*",onSuccess:e[0]||(e[0]=d=>o.addVideoDialog.url=d.file_url)},{default:l(({file:d,progress:c,uploading:m,openFileSelector:D})=>[y("div",N,[t(s,{onClick:D},{default:l(()=>[n(B(m?`Uploading ${c}%`:o.addVideoDialog.url?"Change Video":"Upload Video"),1)]),_:2},1032,["onClick"]),o.addVideoDialog.url?(u(),h(s,{key:0,onClick:()=>{o.addVideoDialog.url=null,o.addVideoDialog.file=null}},{default:l(()=>e[3]||(e[3]=[n(" Remove ")])),_:2},1032,["onClick"])):f("",!0)])]),_:1}),o.addVideoDialog.url?(u(),p("video",{key:0,src:o.addVideoDialog.url,class:"mt-2 w-full rounded-lg",type:"video/mp4",controls:""},null,8,S)):f("",!0)]),actions:l(()=>[t(s,{variant:"solid",onClick:e[1]||(e[1]=d=>a.addVideo(o.addVideoDialog.url))},{default:l(()=>e[4]||(e[4]=[n(" Insert Video ")])),_:1}),t(s,{onClick:a.reset},{default:l(()=>e[5]||(e[5]=[n("Cancel")])),_:1},8,["onClick"])]),_:1},8,["modelValue","onAfterLeave"])],64)}var q=v(I,[["render",A]]);export{q as default};
