import { IRemoteControlLoader } from '@directum/sungero-remote-component-types';

import * as ChatPageCardLoader from './src/loaders/chat-page-card-loader';

// Загрузчики контролов компонента.
const loaders: Record<string, IRemoteControlLoader> = {
  'chat-page-card-loader': ChatPageCardLoader
};

export default loaders;
