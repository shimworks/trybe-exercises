
const func = require('./exercicio');

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