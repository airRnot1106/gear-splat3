<script setup lang="ts">
  import { computed, ref } from 'vue';
  import {
    GearPowerName,
    GearPowerRecord,
    GearSlotNumber,
    GearType,
  } from '@/@types/type';
  import { GEAR_POWER_KEYS, GEAR_POWER_RECORD_JA } from '@/utils/gearPower';

  interface GearPowerSlotProps {
    gearId: string;
    gearPower: GearPowerRecord<GearPowerName>;
    slotNumber: GearSlotNumber;
    gearType: GearType;
  }

  type SelectEventTarget = EventTarget & {
    selectedIndex: number;
    value: GearPowerName;
  };

  const props = defineProps<GearPowerSlotProps>();

  interface Emits {
    (
      e: 'updateGearPower',
      gearId: string,
      newGearName: GearPowerName,
      slot: GearSlotNumber
    ): void;
  }

  const emits = defineEmits<Emits>();

  const gearPowerOptions =
    GEAR_POWER_KEYS[props.slotNumber === 0 ? props.gearType : 'SUB'];

  const selectedGearPower = ref(props.gearPower.gearPower);
  const iconUrl = computed(
    () =>
      new URL(
        `../../assets/images/${props.gearPower.icon}.webp`,
        import.meta.url
      ).href
  );
  const iconSize = props.slotNumber === 0 ? 60 : 45;

  const updateGearPower = (e: SelectEventTarget) => {
    selectedGearPower.value = e.value;
    emits('updateGearPower', props.gearId, e.value, props.slotNumber);
  };
</script>

<template>
  <div class="relative inline-block">
    <img :src="iconUrl" :width="iconSize" :height="iconSize" />
    <select
      class="absolute top-0 left-0 h-full w-full opacity-0"
      @change="updateGearPower($event.target as SelectEventTarget)"
    >
      <option
        v-for="gearPowerOption in gearPowerOptions"
        :value="gearPowerOption"
        :selected="gearPowerOption === selectedGearPower"
      >
        {{ GEAR_POWER_RECORD_JA[gearPowerOption] }}
      </option>
    </select>
  </div>
</template>
