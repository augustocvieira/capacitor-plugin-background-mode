import { WebPlugin } from '@capacitor/core';
import { BackgroundModePlugin } from './definitions';

export class BackgroundModeWeb extends WebPlugin implements BackgroundModePlugin {
  constructor() {
    super({
      name: 'BackgroundMode',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const BackgroundMode = new BackgroundModeWeb();

export { BackgroundMode };
