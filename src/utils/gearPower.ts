import {
    ClothingGearPowerName, HeadGearPowerName, MainGearPowerName, ShoesGearPowerName,
    SubGearPowerName
} from '@/@types/type';

export const GEAR_POWER_KEYS = {
  FULL: <MainGearPowerName[]>[
    'ability_doubler',
    'comeback',
    'drop_roller',
    'haunt',
    'ink_recovery_up',
    'ink_resistance_up',
    'ink_saver_main',
    'ink_saver_sub',
    'intensify_action',
    'last_ditch_effort',
    'ninja_squid',
    'object_shredder',
    'opening_gambit',
    'quick_respawn',
    'quick_super_jump',
    'respawn_punisher',
    'run_speed_up',
    'special_charge_up',
    'special_power_up',
    'special_saver',
    'stealth_jump',
    'sub_power_up',
    'sub_resistance_up',
    'swim_speed_up',
    'tenacity',
    'thermal_ink',
  ],
  SUB: <SubGearPowerName[]>[
    'ink_recovery_up',
    'ink_resistance_up',
    'ink_saver_main',
    'ink_saver_sub',
    'intensify_action',
    'quick_respawn',
    'quick_super_jump',
    'run_speed_up',
    'special_charge_up',
    'special_power_up',
    'special_saver',
    'sub_power_up',
    'sub_resistance_up',
    'swim_speed_up',
  ],
  HEAD: <HeadGearPowerName[]>[
    'comeback',
    'last_ditch_effort',
    'opening_gambit',
    'tenacity',
    'ink_recovery_up',
    'ink_resistance_up',
    'ink_saver_main',
    'ink_saver_sub',
    'intensify_action',
    'quick_respawn',
    'quick_super_jump',
    'run_speed_up',
    'special_charge_up',
    'special_power_up',
    'special_saver',
    'sub_power_up',
    'sub_resistance_up',
    'swim_speed_up',
  ],
  CLOTHING: <ClothingGearPowerName[]>[
    'ability_doubler',
    'haunt',
    'ninja_squid',
    'respawn_punisher',
    'thermal_ink',
    'ink_recovery_up',
    'ink_resistance_up',
    'ink_saver_main',
    'ink_saver_sub',
    'intensify_action',
    'quick_respawn',
    'quick_super_jump',
    'run_speed_up',
    'special_charge_up',
    'special_power_up',
    'special_saver',
    'sub_power_up',
    'sub_resistance_up',
    'swim_speed_up',
  ],
  SHOES: <ShoesGearPowerName[]>[
    'drop_roller',
    'object_shredder',
    'stealth_jump',
    'ink_recovery_up',
    'ink_resistance_up',
    'ink_saver_main',
    'ink_saver_sub',
    'intensify_action',
    'quick_respawn',
    'quick_super_jump',
    'run_speed_up',
    'special_charge_up',
    'special_power_up',
    'special_saver',
    'sub_power_up',
    'sub_resistance_up',
    'swim_speed_up',
  ],
};

export const GEAR_POWER_RECORD_JA: Record<MainGearPowerName, string> = {
  ability_doubler: '追加ギアパワー倍化',
  comeback: 'カムバック',
  drop_roller: '受け身',
  haunt: 'リベンジ',
  ink_recovery_up: 'インク回復力アップ',
  ink_resistance_up: '相手インク影響軽減',
  ink_saver_main: 'メイン効率アップ',
  ink_saver_sub: 'サブ効率アップ',
  intensify_action: 'アクション強化',
  last_ditch_effort: 'ラストスパート',
  ninja_squid: 'イカニンジャ',
  object_shredder: '対物攻撃力アップ',
  opening_gambit: 'スタートダッシュ',
  quick_respawn: '復活時間短縮',
  quick_super_jump: 'スーパージャンプ時間短縮',
  respawn_punisher: '復活ペナルティアップ',
  run_speed_up: 'ヒト移動速度アップ',
  special_charge_up: 'スペシャル増加量アップ',
  special_power_up: 'スペシャル性能アップ',
  special_saver: 'スペシャル減少量ダウン',
  stealth_jump: 'ステルスジャンプ',
  sub_power_up: 'サブ性能アップ',
  sub_resistance_up: 'サブ影響軽減',
  swim_speed_up: 'イカダッシュ速度アップ',
  tenacity: '逆境強化',
  thermal_ink: 'サーマルインク',
};
