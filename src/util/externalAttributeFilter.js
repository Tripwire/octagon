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
    return some(allowedExternalAttributes, (allowedAttributeName) => {
      return propName.match(allowedAttributeName)
    })
  })
}
