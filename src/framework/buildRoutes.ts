import { ModuleRegistry } from './moduleRegistry';
import { homeFeature } from '../features/home';

export function buildRoutes() {
  const registry = new ModuleRegistry();
  registry.register(homeFeature);
  return registry.list();
}
