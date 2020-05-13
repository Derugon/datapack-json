[![CircleCI](https://img.shields.io/circleci/build/github/SPGoding/datapack-json.svg?logo=circleci&style=flat-square)](https://circleci.com/gh/SPGoding/datapack-json)
[![npm](https://img.shields.io/npm/v/datapack-json.svg?logo=npm&style=flat-square)](https://npmjs.com/package/datapack-json)

[![License](https://img.shields.io/github/license/SPGoding/datapack-json.svg?style=flat-square)](https://github.com/SPGoding/datapack-json/blob/master/LICENSE)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![Gitmoji](https://img.shields.io/badge/gitmoji-%20%F0%9F%98%9C%20%F0%9F%98%8D-FFDD67.svg?style=flat-square)](https://gitmoji.carloscuesta.me/)

# Installation

```bash
npm i datapack-json
```

# Custom Properties

There are two custom properties for `string` schema: `parser` and `params`, which should be used to validate the content of the string.

# List of Parsers

## `Command` Parser

A parser used to validate commands.

### Parameters

- `leadingSlash`: (boolean | `null`) Whether the command should start with slash (`/`). The string won't be validated if the value doesn't start with slash and the parameter is set to `true`.

## `Entity` Parser

A parser used to validate entities.

### Parameters

- `amount`: (`single` | `multiple`) The acceptable amount of entities.
- `type`: (`entities` | `players`) The type of the entities.
- `isScoreHolder`: (boolean) Optional, defaults to `false`. Whether this entity is a score holder.

## `Identity` Parser

A parser used to validate namespaced IDs.

### Parameters

- `registry`: (string) Optional. The registry of this namespaced ID. Can be one of:
    - `$advancements`: All available advancements.
    - `$functions`: All available functions.
    - `$loot_tables`: All available loot tables.
    - `$predicates`: All available predicates.
    - `$recipes`: All available recipes.
    - `$storages`: All available recipes.
    - `$tags/blocks`: All available block tags.
    - `$tags/entity_types`: All available entity type tags.
    - `$tags/fluids`: All available fluid tags.
    - `$tags/functions`: All available function tags.
    - `$tags/items`: All available item tags.
    - `$objectives`: All available scoreboard objectives.
    - `$teams`: All available teams.
    - Other strings should be treated as the name of a built-in registry which can be found in the `registry.json` file generated by the data generator.
- `values`: (object) Optional. All possible IDs that can be put in this string.
- `allowTag`: (boolean) Optional, defaults to `false`. If set to `true`, an ID starting with `#` under the corresponding registry should be accepted.
- `allowUnknownValue`: (boolean) Optional, defaults to `false`. If set to `true`, IDs that don't exist in neither `registry` nor `values` won't be reported as errors.

## `NbtPath` Parser

A parser used to validate NBT paths.

## `Nbt` Parser

A parser used to validate NBT tags.

### Parameters

- `type`: (`NbtNodeTypeName` | `NbtNodeTypeName[]`) The type of this NBT tag.
- `category`: (`minecraft:block` | `minecraft:entity` | `minecraft:item`) The type of this NBT.
- `id`: (string) Optional. An ID in the specific category.
- `isPredicate`: (boolean) Optional, defaults to `false`. Whether this NBT is in a predicate or not.

## `Objective` Parser

A parser used to validate scoreboard objectives.

## `TranslateKey` Parser

A parser used to validate translation keys in resource packs.

## `Vector` Parser

A parser used to validate number vectors.

### Parameters

- `dimension`: (number) The dimension of the vector.
- `allowLocal`: (boolean) Optional, defaults to `true`. Whether local coordinates are acceptable.
- `allowRelative`: (boolean) Optional, defaults to `true`. Whether relative coordinates are acceptable.

# File Struture

- `src`: Stores all JSON Schemas.
    - `shared`: Stores all common JSON Schemas.
    - `tags`: Stores JSON Schemas for [tags](https://minecraft.gamepedia.com/Tag).
    - `advancement.json`: JSON Schema for [advancements](https://minecraft.gamepedia.com/Advancements).
    - `loot_table.json`: JSON Schema for [loot tables](https://minecraft.gamepedia.com/Loot_table).
    - `pack.mcmeta.json`: JSON Schema for [`pack.mcmeta`](https://minecraft.gamepedia.com/Data_pack#pack.mcmeta).
    - `predicate.json`: JSON Schema for [predicates](https://minecraft.gamepedia.com/Predicate).
    - `recipe.json`: JSON Schema for [recipes](https://minecraft.gamepedia.com/Recipe).
- `utils`: Stores useful tools.
    - `convert.js`: Convert `registries.json` generated by Minecraft data generator to `shared` files.
    
# Special Thanks

This work is based on [Levertion/minecraft-json-schema](https://github.com/Levertion/minecraft-json-schema) created by [@Levertion](https://github.com/Levertion) which is released under a [CC BY 4.0 license](https://creativecommons.org/licenses/by/4.0/). I keep it updated with _Minecraft_.

# Contributing

Contributions are welcome!
