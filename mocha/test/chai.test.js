const assert = require('chai').assert;

const should = require('chai').should();

const expect = require('chai').expect;

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

describe('Inicio de pruebas Mocha con Chai', () => {
  it('validando que numero no este en array', () => {
    assert.equal([1, 2, 3, 4].length, 4, 'Error de Longitud');
  });
});


describe('validaciones ASSERT ', () => {
  it('validando suma ASSERT ', () => {
    const suma = 2 + 2;
    assert.equal(suma, 4);
  });
});


describe('validaciones SHOULD...', () => {
  it('validaciones de longitud de array. ', () => {
    const cadena = [1, 2, 3, 4];
    cadena.should.have.lengthOf(4);
  })

  it('validaciones de longitud de cadena.. ', () => {
    const cadena2 = 'hola mundo';
    cadena2.should.be.a('string');
  })

});

describe('Validaciones EXPECT...', () => {
  it('validando existencia de una propiedad en un objeto.. ', () => {
    const jwt = {
      expireIn: new Date(),
      user: 'Jorge',
      server: 'WDSrvr'
    };
    expect(jwt).to.have.property('user');
  });
})

describe('Validacion con chai-as-promised', () => {
  it('verificacion de promesas', () => {
    return Promise.resolve(2 + 2).should.eventually.equal(4)
  })
});


