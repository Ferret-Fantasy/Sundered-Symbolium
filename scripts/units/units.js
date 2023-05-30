//Unit, Sound, Ground (Юниты, Звук, Наземные)

const note = extend(UnitType, "note", {});
note.constructor = () => extend(MechUnit, {});

const voice = extend(UnitType, "voice", {});
voice.constructor = () => extend(MechUnit, {});

const song = extend(UnitType, "song", {});
song.constructor = () => extend(MechUnit, {});

const scream = extend(UnitType, "scream", {});
scream.constructor = () => extend(MechUnit, {});

const shriek = extend(UnitType, "shriek", {});
shriek.constructor = () => extend(MechUnit, {});
shriek.abilities.add(new RepairFieldAbility(240, 300, 90), new SpawnDeathAbility(scream, 4, 12));

const whisper = extend(UnitType, "whisper", {});
whisper.constructor = () => extend(MechUnit, {});

const silence = extend(UnitType, "silence", {});
silence.constructor = () => extend(MechUnit, {});

const sufferer = extend(UnitType, "sufferer", {});
sufferer.constructor = () => extend(MechUnit, {});

//Unit, Sound, Air (Юниты, Звук, Воздух)
const whistling = extend(UnitType, "whistling", {});
whistling.constructor = () => extend(UnitEntity, {});
whistling.controller = (u) => extend(SuicideAI, {})

const laugh = extend(UnitType, "laugh", {});
laugh.constructor = () => extend(UnitEntity, {});
laugh.controller = (u) => extend(DefenderAI, {});

const symphony = extend(UnitType, "symphony", {});
symphony.constructor = () => extend(UnitEntity, {});
symphony.controller = (u) => extend(BuilderAI, {
buildRadius: 8000,
});
symphony.command = (u) => extend(RebuildCommand, {});

//Unit, Fractal (Юниты, Фрактал) 

const adept = extend(UnitType, "adept", {});
adept.constructor = () => extend(MechUnit, {});

const clear = extend(UnitType, "clear", {});
clear.constructor = () => extend(MechUnit, {});

const temple = extend(UnitType, "temple", {});
temple.constructor = () => extend(MechUnit, {});

const enlight = extend(UnitType, "enlight", {});
enlight.constructor = () => extend(MechUnit, {});

const time = extend(UnitType, "time", {});
time.constructor = () => extend(MechUnit, {});


//Юниты, Ванилла, Серпуло

const royal = extend(UnitType, "royal", {});
royal.constructor = () => extend(MechUnit, {});

const legion = extend(UnitType, "legion", {});
legion.constructor = () => extend(MechUnit, {});