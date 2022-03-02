import { callbackHell } from '../callbacks';

describe('Probando un callback', () => {
  test('Callback', done => {
    function otherCallback(data) {
      expect(data).toBe('Hola Mundo JS');
      done();
    }
    callbackHell(otherCallback);
  });
})