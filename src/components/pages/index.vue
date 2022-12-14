<script setup lang="ts">
  import { watch, onBeforeMount } from 'vue';
  import GearSetField from '@/components/parts/GearSetField.vue';
  import PlusButton from '@/components/parts/PlusButton.vue';
  import InfoAlert from '@/components/parts/InfoAlert.vue';
  import { useGearStore } from '@/stores/gear';
  import { GearPowerName, GearSlotNumber } from '@/@types/type';

  const gearStore = useGearStore();

  const updateGearPower = (
    gearId: string,
    newGearPowerName: GearPowerName,
    slot: GearSlotNumber
  ) => {
    gearStore.updateGear(gearId, newGearPowerName, slot);
  };

  const duplicateGearSet = (gearSetId: string) => {
    gearStore.duplicateGearSet(gearSetId);
  };

  const deleteGearSet = (gearSetId: string) => {
    gearStore.removeGearSet(gearSetId);
  };

  const addGearSet = () => {
    gearStore.addGearSet();
  };

  const updateGearSetTitle = (gearSetId: string, newTitle: string) => {
    gearStore.updateGearSetTitle(gearSetId, newTitle);
  };

  watch(gearStore.gearSets, () => {
    gearStore.saveCookie();
  });

  onBeforeMount(() => {
    gearStore.initializeGearSets();
  });
</script>

<template>
  <div class="min-h-[95vh] bg-gray-100 p-5 md:px-32">
    <div v-if="gearStore.gearSets.length > 0">
      <GearSetField
        v-for="gearSet in gearStore.gearSets"
        class="mb-10"
        :gear-set="gearSet"
        @update-gear-power="updateGearPower"
        @duplicate-gear-set="duplicateGearSet"
        @delete-gear-set="deleteGearSet"
        @update-gear-set-title="updateGearSetTitle"
      />
    </div>
    <div v-else>
      <InfoAlert>
        <template #content>
          ギアセットがありません。<br
            class="sm:hidden"
          />+ボタンから追加できます。
        </template>
      </InfoAlert>
    </div>
    <PlusButton
      class="fixed bottom-8 right-8 sm:bottom-14 sm:right-14"
      @add-gear-set="addGearSet"
    />
  </div>
</template>
