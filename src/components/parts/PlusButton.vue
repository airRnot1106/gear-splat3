<script setup lang="ts">
  import { Plus } from 'lucide-vue-next';

  interface Emits {
    (e: 'addGearSet'): void;
  }

  const emits = defineEmits<Emits>();

  const addGearSet = () => {
    emits('addGearSet');
  };
</script>

<template>
  <div class="max-w-fit rounded-full bg-white">
    <button
      class="rounded-full bg-black bg-opacity-0 p-3 shadow-lg hover:bg-opacity-5"
    >
      <Plus :size="32" @click="addGearSet" />
    </button>
  </div>
</template>
