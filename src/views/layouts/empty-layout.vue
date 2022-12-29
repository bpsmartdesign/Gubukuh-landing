<template>
  <div>
    <div
      class="cva-flex cva-items-center cva-justify-center cva-bg-primary-light cva--preloader_container"
    >
      <div class="cva--preloader_content">
        <span class="cva-bg-white"></span>
        <span class="cva-bg-white"></span>
        <span class="cva-bg-white"></span>
        <span class="cva-bg-white"></span>
        <span class="cva-bg-white"></span>
        <span class="cva-bg-white"></span>
        <span class="cva-bg-white"></span>
        <span class="cva-bg-white"></span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.cva--preloader_container {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 999;

  .cva--preloader_content {
    position: relative;
    margin-left: 92px;

    span {
      position: absolute;
      width: 6px;
      height: 90px;
      margin-top: -45px;
      border-radius: 10px;
      animation: animate 0.8s infinite;
      animation-direction: alternate-reverse;

      &:nth-child(1) {
        margin-left: 0px;
      }
      &:nth-child(2) {
        margin-left: -14px;
        animation-delay: 0.1s;
      }
      &:nth-child(3) {
        margin-left: -28px;
        animation-delay: 0.2s;
      }
      &:nth-child(4) {
        margin-left: -42px;
        animation-delay: 0.3s;
      }
      &:nth-child(5) {
        margin-left: -56px;
        animation-delay: 0.4s;
      }
      &:nth-child(6) {
        margin-left: -70px;
        animation-delay: 0.5s;
      }
      &:nth-child(7) {
        margin-left: -84px;
        animation-delay: 0.6s;
      }
      &:nth-child(8) {
        margin-left: -98px;
        animation-delay: 0.7s;
      }
    }
  }
}
@keyframes animate {
  0% {
    height: 5px;
    margin-top: 0;
    transform: rotate(40deg);
  }
  100% {
    height: 90px;
    transform: rotate(0deg);
  }
}
</style>
