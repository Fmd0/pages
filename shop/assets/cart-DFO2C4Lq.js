import{a as c,j as e,l as p,R as j}from"./index-CpKiv_I1.js";import{R as u}from"./RecentlyViewedListCartPage-Dnga6w32.js";import{L as g}from"./Layout-C2CFlxvX.js";import"./CommodityItemRecentlyViewedPage-Bq6V_Osv.js";const f=({id:t,name:s,price:l,promotingPrice:r,image:x,skuKey:i,count:a,marketName:n})=>{const{addCartAmount:o,subtractCartAmount:m,updateCartAmount:d}=c();return e.jsx("a",{href:`/commodity?id=${t}`,children:e.jsxs("div",{className:"grid grid-cols-[auto_1fr] gap-6",children:[e.jsxs("div",{className:"relative w-[112px] h-[112px] rounded-lg overflow-hidden",children:[e.jsx("img",{className:"w-full h-full object-cover",src:x,alt:"commodity"}),e.jsx("div",{className:"absolute inset-0 bg-[#0000000a]"})]}),e.jsxs("div",{className:"flex flex-col justify-between",children:[e.jsxs("div",{className:"flex items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm md:text-base",children:s.length>30?s.slice(0,30)+"...":s}),e.jsx("p",{className:"text-neutral-500 text-[10px] md:text-[12px]",children:i.split("_").slice(1).join("/")})]}),e.jsx("div",{children:r!==0?e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["$",(r/100).toFixed(2)]}),e.jsxs("p",{className:"text-[12px] md:text-[14px] line-through text-neutral-500 text-end",children:["$",(l/100).toFixed(2)]})]}):e.jsxs("p",{children:["$",(l/100).toFixed(2)]})})]}),e.jsxs("div",{className:"cursor-pointer flex items-center bg-neutral-100 rounded-lg w-max px-[2px]",onClick:h=>h.preventDefault(),children:[e.jsx("div",{className:"w-8 h-8 grid place-items-center",onClick:()=>{m(n,i),d()},children:a===1?e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"transition","data-testid":"icon-delete",stroke:"none",style:{width:"20px",height:"20px"},children:e.jsx("path",{d:"M6 21L5.00221 21.0665C5.03723 21.5918 5.47354 22 6 22V21ZM18 21V22C18.5265 22 18.9628 21.5918 18.9978 21.0665L18 21ZM3 5C2.44772 5 2 5.44772 2 6C2 6.55228 2.44772 7 3 7V5ZM21 7C21.5523 7 22 6.55228 22 6C22 5.44772 21.5523 5 21 5V7ZM11 11C11 10.4477 10.5523 10 10 10C9.44772 10 9 10.4477 9 11H11ZM9 16C9 16.5523 9.44772 17 10 17C10.5523 17 11 16.5523 11 16H9ZM15 11C15 10.4477 14.5523 10 14 10C13.4477 10 13 10.4477 13 11H15ZM13 16C13 16.5523 13.4477 17 14 17C14.5523 17 15 16.5523 15 16H13ZM14.9056 6.24926C15.0432 6.78411 15.5884 7.1061 16.1233 6.96844C16.6581 6.83078 16.9801 6.28559 16.8424 5.75074L14.9056 6.24926ZM4.00221 6.06652L5.00221 21.0665L6.99779 20.9335L5.99779 5.93348L4.00221 6.06652ZM6 22H18V20H6V22ZM18.9978 21.0665L19.9978 6.06652L18.0022 5.93348L17.0022 20.9335L18.9978 21.0665ZM19 5H5V7H19V5ZM3 7H5V5H3V7ZM19 7H21V5H19V7ZM9 11V16H11V11H9ZM13 11V16H15V11H13ZM12 4C13.3965 4 14.5725 4.95512 14.9056 6.24926L16.8424 5.75074C16.2874 3.59442 14.3312 2 12 2V4ZM9.09447 6.24926C9.42756 4.95512 10.6035 4 12 4V2C9.66885 2 7.7126 3.59442 7.1576 5.75074L9.09447 6.24926Z",fill:"currentColor"})}):e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"transition","data-testid":"icon-minus-sign",stroke:"none",style:{width:"20px",height:"20px"},children:e.jsx("path",{d:"M7 12H12H17",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})}),e.jsx("div",{className:"w-8 text-center",children:a}),e.jsx("div",{className:"w-8 h-8 grid place-items-center",onClick:()=>{o(n,i),d()},children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"transition","data-testid":"icon-plus-sign",stroke:"none",style:{width:"20px",height:"20px"},children:e.jsx("path",{d:"M12 7V12M12 12V17M12 12H7M12 12H17",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})})]})]})]})})},v=({marketInfo:t})=>e.jsx("div",{className:"flex flex-col gap-8",children:e.jsxs("div",{className:"flex flex-col md:flex-row md:border-[1px] md:border-neutral-200 md:rounded-2xl",children:[e.jsxs("div",{className:"flex-1 p-1 md:p-8 md:border-r-[1px] md:border-neutral-200",children:[e.jsx("a",{href:`/market?id=${t.id}`,children:e.jsxs("div",{className:"flex items-center gap-4 mb-5",children:[e.jsxs("div",{className:"relative w-11 h-11 rounded-lg overflow-hidden",children:[e.jsx("img",{className:"w-full h-full object-contain",src:t.icon,alt:"icon"}),e.jsx("div",{className:"absolute inset-0 bg-[#0000001a]"})]}),e.jsx("p",{className:"text-[16px] md:text-[18px]",children:t.name})]})}),e.jsx("div",{className:"flex flex-col gap-6",children:Object.entries(t.commodity).map(([s,l])=>e.jsx(f,{...l,marketName:t.name},s))})]}),e.jsxs("div",{className:"flex flex-col gap-2 md:gap-4 px-1 py-2 md:p-8",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-medium",children:"Subtotal"}),e.jsxs("span",{className:"font-semibold",children:["$",(Object.entries(t.commodity).reduce((s,[,l])=>s+l.price*l.count,0)/100).toFixed(2)]})]}),e.jsx("div",{className:"cursor-pointer bg-[rgb(84_51_235)] duration-300 hover:bg-[rgb(69_36_219)] p-3 rounded-xl text-white text-center text-[14px] md:text-[16px] ",children:"Continue to checkout"}),e.jsx("p",{className:"text-[12px] md:text-[14px] text-[rgb(111_112_113)] font-normal text-center",children:"Taxes & shipping calculated at checkout"})]})]})}),w=()=>{const{cartInfo:t}=c();return Object.keys(t).length===0?e.jsxs("div",{className:"h-[calc(100vh-390px)] text-neutral-600 flex flex-col text-center items-center justify-center px-4 text-[20px] font-medium",children:[e.jsx("p",{className:"text-[20px]",children:"Your cart is empty"}),e.jsx("p",{className:"text-[14px] font-normal",children:"Add products while you shop, so they'll be ready for checkout later."})]}):e.jsxs("div",{className:" w-[96%] max-w-[1144px] mx-auto tracking-[0.15px] font-medium",children:[e.jsx("h1",{className:"hidden md:block text-[28px] mt-4 md:mt-12 mb-4 md:mb-8",children:"Cart"}),e.jsx("div",{className:"flex flex-col gap-6 mt-4 md:mt-0",children:Object.entries(t).map(([s,l])=>e.jsx(v,{marketInfo:l},s))})]})},C=()=>e.jsxs(g,{children:[e.jsx(w,{}),e.jsx(u,{})]});p.createRoot(document.getElementById("root")).render(e.jsx(j.StrictMode,{children:e.jsx(C,{})}));
