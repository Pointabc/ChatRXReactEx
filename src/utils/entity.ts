import {
  IEntity,
  IRemoteComponentApi,
  IRemoteComponentCardApi,
  IRemoteComponentCoverApi
} from '@directum/sungero-remote-component-types';

/** Информация о сущности, в которой расположен сторонний контрол. */
export interface IEntityInfo {
  /** Числовой идентификатор экземпляра (карточки). */
  id: number;
  /** GUID типа сущности. */
  typeId: string;
  /** Отображаемое значение. */
  displayValue: string;
}

/** Признак того, что API относится к контексту карточки (scope 'Card'). */
export function isCardApi(api: IRemoteComponentApi): api is IRemoteComponentCardApi {
  return typeof (api as IRemoteComponentCardApi).getEntity === 'function';
}

/** Признак того, что API относится к контексту обложки (scope 'Cover'). */
export function isCoverApi(api: IRemoteComponentApi): api is IRemoteComponentCoverApi {
  return typeof (api as IRemoteComponentCoverApi).getActionsMetadata === 'function';
}

/** Возвращает информацию о сущности текущей карточки. На Cover сущности нет. */
export function getEntityInfo(api: IRemoteComponentApi): IEntityInfo | undefined {
  if (!isCardApi(api)) {
    return undefined;
  }

  const entity = api.getEntity<IEntity>();
  return {
    id: entity.Id,
    typeId: entity.Info.typeId,
    displayValue: entity.DisplayValue
  };
}

/** Возвращает GUID типа сущности. На Cover сущности нет. */
export function getEntityTypeGuid(api: IRemoteComponentApi): string | undefined {
  return getEntityInfo(api)?.typeId;
}
