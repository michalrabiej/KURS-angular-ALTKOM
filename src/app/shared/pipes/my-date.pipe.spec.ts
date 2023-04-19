import { MyDatePipe } from './my-date.pipe';

describe('MyDatePipe', () => {
  let pipe: MyDatePipe;

  beforeEach(() => {
    pipe = new MyDatePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return the same value for malformed input', () => {
    const input = 'ciasteczko';
    const output = pipe.transform(input);
    expect(output).toEqual('ciasteczko');
  });

  it('should return a value with month in polish', () => {
    const input = new Date('2019-10-05').toString();
    const output = pipe.transform(input);
    expect(output).toMatch('październik');
  });

  it('should return a value with correct year in 4 digits format', () => {
    const input = new Date('2019-10-05').toString();
    const output = pipe.transform(input);
    expect(output).toMatch('2019');
  });
});
