var generalQ = [
    {
        text: 'GENERAL - Project attr from table',
        apiName: "projectFrom",
        userInputs: ['attr', 'table'],
        categories: ['projection']
    },
    {
        text: 'GENERAL - Project (and/or join) with conditions',
        apiName: "projectFromWhere",
        userInputs: ['attr', 'tables', 'condition'],
        categories: ['selection', 'join', 'projection']
    },
    {
        text: 'GENERAL - Aggregate from table (e.g. agg_function=count)',
        apiName: "aggFrom",
        userInputs: ['agg_function', 'agg_over_attr', 'table'],
        categories: ['aggregation']
    },
    {
        text: 'GENERAL - Nested aggregate from table (e.g. agg_function=count)',
        apiName: "nestedAggFrom",
        userInputs: ['agg_function', 'agg_over_attr', 'table', 'group_by'],
        categories: ['aggregation', 'nested_aggregation']
    },
]