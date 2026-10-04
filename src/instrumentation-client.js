// Polyfills for older iOS Safari (15.x). Runs before the app hydrates.
if (typeof Object.hasOwn !== "function") {
  Object.defineProperty(Object, "hasOwn", {
    value: (obj, key) => Object.prototype.hasOwnProperty.call(obj, key),
    configurable: true,
    writable: true,
  });
}

function at(index) {
  const n = Math.trunc(index) || 0;
  const i = n < 0 ? this.length + n : n;
  return i < 0 || i >= this.length ? undefined : this[i];
}

[Array, String].forEach((ctor) => {
  if (!ctor.prototype.at) {
    Object.defineProperty(ctor.prototype, "at", { value: at, configurable: true, writable: true });
  }
});
