describe('Comparadores Comunes', () => {
  const user = {
    name: 'Jorge',
    lastname: 'Calderon'
    ,
  }
  const user2 = {
    name: 'Jorge',
    lastname: 'Calderon'
  }
  test('igualdad de elementos', () => {
    expect(user).toEqual(user2);
  });
  test('No son exactamente iguales', () => {
    expect(user).not.toEqual(user2);
  });
});
