import {
  ControlCleanupCallback,
  ILoaderArgs,
  IRemoteComponentCardApi
} from '@directum/sungero-remote-component-types';
import { createRoot } from 'react-dom/client';

import ChatPage from '../controls/chat-page/chat-page';

export default (args: ILoaderArgs): Promise<ControlCleanupCallback> => {
  const root = createRoot(args.container);
  root.render(
    <ChatPage initialContext={args.initialContext} api={args.api as IRemoteComponentCardApi} />
  );
  return Promise.resolve(() => root.unmount());
};
