<script setup lang="ts">
  import { ref } from 'vue';
  import { Edit3 } from 'lucide-vue-next';

  export interface EditableTextInputProps {
    content: string;
  }

  const props = defineProps<EditableTextInputProps>();

  interface Emits {
    (e: 'updateContent', newContent: string): void;
  }

  const emits = defineEmits<Emits>();

  const content = ref(props.content);

  const isEditing = ref(false);

  const toggleEditing = () => {
    isEditing.value = !isEditing.value;
  };

  const isEnterKey = (e: KeyboardEvent) => {
    const key = e.key;
    const keyCode = e.keyCode;
    return key === 'Enter' && keyCode === 13;
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!isEnterKey(e)) return;
    toggleEditing();
    updateContent();
  };

  document.addEventListener('keydown', (e) => {
    if (!isEditing.value || !isEnterKey(e)) return;
    isEditing.value = false;
  });

  const updateContent = () => {
    emits('updateContent', content.value);
  };
</script>

<template>
  <div v-if="!isEditing" class="flex items-center p-1">
    <p class="text-xl">{{ content }}</p>
    <button @click="toggleEditing">
      <Edit3 class="mx-2" :size="20" />
    </button>
  </div>
  <div v-else class="flex items-center">
    <input
      v-model="content"
      type="text"
      class="rounded-md border border-gray-300 p-1 text-xl"
      @keydown="handleKeyDown"
    />
  </div>
</template>
