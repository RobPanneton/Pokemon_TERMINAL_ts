"use strict";
exports.__esModule = true;
exports.POKEMON = void 0;
exports.POKEMON = {
    VENUSAUR: {
        id: "003",
        species: "VENUSAUR",
        type: { type1: "GRASS", type2: "POISON" },
        stats: {
            hp: 263,
            attack: 262,
            defense: 264,
            special: 298,
            speed: 258
        },
        attacks: ["TACKLE", "GROWL", "LEECH SEED", "VINE WHIP"]
    },
    CHARIZARD: {
        id: "006",
        species: "CHARIZARD",
        type: { type1: "FIRE", type2: "FLYING" },
        stats: {
            hp: 359,
            attack: 266,
            defense: 254,
            special: 268,
            speed: 298
        },
        attacks: [
            "SCRATCH",
            "GROWL",
            "EMBER",
            "LEER",
            "RAGE",
            "SLASH",
            "FLAMETHROWER",
            "FIRE SPIN",
        ]
    },
    BLASTOISE: {
        id: "009",
        species: "BLASTOISE",
        type: { type1: "WATER", type2: null },
        stats: {
            hp: 361,
            attack: 264,
            defense: 298,
            special: 268,
            speed: 254
        },
        attacks: [
            "TACKLE",
            "TAIL WHIP",
            "BUBBLE",
            "WATER GUN",
            "BITE",
            "WITHDRAW",
            "SKULL BASH",
            "HYDRO PUMP",
            "SURF",
            "STRENGTH",
        ]
    },
    BUTTERFREE: {
        id: "012",
        species: "BUTTERFREE",
        type: { type1: "BUG", type2: "FLYING" },
        stats: {
            hp: 323,
            attack: 188,
            defense: 198,
            special: 258,
            speed: 238
        },
        attacks: [
            "TACKLE",
            "HARDEN",
            "STRING SHOT",
            "CONFUSION",
            "POISON POWDER",
            "STUN SPORE",
            "SLEEP POWDER",
            "SUPERSONIC",
            "WHIRLWIND",
            "PSYBEAM",
        ]
    },
    BEEDRILL: {
        id: "015",
        species: "BEEDRILL",
        type: { type1: "BUG", type2: "POISON" },
        stats: {
            hp: 333,
            attack: 258,
            defense: 178,
            special: 188,
            speed: 248
        },
        attacks: [
            "POISON STING",
            "HARDEN",
            "STRING SHOT",
            "FURY ATTACK",
            "FOCUS ENERGY",
            "TWINEEDLE",
            "RAGE",
            "PIN MISSILE",
            "AGILITY",
            "SWORDS DANCE",
            "TOXIC",
            "TAKE DOWN",
            "DOUBLE-EDGE",
            "HYPER BEAM",
            "MEGA DRAIN",
            "MIMIC",
            "DOUBLE TEAM",
            "REFLECT",
            "BIDE",
            "SWIFT",
            "CUT",
        ]
    },
    PIDGEOT: {
        id: "018",
        species: "PIDGEOT",
        type: { type1: "NORMAL", type2: "FLYING" },
        stats: {
            hp: 369,
            attack: 258,
            defense: 248,
            special: 238,
            speed: 280
        },
        attacks: [
            "GUST",
            "SAND-ATTACK",
            "QUICK ATTACK",
            "WHIRLWIND",
            "WING ATTACK",
            "AGILITY",
            "MIRROR MOVE",
        ]
    },
    RATICATE: {
        id: "020",
        species: "RATICATE",
        type: { type1: "NORMAL", type2: null },
        stats: {
            hp: 313,
            attack: 260,
            defense: 218,
            special: 198,
            speed: 292
        },
        attacks: [
            "TACKLE",
            "TAIL WHIP",
            "QUICK ATTACK",
            "HYPER FANG",
            "SUPER FANG",
        ]
    },
    FEAROW: {
        id: "022",
        species: "FEAROW",
        type: { type1: "NORMAL", type2: "FLYING" },
        stats: {
            hp: 333,
            attack: 278,
            defense: 228,
            special: 220,
            speed: 298
        },
        attacks: [
            "PECK",
            "GROWL",
            "LEER",
            "FURY ATTACK",
            "MIRROR MOVE",
            "DRILL PECK",
            "AGILITY",
        ]
    },
    ARBOK: {
        id: "024",
        species: "ARBOK",
        type: { type1: "POISON", type2: null },
        stats: {
            hp: 323,
            attack: 268,
            defense: 236,
            special: 228,
            speed: 258
        },
        attacks: [
            "WRAP",
            "LEER",
            "POISON STING",
            "BITE",
            "GLARE",
            "SCREECH",
            "ACID",
        ]
    },
    PIKACHU: {
        id: "025",
        species: "PIKACHU",
        type: { type1: "ELECTRIC", type2: null },
        stats: {
            hp: 273,
            attack: 208,
            defense: 158,
            special: 198,
            speed: 278
        },
        attacks: [
            "THUNDER SHOCK",
            "GROWL",
            "THUNDER WAVE",
            "QUICK ATTACK",
            "SWIFT",
            "AGILITY",
            "THUNDER",
        ]
    },
    RAICHU: {
        id: "026",
        species: "RAICHU",
        type: { type1: "ELECTRIC", type2: null },
        stats: {
            hp: 323,
            attack: 278,
            defense: 208,
            special: 278,
            speed: 298
        },
        attacks: [
            "THUNDER SHOCK",
            "GROWL",
            "THUNDER WAVE",
            "QUICK ATTACK",
            "SWIFT",
            "AGILITY",
            "THUNDER",
        ]
    },
    SANDSLASH: {
        id: "028",
        species: "SANDSLASH",
        type: { type1: "GROUND", type2: null },
        stats: {
            hp: 353,
            attack: 298,
            defense: 318,
            special: 208,
            speed: 228
        },
        attacks: [
            "SCRATCH",
            "SAND-ATTACK",
            "SLASH",
            "POISON STING",
            "SWIFT",
            "FURY SWIPES",
            "EARTHQUAKE",
        ]
    },
    NIDOQUEEN: {
        id: "031",
        species: "NIDOQUEEN",
        type: { type1: "POISON", type2: "GROUND" },
        stats: {
            hp: 383,
            attack: 262,
            defense: 272,
            special: 248,
            speed: 250
        },
        attacks: [
            "SCRATCH",
            "TACKLE",
            "GROWL",
            "POISON STING",
            "BITE",
            "FURY SWIPES",
            "BODY SLAM",
            "DOUBLE KICK",
            "MEGA PUNCH",
            "MEGA KICK",
            "TOXIC",
            "HORN DRILL",
            "TAKE DOWN",
            "DOUBLE-EDGE",
            "BUBBLEBEAM",
            "WATER GUN",
            "ICE BEAM",
            "BLIZZARD",
            "HYPER BEAM",
            "PAY DAY",
            "SUBMISSION",
            "COUNTER",
            "SEISMIC TOSS",
            "RAGE",
            "THUNDERBOLT",
            "THUNDER",
            "EARTHQUAKE",
            "FISSURE",
            "MIMIC",
            "DOUBLE TEAM",
            "REFLECT",
            "BIDE",
            "FIRE BLAST",
            "SKULL BASH",
            "REST",
            "ROCK SLIDE",
            "SUBSTITUTE",
            "SURF",
            "STRENGTH",
        ]
    },
    NIDOKING: {
        id: "034",
        species: "NIDOKING",
        type: { type1: "POISON", type2: "GROUND" },
        stats: {
            hp: 365,
            attack: 282,
            defense: 252,
            special: 248,
            speed: 250
        },
        attacks: [
            "LEER",
            "TACKLE",
            "HORN ATTACK",
            "POISON STING",
            "FOCUS ENERGY",
            "FURY ATTACK",
            "HORN DRILL",
            "DOUBLE KICK",
            "THRASH",
            "MEGA PUNCH",
            "MEGA KICK",
            "TOXIC",
            "BODY SLAM",
            "TAKE DOWN",
            "DOUBLE-EDGE",
            "BUBBLEBEAM",
            "WATER GUN",
            "ICE BEAM",
            "BLIZZARD",
            "HYPER BEAM",
            "PAY DAY",
            "SUBMISSION",
            "COUNTER",
            "SEISMIC TOSS",
            "RAGE",
            "THUNDERBOLT",
            "THUNDER",
            "EARTHQUAKE",
            "FISSURE",
            "MIMIC",
            "DOUBLE TEAM",
            "REFLECT",
            "BIDE",
            "FIRE BLAST",
            "SKULL BASH",
            "REST",
            "ROCK SLIDE",
            "SUBSTITUTE",
            "SURF",
            "STRENGTH",
        ]
    },
    CLEFABLE: {
        id: "036",
        species: "CLEFABLE",
        type: { type1: "NORMAL", type2: null },
        stats: {
            hp: 393,
            attack: 238,
            defense: 244,
            special: 268,
            speed: 218
        },
        attacks: []
    },
    NINETALES: {
        id: "038",
        species: "NINETALES",
        type: { type1: "FIRE", type2: null },
        stats: {
            hp: 349,
            attack: 250,
            defense: 248,
            special: 298,
            speed: 298
        },
        attacks: []
    },
    WIGGLYTUFF: {
        id: "040",
        species: "WIGGLYTUFF",
        type: { type1: "NORMAL", type2: null },
        stats: {
            hp: 483,
            attack: 238,
            defense: 188,
            special: 198,
            speed: 188
        },
        attacks: []
    },
    GOLBAT: {
        id: "042",
        species: "GOLBAT",
        type: { type1: "POISON", type2: "FLYING" },
        stats: {
            hp: 353,
            attack: 258,
            defense: 238,
            special: 248,
            speed: 278
        },
        attacks: []
    },
    VILEPLUME: {
        id: "045",
        species: "VILEPLUME",
        type: { type1: "GRASS", type2: "POISON" },
        stats: {
            hp: 353,
            attack: 258,
            defense: 268,
            special: 298,
            speed: 198
        },
        attacks: []
    },
    PARASECT: {
        id: "047",
        species: "PARASECT",
        type: { type1: "BUG", type2: "GRASS" },
        stats: {
            hp: 323,
            attack: 288,
            defense: 258,
            special: 258,
            speed: 158
        },
        attacks: []
    },
    VENOMOTH: {
        id: "049",
        species: "VENOMOTH",
        type: { type1: "BUG", type2: "POISON" },
        stats: {
            hp: 343,
            attack: 228,
            defense: 218,
            special: 278,
            speed: 278
        },
        attacks: []
    },
    DUGTRIO: {
        id: "051",
        species: "DUGTRIO",
        type: { type1: "GROUND", type2: null },
        stats: {
            hp: 273,
            attack: 258,
            defense: 198,
            special: 238,
            speed: 338
        },
        attacks: []
    },
    PERSIAN: {
        id: "053",
        species: "PERSIAN",
        type: { type1: "NORMAL", type2: null },
        stats: {
            hp: 333,
            attack: 238,
            defense: 218,
            special: 228,
            speed: 328
        },
        attacks: []
    },
    GOLDUCK: {
        id: "055",
        species: "GOLDUCK",
        type: { type1: "WATER", type2: null },
        stats: {
            hp: 363,
            attack: 262,
            defense: 254,
            special: 258,
            speed: 268
        },
        attacks: []
    },
    PRIMEAPE: {
        id: "057",
        species: "PRIMEAPE",
        type: { type1: "FIGHTING", type2: null },
        stats: {
            hp: 333,
            attack: 308,
            defense: 218,
            special: 218,
            speed: 288
        },
        attacks: []
    },
    ARCANINE: {
        id: "059",
        species: "ARCANINE",
        type: { type1: "FIRE", type2: null },
        stats: {
            hp: 383,
            attack: 318,
            defense: 258,
            special: 258,
            speed: 288
        },
        attacks: []
    },
    POLIWRATH: {
        id: "062",
        species: "POLIWRATH",
        type: { type1: "WATER", type2: "FIGHTING" },
        stats: {
            hp: 383,
            attack: 268,
            defense: 288,
            special: 238,
            speed: 238
        },
        attacks: []
    },
    ALAKAZAM: {
        id: "065",
        species: "ALAKAZAM",
        type: { type1: "PSYCHIC", type2: null },
        stats: {
            hp: 313,
            attack: 198,
            defense: 188,
            special: 368,
            speed: 338
        },
        attacks: []
    },
    MACHAMP: {
        id: "068",
        species: "MACHAMP",
        type: { type1: "FIGHTING", type2: null },
        stats: {
            hp: 383,
            attack: 358,
            defense: 258,
            special: 228,
            speed: 208
        },
        attacks: []
    },
    VICTREEBEL: {
        id: "071",
        species: "VICTREEBEL",
        type: { type1: "GRASS", type2: "POISON" },
        stats: {
            hp: 363,
            attack: 308,
            defense: 228,
            special: 298,
            speed: 238
        },
        attacks: []
    },
    TENTACRUEL: {
        id: "073",
        species: "TENTACRUEL",
        type: { type1: "WATER", type2: "POISON" },
        stats: {
            hp: 363,
            attack: 238,
            defense: 228,
            special: 338,
            speed: 298
        },
        attacks: []
    },
    GOLEM: {
        id: "076",
        species: "GOLEM",
        type: { type1: "ROCK", type2: "GROUND" },
        stats: {
            hp: 363,
            attack: 318,
            defense: 358,
            special: 208,
            speed: 188
        },
        attacks: []
    },
    RAPIDASH: {
        id: "078",
        species: "RAPIDASH",
        type: { type1: "FIRE", type2: null },
        stats: {
            hp: 333,
            attack: 298,
            defense: 238,
            special: 258,
            speed: 308
        },
        attacks: []
    },
    SLOWBRO: {
        id: "080",
        species: "SLOWBRO",
        type: { type1: "WATER", type2: "PSYCHIC" },
        stats: {
            hp: 393,
            attack: 248,
            defense: 318,
            special: 258,
            speed: 158
        },
        attacks: []
    },
    MAGNETON: {
        id: "082",
        species: "MAGNETON",
        type: { type1: "ELECTRIC", type2: null },
        stats: {
            hp: 303,
            attack: 218,
            defense: 288,
            special: 338,
            speed: 238
        },
        attacks: []
    },
    FARFETCHD: {
        id: "083",
        species: "FARFETCH'D",
        type: { type1: "NORMAL", type2: "FLYING" },
        stats: {
            hp: 307,
            attack: 228,
            defense: 208,
            special: 214,
            speed: 218
        },
        attacks: []
    },
    DODRIO: {
        id: "085",
        species: "DODRIO",
        type: { type1: "NORMAL", type2: "FLYING" },
        stats: {
            hp: 323,
            attack: 318,
            defense: 238,
            special: 218,
            speed: 298
        },
        attacks: []
    },
    DEWGONG: {
        id: "087",
        species: "DEWGONG",
        type: { type1: "WATER", type2: "ICE" },
        stats: {
            hp: 383,
            attack: 238,
            defense: 258,
            special: 288,
            speed: 238
        },
        attacks: []
    },
    MUK: {
        id: "089",
        species: "MUK",
        type: { type1: "POISON", type2: null },
        stats: {
            hp: 413,
            attack: 308,
            defense: 248,
            special: 228,
            speed: 198
        },
        attacks: []
    },
    CLOYSTER: {
        id: "091",
        species: "CLOYSTER",
        type: { type1: "WATER", type2: "ICE" },
        stats: {
            hp: 303,
            attack: 288,
            defense: 458,
            special: 268,
            speed: 238
        },
        attacks: []
    },
    GENGAR: {
        id: "094",
        species: "GENGAR",
        type: { type1: "POISON", type2: "GHOST" },
        stats: {
            hp: 323,
            attack: 228,
            defense: 218,
            special: 358,
            speed: 318
        },
        attacks: []
    },
    ONIX: {
        id: "095",
        species: "ONIX",
        type: { type1: "ROCK", type2: "GROUND" },
        stats: {
            hp: 273,
            attack: 188,
            defense: 418,
            special: 158,
            speed: 238
        },
        attacks: []
    },
    HYPNO: {
        id: "097",
        species: "HYPNO",
        type: { type1: "PSYCHIC", type2: null },
        stats: {
            hp: 373,
            attack: 244,
            defense: 238,
            special: 328,
            speed: 232
        },
        attacks: []
    },
    KINGLER: {
        id: "099",
        species: "KINGLER",
        type: { type1: "WATER", type2: null },
        stats: {
            hp: 313,
            attack: 358,
            defense: 328,
            special: 198,
            speed: 248
        },
        attacks: []
    },
    ELECTRODE: {
        id: "101",
        species: "ELECTRODE",
        type: { type1: "ELECTRIC", type2: null },
        stats: {
            hp: 323,
            attack: 198,
            defense: 238,
            special: 258,
            speed: 378
        },
        attacks: []
    },
    EXEGGUTOR: {
        id: "103",
        species: "EXEGGUTOR",
        type: { type1: "GRASS", type2: "PSYCHIC" },
        stats: {
            hp: 393,
            attack: 288,
            defense: 268,
            special: 348,
            speed: 208
        },
        attacks: []
    },
    MAROWAK: {
        id: "105",
        species: "MAROWAK",
        type: { type1: "GROUND", type2: null },
        stats: {
            hp: 323,
            attack: 258,
            defense: 318,
            special: 198,
            speed: 188
        },
        attacks: []
    },
    HITMONLEE: {
        id: "106",
        species: "HITMONLEE",
        type: { type1: "FIGHTING", type2: null },
        stats: {
            hp: 303,
            attack: 338,
            defense: 204,
            special: 168,
            speed: 272
        },
        attacks: []
    },
    HITMONCHAN: {
        id: "107",
        species: "HITMONCHAN",
        type: { type1: "FIGHTING", type2: null },
        stats: {
            hp: 303,
            attack: 308,
            defense: 256,
            special: 168,
            speed: 250
        },
        attacks: []
    },
    LICKITUNG: {
        id: "108",
        species: "LICKITUNG",
        type: { type1: "NORMAL", type2: null },
        stats: {
            hp: 383,
            attack: 208,
            defense: 248,
            special: 218,
            speed: 158
        },
        attacks: []
    },
    WEEZING: {
        id: "110",
        species: "WEEZING",
        type: { type1: "POISON", type2: null },
        stats: {
            hp: 333,
            attack: 278,
            defense: 338,
            special: 268,
            speed: 218
        },
        attacks: []
    },
    RHYDON: {
        id: "112",
        species: "RHYDON",
        type: { type1: "GROUND", type2: "ROCK" },
        stats: {
            hp: 413,
            attack: 358,
            defense: 338,
            special: 188,
            speed: 178
        },
        attacks: []
    },
    CHANSEY: {
        id: "113",
        species: "CHANSEY",
        type: { type1: "NORMAL", type2: null },
        stats: {
            hp: 703,
            attack: 108,
            defense: 108,
            special: 308,
            speed: 198
        },
        attacks: []
    },
    TANGELA: {
        id: "114",
        species: "TANGELA",
        type: { type1: "GRASS", type2: null },
        stats: {
            hp: 333,
            attack: 208,
            defense: 328,
            special: 298,
            speed: 218
        },
        attacks: []
    },
    KANGASKHAN: {
        id: "115",
        species: "KANGASKHAN",
        type: { type1: "NORMAL", type2: null },
        stats: {
            hp: 413,
            attack: 288,
            defense: 258,
            special: 178,
            speed: 278
        },
        attacks: []
    },
    SEADRA: {
        id: "117",
        species: "SEADRA",
        type: { type1: "WATER", type2: null },
        stats: {
            hp: 313,
            attack: 228,
            defense: 288,
            special: 288,
            speed: 268
        },
        attacks: []
    },
    SEAKING: {
        id: "119",
        species: "SEAKING",
        type: { type1: "WATER", type2: null },
        stats: {
            hp: 363,
            attack: 282,
            defense: 228,
            special: 258,
            speed: 234
        },
        attacks: []
    },
    STARMIE: {
        id: "121",
        species: "STARMIE",
        type: { type1: "WATER", type2: "PSYCHIC" },
        stats: {
            hp: 323,
            attack: 248,
            defense: 268,
            special: 298,
            speed: 328
        },
        attacks: []
    },
    MRMIME: {
        id: "122",
        species: "MR.MIME",
        type: { type1: "PSYCHIC", type2: null },
        stats: {
            hp: 283,
            attack: 188,
            defense: 228,
            special: 298,
            speed: 278
        },
        attacks: []
    },
    SCYTHER: {
        id: "123",
        species: "SCYTHER",
        type: { type1: "BUG", type2: "FLYING" },
        stats: {
            hp: 343,
            attack: 318,
            defense: 258,
            special: 208,
            speed: 308
        },
        attacks: []
    },
    JYNX: {
        id: "124",
        species: "JYNX",
        type: { type1: "ICE", type2: "PSYCHIC" },
        stats: {
            hp: 333,
            attack: 198,
            defense: 168,
            special: 288,
            speed: 288
        },
        attacks: []
    },
    ELECTABUZZ: {
        id: "125",
        species: "ELECTABUZZ",
        type: { type1: "ELECTRIC", type2: null },
        stats: {
            hp: 333,
            attack: 264,
            defense: 212,
            special: 268,
            speed: 308
        },
        attacks: []
    },
    MAGMAR: {
        id: "126",
        species: "MAGMAR",
        type: { type1: "FIRE", type2: null },
        stats: {
            hp: 333,
            attack: 288,
            defense: 212,
            special: 268,
            speed: 284
        },
        attacks: []
    },
    PINSIR: {
        id: "127",
        species: "PINSIR",
        type: { type1: "BUG", type2: null },
        stats: {
            hp: 333,
            attack: 348,
            defense: 298,
            special: 208,
            speed: 268
        },
        attacks: []
    },
    TAUROS: {
        id: "128",
        species: "TAUROS",
        type: { type1: "NORMAL", type2: null },
        stats: {
            hp: 353,
            attack: 298,
            defense: 288,
            special: 238,
            speed: 318
        },
        attacks: [
            "TACKLE",
            "TAIL WHIP",
            "STOMP",
            "LEER",
            "RAGE",
            "TAKE DOWN",
            "STRENGTH",
        ]
    },
    GYARADOS: {
        id: "130",
        species: "GYARADOS",
        type: { type1: "WATER", type2: "FLYING" },
        stats: {
            hp: 393,
            attack: 348,
            defense: 256,
            special: 298,
            speed: 260
        },
        attacks: []
    },
    LAPRAS: {
        id: "131",
        species: "LAPRAS",
        type: { type1: "WATER", type2: "ICE" },
        stats: {
            hp: 463,
            attack: 268,
            defense: 258,
            special: 288,
            speed: 218
        },
        attacks: []
    },
    DITTO: {
        id: "132",
        species: "DITTO",
        type: { type1: "NORMAL", type2: null },
        stats: {
            hp: 299,
            attack: 194,
            defense: 194,
            special: 194,
            speed: 194
        },
        attacks: []
    },
    EEVEE: {
        id: "133",
        species: "EEVEE",
        type: { type1: "NORMAL", type2: null },
        stats: {
            hp: 313,
            attack: 208,
            defense: 198,
            special: 228,
            speed: 208
        },
        attacks: []
    },
    VAPOREON: {
        id: "134",
        species: "VAPOREON",
        type: { type1: "WATER", type2: null },
        stats: {
            hp: 463,
            attack: 228,
            defense: 218,
            special: 318,
            speed: 228
        },
        attacks: []
    },
    JOLTEON: {
        id: "135",
        species: "JOLTEON",
        type: { type1: "ELECTRIC", type2: null },
        stats: {
            hp: 333,
            attack: 228,
            defense: 218,
            special: 318,
            speed: 358
        },
        attacks: []
    },
    FLAREON: {
        id: "136",
        species: "FLAREON",
        type: { type1: "FIRE", type2: null },
        stats: {
            hp: 333,
            attack: 358,
            defense: 218,
            special: 318,
            speed: 228
        },
        attacks: []
    },
    PORYGON: {
        id: "137",
        species: "PORYGON",
        type: { type1: "PORYGON", type2: null },
        stats: {
            hp: 333,
            attack: 218,
            defense: 238,
            special: 248,
            speed: 178
        },
        attacks: []
    },
    OMASTAR: {
        id: "139",
        species: "OMASTAR",
        type: { type1: "ROCK", type2: "WATER" },
        stats: {
            hp: 343,
            attack: 218,
            defense: 348,
            special: 328,
            speed: 208
        },
        attacks: []
    },
    KABUTOPS: {
        id: "140",
        species: "KABUTOPS",
        type: { type1: "ROCK", type2: "WATER" },
        stats: {
            hp: 323,
            attack: 328,
            defense: 308,
            special: 238,
            speed: 258
        },
        attacks: []
    },
    AERODACTYL: {
        id: "142",
        species: "AERODACTYL",
        type: { type1: "ROCK", type2: "FLYING" },
        stats: {
            hp: 363,
            attack: 308,
            defense: 228,
            special: 218,
            speed: 358
        },
        attacks: []
    },
    SNORLAX: {
        id: "143",
        species: "SNORLAX",
        type: { type1: "NORMAL", type2: null },
        stats: {
            hp: 523,
            attack: 318,
            defense: 228,
            special: 228,
            speed: 158
        },
        attacks: []
    },
    ARTICUNO: {
        id: "144",
        species: "ARTICUNO",
        type: { type1: "ICE", type2: "FLYING" },
        stats: {
            hp: 383,
            attack: 268,
            defense: 298,
            special: 348,
            speed: 268
        },
        attacks: []
    },
    ZAPDOS: {
        id: "145",
        species: "ZAPDOS",
        type: { type1: "ELECTRIC", type2: "FLYING" },
        stats: {
            hp: 383,
            attack: 278,
            defense: 268,
            special: 348,
            speed: 298
        },
        attacks: []
    },
    MOLTRES: {
        id: "146",
        species: "MOLTRES",
        type: { type1: "FIRE", type2: "FLYING" },
        stats: {
            hp: 383,
            attack: 298,
            defense: 278,
            special: 348,
            speed: 278
        },
        attacks: []
    },
    DRAGONITE: {
        id: "149",
        species: "DRAGONITE",
        type: { type1: "DRAGON", type2: "FLYING" },
        stats: {
            hp: 385,
            attack: 366,
            defense: 288,
            special: 298,
            speed: 258
        },
        attacks: []
    },
    MEWTWO: {
        id: "150",
        species: "MEWTWO",
        type: { type1: "PSYCHIC", type2: null },
        stats: {
            hp: 415,
            attack: 318,
            defense: 278,
            special: 406,
            speed: 358
        },
        attacks: []
    },
    MEW: {
        id: "151",
        species: "MEW",
        type: { type1: "PSYCHIC", type2: null },
        stats: {
            hp: 403,
            attack: 298,
            defense: 298,
            special: 298,
            speed: 298
        },
        attacks: []
    }
};
// NAME: {
//   id: 1,
//   species: 1,
//   type: { type1: 1, type2: null },
//   stats: {
//     hp: 1,
//     attack: 1,
//     defense: 1,
//     special: 1,
//     speed: 1,
//   },
//   attacks: [],
// },
