import { QuantilePipe } from './quantile.pipe';

describe('QuantilePipe', () => {
  it('create an instance', () => {
    const pipe = new QuantilePipe();
    expect(pipe).toBeTruthy();
  });
});
