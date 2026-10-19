import { ILogger, IRemoteComponentContext, Theme } from '@directum/sungero-remote-component-types';

/** Заглушка контекста для отладки в режиме standalone. */
const context: IRemoteComponentContext = {
  userId: 1,
  currentCulture: 'ru',
  tenant: null,
  theme: Theme.Default,
  clientId: '',
  logger: {
    error(errorOrmessageTemplate, messageTemplateOrArgs, ...args) {
      console.error(errorOrmessageTemplate, messageTemplateOrArgs, args);
    },
    warning(messageTemplate, ...args) {
      console.warn(messageTemplate, args);
    },
    info(messageTemplate, ...args) {
      console.log(messageTemplate, args);
    },
    debug(messageTemplate, ...args) {
      console.log(messageTemplate, args);
    }
  } as unknown as ILogger,
  moduleLicenses: [{ name: 'module1', version: '1.0' }]
};

export default context;
