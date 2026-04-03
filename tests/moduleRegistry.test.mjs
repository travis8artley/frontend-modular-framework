import test from 'node:test';
import assert from 'node:assert/strict';

class ModuleRegistry {
  constructor() {
    this.modules = [];
  }

  register(feature) {
    if (this.modules.find((m) => m.route === feature.route)) {
      throw new Error(`duplicate route: ${feature.route}`);
    }
    this.modules.push(feature);
  }

  list() {
    return [...this.modules].sort((a, b) => a.route.localeCompare(b.route));
  }
}

test('module registry sorts routes', () => {
  const registry = new ModuleRegistry();
  registry.register({ route: '/z', title: 'Z' });
  registry.register({ route: '/a', title: 'A' });
  assert.deepEqual(registry.list().map((x) => x.route), ['/a', '/z']);
});
