export type FeatureModule = {
  route: string;
  title: string;
};

export class ModuleRegistry {
  private modules: FeatureModule[] = [];

  register(feature: FeatureModule) {
    if (this.modules.find((m) => m.route === feature.route)) {
      throw new Error(`duplicate route: ${feature.route}`);
    }
    this.modules.push(feature);
  }

  list(): FeatureModule[] {
    return [...this.modules].sort((a, b) => a.route.localeCompare(b.route));
  }
}
