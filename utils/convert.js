/**
 * This js file is used to convert `registries.json` generated by Minecraft data generator to `shared` files.
 * Put `registries.json` in the same directory as the js file.
 * Use `npm run convert` to execute.
 * 
 * @author SPGoding
 */

const fs = require('fs')
const { join } = require('path')

const registriesJson = JSON.parse(fs.readFileSync(join(__dirname, './registries.json'), { encoding: 'utf8' }))

function convert(keyName, fileName) {
    const ans = {
        $schema: 'http://json-schema.org/draft-07/schema',
        $id: `https://raw.githubusercontent.com/SPGoding/datapack-json/master/src/shared/${fileName}.json`,
        type: 'string',
        enum: []
    }

    for (const id in registriesJson[keyName].entries) {
        ans.enum.push(id)
    }

    ans.enum.sort()

    fs.writeFileSync(join(__dirname, `../src/shared/${fileName}.json`), JSON.stringify(ans, undefined, 4))
}

convert('minecraft:sound_event', 'sound_event')
convert('minecraft:fluid', 'fluid_name')
convert('minecraft:mob_effect', 'effect_name')
convert('minecraft:block', 'block_name')
convert('minecraft:item', 'item_name')
convert('minecraft:enchantment', 'enchantment_name')
convert('minecraft:entity_type', 'entity_name')
convert('minecraft:potion', 'potion_name')
convert('minecraft:biome', 'biome_name')
convert('minecraft:particle_type', 'particle_name')
convert('minecraft:block_entity_type', 'block_entity_name')
convert('minecraft:dimension_type', 'dimension_name')
convert('minecraft:villager_type', 'villager_type')
convert('minecraft:villager_profession', 'villager_profession')
convert('minecraft:custom_stat', 'custom_stat')
