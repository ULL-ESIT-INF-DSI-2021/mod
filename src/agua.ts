import {Pokemon} from '../src/interfacePokemon';
/**
 * clase para representar pokemons de tipo agua
 */
export class Agua implements Pokemon {
    /**
   * 
   * @param name nombre del pokemon
   * @param tipo tipo del pokemon
   * @param ataque  ataque del pokemon
   * @param hp puntos de vida del pokemon
   * @param peso peso del pokemon
   * @param altura altura del pokemon
   * @param velocidad velocidad del pokemon
   * @param defensa defensa del pokemon
   */
  constructor(public readonly name: string, public readonly tipo: string,
    public readonly ataque: number, public hp: number,
    private peso: number, private altura: number, private velocidad: number,
    public readonly defensa: number) {
  }
  /**
   * getter del nombre
   * @returns nombre
   */
  getName() {
    return this.name;
  }
  /**
   * getter de puntos de vida
   * @returns  puntos de vida
  */
  gethp() {
    return this.hp;
  }
  /**
   * getter del ataque
   * @returns devuelve ataqque
   */
  getAtaque() {
    return this.ataque;
  }
  /**
   * getter del peso
   * @returns peso
   */
  getPeso() {
    return this.peso;
  }
  /**
   * getter de la altura
   * @returns altura
   */
  getAltura() {
    return this.altura;
  }
  /**
   * getter de la velocidad
   * @returns velocidad
   */
  getVelocidad() {
    return this.velocidad;
  }
}
