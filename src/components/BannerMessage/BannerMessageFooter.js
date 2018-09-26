import React from 'react'
import { Button } from 'semantic-ui-react'

/**
 * Footer for BannerMessage. Content is centered
 */

const BannerMessageFooter = props => {

  const { children, alignment, center, right, ...rest } = props
  const getAlignment = () => {
  	const defaultAlignment = "banner-message__footer-center"
  	if (center || (alignment && alignment == "center")) return defaultAlignment
		if (right || (alignment && alignment == "right")) return "banner-message__footer-right"
  	return defaultAlignment
  }
	const alignmentCN = getAlignment()

  const getAlertIconClass = status => {
  	if (status == "success") {
			return "icon_check_alt2"
		} else if (status == "information" || "info") {
			return "ei icon_info_alt"
		} else if (status == "warning") {
			return "ei icon_error-triangle_alt"
		} else if (status == "error") {
			return "ei icon_error-circle_alt"
		}
  }

  return (
    <div className={`banner-message__footer ${alignmentCN}`}>{children}</div>
  )
}

export default BannerMessageFooter