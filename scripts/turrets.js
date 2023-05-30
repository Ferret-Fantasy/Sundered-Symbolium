//Turrets, Religion (Турели, Религия)
const hand = extend(ItemTurret, "hand", {});

const godkiller = extend(ItemTurret, "godkiller", {});

//Turrets, Vice (Турели, Порок)
const psycho = extend(ItemTurret, "psycho", {});

const shock = extend(ItemTurret, "shock", {});

const lie = extend(PowerTurret, "lie", {});

const traitor = extend(ItemTurret, "traitor", {});

const envious = extend(ItemTurret, "envious", {});

const treason = extend(LaserTurret, "treason", {});
treason.consume(new ConsumeCoolant(0.9)).update = false;