import { getCharacter } from '../snapshot';
import rick from '../rick.json';

describe('Pruebas de instantaneas ', () => {
  test('Snapshot', () => {
    expect(getCharacter(rick)).toMatchSnapshot();
  });

  test('Instantanea con variaciones date ', () => {
    const user = {
      createAt: new Date(),
      Id: Math.floor(Math.random() * 20),
    }
    expect(user).toMatchSnapshot();
  });

  test('Instantanea con excepcion en variaciones date ', () => {
    const user = {
      Id: Math.floor(Math.random() * 20),
      name: "Jorge C"
    }
    expect(user).toMatchSnapshot({
      Id: expect.any(Number)
    });
  });

});
