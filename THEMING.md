# theming octagon

octagon extends and modifies the [semanic-ui](http://semantic-ui.com/usage/theming.html) framework.

the [theming](http://semantic-ui.com/usage/theming.html) page explains the general concepts on how to modify the theme.  for a practical crash course, beyond the official docs, here's a breif way to jump into modifying our theme.

## theming crash course

![](https://github.com/cdaringe/octagon/blob/master/img/theme-change-reload.mov.gif?raw=true)
_the build process is a little slow at the moment--it may take a few seconds for the UI to be updated after you've made a change._

- boot your storybook via `yarn start`
- look at the `semantic/` dir in this project.  this is where our theme lives!
  - semantic-ui exports a "default" theme. we will take that default theme and modify it to our needs
- suppose you want to edit how a `Button` looks
  - let's say you don't like the `border-radius` used in the default theme, as shown in our stories
  - first you need to know what you can edit easily, right out of the box. i'd bet `border-radius` has a variable we can tweak.
  - `semantic/src/themes/default/element/button.variables` has all of the theme's default button variables referenced in it
    - in fact `semantic/src/themes/default/` has all of the default variables used to scaffold up the whole theme's styles!  you'll look here often!
  - you can browse around in the `button.variables` file and see that `@borderRadius: @defaultBorderRadius;`
    - finding the right variable is generally an exploration process, but the themes _are_ well organized.  get your :eyeglasses: ready!
    - FYI, these variables are in `less` syntax, a CSS language.  you can configure your editor to colorize `less` syntax, which is helps :)
  - great!  let's not change the value _here_, instead, we will change it in _our_ theme, not the _default_ theme
    - edit `semantic/site/elements/button.variables` and set `@borderRadius: 6px;`
      - `semantic/site/` is where our theme's overrides live!  you will do most of your editing in here!
    - once you save, the styles will _auto compile_ into CSS, and our storybook will update automatically!
