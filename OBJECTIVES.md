# engineering objectives

- develop atomic and organism level components in a shared, UI component library
- provide UX teamsters a sandbox to visualize engineering's components (i.e. manifestations of mockups and styles)
- acheive the above goals without deep CSS expertise

to acheive the above, our current prototype is called [octagon](https://github.com/cdaringe/octagon).  it acheives these goals via:

- exposing importable components
  - components are currently react-semantic-ui componets, proxied through our lib
  - component API intended to be a superset (only where _necessary_) of react-semantic-ui's components
- providing a [react storybook](http://www.getstorybook.io) to show case components for UX
  - also can provide a reference and some helpful code snippets for engineering
- use a CSS framework such that we don't wear the burden of long-term maintenance
  - use a custom build of the styles framework to meet our needs
