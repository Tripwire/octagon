import React from 'react'
import Flexbox from 'flexbox-react'
import Icon from '../suir/icon/Icon'

const ThinCardDrawer = (props) => {
  return (
    <div>

      {(!props.expanded) ? (
        <Flexbox className='drawer' flexDirection='row' onClick={props.expandGroupToggle}>
          <Flexbox className='drawer__side' flexGrow={3} />
          <Flexbox className='drawer__center' width='150px' paddingLeft='1em' paddingRight='1em'>
            <Flexbox alignItems='center' className='drawer__center_copy' flexGrow={2}>EXPAND</Flexbox>
            <Flexbox><Icon className='ei arrow_carrot-down text-large' /></Flexbox>
          </Flexbox>
          <Flexbox className='drawer__side' flexGrow={3} />
        </Flexbox>
        ) : (
          <div>
            {props.children}
            <Flexbox className='drawer' onClick={props.expandGroupToggle}>

              <Flexbox className='drawer__center' width='100%' justifyContent='center' paddingLeft='1em' paddingRight='1em'>
                <Flexbox alignItems='center' className='drawer__center_copy'>COLLAPSE</Flexbox>
                <Flexbox><Icon className='ei arrow_carrot-up text-large' /></Flexbox>
              </Flexbox>

            </Flexbox>
          </div>
        )
    }
    </div>
  )
}

ThinCardDrawer.defaultProps = {
  expanded: false
}
ThinCardDrawer.propTypes = {
  expanded: React.PropTypes.bool,
  onClick: React.PropTypes.func

}
export default ThinCardDrawer
