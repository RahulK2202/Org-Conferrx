import{o as n,c as i,a as e,g as E,e as s,s as U,h as o,i as D,r as w,j as $,b as C,t as g,k as V,w as _,l as b,m as S,f as j,D as F,F as N,n as P,p as T,q as z}from"./index.c85d7443.js";import{F as G}from"./FileUploader.62053cc9.js";const I={class:"border-b-2 w-full h-[70px] flex justify-around items-center fixed"},L={class:"flex justify-center items-center"},O={class:"flex justify-center items-center gap-6 text-sm hover:cursor-pointer"},M=["src"],q={key:1},J={class:"rounded-full flex justify-center items-center w-7 h-7 bg-gray-300"},Q={key:1,class:"hover:overline decoration-4 decoration-red-800"},Y={__name:"Navbar",props:{user:Object},emits:["toggle-dialog"],setup(p,{emit:a}){const u=a,d=()=>{u("toggle-dialog")};return(c,f)=>(n(),i("div",I,[f[1]||(f[1]=e("div",{class:"w-[70px]"},[e("img",{src:"",alt:"Logo"})],-1)),e("div",L,[e("ul",O,[f[0]||(f[0]=E('<li class="hover:overline decoration-4 decoration-red-800 duration-1000"> Home </li><li class="hover:overline decoration-4 decoration-red-800"> Agenda </li><li class="hover:overline decoration-4 decoration-red-800"> Speakers </li><li class="hover:overline decoration-4 decoration-red-800"> Sponsors </li><li class="hover:overline decoration-4 decoration-red-800"> Venue </li>',5)),s(U).isLoggedIn?(n(),i("li",{key:0,class:"rounded-full flex justify-center items-center",onClick:d},[p.user&&p.user.user_image?(n(),i("img",{key:0,src:p.user.user_image,alt:"User Image",class:"rounded-full w-7 h-7"},null,8,M)):(n(),i("p",q,[e("div",J,[o(s(D),{name:"user",class:"w-5 h-5"})])]))])):(n(),i("li",Q," Login "))])])]))}};var A="/assets/e_desk/home/bg.png";function H(p,a){const u={month:"short",day:"numeric",year:"numeric"},d=new Date(p),c=new Date(a);d.getDate();const f=c.getDate(),h=new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}),y=new Intl.DateTimeFormat("en-US",{year:"numeric"});if(d.getMonth()===c.getMonth()&&d.getFullYear()===c.getFullYear())return`${h.format(d)} \u2013 ${f}, ${y.format(c)}`;{const x=new Intl.DateTimeFormat("en-US",u),m=new Intl.DateTimeFormat("en-US",u);return`${x.format(d)} \u2013 ${m.format(c)}`}}const K={class:"flex flex-col xl:flex-row justify-between xl:mx-64 mt-36 mb-28"},W={class:"xl:block flex items-center flex-col w-full xl:w-1/2"},X={class:"flex flex-col gap-5"},Z={class:"font-bold",style:{"font-size":"45px"}},ee={class:"flex gap-2"},te={class:"flex gap-2"},le={key:0,class:"border-2 p-2 w-fit hover:cursor-not-allowed"},ae={class:"w-full sm:flex sm:justify-center sm:items-center xl:block xl:w-1/2"},se={class:"sm:w-3/6 xl:w-full"},oe=["src"],ne={class:"flex flex-col gap-5"},ie={class:"flex gap-5"},re={class:"flex gap-5"},de={class:"flex gap-5"},ue={class:"w-1/2"},ce={class:"w-1/2"},me={class:"flex gap-5"},pe={class:"w-1/2"},fe={class:"w-1/2"},ve={class:"flex"},_e={key:0},ge={key:1},he={key:2},be={key:3},ye={class:"w-full flex justify-between"},xe={__name:"Banner",props:{event:Object},setup(p){const a=w({first_name:"",last_name:"",mobile:"",email:"",prifix:"",bussines:"",role:"",chapter:"",image:""}),u=w(!1),d=p,c=$(()=>H(d.event.start_date,d.event.end_date)),f=$(()=>d.event.start_date?new Date(d.event.start_date).toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0}):"");let h=C({url:"e_desk.e_desk.api.frontend_api.Getlist",method:"GET",makeParams(){return{doctype:["Business Category","Salutation","Chapter","Roles"]}},onSuccess(r){console.log(r,"Response from server"),u.value=!0}});const y=()=>{h.fetch()},x=()=>{a.value.confer=d.event.name,console.log(a,"ppppppppppppppppppppppp"),C({url:"e_desk.e_desk.api.frontend_api.ParticipantCreate",method:"POST",makeParams(){return{data:a.value}},onSuccess(t){console.log(t,"Response from server"),u.value=!1}}).fetch()};let m={Business:{},Category:{},Roles:{},Salutation:{},Chapter:{}};const v=$(()=>h.data&&typeof h.data=="object"?(console.log("Structured list with label and value:",h.data),h.data):m);return(r,t)=>(n(),i(N,null,[e("div",K,[e("div",W,[e("div",X,[e("p",Z,g(p.event.name),1),e("p",ee,[o(s(D),{class:"w-5 h-5",name:"calendar"}),V(" "+g(c.value)+" ",1),o(s(D),{class:"w-5 h-5",name:"clock"}),V(" "+g(f.value),1)]),e("p",te,[o(s(D),{class:"w-5 h-5",name:"map-pin"}),V(" "+g(p.event.venuelocation),1)]),new Date(p.event.registration_close_date)<new Date?(n(),i("p",le," Event has ended ")):(n(),i("p",{key:1,class:"border-2 p-2 w-fit hover:cursor-pointer",onClick:y}," Register Now "))])]),e("div",ae,[e("div",se,[e("img",{src:p.event.banner_image,alt:"Conference Image"},null,8,oe)])])]),t[14]||(t[14]=e("div",null,[e("img",{class:"",src:A,alt:"Background Image"})],-1)),o(s(F),{modelValue:u.value,"onUpdate:modelValue":t[10]||(t[10]=l=>u.value=l)},{"body-title":_(()=>t[11]||(t[11]=[e("h3",null,"Register",-1)])),"body-content":_(()=>[e("div",ne,[e("div",ie,[o(s(b),{type:"text",size:"sm",variant:"subtle",placeholder:"First Name",disabled:!1,label:"First Name",modelValue:a.value.first_name,"onUpdate:modelValue":t[0]||(t[0]=l=>a.value.first_name=l)},null,8,["modelValue"]),o(s(b),{type:"text",size:"sm",variant:"subtle",placeholder:"Last Name",disabled:!1,label:"Last Name",modelValue:a.value.last_name,"onUpdate:modelValue":t[1]||(t[1]=l=>a.value.last_name=l)},null,8,["modelValue"])]),e("div",re,[o(s(b),{type:"text",size:"sm",variant:"subtle",placeholder:"Mobile",disabled:!1,label:"Mobile Phone",modelValue:a.value.mobile,"onUpdate:modelValue":t[2]||(t[2]=l=>a.value.mobile=l)},null,8,["modelValue"]),o(s(b),{type:"text",size:"sm",variant:"subtle",placeholder:"Email",disabled:!1,label:"Email",modelValue:a.value.email,"onUpdate:modelValue":t[3]||(t[3]=l=>a.value.email=l)},null,8,["modelValue"])]),e("div",de,[e("div",ue,[o(s(b),{type:"autocomplete",options:v.value.Salutation,size:"sm",variant:"subtle",placeholder:"Prefix",disabled:!1,label:"Prefix",modelValue:a.value.prifix,"onUpdate:modelValue":t[4]||(t[4]=l=>a.value.prifix=l)},null,8,["options","modelValue"])]),e("div",ce,[o(s(b),{type:"autocomplete",options:v.value["Business Category"],size:"sm",variant:"subtle",placeholder:"Business Category",disabled:!1,label:"Business Category",modelValue:a.value.bussines,"onUpdate:modelValue":t[5]||(t[5]=l=>a.value.bussines=l)},null,8,["options","modelValue"])])]),e("div",me,[e("div",pe,[o(s(b),{type:"autocomplete",options:v.value.Roles,size:"sm",variant:"subtle",placeholder:"Role",disabled:!1,label:"Role",modelValue:a.value.role,"onUpdate:modelValue":t[6]||(t[6]=l=>a.value.role=l)},null,8,["options","modelValue"])]),e("div",fe,[o(s(b),{type:"autocomplete",options:v.value.Chapter,size:"sm",variant:"subtle",placeholder:"Chapter",disabled:!1,label:"Chapter",modelValue:a.value.chapter,"onUpdate:modelValue":t[7]||(t[7]=l=>a.value.chapter=l)},null,8,["options","modelValue"])])]),o(s(G),{fileTypes:["image/*"],validateFile:l=>{},onSuccess:t[8]||(t[8]=l=>{console.log(l),a.value.image=l})},{default:_(({file:l,uploading:R,progress:k,uploaded:Be,message:Ee,error:Pe,total:Te,success:ze,openFileSelector:B})=>[o(s(S),{onClick:B,loading:R,class:"bg-green"},{default:_(()=>[e("div",ve,[k==100?(n(),i("p",_e," Uploaded ")):k>0&&k<100?(n(),i("p",ge," Uploading ")):(n(),i("p",he," Upload ")),k>0&&k<100?(n(),i("p",be,g(k)+"% ",1)):j("",!0)])]),_:2},1032,["onClick","loading"])]),_:1})])]),actions:_(()=>[e("div",ye,[o(s(S),{class:"ml-2",onClick:t[9]||(t[9]=l=>u.value=!1)},{default:_(()=>t[12]||(t[12]=[V(" Close ")])),_:1}),o(s(S),{variant:"solid",onClick:x},{default:_(()=>t[13]||(t[13]=[V(" Confirm ")])),_:1})])]),_:1},8,["modelValue"])],64))}},ke={class:"h-[75px]"},we={key:0},Ve={key:0,class:""},$e={class:"flex justify-between"},Ce={class:"flex justify-between"},De={class:"flex justify-between"},Se={key:1,class:"w-full h-full flex justify-center"},Ue=["src"],je={key:2},Fe={class:"flex justify-center"},Ne={key:0},Re={key:1},Le={__name:"Event",setup(p){const a=P(),u=w(!1),d=w(!0),c=w(!1),f=C({url:"e_desk.e_desk.api.frontend_api.GetValue",method:"GET",makeParams(){return{doctype:"Confer",filter:JSON.stringify({name:a.params.id}),field:["name","start_date","end_date","venuelocation","banner_image","registration_close_date"],dict:!0}},auto:!0,onSuccess(){d.value=!1}});let h=$(()=>!d.value&&f.data&&typeof f.data=="object"?f.data:null);const y=C({url:"e_desk.e_desk.api.frontend_api.GetValue",method:"GET",makeParams(){return{doctype:"User",filter:JSON.stringify({name:U.user}),field:["user_image","participant_id"],dict:!0}},auto:!0});let x=$(()=>y.data&&typeof y.data=="object"?y.data:null);const m=w(null);return T(()=>{var v;return(v=x.value)==null?void 0:v.participant_id},v=>{v&&C({url:"e_desk.e_desk.api.frontend_api.GetDoc",method:"GET",makeParams(){return{doctype:"Participant",name:v}},auto:!0,onSuccess(r){console.log("Participant data:",r),m.value=r},onError(r){console.error("Error fetching participant data:",r)}})},{immediate:!0}),(v,r)=>{const t=z("Button");return n(),i(N,null,[e("div",ke,[o(Y,{onToggleDialog:r[0]||(r[0]=l=>u.value=!0),user:s(x)},null,8,["user"])]),s(h)?(n(),i("div",we,[o(xe,{event:s(h)},null,8,["event"]),o(s(F),{modelValue:u.value,"onUpdate:modelValue":r[2]||(r[2]=l=>u.value=l)},{"body-title":_(()=>r[3]||(r[3]=[e("h3",null,"Profile",-1)])),"body-content":_(()=>[e("div",null,[m.value&&!c.value?(n(),i("div",Ve,[e("div",$e,[e("p",null,"Name: "+g(m.value.prefix)+" "+g(m.value.first_name),1),e("p",null,"Business Category: "+g(m.value.business_category),1)]),e("div",Ce,[e("p",null,"Chapter: "+g(m.value.chapter),1),e("p",null,"Email: "+g(m.value.e_mail),1)]),e("div",De,[e("p",null,"Mobile: "+g(m.value.mobile_number),1)])])):m.value&&c.value?(n(),i("div",Se,[e("img",{src:m.value.qr,alt:""},null,8,Ue)])):(n(),i("p",je,"Loading participant data..."))])]),actions:_(()=>[e("div",Fe,[o(t,{variant:"solid",onClick:r[1]||(r[1]=l=>c.value=!c.value)},{default:_(()=>[c.value?(n(),i("span",Ne," hide Qr ")):(n(),i("span",Re," View Qr "))]),_:1})])]),_:1},8,["modelValue"])])):j("",!0)],64)}}};export{Le as default};
