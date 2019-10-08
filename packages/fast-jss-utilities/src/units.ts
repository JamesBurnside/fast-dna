export function toPx<T>(func: (designSystem: T) => number): (designSystem: T) => string;
export function toPx(item: number): string;
export function toPx<T>(arg: any): any {
    return typeof arg === "function"
        ? (designSystem: T): string => {
              return toPx(arg(designSystem) as number);
          }
        : `${arg}px`;
}

export function toMs<T>(func: (designSystem: T) => number): (designSystem: T) => string;
export function toMs(item: number): string;
export function toMs<T>(arg: any): any {
    return typeof arg === "function"
        ? (designSystem: T): string => {
              return toMs(arg(designSystem) as number);
          }
        : `${arg}ms`;
}
