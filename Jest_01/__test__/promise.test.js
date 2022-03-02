import { getDataFromApi } from '../promise';

describe('Probando promesas', () => {
  test('promesas con axios..', done => {
    const api = 'http://rickandmortyapi.com/api/character/';
    getDataFromApi(api).then(data => {
      //console.log(data);
      expect(data.results.length).toBeGreaterThan(19);
      done();
    });
  });

  test('resolve un hola de promesas', () => {
    return expect(Promise.resolve('Hola')).resolves.toBe('Hola');
  });

  test('rejects con un error', () => {
    return expect(Promise.reject('errror')).rejects.toBe('errror');
  });
});