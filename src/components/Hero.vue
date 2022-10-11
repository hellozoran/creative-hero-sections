<script setup>
import { ref } from 'vue'
import { TransitionRoot, TransitionChild } from '@headlessui/vue'
import Logo from './Logo.vue';
import GitHubIcon from './GitHubIcon.vue';
import LinkedInIcon from './LinkedInIcon.vue';

const isShowing = ref(true)


window.onload = function () {
  let ctx = document.getElementById("C"),
    c = ctx.getContext("2d"),
    w,
    h;
  fitCanvas();
  
  let mouse = {x: w/2, y: h/4},
      last_mouse = {};
  
  function curcumicenter(A,B,C){
    let D = 2*(A.x*(B.y-C.y)+B.x*(C.y-A.y)+C.x*(A.y-B.y));
    let S = {
      x: (1/D)*((A.x*A.x+A.y*A.y)*(B.y-C.y)+(B.x*B.x+B.y*B.y)*(C.y-A.y)+(C.x*C.x+C.y*C.y)*(A.y-B.y)),
      y: (1/D)*((A.x*A.x+A.y*A.y)*(C.x-B.x)+(B.x*B.x+B.y*B.y)*(A.x-C.x)+(C.x*C.x+C.y*C.y)*(B.x-A.x))
    }
    return S;
  }
  function dist(A,B){
    return Math.sqrt(Math.pow(A.x-B.x,2)+Math.pow(A.y-B.y,2));
  }
  class point{
    constructor(x,y){
      this.x = x;
      this.y = y;
      this.shown = false;
    }
    update(x,y){
      this.x = x;
      this.y = y;
    }
    show(color,size){
      if(!this.shown){
        c.fillStyle=color;
        c.fillRect(this.x-size/2,this.y-size/2,size,size);
        this.shown = true;
      }
    }
    cleanup(){
      this.shown = false;
    }
  }
  class triangle{
    constructor(A,B,C){
      this.a = A;
      this.b = B;
      this.c = C;
      
      this.scc = curcumicenter(A,B,C);
      this.s = new point(this.scc.x,this.scc.y);
      
      this.x = dist(this.s,this.a);
      
      this.c1 = dist(this.a,this.b)/2;
      this.c2 = dist(this.b,this.c)/2;
      this.c3 = dist(this.c,this.a)/2;
      
      this.a2ab = Math.atan2(this.a.y-this.b.y,this.a.x-this.b.x);
      this.a2bc = Math.atan2(this.b.y-this.c.y,this.b.x-this.c.x);
      this.a2ca = Math.atan2(this.c.y-this.a.y,this.c.x-this.a.x);
      
      this.rab = Math.sqrt(this.x*this.x-this.c1*this.c1);
      this.rbc = Math.sqrt(this.x*this.x-this.c2*this.c2);
      this.rca = Math.sqrt(this.x*this.x-this.c3*this.c3);
      
      this.s1 = new point(
        this.s.x+(this.rab/2)*Math.cos(this.a2ab+Math.PI/2), 
        this.s.y+(this.rab/2)*Math.sin(this.a2ab+Math.PI/2) 
      );
      this.s2 = new point(
        this.s.x+(this.rbc/2)*Math.cos(this.a2bc+Math.PI/2), 
        this.s.y+(this.rbc/2)*Math.sin(this.a2bc+Math.PI/2)
      );
      this.s3 = new point(
        this.s.x+(this.rca/2)*Math.cos(this.a2ca+5*Math.PI/2), 
        this.s.y+(this.rca/2)*Math.sin(this.a2ca+5*Math.PI/2)
      );
    }
    move(m){
    this.c = m;
    this.scc = curcumicenter(this.a,this.b,this.c);
    this.s.update(this.scc.x,this.scc.y);
    
    this.x = dist(this.s,this.a);
    this.c1 = dist(this.a,this.b)/2;
    this.c2 = dist(this.b,this.c)/2;
    this.c3 = dist(this.c,this.a)/2;
    this.a2ab = Math.atan2(this.a.y-this.b.y,this.a.x-this.b.x);
    this.a2bc = Math.atan2(this.b.y-this.c.y,this.b.x-this.c.x);
    this.a2ca = Math.atan2(this.c.y-this.a.y,this.c.x-this.a.x);
    this.rab = Math.sqrt(this.x*this.x-this.c1*this.c1);
    this.rbc = Math.sqrt(this.x*this.x-this.c2*this.c2);
    this.rca = Math.sqrt(this.x*this.x-this.c3*this.c3);
    
    this.s1.update(
        this.s.x+(this.rab/2)*Math.cos(this.a2ab+Math.PI/2), 
        this.s.y+(this.rab/2)*Math.sin(this.a2ab+Math.PI/2) 
    );
    this.s2.update(
        this.s.x+(this.rbc/2)*Math.cos(this.a2bc+Math.PI/2), 
        this.s.y+(this.rbc/2)*Math.sin(this.a2bc+Math.PI/2)
    );
    this.s3.update(
        this.s.x+(this.rca/2)*Math.cos(this.a2ca+5*Math.PI/2), 
        this.s.y+(this.rca/2)*Math.sin(this.a2ca+5*Math.PI/2)
    );
  }
    iterate(it){
      this.it = it;

      this.t4 = new triangle(this.a,this.s1,this.s3,this.lw/2);
      this.t5 = new triangle(this.b,this.s2,this.s1,this.lw/2);
      this.t6 = new triangle(this.c,this.s3,this.s2,this.lw/2);
      
      if(it < 3){
        this.t4.iterate(it+1);
        this.t5.iterate(it+1);
        this.t6.iterate(it+1);
      }
      
      this.t4.show();
      this.t5.show();
      this.t6.show();
    }

    show(){
      this.a.show("white",2);
      this.b.show("white",2);
      this.c.show("white",2);
      
      this.s.show("#00FFFF",1);
      this.s1.show("#00FFFF",1);
      this.s2.show("#00FFFF",1);
      this.s3.show("#00FFFF",1);
      
      this.a.cleanup();
      this.b.cleanup();
      this.c.cleanup();
      
      this.s.cleanup();
      this.s1.cleanup();
      this.s2.cleanup();
      this.s3.cleanup();
      
    }
  }
  
  //i,i+1,mouse
  
  let pts = [],
      mouse_pt = new point(mouse.x,mouse.y),
      tris = [],
      num = 20,
      r = h/3;
  
  for(let i = 0, len = num; i < len; i++){
    pts.push(new point(w/2+r*Math.cos(i*2*Math.PI/len),h/2+r*Math.sin(i*2*Math.PI/len)));
  }
  
  let A, B;
  
  for(let i = 0, len = num; i < len; i++){
    A = i;
    B = i+1;
    if(B >= len){
      B = 0;
    }
    tris.push(new triangle(pts[A],pts[B],mouse_pt));
  }
  
  
  function draw() {
    mouse_pt.update(mouse.x,mouse.y);
    mouse_pt.show();
 
    for(let i = 0, len = tris.length; i < len; i++){
      tris[i].move(mouse_pt);
      tris[i].iterate(0);
      tris[i].show();
    }
  }
  
  ctx.addEventListener(
    "mousemove",
    function(e) {
      last_mouse.x = mouse.x;
      last_mouse.y = mouse.y;

      mouse.x = e.pageX - this.offsetLeft;
      mouse.y = e.pageY - this.offsetTop;
    },
    false
  );
  
  function fitCanvas() {
    w = ctx.width = window.innerWidth
    h = ctx.height = window.innerHeight
  }
  function loop() {
    fitCanvas()
    draw()
    window.requestAnimationFrame(loop)
  }
  window.requestAnimationFrame(loop)
};
</script>

