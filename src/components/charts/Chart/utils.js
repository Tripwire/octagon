
var d3 = Object.assign({}, require('d3-shape'), require('d3-format'), require('d3-axis'), require('d3-array'), require('d3-scale'), require('d3-time-format'))
function getMax (data, axisType) {
  return d3.max(data, (d) => d[axisType])
}

function getMin (data, axisType) {
  return d3.min(data, (d) => d[axisType])
}

export function xScaleLinear (data, width) {
  return d3.scaleLinear()
    .domain([0, getMax(data, 'x')])
    .range([0, width])
}

export function xScaleTime (data, width) {
  return d3.scaleTime()
    .domain(d3.extent(data, (d) => {
      return d.x
    }))
    .rangeRound([0, width])
}

export function xScaleBand (data, width, paddingPercent) {
  return d3.scaleBand()
    .domain(data.map((d) => {
      return d.x
    }))
    .rangeRound([0, width])
    .padding(paddingPercent)
}

export function yScaleLinear (data, height, yBuffer) {
  return d3.scaleLinear()
    .domain([0, getMax(data, 'y') + yBuffer])
    .range([height, 0])
}

function getMaxFromList (dataList, axisType) {
  return d3.max(dataList.map((data) => {
    return getMax(data, axisType)
  }))
}

function getMinFromList (dataList, axisType) {
  return d3.min(dataList.map((data) => {
    return getMin(data, axisType)
  }))
}
export function xScaleLinearDataList (dataList, width) {
  return d3.scaleLinear()
    .domain([0, getMaxFromList(dataList, 'x')])
    .range([0, width])
}

export function yScaleLinearDataList (dataList, width) {
  return d3.scaleLinear()
    .domain([getMinFromList(dataList, 'y'), getMaxFromList(dataList, 'y')])
    .range([0, width])
}
export function xScaleTimeList (dataList, width) {
  return d3.scaleTime()
    .domain(getMinFromList(dataList, 'x'), getMaxFromList(dataList, 'y'))
    .rangeRound([0, width])
}
