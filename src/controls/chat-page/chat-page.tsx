import { useState } from 'react';

import { IRemoteComponentApi, IRemoteComponentContext } from '@directum/sungero-remote-component-types';

import { getEntityInfo, isCoverApi, IEntityInfo } from '../../utils/entity';

import styles from './chat-page.module.css';

interface IChatPageProps {
  initialContext: IRemoteComponentContext;
  api: IRemoteComponentApi;
}

/** Простая HTML страница с произвольным текстом. */
export default function ChatPage({ initialContext: _initialContext, api }: IChatPageProps) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [entity, setEntity] = useState<IEntityInfo | undefined>(undefined);
  const [coverActions, setCoverActions] = useState(0);

  const handleOpen = () => {
    setEntity(getEntityInfo(api));

    if (isCoverApi(api)) {
      setCoverActions(api.getActionsMetadata().length);
    }

    setDialogOpen(true);
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Добро пожаловать!</h1>
      </header>
      <main className={styles.content}>
        <p className={styles.text}>
          Это простая HTML-страница, отображаемая сторонним компонентом Directum RX.
        </p>
        <p className={styles.text}>
          Вы можете разместить здесь любой текст, картинки, таблицы или интерактивные элементы.
        </p>
        <button type="button" className={styles.button} onClick={handleOpen}>
          Открыть диалог
        </button>
        {dialogOpen && (
          <div className={styles.overlay} onClick={() => setDialogOpen(false)}>
            <div className={styles.dialog} onClick={(event) => event.stopPropagation()}>
              <p className={styles.dialogText}>Hello world</p>
              {entity ? (
                <div className={styles.entityInfo}>
                  <p className={styles.dialogText}>Id карточки: {entity.id}</p>
                  <p className={styles.dialogText}>GUID типа: {entity.typeId}</p>
                </div>
              ) : (
                <div className={styles.entityInfo}>
                  <p className={styles.dialogText}>Cover — сущности нет</p>
                  <p className={styles.dialogText}>Доступно действий обложки: {coverActions}</p>
                </div>
              )}
              <button type="button" className={styles.button} onClick={() => setDialogOpen(false)}>
                Закрыть
              </button>
            </div>
          </div>
        )}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Пример блока</h2>
          <p className={styles.cardText}>
            Замените содержимое этого компонента на необходимый вам контент.
          </p>
        </div>
      </main>
      <footer className={styles.footer}>
        <span>Сторонний компонент для Directum RX</span>
      </footer>
    </div>
  );
}
