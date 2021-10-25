<script setup lang="ts">
import City from "../assets/City.svg?component";

defineProps<{ title: string; subtitle: string }>();
</script>

<template>
  <div class="container">
    <div id="top">
      <div id="sky" :class="animation.sky" />
      <City class="city" :class="animation.dash" />
    </div>
    <div id="bottom">
      <div id="ground" :class="animation.move" />
    </div>
    <!-- <div id="text" :class="animation.zoom"> -->
    <!-- <h1 class="title" :class="animation.shine">{{title}}</h1> -->
    <!-- <h2 class="subtitle" :class="animation.hover">{{subtitle}}</h2> -->
    <!-- </div> -->
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Russo+One&family=Yellowtail&display=swap");

::v-deep(.outline) {
  stroke-dasharray: 2830;
  fill-opacity: 0.25;
  fill-rule: nonzero;
  stroke-width: 2.5px;
  stroke: white;
  fill: black;
}
.container {
  display: grid;
  height: 100%;
  width: 200%;
  background: var(--navy);
  overflow: hidden;

  position: relative;
  left: 50%;
  border: 8px solid;
  border-color: darkmagenta magenta;
  outline: 8px ridge cyan;
  outline-offset: 4px;
}

.city {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform-origin: 50% 100%;
  transform: scale(0.5) translateX(-100%);
}
#top {
  height: 67%;
  background: linear-gradient(transparent 50%, hotpink 160%);
  box-shadow: 0 15px 50px 1px white;
  position: relative;
}
#sky {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;

  background: repeating-linear-gradient(
      pink 2px,
      transparent 3px,
      transparent 30px
    ),
    repeating-linear-gradient(
        90deg,
        pink 2px,
        transparent 3px,
        transparent 40px
      )
      10px 0;
  filter: drop-shadow(0 0 1px magenta) drop-shadow(0 0 3px magenta)
    drop-shadow(0 0 7px cyan);
  opacity: 0.2;
}
#bottom {
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  transform: perspective(500px) rotateX(65deg);
  bottom: -15%;
  background: linear-gradient(
    90deg,
    hotpink -60%,
    transparent 40%,
    transparent 60%,
    hotpink 140%
  );
  clip-path: polygon(0 100%, 0 55%, 100% 55%, 100% 100%);
}

#ground {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 55%;
  background: repeating-linear-gradient(
      white 2px,
      transparent 3px,
      transparent 30px
    ),
    repeating-linear-gradient(
      90deg,
      white 2px,
      transparent 3px,
      transparent 40px
    );
  filter: drop-shadow(0 0 1px cyan) drop-shadow(0 0 3px cyan)
    drop-shadow(0 0 7px cyan);
}

#text {
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
}
.title {
  color: transparent;
  font-family: "Russo One", sans-serif;
  text-transform: uppercase;
  font-size: 8vw;
  transform: translatey(25%);
  background: linear-gradient(
    cornflowerblue 30%,
    white,
    darkmagenta 60%,
    cornflowerblue 100%
  );
  background-clip: text;
  background-size: contain;
  -webkit-text-stroke: 1px silver;
  filter: drop-shadow(5px 5px 1px black) drop-shadow(1px 1px 1px magenta);
}
.subtitle {
  color: white;
  font-family: "Yellowtail", cursive;
  font-weight: 100;
  font-size: 5vw;
  transform: translatey(-10%) rotatez(-5deg);
  text-shadow: 0 0 3px magenta, 0 0 7px magenta, 0 0 15px black, 0 0 15px black;
}
</style>
<style module="animation">
.hover {
  animation: hover 1s ease-in 1;
}
.dash {
  animation: dash 5s ease-in-out forwards;
}
.shine {
  animation: bg-shift 0.5s ease-in-out 1 alternate;
}
.move {
  animation: move 30s linear 1;
}

.sky {
  animation: move 10s linear 1;
}

.zoom {
  animation: zoom 30s linear 1;
}

@keyframes zoom {
  from {
    transform: scale(25%);
  }
  to {
    transform: scale(100%);
  }
}

@keyframes move {
  to {
    background-position-y: 2000px;
  }
}
@keyframes bg-shift {
  0% {
    background-position: 0 -25px;
  }
  100% {
    background-position: 0 25px;
  }
}

@keyframes hover {
  0% {
    transform: translatey(-10px) rotatez(-5deg) perspective(200px) translatez(0);
  }
  50% {
    transform: translatey(-10px) rotatez(-5deg) perspective(200px)
      translatez(50px);
  }
  100% {
    transform: translatey(-10px) rotatez(-5deg) perspective(200px) translatez(0);
  }
}
@keyframes dash {
  from {
    stroke-dashoffset: 2830;
  }
  85% {
    stroke-dashoffset: 850;
  }
  /* 98% {
    stroke-dashoffset: 50;
  } */
  to {
    stroke-dashoffset: 0;
  }
}
</style>
