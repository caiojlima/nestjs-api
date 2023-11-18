export function Getter<T extends new (...args: any[]) => any>(Target: T) {
    return class extends Target {
      constructor(...args: any[]) {
        super(...args);

        for(let i = 0; i < args.length; i++) {
            const key = `${Object.keys(this)[i]}`;
            const methodName = 'get' + key[1].toUpperCase() + key.slice(2);
            console.log(methodName);
            this[methodName] =  () => this[key];
        }
      }
    }
  }