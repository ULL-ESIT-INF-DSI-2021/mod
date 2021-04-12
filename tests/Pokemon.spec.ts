import 'mocha';
import {expect} from 'chai';
import {FuegoCreator} from '../src/fuegoCreator';
import {AguaCreator} from '../src/aguaCreator';

const charmander = new FuegoCreator("Charmander", "fuego", 52, 39, 2, 30, 65, 43 ).factoryMethod();
const blastoise = new AguaCreator("blastoise", "agua", 33, 100, 3, 50, 65, 120 ).factoryMethod();
describe('name test', () => {
  it('charmander.getName() value Charmander', () => {
    expect(charmander.getName()).to.be.equal("Charmander");
  });
});
describe('pokemon hp', ()=> {
  it('charmander.gethp returns value 39', ()=>{
    expect(charmander.gethp()).to.be.equal(39);
  });
});
describe('name test', () => {
  it('add(1, 8) returns value 9', () => {
    expect(blastoise.getName()).to.be.equal("blastoise");
  });
});
describe('pokemon hp', ()=> {
  it('blastoise.getgp returns value 100', ()=>{
    expect(blastoise.gethp()).to.be.equal(100);
  });
});
describe('pokemon ataque', ()=> {
  it('blastoise.getataque returns value 33', ()=>{
    expect(blastoise.getAtaque()).to.be.equal(33);
  });
});
describe('pokemon ataque', ()=> {
  it('charmander.getataque returns value 52', ()=>{
    expect(charmander.getAtaque()).to.be.equal(52);
  });
});

