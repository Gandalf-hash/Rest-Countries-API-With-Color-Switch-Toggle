export interface Country {
  name: string;
  topLevelDomain?: string[];
  alpha2Code?: string;
  alpha3Code?: string;
  callingCodes?: string[];
  capital?: string;
  altSpellings?: string[];
  subregion?: string;
  region?: string;
  population?: number;
  latlng?: [number, number];
  demonym?: string;
  area?: number;
  timezones?: string[];
  borders?: string[];
  independent?: boolean;
}