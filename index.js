// Точка входа для отладки контролов в режиме standalone (отдельное приложение, без веб клиента Sungero).
//
// Запуск: npm run start:dev:standalone  →  http://localhost:3001
//   Или: npm run build:dev:standalone && npm run serve
//
// При сборке импортируется единственный контрол — это нормально только для dev-режима,
// production-бандл собирается через build:release.

import loaders from './component.loaders';
import api from './host-api-stub';
import context from './host-context-stub';

const container = document.getElementById('app');

const controlInfo = { propertyName: 'Subject' };
let unmount;

async function mountControl(loaderName) {
  unmount?.();
  const loader = loaders[loaderName].default;
  unmount = await loader({ container, initialContext: context, api, controlInfo });
}

mountControl('chat-page-card-loader');
