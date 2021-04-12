
/**
 * Interface para crear pokemons
 */
export interface Pokemon {
  /**
   * getter del nombre
   */
  getName(): string;
  /**
   * getter de los puntos de vida
   */
  gethp(): number;
  /**
   * getter del ataque
   */
  getAtaque(): number;
}