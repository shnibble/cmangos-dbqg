const item_default_state = {
    entry: '0',
    patch: '0',
    class: '0',
    classIndex: 0,
    subclass: '0',
    name: '',
    description: '',
    display_id: '0',
    quality: '0',
    inventory_type: '0',
    allowable_class: '-1',
    item_level: '0',
    required_level: '0',
    bonding: '0',
    material: '0',
    sheath: '0',
    max_durability: '0',
    stat_type1: '0',
    stat_value1: '0',
    stat_type2: '0',
    stat_value2: '0',
    stat_type3: '0',
    stat_value3: '0',
    stat_type4: '0',
    stat_value4: '0',
    stat_type5: '0',
    stat_value5: '0',
    stat_type6: '0',
    stat_value6: '0',
    stat_type7: '0',
    stat_value7: '0',
    stat_type8: '0',
    stat_value8: '0',
    stat_type9: '0',
    stat_value9: '0',
    stat_type10: '0',
    stat_value10: '0',
    delay: '1000',
    ammo_type: '0',
    dmg_min1: '0',
    dmg_max1: '0',
    dmg_type1: '0',
    dmg_min2: '0',
    dmg_max2: '0',
    dmg_type2: '0',
    dmg_min3: '0',
    dmg_max3: '0',
    dmg_type3: '0',
    dmg_min4: '0',
    dmg_max4: '0',
    dmg_type4: '0',
    dmg_min5: '0',
    dmg_max5: '0',
    dmg_type5: '0',
    block: '0',
    armor: '0',
    holy_res: '0',
    fire_res: '0',
    nature_res: '0',
    frost_res: '0',
    shadow_res: '0',
    arcane_res: '0',
    spellid_1: '0',
    spelltrigger_1: '0',
    spellcharges_1: '0',
    spellppmrate_1: '0',
    spellcooldown_1: '-1',
    spellcategory_1: '0',
    spellcategorycooldown_1: '-1',
    spellid_2: '0',
    spelltrigger_2: '0',
    spellcharges_2: '0',
    spellppmrate_2: '0',
    spellcooldown_2: '-1',
    spellcategory_2: '0',
    spellcategorycooldown_2: '-1',
    spellid_3: '0',
    spelltrigger_3: '0',
    spellcharges_3: '0',
    spellppmrate_3: '0',
    spellcooldown_3: '-1',
    spellcategory_3: '0',
    spellcategorycooldown_3: '-1',
    spellid_4: '0',
    spelltrigger_4: '0',
    spellcharges_4: '0',
    spellppmrate_4: '0',
    spellcooldown_4: '-1',
    spellcategory_4: '0',
    spellcategorycooldown_4: '-1',
    spellid_5: '0',
    spelltrigger_5: '0',
    spellcharges_5: '0',
    spellppmrate_5: '0',
    spellcooldown_5: '-1',
    spellcategory_5: '0',
    spellcategorycooldown_5: '-1',
}

