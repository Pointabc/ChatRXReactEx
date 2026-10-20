import { IRemoteControlLoader } from '@directum/sungero-remote-component-types';

import * as ChatPageCardLoader from './src/loaders/chat-page-card-loader';
import * as ChatPageCoverLoader from './src/loaders/chat-page-cover-loader';

// Загрузчики контролов компонента.
const loaders: Record<string, IRemoteControlLoader> = {
  'chat-page-card-loader': ChatPageCardLoader,
  'chat-page-cover-loader': ChatPageCoverLoader
};

export default loaders;
