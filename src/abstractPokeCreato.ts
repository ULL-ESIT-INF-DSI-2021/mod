import {Pokemon} from '../src/interfacePokemon';
/**
 * clase abstracta para la creacion de productos pokemon
 */
export abstract class PokemonCreator {
  /**
   * metodo que sevira para la cracion de productos pokemon
   */
  public abstract factoryMethod(): Pokemon;
  /**
   * 
   * @returns retorna el objeto con el que trabajaras
   */
  public logic(): string {
    const Pokemon = this.factoryMethod();
    return `I am a ${Pokemon.getName()}, ` +
           `I am ${Pokemon.gethp()} and ` +
           `my Ataque is equal to ${Pokemon.getAtaque()}`;
  }
}