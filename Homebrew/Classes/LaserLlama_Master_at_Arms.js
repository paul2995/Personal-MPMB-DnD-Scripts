var iFileName = "laserllama_master_at_arms.js";
AddSubClass("fighter", "master at arms", {
	regExpSearch : /^(?=.*(war|fighter|battle|martial))(?=.*arms).*$/i,
	subname : "Master at Arms",
	source : ["LL", 9],
	abilitySave : 1,
	abilitySaveAlt : 2,
	features : {
		"subclassfeature3" : {
			name : "Advanced Techniques",
			source : ["LL", 9],
			minlevel : 3,
			description : "\n   " + "I gain a number of exploit dice that I can use to fuel special Explots" + "\n   " + "I regain all exploit dice after a short rest",
			additional : ["", "", "d8", "d8", "d10", "d10", "d10", "d10", "d10", "d10", "d12", "d12", "d12", "d12", "d12", "d12", "d12", "d12", "d12", "d12"],
			usages : [0, 0, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 8],
			recovery : "short rest"
		},
		"subclassfeature3.1" : {
			name : "Exploits",
			source : ["LL", 9],
			minlevel : 3,
			description : "\n   " + 'Use the "Choose Feature" button above to add a Maneuver to the third page' + "\n   " + "I can use a Maneuver by expending a exploit die (only one Maneuver per attack)",
			additional : levels.map(function (n) {
				return n < 3 ? "" : (n < 5 ? 3 : n < 7 ? 4 : n < 9 ? 7 : n < 11 ? 8 : n < 13 ? 9 : n < 15 ? 10 : n < 17 ? 12 : n < 19 ? 13 : 14) + " known";
			}),
			"commander's strike" : {
				name : "Commander's Strike",
				source : ["P", 74],
				description : "\n   " + "I forgo one attack of my Attack action to use a bonus action to direct an ally I see/hear" + "\n   " + "The ally can use a reaction to make an attack, adding the exploit die to damage",
				action : ["bonus action", " (with Attack action)"]
			},
			"disarming attack" : {
				name : "Disarming Attack",
				source : ["P", 74],
				description : "\n   " + "Use after hitting a creature; I add the exploit die to my attack's damage" + "\n   " + "Target makes a Strength save or drops a held object of my choice to its feet"
			},
			"distracting strike" : {
				name : "Distracting Strike",
				source : ["P", 74],
				description : "\n   " + "Use after hitting a creature; I add the exploit die to my attack's damage" + "\n   " + "The next attack of an ally before my next turn has adv. against the creature"
			},
			"evasive footwork" : {
				name : "Evasive Footwork",
				source : ["P", 74],
				description : "\n   " + "Use when moving; I add the exploit die to my AC until I stop moving"
			},
			"feinting attack" : {
				name : "Feinting Attack",
				source : ["P", 74],
				description : "\n   " + "As a bonus action, I can feint to gain adv. on my next attack this turn vs. a target in 5 ft" + "\n   " + "If the attack hits, I add the exploit die to my attack's damage",
				action : ["bonus action", ""]
			},
			"goading attack" : {
				name : "Goading Attack",
				source : ["P", 74],
				description : "\n   " + "Use after hitting a creature; I add the exploit die to my attack's damage" + "\n   " + "Target makes a Wis save or has disadv. vs. other targets until the end of my next turn"
			},
			"lunging attack" : {
				name : "Lunging Attack",
				source : ["P", 74],
				description : "\n   " + "I can spend a exploit die to increase the reach of a melee weapon attack by 5 ft" + "\n   " + "If the attack hits, I add the exploit die to my attack's damage"
			},
			"maneuvering attack" : {
				name : "Maneuvering Attack",
				source : ["P", 74],
				description : "\n   " + "Use after hitting a creature; I add the exploit die to my attack's damage" + "\n   " + "Ally can use reaction to move half speed without opportunity attack from the target"

			},
			"menacing attack" : {
				name : "Menacing Attack",
				source : ["P", 74],
				description : "\n   " + "Use after hitting a creature; I add the exploit die to my attack's damage" + "\n   " + "Target makes a Wisdom save or is frightened of me until the end of my next turn"
			},
			"parry" : {
				name : "Parry",
				source : ["P", 74],
				description : "\n   " + "When damaged in melee, I can use a reaction to reduce it by exploit die + Dex mod",
				action : ["reaction", " (when damaged in melee)"]
			},
			"precision attack" : {
				name : "Precision Attack",
				source : ["P", 74],
				description : "\n   " + "I add the exploit die to my attack roll, either before or after rolling"
			},
			"pushing attack" : {
				name : "Pushing Attack",
				source : ["P", 74],
				description : "\n   " + "Use after hitting a creature; I add the exploit die to the attack's damage" + "\n   " + "If target is Large or smaller, it must make a Strength save or be pushed up to 15 ft away"
			},
			"rally" : {
				name : "Rally",
				source : ["P", 74],
				description : "\n   " + "Ally that can see/hear me gets temporary HP equal to exploit die + Charisma mod",
				action : ["bonus action", ""]
			},
			"riposte" : {
				name : "Riposte",
				source : ["P", 74],
				description : "\n   " + "When missed in melee, I can use my reaction to make one melee attack vs. the attacker" + "\n   " + "If the attack hits, I add the exploit die to my attack's damage",
				action : ["reaction", " (after missed in melee)"]
			},
			"sweeping attack" : {
				name : "Sweeping Attack",
				source : ["P", 74],
				description : "\n   " + "Use after hitting a creature and a second creature is within 5 ft of the first" + "\n   " + "If the original attack roll hits this second creature, it takes the exploit die in damage"
			},
			"trip attack" : {
				name : "Trip Attack",
				source : ["P", 74],
				description : "\n   " + "Use after hitting a creature; I add the exploit die to the attack's damage" + "\n   " + "If target is Large or smaller, it must make a Strength save or be knocked prone"
			}
		},
		"subclassfeature3.2" : {
			name : "Student of War",
			source : ["LL", 9],
			minlevel : 3,
			description : "\n   " + "I have proficiency with one artisan's tool set of my choice",
			toolProfs : [["Artisan's tools", 1]]
		},
		"subclassfeature3.3" : {
			name : "Know Your Enemy",
			source : ["LL", 9],
			minlevel : 3,
			description : "\n   " + "If I spend 1 min studying someone, the DM will tell me info about him/her"
		},
		"subclassfeature3.4" : function () {
			var FSfea = newObj(ClassList.fighter.features["fighting style"]);
			FSfea.name = "Additional Fighting Style Level 3";
			FSfea.source = [["HB", 0], ["LL", 9]];
			FSfea.minlevel = 3;
			FSfea.description = desc('Choose an Additional Fighting Style using the "Choose Feature" button above ');
			return FSfea;
		}(),
		"subclassfeature7" : function () {
			var FSfea = newObj(ClassList.fighter.features["fighting style"]);
			FSfea.name = "Additional Fighting Style Level 7";
			FSfea.source = [["HB", 0], ["LL", 9]];
			FSfea.minlevel = 7;
			FSfea.description = desc('Choose an Additional Fighting Style using the "Choose Feature" button above ');
			return FSfea;
		}(),
		"subclassfeature7.1" : {
			name : "Fluid Stances",
			source : ["P", 55],
			minlevel : 14,
			description : "\n   " + "As a bonus action I can switch my Fighting Style to another Fighting Style that I know",
			action : ["bonus action", ""]
		},
		"subclassfeature15" : function () {
			var FSfea = newObj(ClassList.fighter.features["fighting style"]);
			FSfea.name = "Additional Fighting Style Level 15";
			FSfea.source = [["HB", 0], ["LL", 9]];
			FSfea.minlevel = 15;
			FSfea.description = desc('Choose an Additional Fighting Style using the "Choose Feature" button above ');
			return FSfea;
		}(),
	}
});
