#### Default

     const Dropdown = require('semantic-ui-react').Dropdown;
     <Dropdown
        placeholder='Select Country'
        selection
        options={[ { text: 'All', value: 'all' }, { text: 'prod.1.console', value: 'io' }, { text: 'prod.2.console', value: 'groups' }, { text: 'prod.3.console', value: 'tasktypes' } ]}
        defaultValue={'all'}
    />

See full dropdown documentation [here](http://react.semantic-ui.com/modules/dropdown)
