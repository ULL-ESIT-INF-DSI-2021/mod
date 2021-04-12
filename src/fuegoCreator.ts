import {Pokemon} from './interfacePokemon';
import {Fuego} from './fuego';
import {PokemonCreator} from './abstractPokeCreato';
/**
 * clase para crear pokemons de tipo fuego
 */
export class FuegoCreator extends PokemonCreator {
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
    public readonly ataque: number, public readonly hp: number,
    private peso: number, private altura: number, private velocidad: number,
    public readonly defensa: number) {
    super();
  }
  public factoryMethod(): Pokemon {
    return new Fuego(this.name, this.tipo,this.ataque,this.hp,this.peso, this.altura,this.velocidad, this.defensa);
  }
}