const item_class = [
    { id: null, value: null },
    { id: 0,  value: 'Consumable', 
        subclass: [
            { id: 0,  value: 'Consumable' },
            { id: 1,  value: 'Potion' },
            { id: 2,  value: 'Elixir' },
            { id: 3,  value: 'Flask' },
            { id: 4,  value: 'Scroll' },
            { id: 5,  value: 'Food & Drink' },
            { id: 6,  value: 'Item Enhancement' },
            { id: 7,  value: 'Bandage' },
            { id: 8,  value: 'Other' }
        ]
    },
    { id: 1,  value: 'Container', 
        subclass: [
            { id: 0,  value: 'Bag' },
            { id: 1,  value: 'Soul Bag' },
            { id: 2,  value: 'Herb Bag' },
            { id: 3,  value: 'Enchanting Bag' },
            { id: 4,  value: 'Engineering Bag' },
            { id: 5,  value: 'Gem Bag' },
            { id: 6,  value: 'Mining Bag' },
            { id: 7,  value: 'Leatherworking Bag' }
        ]
    },
    { id: 2,  value: 'Weapon', 
        subclass: [
            { id: 0,  value: 'Axe (One handed)' },
            { id: 1,  value: 'Axe (Two handed)' },
            { id: 2,  value: 'Bow' },
            { id: 3,  value: 'Gun' },
            { id: 4,  value: 'Mace (One handed)' },
            { id: 5,  value: 'Mace (Two handed)' },
            { id: 6,  value: 'Polearm' },
            { id: 7,  value: 'Sword (One handed)' },
            { id: 8,  value: 'Sword (Two handed)' },
            { id: 10, value: 'Staff' },
            { id: 13, value: 'Fist Weapon' },
            { id: 14, value: 'Miscellaneous (Blacksmith Hammer, Mining Pick, etc.)' },
            { id: 15, value: 'Dagger' },
            { id: 16, value: 'Thrown' },
            { id: 17, value: 'Spear' },
            { id: 18, value: 'Crossbow' },
            { id: 19, value: 'Wand' },
            { id: 20, value: 'Fishing Pole' }
        ]
    },
    { id: 4,  value: 'Armor', 
        subclass: [
            { id: 0,  value: 'Miscellaneous' },
            { id: 1,  value: 'Cloth' },
            { id: 2,  value: 'Leather' },
            { id: 3,  value: 'Mail' },
            { id: 4,  value: 'Plate' },
            { id: 6,  value: 'Shield' },
            { id: 7,  value: 'Libram' },
            { id: 8,  value: 'Idol' },
            { id: 9,  value: 'Totem' }
        ]
    },
    { id: 5,  value: 'Reagent' },
    { id: 6,  value: 'Projectile',
        subclass: [
            { id: 2,  value: 'Arrow' },
            { id: 3,  value: 'Bullet' }
        ]
    },
    { id: 7,  value: 'Trade Goods',
        subclass: [
            { id: 0,  value: 'Trade Goods' },
            { id: 1,  value: 'Parts' },
            { id: 2,  value: 'Explosives' },
            { id: 3,  value: 'Devices' },
            { id: 5,  value: 'Cloth' },
            { id: 6,  value: 'Leather' },
            { id: 7,  value: 'Metal & Stone' },
            { id: 8,  value: 'Meat' },
            { id: 9,  value: 'Herb' },
            { id: 10, value: 'Elemental' },
            { id: 11, value: 'Other' },
            { id: 12, value: 'Enchanting' }
        ]
    },
    { id: 9,  value: 'Recipe',
        subclass: [
            { id: 0,  value: 'Book' },
            { id: 1,  value: 'Leatherworking' },
            { id: 2,  value: 'Tailoring' },
            { id: 3,  value: 'Engineering' },
            { id: 4,  value: 'Blacksmithing' },
            { id: 5,  value: 'Cooking' },
            { id: 6,  value: 'Alchemy' },
            { id: 7,  value: 'First Aid' },
            { id: 8,  value: 'Enchanting' },
            { id: 9,  value: 'Fishing' }
        ]
    },
    { id: 11, value: 'Quiver',
        subclass: [
            { id: 2,  value: 'Quiver' },
            { id: 3,  value: 'Ammo Pouch' }
        ]
    },
    { id: 12, value: 'Quest' },
    { id: 13, value: 'Key',
        subclass: [
            { id: 0,  value: 'Key' },
            { id: 1,  value: 'Lockpick' }
        ]
    },
    { id: 15, value: 'Miscellaneous',
        subclass: [
            { id: 0,  value: 'Junk' },
            { id: 1,  value: 'Reagent' },
            { id: 2,  value: 'Pet' },
            { id: 3,  value: 'Holiday' },
            { id: 4,  value: 'Other' },
            { id: 5,  value: 'Mount' }
        ]
    }
]

const item_patch = [
    { id: 0,  value: 'Launch' },
    { id: 1,  value: '1.3 (Ruins of the Dire Maul)' },
    { id: 2,  value: '1.4 (The Call to War)' },
    { id: 3,  value: '1.5 (Battlegrounds)' },
    { id: 4,  value: '1.6 (Assault on Blackwing Lair)' },
    { id: 5,  value: '1.7 (Rise of the Blood God)' },
    { id: 6,  value: '1.8 (Dragons of Nightmare)' },
    { id: 7,  value: '1.9 (The Gates of Ahn\'Qiraj)' },
    { id: 8,  value: '1.10 (Storms of Azeroth)' },
    { id: 9,  value: '1.11 (Shadow of the Necropolis)' },
    { id: 10, value: '1.12 (Drums of War)' }
]

