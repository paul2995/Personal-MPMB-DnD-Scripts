var iFileName = "Keeper_of_Secrets_Warlock_LittleBones.js";
RequiredSheetVersion(12.999);

// Define the source
SourceList.BLC = {
	name: "Black Lion Company v1.0",
	abbreviation: "BLC",
};

// Add subclasses
AddSubClass("warlock", "the keeper of secrets", {
	regExpSearch: /^(?=.*(warlock))(?=.*(keeper|secrets)).*$/i,
	subname: "The Keeper of Secrets",
	source: ["BLC", 3],
	spellcastingExtra : ["detect magic", "absorb elements", "detect thoughts", "flame blade", "clairvoyance", "blink", "arcane eye", "fire shield", "commune", "seeming"],
	features: {
		"subclassfeature1" : {
			name : "Secrets Magic",
			source : [["T", 68]],
			minlevel : 1,
			description : desc([
				"The Keeper of Secrets lets you choose from an expanded list of spells when you learn a warlock spell.",
				"Any Cantrip or Spell in the School of Divination for which you have a spell slot is added to the warlock spell list for you."
			])
		},
		"subclassfeature1.1" : {
			name : "Ravenous Flock",
			source : ["BLC", 3],
			minlevel : 1,
			description : desc([
				"Once per turn when you hit a creature with necrotic damage you use your patron's power to snatch a fraction of their soul.",
				"You can collect a number of fragments equal to double your Charisma modifier.",
                "You lose all soul fragments when you finish a short or long rest.",
                "As a bonus action, you can expend a number of fragments equal to your Constitution modifier to regain 1d4 hit points per fragments.",
                "You can do this a number of times equal to your proficiency bonus. You regain all uses after you finish a long rest"
			]),
            action : [["bonus action", ""]],
			usages : "Proficiency Bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
		},
		"subclassfeature1.2" : {
			name : "Agonizing Blast for Dead Hand",
			source : ["BLC", 3],
			minlevel : 1,
			description : desc([
				"I can add my Charisma modifier to every hit with my Death Hand cantrip"
			]),
            calcChanges : {
				atkCalc : [
					function (fields, v, output) {
						if (v.baseWeaponName == 'death hand') output.extraDmg += What('Cha Mod');
					},
					"I add my Charisma modifier to the damage of every beam of my Death Hand cantrip."
				],
				spellAdd : [
					function (spellKey, spellObj, spName) {
						if (spellKey == "death hand") {
							spellObj.description = spellObj.description.replace("2d4 Necrotic damage", "2d4+" + What("Cha Mod") + " Necrotic dmg");
							return true;
						};
					},
					"I add my Charisma modifier to the damage of every beam of my Death Hand cantrip."
				]
			}
		},
        "subclassfeature1.3" : {
			name : "Demonic Aura",
			source : ["BLC", 3],
			minlevel : 1,
			description : desc([
				"As a bonus action, you transform for 1 minute. You can transform a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
				"- Eldritch energy surrounds you and protects you from your enemies. Add your Charisma modifier to your AC.",
                "- You are resistant to necrotic damage.",
                "- You levitate up to 5ft. and hover with a speed equal to your walking speed.",
                "You can do this a number of times equal to your proficiency bonus. You regain all uses after you finish a long rest"
			]),
            action : [["bonus action", ""]],
			usages : "Proficiency Bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest"
		},
		"subclassfeature6" : {
			name : "Reveal Secrets",
			source : ["BLC", 3],
			minlevel : 6,
			description : desc([
				"At 6th level, you can use the power from your patron to gain insight into your enemy's secrets.",
				"Make a Wisdom (Insight) check against the creature, contested by the target’s Charisma (Deception) check.",
				"On a success, you learn one piece of information: immunities, resistances, vulnerabilities, saving throws or senses.",
				"In addition, all attacks you make against the creature on your next turn are made with advantage."
			])
		}
	}
});
SpellsList["death hand"] = {
	name : "Death Hand",
	classes : ["warlock"],
	source : ["HB", 0],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "5 ft",
	components : "S",
	duration : "Instantaneous",
	description : "On a hit, all creatures in the area takes 2d4 Necrotic damage. Make a spell attack against the targets.",
	descriptionMetric : "On a hit, all creatures in the area takes 2d4 Necrotic damage. Make a spell attack against the targets.",
	descriptionShorter : "On a hit, all creatures in the area takes 2d4 Necrotic damage. Make a spell attack against the targets.",
	descriptionShorterMetric : "On a hit, all creatures in the area takes 2d4 Necrotic damage. Make a spell attack against the targets.",
	descriptionFull : "You unleash a bolt of eldritch power that hits all creatures in the area. Make a spell attack against the targets. On a hit, it takes 2d4 Necrotic damage.",
	dynamicDamageBonus : { multipleDmgMoments : true }
};
WeaponsList["death hand"] = {
    regExpSearch : /(?=.*death)(?=.*hand).*$/i,
    name : "Death Hand",
    source : ["HB", 0],
    list : "spell",
    ability : 6,
    type : "Cantrip",
    damage : ["C\xD7" + 2, 4, "necrotic"],
    range : "Melee, 5 ft",
    description : "Each 2d4 is a separate beam requiring separate rolls",
	abilitytodamage : false,
	isAlwaysProf : true
};
