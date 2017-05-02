Standard OperationsHistoryBarChart

    <div style={{marginTop: "85px"}}>
    <OperationsHistoryBarChart
       barPadding={0.2}
       borderRadius={0}
       data={[ 
        { label: '12-10-2016 01:02:00', normal: 0, warning: 2, critical: 0 },
        { label: '12-11-2016 03:15:00', normal: 0, warning: 5, critical: 0 },
        { label: '12-13-2016 05:22:00', normal: 0, warning: 15, critical: 0 },
        { label: '12-14-2016 05:22:00', normal: 0, warning: 20, critical: 0 },
        { label: '12-16-2016 05:22:00', normal: 1, warning: 0, critical: 0 },
        { label: '12-18-2016 05:22:00', normal: 25, warning: 0, critical: 50 },
        { label: '12-19-2016 05:22:00', normal: 50, warning: 0, critical: 0 } ]}
       height={100}
       width={200}
       showIcon
       showXLabel
       XLabelFontSize='8'
      />
    </div>

The label is the source from the x-axis values are generated, they are parsed as dates.

Icons are driven from the currentState property of every record.  Warning and critical will display icons while 'normal' does not. Set the showIcon & showXLabel props to respectively enable those display properties.

Sample data series:

```javascript
[
  { label: '12-10-2016 01:02:00', normal: 0, warning: 2, critical: 0 },
  { label: '12-11-2016 03:15:00', normal: 0, warning: 5, critical: 0 },
  { label: '12-13-2016 05:22:00', normal: 0, warning: 15, critical: 0 },
  { label: '12-14-2016 05:22:00', normal: 0, warning: 20, critical: 0 },
  { label: '12-16-2016 05:22:00', normal: 1, warning: 0, critical: 0 },
  { label: '12-18-2016 05:22:00', normal: 25, warning: 0, critical: 50 },
  { label: '12-19-2016 05:22:00', normal: 50, warning: 0, critical: 0 }
]
```

