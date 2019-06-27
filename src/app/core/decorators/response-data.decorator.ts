import { SimpleChanges } from '@angular/core';

import { DataComponent } from '@core/utils/data-component.class';
import { isFunction } from '@core/utils/core.utils';

export function ResponseData<Type>(changesKey: string, targetPropertyKeyOrMethodName: string ) {
  return function(targetClass, functionName: string, descriptor) {
    const source = descriptor.value;

    descriptor.value = function (changes: SimpleChanges) {

      if (!(targetClass instanceof DataComponent)) {
        throw new Error('Class with decorator ResponseData should extend DataComponent class.');
      }

      if (changesKey in changes && changes[changesKey].currentValue) {
        const error = this.getChangesError(changes, changesKey);

        if (error) {
          this.setErrorMode(error);
          return;
        }

        if (isFunction(this, targetPropertyKeyOrMethodName)) {
          this[targetPropertyKeyOrMethodName](this.getChangesValue(changes, changesKey));
        } else {
          this[targetPropertyKeyOrMethodName] = this.getChangesValue(changes, changesKey);
        }
      }

      return source.call(this, changes);
    };

    return descriptor;
  };
}
