import React from 'react'
import Styled from 'styled-components'
import PageTitle from './pageTitle'
import FieldContainer from './fieldContainer'
import NumberField from './numberField'
import SelectField from './selectField'
import SpellSelectField from './spellSelectField'
import TextField from './textField'
import AddButton from './addButton'
const itemTemplate = require('../data/item_template')
const itemHandler = require('../handlers/items')

const QueryContainer = Styled.div`
    padding: 10px;
    box-shadow: inset 0 0 6px 1px rgba(0,0,0,0.5);
    background: #e6e6e6;
    color: #666666;
`
const GridContainer2 = Styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5px;
`
const GridContainer3 = Styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 5px;
`

class Items extends React.Component {
    constructor(props) {
        super()
        this.state = itemTemplate.item_default_state
    }

    render = () => {
        const {
            entry, patch, subclass, name, description, display_id, quality, inventory_type, allowable_class, item_level, required_level, bonding, material, sheath, max_durability, 
            stat_type1, stat_value1, stat_type2, stat_value2, stat_type3, stat_value3, stat_type4, stat_value4, stat_type5, stat_value5, 
            delay, ammo_type, dmg_min1, dmg_max1, dmg_type1, dmg_min2, dmg_max2, dmg_type2, dmg_min3, dmg_max3, dmg_type3, dmg_min4, dmg_max4, dmg_type4, dmg_min5, dmg_max5, dmg_type5, 
            block, armor, holy_res, fire_res, nature_res, frost_res, shadow_res, arcane_res, 
            spellid_1, spelltrigger_1, spellcharges_1, spellppmrate_1, spellcooldown_1, spellcategory_1, spellcategorycooldown_1, 
            spellid_2, spelltrigger_2, spellcharges_2, spellppmrate_2, spellcooldown_2, spellcategory_2, spellcategorycooldown_2, 
            spellid_3, spelltrigger_3, spellcharges_3, spellppmrate_3, spellcooldown_3, spellcategory_3, spellcategorycooldown_3, 
            spellid_4, spelltrigger_4, spellcharges_4, spellppmrate_4, spellcooldown_4, spellcategory_4, spellcategorycooldown_4, 
            spellid_5, spelltrigger_5, spellcharges_5, spellppmrate_5, spellcooldown_5, spellcategory_5, spellcategorycooldown_5
        } = this.state
        return (
            <>
                <PageTitle>Add Item</PageTitle>
                <FieldContainer title='Query'>
                    <QueryContainer>
                        {`INSERT INTO item_template ( entry, patch, class, subclass, name, description, display_id, quality, inventory_type, allowable_class, item_level, required_level, bonding, material, sheath, max_durability, stat_type1, stat_value1, stat_type2, stat_value2, stat_type3, stat_value3, stat_type4, stat_value4, stat_type5, stat_value5, delay, ammo_type, dmg_min1, dmg_max1, dmg_type1, dmg_min2, dmg_max2, dmg_type2, block, armor, holy_res, fire_res, nature_res, frost_res, shadow_res, arcane_res, spellid_1, spelltrigger_1, spellcharges_1, spellppmrate_1, spellcooldown_1, spellcategory_1, spellcategorycooldown_1, spellid_2, spelltrigger_2, spellcharges_2, spellppmrate_2, spellcooldown_2, spellcategory_2, spellcategorycooldown_2, spellid_3, spelltrigger_3, spellcharges_3, spellppmrate_3, spellcooldown_3, spellcategory_3, spellcategorycooldown_3, spellid_4, spelltrigger_4, spellcharges_4, spellppmrate_4, spellcooldown_4, spellcategory_4, spellcategorycooldown_4, spellid_5, spelltrigger_5, spellcharges_5, spellppmrate_5, spellcooldown_5, spellcategory_5, spellcategorycooldown_5 ) VALUES ( ${entry}, ${patch}, ${this.state.class}, ${subclass}, "${name}", "${description}", ${display_id}, ${quality}, ${inventory_type}, ${allowable_class}, ${item_level}, ${required_level}, ${bonding}, ${material}, ${sheath}, ${max_durability}, ${stat_type1}, ${stat_value1}, ${stat_type2}, ${stat_value2}, ${stat_type3}, ${stat_value3}, ${stat_type4}, ${stat_value4}, ${stat_type5}, ${stat_value5}, ${delay}, ${ammo_type}, ${dmg_min1}, ${dmg_max1}, ${dmg_type1}, ${dmg_min2}, ${dmg_max2}, ${dmg_type2}, ${block}, ${armor}, ${holy_res}, ${fire_res}, ${nature_res}, ${frost_res}, ${shadow_res}, ${arcane_res}, ${spellid_1}, ${spelltrigger_1}, ${spellcharges_1}, ${spellppmrate_1}, ${spellcooldown_1}, ${spellcategory_1}, ${spellcategorycooldown_1}, ${spellid_2}, ${spelltrigger_2}, ${spellcharges_2}, ${spellppmrate_2}, ${spellcooldown_2}, ${spellcategory_2}, ${spellcategorycooldown_2}, ${spellid_3}, ${spelltrigger_3}, ${spellcharges_3}, ${spellppmrate_3}, ${spellcooldown_3}, ${spellcategory_3}, ${spellcategorycooldown_3}, ${spellid_4}, ${spelltrigger_4}, ${spellcharges_4}, ${spellppmrate_4}, ${spellcooldown_4}, ${spellcategory_4}, ${spellcategorycooldown_4}, ${spellid_5}, ${spelltrigger_5}, ${spellcharges_5}, ${spellppmrate_5}, ${spellcooldown_5}, ${spellcategory_5}, ${spellcategorycooldown_5} );`}
                    </QueryContainer>
                </FieldContainer>
                <FieldContainer title='Details'>
                    <GridContainer2>
                        <NumberField label='Entry' val={entry} onChangeFunction={itemHandler.handleEntryChange.bind(this)} />
                        <SelectField label='Patch' val={patch} options={itemTemplate.item_patch} onChangeFunction={itemHandler.handlePatchChange.bind(this)} />                        
                        <SelectField label='Class' val={this.state.class} options={itemTemplate.item_class} onChangeFunction={itemHandler.handleClassChange.bind(this)} />                        
                        <SelectField label='Subclass' val={subclass} enabled={(itemTemplate.item_class[this.state.classIndex].subclass)?true:false} options={itemTemplate.item_class[this.state.classIndex].subclass} onChangeFunction={itemHandler.handleSubclassChange.bind(this)} />
                        <TextField label='Name' val={name} onChangeFunction={itemHandler.handleNameChange.bind(this)} />
                        <TextField label='Description' val={description} onChangeFunction={itemHandler.handleDescriptionChange.bind(this)} />
                        <NumberField label='Display ID' val={display_id} onChangeFunction={itemHandler.handleDisplayIdChange.bind(this)} />
                        <SelectField label='Quality' val={quality} options={itemTemplate.item_quality} onChangeFunction={itemHandler.handleQualityChange.bind(this)} />                        
                        <SelectField label='Inventory Type' val={inventory_type} options={itemTemplate.item_inventory_type} onChangeFunction={itemHandler.handleInventoryTypeChange.bind(this)} />
                        <SelectField label='Allowable Class' val={allowable_class} options={itemTemplate.item_allowable_class} onChangeFunction={itemHandler.handleAllowableClassChange.bind(this)} />
                        <NumberField label='Item Level' val={item_level} onChangeFunction={itemHandler.handleItemLevelChange.bind(this)} />
                        <NumberField label='Required Level' val={required_level} onChangeFunction={itemHandler.handleRequiredLevelChange.bind(this)} />
                        <SelectField label='Bonding' val={bonding} options={itemTemplate.item_bonding} onChangeFunction={itemHandler.handleBondingChange.bind(this)} />
                        <SelectField label='Material' val={material} options={itemTemplate.item_material} onChangeFunction={itemHandler.handleMaterialChange.bind(this)} />
                        <SelectField label='Sheath' val={sheath} options={itemTemplate.item_sheath} onChangeFunction={itemHandler.handleSheathChange.bind(this)} />
                        <NumberField label='Durability' val={max_durability} onChangeFunction={itemHandler.handleDurabilityChange.bind(this)} />
                    </GridContainer2>
                </FieldContainer>
                <FieldContainer title='Stats'>
                    <GridContainer2>
                        <SelectField label='Stat 1' val={stat_type1} options={itemTemplate.item_stat_type} enabled={(this.state.class === '2' || this.state.class === '4')?true:false} onChangeFunction={itemHandler.handleStatType1Change.bind(this)} />
                        <NumberField label='Value' val={stat_value1} enabled={(this.state.class === '2' || this.state.class === '4')?true:false} onChangeFunction={itemHandler.handleStatValue1Change.bind(this)} />
                        <SelectField label='Stat 2' val={stat_type2} options={itemTemplate.item_stat_type} enabled={(this.state.class === '2' || this.state.class === '4')?true:false} onChangeFunction={itemHandler.handleStatType2Change.bind(this)} />
                        <NumberField label='Value' val={stat_value2} enabled={(this.state.class === '2' || this.state.class === '4')?true:false} onChangeFunction={itemHandler.handleStatValue2Change.bind(this)} />
                        <SelectField label='Stat 3' val={stat_type3} options={itemTemplate.item_stat_type} enabled={(this.state.class === '2' || this.state.class === '4')?true:false} onChangeFunction={itemHandler.handleStatType3Change.bind(this)} />
                        <NumberField label='Value' val={stat_value3} enabled={(this.state.class === '2' || this.state.class === '4')?true:false} onChangeFunction={itemHandler.handleStatValue3Change.bind(this)} />
                        <SelectField label='Stat 4' val={stat_type4} options={itemTemplate.item_stat_type} enabled={(this.state.class === '2' || this.state.class === '4')?true:false} onChangeFunction={itemHandler.handleStatType4Change.bind(this)} />
                        <NumberField label='Value' val={stat_value4} enabled={(this.state.class === '2' || this.state.class === '4')?true:false} onChangeFunction={itemHandler.handleStatValue4Change.bind(this)} />
                        <SelectField label='Stat 5' val={stat_type5} options={itemTemplate.item_stat_type} enabled={(this.state.class === '2' || this.state.class === '4')?true:false} onChangeFunction={itemHandler.handleStatType5Change.bind(this)} />
                        <NumberField label='Value' val={stat_value5} enabled={(this.state.class === '2' || this.state.class === '4')?true:false} onChangeFunction={itemHandler.handleStatValue5Change.bind(this)} />
                        {/* <SelectField label='Stat 6' val={stat_type6} options={itemTemplate.item_stat_type} onChangeFunction={itemHandler.handleStatType6Change.bind(this)} />
                        <NumberField label='Value' val={stat_value6} onChangeFunction={itemHandler.handleStatValue6Change.bind(this)} />
                        <SelectField label='Stat 7' val={stat_type7} options={itemTemplate.item_stat_type} onChangeFunction={itemHandler.handleStatType7Change.bind(this)} />
                        <NumberField label='Value' val={stat_value7} onChangeFunction={itemHandler.handleStatValue7Change.bind(this)} />
                        <SelectField label='Stat 8' val={stat_type8} options={itemTemplate.item_stat_type} onChangeFunction={itemHandler.handleStatType8Change.bind(this)} />
                        <NumberField label='Value' val={stat_value8} onChangeFunction={itemHandler.handleStatValue8Change.bind(this)} />
                        <SelectField label='Stat 9' val={stat_type9} options={itemTemplate.item_stat_type} onChangeFunction={itemHandler.handleStatType9Change.bind(this)} />
                        <NumberField label='Value' val={stat_value9} onChangeFunction={itemHandler.handleStatValue9Change.bind(this)} />
                        <SelectField label='Stat 10' val={stat_type10} options={itemTemplate.item_stat_type} onChangeFunction={itemHandler.handleStatType10Change.bind(this)} />
                        <NumberField label='Value' val={stat_value10} onChangeFunction={itemHandler.handleStatValue10Change.bind(this)} /> */}
                    </GridContainer2>
                </FieldContainer>
                <FieldContainer title='Damage'>
                    <GridContainer2>
                        <NumberField label='Delay (weapon speed)' val={delay} enabled={(this.state.class === '2' || this.state.class === '6')?true:false} readonly={(this.state.class === '6')?true:false} onChangeFunction={itemHandler.handleDelayChange.bind(this)} />
                        <SelectField label='Ammo Type' val={ammo_type} options={itemTemplate.item_ammo_type} enabled={(this.state.class === '2' && (subclass === '2' || subclass === '3' || subclass === '18'))?true:false} readonly={(this.state.class === '2' && (subclass === '2' || subclass === '3' || subclass === '18'))?true:false} onChangeFunction={itemHandler.handleAmmoTypeChange.bind(this)} />
                    </GridContainer2>
                    <GridContainer3>
                        <SelectField label='Damage 1' val={dmg_type1} options={itemTemplate.item_damage_type} enabled={(this.state.class === '2' || this.state.class === '6')?true:false} onChangeFunction={itemHandler.handleDamageType1Change.bind(this)} />
                        <NumberField label='Min' val={dmg_min1} enabled={(this.state.class === '2' || this.state.class === '6')?true:false} onChangeFunction={itemHandler.handleDamageMin1Change.bind(this)} />
                        <NumberField label='Max' val={dmg_max1} enabled={(this.state.class === '2' || this.state.class === '6')?true:false} onChangeFunction={itemHandler.handleDamageMax1Change.bind(this)} />
                        <SelectField label='Damage 2' val={dmg_type2} options={itemTemplate.item_damage_type} enabled={(this.state.class === '2') || this.state.class === '6'?true:false} onChangeFunction={itemHandler.handleDamageType2Change.bind(this)} />
                        <NumberField label='Min' val={dmg_min2} enabled={(this.state.class === '2' || this.state.class === '6')?true:false} onChangeFunction={itemHandler.handleDamageMin2Change.bind(this)} />
                        <NumberField label='Max' val={dmg_max2} enabled={(this.state.class === '2' || this.state.class === '6')?true:false} onChangeFunction={itemHandler.handleDamageMax2Change.bind(this)} />
                        <SelectField label='Damage 3' val={dmg_type3} options={itemTemplate.item_damage_type} enabled={(this.state.class === '2' || this.state.class === '6')?true:false} onChangeFunction={itemHandler.handleDamageType3Change.bind(this)} />
                        <NumberField label='Min' val={dmg_min3} enabled={(this.state.class === '2' || this.state.class === '6')?true:false} onChangeFunction={itemHandler.handleDamageMin3Change.bind(this)} />
                        <NumberField label='Max' val={dmg_max3} enabled={(this.state.class === '2' || this.state.class === '6')?true:false} onChangeFunction={itemHandler.handleDamageMax3Change.bind(this)} />
                        <SelectField label='Damage 4' val={dmg_type4} options={itemTemplate.item_damage_type} enabled={(this.state.class === '2' || this.state.class === '6')?true:false} onChangeFunction={itemHandler.handleDamageType4Change.bind(this)} />
                        <NumberField label='Min' val={dmg_min4} enabled={(this.state.class === '2' || this.state.class === '6')?true:false} onChangeFunction={itemHandler.handleDamageMin4Change.bind(this)} />
                        <NumberField label='Max' val={dmg_max4} enabled={(this.state.class === '2' || this.state.class === '6')?true:false} onChangeFunction={itemHandler.handleDamageMax4Change.bind(this)} />
                        <SelectField label='Damage 5' val={dmg_type5} options={itemTemplate.item_damage_type} enabled={(this.state.class === '2' || this.state.class === '6')?true:false} onChangeFunction={itemHandler.handleDamageType5Change.bind(this)} />
                        <NumberField label='Min' val={dmg_min5} enabled={(this.state.class === '2' || this.state.class === '6')?true:false} onChangeFunction={itemHandler.handleDamageMin5Change.bind(this)} />
                        <NumberField label='Max' val={dmg_max5} enabled={(this.state.class === '2' || this.state.class === '6')?true:false} onChangeFunction={itemHandler.handleDamageMax5Change.bind(this)} />
                    </GridContainer3>
                </FieldContainer>
                <FieldContainer title='Defense'>
                    <GridContainer2>
                        <NumberField label='Block' val={block} enabled={(this.state.class === '4' && subclass === '6')?true:false} onChangeFunction={itemHandler.handleBlockChange.bind(this)} />
                        <NumberField label='Armor' val={armor} enabled={(this.state.class === '2' || this.state.class === '4')?true:false} onChangeFunction={itemHandler.handleArmorChange.bind(this)} />
                        <NumberField label='Holy Resistance' val={holy_res} enabled={(this.state.class === '2' || this.state.class === '4')?true:false} onChangeFunction={itemHandler.handleHolyResChange.bind(this)} />
                        <NumberField label='Fire Resistance' val={fire_res} enabled={(this.state.class === '2' || this.state.class === '4')?true:false} onChangeFunction={itemHandler.handleFireResChange.bind(this)} />
                        <NumberField label='Nature Resistance' val={nature_res} enabled={(this.state.class === '2' || this.state.class === '4')?true:false} onChangeFunction={itemHandler.handleNatureResChange.bind(this)} />
                        <NumberField label='Frost Resistance' val={frost_res} enabled={(this.state.class === '2' || this.state.class === '4')?true:false} onChangeFunction={itemHandler.handleFrostResChange.bind(this)} />
                        <NumberField label='Shadow Resistance' val={shadow_res} enabled={(this.state.class === '2' || this.state.class === '4')?true:false} onChangeFunction={itemHandler.handleShadowResChange.bind(this)} />
                        <NumberField label='Arcane Resistance' val={arcane_res} enabled={(this.state.class === '2' || this.state.class === '4')?true:false} onChangeFunction={itemHandler.handleArcaneResChange.bind(this)} />
                    </GridContainer2>
                </FieldContainer>
                <FieldContainer title='Spells'>
                    <GridContainer3>
                        <SelectField label='Spell 1' val={spellid_1} options={itemTemplate.item_spells} onChangeFunction={itemHandler.handleSpellId1Change.bind(this)} />
                        <SelectField label='Trigger' val={spelltrigger_1} options={itemTemplate.item_spell_trigger} onChangeFunction={itemHandler.handleSpellTrigger1Change.bind(this)} />
                        <NumberField label='PPM' val={spellppmrate_1} enabled={(spelltrigger_1 === '2')?true:false} onChangeFunction={itemHandler.handleSpellPpmRate1Change.bind(this)} />
                        <NumberField label='Cooldown' val={spellcooldown_1} onChangeFunction={itemHandler.handleSpellCooldown1Change.bind(this)} />
                        <NumberField label='Category' val={spellcategory_1} onChangeFunction={itemHandler.handleSpellCategory1Change.bind(this)} />
                        <NumberField label='Category Cooldown' val={spellcategorycooldown_1} onChangeFunction={itemHandler.handleSpellCategoryCooldown1Change.bind(this)} />
                    </GridContainer3>
                    <hr />
                    <GridContainer3>
                        <SelectField label='Spell 2' val={spellid_2} options={itemTemplate.item_spells} onChangeFunction={itemHandler.handleSpellId2Change.bind(this)} />
                        <SelectField label='Trigger' val={spelltrigger_2} options={itemTemplate.item_spell_trigger} onChangeFunction={itemHandler.handleSpellTrigger2Change.bind(this)} />
                        <NumberField label='PPM' val={spellppmrate_2} enabled={(spelltrigger_2 === '2')?true:false} onChangeFunction={itemHandler.handleSpellPpmRate2Change.bind(this)} />
                        <NumberField label='Cooldown' val={spellcooldown_2} onChangeFunction={itemHandler.handleSpellCooldown2Change.bind(this)} />
                        <NumberField label='Category' val={spellcategory_2} onChangeFunction={itemHandler.handleSpellCategory2Change.bind(this)} />
                        <NumberField label='Category Cooldown' val={spellcategorycooldown_2} onChangeFunction={itemHandler.handleSpellCategoryCooldown2Change.bind(this)} />
                    </GridContainer3>
                    <hr />
                    <GridContainer3>
                        <SelectField label='Spell 3' val={spellid_3} options={itemTemplate.item_spells} onChangeFunction={itemHandler.handleSpellId3Change.bind(this)} />
                        <SelectField label='Trigger' val={spelltrigger_3} options={itemTemplate.item_spell_trigger} onChangeFunction={itemHandler.handleSpellTrigger3Change.bind(this)} />
                        <NumberField label='PPM' val={spellppmrate_3} enabled={(spelltrigger_3 === '2')?true:false} onChangeFunction={itemHandler.handleSpellPpmRate3Change.bind(this)} />
                        <NumberField label='Cooldown' val={spellcooldown_3} onChangeFunction={itemHandler.handleSpellCooldown3Change.bind(this)} />
                        <NumberField label='Category' val={spellcategory_3} onChangeFunction={itemHandler.handleSpellCategory3Change.bind(this)} />
                        <NumberField label='Category Cooldown' val={spellcategorycooldown_3} onChangeFunction={itemHandler.handleSpellCategoryCooldown3Change.bind(this)} />
                    </GridContainer3>
                    <hr />
                    <GridContainer3>
                        <SelectField label='Spell 4' val={spellid_4} options={itemTemplate.item_spells} onChangeFunction={itemHandler.handleSpellId4Change.bind(this)} />
                        <SelectField label='Trigger' val={spelltrigger_4} options={itemTemplate.item_spell_trigger} onChangeFunction={itemHandler.handleSpellTrigger4Change.bind(this)} />
                        <NumberField label='PPM' val={spellppmrate_4} enabled={(spelltrigger_4 === '2')?true:false} onChangeFunction={itemHandler.handleSpellPpmRate4Change.bind(this)} />
                        <NumberField label='Cooldown' val={spellcooldown_4} onChangeFunction={itemHandler.handleSpellCooldown4Change.bind(this)} />
                        <NumberField label='Category' val={spellcategory_4} onChangeFunction={itemHandler.handleSpellCategory4Change.bind(this)} />
                        <NumberField label='Category Cooldown' val={spellcategorycooldown_4} onChangeFunction={itemHandler.handleSpellCategoryCooldown4Change.bind(this)} />
                    </GridContainer3>
                    <hr />
                    <GridContainer3>
                        <SelectField label='Spell 5' val={spellid_5} options={itemTemplate.item_spells} onChangeFunction={itemHandler.handleSpellId5Change.bind(this)} />
                        <SelectField label='Trigger' val={spelltrigger_5} options={itemTemplate.item_spell_trigger} onChangeFunction={itemHandler.handleSpellTrigger5Change.bind(this)} />
                        <NumberField label='PPM' val={spellppmrate_5} enabled={(spelltrigger_5 === '2')?true:false} onChangeFunction={itemHandler.handleSpellPpmRate5Change.bind(this)} />
                        <NumberField label='Cooldown' val={spellcooldown_5} onChangeFunction={itemHandler.handleSpellCooldown5Change.bind(this)} />
                        <NumberField label='Category' val={spellcategory_5} onChangeFunction={itemHandler.handleSpellCategory5Change.bind(this)} />
                        <NumberField label='Category Cooldown' val={spellcategorycooldown_5} onChangeFunction={itemHandler.handleSpellCategoryCooldown5Change.bind(this)} />
                    </GridContainer3>
                </FieldContainer>
                <AddButton val='Add Item' callback={ () => {alert('test_function')} } />
            </>
        )
    }
    
}

export default Items