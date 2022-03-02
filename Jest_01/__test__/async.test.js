import { getDataFromApi } from '../promise';

describe('Probar Await/Async...', () => {

  test('Realizar una peticion a una api', async () => {
    const api = 'http://rickandmortyapi.com/api/character/';
    const getRick = 'http://rickandmortyapi.com/api/character/1';
    await getDataFromApi(api).then(data => {
      expect(data.results.length).toBeGreaterThan(19);
    });
    await getDataFromApi(getRick).then(data => {
      expect(data.name).toEqual('Rick Sanchez');
    });
  });

  test('Realizando una peticion con error..', async () => {
    const apiError = 'http://httpstat.us/500';
    const peticion = getDataFromApi(apiError);
    await expect(peticion).rejects.toEqual(Error('Request failed with status code 500'));
  });

  test('Resuelve un HOLA', async () => {
    await expect(Promise.resolve('Hola')).resolves.toBe('Hola');
    await expect(Promise.reject('Error')).rejects.toBe('Error');
  });

});