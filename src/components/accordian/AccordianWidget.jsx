import React from 'react'
import Flexbox from 'flexbox-react'
import AccordianWidgetLabel from './AccordianWidgetLabel'
import AccordianWidgetValue from './AccordianWidgetValue'

class AccordianWidget extends React.Component {
  constructor(props) {
    super(props)

  }

  static Label = AccordianWidgetLabel
  static Value = AccordianWidgetValue

  render(){
    let borderClass = '';
    if(this.props.borderLeft){
        borderClass += 'borderLeft ';
    }
    if(this.props.borderRight){
        borderClass += 'borderRight ';
    }

    return (
        <Flexbox onClick={this.props.onClick} alignItems="center" className={` ${borderClass} ${this.props.className}`} paddingRight="15px" paddingLeft="15px" marginBottom="10px" marginTop="10px">
            {this.props.children}
        </Flexbox>
    )
  }
}

AccordianWidget.defaultProps = {
    borderLeft: false,
    borderRight: false,
}

AccordianWidget.propTypes = {
    borderLeft: React.PropTypes.bool,
    borderRight: React.PropTypes.bool,
}

export default AccordianWidget
