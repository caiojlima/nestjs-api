export function Setter<T extends new (...args: any[]) => any>(Target: T) {
    return class extends Target {
      constructor(...args: any[]) {
        super(...args);

        for(let i = 0; i < args.length; i++) {
            const key = `${Object.keys(this)[i]}`;
            const methodName = 'set' + key[0].toUpperCase() + key.slice(1);
            this[methodName] =  (newValue: any) => this[key] = newValue;
        }
      }
    }
  }