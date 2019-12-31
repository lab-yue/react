declare var jasmine: any;
declare var __DEV__: boolean;

declare function afterEach(fn as any): any;
declare function beforeEach(fn as any): any;
declare function describe(name: string, fn as any): void;
declare var it: {
  (name: string, fn as any): void;
  only: (name: string, fn as any) => void;
}
declare function expect(val as any): Expect;
declare var jest: Jest;
declare function pit(name: string, fn as any): void;
declare function spyOnDev(obj: any, key: string): any;
declare function spyOnDevAndProd(obj: any, key: string): any;
declare function spyOnProd(obj: any, key: string): any;
declare function xdescribe(name: string, fn as any): void;
declare function xit(name: string, fn as any): void;

interface Expect {
  not: Expect
  toThrow(message?: string): void
  toThrowError(message?: string): void
  toErrorDev(message?: string | Array<string>, options? as any): void
  toWarnDev(message?: string | Array<string>, options? as any): void
  toBe(value as any): void
  toEqual(value as any): void
  toBeFalsy(): void
  toBeTruthy(): void
  toBeNull(): void
  toBeUndefined(): void
  toBeDefined(): void
  toMatch(regexp: RegExp): void
  toContain(string: string): void
  toBeCloseTo(number: number, delta: number): void
  toBeGreaterThan(number: number): void
  toBeLessThan(number: number): void
  toBeCalled(): void
  toBeCalledWith(...arguments): void
  lastCalledWith(...arguments): void
}

interface Jest {
  autoMockOff(): void
  autoMockOn(): void
  clearAllTimers(): void
  dontMock(moduleName: string): void
  genMockFromModule(moduleObj: object): object
  genMockFunction(): MockFunction
  genMockFn(): MockFunction
  mock(moduleName: string): void
  runAllTicks(): void
  runAllTimers(): void
  runOnlyPendingTimers(): void
  setMock(moduleName: string, moduleExports: object): void
}

interface MockFunction {
  (...arguments): any
  mock: {
    calls: Array<Array<any>>
    instances: Array<Object>
  }
  mockClear(): void
  mockImplementation(fn: Function): MockFunction
  mockImpl(fn: Function): MockFunction
  mockReturnThis(): MockFunction
  mockReturnValue(value as any): MockFunction
  mockReturnValueOnce(value as any): MockFunction
}

// Allow importing jasmine-check
declare module 'jasmine-check' {
  export function install(global? as any): void;
}
declare var check: any;
declare var gen: any;
