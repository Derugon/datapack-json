![banner](https://raw.githubusercontent.com/SPGoding/datapack-language-server/master/img/banner.png)

[![CircleCI](https://img.shields.io/circleci/build/github/SPGoding/datapack-json.svg?logo=circleci&style=flat-square)](https://circleci.com/gh/SPGoding/datapack-json)
[![npm](https://img.shields.io/npm/v/datapack-json.svg?logo=npm&style=flat-square)](https://npmjs.com/package/datapack-json)
[![VSCode Marketplace](https://img.shields.io/visual-studio-marketplace/v/SPGoding.datapack-json.svg?logo=visual-studio-code&style=flat-square)](https://marketplace.visualstudio.com/items?itemName=SPGoding.datapack-json)
[![VSCode Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/SPGoding.datapack-json.svg?logo=visual-studio-code&style=flat-square)](https://marketplace.visualstudio.com/items?itemName=SPGoding.datapack-json)
[![VSCode Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/SPGoding.datapack-json.svg?logo=visual-studio-code&style=flat-square)](https://marketplace.visualstudio.com/items?itemName=SPGoding.datapack-json)
[![VSCode Marketplace Rating](https://img.shields.io/visual-studio-marketplace/stars/SPGoding.datapack-json.svg?logo=visual-studio-code&style=flat-square)](https://marketplace.visualstudio.com/items?itemName=SPGoding.datapack-json)

[![License](https://img.shields.io/github/license/SPGoding/datapack-json.svg?style=flat-square)](https://github.com/SPGoding/datapack-json/blob/master/LICENSE)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![Gitmoji](https://img.shields.io/badge/gitmoji-%20%F0%9F%98%9C%20%F0%9F%98%8D-FFDD67.svg?style=flat-square)](https://gitmoji.carloscuesta.me/)

Datapack Helper Plus is the spiritual successor of [pca006132](https://github.com/pca006132)'s [datapack helper](https://github.com/pca006132/datapack-helper) which is only updated to JE1.13. There are no actual connections between them.

DHP is splitted into two parts: [the JSON part](https://marketplace.visualstudio.com/items?itemName=SPGoding.datapack-json) and [the MCF part](https://marketplace.visualstudio.com/items?itemName=SPGoding.datapack-language-server). While the former provides supports for all JSON files in a datapack (like advancements, recipes, predicates, loot tables, and tags), the latter provides supports for mcfunction files. The introduction you are reading right now is for the JSON part.

| Name | Version | Downloads |
| - | - | - |
| [DHP (JSON)](https://github.com/SPGoding/datapack-json) | [![VSCode Marketplace](https://img.shields.io/visual-studio-marketplace/v/SPGoding.datapack-json.svg?logo=visual-studio-code&style=flat-square)](https://marketplace.visualstudio.com/items?itemName=SPGoding.datapack-json) | [![VSCode Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/SPGoding.datapack-json.svg?logo=visual-studio-code&style=flat-square)](https://marketplace.visualstudio.com/items?itemName=SPGoding.datapack-json) |
| [DHP (MCF)](https://github.com/SPGoding/datapack-language-server) | [![VSCode Marketplace](https://img.shields.io/visual-studio-marketplace/v/SPGoding.datapack-language-server.svg?logo=visual-studio-code&style=flat-square)](https://marketplace.visualstudio.com/items?itemName=SPGoding.datapack-language-server) | [![VSCode Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/SPGoding.datapack-language-server.svg?logo=visual-studio-code&style=flat-square)](https://marketplace.visualstudio.com/items?itemName=SPGoding.datapack-language-server) |

DHP (JSON) is a [VSCode](https://code.visualstudio.com) extension and NPM package providing JSON schemas for _Minecraft_: Java Edition 1.15.1 datapack JSON files. Information about json schemas can be found at [json-schema.org](http://json-schema.org/).

# Design choices

-   The use of the `minecraft:` namespace is mandatory anywhere it can be used.
    This does mean that it will not necessarily validate against all vanilla
    files.

# Installation on VSCode (for Use)

0. Install [VSCode](https://code.visualstudio.com) if you haven't got it in your computer.
1. Download and install this extension on the [VSCode Marketplace](https://marketplace.visualstudio.com/items?itemName=SPGoding.datapack-json): [![VSCode Marketplace](https://img.shields.io/visual-studio-marketplace/v/SPGoding.datapack-json.svg?logo=visual-studio-code&style=flat-square)](https://marketplace.visualstudio.com/items?itemName=SPGoding.datapack-json).
    - Alternatively, you can press Ctrl + P and execute `ext install SPGoding.datapack-json` in your VSCode.
2. Open VSCode in your datapack folder (`.minecraft/saves/<world>/datapacks/<your datapack folder>`). You can do this by right-clicking the folder and select 'Open with Code'.

# Installation via NPM (for Projects)

You can install this package by executing `$ npm i datapack-json`.

## File Struture

- `src`: Stores all JSON Schemas.
    - `shared`: Stores all common JSON Schemas. Some of them are generated by `./scripts/convert.js` so you don't change them manually.
    - `tags`: Stores JSON Schemas for [tags](https://minecraft.gamepedia.com/Tag).
    - `advancement.json`: JSON Schema for [advancements](https://minecraft.gamepedia.com/Advancements).
    - `loot_table.json`: JSON Schema for [loot tables](https://minecraft.gamepedia.com/Loot_table).
    - `pack.mcmeta.json`: JSON Schema for [`pack.mcmeta`](https://minecraft.gamepedia.com/Data_pack#pack.mcmeta).
    - `predicate.json`: JSON Schema for [predicates](https://minecraft.gamepedia.com/Predicate).
    - `recipe.json`: JSON Schema for [recipes](https://minecraft.gamepedia.com/Recipe).
- `scripts`: Stores useful tools.
    - `convert.js`: Convert `registries.json` generated by Minecraft data generator to `shared` files.
    
# Special Thanks

This work is based on [Levertion/minecraft-json-schema](https://github.com/Levertion/minecraft-json-schema) created by [@Levertion](https://github.com/Levertion) which is released under a [CC BY 4.0 license](https://creativecommons.org/licenses/by/4.0/). I keep it updated with _Minecraft_.

# Contributing

Contributions are welcome!
