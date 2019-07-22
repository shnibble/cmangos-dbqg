function handleEntryChange(event) {
    const newValue = event.target.value
    this.setState({ entry: newValue })
}
function handlePatchChange(event) {
    const newValue = event.target.value
    this.setState({ patch: newValue })
}
function handleClassChange(event) {
    const newValue = event.target.value
    
    // map subclasses from class object in item_template and reset to 0 when changed
    const newClassIndex = event.target.options[event.target.selectedIndex].getAttribute('data-index')
    this.setState({ class: newValue, classIndex: newClassIndex, subclass: '0' })

    // if class is a projectile then hardcode delay to 3000
    // (unsure why but all existing projectiles are set to delay 3000)
    if (newValue === '6') {
        this.setState({ delay: '3000' })

    // otherwise reset back to default 1000
    } else {
        this.setState({ delay: '1000' })
    }
}
function handleSubclassChange(event) {
    const newValue = event.target.value
    this.setState({ subclass: newValue })

    // when class is a weapon and...
    if (this.state.class === '2') {
        // if subclass is a bow or crossbow then hardcode ammo_type to arrows
        if (newValue === '2' || newValue === '18') {
            this.setState({ ammo_type: '2' })
        // if subclass is a gun then hardcode ammo_type to bullets
        } else if (newValue === '3') {
            this.setState({ ammo_type: '3' })
        } else {
            this.setState({ ammo_type: '0' })
        }
    
    // otherwise reset back to default 0
    } else {
        this.setState({ ammo_type: '0' })
    }
}
function handleNameChange(event) {
    const newValue = event.target.value
    this.setState({ name: newValue })
}
function handleDescriptionChange(event) {
    const newValue = event.target.value
    this.setState({ description: newValue })
}
function handleDisplayIdChange(event) {
    const newValue = event.target.value
    this.setState({ display_id: newValue })
}
function handleQualityChange(event) {
    const newValue = event.target.value
    const newQualityColor = event.target.options[event.target.selectedIndex].getAttribute('data-color')
    this.setState({ quality: newValue, qualityColor: newQualityColor })
}
function handleInventoryTypeChange(event) {
    const newValue = event.target.value
    this.setState({ inventory_type: newValue })
}
function handleAllowableClassChange(event) {
    const newValue = event.target.value
    this.setState({ allowable_class: newValue })
}
function handleItemLevelChange(event) {
    const newValue = event.target.value
    this.setState({ item_level: newValue })
}
function handleRequiredLevelChange(event) {
    const newValue = event.target.value
    this.setState({ required_level: newValue })
}
function handleBondingChange(event) {
    const newValue = event.target.value
    this.setState({ bonding: newValue })
}
function handleMaterialChange(event) {
    const newValue = event.target.value
    this.setState({ material: newValue })
}
function handleSheathChange(event) {
    const newValue = event.target.value
    this.setState({ sheath: newValue })
}
function handleDurabilityChange(event) {
    const newValue = event.target.value
    this.setState({ max_durability: newValue })
}
function handleStatType1Change(event) {
    const newValue = event.target.value
    this.setState({ stat_type1: newValue })
}
function handleStatValue1Change(event) {
    const newValue = event.target.value
    this.setState({ stat_value1: newValue })
}
function handleStatType2Change(event) {
    const newValue = event.target.value
    this.setState({ stat_type2: newValue })
}
function handleStatValue2Change(event) {
    const newValue = event.target.value
    this.setState({ stat_value2: newValue })
}
function handleStatType3Change(event) {
    const newValue = event.target.value
    this.setState({ stat_type3: newValue })
}
function handleStatValue3Change(event) {
    const newValue = event.target.value
    this.setState({ stat_value3: newValue })
}
function handleStatType4Change(event) {
    const newValue = event.target.value
    this.setState({ stat_type4: newValue })
}
function handleStatValue4Change(event) {
    const newValue = event.target.value
    this.setState({ stat_value4: newValue })
}
function handleStatType5Change(event) {
    const newValue = event.target.value
    this.setState({ stat_type5: newValue })
}
function handleStatValue5Change(event) {
    const newValue = event.target.value
    this.setState({ stat_value5: newValue })
}
function handleStatType6Change(event) {
    const newValue = event.target.value
    this.setState({ stat_type6: newValue })
}
function handleStatValue6Change(event) {
    const newValue = event.target.value
    this.setState({ stat_value6: newValue })
}
function handleStatType7Change(event) {
    const newValue = event.target.value
    this.setState({ stat_type7: newValue })
}
function handleStatValue7Change(event) {
    const newValue = event.target.value
    this.setState({ stat_value7: newValue })
}
function handleStatType8Change(event) {
    const newValue = event.target.value
    this.setState({ stat_type8: newValue })
}
function handleStatValue8Change(event) {
    const newValue = event.target.value
    this.setState({ stat_value8: newValue })
}
function handleStatType9Change(event) {
    const newValue = event.target.value
    this.setState({ stat_type9: newValue })
}
function handleStatValue9Change(event) {
    const newValue = event.target.value
    this.setState({ stat_value9: newValue })
}
function handleStatType10Change(event) {
    const newValue = event.target.value
    this.setState({ stat_type10: newValue })
}
function handleStatValue10Change(event) {
    const newValue = event.target.value
    this.setState({ stat_value10: newValue })
}
function handleDelayChange(event) {
    const newValue = event.target.value
    this.setState({ delay: newValue })
}
function handleAmmoTypeChange(event) {
    const newValue = event.target.value
    this.setState({ ammo_type: newValue })
}
function handleDamageMin1Change(event) {
    const newValue = event.target.value
    this.setState({ dmg_min1: newValue })
}
function handleDamageMax1Change(event) {
    const newValue = event.target.value
    this.setState({ dmg_max1: newValue })
}
function handleDamageType1Change(event) {
    const newValue = event.target.value
    this.setState({ dmg_type1: newValue })
}
function handleDamageMin2Change(event) {
    const newValue = event.target.value
    this.setState({ dmg_min2: newValue })
}
function handleDamageMax2Change(event) {
    const newValue = event.target.value
    this.setState({ dmg_max2: newValue })
}
function handleDamageType2Change(event) {
    const newValue = event.target.value
    this.setState({ dmg_type2: newValue })
}
function handleDamageMin3Change(event) {
    const newValue = event.target.value
    this.setState({ dmg_min3: newValue })
}
function handleDamageMax3Change(event) {
    const newValue = event.target.value
    this.setState({ dmg_max3: newValue })
}
function handleDamageType3Change(event) {
    const newValue = event.target.value
    this.setState({ dmg_type3: newValue })
}
function handleDamageMin4Change(event) {
    const newValue = event.target.value
    this.setState({ dmg_min4: newValue })
}
function handleDamageMax4Change(event) {
    const newValue = event.target.value
    this.setState({ dmg_max4: newValue })
}
function handleDamageType4Change(event) {
    const newValue = event.target.value
    this.setState({ dmg_type4: newValue })
}
function handleDamageMin5Change(event) {
    const newValue = event.target.value
    this.setState({ dmg_min5: newValue })
}
function handleDamageMax5Change(event) {
    const newValue = event.target.value
    this.setState({ dmg_max5: newValue })
}
function handleDamageType5Change(event) {
    const newValue = event.target.value
    this.setState({ dmg_type5: newValue })
}
function handleBlockChange(event) {
    const newValue = event.target.value
    this.setState({ block: newValue })
}
function handleArmorChange(event) {
    const newValue = event.target.value
    this.setState({ armor: newValue })
}
function handleHolyResChange(event) {
    const newValue = event.target.value
    this.setState({ holy_res: newValue })
}
function handleFireResChange(event) {
    const newValue = event.target.value
    this.setState({ fire_res: newValue })
}
function handleNatureResChange(event) {
    const newValue = event.target.value
    this.setState({ nature_res: newValue })
}
function handleFrostResChange(event) {
    const newValue = event.target.value
    this.setState({ frost_res: newValue })
}
function handleShadowResChange(event) {
    const newValue = event.target.value
    this.setState({ shadow_res: newValue })
}
function handleArcaneResChange(event) {
    const newValue = event.target.value
    this.setState({ arcane_res: newValue })
}
function handleSpellId1Change(event) {
    const newValue = event.target.value
    this.setState({ spellid_1: newValue })
}
function handleSpellTrigger1Change(event) {
    const newValue = event.target.value
    this.setState({ spelltrigger_1: newValue })
}
function handleSpellPpmRate1Change(event) {
    const newValue = event.target.value
    this.setState({ spellppmrate_1: newValue })
}
function handleSpellCooldown1Change(event) {
    const newValue = event.target.value
    this.setState({ spellcooldown_1: newValue })
}
function handleSpellCategory1Change(event) {
    const newValue = event.target.value
    this.setState({ spellcategory_1: newValue })
}
function handleSpellCategoryCooldown1Change(event) {
    const newValue = event.target.value
    this.setState({ spellcategorycooldown_1: newValue })
}
function handleSpellId2Change(event) {
    const newValue = event.target.value
    this.setState({ spellid_2: newValue })
}
function handleSpellTrigger2Change(event) {
    const newValue = event.target.value
    this.setState({ spelltrigger_2: newValue })
}
function handleSpellPpmRate2Change(event) {
    const newValue = event.target.value
    this.setState({ spellppmrate_2: newValue })
}
function handleSpellCooldown2Change(event) {
    const newValue = event.target.value
    this.setState({ spellcooldown_2: newValue })
}
function handleSpellCategory2Change(event) {
    const newValue = event.target.value
    this.setState({ spellcategory_2: newValue })
}
function handleSpellCategoryCooldown2Change(event) {
    const newValue = event.target.value
    this.setState({ spellcategorycooldown_2: newValue })
}
function handleSpellId3Change(event) {
    const newValue = event.target.value
    this.setState({ spellid_3: newValue })
}
function handleSpellTrigger3Change(event) {
    const newValue = event.target.value
    this.setState({ spelltrigger_3: newValue })
}
function handleSpellPpmRate3Change(event) {
    const newValue = event.target.value
    this.setState({ spellppmrate_3: newValue })
}
function handleSpellCooldown3Change(event) {
    const newValue = event.target.value
    this.setState({ spellcooldown_3: newValue })
}
function handleSpellCategory3Change(event) {
    const newValue = event.target.value
    this.setState({ spellcategory_3: newValue })
}
function handleSpellCategoryCooldown3Change(event) {
    const newValue = event.target.value
    this.setState({ spellcategorycooldown_3: newValue })
}
function handleSpellId4Change(event) {
    const newValue = event.target.value
    this.setState({ spellid_4: newValue })
}
function handleSpellTrigger4Change(event) {
    const newValue = event.target.value
    this.setState({ spelltrigger_4: newValue })
}
function handleSpellPpmRate4Change(event) {
    const newValue = event.target.value
    this.setState({ spellppmrate_4: newValue })
}
function handleSpellCooldown4Change(event) {
    const newValue = event.target.value
    this.setState({ spellcooldown_4: newValue })
}
function handleSpellCategory4Change(event) {
    const newValue = event.target.value
    this.setState({ spellcategory_4: newValue })
}
function handleSpellCategoryCooldown4Change(event) {
    const newValue = event.target.value
    this.setState({ spellcategorycooldown_4: newValue })
}
function handleSpellId5Change(event) {
    const newValue = event.target.value
    this.setState({ spellid_5: newValue })
}
function handleSpellTrigger5Change(event) {
    const newValue = event.target.value
    this.setState({ spelltrigger_5: newValue })
}
function handleSpellPpmRate5Change(event) {
    const newValue = event.target.value
    this.setState({ spellppmrate_5: newValue })
}
function handleSpellCooldown5Change(event) {
    const newValue = event.target.value
    this.setState({ spellcooldown_5: newValue })
}
function handleSpellCategory5Change(event) {
    const newValue = event.target.value
    this.setState({ spellcategory_5: newValue })
}
function handleSpellCategoryCooldown5Change(event) {
    const newValue = event.target.value
    this.setState({ spellcategorycooldown_5: newValue })
}

