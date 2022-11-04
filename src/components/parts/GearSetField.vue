<script setup lang="ts">
  import { Trash, ChevronDown, Copy, MoreHorizontal } from 'lucide-vue-next';
  import GearField from '@/components/parts/GearField.vue';
  import GearPowerSummary from '@/components/parts/GearPowerSummary.vue';
  import SimpleModal from '@/components/parts/SimpleModal.vue';
  import { GearPowerName, GearSlotNumber, IGearSet } from '@/@types/type';

  export interface GearSetFieldProps {
    gearSet: IGearSet;
  }

  const props = defineProps<GearSetFieldProps>();

  interface Emits {
    (
      e: 'updateGearPower',
      gearId: string,
      newGearName: GearPowerName,
      slot: GearSlotNumber
    ): void;
    (e: 'duplicateGearSet', gearSetId: string): void;
    (e: 'deleteGearSet', gearSetId: string): void;
  }

  const emits = defineEmits<Emits>();

  const updateGearPower = (
    gearId: string,
    newGearPowerName: GearPowerName,
    slot: GearSlotNumber
  ) => {
    emits('updateGearPower', gearId, newGearPowerName, slot);
  };

  const duplicateGearSet = () => {
    emits('duplicateGearSet', props.gearSet.id);
  };

  const deleteGearSet = () => {
    emits('deleteGearSet', props.gearSet.id);
  };
</script>

<template>
  <div class="relative rounded-3xl bg-white p-5 shadow-lg">
    <div class="flex items-center justify-evenly">
      <div class="w-full sm:border-r-2">
        <p>アタマ</p>
        <GearField
          class="flex items-center justify-center"
          :gear="props.gearSet.head"
          :gear-type="'HEAD'"
          @update-gear-power="updateGearPower"
        />
        <p>フク</p>
        <GearField
          class="flex items-center justify-center"
          :gear="props.gearSet.clothing"
          :gear-type="'CLOTHING'"
          @update-gear-power="updateGearPower"
        />
        <p>クツ</p>
        <GearField
          class="flex items-center justify-center"
          :gear="props.gearSet.shoes"
          :gear-type="'SHOES'"
          @update-gear-power="updateGearPower"
        />
      </div>
      <div class="hidden w-full sm:block">
        <GearPowerSummary :gear-set="props.gearSet" />
      </div>
    </div>
    <div class="dropdown-end dropdown absolute top-2 right-2">
      <label tabindex="0" class="btn-xs btn m-1"><ChevronDown /></label>
      <ul
        tabindex="0"
        class="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow"
      >
        <li @click="duplicateGearSet">
          <div>
            <Copy />
            <a>複製</a>
          </div>
        </li>
        <li @click="deleteGearSet">
          <div>
            <Trash color="red" />
            <a class="text-red-600">削除</a>
          </div>
        </li>
      </ul>
    </div>
    <div class="absolute bottom-4 right-4 sm:hidden">
      <SimpleModal
        :modal-id="`gear-power-summary-modal-${props.gearSet.id}`"
        :modal-button-classes="['btn', 'btn-sm', 'btn-circle']"
      >
        <template #open-btn>
          <MoreHorizontal />
        </template>
        <template #content>
          <GearPowerSummary :gear-set="props.gearSet" />
        </template>
      </SimpleModal>
    </div>
  </div>
</template>
