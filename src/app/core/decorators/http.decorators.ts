import 'reflect-metadata';

export function Api(url: string) {
  return function (constructor: any) {
    Reflect.defineMetadata('baseApiUrl', url,  constructor.prototype);

    return constructor;
  };
}

export function Get(url: string) {
  return function (target, key, descriptor) {
    Reflect.defineMetadata('apiUrl', url, target, key);
    Reflect.defineMetadata('apiUrl', url, target, key);
    Reflect.defineMetadata('method', 'GET', target, key);

    if (descriptor === undefined) {
      descriptor = Object.getOwnPropertyDescriptor(target, key);
    }

    const originalMethod = descriptor.value;

    descriptor.value = function () {
      const args = [];
      for (let _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      return (target['fetch'] || originalMethod).call(this, {
        args,
        key
      });
    };

    return descriptor;
  };
}
