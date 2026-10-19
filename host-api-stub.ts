import {
  ControlUpdateHandler,
  IEntity,
  IRemoteComponentCardApi,
  IRemoteComponentCoverApi,
  IRemoteCoverActionMetadata
} from '@directum/sungero-remote-component-types';

/** Заглушка API для отладки в режиме standalone. Реализует Card API и Cover API. */
class HostStubApi implements IRemoteComponentCardApi, IRemoteComponentCoverApi {
  // eslint-disable-next-line class-methods-use-this
  public executeAction(actionName: string): Promise<void> {
    console.log(`Action ${actionName} executed.`);
    return Promise.resolve();
  }

  // eslint-disable-next-line class-methods-use-this
  public canExecuteAction(actionName: string): boolean {
    return true;
  }

  // eslint-disable-next-line class-methods-use-this
  public getEntity<T extends IEntity>(): T {
    return {
      Id: 1,
      DisplayValue: 'Test Entity'
    } as unknown as T;
  }

  public onControlUpdate?: ControlUpdateHandler;

  public getActionsMetadata(): IRemoteCoverActionMetadata[] {
    return [];
  }

  public async getSettings(): Promise<Record<string, string>> {
    return {};
  }
}

const api: IRemoteComponentCardApi & IRemoteComponentCoverApi = new HostStubApi();
export default api;
