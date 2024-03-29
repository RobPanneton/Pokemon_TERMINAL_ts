"use strict";
// TODOS :                                    ~~~~~~~ MOVE CREATION TO DOS ~~~~~~~
// BIDE
// TRAPPERS : BIND, CLAMP, FIRE SPIN
// CONVERSION
// COUNTER
// DIG
// DISABLE
// DOUBLE TEAM (?)
// DREAM EATER
// EXPLOSION
// 1HKO MOVES: FISSURE, HORN DRILL, GUILLOTINE
// ACCURACY MOVES? FLASH, SAND-ATTACK, MINIMIZE, DOUBLE TEAM, KINESIS
// FLY
// FOCUS ENERGY ??? bugged in gen 1.. do i even add it ?
// HAZE
// HI JUMP KICK and JUMP KICK
// HYPER BEAM
exports.__esModule = true;
exports.attacks = void 0;
// HIGH CRIT RATIO MOVES: CRABHAMMER, KARATE CHOP, SLASH
// TO BE TESTED:                              ~~~~~~~ TEST TO DOS ~~~~~~~
// FLINCH : BITE,
// DRAIN: ABSORB, MEGA DRAIN, GIGA DRAIN, LEECH LIFE
// STATMODS: ACID, AURORA BEAM
// MULTI HIT: BARRAGE
// RECOIL DAMAGE: DOUBLE-EDGE
// FIXED DAMAGE: DRAGON RAGE
// NOTEABLE POINTS:                      ~~~~~~~ EXCEPTION TO DOS ~~~~~~~
// MULTI HIT MOVES:
// - CRITS: only checks for crits on 1st attack, subsequent hits are also crit if first lands
// - BIDE/COUNTER: only registers last hit
// - SUBSTITUTE: Stops multi-hit if sub breaks
// RECOILING MOVES:
// - SUBSITUTE: user does not take recoil damage if it destroys a sub
// - COUNTER: sub recoil dmg is included in dmg calc if enemy did not move yet (?)
// BODY SLAM: does not paralyze normal types in gen 1!? woah
exports.attacks = {
    ABSORB: {
        name: "ABSORB",
        power: 20,
        accuracy: 100,
        type: "GRASS",
        effect: {
            chance: 100,
            drain: 50
        }
    },
    ACID: {
        name: "ACID",
        power: 40,
        accuracy: 100,
        type: "POISON",
        effect: {
            chance: (85 / 256) * 100,
            enemyStatChange: {
                defense: -1
            }
        }
    },
    ACIDARMOR: {
        name: "ACID ARMOR",
        power: 0,
        accuracy: 100,
        type: "POISON",
        effect: {
            chance: 100,
            selfStatChange: {
                defense: 2
            }
        }
    },
    AGILITY: {
        name: "AGILITY",
        power: 0,
        accuracy: 100,
        type: "PSYCHIC",
        effect: {
            chance: 100,
            selfStatChange: {
                speed: 2
            }
        }
    },
    AMNESIA: {
        name: "AMNESIA",
        power: 0,
        accuracy: 100,
        type: "PSYCHIC",
        effect: {
            chance: 100,
            selfStatChange: {
                special: 2
            }
        }
    },
    AURORABEAM: {
        name: "AURORA BEAM",
        power: 65,
        accuracy: 100,
        type: "ICE",
        effect: {
            chance: (85 / 256) * 100,
            enemyStatChange: {
                attack: -1
            }
        }
    },
    BARRAGE: {
        name: "BARRAGE",
        power: 15,
        accuracy: 85,
        type: "NORMAL",
        effect: {
            chance: 100,
            multihit: {
                2: 37.5,
                3: 75,
                4: 87.5,
                5: 100
            }
        }
    },
    BARRIER: {
        name: "BARRIER",
        power: 0,
        accuracy: 100,
        type: "PSYCHIC",
        effect: {
            chance: 100,
            selfStatChange: {
                defense: 2
            }
        }
    },
    BIDE: {
        name: "BIDE"
    },
    BIND: {
        name: "BIND"
    },
    BITE: {
        name: "BITE",
        power: 60,
        accuracy: 100,
        type: "NORMAL",
        effect: {
            chance: 10,
            volatileStatus: "flinch"
        }
    },
    BLIZZARD: {
        name: "BLIZZARD",
        power: 120,
        accuracy: 90,
        type: "ICE",
        effect: {
            chance: 10,
            status: "freeze"
        }
    },
    BODYSLAM: {
        name: "BODY SLAM",
        power: 80,
        accuracy: 100,
        effect: {
            chance: 30,
            status: "paralyze"
        }
    },
    BONECLUB: {
        name: "BONE CLUB",
        power: 65,
        accuracy: 85,
        type: "GROUND",
        effect: {
            chance: 10,
            volatileStatus: "flinch"
        }
    },
    BONEMERANG: {
        name: "BONEMERANG",
        power: 50,
        accuracy: 90,
        type: "GROUND",
        effect: {
            chance: 100,
            multihit: {
                2: 100
            }
        }
    },
    BUBBLE: {
        name: "BUBBLE",
        power: 20,
        accuracy: 100,
        type: "WATER",
        effect: {
            chance: (85 / 256) * 100,
            enemyStatChange: {
                speed: -1
            }
        }
    },
    BUBBLEBEAM: {
        name: "BUBBLEBEAM",
        power: 65,
        accuracy: 100,
        type: "WATER",
        effect: {
            chance: (85 / 256) * 100,
            enemyStatChange: {
                speed: -1
            }
        }
    },
    CLAMP: {
        name: "CLAMP"
    },
    COMETPUNCH: {
        name: "COMET PUNCH",
        power: 18,
        accuracy: 85,
        type: "NORMAL",
        effect: {
            chance: 100,
            multihit: {
                2: 37.5,
                3: 75,
                4: 87.5,
                5: 100
            }
        }
    },
    CONFUSERAY: {
        name: "CONFUSE RAY",
        power: 0,
        accuracy: 100,
        type: "GHOST",
        effect: {
            chance: 100,
            volatileStatus: "confusion"
        }
    },
    CONFUSION: {
        name: "CONFUSION",
        power: 50,
        accuracy: 100,
        type: "PSYCHIC",
        effect: {
            chance: 10,
            volatileStatus: "confusion"
        }
    },
    CONSTRICT: {
        name: "CONSTRICT",
        power: 10,
        accuracy: 100,
        type: "NORMAL",
        effect: {
            chance: (85 / 256) * 100,
            enemyStatChange: {
                speed: -1
            }
        }
    },
    CONVERSION: {
        name: "CONVERSION"
    },
    COUNTER: {
        name: "COUNTER"
    },
    CRABHAMMER: {
        name: "CRABHAMMER",
        power: 90,
        accuracy: 85,
        effect: {
        // high crit ratio
        }
    },
    CUT: {
        name: "CUT",
        power: 50,
        accuracy: 95,
        type: "NORMAL"
    },
    DEFENSECURL: {
        name: "DEFENSE CURL",
        power: 0,
        accuracy: 100,
        type: "NORMAL",
        effect: {
            chance: 100,
            selfStatChange: {
                defense: 1
            }
        }
    },
    DIG: {
        name: "DIG"
    },
    DISABLE: {
        name: "DISABLE"
    },
    DIZZYPUNCH: {
        name: "DIZZY PUNCH",
        power: 70,
        accuracy: 100,
        type: "NORMAL",
        effect: {
            chance: 20,
            volatileStatus: "confuse"
        }
    },
    DOUBLEKICK: {
        name: "DOUBLE KICK",
        power: 30,
        accuracy: 100,
        type: "FIGHTING",
        effect: {
            chance: 100,
            multihit: {
                2: 100
            }
        }
    },
    DOUBLESLAP: {
        name: "DOUBLESLAP",
        power: 15,
        accuracy: 85,
        type: "NORMAL",
        effect: {
            chance: 100,
            multihit: {
                2: 37.5,
                3: 75,
                4: 87.5,
                5: 100
            }
        }
    },
    DOUBLETEAM: {
        name: "DOUBLE TEAM"
    },
    DOUBLEEDGE: {
        name: "DOUBLE-EDGE",
        power: 100,
        accuracy: 100,
        type: "NORMAL",
        effect: {
            chance: 100,
            recoil: 25
        }
    },
    DRAGONRAGE: {
        name: "DRAGON RAGE",
        power: 0,
        accuracy: 100,
        type: "DRAGON",
        effect: {
            chance: 100,
            damage: 40
        }
    },
    DREAMEATER: {
        name: "DREAM EATER"
    },
    DRILLPECK: {
        name: "DRILL PECK",
        power: 80,
        accuracy: 100,
        type: "FLYING"
    },
    EARTHQUAKE: {
        name: "EARTHQUAKE",
        power: 100,
        accuracy: 100,
        type: "GROUND"
    },
    EGGBOMB: {
        name: "EGG BOMB",
        power: 100,
        accuracy: 75,
        type: "NORMAL"
    },
    EMBER: {
        name: "EMBER",
        power: 40,
        accuracy: 100,
        type: "FIRE"
    },
    EXPLOSION: {
        name: "EXPLOSION"
    },
    FIREBLAST: {
        name: "FIRE BLAST",
        power: 120,
        accuracy: 85,
        type: "FIRE",
        effect: {
            chance: 30,
            status: "burn"
        }
    },
    FIREPUNCH: {
        name: "FIRE PUNCH",
        power: 75,
        accuracy: 100,
        type: "FIRE",
        effect: {
            chance: 10,
            status: "burn"
        }
    },
    FIRESPIN: {
        name: "FIRE SPIN"
    },
    FISSURE: {
        name: "FISSURE",
        power: 0,
        accuracy: 30,
        type: "GROUND"
    },
    FLAMETHROWER: {
        name: "FLAMETHROWER",
        power: 95,
        accuracy: 100,
        type: "FIRE",
        effect: {
            chance: 10,
            status: "burn"
        }
    },
    FLASH: {
        name: "FLASH"
    },
    FLY: {
        name: "FLY"
    },
    FOCUSENERGY: {
        name: "FOCUS ENERGY"
    },
    FURYATTACK: {
        name: "FURY ATTACK",
        power: 15,
        accuracy: 85,
        type: "NORMAL",
        effect: {
            chance: 100,
            multihit: {
                2: 37.5,
                3: 75,
                4: 87.5,
                5: 100
            }
        }
    },
    FURYSWIPES: {
        name: "FURY SWIPES",
        power: 18,
        accuracy: 80,
        type: "NORMAL",
        effect: {
            chance: 100,
            multihit: {
                2: 37.5,
                3: 75,
                4: 87.5,
                5: 100
            }
        }
    },
    GLARE: {
        name: "GLARE",
        power: 0,
        accuracy: 100,
        type: "NORMAL",
        effect: {
            chance: 100,
            status: "paralyze"
        }
    },
    GROWL: {
        name: "GROWL",
        power: 0,
        accuracy: 100,
        type: "NORMAL",
        effect: {
            chance: 100,
            enemyStatChange: {
                attack: -1
            }
        }
    },
    GROWTH: {
        name: "GROWTH",
        power: 0,
        accuracy: 100,
        type: "NORMAL",
        effect: {
            chance: 100,
            selfStatChange: {
                special: 1
            }
        }
    },
    GUILLOTINE: {
        name: "GUILLOTINE"
    },
    GUST: {
        name: "GUST",
        power: 40,
        accuracy: 100,
        type: "NORMAL"
    },
    HARDEN: {
        name: "HARDEN",
        power: 0,
        accuracy: 100,
        type: "NORMAL",
        effect: {
            chance: 100,
            selfStatChange: {
                defense: 1
            }
        }
    },
    HAZE: {
        name: "HAZE"
    },
    HEADBUTT: {
        name: "HEADBUTT",
        power: 70,
        accuracy: 100,
        type: "NORMAL",
        effect: {
            chance: 30,
            volatileStatus: "flinch"
        }
    },
    HIGHJUMPKICK: {
        name: "HI JUMP KICK",
        power: 85,
        accuracy: 90,
        type: "FIGHTING"
    },
    HORNATTACK: {
        name: "HORN ATTACK",
        power: 65,
        accuracy: 100,
        type: "NORMAL"
    },
    HORNDRILL: {
        name: "HORN DRILL"
    },
    HYDROPUMP: {
        name: "HYDRO PUMP",
        power: 120,
        accuracy: 80,
        type: "WATER"
    },
    HYPERFANG: {
        name: "HYPER FANG",
        power: 80,
        accuracy: 90,
        type: "NORMAL",
        effect: {
            chance: 10,
            volatileStatus: "flinch"
        }
    },
    HYPNOSIS: {
        name: "HYPNOSIS",
        power: 0,
        accuracy: 60,
        type: "PSYCHIC",
        effect: {
            chance: 100,
            status: "sleep"
        }
    },
    HYPERBEAM: {
        name: "HYPER BEAM",
        power: 150,
        accuracy: 90,
        type: "NORMAL",
        effect: {
            chance: 100
        }
    },
    ICEBEAM: {
        name: "ICE BEAM",
        power: 95,
        accuracy: 100,
        type: "ICE",
        effect: {
            chance: 10,
            status: "freeze"
        }
    },
    ICEPUNCH: {
        name: "ICE PUNCH",
        power: 75,
        accuracy: 100,
        type: "ICE",
        effect: {
            chance: 10,
            status: "freeze"
        }
    },
    JUMPKICK: {
        name: "JUMP KICK"
    },
    KARATECHOP: {
        name: "KARATE CHOP"
    },
    KINESIS: {
        name: "KINESIS"
    },
    LEECHLIFE: {
        name: "LEECH LIFE",
        power: 20,
        accuracy: 100,
        type: "BUG",
        effect: {
            chance: 100,
            drain: 50
        }
    },
    STOMP: {
        name: "STOMP",
        power: 65,
        accuracy: 100,
        type: "NORMAL",
        effect: {
            chance: 33,
            flinch: true
        }
    },
    SURF: {
        name: "SURF",
        power: 95,
        accuracy: 100,
        type: "WATER"
    },
    STRENGTH: {
        name: "STRENGTH",
        power: 80,
        accuracy: 100,
        type: "NORMAL"
    },
    TACKLE: {
        name: "TACKLE",
        power: 35,
        accuracy: 95,
        type: "NORMAL"
    },
    THUNDERBOLT: {
        name: "THUNDERBOLT",
        power: 95,
        accuracy: 100,
        type: "ELECTRIC",
        effect: {
            chance: 10,
            effect: "PARALYZE"
        }
    },
    VINEWHIP: {
        name: "VINE WHIP",
        power: 35,
        accuracy: 100,
        type: "GRASS"
    },
    WINGATTACK: {
        name: "WING ATTACK",
        power: 35,
        accuracy: 100,
        type: "FLYING"
    }
};
// logic for attack effects
// effect %
// status effect
// bind
// seed (you'll need a seed leech function to leech and heal the reciever)
// flinch (add condition to replace 2nd attack with flinch message)
// buff (increase pokemon's stats while keeping in mind damage cap)
// curse (decrease opponent's stats
// for buffs and curses, modify stats as you would hp and return the new values in object that battle() returns
var attackExample = {
    name: "name",
    power: "att",
    accuracy: "acc",
    type: "type",
    effect: {
        status: {
            burn: true,
            paralyze: true,
            freeze: true,
            sleep: true
        },
        confused: true,
        flinch: true,
        seed: true,
        bind: true,
        heal: 50,
        ohko: true,
        multpy: "rng with parameters",
        conversion: {
            type: "NORMAL"
        }
    }
};
