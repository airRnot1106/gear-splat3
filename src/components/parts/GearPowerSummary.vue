<script setup lang="ts">
  import { computed, ref } from 'vue';
  import {
    IGearSet,
    GearPowerName,
    GearPowerIconName,
    GearPowerCountType,
  } from '@/@types/type';

  export interface GearPowerSlotProps {
    gearSet: IGearSet;
  }

  const props = defineProps<GearPowerSlotProps>();

  const summarizeGearPower = (gearSet: IGearSet) => {
    const gearSetArr = [gearSet.head, gearSet.clothing, gearSet.shoes];
    const baseArr: [
      GearPowerName,
      {
        count: { main: number; sub: number };
        icon: GearPowerIconName<GearPowerName>;
      }
    ][] = gearSetArr
      .flatMap((gear) => gear.gearPowers)
      .map((gearPower) => [
        gearPower.gearPower,
        { count: { main: 0, sub: 0 }, icon: gearPower.icon },
      ]);
    const summary = new Map<
      GearPowerName,
      {
        count: { main: number; sub: number };
        icon: GearPowerIconName<GearPowerName>;
      }
    >(baseArr);
    for (const gear of gearSetArr) {
      gear.gearPowers.forEach((gearPower, slot) => {
        const target = summary.get(gearPower.gearPower);
        if (!target) return;
        if (slot === 0) {
          target.count.main += 1;
        } else {
          target.count.sub += 3;
        }
      });
    }
    return summary;
  };

  const gearPowerSummary = computed(() =>
    [...summarizeGearPower(props.gearSet)].sort(
      (a, b) =>
        b[1].count.main * 10 +
        b[1].count.sub -
        (a[1].count.main * 10 + a[1].count.sub)
    )
  );

  const convertUrl = (icon: GearPowerIconName<GearPowerName>) =>
    new URL(`../../assets/images/${icon}.webp`, import.meta.url).href;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const chunk = <T extends any[]>(arr: T, size: number): T[] => {
    return arr.reduce(
      (newArr, _, i) =>
        i % size ? newArr : [...newArr, arr.slice(i, i + size)],
      [] as T[][]
    );
  };

  const countType = ref<GearPowerCountType>('57');

  const formatCount = (
    countMain: number,
    countSub: number,
    type: GearPowerCountType
  ) => {
    if (type === '57') {
      return `${(countMain * 10 + countSub).toString().padStart(2, '0')}`;
    }
    return `${countMain},${countSub / 3}`;
  };
</script>

<template>
  <div class="relative p-5">
    <p class="absolute top-0 left-3">ギアパワー合計</p>
    <div
      v-for="gearPowersChunk in chunk(gearPowerSummary, 3)"
      class="flex items-center justify-center p-5"
    >
      <div
        v-for="gearPower in gearPowersChunk"
        class="flex items-center justify-center px-3"
      >
        <img :src="convertUrl(gearPower[1].icon)" width="40" height="40" />
        <span class="px-2"
          >x{{
            formatCount(
              gearPower[1].count.main,
              gearPower[1].count.sub,
              countType
            )
          }}</span
        >
      </div>
    </div>
    <div class="absolute top-1/3 -right-2">
      <div class="flex items-center py-1">
        <input
          v-model="countType"
          type="radio"
          :name="`radio-${props.gearSet.id}`"
          value="57"
          class="radio"
          checked
        />
        <span class="px-2">57</span>
      </div>
      <div class="flex items-center py-1">
        <input
          v-model="countType"
          type="radio"
          :name="`radio-${props.gearSet.id}`"
          value="3,9"
          class="radio"
        />
        <span class="px-2">3,9</span>
      </div>
    </div>
  </div>
</template>
