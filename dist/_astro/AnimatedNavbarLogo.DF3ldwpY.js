import{j as t}from"./jsx-runtime.D_zvdyIk.js";import{r as s}from"./index.qNTDzdXh.js";function l(){const[e,a]=s.useState(!1);return t.jsxs("a",{href:"/",className:"relative flex items-center gap-2 py-1 select-none group",onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[t.jsx("div",{className:`absolute -top-3 left-0 z-10 pointer-events-none transition-all duration-300 ${e?"animate-cat-sprint":"animate-cat-patrol"}`,children:t.jsx("img",{src:"/assets/qt/QT normal.svg",alt:"QT Cat Walking",className:"w-7 h-7 object-contain drop-shadow-sm filter"})}),t.jsxs("div",{className:"flex flex-col justify-center",children:[t.jsxs("div",{className:"flex items-center gap-1",children:[t.jsx("span",{className:"text-2xl font-black text-slate-900 tracking-tighter font-heading leading-none group-hover:text-[#30B2E7] transition-colors",children:"QSHALA"}),t.jsx("span",{className:"w-2 h-2 rounded-full bg-[#FDB913] animate-pulse"})]}),t.jsx("span",{className:"text-[9px] font-black uppercase text-slate-500 tracking-widest font-heading leading-none pt-1",children:"Questions • Quriosity • Quests"})]}),t.jsx("style",{children:`
        @keyframes catPatrolLoop {
          0% {
            transform: translateX(-4px) scaleX(1) translateY(0);
          }
          45% {
            transform: translateX(110px) scaleX(1) translateY(-2px);
          }
          50% {
            transform: translateX(110px) scaleX(-1) translateY(0);
          }
          95% {
            transform: translateX(-4px) scaleX(-1) translateY(-2px);
          }
          100% {
            transform: translateX(-4px) scaleX(1) translateY(0);
          }
        }

        @keyframes catSprintLoop {
          0% {
            transform: translateX(-4px) scaleX(1) translateY(-4px) rotate(-8deg);
          }
          50% {
            transform: translateX(120px) scaleX(1) translateY(-6px) rotate(8deg);
          }
          51% {
            transform: translateX(120px) scaleX(-1) translateY(-4px) rotate(-8deg);
          }
          100% {
            transform: translateX(-4px) scaleX(-1) translateY(-6px) rotate(8deg);
          }
        }

        .animate-cat-patrol {
          animation: catPatrolLoop 8s ease-in-out infinite;
        }

        .animate-cat-sprint {
          animation: catSprintLoop 3s ease-in-out infinite;
        }
      `})]})}export{l as default};
