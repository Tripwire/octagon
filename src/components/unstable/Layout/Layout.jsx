import './Layout.css'
import { generic } from '../../../util/component-factory'

const Layout = generic({ name: 'Layout', className: 'layout__container' })
Layout.Header = generic({ name: 'LayoutHeader', className: 'layout__header' })
Layout.Nav = generic({ name: 'LayoutNav', className: 'layout__nav' })
Layout.Body = generic({ name: 'LayoutBody', className: 'layout__body' })

export default Layout
