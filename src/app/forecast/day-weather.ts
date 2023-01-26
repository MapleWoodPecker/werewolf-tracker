export class DayWeather {
    datetime: string;
    precip: number;
    precipprob: number;
    precipcover: number;
    preciptype?: string[];
    cloudcover: number;
    sunrise?: string;
    sunset?: string;
    moonphase: number;
    moonrise: string;
    moonset: string;
    conditions?: string;
    icon?: string;
    normal?: {
        precip: number[],
        cloudcover: number[]
    }

    constructor(data: any) {
        this.datetime = data.datetime;
        this.precip = data.precip;
        this.precipprob = data.precipprob;
        this.precipcover = data.precipcover;
        this.preciptype = data.preciptype;
        this.cloudcover = data.cloudcover;
        this.sunrise = data.sunrise;
        this.sunset = data.sunset;
        this.moonphase = data.moonphase;
        this.moonrise = data.moonrise;
        this.moonset = data.moonset;
        this.conditions = data.conditions;
        this.icon = data.icon;
        this.normal = data.normal;
    }
}