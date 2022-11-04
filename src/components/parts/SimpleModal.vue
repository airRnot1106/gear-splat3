<script setup lang="ts">
  export interface SimpleModalProps {
    modalId: string;
    modalButtonClasses: string[];
  }

  const props = defineProps<SimpleModalProps>();
</script>

<template>
  <div>
    <label :for="props.modalId" :class="props.modalButtonClasses"
      ><slot name="open-btn"></slot
    ></label>

    <input :id="props.modalId" type="checkbox" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box relative">
        <label
          :for="props.modalId"
          class="btn-sm btn-circle btn absolute right-2 top-2"
          >✕</label
        >
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>
