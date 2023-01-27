export interface WeatherData {
  queryCost: number;
  latitude: number;
  longitude: number;
  resolvedAddress: string;
  address: string;
  timezone: string;
  tzoffset: number;
  days: Array<{
    datetime: string;
    precip: number;
    precipprob: number;
    precipcover: number;
    preciptype: Array<string>;
    cloudcover: number;
    sunrise: string;
    sunset: string;
    moonphase: number;
    moonrise: string;
    moonset: string;
    conditions: string;
    icon: string;
    normal: {
      precip: Array<number>;
      cloudcover: Array<number>;
    };
  }>;
}