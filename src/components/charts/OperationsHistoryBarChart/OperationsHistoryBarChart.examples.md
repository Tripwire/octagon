Standard OperationsHistoryBarChart

    <div style={{marginTop: "85px"}}>
    <OperationsHistoryBarChart
       barPadding={0.3}
       borderRadius={0}
       data={[ 
        { x: '12-10-2016 01:02:00', y: 2, currentState: 'warning' }, 
        { x: '12-11-2016 03:15:00', y: 5, currentState: 'warning' }, 
        { x: '12-12-2016 05:22:00', y: 10, currentState: 'warning' }, 
        { x: '12-13-2016 05:22:00', y: 15, currentState: 'warning' }, 
        { x: '12-14-2016 05:22:00', y: 20, currentState: 'warning' }, 
        { x: '12-15-2016 05:22:00', y: 25, currentState: 'warning' }, 
        { x: '12-16-2016 05:22:00', y: 30, currentState: 'warning' }, 
        { x: '12-17-2016 05:22:00', y: 55, currentState: 'warning' }, 
        { x: '12-18-2016 05:22:00', y: 75, currentState: 'critical' }, 
        { x: '12-19-2016 05:22:00', y: 50, currentState: 'normal' } ]}
       height={120}
       width={500}
       xDataType='date'
       showIcon
       showXLabel
       XLabelFontSize='12'
       tooltipTitle='OPERATIONS'
      />
    </div>

Icons are driven from the currentState property of every record.  Warning and critical will display icons while 'normal' does not.
Set the showIcon & showXLabel props to respectively enable those display properties.

Sample data series:

```javascript
[
  { x: '12-10-2016 01:02:00', y: 2, currentState: 'warning' },
  { x: '12-11-2016 03:15:00', y: 5, currentState: 'warning' },
  { x: '12-12-2016 05:22:00', y: 10, currentState: 'warning' },
  { x: '12-13-2016 05:22:00', y: 15, currentState: 'warning' },
  { x: '12-14-2016 05:22:00', y: 20, currentState: 'warning' },
  { x: '12-15-2016 05:22:00', y: 25, currentState: 'warning' },
  { x: '12-16-2016 05:22:00', y: 30, currentState: 'warning' },
  { x: '12-17-2016 05:22:00', y: 55, currentState: 'warning' },
  { x: '12-18-2016 05:22:00', y: 75, currentState: 'critical' },
  { x: '12-19-2016 05:22:00', y: 50, currentState: 'normal' }
]
```

