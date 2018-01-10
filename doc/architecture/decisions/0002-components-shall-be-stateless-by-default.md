# 2. Components shall be stateless by default

Date: 2018-01-09

## Status

Trial

## Context

Octagon strives to be a view layer for consumers.  Applications manage their state via their own independent mechanisms.  State embedded in Octagon componets may reduce the declaritive capabilities of components & the React mantra, and deviate from the pure view layer mantra we wish to provide.  Embedded state reduces the ablitity for apps to "declare" Octagon components into view state.

Example, if a `<OctoNavItem />` maintains state on whether that navigation page is active or not, if a user reloaded the page, an active item may suddenly show as not active.

Instead, the API should be stateless, and be used like: `<OctoNavItem active />`.

Now, the user of the view layer is in control.

## Decision

Make things stateless.  In rare cases, some emphemeral state is OK to maintain internally to components.  These should be highlighted, drawn out, and discussed before merge.  Ideally, these issues should be raised during design, pre-merge if a feature branch is longer running.

## Consequences

Interactive examples need to bring stateful APIs, which means designing interactive documentation may be higher cost.
