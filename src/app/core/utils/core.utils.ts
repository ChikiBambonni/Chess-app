export const pluck = (key: string) => {
  return (object: object) => {
    return object[key];
  };
};

export const pluckArray = (arr: Array<object>, key: string) => {
  return arr.map(pluck(key));
};

export const isEmpty = (arr: Array<any>) => {
  return arr.length === 0;
};

export const isIncludes = (arr: Array<string | number | boolean>, e: string | number | boolean) => {
  return arr.includes(e);
};

export const getFirst = (arr: Array<any>) => {
  if (arr[0] !== undefined) {
    return arr[0];
  }
  return arr;
};

export const appendToObj = (obj: object, prop: string, value: any) => {
  if (!obj.hasOwnProperty(prop)) {
    obj[prop] = value;
  }
  return obj;
};

export const isEmptyObj = (obj: Object): boolean => {
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false;
    }
  }

  return true;
};

export const isArrayNullable = (array: any[]): boolean => {
  return Array.isArray(array) && array.length === 1 && array[0] === null;
};

export const clean = (obj: object): void => {
  for (const propName in obj) {
    if (obj[propName] === null || obj[propName] === undefined) {
      delete obj[propName];
    } else if (isArrayNullable(obj[propName])) {
      delete obj[propName];
    }
  }
};

export const serializeObject = (obj?: object): string => {
  let str = '';

  if (obj) {
    Object.keys(obj)
      .forEach((key: string) => {
        if (str !== '') {
          str += '&';
        }

        str += `${key}=${encodeURIComponent(obj[key])}`;
      });
  }

  return str;
};
