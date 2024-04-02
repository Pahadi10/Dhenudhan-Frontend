import * as React from 'react'
import * as PropTypes from 'prop-types'
import root from 'react-shadow'

import StaticContentInjector, {
  staticContentPropTypes,
} from '../static-content-injector/static-content-injector.component'

// Make sure that `staticContent` is either memoized or that it's a single reference (e.g. global variable)
const Embeddable = ({ staticContent, children }) => (
  <root.div className="embeddable">
    <StaticContentInjector {...staticContent}>{children}</StaticContentInjector>
  </root.div>
)

Embeddable.propTypes = {
  staticContent: PropTypes.shape(staticContentPropTypes),
  children: PropTypes.node,
}

Embeddable.defaultProps = {
  staticContent: {},
}

export default Embeddable
