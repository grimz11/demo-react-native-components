export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

export * from './themes';
export * from './components';
