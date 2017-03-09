import React from 'react'
import ReactDOM from 'react-dom'
import Flexbox from 'flexbox-react'
import ThinCardTitle from './ThinCardTitle'
import ThinCardPrimaryAction from './ThinCardPrimaryAction'
import ThinCardActionButton from './ThinCardActionButton'
import ThinCardWidget from './ThinCardWidget'
import ThinCardDrawer from './ThinCardDrawer';
import '../../styles/components/thin-card.css'


class ThinCard extends React.Component {
  constructor(props) {
    super(props)

  }

  static Title = ThinCardTitle
  static PrimaryAction = ThinCardPrimaryAction
  static ActionButon = ThinCardActionButton
  static Widget = ThinCardWidget
  static Drawer = ThinCardDrawer

  render() {
    let borderClass = '';
    if (this.props.noBorder){
      borderClass = 'thincard__noborder';
    }
    if (this.props.folder){
      borderClass += ' thincard__folderpad'
    }
    return (
      <Flexbox flexDirection="column" className={`thincard__row ${borderClass}`} key={this.props.data.id}>

        {(this.props.folder) ? (
          <div className="topedge"></div>
        ) : ''
        }
        <Flexbox flexDirection="row" flexGrow={3} className="primary-content">
        {this.props.children}
        </Flexbox>
        {this.props.drawer}
      </Flexbox>
    )
  }
}
ThinCard.defaultProps = {
  folder: true,
  noBorder: false
}
ThinCard.propTypes = {
  folder: React.PropTypes.bool,
  noBorder: React.PropTypes.bool,
}
export default ThinCard
