<script setup lang="ts">
  import GearPowerSlot from '@/components/parts/GearPowerSlot.vue';
  import {
    GearType,
    IGear,
    GearSlotNumber,
    GearPowerName,
  } from '@/@types/type';

  export interface GearFieldProps {
    gear: IGear;
    gearType: GearType;
  }

  const props = defineProps<GearFieldProps>();

  interface Emits {
    (
      e: 'updateGearPower',
      gearId: string,
      newGearName: GearPowerName,
      slot: GearSlotNumber
    ): void;
  }

  const emits = defineEmits<Emits>();

  const updateGearPower = (
    gearId: string,
    newGearPowerName: GearPowerName,
    slot: GearSlotNumber
  ) => {
    emits('updateGearPower', gearId, newGearPowerName, slot);
  };
</script>

<template>
  <div>
    <GearPowerSlot
      v-for="(gearPower, index) in props.gear.gearPowers"
      class="p-1 lg:px-2 xl:px-5"
      :gear-id="props.gear.id"
      :gear-power="gearPower"
      :slot-number="index as GearSlotNumber"
      :gear-type="props.gearType"
      @update-gear-power="updateGearPower"
    />
  </div>
</template>
