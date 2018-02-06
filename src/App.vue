<template>
  <div id="app">
    <div class="items-wrap">
      <div class="items">
        <img src="./assets/item.png" class="item-left">
        <img src="./assets/item.png" class="item-right">
      </div>
    </div>
    <Navbar/>
    <Content/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Content from './components/Content'

export default {
  name: 'App',
  components: {
    Navbar,
    Content
  }
}
</script>

<style>
/*
Explicitly define a Segoe UI font-family so that we can assign Segoe UI 
Semilight to an appropriate font-weight.
*/
@font-face {
    font-family: "Segoe UI";
    font-weight: 200;
    src: local("Segoe UI Light");
}
@font-face {
    font-family: "Segoe UI";
    font-weight: 300;
    src: local("Segoe UI Semilight");
}
@font-face {
    font-family: "Segoe UI";
    font-weight: 400;
    src: local("Segoe UI");
}
@font-face {
    font-family: "Segoe UI";
    font-weight: 600;
    src: local("Segoe UI Semibold");
}
@font-face {
    font-family: "Segoe UI";
    font-weight: 700;
    src: local("Segoe UI Bold");
}
@font-face {
    font-family: "Segoe UI";
    font-style: italic;
    font-weight: 400;
    src: local("Segoe UI Italic");
}
@font-face {
    font-family: "Segoe UI";
    font-style: italic;
    font-weight: 700;
    src: local("Segoe UI Bold Italic");
}
body {
  font-family: 'Segoe UI';
  margin: 0;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  background-color: #1779ba;
  background-image: url(./assets/opacity.png);
  background-position: 50% 70%;
  position: relative;
}
.items-wrap {
  position: absolute;
  width: 100%;
  height: 100%;
}
.items {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.item-left, .item-right {
  position: absolute;
  width: 30%;
  top: 40%;
  filter: blur(2px);
}
.item-left {
  left: -5%;
  transform: rotate3d(0, 0, 1, 50deg);
}
.item-right {
  right: -5%;
  transform: rotate3d(0,0,-1,80deg);
}
</style>
