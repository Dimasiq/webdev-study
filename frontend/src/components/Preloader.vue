<template>
  <div class="loader loader-11">
    <div class='loader-container'>
      <div class='cube'></div>
      <div class='cube'></div>
      <div class='cube'></div>
      <div class='cube'></div>
      <div class='cube'></div>
      <div class='cube'></div>
      <div class='cube'></div>
      <div class='cube'></div>
      <div class='cube'></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Preloader',
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  font-family: sans-serif;
  margin: 0;
  color: rgb(55,55,55);
  background-color: rgba(240,240,241,0.8);
}
.loader {
  position: absolute;
  height: 300px; width: 50%;
  float: left;
  z-index: 100;
  border: 2px solid white;
  overflow: hidden;
}
.loader-container {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
}
.loader-11 .loader-container {
  width: 120px; height: 120px;
}
.loader-11 .loader-container > .cube {
  display: inline-block;
  float: left;
  width: 40px; height: 40px;
  border: 2px solid rgb(240,240,241);
  background-color: rgb(52,58,64);
  transform: scale(0.0);
  transform-origin: center center;
  animation: loader11 2s infinite linear;
}
.loader-container > .cube:nth-of-type(3) {
  animation-delay: 0s;
}
.loader-container > .cube:nth-of-type(2),
.loader-container > .cube:nth-of-type(6) {
  animation-delay: 0.2s;
}
.loader-container > .cube:nth-of-type(1),
.loader-container > .cube:nth-of-type(5),
.loader-container > .cube:nth-of-type(9) {
  animation-delay: 0.4s;
}
.loader-container > .cube:nth-of-type(4),
.loader-container > .cube:nth-of-type(8) {
  animation-delay: 0.5s;
}
.loader-container > .cube:nth-of-type(7) {
  animation-delay: 0.7s;
}
@keyframes loader11 {
  0%   { transform: scale(0.0); }
  30%  { transform: scale(1.1); }
  40%  { transform: scale(1.0); }
  80%  { transform: scale(1.0); }
  100% { transform: scale(0.0); }
}
</style>
