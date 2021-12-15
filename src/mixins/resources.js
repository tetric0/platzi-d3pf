const names = {
  BARBARIAN: 'barbarian',
  CRUSADER: 'crusader',
  MONK: 'monk',
  WIZARD: 'wizard',
  WITCHDOCTOR: 'witch-doctor',
  NECROMANCER: 'necromancer',
  DEMONHUNTER: 'demon-hunter'
}

const resourceClassName = {
  [names.BARBARIAN]: 'fury',
  [names.CRUSADER]: 'wrath',
  [names.MONK]: 'spirit',
  [names.WIZARD]: 'arcane-power',
  [names.WITCHDOCTOR]: 'mana',
  [names.NECROMANCER]: 'essence',
  [names.DEMONHUNTER]: 'hatred-discipline'
}

const resourceDisplayName = {
  [names.BARBARIAN]: 'Fury',
  [names.CRUSADER]: 'Wrath',
  [names.MONK]: 'Spirit',
  [names.WIZARD]: 'Arcane Power',
  [names.WITCHDOCTOR]: 'Mana',
  [names.NECROMANCER]: 'Essence',
  [names.DEMONHUNTER]: 'Hatred / Discipline'
}

export default {
  methods: {
    /**
     * Devuelve el nombre del recursos primario relacionado con la classe/tipo de personaje.
     *
     * @param classSlug {String}
     * @returns {String}
     */
    resourceClassName (classSlug) {
      return resourceClassName[classSlug]
    },
    /**
     * Devuelve los nombres de recursos normalizados.
     *
     * @param classSlug {String}
     * @returns {String}
     */
    resourceDisplayName (classSlug) {
      return resourceDisplayName[classSlug]
    }
  }
}