const item_quality = [
    { id: 0,  color: '9d9d9d', value: 'Poor' },
    { id: 1,  color: 'ffffff', value: 'Common' },
    { id: 2,  color: '1eff00', value: 'Uncommon' },
    { id: 3,  color: '0070dd', value: 'Rare' },
    { id: 4,  color: 'a335ee', value: 'Epic' },
    { id: 5,  color: 'ff8000', value: 'Legendary' },
    { id: 6,  color: 'e6cc80', value: 'Artifact' }
]

const item_inventory_type = [
    { id: 0,  value: 'Non equipable' },
    { id: 1,  value: 'Head' },
    { id: 2,  value: 'Neck' },
    { id: 3,  value: 'Shoulder' },
    { id: 4,  value: 'Shirt' },
    { id: 5,  value: 'Chest' },
    { id: 6,  value: 'Waist' },
    { id: 7,  value: 'Legs' },
    { id: 8,  value: 'Feet' },
    { id: 9,  value: 'Wrists' },
    { id: 10, value: 'Hands' },
    { id: 11, value: 'Finger' },
    { id: 12, value: 'Trinket' },
    { id: 13, value: 'Weapon' },
    { id: 14, value: 'Shield' },
    { id: 15, value: 'Ranged' },
    { id: 16, value: 'Back' },
    { id: 17, value: 'Two-Hand' },
    { id: 18, value: 'Bag' },
    { id: 19, value: 'Tabard' },
    { id: 20, value: 'Robe' },
    { id: 21, value: 'Main hand' },
    { id: 22, value: 'Off hand' },
    { id: 23, value: 'Holdable (Tome)' },
    { id: 24, value: 'Ammo' },
    { id: 25, value: 'Thrown' },
    { id: 26, value: 'Ranged right' },
    { id: 27, value: 'Quiver' },
    { id: 28, value: 'Relic' }
]

const item_allowable_class = [
    { id: -1,   value: 'All' },
    { id: 1024, value: 'Druid' },
    { id: 4,    value: 'Hunter' },
    { id: 128,  value: 'Mage' },
    { id: 2,    value: 'Paladin' },
    { id: 16,   value: 'Priest' },
    { id: 8,    value: 'Rogue' },
    { id: 64,   value: 'Shaman' },
    { id: 256,  value: 'Warlock' },
    { id: 1,    value: 'Warrior' }
]

const item_stat_type = [
    { id: 0, value: null },
    { id: 3, value: 'Agility' },
    { id: 4, value: 'Strength' },
    { id: 5, value: 'Intellect' },
    { id: 6, value: 'Spirit' },
    { id: 7, value: 'Stamina' }
]

const item_damage_type = [
    { id: 0, value: 'Physical' },
    { id: 1, value: 'Holy' },
    { id: 2, value: 'Fire' },
    { id: 3, value: 'Nature' },
    { id: 4, value: 'Frost' },
    { id: 5, value: 'Shadow' },
    { id: 6, value: 'Arcane' },
]

const item_ammo_type = [
    { id: 0, value: null },
    { id: 2, value: 'Arrows' },
    { id: 3, value: 'Bullets' }
]

