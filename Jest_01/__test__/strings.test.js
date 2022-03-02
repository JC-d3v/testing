describe('Pruebas de texto', () => {
  const cadena = 'Una cadena es la union de eslabones'
  test('contiene ...', () => {
    expect(cadena).toMatch(/eslabon/);
  });
  test('No contine ...', () => {
    expect(cadena).not.toMatch(/anillos/)
  });

  test('el tamaño de la cadena es ...', () => {
    expect(cadena).toHaveLength(35)
  })
});

