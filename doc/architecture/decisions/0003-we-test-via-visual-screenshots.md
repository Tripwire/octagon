# 3. we test via visual screenshots

date: 2018-01-25

## status

accepted

## context

how to test UI code is a long, complicated, and contested topic.  unit test code is welcome in this project, but outside the scope of this decision.

- visual changes are subtle & difficult to detect
- small CSS changes can have large, cascading effects across a web app

due to high risks in subtle changes, we test our components visually, and track changes.

## decision

- we shall take screenhots of components we develop and components we import
- we shall check in our screenshots into change control
- we shall test screenshot changes onchange
- we shall capture screenshots out of real browser engines, not mock browsers

completeness of component coverage is not defined in this decision.  tooling used to realize this decision is not defined in this decision.

## consequences

- cost of ownership is high
  - tooling is generally complicated
  - tests are often slow
  - browser coverage may be limited

