GreaterThan = {};

ui = [
    {
        worldSizeX: 2500,
        worldSizeY: 2500,
    }
];

testing = [
    {
        totalEaten: 0,
        treasure: 0,
        rightAnswers: 0,
        wrongAnswers: 0,
        pointsAtBronze: 0,
        pointsAtSilver: 0,
        pointsAtGold: 0,
        levelUpBoonus: 0,

    }
]

player = [
    {
        currentLevel: 0,
        currentStage: 0,
        startLevel: 0,
        endLevel: 0,
        levelLocation: 0,
        levelMax: 0,
        maxLevelLine: 155,
        currentDepth: 100,
        currentScore: 0,
        totalScore: 0,
        bronze: 600,
        silver: 900,
        gold: 1200,
        pauseEnabled: true,
        stageData: [
            {
                name: '> Positive Integers',
                locked: false,
                medal: 'none',
                score: 0,
                highestLevel: 8,
                lowestLevel: 0,
            },
            {
                name: '< Positive Integers',
                locked: false,
                medal: 'none',
                score: 0,
                highestLevel: 17,
                lowestLevel: 9,
            },
            {
                name: '< and > Positive Integer',
                locked: false,
                medal: 'none',
                score: 0,
                highestLevel: 26,
                lowestLevel: 18,
            },
            {
                name: '> Integers',
                locked: false,
                medal: 'none',
                score: 0,
                highestLevel: 35,
                lowestLevel: 27,
            },
            {
                name: '< Integers',
                locked: false,
                medal: 'none',
                score: 0,
                highestLevel: 44,
                lowestLevel: 36,
            },
            {
                name: '< and > Integer',
                locked: false,
                medal: 'none',
                score: 0,
                highestLevel: 53,
                lowestLevel: 45,
            }
        ]
    },
];

