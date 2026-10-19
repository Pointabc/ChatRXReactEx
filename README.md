# Chat компонент для Directum RX

Сторонний компонент (remote component) для веб-клиента Directum RX, который отображает простую HTML-страницу с произвольным текстом. Собран по образцу репозитория [sungero-remote-component-example-react](https://github.com/DirectumCompany/sungero-remote-component-example-react) (Webpack Module Federation + React).

## Структура

```
chat/
├── component.manifest.js      # метаданные компонента и контролов
├── component.loaders.ts       # карта загрузчиков
├── webpack.config.ts          # конфигурация сборки
├── index.js                   # точки входа (наши / HostModule)
├── public-path.js             # public path для Module Federation
├── host-api-stub.ts           # заглушка API (standalone-отладка)
├── host-context-stub.ts       # заглушка контекста (standalone-отладка)
└── src/
    ├── loaders/
    │   └── chat-page-card-loader.tsx
    └── controls/
        └── chat-page/
            ├── chat-page.tsx
            └── chat-page.module.css
```

## Контрол

- **ChatPage** — простая HTML-страница с текстом (контекст: **Card**).

Реализация в `src/controls/chat-page/chat-page.tsx`. Чтобы изменить текст — отредактируйте этот компонент.

## Скрипты

| Скрипт | Назначение |
| --- | --- |
| `npm run build:release` | Релизная сборка в `dist/` для загрузки через Dev Studio |
| `npm run build:dev:standalone` | Dev-сборка standalone-режима (локальная отладка с заглушками) |
| `npm run build:dev:remote` | Dev-сборка remote-режима (в `dist/` или на сервер из `.env`) |
| `npm run start:dev:standalone` | Hot-reload локальной отладки: сборка + `serve` на `http://localhost:3001` |
| `npm run start:dev:remote` | Hot-reload: следит за исходниками, пересобирает в серверную папку |
| `npm run serve` | Хостинг собранного контрола из `dist/` на `http://localhost:3001` |
| `npm run typecheck` | Проверка типов TypeScript |

## Установка и сборка

```bash
npm install
npm run build:release
```

Релизная сборка появится в `dist/` — её загружают через Dev Studio.

## Локальная отладка (standalone)

```bash
npm run start:dev:standalone
```

Откроется `http://localhost:3001` с отображением контрола.

## Отладка с реальным хостом

1. Скопируйте [`.env.example`](.env.example) в `.env` и укажите пути.
2. Соберите и загрузите компонент через Dev Studio (`npm run build:release` → загрузить `dist/`).
3. `npm run start:dev:remote` — hot-reload со слежением за исходниками.
