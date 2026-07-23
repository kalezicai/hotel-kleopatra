"use client";import{t as e}from"./jsx-runtime.Bcxxf2w9.js";var t=e();function n({cards:e}){if(!e||e.length===0)return null;let n=Math.ceil(e.length/2),r=e.slice(0,n),i=e.slice(n),a=e.length*3.5,o=(e,n)=>{let r=[...e,...e];return(0,t.jsx)(`div`,{className:`flex overflow-hidden select-none`,children:(0,t.jsx)(`div`,{className:`flex flex-shrink-0 gap-3 md:gap-4`,style:{animation:`${n===`left`?`marquee-left`:`marquee-right`} ${a}s linear infinite`},children:r.map((e,n)=>(0,t.jsx)(`div`,{className:`relative flex-shrink-0 w-40 h-36 md:w-56 md:h-48 lg:w-72 lg:h-56 overflow-hidden rounded-xl md:rounded-2xl bg-chocolate/5`,children:(0,t.jsx)(`img`,{src:e.imgUrl,alt:e.alt||``,loading:`lazy`,className:`absolute inset-0 w-full h-full object-cover`})},n))})})};return(0,t.jsxs)(`div`,{className:`flex flex-col gap-3 md:gap-4 py-6 md:py-10 overflow-hidden`,children:[o(r,`left`),o(i,`right`),(0,t.jsx)(`style`,{children:`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `})]})}export{n as default};