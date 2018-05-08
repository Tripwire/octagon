import xor from 'lodash/xor'

export function hasChildren (displayNames) {
  return function assertChildren (props, propName, componentName) {
    var childrenTypes = props[propName].map(el => el.type.name)
    var allowedTypes = displayNames

    // Only accept a single child, of the appropriate type
    if (xor(childrenTypes, allowedTypes).length) {
      return new Error(
        [
          `\`${componentName}\``,
          `should have exactly ${allowedTypes.length} children of the following types: `,
          ` \`${allowedTypes.join('`, `')}\``
        ].join(' ')
      )
    }
  }
}
