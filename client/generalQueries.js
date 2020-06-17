var generalQ = [
    {
        text: 'GENERAL - Project attr from table',
        apiName: "projectFrom",
        userInputs: ['attr', 'table'],
        categories: ['projection']
    },
    {
        text: 'GENERAL - Selection (e.g. condition_attr=ID, condition_attr_equals=1)',
        apiName: "projectWhereEqual",
        userInputs: ['show_attr', 'tables', 'condition_attr', 'condition_attr_equals'],
        categories: ['selection', 'projection']
    },
    {
        text: 'GENERAL - Join table1 and table2 where attr_of_table1=attr_of_table2',
        apiName: "joinTwo",
        userInputs: ['table1', 'table2', 'attr_of_table1', 'attr_of_table2'],
        categories: ['selection', 'join'],
        inputs: {
            show_attr: '*'
        }
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