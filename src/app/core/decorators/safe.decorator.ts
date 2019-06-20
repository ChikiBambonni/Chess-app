import { SafeDecoratorLogLevel } from '@core/enums/safe-decorator-log-level.enum';
import { SafeDecoratorParams } from '@core/interfaces/safe-decorator-params.interfaces';

export function Safe<T>(params: SafeDecoratorParams<T> = {}): Function {
  return function(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>): TypedPropertyDescriptor<any> {
    const originalMethod = descriptor.value;
    const logLevel = params.logLevel || SafeDecoratorLogLevel.Default;

    descriptor.value = function SafeWrapper() {
      try {
        return originalMethod.apply(this, arguments);
      } catch (error) {
        if (logLevel === SafeDecoratorLogLevel.Console) { console.error(error); }

        if (logLevel === SafeDecoratorLogLevel.Sentry) {
          if (!this.errorHandler) {
            throw new Error(`Class with 'Safe' decorator and logLevel
              should have 'errorHandler' class property with 'ErrorHandler' class.`);
          } else {
            this.errorHandler.handleError(error);
          }
        }

        return params.returnValue || false;
      }
    };

    return descriptor;
  };
}