levels = [
    {
        levelName: 'Stage 1:1',
        playerValue: 5,
        equalTo: false,
        greater: [
            {
                amount: 15,
                minValue: 0,
                maxValue: 10,
                proportionAbove: 0.3,
                proportionEqual: 0,
                proportionBelow: 0.7,
            }
        ],
        lesser: [
            {
                amount: 0,
                minValue: 0,
                maxValue: 0,
                proportionAbove: 0,
                proportionEqual: 0,
                proportionBelow: 0,
            }
        ],
        treasure: [
            {
                text: '',
                value: 0,
                amount: 0,
            },
        ]
    },
    {
        levelName: 'Stage 1:2',
        playerValue: 10,
        equalTo: false,
        greater: [
            {
                amount: 15,
                minValue: 0,
                maxValue: 20,
                proportionAbove: 0.3,
                proportionEqual: 0,
                proportionBelow: 0.7,
            }
        ],
        lesser: [
            {
                amount: 0,
                minValue: 0,
                maxValue: 0,
                proportionAbove: 0,
                proportionEqual: 0,
                proportionBelow: 0,
            }
        ],
        treasure: [
            {
                text: '',
                value: 0,
                amount: 0,
            },
        ]
    },
    {
        levelName: 'Stage 1:3',
        playerValue: 10,
        equalTo: true,
        greater: [
            {
                amount: 15,
                minValue: 0,
                maxValue: 20,
                proportionAbove: 0.3,
                proportionEqual: 0.2,
                proportionBelow: 0.5,
            }
        ],
        lesser: [
            {
                amount: 0,
                minValue: 0,
                maxValue: 0,
                proportionAbove: 0,
                proportionEqual: 0,
                proportionBelow: 0,
            }
        ],
        treasure: [
            {
                text: '',
                value: 0,
                amount: 0,
            },
        ]
    },
    {
        levelName: 'Stage 1:4',
        playerValue: 10,
        equalTo: false,
        greater: [
            {
                amount: 15,
                minValue: 0,
                maxValue: 20,
                proportionAbove: 0.8,
                proportionEqual: 0.2,
                proportionBelow: 0,
            }
        ],
        lesser: [
            {
                amount: 0,
                minValue: 0,
                maxValue: 0,
                proportionAbove: 0,
                proportionEqual: 0,
                proportionBelow: 0,
            }
        ],
        treasure: [
            {
                text: '+1',
                value: 1,
                amount: 5,
            },
            {
                text: '+2',
                value: 2,
                amount: 3,
            },
            {
                text: '+3',
                value: 3,
                amount: 3,
            },
        ]
    },
    {
        levelName: 'Stage 1:5',
        playerValue: 15,
        equalTo: false,
        greater: [
            {
                amount: 15,
                minValue: 0,
                maxValue: 30,
                proportionAbove: 0.8,
                proportionEqual: 0.2,
                proportionBelow: 0,
            }
        ],
        lesser: [
            {
                amount: 0,
                minValue: 0,
                maxValue: 0,
                proportionAbove: 0,
                proportionEqual: 0,
                proportionBelow: 0,
            }
        ],
        treasure: [
            {
                text: '+1',
                value: 1,
                amount: 5,
            },
            {
                text: '+2',
                value: 2,
                amount: 3,
            },
            {
                text: '+3',
                value: 3,
                amount: 3,
            },
        ]
    },
    {
        levelName: 'Stage 1:6',
        playerValue: 15,
        equalTo: true,
        greater: [
            {
                amount: 15,
                minValue: 0,
                maxValue: 30,
                proportionAbove: 0.8,
                proportionEqual: 0.2,
                proportionBelow: 0,
            }
        ],
        lesser: [
            {
                amount: 0,
                minValue: 0,
                maxValue: 0,
                proportionAbove: 0,
                proportionEqual: 0,
                proportionBelow: 0,
            }
        ],
        treasure: [
            {
                text: '+1',
                value: 1,
                amount: 5,
            },
            {
                text: '+2',
                value: 2,
                amount: 3,
            },
            {
                text: '+3',
                value: 3,
                amount: 3,
            },
        ]
    },
    {
        levelName: 'Stage 1:7',
        playerValue: 15,
        equalTo: false,
        greater: [
            {
                amount: 15,
                minValue: 0,
                maxValue: 30,
                proportionAbove: 0.8,
                proportionEqual: 0.2,
                proportionBelow: 0,
            }
        ],
        lesser: [
            {
                amount: 0,
                minValue: 0,
                maxValue: 0,
                proportionAbove: 0,
                proportionEqual: 0,
                proportionBelow: 0,
            }
        ],
        treasure: [
            {
                text: '+1',
                value: 1,
                amount: 1,
            },
            {
                text: '+2',
                value: 2,
                amount: 2,
            },
            {
                text: '+3',
                value: 3,
                amount: 3,
            },
            {
                text: '-1',
                value: -1,
                amount: 1,
            },
            {
                text: '-2',
                value: -2,
                amount: 2,
            },
            {
                text: '-3',
                value: -3,
                amount: 3,
            },
        ]
    },
    {
        levelName: 'Stage 1:8',
        playerValue: 20,
        equalTo: false,
        greater: [
            {
                amount: 15,
                minValue: 0,
                maxValue: 50,
                proportionAbove: 0.8,
                proportionEqual: 0.2,
                proportionBelow: 0,
            }
        ],
        lesser: [
            {
                amount: 0,
                minValue: 0,
                maxValue: 0,
                proportionAbove: 0,
                proportionEqual: 0,
                proportionBelow: 0,
            }
        ],
        treasure: [
            {
                text: '+1',
                value: 1,
                amount: 1,
            },
            {
                text: '+2',
                value: 2,
                amount: 2,
            },
            {
                text: '+3',
                value: 3,
                amount: 3,
            },
            {
                text: '-1',
                value: -1,
                amount: 1,
            },
            {
                text: '-2',
                value: -2,
                amount: 2,
            },
            {
                text: '-3',
                value: -3,
                amount: 3,
            },
        ]
    },
    {
        levelName: 'Stage 1:9',
        playerValue: 20,
        equalTo: true,
        greater: [
            {
                amount: 15,
                minValue: 0,
                maxValue: 50,
                proportionAbove: 0.8,
                proportionEqual: 0.2,
                proportionBelow: 0,
            }
        ],
        lesser: [
            {
                amount: 0,
                minValue: 0,
                maxValue: 0,
                proportionAbove: 0,
                proportionEqual: 0,
                proportionBelow: 0,
            }
        ],
        treasure: [
            {
                text: '+1',
                value: 1,
                amount: 1,
            },
            {
                text: '+2',
                value: 2,
                amount: 2,
            },
            {
                text: '+3',
                value: 3,
                amount: 3,
            },
            {
                text: '-1',
                value: -1,
                amount: 1,
            },
            {
                text: '-2',
                value: -2,
                amount: 2,
            },
            {
                text: '-3',
                value: -3,
                amount: 3,
            },
        ]
    },

    {
        levelName: 'Stage 2:1',
        playerValue: 5,
        equalTo: false,
        greater: [
            {
                amount: 0,
                minValue: 0,
                maxValue: 0,
                proportionAbove: 0,
                proportionEqual: 0,
                proportionBelow: 0,
            }
        ],
        lesser: [
            {
                amount: 15,
                minValue: 0,
                maxValue: 10,
                proportionAbove: 0.7,
                proportionEqual: 0,
                proportionBelow: 0.3,
            }
        ],
        treasure: [
            {
                text: '',
                value: 0,
                amount: 0,
            },
        ]
    },
    {
        levelName: 'Stage 2:2',
        playerValue: 10,
        equalTo: false,
        greater: [
            {
                amount: 0,
                minValue: 0,
                maxValue: 0,
                proportionAbove: 0,
                proportionEqual: 0,
                proportionBelow: 0,
            }
        ],
        lesser: [
            {
                amount: 15,
                minValue: 0,
                maxValue: 15,
                proportionAbove: 0.7,
                proportionEqual: 0,
                proportionBelow: 0.3,
            }
        ],
        treasure: [
            {
                text: '',
                value: 0,
                amount: 0,
            },
        ]
    },
    {
        levelName: 'Stage 2:3',
        playerValue: 10,
        equalTo: true,
        greater: [
            {
                amount: 0,
                minValue: 0,
                maxValue: 0,
                proportionAbove: 0,
                proportionEqual: 0,
                proportionBelow: 0,
            }
        ],
        lesser: [
            {
                amount: 15,
                minValue: 0,
                maxValue: 20,
                proportionAbove: 0.3,
                proportionEqual: 0.2,
                proportionBelow: 0.5,
            }
        ],
        treasure: [
            {
                text: '',
                value: 0,
                amount: 0,
            },
        ]
    },
    {
        levelName: 'Stage 2:4',
        playerValue: 10,
        equalTo: false,
        greater: [
            {
                amount: 0,
                minValue: 0,
                maxValue: 0,
                proportionAbove: 0,
                proportionEqual: 0,
                proportionBelow: 0,
            }
        ],
        lesser: [
            {
                amount: 15,
                minValue: 0,
                maxValue: 20,
                proportionAbove: 0,
                proportionEqual: 0.2,
                proportionBelow: 0.8,
            }
        ],
        treasure: [
            {
                text: '-1',
                value: -1,
                amount: 5,
            },
            {
                text: '-2',
                value: -2,
                amount: 3,
            },
            {
                text: '-3',
                value: -3,
                amount: 3,
            },
        ]
    },
    {
        levelName: 'Stage 2:5',
        playerValue: 15,
        equalTo: false,
        greater: [
            {
                amount: 0,
                minValue: 0,
                maxValue: 0,
                proportionAbove: 0,
                proportionEqual: 0,
                proportionBelow: 0,
            }
        ],
        lesser: [
            {
                amount: 15,
                minValue: 0,
                maxValue: 30,
                proportionAbove: 0,
                proportionEqual: 0.2,
                proportionBelow: 0.8,
            }
        ],
        treasure: [
            {
                text: '-1',
                value: -1,
                amount: 5,
            },
            {
                text: '-2',
                value: -2,
                amount: 3,
            },
            {
                text: '-3',
                value: -3,
                amount: 3,
            },
        ]
    },
    {
        levelName: 'Stage 2:6',
        playerValue: 15,
        equalTo: true,
        greater: [
            {
                amount: 0,
                minValue: 0,
                maxValue: 0,
                proportionAbove: 0,
                proportionEqual: 0,
                proportionBelow: 0,
            }
        ],
        lesser: [
            {
                amount: 15,
                minValue: 0,
                maxValue: 30,
                proportionAbove: 0,
                proportionEqual: 0.2,
                proportionBelow: 0.8,
            }
        ],
        treasure: [
            {
                text: '-1',
                value: -1,
                amount: 5,
            },
            {
                text: '-2',
                value: -2,
                amount: 3,
            },
            {
                text: '-3',
                value: -3,
                amount: 3,
            },
        ]
    },
    {
        levelName: 'Stage 2:7',
        playerValue: 15,
        equalTo: false,
        greater: [
            {
                amount: 0,
                minValue: 0,
                maxValue: 0,
                proportionAbove: 0,
                proportionEqual: 0,
                proportionBelow: 0,
            }
        ],
        lesser: [
            {
                amount: 15,
                minValue: 0,
                maxValue: 30,
                proportionAbove: 0,
                proportionEqual: 0.2,
                proportionBelow: 0.8,
            }
        ],
        treasure: [
            {
                text: '+1',
                value:  1,
                amount: 1,
            },
            {
                text: '+2',
                value:  2,
                amount: 2,
            },
            {
                text: '+3',
                value:  3,
                amount: 3,
            },
            {
                text: '-1',
                value: -1,
                amount: 1,
            },
            {
                text: '-2',
                value: -2,
                amount: 2,
            },
            {
                text: '-3',
                value: -3,
                amount: 3,
            },
        ]
    },
    {
        levelName: 'Stage 2:8',
        playerValue: 20,
        equalTo: false,
        greater: [
            {
                amount: 0,
                minValue: 0,
                maxValue: 0,
                proportionAbove: 0,
                proportionEqual: 0,
                proportionBelow: 0,
            }
        ],
        lesser: [
            {
                amount: 15,
                minValue: 0,
                maxValue: 50,
                proportionAbove: 0,
                proportionEqual: 0.2,
                proportionBelow: 0.8,
            }
        ],
        treasure: [
            {
                text: '+1',
                value:  1,
                amount: 1,
            },
            {
                text: '+2',
                value:  2,
                amount: 2,
            },
            {
                text: '+3',
                value:  3,
                amount: 3,
            },
            {
                text: '-1',
                value: -1,
                amount: 1,
            },
            {
                text: '-2',
                value: -2,
                amount: 2,
            },
            {
                text: '-3',
                value: -3,
                amount: 3,
            },
        ]
    },
    {
        levelName: 'Stage 2:9',
        playerValue: 20,
        equalTo: true,
        greater: [
            {
                amount: 0,
                minValue: 0,
                maxValue: 0,
                proportionAbove: 0,
                proportionEqual: 0,
                proportionBelow: 0,
            }
        ],
        lesser: [
            {
                amount: 15,
                minValue: 0,
                maxValue: 50,
                proportionAbove: 0,
                proportionEqual: 0.2,
                proportionBelow: 0.8,
            }
        ],
        treasure: [
            {
                text: '+1',
                value: 1,
                amount: 1,
            },
            {
                text: '+2',
                value: 2,
                amount: 2,
            },
            {
                text: '+3',
                value: 3,
                amount: 3,
            },
            {
                text: '-1',
                value: -1,
                amount: 1,
            },
            {
                text: '-2',
                value: -2,
                amount: 2,
            },
            {
                text: '-3',
                value: -3,
                amount: 3,
            },
        ]
    },

    {
        levelName: 'Stage 3:1',
        playerValue: 5,
        equalTo: false,
        greater: [
            {
                amount: 7,
                minValue: 0,
                maxValue: 10,
                proportionAbove: 0.5,
                proportionEqual: 0,
                proportionBelow: 0.5,
            }
        ],
        lesser: [
            {
                amount: 7,
                minValue: 0,
                maxValue: 10,
                proportionAbove: 0.5,
                proportionEqual: 0,
                proportionBelow: 0.5,
            }
        ],
        treasure: [
            {
                text:  '',
                value:  0,
                amount: 0,
            },
        ]
    },
    {
        levelName: 'Stage 3:2',
        playerValue: 10,
        equalTo: false,
        greater: [
            {
                amount: 7,
                minValue: 0,
                maxValue: 20,
                proportionAbove: 0.5,
                proportionEqual: 0,
                proportionBelow: 0.5,
            }
        ],
        lesser: [
            {
                amount: 7,
                minValue: 0,
                maxValue: 20,
                proportionAbove: 0.5,
                proportionEqual: 0,
                proportionBelow: 0.5,
            }
        ],
        treasure: [
            {
                text: '',
                value: 0,
                amount: 0,
            },
        ]
    },
    {
        levelName: 'Stage 3:3',
        playerValue: 10,
        equalTo: true,
        greater: [
            {
                amount: 7,
                minValue: 0,
                maxValue: 20,
                proportionAbove: 0.3,
                proportionEqual: 0.2,
                proportionBelow: 0.5,
            }
        ],
        lesser: [
            {
                amount: 7,
                minValue: 0,
                maxValue: 20,
                proportionAbove: 0.5,
                proportionEqual: 0.2,
                proportionBelow: 0.3,
            }
        ],
        treasure: [
            {
                text:  '',
                value:  0,
                amount: 0,
            },
        ]
    },
    {
        levelName: 'Stage 3:4',
        playerValue: 10,
        equalTo: false,
        greater: [
            {
                amount: 7,
                minValue: 0,
                maxValue: 20,
                proportionAbove: 0,
                proportionEqual: 0.2,
                proportionBelow: 0.8,
            }
        ],
        lesser: [
            {
                amount: 7,
                minValue: 0,
                maxValue: 20,
                proportionAbove: 0.5,
                proportionEqual: 0.5,
                proportionBelow: 0,
            }
        ],
        treasure: [
            {
                text: '-1',
                value: -1,
                amount: 5,
            },
            {
                text: '-2',
                value: -2,
                amount: 3,
            },
            {
                text: '-3',
                value: -3,
                amount: 3,
            },
        ]
    },
    {
        levelName: 'Stage 3:5',
        playerValue: 15,
        equalTo: false,
        greater: [
            {
                amount: 7,
                minValue: 0,
                maxValue: 30,
                proportionAbove: 0,
                proportionEqual: 0.2,
                proportionBelow: 0.8,
            }
        ],
        lesser: [
            {
                amount: 7,
                minValue: 0,
                maxValue: 30,
                proportionAbove: 0.5,
                proportionEqual: 0.5,
                proportionBelow: 0,
            }
        ],
        treasure: [
            {
                text: '-1',
                value: -1,
                amount: 5,
            },
            {
                text: '-2',
                value: -2,
                amount: 3,
            },
            {
                text: '-3',
                value: -3,
                amount: 3,
            },
        ]
    },
    {
        levelName: 'Stage 3:6',
        playerValue: 15,
        equalTo: true,
        greater: [
            {
                amount: 7,
                minValue: 0,
                maxValue: 30,
                proportionAbove: 0,
                proportionEqual: 0.2,
                proportionBelow: 0.8,
            }
        ],
        lesser: [
            {
                amount: 7,
                minValue: 0,
                maxValue: 30,
                proportionAbove: 0.5,
                proportionEqual: 0.5,
                proportionBelow: 0,
            }
        ],
        treasure: [
            {
                text: '-1',
                value: -1,
                amount: 5,
            },
            {
                text: '-2',
                value: -2,
                amount: 3,
            },
            {
                text: '-3',
                value: -3,
                amount: 3,
            },
        ]
    },
    {
        levelName: 'Stage 3:7',
        playerValue: 15,
        equalTo: false,
        greater: [
            {
                amount: 7,
                minValue: 0,
                maxValue: 30,
                proportionAbove: 0.5,
                proportionEqual: 0.5,
                proportionBelow: 0,
            }
        ],
        lesser: [
            {
                amount: 7,
                minValue: 0,
                maxValue: 30,
                proportionAbove: 0,
                proportionEqual: 0.5,
                proportionBelow: 0.5,
            }
        ],
        treasure: [
            {
                text: '+1',
                value: 1,
                amount: 1,
            },
            {
                text: '+2',
                value: 2,
                amount: 2,
            },
            {
                text: '+3',
                value: 3,
                amount: 3,
            },
            {
                text: '-1',
                value: -1,
                amount: 1,
            },
            {
                text: '-2',
                value: -2,
                amount: 2,
            },
            {
                text: '-3',
                value: -3,
                amount: 3,
            },
        ]
    },
    {
        levelName: 'Stage 3:8',
        playerValue: 20,
        equalTo: false,
        greater: [
            {
                amount: 7,
                minValue: 0,
                maxValue: 50,
                proportionAbove: 0.5,
                proportionEqual: 0.5,
                proportionBelow: 0,
            }
        ],
        lesser: [
            {
                amount: 7,
                minValue: 0,
                maxValue: 50,
                proportionAbove: 0,
                proportionEqual: 0.5,
                proportionBelow: 0.5,
            }
        ],
        treasure: [
            {
                text: '+1',
                value: 1,
                amount: 1,
            },
            {
                text: '+2',
                value: 2,
                amount: 2,
            },
            {
                text: '+3',
                value: 3,
                amount: 3,
            },
            {
                text: '-1',
                value: -1,
                amount: 1,
            },
            {
                text: '-2',
                value: -2,
                amount: 2,
            },
            {
                text: '-3',
                value: -3,
                amount: 3,
            },
        ]
    },
    {
        levelName: 'Stage 3:9',
        playerValue: 20,
        equalTo: true,
        greater: [
            {
                amount: 7,
                minValue: 0,
                maxValue: 50,
                proportionAbove: 0.5,
                proportionEqual: 0.5,
                proportionBelow: 0,
            }
        ],
        lesser: [
            {
                amount: 7,
                minValue: 0,
                maxValue: 50,
                proportionAbove: 0,
                proportionEqual: 0.5,
                proportionBelow: 0.5,
            }
        ],
        treasure: [
            {
                text: '+1',
                value:  1,
                amount: 1,
            },
            {
                text: '+2',
                value:  2,
                amount: 2,
            },
            {
                text: '+3',
                value:  3,
                amount: 3,
            },
            {
                text: '-1',
                value: -1,
                amount: 1,
            },
            {
                text: '-2',
                value: -2,
                amount: 2,
            },
            {
                text: '-3',
                value: -3,
                amount: 3,
            },
        ]
    },

    {
        levelName: 'Stage 4:1',
        playerValue: 5,
        equalTo: false,
        greater: [
            {
                amount: 15,
                minValue: 0,
                maxValue: 10,
                proportionAbove: 0.3,
                proportionEqual: 0,
                proportionBelow: 0.7,
            }
        ],
        lesser: [
            {
                amount: 0,
                minValue: 0,
                maxValue: 0,
                proportionAbove: 0,
                proportionEqual: 0,
                proportionBelow: 0,
            }
        ],
        treasure: [
            {
                text: '',
                value: 0,
                amount: 0,
            },
        ]
    },
    {
        levelName: 'Stage 4:2',
        playerValue: 0,
        equalTo: false,
        greater: [
            {
                amount: 15,
                minValue: -10,
                maxValue: 10,
                proportionAbove: 0.3,
                proportionEqual: 0,
                proportionBelow: 0.7,
            }
        ],
        lesser: [
            {
                amount: 0,
                minValue: 0,
                maxValue: 0,
                proportionAbove: 0,
                proportionEqual: 0,
                proportionBelow: 0,
            }
        ],
        treasure: [
            {
                text: '',
                value: 0,
                amount: 0,
            },
        ]
    },
    {
        levelName: 'Stage 4:3',
        playerValue: 0,
        equalTo: true,
        greater: [
            {
                amount: 15,
                minValue: -10,
                maxValue: 10,
                proportionAbove: 0.3,
                proportionEqual: 0.2,
                proportionBelow: 0.5,
            }
        ],
        lesser: [
            {
                amount: 0,
                minValue: 0,
                maxValue: 0,
                proportionAbove: 0,
                proportionEqual: 0,
                proportionBelow: 0,
            }
        ],
        treasure: [
            {
                text: '',
                value: 0,
                amount: 0,
            },
        ]
    },
    {
        levelName: 'Stage 4:4',
        playerValue: 0,
        equalTo: false,
        greater: [
            {
                amount: 15,
                minValue: -10,
                maxValue: 10,
                proportionAbove: 0.8,
                proportionEqual: 0.2,
                proportionBelow: 0,
            }
        ],
        lesser: [
            {
                amount: 0,
                minValue: 0,
                maxValue: 0,
                proportionAbove: 0,
                proportionEqual: 0,
                proportionBelow: 0,
            }
        ],
        treasure: [
            {
                text: '+1',
                value: 1,
                amount: 5,
            },
            {
                text: '+2',
                value: 2,
                amount: 3,
            },
            {
                text: '+3',
                value: 3,
                amount: 3,
            },
        ]
    },
    {
        levelName: 'Stage 4:5',
        playerValue: -5,
        equalTo: false,
        greater: [
            {
                amount: 15,
                minValue: -15,
                maxValue: 15,
                proportionAbove: 0.8,
                proportionEqual: 0.2,
                proportionBelow: 0,
            }
        ],
        lesser: [
            {
                amount: 0,
                minValue: 0,
                maxValue: 0,
                proportionAbove: 0,
                proportionEqual: 0,
                proportionBelow: 0,
            }
        ],
        treasure: [
            {
                text: '+1',
                value: 1,
                amount: 5,
            },
            {
                text: '+2',
                value: 2,
                amount: 3,
            },
            {
                text: '+3',
                value: 3,
                amount: 3,
            },
        ]
    },
    {
        levelName: 'Stage 4:6',
        playerValue: -5,
        equalTo: true,
        greater: [
            {
                amount: 15,
                minValue: -15,
                maxValue: 15,
                proportionAbove: 0.8,
                proportionEqual: 0.2,
                proportionBelow: 0,
            }
        ],
        lesser: [
            {
                amount: 0,
                minValue: 0,
                maxValue: 0,
                proportionAbove: 0,
                proportionEqual: 0,
                proportionBelow: 0,
            }
        ],
        treasure: [
            {
                text: '+1',
                value: 1,
                amount: 5,
            },
            {
                text: '+2',
                value: 2,
                amount: 3,
            },
            {
                text: '+3',
                value: 3,
                amount: 3,
            },
        ]
    },
    {
        levelName: 'Stage 4:7',
        playerValue: -5,
        equalTo: false,
        greater: [
            {
                amount: 15,
                minValue: -15,
                maxValue: 15,
                proportionAbove: 0.8,
                proportionEqual: 0.2,
                proportionBelow: 0,
            }
        ],
        lesser: [
            {
                amount: 0,
                minValue: 0,
                maxValue: 0,
                proportionAbove: 0,
                proportionEqual: 0,
                proportionBelow: 0,
            }
        ],
        treasure: [
            {
                text: '+1',
                value: 1,
                amount: 1,
            },
            {
                text: '+2',
                value: 2,
                amount: 2,
            },
            {
                text: '+3',
                value: 3,
                amount: 3,
            },
            {
                text: '-1',
                value: -1,
                amount: 1,
            },
            {
                text: '-2',
                value: -2,
                amount: 2,
            },
            {
                text: '-3',
                value: -3,
                amount: 3,
            },
        ]
    },
    {
        levelName: 'Stage 4:8',
        playerValue: -10,
        equalTo: false,
        greater: [
            {
                amount: 15,
                minValue: -25,
                maxValue: 25,
                proportionAbove: 0.8,
                proportionEqual: 0.2,
                proportionBelow: 0,
            }
        ],
        lesser: [
            {
                amount: 0,
                minValue: 0,
                maxValue: 0,
                proportionAbove: 0,
                proportionEqual: 0,
                proportionBelow: 0,
            }
        ],
        treasure: [
            {
                text: '+1',
                value: 1,
                amount: 1,
            },
            {
                text: '+2',
                value: 2,
                amount: 2,
            },
            {
                text: '+3',
                value: 3,
                amount: 3,
            },
            {
                text: '-1',
                value: -1,
                amount: 1,
            },
            {
                text: '-2',
                value: -2,
                amount: 2,
            },
            {
                text: '-3',
                value: -3,
                amount: 3,
            },
        ]
    },
    {
        levelName: 'Stage 4:9',
        playerValue: -10,
        equalTo: true,
        greater: [
            {
                amount: 15,
                minValue: -25,
                maxValue: 25,
                proportionAbove: 0.8,
                proportionEqual: 0.2,
                proportionBelow: 0,
            }
        ],
        lesser: [
            {
                amount: 0,
                minValue: 0,
                maxValue: 0,
                proportionAbove: 0,
                proportionEqual: 0,
                proportionBelow: 0,
            }
        ],
        treasure: [
            {
                text: '+1',
                value: 1,
                amount: 1,
            },
            {
                text: '+2',
                value: 2,
                amount: 2,
            },
            {
                text: '+3',
                value: 3,
                amount: 3,
            },
            {
                text: '-1',
                value: -1,
                amount: 1,
            },
            {
                text: '-2',
                value: -2,
                amount: 2,
            },
            {
                text: '-3',
                value: -3,
                amount: 3,
            },
        ]
    },

    {
        levelName: 'Stage 5:1',
        playerValue: 5,
        equalTo: false,
        greater: [
            {
                amount: 0,
                minValue: 0,
                maxValue: 0,
                proportionAbove: 0,
                proportionEqual: 0,
                proportionBelow: 0,
            }
        ],
        lesser: [
            {
                amount: 15,
                minValue: 0,
                maxValue: 10,
                proportionAbove: 0.7,
                proportionEqual: 0,
                proportionBelow: 0.3,
            }
        ],
        treasure: [
            {
                text:  '',
                value:  0,
                amount: 0,
            },
        ]
    },
    {
        levelName: 'Stage 5:2',
        playerValue: 0,
        equalTo: false,
        greater: [
            {
                amount: 0,
                minValue: 0,
                maxValue: 0,
                proportionAbove: 0,
                proportionEqual: 0,
                proportionBelow: 0,
            }
        ],
        lesser: [
            {
                amount: 15,
                minValue: -10,
                maxValue: 10,
                proportionAbove: 0.7,
                proportionEqual: 0,
                proportionBelow: 0.3,
            }
        ],
        treasure: [
            {
                text:  '',
                value:  0,
                amount: 0,
            },
        ]
    },
    {
        levelName: 'Stage 5:3',
        playerValue: 0,
        equalTo: true,
        greater: [
            {
                amount: 0,
                minValue: 0,
                maxValue: 0,
                proportionAbove: 0,
                proportionEqual: 0,
                proportionBelow: 0,
            }
        ],
        lesser: [
            {
                amount: 15,
                minValue: -10,
                maxValue: 10,
                proportionAbove: 0.3,
                proportionEqual: 0.2,
                proportionBelow: 0.5,
            }
        ],
        treasure: [
            {
                text:  '',
                value:  0,
                amount: 0,
            },
        ]
    },
    {
        levelName: 'Stage 5:4',
        playerValue: 0,
        equalTo: false,
        greater: [
            {
                amount: 0,
                minValue: 0,
                maxValue: 0,
                proportionAbove: 0,
                proportionEqual: 0,
                proportionBelow: 0,
            }
        ],
        lesser: [
            {
                amount: 15,
                minValue: -10,
                maxValue: 10,
                proportionAbove: 0,
                proportionEqual: 0.2,
                proportionBelow: 0.8,
            }
        ],
        treasure: [
            {
                text: '-1',
                value: -1,
                amount: 5,
            },
            {
                text: '-2',
                value: -2,
                amount: 3,
            },
            {
                text: '-3',
                value: -3,
                amount: 3,
            },
        ]
    },
    {
        levelName: 'Stage 5:5',
        playerValue: -5,
        equalTo: false,
        greater: [
            {
                amount: 0,
                minValue: 0,
                maxValue: 0,
                proportionAbove: 0,
                proportionEqual: 0,
                proportionBelow: 0,
            }
        ],
        lesser: [
            {
                amount: 15,
                minValue: -15,
                maxValue: 15,
                proportionAbove: 0,
                proportionEqual: 0.2,
                proportionBelow: 0.8,
            }
        ],
        treasure: [
            {
                text: '-1',
                value: -1,
                amount: 5,
            },
            {
                text: '-2',
                value: -2,
                amount: 3,
            },
            {
                text: '-3',
                value: -3,
                amount: 3,
            },
        ]
    },
    {
        levelName: 'Stage 5:6',
        playerValue: -5,
        equalTo: true,
        greater: [
            {
                amount: 0,
                minValue: 0,
                maxValue: 0,
                proportionAbove: 0,
                proportionEqual: 0,
                proportionBelow: 0,
            }
        ],
        lesser: [
            {
                amount: 15,
                minValue: -15,
                maxValue: 15,
                proportionAbove: 0,
                proportionEqual: 0.2,
                proportionBelow: 0.8,
            }
        ],
        treasure: [
            {
                text: '-1',
                value: -1,
                amount: 5,
            },
            {
                text: '-2',
                value: -2,
                amount: 3,
            },
            {
                text: '-3',
                value: -3,
                amount: 3,
            },
        ]
    },
    {
        levelName: 'Stage 5:7',
        playerValue: -5,
        equalTo: false,
        greater: [
            {
                amount: 0,
                minValue: 0,
                maxValue: 0,
                proportionAbove: 0,
                proportionEqual: 0,
                proportionBelow: 0,
            }
        ],
        lesser: [
            {
                amount: 15,
                minValue: -15,
                maxValue: 15,
                proportionAbove: 0,
                proportionEqual: 0.2,
                proportionBelow: 0.8,
            }
        ],
        treasure: [
            {
                text: '+1',
                value: 1,
                amount: 1,
            },
            {
                text: '+2',
                value: 2,
                amount: 2,
            },
            {
                text: '+3',
                value: 3,
                amount: 3,
            },
            {
                text: '-1',
                value: -1,
                amount: 1,
            },
            {
                text: '-2',
                value: -2,
                amount: 2,
            },
            {
                text: '-3',
                value: -3,
                amount: 3,
            },
        ]
    },
    {
        levelName: 'Stage 5:8',
        playerValue: -10,
        equalTo: false,
        greater: [
            {
                amount: 0,
                minValue: 0,
                maxValue: 0,
                proportionAbove: 0,
                proportionEqual: 0,
                proportionBelow: 0,
            }
        ],
        lesser: [
            {
                amount: 15,
                minValue: -25,
                maxValue: 25,
                proportionAbove: 0,
                proportionEqual: 0.2,
                proportionBelow: 0.8,
            }
        ],
        treasure: [
            {
                text: '+1',
                value: 1,
                amount: 1,
            },
            {
                text: '+2',
                value: 2,
                amount: 2,
            },
            {
                text: '+3',
                value: 3,
                amount: 3,
            },
            {
                text: '-1',
                value: -1,
                amount: 1,
            },
            {
                text: '-2',
                value: -2,
                amount: 2,
            },
            {
                text: '-3',
                value: -3,
                amount: 3,
            },
        ]
    },
    {
        levelName: 'Stage 5:9',
        playerValue: -10,
        equalTo: true,
        greater: [
            {
                amount: 0,
                minValue: 0,
                maxValue: 0,
                proportionAbove: 0,
                proportionEqual: 0,
                proportionBelow: 0,
            }
        ],
        lesser: [
            {
                amount: 15,
                minValue: -25,
                maxValue: 25,
                proportionAbove: 0,
                proportionEqual: 0.2,
                proportionBelow: 0.8,
            }
        ],
        treasure: [
            {
                text: '+1',
                value: 1,
                amount: 1,
            },
            {
                text: '+2',
                value: 2,
                amount: 2,
            },
            {
                text: '+3',
                value: 3,
                amount: 3,
            },
            {
                text: '-1',
                value: -1,
                amount: 1,
            },
            {
                text: '-2',
                value: -2,
                amount: 2,
            },
            {
                text: '-3',
                value: -3,
                amount: 3,
            },
        ]
    },

    {
        levelName: 'Stage 6:1',
        playerValue: 5,
        equalTo: false,
        greater: [
            {
                amount: 7,
                minValue: 0,
                maxValue: 10,
                proportionAbove: 0.5,
                proportionEqual: 0,
                proportionBelow: 0.5,
            }
        ],
        lesser: [
            {
                amount: 7,
                minValue: 0,
                maxValue: 10,
                proportionAbove: 0.5,
                proportionEqual: 0,
                proportionBelow: 0.5,
            }
        ],
        treasure: [
            {
                text:  '0',
                value:  0,
                amount: 0,
            },
        ]
    },
    {
        levelName: 'Stage 6:2',
        playerValue: 0,
        equalTo: false,
        greater: [
            {
                amount: 7,
                minValue: -10,
                maxValue: 10,
                proportionAbove: 0.5,
                proportionEqual: 0,
                proportionBelow: 0.5,
            }
        ],
        lesser: [
            {
                amount: 7,
                minValue: -10,
                maxValue: 10,
                proportionAbove: 0.5,
                proportionEqual: 0,
                proportionBelow: 0.5,
            }
        ],
        treasure: [
            {
                text:  '',
                value:  0,
                amount: 0,
            },
        ]
    },
    {
        levelName: 'Stage 6:3',
        playerValue: 0,
        equalTo: true,
        greater: [
            {
                amount: 7,
                minValue: -10,
                maxValue: 10,
                proportionAbove: 0.25,
                proportionEqual: 0.5,
                proportionBelow: 0.25,
            }
        ],
        lesser: [
            {
                amount: 7,
                minValue: -10,
                maxValue: 10,
                proportionAbove: 0.25,
                proportionEqual: 0.5,
                proportionBelow: 0.25,
            }
        ],
        treasure: [
            {
                text:  '',
                value:  0,
                amount: 0,
            },
        ]
    },
    {
        levelName: 'Stage 6:4',
        playerValue: 0,
        equalTo: false,
        greater: [
            {
                amount: 7,
                minValue: 0,
                maxValue: 20,
                proportionAbove: 0.5,
                proportionEqual: 0,
                proportionBelow: 0.5,
            }
        ],
        lesser: [
            {
                amount: 7,
                minValue: -10,
                maxValue: 10,
                proportionAbove: 0.5,
                proportionEqual: 0,
                proportionBelow: 0.5,
            }
        ],
        treasure: [
            {
                text: '-1',
                value: -1,
                amount: 5,
            },
            {
                text: '-2',
                value: -2,
                amount: 3,
            },
            {
                text: '-3',
                value: -3,
                amount: 3,
            },
        ]
    },
    {
        levelName: 'Stage 6:5',
        playerValue: 0,
        equalTo: false,
        greater: [
            {
                amount: 7,
                minValue: -15,
                maxValue: 15,
                proportionAbove: 0.25,
                proportionEqual: 0.5,
                proportionBelow: 0.25,
            }
        ],
        lesser: [
            {
                amount: 7,
                minValue: -15,
                maxValue: 15,
                proportionAbove: 0.25,
                proportionEqual: 0.5,
                proportionBelow: 0.25,
            }
        ],
        treasure: [
            {
                text: '-1',
                value: -1,
                amount: 5,
            },
            {
                text: '-2',
                value: -2,
                amount: 3,
            },
            {
                text: '-3',
                value: -3,
                amount: 3,
            },
        ]
    },
    {
        levelName: 'Stage 6:6',
        playerValue: 0,
        equalTo: true,
        greater: [
            {
                amount: 7,
                minValue: -15,
                maxValue: 15,
                proportionAbove: 0.25,
                proportionEqual: 0.5,
                proportionBelow: 0.25,
            }
        ],
        lesser: [
            {
                amount: 7,
                minValue: -15,
                maxValue: 15,
                proportionAbove: 0.25,
                proportionEqual: 0.5,
                proportionBelow: 0.25,
            }
        ],
        treasure: [
            {
                text: '-1',
                value: -1,
                amount: 5,
            },
            {
                text: '-2',
                value: -2,
                amount: 3,
            },
            {
                text: '-3',
                value: -3,
                amount: 3,
            },
        ]
    },
    {
        levelName: 'Stage 6:7',
        playerValue: 0,
        equalTo: false,
        greater: [
            {
                amount: 7,
                minValue: -15,
                maxValue: 15,
                proportionAbove: 0.5,
                proportionEqual: 0,
                proportionBelow: 0.5,
            }
        ],
        lesser: [
            {
                amount: 7,
                minValue: -15,
                maxValue: 15,
                proportionAbove: 0.5,
                proportionEqual: 0,
                proportionBelow: 0.5,
            }
        ],
        treasure: [
            {
                text: '+1',
                value: 1,
                amount: 1,
            },
            {
                text: '+2',
                value: 2,
                amount: 2,
            },
            {
                text: '+3',
                value: 3,
                amount: 3,
            },
            {
                text: '-1',
                value: -1,
                amount: 1,
            },
            {
                text: '-2',
                value: -2,
                amount: 2,
            },
            {
                text: '-3',
                value: -3,
                amount: 3,
            },
        ]
    },
    {
        levelName: 'Stage 6:8',
        playerValue: 0,
        equalTo: false,
        greater: [
            {
                amount: 7,
                minValue: -25,
                maxValue: 25,
                proportionAbove: 0.5,
                proportionEqual: 0,
                proportionBelow: 0.5,
            }
        ],
        lesser: [
            {
                amount: 7,
                minValue: -25,
                maxValue: 25,
                proportionAbove: 0.5,
                proportionEqual: 0,
                proportionBelow: 0.5,
            }
        ],
        treasure: [
            {
                text: '+1',
                value: 1,
                amount: 1,
            },
            {
                text: '+2',
                value: 2,
                amount: 2,
            },
            {
                text: '+3',
                value: 3,
                amount: 3,
            },
            {
                text: '-1',
                value: -1,
                amount: 1,
            },
            {
                text: '-2',
                value: -2,
                amount: 2,
            },
            {
                text: '-3',
                value: -3,
                amount: 3,
            },
        ]
    },
    {
        levelName: 'Stage 6:9',
        playerValue: 0,
        equalTo: true,
        greater: [
            {
                amount: 7,
                minValue: -25,
                maxValue: 25,
                proportionAbove: 0.25,
                proportionEqual: 0.5,
                proportionBelow: 0.25,
            }
        ],
        lesser: [
            {
                amount: 7,
                minValue: -25,
                maxValue: 25,
                proportionAbove: 0.25,
                proportionEqual: 0.5,
                proportionBelow: 0.25,
            }
        ],
        treasure: [
            {
                text: '+1',
                value: 1,
                amount: 1,
            },
            {
                text: '+2',
                value: 2,
                amount: 2,
            },
            {
                text: '+3',
                value: 3,
                amount: 3,
            },
            {
                text: '-1',
                value: -1,
                amount: 1,
            },
            {
                text: '-2',
                value: -2,
                amount: 2,
            },
            {
                text: '-3',
                value: -3,
                amount: 3,
            },
        ]
    },

];

