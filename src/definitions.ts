declare module "@capacitor/core" {
  interface PluginRegistry {
    BackgroundMode?: BackgroundModePlugin;
  }
}

export interface BackgroundModePlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
