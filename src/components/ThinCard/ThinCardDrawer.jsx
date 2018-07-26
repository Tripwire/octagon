import Flexbox from 'flexbox-react'
import PropTypes from 'prop-types'
import React from 'react'
import { Icon } from 'semantic-ui-react'

const ThinCardDrawer = props => {
  const { children, expanded, expandGroupToggle, ...rest } = props
  return (
    <div {...rest}>
      {!expanded ? (
        <Flexbox
          className='drawer'
          flexDirection='row'
          onClick={expandGroupToggle}
        >
          <Flexbox className='drawer__expand_button'>
            <Flexbox
              alignItems='center'
              className='drawer__button'
              flexGrow={2}
            >
              EXPAND
            </Flexbox>
            <Flexbox>
              <Icon className='ei arrow_carrot-down text-large' />
            </Flexbox>
          </Flexbox>
          <Flexbox className='drawer__side' flexGrow={3} />
        </Flexbox>
      ) : (
        <div>
          {children}
          <Flexbox
            className='drawer'
            flexDirection='row'
            onClick={expandGroupToggle}
          >
            <Flexbox className='drawer__collapse_button'>
              <Flexbox
                alignItems='center'
                className='drawer__button'
                flexGrow={2}
              >
                COLLAPSE
              </Flexbox>
              <Flexbox>
                <Icon className='ei arrow_carrot-up text-large' />
              </Flexbox>
            </Flexbox>
            <Flexbox className='drawer__side_blue' flexGrow={3} />
          </Flexbox>
        </div>
      )}
    </div>
  )
}

ThinCardDrawer.defaultProps = {
  expanded: false
}
ThinCardDrawer.propTypes = {
  expanded: PropTypes.bool,
  expandGroupToggle: PropTypes.func
}
export default ThinCardDrawer
