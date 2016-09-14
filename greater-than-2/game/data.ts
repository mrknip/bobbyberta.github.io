GreaterThan = {};

ui = [
    {
        worldSizeX: 2000,
        worldSizeY: 2000,
    }
];

player = [
    {
        currentLevel: 0,
        currentDepth: 100,
        totalScore: 0,
        stageData: [
            {
                name: '> Positive Integers',
                locked: false,
                medal: 'none',
                score: 0,
                highestLevel: 3,
                lowestLevel: 0,
            },
            {
                name: '< Positive Integers',
                locked: false,
                medal: 'none',
                score: 0,
                highestLevel: 6,
                lowestLevel: 3,
            },
            {
                name: '< and > Positive Integer',
                locked: false,
                medal: 'none',
                score: 0
            },
            {
                name: '> Integers',
                locked: true,
                medal: 'none',
                score: 0
            },
            {
                name: '< Integers',
                locked: true,
                medal: 'none',
                score: 0
            },
            {
                name: '< and > Integer',
                locked: true,
                medal: 'none',
                score: 0
            }
        ]
    },
];

levels = [
    {
        levelName: 'Stage 1:1',
        playerValue: 5,
        greater: [
            {
                amount: 18,
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
                maxValue: 10,
                proportionAbove: 0.5,
                proportionEqual: 0,
                proportionBelow: 0.5,
            }
        ],
        treasure: [
            {
                text: '+0',
                value: 0,
                amount: 10,
            },
        ]
    },
    {
        levelName: 'Stage 1:2',
        playerValue: 10,
        greater: [
            {
                amount: 18,
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
                maxValue: 20,
                proportionAbove: 0.3,
                proportionEqual: 0,
                proportionBelow: 0.7,
            }
        ],
        treasure: [
            {
                text: '+0',
                value: 0,
                amount: 10,
            },
        ]
    },
    {
        levelName: 'Stage 1:3',
        playerValue: 15,
        greater: [
            {
                amount: 18,
                minValue: 0,
                maxValue: 30,
                proportionAbove: 0.3,
                proportionEqual: 0,
                proportionBelow: 0.7,
            }
        ],
        lesser: [
            {
                amount: 0,
                minValue: 0,
                maxValue: 30,
                proportionAbove: 0.3,
                proportionEqual: 0,
                proportionBelow: 0.7,
            }
        ],
        treasure: [
            {
                text: '+0',
                value: 0,
                amount: 10,
            },
        ]
    },
    {
        levelName: 'Stage 1:4',
        playerValue: 20,
        greater: [
            {
                amount: 18,
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
                maxValue: 30,
                proportionAbove: 0.3,
                proportionEqual: 0,
                proportionBelow: 0.7,
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
        levelName: 'Stage 2:1',
        playerValue: 5,
        greater: [
            {
                amount: 0,
                minValue: 0,
                maxValue: 10,
                proportionAbove: 0.3,
                proportionEqual: 0,
                proportionBelow: 0.7,
            }
        ],
        lesser: [
            {
                amount: 12,
                minValue: 0,
                maxValue: 10,
                proportionAbove: 0.7,
                proportionEqual: 0,
                proportionBelow: 0.3,
            }
        ],
        treasure: [
            {
                text: '+0',
                value: 0,
                amount: 10,
            },
        ]
    },
    {
        levelName: 'Stage 2:2',
        playerValue: 10,
        greater: [
            {
                amount: 0,
                minValue: 0,
                maxValue: 20,
                proportionAbove: 0.3,
                proportionEqual: 0,
                proportionBelow: 0.7,
            }
        ],
        lesser: [
            {
                amount: 12,
                minValue: 0,
                maxValue: 20,
                proportionAbove: 0.7,
                proportionEqual: 0,
                proportionBelow: 0.1,
            }
        ],
        treasure: [
            {
                text: '+0',
                value: 0,
                amount: 10,
            },
        ]
    },
    {
        levelName: 'Stage 2:3',
        playerValue: 15,
        greater: [
            {
                amount: 0,
                minValue: 0,
                maxValue: 30,
                proportionAbove: 0.3,
                proportionEqual: 0,
                proportionBelow: 0.7,
            }
        ],
        lesser: [
            {
                amount: 18,
                minValue: 0,
                maxValue: 30,
                proportionAbove: 0.7,
                proportionEqual: 0,
                proportionBelow: 0.3,
            }
        ],
        treasure: [
            {
                text: '+0',
                value: 0,
                amount: 10,
            },
        ]
    },
    {
        levelName: 'Stage 2:4',
        playerValue: 20,
        greater: [
            {
                amount: 0,
                minValue: 0,
                maxValue: 50,
                proportionAbove: 0.8,
                proportionEqual: 0.2,
                proportionBelow: 0,
            }
        ],
        lesser: [
            {
                amount: 18,
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
        levelName: 'Stage 3:1',
        playerValue: 5,
        greater: [
            {
                amount: 6,
                minValue: 0,
                maxValue: 10,
                proportionAbove: 0.3,
                proportionEqual: 0,
                proportionBelow: 0.7,
            }
        ],
        lesser: [
            {
                amount: 6,
                minValue: 0,
                maxValue: 10,
                proportionAbove: 0.7,
                proportionEqual: 0,
                proportionBelow: 0.3,
            }
        ],
        treasure: [
            {
                text: '+0',
                value: 0,
                amount: 10,
            },
        ]
    },
    {
        levelName: 'Stage 3:2',
        playerValue: 10,
        greater: [
            {
                amount: 6,
                minValue: 0,
                maxValue: 20,
                proportionAbove: 0.3,
                proportionEqual: 0,
                proportionBelow: 0.7,
            }
        ],
        lesser: [
            {
                amount: 6,
                minValue: 0,
                maxValue: 20,
                proportionAbove: 0.7,
                proportionEqual: 0,
                proportionBelow: 0.1,
            }
        ],
        treasure: [
            {
                text: '+0',
                value: 0,
                amount: 10,
            },
        ]
    },
    {
        levelName: 'Stage 3:3',
        playerValue: 15,
        greater: [
            {
                amount: 9,
                minValue: 0,
                maxValue: 30,
                proportionAbove: 0.3,
                proportionEqual: 0,
                proportionBelow: 0.7,
            }
        ],
        lesser: [
            {
                amount: 9,
                minValue: 0,
                maxValue: 30,
                proportionAbove: 0.7,
                proportionEqual: 0,
                proportionBelow: 0.3,
            }
        ],
        treasure: [
            {
                text: '+0',
                value: 0,
                amount: 10,
            },
        ]
    },
    {
        levelName: 'Stage 3:4',
        playerValue: 20,
        greater: [
            {
                amount: 9,
                minValue: 0,
                maxValue: 50,
                proportionAbove: 0.8,
                proportionEqual: 0.2,
                proportionBelow: 0,
            }
        ],
        lesser: [
            {
                amount: 9,
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
                amount: 3,
            },
            {
                text: '-2',
                value: -2,
                amount: 1,
            },
            {
                text: '-3',
                value: -3,
                amount: 1,
            },
            {
                text: '+1',
                value: 1,
                amount: 3,
            },
            {
                text: '+2',
                value: 2,
                amount: 1,
            },
            {
                text: '+3',
                value: 3,
                amount: 1,
            },
        ]
    },
];

