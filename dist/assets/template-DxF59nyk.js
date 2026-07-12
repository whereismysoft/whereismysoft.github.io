(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}})();const C=`<svg viewBox="0 0 650 720" role="presentation" focusable="false">
  <defs>
    <g id="rose">
      <circle
        cx="0"
        cy="0"
        r="29"
        fill="#d34b42"
        stroke="currentColor"
        stroke-width="3"
      />
      <path
        d="M-19 2C-21-15-5-25 2-10C11-27 27-12 16 3C28 11 12 26 0 14C-10 28-27 13-19 2Z"
        fill="#f3c8a9"
        stroke="currentColor"
        stroke-width="3"
        stroke-linejoin="round"
      />
      <path
        d="M-7-6C2-15 14-1 4 8C-5 15-16 3-7-6Z"
        fill="#d34b42"
        stroke="currentColor"
        stroke-width="2.5"
      />
    </g>
    <g id="spark">
      <path
        d="M0-14 3-3 14 0 3 3 0 14-3 3-14 0-3-3Z"
        fill="#f2c94c"
        stroke="currentColor"
        stroke-width="2"
        stroke-linejoin="round"
      />
    </g>
  </defs>

  <rect class="artwork-paper" x="27" y="27" width="596" height="666" rx="8" />
  <g class="border-botany">
    <path
      class="border-vine"
      d="M55 238C88 263 89 296 58 322C31 344 35 374 65 392C96 411 91 448 58 473"
    />
    <path
      class="border-vine"
      d="M595 238C562 263 561 296 592 322C619 344 615 374 585 392C554 411 559 448 592 473"
    />
    <path
      class="border-vine"
      d="M167 58C201 80 225 80 256 57C289 82 339 82 375 56C405 79 431 79 466 57"
    />
    <path
      class="border-vine"
      d="M167 662C201 640 225 640 256 663C289 638 339 638 375 664C405 641 431 641 466 663"
    />
    <path class="border-leaf" d="M60 273C87 263 105 271 115 291C91 298 71 292 60 273Z" />
    <path class="border-leaf" d="M59 363C35 346 31 324 42 306C64 320 72 340 59 363Z" />
    <path class="border-leaf" d="M61 436C88 421 108 427 120 446C96 456 76 453 61 436Z" />
    <path
      class="border-leaf"
      d="M590 273C563 263 545 271 535 291C559 298 579 292 590 273Z"
    />
    <path
      class="border-leaf"
      d="M591 363C615 346 619 324 608 306C586 320 578 340 591 363Z"
    />
    <path
      class="border-leaf"
      d="M589 436C562 421 542 427 530 446C554 456 574 453 589 436Z"
    />
    <path class="border-leaf" d="M209 66C217 41 235 29 258 35C247 58 230 68 209 66Z" />
    <path class="border-leaf" d="M374 65C393 43 414 38 435 50C416 69 396 73 374 65Z" />
    <path
      class="border-leaf"
      d="M209 654C217 679 235 691 258 685C247 662 230 652 209 654Z"
    />
    <path
      class="border-leaf"
      d="M374 655C393 677 414 682 435 670C416 651 396 647 374 655Z"
    />
    <circle class="border-dot" cx="91" cy="317" r="5" />
    <circle class="border-dot" cx="74" cy="420" r="5" />
    <circle class="border-dot" cx="559" cy="317" r="5" />
    <circle class="border-dot" cx="576" cy="420" r="5" />
  </g>

  <g class="motif motif-top-left" data-depth="20">
    <path class="leaf" d="M79 204C105 167 139 145 181 149C153 183 121 202 79 204Z" />
    <path class="leaf" d="M87 215C122 211 153 225 172 252C135 253 106 240 87 215Z" />
    <path class="stem" d="M84 218C115 203 135 185 157 160" />
    <use href="#rose" x="175" y="147" />
  </g>
  <g class="motif motif-top-right" data-depth="15">
    <path
      class="leaf blue"
      d="M482 158C523 153 556 172 574 208C536 207 506 190 482 158Z"
    />
    <path
      class="leaf blue"
      d="M476 173C493 207 487 239 464 265C451 230 455 198 476 173Z"
    />
    <path class="stem" d="M568 203C538 191 513 176 482 165" />
    <use href="#spark" x="474" y="266" />
  </g>

  <g class="cat" data-depth="32">
    <path
      class="cat-tail"
      d="M375 484C443 520 474 466 445 425C421 393 382 408 394 437C402 456 424 457 430 442"
    />
    <path
      class="cat-silhouette"
      d="M239 505C226 475 235 427 259 400C272 385 289 378 304 375C276 363 264 340 268 315L272 270L309 299C327 294 345 294 363 299L400 270L403 315C407 340 395 363 368 375C384 378 401 385 414 400C438 427 447 475 433 505C405 525 267 525 239 505Z"
    />
    <path class="cat-eye" d="M286 345C293 338 303 338 311 345C303 352 294 352 286 345Z" />
    <path class="cat-eye" d="M358 345C366 338 376 338 383 345C375 352 366 352 358 345Z" />
    <path class="cat-nose" d="M329 362 341 362 335 370Z" />
    <path class="cat-paws" d="M274 510V474M304 516V480M338 516V480M368 510V474" />
    <path class="cat-ear-detail" d="M278 285 303 306M394 285 369 306" />
  </g>

  <g class="motif motif-bottom-left" data-depth="24">
    <path class="stem" d="M94 539C132 506 167 494 204 474" />
    <path class="leaf" d="M113 524C119 490 139 470 169 464C163 495 145 516 113 524Z" />
    <path class="leaf" d="M145 500C169 477 198 473 224 487C199 507 173 511 145 500Z" />
    <use href="#rose" x="92" y="542" />
  </g>
  <g class="motif motif-bottom-right" data-depth="18">
    <path class="stem" d="M442 518C475 508 508 519 548 553" />
    <path
      class="leaf blue"
      d="M462 515C472 483 495 466 526 469C515 498 494 516 462 515Z"
    />
    <path
      class="leaf blue"
      d="M507 527C539 520 564 532 580 558C547 562 521 551 507 527Z"
    />
    <use href="#spark" x="552" y="559" />
  </g>

  <g class="stars" data-depth="9">
    <use href="#spark" x="142" y="306" />
    <use href="#spark" x="500" y="377" />
    <circle cx="114" cy="355" r="6" />
    <circle cx="525" cy="300" r="6" />
    <circle cx="471" cy="584" r="5" />
  </g>
  <path class="orbit" d="M164 369C185 283 270 238 360 257C453 276 494 364 467 443" />
  <path
    class="orbit small"
    d="M150 380C181 472 292 512 387 481C426 469 460 445 479 407"
  />
</svg>
`,d=190,m=42;function y(){return window.matchMedia("(pointer: fine)").matches}function u(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function l(e,r,o,s){r.forEach(t=>{const n=Number(t.dataset.depth);t.style.setProperty("--move-x",`${o*n}px`),t.style.setProperty("--move-y",`${s*n}px`)}),e.style.setProperty("--tilt-x",`${s*-3}deg`),e.style.setProperty("--tilt-y",`${o*3}deg`)}function M(e,r,o){const s=e.getBoundingClientRect(),t=r-(s.left+s.width/2),n=o-(s.top+s.height/2),i=Math.hypot(t,n);if(i>=d){e.style.setProperty("--cat-escape-x","0px"),e.style.setProperty("--cat-escape-y","0px"),e.classList.remove("is-avoiding");return}const a=(d-i)/d*m,c=Math.max(i,1);e.style.setProperty("--cat-escape-x",`${-t/c*a}px`),e.style.setProperty("--cat-escape-y",`${-n/c*a}px`),e.classList.add("is-avoiding")}function g(e){const r=Array.from(e.querySelectorAll("[data-depth]")),o=e.querySelector(".cat");if(!o)throw new Error("Cat illustration was not found.");if(!u()&&y()){let s=0,t=0,n;const i=()=>{const a=e.getBoundingClientRect(),c=(s-a.left)/a.width-.5,h=(t-a.top)/a.height-.5;l(e,r,c,h),M(o,s,t),n=void 0};window.addEventListener("pointermove",a=>{s=a.clientX,t=a.clientY,n||(n=window.requestAnimationFrame(i))})}if(!u()){let s;e.addEventListener("pointerdown",t=>{if(t.pointerType==="mouse")return;const n=e.getBoundingClientRect(),i=(t.clientX-n.left)/n.width-.5,a=(t.clientY-n.top)/n.height-.5;l(e,r,i*1.8,a*1.8),e.classList.add("is-touched"),window.clearTimeout(s),s=window.setTimeout(()=>{e.classList.remove("is-touched"),l(e,r,0,0)},700)})}}function w(){return window.matchMedia("(pointer: fine)").matches}function b(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function v(){const e=document.querySelector(".custom-cursor");if(!e||!w()||b())return;let r=0,o=0,s;window.addEventListener("pointermove",t=>{r=t.clientX,o=t.clientY,!s&&(s=window.requestAnimationFrame(()=>{e.style.setProperty("--cursor-x",`${r}px`),e.style.setProperty("--cursor-y",`${o}px`),e.classList.add("is-visible"),s=void 0}))}),window.addEventListener("pointerdown",()=>e.classList.add("is-pressed")),window.addEventListener("pointerup",()=>e.classList.remove("is-pressed")),document.documentElement.addEventListener("pointerleave",()=>{e.classList.remove("is-visible")}),document.querySelectorAll("a").forEach(t=>{t.addEventListener("pointerenter",()=>e.classList.add("is-link")),t.addEventListener("pointerleave",()=>e.classList.remove("is-link"))})}function L(){document.querySelectorAll(".social-links a").forEach(e=>{e.addEventListener("pointerdown",()=>e.classList.add("is-pressed")),e.addEventListener("pointerup",()=>e.classList.remove("is-pressed")),e.addEventListener("pointerleave",()=>e.classList.remove("is-pressed"))})}const p=document.querySelector("[data-artwork]"),f=document.querySelector("#current-year");if(!p||!f)throw new Error("Required page elements were not found.");p.innerHTML=C;f.textContent=String(new Date().getFullYear());g(p);v();L();
