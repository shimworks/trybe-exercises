const func = require('./exercicio');
jest.mock('./exercicio')

describe('testa rng', () => {
  it('rng', () => {
    func.rng = jest.fn()
      .mockReturnValue(10)

      expect(func.rng()).toBe(10)
      expect(func.rng).toHaveBeenCalled();
      expect(func.rng).toHaveBeenCalledTimes(1)
  })
  it('rng2', () => {
    func.rng.mockReset();
    func.rng.mockImplementation((a, b) => a / b)

      expect(func.rng(10, 2)).toBe(5);
      expect(func.rng).toHaveBeenCalled();
      expect(func.rng).toHaveBeenCalledTimes(1);
      expect(func.rng).toHaveBeenCalledWith(10, 2);
  })
  it('rng3', () => {
    func.rng.mockReset();
    func.rng.mockImplementation((a, b, c) => a * b * c)
      expect(func.rng(2, 5, 2)).toBe(20);
      expect(func.rng).toHaveBeenCalled();
      expect(func.rng).toHaveBeenCalledTimes(1);
      expect(func.rng).toHaveBeenCalledWith(2, 5, 2);
      
    func.rng.mockReset();
    func.rng.mockImplementation((a) => a * 2);
      expect(func.rng(5)).toBe(10);
      expect(func.rng).toHaveBeenCalled();
      expect(func.rng).toHaveBeenCalledTimes(1);
      expect(func.rng).toHaveBeenCalledWith(5);
  })
})

describe('testa exercicio 6', () => {
  it('exec 6', async () => {
    func.funBeg.mockReset();
    func.funBeg.mockResolvedValueOnce('veio um dog feio')
    func.funBeg.mockRejectedValueOnce('morreu na rua')

      await expect(func.funBeg()).resolves.toBe('veio um dog feio')
      await expect(func.funBeg()).rejects.toBe('morreu na rua')
  })
})