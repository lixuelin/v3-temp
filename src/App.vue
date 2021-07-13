<template>
  <div>
    <div class="v3-logo">
      <img src="./assets/image/vue_logo.png" alt="" />
    </div>
    <h1>渐进式Javascript框架</h1>
    <div class="content">
      <HellowVue3></HellowVue3>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HellowVue3 from "./components/HelloVue3.vue";
export default defineComponent({
  components: { HellowVue3 },
});
</script>

<style>
#app {
  padding: 50px;
  text-align: center;
}
.v3-logo {
  margin: 0 auto;
  width: 120px;
}
.v3-logo img {
  display: block;
  width: 100%;
}
.content {
  margin: 0 auto;
  width: 1000px;
}
</style>
