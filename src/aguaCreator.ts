import {Pokemon} from '../src/interfacePokemon';
import {Agua} from '../src/agua';
import {PokemonCreator} from '../src/abstractPokeCreato';

export class AguaCreator extends PokemonCreator {
  constructor(public readonly name: string, public readonly tipo: string,
    public readonly ataque: number, public readonly hp: number,
    private peso: number, private altura: number, private velocidad: number,
    public readonly defensa: number) {
    super();
  }
  public factoryMethod(): Pokemon {
    return new Agua(this.name, this.tipo,this.ataque,this.hp,this.peso, this.altura,this.velocidad, this.defensa);
  }
}
