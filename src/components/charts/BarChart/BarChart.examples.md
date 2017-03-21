Standard Area AreaChart

    <div style={{marginTop: "85px"}}>
    <BarChart
       barPadding={0.3}
       borderRadius={0}
       data={[ { x: '12-10-2016 01:02:00', y: 40, currentState: 'normal' }, { x: '12-11-2016 03:15:00', y: 50, currentState: 'normal' }, { x: '12-12-2016 05:22:00', y: 65, currentState: 'normal' }, { x: '12-13-2016 05:22:00', y: 60, currentState: 'normal' }, { x: '12-14-2016 05:22:00', y: 70, currentState: 'normal' }, { x: '12-15-2016 05:22:00', y: 55, currentState: 'normal' }, { x: '12-16-2016 05:22:00', y: 80, currentState: 'warning' }, { x: '12-17-2016 05:22:00', y: 55, currentState: 'normal' }, { x: '12-18-2016 05:22:00', y: 75, currentState: 'critical' }, { x: '12-19-2016 05:22:00', y: 50, currentState: 'normal' } ]}
       height={120}
       width={500}
       xDataType='date'
       showIcon
       showXLabel
       tooltipTitle='OPERATIONS'
      />
    </div>

Icons are driven from the currentState property of every record.  Warning and critical will display icons while 'normal' does not.
Set the showIcon & showXLabel props to respectively enable those display properties.

Sample data series:

```javascript
[
  { x: '12-10-2016 01:02:00', y: 40, currentState: 'normal' },
  { x: '12-11-2016 03:15:00', y: 50, currentState: 'normal' },
  { x: '12-12-2016 05:22:00', y: 65, currentState: 'normal' },
  { x: '12-13-2016 05:22:00', y: 60, currentState: 'normal' },
  { x: '12-14-2016 05:22:00', y: 70, currentState: 'normal' },
  { x: '12-15-2016 05:22:00', y: 55, currentState: 'normal' },
  { x: '12-16-2016 05:22:00', y: 80, currentState: 'warning' },
  { x: '12-17-2016 05:22:00', y: 55, currentState: 'normal' },
  { x: '12-18-2016 05:22:00', y: 75, currentState: 'critical' },
  { x: '12-19-2016 05:22:00', y: 50, currentState: 'normal' }
]
```

