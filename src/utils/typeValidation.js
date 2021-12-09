/**
 * Usado para validaciones personalizadas
 * @param hero {String}
 * @param time {String}
 * @param classSlug {String}
 * @constructor
 */
function HeroData (hero, time, classSlug) {
  this.hero = hero
  this.time = time
  this.classSlug = classSlug
}

export {
  HeroData
}
