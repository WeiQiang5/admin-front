<template>
  <div class="hello">
    <div ref="fullScreen" style="background: white">
      <p>是否全屏: {{ isFullscreen }}</p>
      <button @click="setFull" id="a">全屏</button>
      <button @click="exitFull">退出全屏</button>
      <button @click="toggle">toggle切换</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useFullscreen } from "@/hooks/useFullscreen/index";

const [isFullscreen, { setFull, exitFull, toggle }] = useFullscreen();
</script>