module.exports = {
    handleEntryChange,
    handlePatchChange,
    handleClassChange,
    handleSubclassChange,
    handleNameChange,
    handleDescriptionChange,
    handleDisplayIdChange,
    handleQualityChange,
    handleInventoryTypeChange,
    handleAllowableClassChange,
    handleItemLevelChange,
    handleRequiredLevelChange,
    handleBondingChange,
    handleMaterialChange,
    handleSheathChange,
    handleDurabilityChange,
    handleStatType1Change, 
    handleStatValue1Change, 
    handleStatType2Change, 
    handleStatValue2Change, 
    handleStatType3Change, 
    handleStatValue3Change,
    handleStatType4Change,
    handleStatValue4Change,
    handleStatType5Change,
    handleStatValue5Change,
    handleStatType6Change, 
    handleStatValue6Change, 
    handleStatType7Change, 
    handleStatValue7Change, 
    handleStatType8Change, 
    handleStatValue8Change,
    handleStatType9Change,
    handleStatValue9Change,
    handleStatType10Change,
    handleStatValue10Change,
    handleDelayChange,
    handleAmmoTypeChange,
    handleDamageMin1Change,
    handleDamageMax1Change,
    handleDamageType1Change,
    handleDamageMin2Change,
    handleDamageMax2Change,
    handleDamageType2Change,
    handleDamageMin3Change,
    handleDamageMax3Change,
    handleDamageType3Change,
    handleDamageMin4Change,
    handleDamageMax4Change,
    handleDamageType4Change,
    handleDamageMin5Change,
    handleDamageMax5Change,
    handleDamageType5Change,
    handleBlockChange,
    handleArmorChange,
    handleHolyResChange,
    handleFireResChange,
    handleNatureResChange,
    handleFrostResChange,
    handleShadowResChange,
    handleArcaneResChange,
    handleSpellId1Change,
    handleSpellTrigger1Change,
    handleSpellPpmRate1Change,
    handleSpellCooldown1Change,
    handleSpellCategory1Change,
    handleSpellCategoryCooldown1Change,
    handleSpellId2Change,
    handleSpellTrigger2Change,
    handleSpellPpmRate2Change,
    handleSpellCooldown2Change,
    handleSpellCategory2Change,
    handleSpellCategoryCooldown2Change,
    handleSpellId3Change,
    handleSpellTrigger3Change,
    handleSpellPpmRate3Change,
    handleSpellCooldown3Change,
    handleSpellCategory3Change,
    handleSpellCategoryCooldown3Change,
    handleSpellId4Change,
    handleSpellTrigger4Change,
    handleSpellPpmRate4Change,
    handleSpellCooldown4Change,
    handleSpellCategory4Change,
    handleSpellCategoryCooldown4Change,
    handleSpellId5Change,
    handleSpellTrigger5Change,
    handleSpellPpmRate5Change,
    handleSpellCooldown5Change,
    handleSpellCategory5Change,
    handleSpellCategoryCooldown5Change
}