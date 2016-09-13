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
                score: 0
            },
            {
                name: '< Positive Integers',
                locked: true,
                medal: 'none',
                score: 0
            },
            {
                name: '< and > Positive Integer',
                locked: true,
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
        worldSizeX: 1500,
        worldSizeY: 1500,
        greater: [
            {
                amount: 12,
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
        worldSizeX: 1500,
        worldSizeY: 1500,
        greater: [
            {
                amount: 12,
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
        worldSizeX: 2000,
        worldSizeY: 2000,
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
        worldSizeX: 2000,
        worldSizeY: 2000,
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
];

