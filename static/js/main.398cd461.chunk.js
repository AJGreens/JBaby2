(this.webpackJsonpPlatesome=this.webpackJsonpPlatesome||[]).push([[0],{137:function(e,a,n){},322:function(e,a,n){"use strict";n.r(a);var t=n(10),r=n(1),s=n(75),i=n.n(s),c=n(42),o=n.n(c),l=n(76),g=n(20),u=n(326),m=n(333),d=n(329),b=n(332),v=n(327),j=n(131),h=(n(176),n(179),j.a.initializeApp({apiKey:"AIzaSyAkCBgse0-3qA5fluQU9lHviYchQhWuAT0",authDomain:"ajgreens.firebaseapp.com",projectId:"ajgreens",storageBucket:"ajgreens.appspot.com",messagingSenderId:"514241196972",appId:"1:514241196972:web:f5b0b118347a1b21d54009"})),p=h.auth(),f=new j.a.auth.GoogleAuthProvider,O=n(3),x=Object(r.createContext)();function y(e){var a=e.children,n=Object(r.useState)(),t=Object(g.a)(n,2),s=t[0],i=t[1],c=Object(r.useState)("no"),o=Object(g.a)(c,2),l=o[0],u=o[1],m=Object(r.useState)(!0),d=Object(g.a)(m,2),b=d[0],v=d[1];Object(r.useEffect)((function(){p.onAuthStateChanged((function(e){i(e),v(!1)}))}),[]);var j={signUp:function(e,a){return p.createUserWithEmailAndPassword(e,a)},signIn:function(e,a){return p.signInWithEmailAndPassword(e,a)},signInGoogle:function(){return p.signInWithPopup(f)},signOut:function(){return p.signOut()},currUser:s,dummyAccount:l,setDummyAccount:u};return Object(O.jsx)(x.Provider,{value:j,children:!b&&a})}var C=n(24),L=n(36),k=(n(137),n.p+"static/media/logo.a669944b.png");var P=function(){var e=Object(r.useContext)(x),a=e.signUp,n=e.setDummyAccount,t=(e.dummyAccount,e.signOut,e.currUser,Object(r.useRef)()),s=Object(r.useRef)(),i=Object(r.useRef)(),c=Object(C.g)(),j=Object(r.useState)(),h=Object(g.a)(j,2),p=h[0],f=h[1];function y(){return(y=Object(l.a)(o.a.mark((function e(r){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n("no"),r.preventDefault(),s.current.value===i.current.value){e.next=6;break}f("Passwords do not match"),e.next=20;break;case 6:if(!(s.current.value.length<6)){e.next=10;break}f("Password must be at least 6 characters"),e.next=20;break;case 10:return f(""),e.prev=11,e.next=14,a(t.current.value,s.current.value);case 14:c.push("/"),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(11),f("Email already in use");case 20:case"end":return e.stop()}}),e,null,[[11,17]])})))).apply(this,arguments)}return Object(O.jsx)("div",{className:"parent",children:Object(O.jsxs)("div",{className:"child",children:[Object(O.jsx)("div",{className:"headings",children:Object(O.jsx)("img",{src:k,alt:"Playtful"})}),Object(O.jsx)(u.a,{children:Object(O.jsx)(m.a,{children:Object(O.jsx)(m.a.Body,{children:Object(O.jsxs)(d.a,{onSubmit:function(e){return y.apply(this,arguments)},children:[Object(O.jsx)("h3",{className:"mb-4 text-center",children:"Sign up"}),p&&Object(O.jsx)(b.a,{variant:"danger",children:p}),Object(O.jsxs)(d.a.Group,{className:"mb-3",children:[Object(O.jsx)(d.a.Label,{children:"Email"}),Object(O.jsx)(d.a.Control,{type:"email",required:!0,ref:t})]}),Object(O.jsxs)(d.a.Group,{className:"mb-3",children:[Object(O.jsx)(d.a.Label,{children:"Password"}),Object(O.jsx)(d.a.Control,{type:"password",required:!0,ref:s})]}),Object(O.jsxs)(d.a.Group,{className:"mb-3",children:[Object(O.jsx)(d.a.Label,{children:"Confirm Password"}),Object(O.jsx)(d.a.Control,{type:"password",required:!0,ref:i})]}),Object(O.jsxs)("div",{className:"text-center",children:[Object(O.jsx)(v.a,{className:"mt-3",style:{width:"50%"},type:"submit",children:"Sign up"}),Object(O.jsxs)("p",{className:"mt-2",children:["Already have an account? ",Object(O.jsx)(L.b,{to:"/signin",children:"Sign In"})]})]})]})})})})]})})};var S=function(){var e=Object(r.useContext)(x),a=e.signIn,n=e.signInGoogle,t=e.signUp,s=(e.dummyAccount,e.setDummyAccount),i=(e.signOut,e.currUser,Object(r.useRef)()),c=Object(r.useRef)(),j=Object(C.g)(),h=Object(r.useState)(),p=Object(g.a)(h,2),f=p[0],y=p[1];function P(){return(P=Object(l.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s("no"),n.preventDefault(),e.prev=2,y(""),e.next=6,a(i.current.value,c.current.value);case 6:j.push("/"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),y("Failed to Login");case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}function S(){return(S=Object(l.a)(o.a.mark((function e(a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s("no"),a.preventDefault(),e.prev=2,y(""),e.next=6,n();case 6:j.push("/"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),y("Failed to Login with Google");case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}function w(){for(var e="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=a.length,t=0;t<10;t++)e+=a.charAt(Math.floor(Math.random()*n));var r=e+"@it.com";return console.log(r),r}function A(){for(var e="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=a.length,t=0;t<6;t++)e+=a.charAt(Math.floor(Math.random()*n));return e}function N(){return(N=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s("yes"),e.prev=1,e.next=4,t(w(),A());case 4:j.push("/"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),y("Email already in use");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(O.jsx)("div",{className:"parent",children:Object(O.jsxs)("div",{className:"child",children:[Object(O.jsxs)("div",{className:"headings",children:[Object(O.jsx)("img",{src:k,alt:"Playtful"}),Object(O.jsx)("h1",{children:"Platesome"})]}),Object(O.jsx)(u.a,{className:"containForm",children:Object(O.jsx)(m.a,{children:Object(O.jsx)(m.a.Body,{children:Object(O.jsxs)(d.a,{id:"signForm",onSubmit:function(e){return P.apply(this,arguments)},children:[Object(O.jsx)("h3",{className:"text-center mb-3",children:"Sign In"}),f&&Object(O.jsx)(b.a,{variant:"danger",children:f}),Object(O.jsxs)(d.a.Group,{className:"mb-3",children:[Object(O.jsx)(d.a.Label,{children:"Email"}),Object(O.jsx)(d.a.Control,{type:"email",ref:i})]}),Object(O.jsxs)(d.a.Group,{className:"mb-3",children:[Object(O.jsx)(d.a.Label,{children:"Password"}),Object(O.jsx)(d.a.Control,{type:"password",ref:c})]}),Object(O.jsxs)("div",{className:"text-center",children:[Object(O.jsx)(v.a,{className:"mb-3",style:{width:"50%"},type:"submit",variant:"primary",children:"Sign In"}),Object(O.jsx)("br",{}),Object(O.jsx)(v.a,{style:{width:"50%"},onClick:function(e){return S.apply(this,arguments)},variant:"success",children:"Google"}),Object(O.jsxs)("p",{className:"text-center mt-2",children:["Need an account? ",Object(O.jsx)(L.b,{to:"/signup",children:"Sign Up"})," "]}),Object(O.jsxs)("p",{className:"text-center",style:{marginBottom:"0px"},children:["Or click ",Object(O.jsx)("button",{type:"button",className:"link",onClick:function(){return N.apply(this,arguments)},children:"here"})," for demo!"]})]})]})})})})]})})},w=n(328),A=n(163),N=n(23),D=(n(85),n(77)),B=n(78);var R=function(e){var a=Object(r.useContext)(x).currUser,n=e.list,t=new Date,s=t.getMonth()+1+"-"+t.getDate()+"-"+t.getFullYear(),i=Object(r.useState)(s),c=Object(g.a)(i,1)[0],o=Object(r.useState)(0),l=Object(g.a)(o,2),u=l[0],m=l[1],b=Object(r.useState)(""),j=Object(g.a)(b,2),p=j[0],f=j[1],y=Object(r.useState)(0),C=Object(g.a)(y,2),L=C[0],k=C[1],P=Object(r.useState)([]),S=Object(g.a)(P,2),R=S[0],F=S[1],G=Object(r.useState)("0.00"),M=Object(g.a)(G,2),E=M[0],I=M[1];function W(n){var t=h.database().ref(a.uid+"/"+c+"/TotalServs");t.once("value",(function(a){var r=a.val(),s=(parseFloat(r[e.fireRef])+n).toFixed(2);t.update(Object(N.a)({},e.fireRef,s))}))}return Object(r.useEffect)((function(){f(Object.keys(n[L].serving)[0]),h.database().ref(a.uid+"/"+c+"/Lists/"+e.fireRef).on("value",(function(e){var a=e.val(),n=[];for(var t in a)n.push({id:t,name:a[t].name,quantity:a[t].quantity,unit:a[t].unit,serving:a[t].serving});F(n)}))}),[a.uid,c,L,n,e.fireRef]),Object(r.useEffect)((function(){var e=h.database().ref(a.uid+"/"+c+"/TotalServs");e.once("value",(function(a){null===a.val()&&e.set({veg:"0.00",fruit:"0.00",dairy:"0.00"})}))}),[a.uid,c]),Object(r.useEffect)((function(){h.database().ref(a.uid+"/"+c+"/TotalServs").on("value",(function(a){var n=a.val();for(var t in n)t===e.fireRef&&I(n[t])}))}),[c,a.uid,e.fireRef]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(d.a,{className:"text-center mb-4 newForm",children:[Object(O.jsx)(w.a,{className:"mb-3",children:Object(O.jsx)(d.a.Group,{as:A.a,children:Object(O.jsx)("select",{className:"form-select",value:L,onChange:function(e){k(e.target.value)},children:n.map((function(e,a){return Object(O.jsx)("option",{value:a,children:e.name},a)}))})})}),Object(O.jsxs)(w.a,{className:"mb-3",children:[Object(O.jsx)(d.a.Group,{as:A.a,children:Object(O.jsx)(d.a.Control,{value:u,onChange:function(e){return m(e.target.value)},type:"number",min:"0",max:"9999"})}),Object(O.jsx)(d.a.Group,{as:A.a,children:Object(O.jsx)("select",{className:"form-select",value:p,onChange:function(e){return f(e.target.value)},children:Object.keys(n[L].serving).map((function(e,a){return Object(O.jsx)("option",{value:e,children:e},a)}))})})]}),p&&Object(O.jsx)(v.a,{className:"w-25",id:"addBtn",onClick:function(t){t.preventDefault();var r=h.database().ref(a.uid+"/"+c+"/Lists/"+e.fireRef),s=n[L],i=Math.ceil(u/s.serving[p]*100)/100;W(i),r.push({name:s.name,quantity:u,unit:p,serving:i})},children:"Add"})]}),Object(O.jsx)("ul",{className:"itemList scroll "+e.fireRef+"List",children:R.map((function(n){return Object(O.jsxs)("li",{children:[Object(O.jsx)("b",{children:n.name}),"(",n.quantity,n.unit,"): ",n.serving," servings   ",Object(O.jsx)("button",{className:"deleteBtn",variant:"danger",onClick:function(){return function(n){var t=h.database().ref(a.uid+"/"+c+"/Lists/"+e.fireRef+"/"+n.id);console.log(-1*n.serving),W(-1*n.serving),t.remove()}(n)},children:Object(O.jsx)(D.a,{icon:B.d})})]},n.id)}))}),Object(O.jsxs)("h6",{children:[E," / ",e.idealserv," Ideal Daily Servings"]})]})},F=n(331),G=n(330);var M=function(e){var a=Object(r.useContext)(x),n=a.signOut,t=a.currUser,s=a.dummyAccount,i=a.setDummyAccount;return Object(r.useEffect)((function(){h.database().ref(t.uid+"/Dummy").on("value",(function(e){var a=e.val();null!==a&&"yes"===a.dummy&&i("yes")}))})),Object(O.jsx)(F.a,{expand:"lg",style:{background:"#004E64"},className:"customNav",variant:"dark",children:Object(O.jsxs)(u.a,{children:[Object(O.jsxs)(F.a.Brand,{as:L.b,to:"/",children:[Object(O.jsx)("img",{alt:"",style:{borderRadius:"50%"},src:k,width:"30",height:"30",className:"d-inline-block align-top"})," Platesome"]}),Object(O.jsx)(F.a.Toggle,{}),Object(O.jsxs)(F.a.Collapse,{children:[Object(O.jsxs)(G.a,{children:[Object(O.jsx)(G.a.Link,{eventKey:"1",as:L.b,active:e.dActive,to:"/",children:"Dashboard"}),Object(O.jsx)(G.a.Link,{eventKey:"2",as:L.b,active:e.sActive,to:"/summary",children:"Summary "})]}),Object(O.jsx)(v.a,{className:"ms-auto",variant:"outline-light",onClick:"yes"===s?function(){h.database().ref(t.uid).remove(),i("no"),n()}:n,children:"Sign Out"})]})]})})};var E=function(){var e=Object(r.useContext)(x),a=e.currUser,n=e.dummyAccount,t=new Date,s=t.getMonth()+1+"-"+t.getDate()+"-"+t.getFullYear();return Object(r.useEffect)((function(){console.log(a);var e=h.database().ref(a.uid+"/LastLogIn");e.once("value",(function(n){var t=n.val();null==t?e.set({date:s}):s!==t.date&&(h.database().ref(a.uid+"/"+t.date+"/Lists").remove(),e.update({date:s}))}))}),[a,s]),Object(r.useEffect)((function(){if("yes"===n){console.log("dummy detected");var e=h.database().ref(a.uid+"/Dummy");e.once("value",(function(a){null==a.val()&&e.set({dummy:"yes"})}))}})),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(M,{dActive:!0,sActive:!1}),Object(O.jsx)(u.a,{fluid:!0,className:"foodGroups text-center",children:Object(O.jsxs)(w.a,{children:[Object(O.jsx)(A.a,{className:"foodGroup veg",md:12,lg:4,children:Object(O.jsxs)("div",{className:"clouds v",children:[Object(O.jsxs)("h2",{children:["Veggies ",Object(O.jsx)(D.a,{style:{color:"#FFDB5C"},icon:B.b})]}),Object(O.jsx)(R,{list:[{name:"Amaranth Leaves",serving:{g:"30",mL:"250"}},{name:"Arrowroot",serving:{g:"63",mL:"125"}},{name:"Artichoke",serving:{Artichokes:"1",g:"128"}},{name:"Arugula",serving:{g:"21",mL:"250"}},{name:"Asparagus",serving:{spears:"10",g:"85"}},{name:"Bamboo Shoots",serving:{g:"80",mL:"125"}},{name:"Beans (Green)",serving:{beans:"20",g:"85"}},{name:"Beets",serving:{g:"72",mL:"125"}},{name:"Belgian Endive",serving:{g:"95",mL:"250"}},{name:"Bitter Melon*",serving:{g:"53",mL:"125"}},{name:"Bok Choy",serving:{g:"90",mL:"125"}},{name:"Broadbeans (Fava Beans)",serving:{g:"80",mL:"125"}},{name:"Broccoli",serving:{stalks:"0.5",g:"85"}},{name:"Broccoli Rabe",serving:{cups:"2",g:"80"}},{name:"Brussel Sprouts",serving:{sprouts:"4",g:"76"}},{name:"Cabbage (Green)",serving:{Cabbages:"0.92",g:"85"}},{name:"Cabbage (Red)",serving:{g:"37",mL:"125"}},{name:"Carrot",serving:{Carrots:"1",g:"85"}},{name:"Cassava (Yuca Root)",serving:{g:"109",mL:"125"}},{name:"Cauliflower",serving:{Cauliflowers:"0.17",g:"85"}},{name:"Celeriac (Celery Root)",serving:{g:"82",mL:"125"}},{name:"Celery",serving:{stalk:"1",g:"85"}},{name:"Chayote*",serving:{cup:"0.5",g:"70",mL:"125"}},{name:"Chicory (Curly Endive)",serving:{g:"30",mL:"250"}},{name:"Collards",serving:{g:"19",mL:"125"}},{name:"Corn",serving:{Corns:"1",g:"85"}},{name:"Crookneck",serving:{g:"69",mL:"125"}},{name:"Cucumber",serving:{Cucumbers:"0.25",g:"85"}},{name:"Daikon",serving:{Daikons:"1",g:"338"}},{name:"Dandelion Greens",serving:{g:"58",ml:"125"}},{name:"Edamame (Soybeans)",serving:{g:"135",mL:"125"}},{name:"Eggplant",serving:{g:"43",mL:"125"}},{name:"Fennel",serving:{g:"46",mL:"125"}},{name:"Fiddleheads",serving:{g:"61",mL:"125"}},{name:"Ginger Root",serving:{cup:"0.5",g:"41"}},{name:"Horseradish",serving:{g:"100"}},{name:"Jicama",serving:{g:"63",mL:"125"}},{name:"Kale",serving:{g:"71",mL:"250"}},{name:"Kohlrabi",serving:{g:"71",mL:"125"}},{name:"Leeks",serving:{leeks:"0.5",g:"47"}},{name:"Lettuce (Iceberg)",serving:{head:"0.25",cups:"2",g:"85"}},{name:"Lettuce (Leaf)",serving:{cups:"2",g:"85"}},{name:"Lettuce (Romaine)",serving:{cups:"2",g:"85"}},{name:"Mushrooms",serving:{Mushrooms:"5",g:"85"}},{name:"Mustard Greens",serving:{g:"59",mL:"250"}},{name:"Okra",serving:{g:"53",mL:"125"}},{name:"Onion (Red)",serving:{"Red Onions":"0.5",g:"85"}},{name:"Onions",serving:{Onions:"0.5",g:"85"}},{name:"Parsnip",serving:{g:"70",mL:"125"}},{name:"Peas (Green)",serving:{g:"77",mL:"125"}},{name:"Pepper (Green)",serving:{"Green Peppers":"0.5",g:"85"}},{name:"Pepper (Sweet Red)",serving:{"Sweet Red Peppers":"0.5",g:"85"}},{name:"Potato (Red)",serving:{g:"79",mL:"125"}},{name:"Potato (White)",serving:{"White Potatos":"1",g:"110"}},{name:"Potato (Yellow)",serving:{"Yellow Potatos":"1",g:"167"}},{name:"Pumpkin",serving:{g:"61",mL:"125"}},{name:"Radicchio",serving:{g:"100"}},{name:"Radishes",serving:{g:"61",mL:"125"}},{name:"Rutabaga",serving:{g:"74",mL:"125"}},{name:"Salsify (Oysterplant)",serving:{g:"56",mL:"100"}},{name:"Shallots",serving:{g:"68",mL:"100"}},{name:"Snow Peas",serving:{g:"85",mL:"125"}},{name:"Sorrel (Dock)",serving:{g:"338",radish:"1"}},{name:"Spaghetti Squash",serving:{cup:"1"}},{name:"Spinach",serving:{cups:"2",g:"85"}},{name:"Squash (Butternut)",serving:{"Butternut Squashs":"0.084",g:"85"}},{name:"Sugar Snap Peas",serving:{g:"100"}},{name:"Sweet Potato",serving:{"Sweet Potatos":"0.5",g:"110"}},{name:"Swiss Chard",serving:{g:"93",mL:"125"}},{name:"Tomatillo*",serving:{g:"70",mL:"125"}},{name:"Tomato*",serving:{"Tomato*s":"0.34",g:"85"}},{name:"Turnip",serving:{cup:"0.5",mL:"125"}},{name:"Watercress",serving:{g:"36",mL:"250"}},{name:"Yam Root",serving:{g:"72",mL:"125"}},{name:"Zucchini",serving:{Zucchinis:"0.5",g:"85"}}],fireRef:"veg",idealserv:"2.5"})]})}),Object(O.jsx)(A.a,{className:"foodGroup fruit",md:12,lg:4,children:Object(O.jsxs)("div",{className:"clouds f",children:[Object(O.jsxs)("h2",{children:["Fruits ",Object(O.jsx)(D.a,{style:{color:"#5fd797"},icon:B.a})]}),Object(O.jsx)(R,{list:[{name:"Apple",serving:{Apples:"1",g:"140"}},{name:"Apricots",serving:{Apricots:"3",g:"105"}},{name:"Avocado",serving:{Avocados:"0.2",g:"130"}},{name:"Banana",serving:{Bananas:"1",g:"140"}},{name:"Barbados Cherry",serving:{Cherries:"1",g:"5"}},{name:"Blackberries",serving:{cup:"1"}},{name:"Blackcurrant",serving:{g:"59",ml:"125"}},{name:"Blueberries",serving:{cup:"0.5",g:"80"}},{name:"Breadfruit",serving:{Breadfruit:"0.25",g:"96"}},{name:"Cantaloupe",serving:{Cantaloupes:"0.25",g:"150"}},{name:"Carambola",serving:{Carambolas:"1",g:"89"}},{name:"Cherimoya",serving:{Cherimoya:"1",g:"312"}},{name:"Cherries",serving:{Cherries:"21",cup:"1",g:"140"}},{name:"Clementine",serving:{Clementines:"1",g:"74"}},{name:"Coconut Meat",serving:{g:"100"}},{name:"Cranberries",serving:{cup:"1"}},{name:"Custard-Apple",serving:{"Custard-Apples":"0.5",g:"120"}},{name:"Date Fruit",serving:{g:"94",mL:"125"}},{name:"Durian",serving:{g:"128",mL:"125"}},{name:"Elderberries",serving:{g:"77",ml:"125"}},{name:"Feijoa",serving:{Feijoas:"2",g:"100"}},{name:"Figs",serving:{Figs:"2",g:"100"}},{name:"Gooseberries",serving:{g:"79",ml:"125"}},{name:"Grapefruit",serving:{Grapefruits:"0.5",g:"140"}},{name:"Grapes",serving:{Grapes:"21",cup:"1",g:"140"}},{name:"Guava",serving:{Guavas:"1",g:"90"}},{name:"Honeydew Melon",serving:{"Honeydew Melons":"0.17",g:"150"}},{name:"Jackfruit",serving:{g:"87",ml:"125"}},{name:"Java-Plum",serving:{"Java-Plum":"20",g:"60"}},{name:"Jujube",serving:{Jujubes:"5",g:"70"}},{name:"Kiwi",serving:{Kiwis:"2",g:"140"}},{name:"Kumquat",serving:{Kumquats:"5",g:"95"}},{name:"Lemon",serving:{Lemons:"1",g:"55"}},{name:"Lime",serving:{Limes:"1",g:"55"}},{name:"Longan",serving:{Longans:"20",g:"64"}},{name:"Loquat",serving:{g:"157",mL:"250"}},{name:"Lychee",serving:{Lychees:"10",g:"96"}},{name:"Mandarin",serving:{Mandarins:"1",g:"88"}},{name:"Mango",serving:{Mangos:"0.5",g:"140"}},{name:"Mangosteen",serving:{g:"83",mL:"100"}},{name:"Mulberries",serving:{g:"74",ml:"125"}},{name:"Nectarine",serving:{g:"140",Nectarines:"1"}},{name:"Olives",serving:{g:"57",mL:"100"}},{name:"Orange",serving:{Oranges:"1",g:"140"}},{name:"Papaya",serving:{Papayas:"0.5",g:"153"}},{name:"Passion Fruit",serving:{"Passion Fruits":"2",g:"36"}},{name:"Peaches",serving:{Peaches:"1",g:"140"}},{name:"Pear",serving:{Pear:"1",g:"140"}},{name:"Persimmon",serving:{Persimmon:"1",g:"168"}},{name:"Dragonfruit",serving:{cups:"0.5",grams:"100"}},{name:"Pineapple",serving:{slices:"2",g:"140"}},{name:"Pitanga",serving:{g:"73",mL:"100"}},{name:"Plantain",serving:{g:"81",mL:"125"}},{name:"Plums",serving:{Plums:"1",g:"140"}},{name:"Pomegranate",serving:{Pomegranate:"0.5",g:"77"}},{name:"Prickly Pear",serving:{"Prickly Pears":"1",g:"103"}},{name:"Prunes",serving:{Prunes:"3",g:"25"}},{name:"Pummelo",serving:{g:"100",mL:"125"}},{name:"Quince",serving:{Quinces:"1",g:"92"}},{name:"Raspberries",serving:{cup:"0.5",g:"80"}},{name:"Rhubarb",serving:{cup:"0.5",ml:"125"}},{name:"Rose-Apple",serving:{g:"100"}},{name:"Sapodilla",serving:{Sapodilla:"0.5",g:"85"}},{name:"Mamey Sapote",serving:{"Mamey Sapote":"0.5",g:"113"}},{name:"Soursop",serving:{g:"119",mL:"125"}},{name:"Strawberries",serving:{Strawberries:"7",g:"140"}},{name:"Sugar-Apple",serving:{g:"106",mL:"100"}},{name:"Tamarind",serving:{g:"100"}},{name:"Tangerine",serving:{Tangerines:"2",g:"140"}},{name:"Watermelon",serving:{Watermelons:"0.04",cups:"1",g:"150"}}],fireRef:"fruit",idealserv:"2.00"})]})}),Object(O.jsx)(A.a,{className:"foodGroup dairy",md:12,lg:4,children:Object(O.jsxs)("div",{className:"clouds d",children:[Object(O.jsxs)("h2",{children:["Dairy ",Object(O.jsx)(D.a,{style:{color:"#4897D8"},icon:B.c})]}),Object(O.jsx)(R,{list:[{name:"Cheese",serving:{slices:"1",dice:"3.5",oz:"1.5"}},{name:"Milk",serving:{cups:"1",oz:"8"}},{name:"Yogurt",serving:{cups:".75",oz:"6"}}],fireRef:"dairy",idealserv:"3.00"})]})})]})})]})},I=n(112),W=["component"];var T=function(e){var a=e.component,n=Object(I.a)(e,W),s=Object(r.useContext)(x).currUser;return Object(O.jsx)(C.b,Object(t.a)(Object(t.a)({},n),{},{render:function(){return s?Object(O.jsx)(a,{}):Object(O.jsx)(C.a,{to:"/signin"})}}))},U=["component"];var q=function(e){var a=e.component,n=Object(I.a)(e,U),s=Object(r.useContext)(x).currUser;return Object(O.jsx)(C.b,Object(t.a)(Object(t.a)({},n),{},{render:function(){return s?Object(O.jsx)(C.a,{to:"/"}):Object(O.jsx)(a,{})}}))},K=n(170),Y=n(28),J=n(169);Y.b.register(J.a);var z=function(){var e=Object(r.useContext)(x).currUser,a=Object(r.useState)(),n=Object(g.a)(a,2),t=n[0],s=n[1],i=Object(r.useState)(),c=Object(g.a)(i,2),o=c[0],l=c[1],u=Object(r.useState)(),m=Object(g.a)(u,2),d=m[0],b=m[1],j=Object(r.useState)("b1"),p=Object(g.a)(j,2),f=p[0],y=p[1];function C(e){y(e.target.name)}return Object(r.useEffect)((function(){var a=h.database().ref(e.uid),n=[],t={veg:[],fruit:[],dairy:[]};a.once("value",(function(e){var a=e.val(),r=new Date;r.setDate(r.getDate()-29);for(var i=29;i>=0;i--){var c=r.getMonth()+1+"-"+r.getDate()+"-"+r.getFullYear();if(n.push(c),a[c]){var o=a[c].TotalServs;for(var g in o)t[g].push(parseFloat(o[g]))}else t.veg.push(0),t.fruit.push(0),t.dairy.push(0);r.setDate(r.getDate()+1)}var u=[],m=[],d=[],v=["#FFDB5C","#5fd797","#4897D8"],j=0,h=Array(30).fill("");for(var p in t)u.push({type:"bar",label:p,backgroundColor:v[j],borderColor:"rgba(0,0,0,1)",borderWidth:2,data:t[p].slice(29,30)}),m.push({type:"bar",label:p,backgroundColor:v[j],borderColor:"rgba(0,0,0,1)",borderWidth:2,data:t[p].slice(23,30)}),d.push({type:"line",label:p,backgroundColor:v[j],borderColor:v[j],borderWidth:2,data:t[p],tension:.1}),j++;s({labels:n.slice(29,30),datasets:u}),l({labels:n.slice(23,30),datasets:m}),b({labels:h,datasets:d})}))}),[e.uid]),Object(O.jsxs)("div",{style:{height:"85vh"},children:[Object(O.jsx)(M,{dActive:!1,sActive:!0}),Object(O.jsx)(K.a,{data:"b1"===f?t:"b2"===f?o:d,options:{elements:{point:{radius:0}},maintainAspectRatio:!1,scales:{y:{title:{display:!0,text:"Servings"}}},plugins:{autocolors:!1,annotation:{annotations:{vegLine:{type:"line",yMin:2.5,yMax:2.5,borderColor:"#FFDB5C",borderWidth:5,borderDash:[25,5],label:{backgroundColor:"#FFDB5C",color:"#ffffff",content:"veg goal",enabled:!0}},fruitLine:{type:"line",yMin:2,yMax:2,borderColor:"#5fd797",borderWidth:5,borderDash:[25,10],label:{backgroundColor:"#5fd797",color:"#ffffff",content:"fruit goal",enabled:!0}},dairyLine:{type:"line",yMin:3,yMax:3,borderColor:"#4897D8",borderWidth:5,borderDash:[25,15],label:{backgroundColor:"#4897D8",color:"#ffffff",content:"dairy goal",enabled:!0}},invisibleLine:{type:"line",yMin:3.5,yMax:3.5,borderColor:"rgba(255,255,255,0)",borderWidth:1,borderDash:[25,15],label:{backgroundColor:"#4897D8",color:"#ffffff",enabled:!0}}}}}}}),Object(O.jsxs)("div",{className:"chartButtons",children:[Object(O.jsx)(v.a,{id:"b1"===f?"activeChartBtn":"chartBtn",name:"b1",onClick:C,children:"Today"})," \xa0",Object(O.jsx)(v.a,{id:"b2"===f?"activeChartBtn":"chartBtn",name:"b2",onClick:C,children:"Past 7 days"}),"  \xa0",Object(O.jsx)(v.a,{id:"b3"===f?"activeChartBtn":"chartBtn",name:"b3",onClick:C,children:"Past 30 days"})]})]})};var H=function(){return Object(O.jsx)(y,{children:Object(O.jsx)(L.a,{children:Object(O.jsxs)(C.d,{children:[Object(O.jsx)(T,{path:"/",exact:!0,component:E}),Object(O.jsx)(q,{path:"/signin",exact:!0,component:S}),Object(O.jsx)(q,{path:"/signup",exact:!0,component:P}),Object(O.jsx)(T,{path:"/summary",exact:!0,component:z})]})})})},Q=(n(294),n(295),n(296),n(297),n(168)),Z=n.n(Q);i.a.render(Object(O.jsxs)("div",{children:[Object(O.jsx)(Z.a,Object(t.a)({},{title:"Platesome",description:"Platesome is a nutrition tracking website designed to keep track of your daily servings of fruits, vegetables, and dairy!  Track your progress and become healthier by eating your ideal daily servings.",canonical:"https://platesome.com/",meta:{charset:"utf-8",name:{keywords:"react,meta,document,html,tags"}}})),Object(O.jsx)(H,{})]}),document.getElementById("root"))},85:function(e,a,n){}},[[322,1,2]]]);
//# sourceMappingURL=main.398cd461.chunk.js.map