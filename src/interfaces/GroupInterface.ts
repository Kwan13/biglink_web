export interface GroupInterface {
  cp_midia: string;
  square: string[];
  segmentation?: string;
  keyword: string[];
}

export interface GroupFormInterface {
  cp_midia: string;
  segmentation: string;
}

export interface GroupValidationError {
  cp_midia?: string;
  square?: string;
  segmentation?: string;
  keyword?: string;
}
