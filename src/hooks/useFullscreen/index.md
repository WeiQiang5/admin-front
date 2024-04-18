# useFullscreen

一个用于处理 dom 全屏的 hook

# 使用 Demo

```vue
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

<script lang="ts">
import { useFullscreen } from "v3hooks";

export default {
  setup() {
    const [isFullscreen, { setFull, exitFull, toggle }] = useFullscreen();

    // useVirtualList测试
    return {
      isFullscreen,
      setFull,
      exitFull,
      toggle,
    };
  },
};
</script>
```
