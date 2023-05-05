<template>
  <a href="" class="grid-icon grid-icon--line2">
    <span class="layer layer--primary"> <span></span><span></span> </span>
    <span class="layer layer--secondary"> <span></span><span></span> </span>
  </a>
</template>
<style scoped>
/* common */

.container {
  width: 2em;
}

.grid-icon {
  display: inline-block;
}

.grid-icon:hover > span > span {
  opacity: 0.8;
}

.grid-icon > .layer {
  width: 100%;
  position: absolute;
  left: 0;
}

.grid-icon--line2 {
  position: relative;
  width: 11px;
  height: 11px;
}

.grid-icon--line2 > .layer {
  height: 6px;
}

.grid-icon--line2 > .layer--primary {
  top: 0;
}

.grid-icon--line2 > .layer--secondary {
  bottom: 0;
}

.grid-icon--line2 > .layer > span {
  position: absolute;
  display: block;
  width: 6px;
  height: 100%;
  box-sizing: border-box;
  border: solid 1px #2F54C9;
}

.grid-icon--line2 > .layer > span:first-child {
  left: 0;
}

.grid-icon--line2 > .layer > span:nth-child(2) {
  right: 0;
}
</style>
