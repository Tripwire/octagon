import '../../../styles/components/thin-card.css'
import Flexbox from 'flexbox-react'
import PropTypes from 'prop-types'
import React from 'react'
import filterAttributesFromProps from '../../../util/externalAttributeFilter'
import ThinCardTitle from './ThinCardTitle'
import ThinCardPrimaryAction from './ThinCardPrimaryAction'
import ThinCardActionButton from './ThinCardActionButton'
import ThinCardWidget from './ThinCardWidget'
import ThinCardDrawer from './ThinCardDrawer'

class ThinCard extends React.Component {
  render () {
    let borderClass = ''
    if (this.props.noBorder) {
      borderClass = 'thincard__noborder'
    }
    if (this.props.folder) {
      borderClass += ' thincard__folderpad'
    }
    const externalAttributes = filterAttributesFromProps(this.props)
    return (
      <Flexbox
        {...externalAttributes}
        flexDirection='column'
        className={`octagon thincard__row ${borderClass} ${this.props.className}`}
        key={this.props.data.id}>

        {(this.props.folder) ? (
          <div className='topedge' />
        ) : ''
        }
        <Flexbox flexDirection='row' flexGrow={3} className='primary-content'>
          {this.props.children}
        </Flexbox>
        {this.props.drawer}
      </Flexbox>
    )
  }
}
ThinCard.Title = ThinCardTitle
ThinCard.PrimaryAction = ThinCardPrimaryAction
ThinCard.ActionButton = ThinCardActionButton
ThinCard.Widget = ThinCardWidget
ThinCard.Drawer = ThinCardDrawer
ThinCard.defaultProps = {
  folder: true,
  noBorder: false
}
ThinCard.propTypes = {
  folder: PropTypes.bool,
  noBorder: PropTypes.bool
}
export default ThinCard
