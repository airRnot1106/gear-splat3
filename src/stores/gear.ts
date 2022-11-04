import { defineStore } from 'pinia';
import { v4 as uuid } from 'uuid';

import { GearSlotNumber, IGear, IGearSet, MainGearPowerName } from '@/@types/type';
import { useCookie } from '@/utils/cookie';

interface GearStoreState {
  gearSets: IGearSet[];
  gears: IGear[];
}

const defaultGearSets: IGearSet[] = [
  {
    id: uuid(),
    title: '-',
    description: '',
    rating: 0,
    isFavorite: false,
    head: {
      id: uuid(),
      gearPowers: [
        { gearPower: 'ink_saver_main', icon: 'icon_ink_saver_main' },
        { gearPower: 'ink_saver_main', icon: 'icon_ink_saver_main' },
        { gearPower: 'ink_saver_main', icon: 'icon_ink_saver_main' },
        { gearPower: 'ink_saver_main', icon: 'icon_ink_saver_main' },
      ],
    },
    clothing: {
      id: uuid(),
      gearPowers: [
        { gearPower: 'ink_saver_main', icon: 'icon_ink_saver_main' },
        { gearPower: 'ink_saver_main', icon: 'icon_ink_saver_main' },
        { gearPower: 'ink_saver_main', icon: 'icon_ink_saver_main' },
        { gearPower: 'ink_saver_main', icon: 'icon_ink_saver_main' },
      ],
    },
    shoes: {
      id: uuid(),
      gearPowers: [
        { gearPower: 'ink_saver_main', icon: 'icon_ink_saver_main' },
        { gearPower: 'ink_saver_main', icon: 'icon_ink_saver_main' },
        { gearPower: 'ink_saver_main', icon: 'icon_ink_saver_main' },
        { gearPower: 'ink_saver_main', icon: 'icon_ink_saver_main' },
      ],
    },
  },
];

const mapGears = (gearSets: IGearSet[]): IGear[] =>
  gearSets.flatMap((gearSet) => {
    const head = gearSet.head;
    const clothing = gearSet.clothing;
    const shoes = gearSet.shoes;
    return [head, clothing, shoes];
  });

const [gearSets, gears] = (() => {
  const gearSets = useCookie<IGearSet[]>('gear-sets').value || defaultGearSets;
  const gears = mapGears(gearSets);
  return [gearSets, gears];
})();

export const useGearStore = defineStore('gear', {
  state: () =>
    <GearStoreState>{
      gearSets,
      gears,
    },
  actions: {
    saveCookie() {
      const gearSets = this.gearSets;
      useCookie<IGearSet[]>('gear-sets').value = gearSets;
    },
    initializeGearSets() {
      const gearSets = this.gearSets;
      for (const gearSet of gearSets) {
        gearSet.title ??= '-';
        gearSet.description ??= '';
        gearSet.rating ??= 0;
        gearSet.isFavorite ??= false;
      }
      this.saveCookie();
    },
    addGearSet() {
      const newGearSet: [IGear, IGear, IGear] = [
        {
          id: uuid(),
          gearPowers: [
            {
              gearPower: 'ink_saver_main',
              icon: 'icon_ink_saver_main',
            },
            {
              gearPower: 'ink_saver_main',
              icon: 'icon_ink_saver_main',
            },
            {
              gearPower: 'ink_saver_main',
              icon: 'icon_ink_saver_main',
            },
            {
              gearPower: 'ink_saver_main',
              icon: 'icon_ink_saver_main',
            },
          ],
        },
        {
          id: uuid(),
          gearPowers: [
            {
              gearPower: 'ink_saver_main',
              icon: 'icon_ink_saver_main',
            },
            {
              gearPower: 'ink_saver_main',
              icon: 'icon_ink_saver_main',
            },
            {
              gearPower: 'ink_saver_main',
              icon: 'icon_ink_saver_main',
            },
            {
              gearPower: 'ink_saver_main',
              icon: 'icon_ink_saver_main',
            },
          ],
        },
        {
          id: uuid(),
          gearPowers: [
            {
              gearPower: 'ink_saver_main',
              icon: 'icon_ink_saver_main',
            },
            {
              gearPower: 'ink_saver_main',
              icon: 'icon_ink_saver_main',
            },
            {
              gearPower: 'ink_saver_main',
              icon: 'icon_ink_saver_main',
            },
            {
              gearPower: 'ink_saver_main',
              icon: 'icon_ink_saver_main',
            },
          ],
        },
      ];
      this.gears.push(...newGearSet);
      this.gearSets.push({
        id: uuid(),
        title: '-',
        description: '',
        rating: 0,
        isFavorite: false,
        head: newGearSet[0],
        clothing: newGearSet[1],
        shoes: newGearSet[2],
      });
      this.saveCookie();
    },
    removeGearSet(gearSetId: string) {
      const gearSet = this.gearSets.find((gearSet) => gearSet.id === gearSetId);
      if (!gearSet) return;
      this.gearSets = this.gearSets.filter(
        (gearSet) => gearSet.id !== gearSetId
      );
      this.gears = this.gears.filter(
        (gear) =>
          gear.id !== gearSet.head.id &&
          gear.id !== gearSet.clothing.id &&
          gear.id !== gearSet.shoes.id
      );
      this.saveCookie();
    },
    duplicateGearSet(gearSetId: string) {
      const gearSet = this.gearSets.find((gearSet) => gearSet.id === gearSetId);
      if (!gearSet) return;
      const headGearPowers = [
        ...gearSet.head.gearPowers.map((gearPower) => ({ ...gearPower })),
      ] as IGear['gearPowers'];
      const clothingGearPowers = [
        ...gearSet.clothing.gearPowers.map((gearPower) => ({ ...gearPower })),
      ] as IGear['gearPowers'];
      const shoesGearPowers = [
        ...gearSet.shoes.gearPowers.map((gearPower) => ({ ...gearPower })),
      ] as IGear['gearPowers'];
      const newGearArr: [IGear, IGear, IGear] = [
        { id: uuid(), gearPowers: headGearPowers },
        { id: uuid(), gearPowers: clothingGearPowers },
        { id: uuid(), gearPowers: shoesGearPowers },
      ];
      this.gears.push(...newGearArr);
      const newGearSet: IGearSet = {
        id: uuid(),
        title: `${gearSet.title}のコピー`,
        description: gearSet.description,
        rating: gearSet.rating,
        isFavorite: gearSet.isFavorite,
        head: newGearArr[0],
        clothing: newGearArr[1],
        shoes: newGearArr[2],
      };
      this.gearSets.push(newGearSet);
      this.saveCookie();
    },
    updateGear(
      gearId: string,
      newGearPowerName: MainGearPowerName,
      slot: GearSlotNumber
    ) {
      const targetGear = this.gears.find((gear) => gear.id === gearId);
      if (!targetGear) return;
      targetGear.gearPowers[slot].gearPower = newGearPowerName;
      targetGear.gearPowers[slot].icon = `icon_${newGearPowerName}`;
      this.saveCookie();
    },
    updateGearSetTitle(gearSetId: string, newTitle: string) {
      const targetGearSet = this.gearSets.find(
        (gearSet) => gearSet.id === gearSetId
      );
      if (!targetGearSet) return;
      targetGearSet.title = newTitle;
      this.saveCookie();
    },
  },
});