const item_spells = [
    { id: '0',  trigger: null, name: null, description: null },

    { id: '7597', value: 'Crit +1%' },
    { id: '7598', value: 'Crit +2%' },
    { id: '7599', value: 'Crit +3%' },
    { id: '7600', value: 'Crit +4%' },
    { id: '9405', value: 'Crit +5%' },
    { id: '17713', value: 'Crit +10%' },

    { id: '7513',  value: 'Defense +1' },
    { id: '7514',  value: 'Defense +2' },
    { id: '7515',  value: 'Defense +3' },
    { id: '7517',  value: 'Defense +4' },
    { id: '7518',  value: 'Defense +5' },
    { id: '13384', value: 'Defense +6' },
    { id: '13385', value: 'Defense +7' },
    { id: '13387', value: 'Defense +8' },
    { id: '13388', value: 'Defense +9' },
    { id: '13390', value: 'Defense +10' },
    { id: '18185', value: 'Defense +11' },
    { id: '21408', value: 'Defense +12' },
    { id: '14249', value: 'Defense +13' },
    { id: '21410', value: 'Defense +14' },
    { id: '18196', value: 'Defense +15' },
    { id: '21412', value: 'Defense +16' },
    { id: '13389', value: 'Defense +17' },
    { id: '21413', value: 'Defense +18' },
    { id: '21414', value: 'Defense +19' },
    { id: '21416', value: 'Defense +20' },
    { id: '17513', value: 'Defense +21' },
    { id: '24775', value: 'Defense +80' },
    { id: '24774', value: 'Defense +120' },

    { id: '13669', value: 'Dodge 1%' },
    { id: '13670', value: 'Dodge 2%' },
    { id: '13671', value: 'Dodge 3%' },
    { id: '13672', value: 'Dodge 4%' },
    { id: '13673', value: 'Dodge 5%' },
    { id: '18062', value: 'Dodge 8%' },

    { id: '15464', value: 'Hit +1%' },
    { id: '15465', value: 'Hit +2%' },
    { id: '15466', value: 'Hit +3%' },
    { id: '15467', value: 'Hit +4%' },
    { id: '15468', value: 'Hit +5%' },
    { id: '18066', value: 'Hit +10%' },

    { id: '21622', value: 'MP5 +1' },
    { id: '21623', value: 'MP5 +2' },
    { id: '21624', value: 'MP5 +3' },
    { id: '21625', value: 'MP5 +4' },
    { id: '21363', value: 'MP5 +5' },
    { id: '21626', value: 'MP5 +6' },
    { id: '21628', value: 'MP5 +7' },
    { id: '21629', value: 'MP5 +8' },
    { id: '21631', value: 'MP5 +9' },
    { id: '21632', value: 'MP5 +10' },
    { id: '21634', value: 'MP5 +11' },
    { id: '21635', value: 'MP5 +12' },
    { id: '21638', value: 'MP5 +13' },
    { id: '21640', value: 'MP5 +14' },
    { id: '21643', value: 'MP5 +15' },
    { id: '23212', value: 'MP5 +16' },

    { id: '13665', value: 'Parry +1%' },
    { id: '13667', value: 'Parry +2%' },
    { id: '13668', value: 'Parry +3%' },
    { id: '18063', value: 'Parry +5%' },

    { id: '17713', value: 'Spell Crit +1%' },
    { id: '18382', value: 'Spell Crit +2%' },
    { id: '23433', value: 'Spell Crit +50%' },
    { id: '24426', value: 'Spell Crit +1% (Holy)' },
    { id: '21092', value: 'Spell Crit +2% (Holy)' },
    { id: '21870', value: 'Spell Crit +1% (Nature)' },
    { id: '23570', value: 'Spell Crit +3% (Nature)' },
    { id: '23443', value: 'Spell Crit +2% (Shadow)' },
    { id: '23440', value: 'Spell Crit +50% (Shadow)' },
    { id: '29159', value: 'Spell Crit Against Undead +2%' },

    { id: '23727', value: 'Spell Hit +1%' },
    { id: '23729', value: 'Spell Hit +2%' }
]

const item_spell_trigger = [
    { id: 0, value: 'Use' },
    { id: 1, value: 'On Equip' },
    { id: 2, value: 'Chance on Hit (Weapons only)' },
    { id: 4, value: 'Soulstone' },
    { id: 5, value: 'Use with no delay' }
]

const item_bonding = [
    { id: 0, value: null },
    { id: 1, value: 'Binds when picked up' },
    { id: 2, value: 'Binds when equipped' },
    { id: 3, value: 'Binds when used' },
    { id: 4, value: 'Quest item' }
]

const item_material = [
    { id: 0,  value: null },
    { id: -1, value: 'Consumable' },
    { id: 1,  value: 'Metal' },
    { id: 2,  value: 'Wood' },
    { id: 3,  value: 'Liquid' },
    { id: 4,  value: 'Jewelry' },
    { id: 5,  value: 'Chain' },
    { id: 6,  value: 'Plate' },
    { id: 7,  value: 'Cloth' },
    { id: 8,  value: 'Leather' }
]

const item_sheath = [
    { id: 0, value: null },
    { id: 1, value: 'Two Handed Weapon' },
    { id: 2, value: 'Staff' },
    { id: 3, value: 'One Handed' },
    { id: 4, value: 'Shield' },
    { id: 5, value: 'Enchanter Rod' },
    { id: 6, value: 'Off hand' }
]

module.exports = {
    item_default_state,
    item_class,
    item_patch,
    item_quality,
    item_inventory_type,
    item_allowable_class,
    item_stat_type,
    item_damage_type,
    item_ammo_type,
    item_spells,
    item_spell_trigger,
    item_bonding,
    item_material,
    item_sheath
}