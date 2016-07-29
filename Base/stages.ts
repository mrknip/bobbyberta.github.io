var stage = {
    1: {
        stageName: "Adding to 10",

        startValue: 1,
        currentValue: 1,

        collect: {
            Value: 1,
            Amount: 10
        },

        sharks: [
            {
                start: 5,
                value: 10,
                remain: 5
            },
            {
                start: 10,
                value: 2,
                remain: 10
            },
            {
                start: 5,
                value: 3,
                remain: 5
            }
        ]
        },
    2: {
        stageName: "Negative Numbers",

        startValue: -10,
        currentValue: -10,

        collect: {
            Value: -1,
            Amount: 10
        },

        sharks: [
            {
                amount: 10,
                value: -5,
                remain: 10
            },
            {
                amount: 10,
                value: -2,
                remain: 10
            },
            {
                amount: 5,
                value: -10,
                remain: 5
            },
            {
                amount: 5,
                value: -8,
                remain: 5
            }
        ]
    }
}