Standard Area AreaChart

    <div style={{marginTop: "45px"}}>
    <AreaChart
      data={[{ x: 0, y: 10214, up: 250, down: 229 },{ x: 1, y: 25241, up: 212, down: 128 },{ x: 2, y: 52421, up: 322, down: 192 },{ x: 3, y: 20204, up: 420, down: 525 },{ x: 4, y: 30024, up: 515, down: 325 }]}
      hideAxisX
      hideAxisY
      tooltipVisible
      dotVisible={false}
      yBuffer={5}
      color='#A676B2'
      width={300}
      height={60}
      tooltipContentType={['y', 'up', 'down']}
    />
    </div>

Sample data series:

```javascript
[
  { x: 0, y: 10214, up: 250, down: 229 },
  { x: 1, y: 25241, up: 212, down: 128 },
  { x: 2, y: 52421, up: 322, down: 192 },
  { x: 3, y: 20204, up: 420, down: 525 },
  { x: 4, y: 30024, up: 515, down: 325 }
]
```