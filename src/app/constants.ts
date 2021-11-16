import {environment} from '../environments/environment';

export class Constants {

  public static websocketEndpoint = environment.websocketEndpoint;
  public static baseApiUrl = environment.baseApiUrl;
  public static baseApiUrlStatic = environment.baseApiUrlStatic;

  public static EXPIRY_MODELS = environment.EXPIRY_MODELS;
  public static EXPIRY_TASKS = environment.EXPIRY_TASKS;

  public static localStorageItemTasks = 'tasks';
  public static localStorageItemModels = 'models';

  public static RESPONSE_TASK_NONE = 'none';

  public static ERROR_KEY_FRACTION_OPTIMUM = 'Fraction error';
  public static ERROR_FRACTION_OPTIMUM = 'Fraction of optimum must be between 0.0 and 1.0';

  public static MIN_FRACTION_OPTIMUM = 0.0;
  public static MAX_FRACTION_OPTIMUM = 1.0;

}
