var iFileName = "Exploring_Eberron_Forge_Adept.js";
AddSubClass("artificer", "forge adept", {
    regExpSearch : /^(?=.*forge)(?=.*adept).*$/i,
    subname : "Forge Adept",
    fullname : "Forge Adept",
    source : ["EE:KB", 214],
    attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    features : {
        "subclassfeature3" : {
            name : "Tool Proficiency",
            source : ["EE:KB", 214],
            minlevel : 3,
            description : desc([
                "I gain proficiency with Smith's Tools",
                "If I am already proficient, I choose another Artisan's Tool",
            ]),
            toolProfs : ["Smith's tools"],
            eval : function () {
                AddToInv("gear", "l", "Smith's tools", "", 8);
            },
            spellcastingExtra : ["armor of agathys", "shield of faith", "spiritual weapon", "warding bond", "remove curse", "beacon of hope", "death ward", "fire shield", "banishing smite", "wall of force"]
        },
        "subclassfeature3.1" : {
            name : "Battle Ready",
            source : ["EE:KB", 214],
            minlevel : 3,
            description : desc([
                "I gain proficiency with martial weapons",
                "I can use my Intelligence modifier instead of Strength or Dexterity for magic weapons",
            ]),
            weaponProfs : [false, true],
            calcChanges : {
                atkAdd : [
                    function (fields, v) {
                        if (!v.isSpell && (v.theWea.isMagicWeapon || v.thisWeapon[1]) && fields.Mod > 0 && fields.Mod < 3 && Number(What("Int")) > Number(What(fields.Mod == 1 ? "Str" : "Dex"))) {
                            fields.Mod = 4;
                        }
                    },
                    'If my weapon is magical, I can use my Intelligence modifier instead of Strength or Dexterity for the attack and damage rolls of magic weapons.'
                ]
            },
        },
        "subclassfeature3.2" : {
            name : "Ghaal'Shaarat",
            source : ["EE:KB", 214],
            minlevel : 3,
            description : desc("Choose your Ghaal'Shaarat using the 'Choose Feature' button above"),
			choices : ["Ghaal'Shaarat"],
            choicesNotInMenu : false,
			"ghaal'shaarat" : {
				name : "Ghaal'Shaarat",			
				magicitemsAdd : ["Ghaal'Shaarat"]
                }
			},
            "subclassfeature9" : {
                name : "Runes of War",
                source : ["EE:KB", 214],
                minlevel : 9,
                usages : "Intelligence modifier per ",
                usagescalc : "event.value = Math.max(1, What('Int Mod'));",
                recovery : "long rest",
                action : ["action", ""],
                description : desc([
                    "As an action, I activate a 30 ft radius aura that lasts for 1 minute",
                    "This ends early if my concentration ends (like a spell)",
                    "I choose either acid, cold, fire, lightning, or thunder",
                    "Each creature of my choice deals an extra 1d4 damage of that type"
                ])
            },
            "subclassfeature15" : {
                name : "Perfect Weapon",
                source : ["EE:KB", 215],
                minlevel : 15,
                description : desc([
                    "I can transfer some of my ghaal’shaarat bonus to my AC when I first attack with it on my turn",
                    "For every 1 I reduce my attack and damage bonus by, I add +1 to my AC",
                    "This bonus stays in effect until the start of my next turn",
                    "Additionally, I gain one of the benefits until the end of my next long rest",
                    "\u2022 I am resistant to psychic damage and can't be charmed or frightened",
                    "\u2022 I deal an extra 1d6 acid, cold, fire, lightning, or thunder damage with my ghaal’shaarat"
                ])
            }
        }
    });
MagicItemsList["Ghaal'Shaarat"] = {
	name : "Ghaal'Shaarat",
	nameTest : "Ghaal'Shaarat",
	source : ["EE:KB", 214],
	type : "weapon (any)",
	rarity : "uncommon",
	magicItemTable : "F",
	description : desc([
        "I turn one simple or martial melee weapon into my Ghaal'Shaarat weapon",
        "My weapon gains a +1 to damage and attack rolls unless the bonus was already higher",
        "This increases to +2 at 8th level and +3 at 13th",
        "If my weapon has the thrown property, it returns to my hand immediately after a ranged attack",
        "The benefits only apply to me until the weapon is destroyed or I imbue a new item"
    ]),
	attunement : false,
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "suffix",
		descriptionChange : ["replace", "weapon"]
	},
    calcChanges : {
        atkAdd : [
            function (fields, v) {
                if (!v.isSpell && !v.theWea.isMagicWeapon && (/^(?=.*Ghaal'Shaarat).*$/i).test(v.WeaponTextName)) {
                    v.theWea.isMagicWeapon = true;
                    fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
                    fields.Description += (fields.Description ? '; ' : '') + "Its my Ghaal'Shaarat";

                    if ((/^(?=.*thrown).*$/i).test(v.WeaponText)) {
                        fields.Description += (fields.Description ? '; ' : '') + 'Returns immediately after ranged attack';
                    }
                }
            },
            "If my weapon has Ghaal'Shaarat it gains a bonus to hit and damage."
        ],
        atkCalc : [
            function (fields, v, output) {
                if ((classes.known.artificer.level >= 2 && classes.known.artificer.level <= 6 && (/^(?=.*Ghaal'Shaarat).*$/i).test(v.WeaponTextName))) {
                    output.magic = v.thisWeapon[1] + 1;                            
                }
                else if ((classes.known.artificer.level >= 7 && classes.known.artificer.level <= 12 && (/^(?=.*Ghaal'Shaarat).*$/i).test(v.WeaponTextName))) {
                    output.magic = v.thisWeapon[1] + 2;          
                }
                else if ((classes.known.artificer.level >= 13 && (/^(?=.*Ghaal'Shaarat).*$/i).test(v.WeaponTextName))) {
                    output.magic = v.thisWeapon[1] + 3;                           
                }
            }],
        }
}
