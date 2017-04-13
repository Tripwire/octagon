import isEmpty from 'lodash/isEmpty'
import isString from 'lodash/isString'
import pickBy from 'lodash/pickBy'
import some from 'lodash/some'

const allowedExternalAttributes = [
  'aria-*',
  'className',
  'data-*',
  'id',
  'name',
  'on*'
]

export default function filterAttributesFromProps (props) {
  return pickBy(props, (propValue, propName) => {
    if (!isString(propValue) || isEmpty(propValue)) {
      return false
    }
    return some(allowedExternalAttributes, (allowedAttributeName) => {
      return propName.match(allowedAttributeName)
    })
  })
}