<template>
  <section class="min-h-screen bg-slate-800 relative flex flex-col justify-between pb-12">
    <header class="px-10 h-32 flex items-center justify-center relative z-20 text-teal-400 pointer-events-none">
      <Logo />
    </header>

    <canvas id="C" class="absolute inset-0 opacity-30"></canvas>
    <!-- <TransitionRoot
      appear
      :show="isShowing"
    >
      <TransitionChild
        enter="transition-all duration-500"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition-opacity duration-150"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-75" style="background-image: url('/bg2.jpg');" />
      </TransitionChild>
    </TransitionRoot> -->

    <div class="pointer-events-none relative z-20 container mx-auto text-white space-y-12 p-6 text-center">
      <TransitionRoot
        appear
        :show="isShowing"
      >
        <TransitionChild
          enter="transition-all duration-300 delay-100"
          enter-from="opacity-0 translate-y-2"
          enter-to="opacity-100"
          leave="transition-opacity duration-150"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <h1 class="text-center">
            <span class="text-white block text-2xl md:text-5xl uppercase tracking-widest font-thin">
              Javascript
            </span>
            <span class="mt-2 inline-block font-bold uppercase text-transparent text-5xl md:text-8xl bg-clip-text bg-gradient-to-br from-violet-500 to-pink-500">
              Frontend<br />
              Engineer
            </span>
          </h1>
        </TransitionChild>
        <TransitionChild
          enter="transition-all duration-300 delay-200"
          enter-from="opacity-0 translate-y-2"
          enter-to="opacity-100 scale-100"
          leave="transition-opacity duration-150"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <p class="text-lg md:text-2xl font-medium mt-4 text-teal-400">
            Vue, Nuxt, React Native, Node.js, TailwindCSS, SCSS
          </p>
          <p class="text-base max-w-xl mx-auto mt-8">
            Self starter. Motivated AF. Wearer of any hat necessary. I prefer to work with early stage startups, because building something from the ground up is rewarding work for me and I thoroughly enjoy my contributions.
          </p>
          <p class="text-base max-w-xl mx-auto mt-8">
            In my free time, I hand wire tube guitar amps and play and record music. Once in a while I'll build an arduino hardware controller and write some firmware to make my life easier.
          </p>
        </TransitionChild>
      </TransitionRoot>
      <div class="pointer-events-auto grid grid-cols-2 mt-10 w-32 mx-auto">
        <a href="https://github.com/hellozoran" class="text-teal-400 hover:text-teal-600 transition-colors duration-150 inline mx-auto">
          <GitHubIcon class="w-12 h-12" />
        </a>
        <a href="https://www.linkedin.com/in/zoranem/" class="text-teal-400 hover:text-teal-600 transition-colors duration-150 inline mx-auto">
          <LinkedInIcon class="w-12 h-12" />
        </a>
      </div>
    </div>
  </section>
</template>