# 2. Components shall be stateless by default

Date: 2018-01-09

## Status

Trial

## Context

Octagon strives to be a view layer for consumers.  Applications manage their state via their own independent mechanisms.  State embedded within Octagon components may reduce the declaritive ability of said components & violate the top-down, _"config via props"_ React mantra.  Consequently, stateful components generally deviate from the pure view layer goals we wish to provide.  Embedded state reduces the ablitity for apps to "declare" Octagon components into view state.

Example, consider if a `<OctoNavItem />` maintains state on whether or not that navigation page is active or not.  If a user reloaded the page, an active item may suddenly show as not active, because that component's state is lost on reload.

Instead, the API should be stateless, and be used like: `<OctoNavItem active />`.

Now, the user of the view layer is in control.

## Decision

Make things stateless.  In rare cases, some emphemeral state is OK to maintain internally to components.  These should be highlighted, drawn out, and discussed before merge.  Ideally, these issues should be raised during design, pre-merge if a feature branch is longer running.

## Consequences

Interactive examples need to bring stateful APIs, which means designing interactive documentation may be higher cost.
