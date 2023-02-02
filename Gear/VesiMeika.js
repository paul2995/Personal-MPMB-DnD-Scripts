MagicItemsList["vesi veika"] = {
	name : "Vesi Meika",
	source : ["Abraham", 1],
	type : "weapon (cutlass)",
	rarity : "Rare",
	magicItemTable : "F",
	description : 'You get a +1 bonus to attack and damage rolls made with this weapon. This weapon contains 6 charges and gains 1d4+1 charges at dawn. As action you can spend charges to cast the following spells.',
	descriptionFull : 'One of the weapons crafted by the goddess of the sea. Originally owned by Jacques captain and stolen by David. You get a +1 bonus to attack and damage rolls made with this weapon. This weapon contains 6 charges and gains 1d4+1 charges at dawn. As action you can spend charges to cast the following spells.',
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "prefix",
		descriptionChange : ["replace", "sword"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /sword|scimitar|rapier/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
	weight : 4,
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/Vesi/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
				}
			},
			'If I include the words "Vesi" in the name of a sword, it will be treated as the magic weapon Vesi Meika. It has +1 to hit and damage, and also bears spells.'
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/Vesi/i).test(v.WeaponTextName)) {
					output.magic = v.thisWeapon[1] + 1;
				}
			}, ''
		]
	}
}
