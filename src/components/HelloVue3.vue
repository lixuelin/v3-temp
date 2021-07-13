<template>
  <div class="hello">
    <div class="vite">
      <div class="vite-logo">
        <img src="./../assets/image/vite_logo.svg" alt="" />
      </div>
      <div class="vite-content">
        <h2>下一代前端开发与构建工具</h2>
        <p><a href="https://www.vitejs.net/config/">Vite</a></p>
      </div>
    </div>
    <div class="typescript">
      <div class="typescript-logo">
        <img src="./../assets/image/typescript_logo.png" alt="" />
      </div>
      <div class="typescript-content">
        <h2>下一代前端开发与构建工具</h2>
        <p><a href="https://www.typescriptlang.org/zh/docs/">Typescript</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({});
</script>

<style>
.hello {
  display: flex;
  padding: 40px;
}
.vite,
.typescript {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.vite-content,
.typescript-content {
  padding-left: 20px;
}
.vite-logo,
.typescript-logo {
  width: 80px;
}
.vite-logo img,
.typescript-logo img {
  display: block;
  width: 100%;
}
</style>
