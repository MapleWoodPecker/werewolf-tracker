export class MockWeather{

  public static getData(): string{
    return MockWeather.data;
  }

  public static data: string = `
        {
        "queryCost": 17,
        "latitude": 51.4934,
        "longitude": 0.0098,
        "resolvedAddress": "51.4934,0.0098",
        "address": "51.4934,0.0098",
        "timezone": "Europe/London",
        "tzoffset": 0,
        "days": [
          {
            "datetime": "2023-01-26",
            "precip": 0.4,
            "precipprob": 100,
            "precipcover": 16.67,
            "preciptype": [
              "rain"
            ],
            "cloudcover": 82.9,
            "sunrise": "07:47:18",
            "sunset": "16:38:14",
            "moonphase": 0.14,
            "moonrise": "10:09:36",
            "moonset": "23:01:36",
            "conditions": "Rain, Partially cloudy",
            "icon": "rain",
            "normal": {
              "precip": [
                0,
                1.1,
                7.1
              ],
              "cloudcover": [
                6.1,
                47.8,
                79.6
              ]
            }
          },
          {
            "datetime": "2023-01-27",
            "precip": 0,
            "precipprob": 0,
            "precipcover": 0,
            "preciptype": null,
            "cloudcover": 56.2,
            "sunrise": "07:45:58",
            "sunset": "16:40:00",
            "moonphase": 0.19,
            "moonrise": "10:22:39",
            "conditions": "Partially cloudy",
            "icon": "partly-cloudy-day",
            "normal": {
              "precip": [
                0,
                1.1,
                10.9
              ],
              "cloudcover": [
                0.4,
                42.8,
                85.1
              ]
            }
          },
          {
            "datetime": "2023-01-28",
            "precip": 0,
            "precipprob": 0,
            "precipcover": 0,
            "preciptype": null,
            "cloudcover": 70.6,
            "sunrise": "07:44:36",
            "sunset": "16:41:47",
            "moonphase": 0.24,
            "moonrise": "10:36:47",
            "moonset": "00:20:55",
            "conditions": "Partially cloudy",
            "icon": "partly-cloudy-day",
            "normal": {
              "precip": [
                0,
                0.5,
                4
              ],
              "cloudcover": [
                5.4,
                40.3,
                85.9
              ]
            }
          },
          {
            "datetime": "2023-01-29",
            "precip": 0.1,
            "precipprob": 0,
            "precipcover": 4.17,
            "preciptype": [
              "rain"
            ],
            "cloudcover": 88.9,
            "sunrise": "07:43:12",
            "sunset": "16:43:34",
            "moonphase": 0.29,
            "moonrise": "10:53:23",
            "moonset": "01:39:37",
            "conditions": "Partially cloudy",
            "icon": "partly-cloudy-day",
            "normal": {
              "precip": [
                0,
                1.3,
                11
              ],
              "cloudcover": [
                9.1,
                52.3,
                83.5
              ]
            }
          },
          {
            "datetime": "2023-01-30",
            "precip": 0.1,
            "precipprob": 4.8,
            "precipcover": 4.17,
            "preciptype": [
              "rain"
            ],
            "cloudcover": 79.9,
            "sunrise": "07:41:45",
            "sunset": "16:45:22",
            "moonphase": 0.34,
            "moonrise": "11:14:13",
            "moonset": "02:56:10",
            "conditions": "Partially cloudy",
            "icon": "partly-cloudy-day",
            "normal": {
              "precip": [
                0,
                1.3,
                9
              ],
              "cloudcover": [
                8,
                50.6,
                88.5
              ]
            }
          },
          {
            "datetime": "2023-01-31",
            "precip": 0.2,
            "precipprob": 14.3,
            "precipcover": 8.33,
            "preciptype": [
              "rain"
            ],
            "cloudcover": 81.4,
            "sunrise": "07:40:16",
            "sunset": "16:47:10",
            "moonphase": 0.39,
            "moonrise": "11:41:25",
            "moonset": "04:10:03",
            "conditions": "Partially cloudy",
            "icon": "partly-cloudy-day",
            "normal": {
              "precip": [
                0,
                0.7,
                4.6
              ],
              "cloudcover": [
                1.4,
                47,
                84.8
              ]
            }
          },
          {
            "datetime": "2023-02-01",
            "precip": 0.1,
            "precipprob": 14.3,
            "precipcover": 4.17,
            "preciptype": [
              "rain"
            ],
            "cloudcover": 80.8,
            "sunrise": "07:38:46",
            "sunset": "16:48:58",
            "moonphase": 0.42,
            "moonrise": "12:17:21",
            "moonset": "05:18:24",
            "conditions": "Partially cloudy",
            "icon": "partly-cloudy-day",
            "normal": {
              "precip": [
                0,
                2.4,
                10.1
              ],
              "cloudcover": [
                5.8,
                52.7,
                86.9
              ]
            }
          },
          {
            "datetime": "2023-02-02",
            "precip": 0.2,
            "precipprob": 4.8,
            "precipcover": 8.33,
            "preciptype": [
              "rain"
            ],
            "cloudcover": 74.6,
            "sunrise": "07:37:13",
            "sunset": "16:50:47",
            "moonphase": 0.45,
            "moonrise": "13:05:22",
            "moonset": "06:16:17",
            "conditions": "Partially cloudy",
            "icon": "partly-cloudy-day",
            "normal": {
              "precip": [
                0,
                1.7,
                11.9
              ],
              "cloudcover": [
                4.7,
                48.5,
                86.8
              ]
            }
          },
          {
            "datetime": "2023-02-03",
            "precip": 0,
            "precipprob": 9.5,
            "precipcover": 0,
            "preciptype": null,
            "cloudcover": 7.6,
            "sunrise": "07:35:38",
            "sunset": "16:52:37",
            "moonphase": 0.48,
            "moonrise": "14:04:07",
            "moonset": "07:02:44",
            "conditions": "Clear",
            "icon": "clear-day",
            "normal": {
              "precip": [
                0,
                0.7,
                6
              ],
              "cloudcover": [
                0,
                45.5,
                85.8
              ]
            }
          },
          {
            "datetime": "2023-02-04",
            "precip": 0.1,
            "precipprob": 9.5,
            "precipcover": 4.17,
            "preciptype": [
              "rain"
            ],
            "cloudcover": 25.3,
            "sunrise": "07:34:02",
            "sunset": "16:54:26",
            "moonphase": 0.49,
            "moonrise": "15:11:26",
            "moonset": "07:37:39",
            "conditions": "Partially cloudy",
            "icon": "partly-cloudy-day",
            "normal": {
              "precip": [
                0,
                2,
                15
              ],
              "cloudcover": [
                11.9,
                51.3,
                83.7
              ]
            }
          },
          {
            "datetime": "2023-02-05",
            "precip": 0,
            "precipprob": 19,
            "precipcover": 0,
            "preciptype": null,
            "cloudcover": 54.6,
            "sunrise": "07:32:23",
            "sunset": "16:56:16",
            "moonphase": 0.5,
            "moonrise": "16:22:22",
            "moonset": "08:02:57",
            "conditions": "Partially cloudy",
            "icon": "partly-cloudy-day",
            "normal": {
              "precip": [
                0,
                1.3,
                6.8
              ],
              "cloudcover": [
                13.3,
                56.3,
                83.5
              ]
            }
          },
          {
            "datetime": "2023-02-06",
            "precip": 0,
            "precipprob": 19,
            "precipcover": 0,
            "preciptype": null,
            "cloudcover": 27.2,
            "sunrise": "07:30:43",
            "sunset": "16:58:06",
            "moonphase": 0.5,
            "moonrise": "17:35:16",
            "moonset": "08:22:04",
            "conditions": "Partially cloudy",
            "icon": "partly-cloudy-day",
            "normal": {
              "precip": [
                0,
                1.5,
                8.1
              ],
              "cloudcover": [
                7.8,
                52.9,
                90
              ]
            }
          },
          {
            "datetime": "2023-02-07",
            "precip": 0.1,
            "precipprob": 19,
            "precipcover": 4.17,
            "preciptype": [
              "rain",
              "snow"
            ],
            "cloudcover": 29.4,
            "sunrise": "07:29:01",
            "sunset": "16:59:56",
            "moonphase": 0.52,
            "moonrise": "18:46:53",
            "moonset": "08:37:15",
            "conditions": "Partially cloudy",
            "icon": "partly-cloudy-day",
            "normal": {
              "precip": [
                0,
                1.6,
                7.4
              ],
              "cloudcover": [
                0.3,
                38.9,
                86.6
              ]
            }
          },
          {
            "datetime": "2023-02-08",
            "precip": 0.4,
            "precipprob": 23.8,
            "precipcover": 8.33,
            "preciptype": [
              "rain",
              "snow"
            ],
            "cloudcover": 45.6,
            "sunrise": "07:27:17",
            "sunset": "17:01:46",
            "moonphase": 0.53,
            "moonrise": "19:58:28",
            "moonset": "08:50:02",
            "conditions": "Partially cloudy",
            "icon": "partly-cloudy-day",
            "normal": {
              "precip": [
                0,
                2.7,
                16.8
              ],
              "cloudcover": [
                0.9,
                44.6,
                86
              ]
            }
          },
          {
            "datetime": "2023-02-09",
            "precip": 0.2,
            "precipprob": 19,
            "precipcover": 8.33,
            "preciptype": [
              "rain",
              "snow"
            ],
            "cloudcover": 83.2,
            "sunrise": "07:25:32",
            "sunset": "17:03:36",
            "moonphase": 0.56,
            "moonrise": "21:10:06",
            "moonset": "09:01:33",
            "conditions": "Partially cloudy",
            "icon": "partly-cloudy-day",
            "normal": {
              "precip": [
                0,
                1.5,
                13.9
              ],
              "cloudcover": [
                0,
                43.4,
                87.4
              ]
            }
          },
          {
            "datetime": "2023-02-10",
            "precip": 2.5,
            "precipprob": 0,
            "precipcover": 0,
            "preciptype": null,
            "cloudcover": 52,
            "sunrise": "07:23:45",
            "sunset": "17:05:26",
            "moonphase": 0.6,
            "moonrise": "22:22:39",
            "moonset": "09:12:47",
            "conditions": "Partially cloudy",
            "icon": "partly-cloudy-day",
            "normal": {
              "precip": [
                0,
                2.5,
                13.5
              ],
              "cloudcover": [
                0.6,
                52,
                90.5
              ]
            }
          },
          {
            "datetime": "2023-02-11",
            "precip": 1.5,
            "precipprob": 0,
            "precipcover": 0,
            "preciptype": null,
            "cloudcover": 47.8,
            "sunrise": "07:21:56",
            "sunset": "17:07:16",
            "moonphase": 0.64,
            "moonrise": "23:38:45",
            "moonset": "09:24:44",
            "conditions": "Partially cloudy",
            "icon": "partly-cloudy-day",
            "normal": {
              "precip": [
                0,
                1.5,
                11.9
              ],
              "cloudcover": [
                4.3,
                47.8,
                91.7
              ]
            }
          },
          {
            "datetime": "2023-02-12",
            "precip": 2.6,
            "precipprob": 0,
            "precipcover": 0,
            "preciptype": null,
            "cloudcover": 51,
            "sunrise": "07:20:06",
            "sunset": "17:09:06",
            "moonphase": 0.69,
            "moonset": "09:38:35",
            "conditions": "Partially cloudy",
            "icon": "partly-cloudy-day",
            "normal": {
              "precip": [
                0,
                2.6,
                14
              ],
              "cloudcover": [
                0.9,
                51,
                88.3
              ]
            }
          },
          {
            "datetime": "2023-02-13",
            "precip": 0.4,
            "precipprob": 0,
            "precipcover": 0,
            "preciptype": null,
            "cloudcover": 44.5,
            "sunrise": "07:18:15",
            "sunset": "17:10:56",
            "moonphase": 0.75,
            "moonrise": "00:57:48",
            "moonset": "09:56:00",
            "conditions": "Partially cloudy",
            "icon": "partly-cloudy-day",
            "normal": {
              "precip": [
                0,
                0.4,
                3
              ],
              "cloudcover": [
                5.3,
                44.5,
                88.6
              ]
            }
          },
          {
            "datetime": "2023-02-14",
            "precip": 2.1,
            "precipprob": 0,
            "precipcover": 0,
            "preciptype": null,
            "cloudcover": 42,
            "sunrise": "07:16:22",
            "sunset": "17:12:46",
            "moonphase": 0.8,
            "moonrise": "02:20:28",
            "moonset": "10:19:51",
            "conditions": "Partially cloudy",
            "icon": "partly-cloudy-day",
            "normal": {
              "precip": [
                0,
                2.1,
                17.5
              ],
              "cloudcover": [
                0,
                42,
                79.6
              ]
            }
          },
          {
            "datetime": "2023-02-15",
            "precip": 0.6,
            "precipprob": 0,
            "precipcover": 0,
            "preciptype": null,
            "cloudcover": 39.9,
            "sunrise": "07:14:27",
            "sunset": "17:14:35",
            "moonphase": 0.85,
            "moonrise": "03:44:19",
            "moonset": "10:55:21",
            "conditions": "Partially cloudy",
            "icon": "partly-cloudy-day",
            "normal": {
              "precip": [
                0,
                0.6,
                5.2
              ],
              "cloudcover": [
                0,
                39.9,
                83.5
              ]
            }
          },
          {
            "datetime": "2023-02-16",
            "precip": 1.2,
            "precipprob": 0,
            "precipcover": 0,
            "preciptype": null,
            "cloudcover": 34.6,
            "sunrise": "07:12:32",
            "sunset": "17:16:25",
            "moonphase": 0.91,
            "moonrise": "05:01:10",
            "moonset": "11:47:45",
            "conditions": "Partially cloudy",
            "icon": "partly-cloudy-day",
            "normal": {
              "precip": [
                0,
                1.2,
                15
              ],
              "cloudcover": [
                0.3,
                34.6,
                87.5
              ]
            }
          },
          {
            "datetime": "2023-02-17",
            "precip": 0.6,
            "precipprob": 0,
            "precipcover": 0,
            "preciptype": null,
            "cloudcover": 41.4,
            "sunrise": "07:10:35",
            "sunset": "17:18:14",
            "moonphase": 0.95,
            "moonrise": "06:03:40",
            "moonset": "13:00:02",
            "conditions": "Partially cloudy",
            "icon": "partly-cloudy-day",
            "normal": {
              "precip": [
                0,
                0.6,
                7.9
              ],
              "cloudcover": [
                0,
                41.4,
                85.5
              ]
            }
          },
          {
            "datetime": "2023-02-18",
            "precip": 1,
            "precipprob": 0,
            "precipcover": 0,
            "preciptype": null,
            "cloudcover": 43.1,
            "sunrise": "07:08:37",
            "sunset": "17:20:03",
            "moonphase": 0.98,
            "moonrise": "06:48:47",
            "moonset": "14:28:08",
            "conditions": "Partially cloudy",
            "icon": "partly-cloudy-day",
            "normal": {
              "precip": [
                0,
                1,
                6
              ],
              "cloudcover": [
                0.4,
                43.1,
                86.6
              ]
            }
          },
          {
            "datetime": "2023-02-19",
            "precip": 0.9,
            "precipprob": 0,
            "precipcover": 0,
            "preciptype": null,
            "cloudcover": 46.8,
            "sunrise": "07:06:38",
            "sunset": "17:21:52",
            "moonphase": 1,
            "moonrise": "07:20:17",
            "moonset": "16:03:15",
            "conditions": "Partially cloudy",
            "icon": "partly-cloudy-day",
            "normal": {
              "precip": [
                0,
                0.9,
                7.1
              ],
              "cloudcover": [
                1.5,
                46.8,
                89
              ]
            }
          },
          {
            "datetime": "2023-02-20",
            "precip": 1.1,
            "precipprob": 0,
            "precipcover": 0,
            "preciptype": null,
            "cloudcover": 45.1,
            "sunrise": "07:04:37",
            "sunset": "17:23:41",
            "moonphase": 0,
            "moonrise": "07:42:33",
            "moonset": "17:37:41",
            "conditions": "Partially cloudy",
            "icon": "partly-cloudy-day",
            "normal": {
              "precip": [
                0,
                1.1,
                9.6
              ],
              "cloudcover": [
                4.7,
                45.1,
                72.7
              ]
            }
          },
          {
            "datetime": "2023-02-21",
            "precip": 0.8,
            "precipprob": 0,
            "precipcover": 0,
            "preciptype": null,
            "cloudcover": 46.2,
            "sunrise": "07:02:36",
            "sunset": "17:25:29",
            "moonphase": 0.01,
            "moonrise": "07:59:25",
            "moonset": "19:07:52",
            "conditions": "Partially cloudy",
            "icon": "partly-cloudy-day",
            "normal": {
              "precip": [
                0,
                0.8,
                6.4
              ],
              "cloudcover": [
                1.8,
                46.2,
                79.1
              ]
            }
          },
          {
            "datetime": "2023-02-22",
            "precip": 1.5,
            "precipprob": 0,
            "precipcover": 0,
            "preciptype": null,
            "cloudcover": 53.6,
            "sunrise": "07:00:34",
            "sunset": "17:27:18",
            "moonphase": 0.03,
            "moonrise": "08:13:36",
            "moonset": "20:34:03",
            "conditions": "Partially cloudy",
            "icon": "partly-cloudy-day",
            "normal": {
              "precip": [
                0,
                1.5,
                14.6
              ],
              "cloudcover": [
                16.4,
                53.6,
                90.4
              ]
            }
          },
          {
            "datetime": "2023-02-23",
            "precip": 0.8,
            "precipprob": 0,
            "precipcover": 0,
            "preciptype": null,
            "cloudcover": 49.1,
            "sunrise": "06:58:30",
            "sunset": "17:29:06",
            "moonphase": 0.07,
            "moonrise": "08:27:00",
            "moonset": "21:58:00",
            "conditions": "Partially cloudy",
            "icon": "partly-cloudy-day",
            "normal": {
              "precip": [
                0,
                0.8,
                4.1
              ],
              "cloudcover": [
                17.9,
                49.1,
                91.2
              ]
            }
          },
          {
            "datetime": "2023-02-24",
            "precip": 0.9,
            "precipprob": 0,
            "precipcover": 0,
            "preciptype": null,
            "cloudcover": 45.4,
            "sunrise": "06:56:26",
            "sunset": "17:30:53",
            "moonphase": 0.11,
            "moonrise": "08:40:55",
            "moonset": "23:20:02",
            "conditions": "Partially cloudy",
            "icon": "partly-cloudy-day",
            "normal": {
              "precip": [
                0,
                0.9,
                7.1
              ],
              "cloudcover": [
                4.5,
                45.4,
                83.7
              ]
            }
          },
          {
            "datetime": "2023-02-25",
            "precip": 1.9,
            "precipprob": 0,
            "precipcover": 0,
            "preciptype": null,
            "cloudcover": 44.5,
            "sunrise": "06:54:20",
            "sunset": "17:32:41",
            "moonphase": 0.16,
            "moonrise": "08:56:45",
            "conditions": "Partially cloudy",
            "icon": "partly-cloudy-day",
            "normal": {
              "precip": [
                0,
                1.9,
                16
              ],
              "cloudcover": [
                0,
                44.5,
                86.9
              ]
            }
          }
        ]
      }
      `    
}