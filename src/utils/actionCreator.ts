export interface IAction<T = unknown> {
    type: string;
    payload: T;
  }
  
 export function actionCreator<T = unknown> (actionName: string) {
    if (!actionName || !actionName.length || !actionName.trim().length) {
      throw new Error('Action Name should not be empty');
    }
  
    return function action (payload?: T): IAction<T | undefined> {
      return {
        type: actionName,
        payload,
      };
    };
  }