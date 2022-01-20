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

  public static MODEL_DATA: any[] = [
    {
      model: 'Escherichia coli K-12 (MG1655)',
      try: 'http://bigg.ucsd.edu/static/models/e_coli_core.xml',
      link: 'http://bigg.ucsd.edu/models/e_coli_core'
    },
    {
      model: 'Plasmodium falciparum 3D7',
      try: 'http://bigg.ucsd.edu/static/models/iAM_Pf480.xml',
      link: 'http://bigg.ucsd.edu/models/iAM_Pf480'
    },
    {
      model: 'Saccharamyces cerevisiae (iFF708)',
      try: 'https://www.ebi.ac.uk/biomodels/model/download/MODEL1507180012.2?filename=MODEL1507180012_url.xml',
      link: 'https://www.ebi.ac.uk/biomodels/MODEL1507180012#Overview'
    },
    {
      model: 'Staphylococcus aureus (iSB619)',
      try: 'https://www.ebi.ac.uk/biomodels/model/download/MODEL1507180070.2?filename=MODEL1507180070_url.xml',
      link: 'https://www.ebi.ac.uk/biomodels/MODEL1507180070#Overview'
    },
  ];
  public static MODEL_COLUMNS: any[] = ['model', 'try', 'link'];
  static ERROR_READING_FILE: string = "Error reading file:";
  static ERROR_FVA_RANGE: string = 'Fraction of optimum must be between 0.0 and 1.0';
  static ERROR_NO_REACTION_OBJECTIVE: string = 'No valid objective available. Does the model have reactions?'

}
