jest.mock("./exercicio")
let { rng, somaAR, fetchJoke, funBeg} = require('./exercicio');
const { expect } = require("@jest/globals");

describe('testa rng', () => {
  it('rng', () => {
    rng = jest.fn()
    .mockReturnValue(10)
    
    expect(rng()).toBe(10);
    expect(somaAR(rng)).toBe(50)
  })
})

describe('testa rng', () => {
  it('rng2', () => {
    rng.mockReset();
    rng.mockImplementation((a, b) => a / b)

      expect(rng(10, 2)).toBe(5);
      expect(rng).toHaveBeenCalled();
      expect(rng).toHaveBeenCalledTimes(1);
      expect(rng).toHaveBeenCalledWith(10, 2);
  })
  it('rng3', () => {
    rng.mockReset();
    rng.mockImplementation((a, b, c) => a * b * c)
      expect(rng(2, 5, 2)).toBe(20);
      expect(rng).toHaveBeenCalled();
      expect(rng).toHaveBeenCalledTimes(1);
      expect(rng).toHaveBeenCalledWith(2, 5, 2);
      
    rng.mockReset();
    rng.mockImplementation((a) => a * 2);
      expect(rng(5)).toBe(10);
      expect(rng).toHaveBeenCalled();
      expect(rng).toHaveBeenCalledTimes(1);
      expect(rng).toHaveBeenCalledWith(5);
  })
})

describe('testa exercicio 6', () => {
  it('exec 6', async () => {
    funBeg = jest.fn()
    funBeg.mockReset();
    funBeg.mockResolvedValueOnce('veio um dog feio')
    funBeg.mockRejectedValueOnce('morreu no caminho pro seu PC')

      await expect(funBeg()).resolves.toBe('veio um dog feio')
      await expect(funBeg()).rejects.toBe('morreu no caminho pro seu PC')
  })
})

describe('testa Bonus', () => {
  it('fetch', async () => {
    const obj = {
      'id': '7h3oGtrOfxc',
      'joke': 'Whiteboards ... are remarkable.',
      'status': 200
    }
    fetchJoke = jest.fn().mockResolvedValueOnce(obj)
    
    await expect(fetchJoke()).resolves.toEqual(obj)
    expect.assertions(1);
  });
})
