<script setup lang="ts">
  import { Info } from 'lucide-vue-next';
</script>

<template>
  <div class="alert shadow-lg">
    <div>
      <Info color="deepskyblue" :size="32" />
      <span><slot name="content"></slot></span>
    </div>
  </div>
</template>
