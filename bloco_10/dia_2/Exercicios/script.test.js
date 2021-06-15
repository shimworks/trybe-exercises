const { uppercase } = require('./script');

describe('testa uppercase', () => {
  it('deveria transformar para maiusculo', done => {
    uppercase('ababa', (test) => {
      expect(test).toBe('ABABA');
      done();
    })
  })
})

