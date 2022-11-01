export type SubGearPowerName =
  | 'ink_recovery_up'
  | 'ink_resistance_up'
  | 'ink_saver_main'
  | 'ink_saver_sub'
  | 'intensify_action'
  | 'quick_respawn'
  | 'quick_super_jump'
  | 'run_speed_up'
  | 'special_charge_up'
  | 'special_power_up'
  | 'special_saver'
  | 'sub_power_up'
  | 'sub_resistance_up'
  | 'swim_speed_up';

export type HeadGearPowerName =
  | SubGearPowerName
  | 'comeback'
  | 'last_ditch_effort'
  | 'opening_gambit'
  | 'tenacity';

export type ClothingGearPowerName =
  | SubGearPowerName
  | 'ability_doubler'
  | 'haunt'
  | 'ninja_squid'
  | 'respawn_punisher'
  | 'thermal_ink';

export type ShoesGearPowerName =
  | SubGearPowerName
  | 'drop_roller'
  | 'object_shredder'
  | 'stealth_jump';

export type MainGearPowerName =
  | HeadGearPowerName
  | ClothingGearPowerName
  | ShoesGearPowerName;

export type GearPowerName =
  | MainGearPowerName
  | SubGearPowerName
  | HeadGearPowerName
  | ClothingGearPowerName
  | ShoesGearPowerName;

export type GearPowerIconName<T extends GearPowerName> = `icon_${T}`;

export type GearPowerRecord<T extends GearPowerName> = {
  gearPower: T;
  icon: GearPowerIconName<T>;
};

export interface IGear {
  id: string;
  gearPowers: [
    GearPowerRecord<MainGearPowerName>,
    GearPowerRecord<SubGearPowerName>,
    GearPowerRecord<SubGearPowerName>,
    GearPowerRecord<SubGearPowerName>
  ];
}

export interface IGearSet {
  id: string;
  head: IGear;
  clothing: IGear;
  shoes: IGear;
}

export type GearSlotNumber = 0 | 1 | 2 | 3;

export type GearType = 'HEAD' | 'CLOTHING' | 'SHOES';

export type GearPowerCountType = '57' | '3,9';
