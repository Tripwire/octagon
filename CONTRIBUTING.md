# contributing

## development

`octagon` offers two mechanisms to support development:

- `npm run dev` - watch the source code & rebuild the library onchange
  - this mode is **strongly** recommended when developing octagon and linking it into a consuming project
    - to develop this library in real-time whilst using it in another project:
      - run `npm link` in this project's source
      - run `npm link react-octagon` in the consuming project's source

- `npm start` - launch the interactive styleguide.  see more below.
### styleguide

- run `npm start`
- open the URL (probably `localhost:6060`) to play w/ components as you develop them

this will launch the styleguide. all of you changes to files are hot-reloaded. if you want to ship a production version your will need to test and build octagon.

### building components

when building components, please follow our [Architecture Decisions](github.com/Tripwire/octagon/blob/master/doc/architecture/decisions). each component should include an accompanying example in a markdown file.

#### react-based functional stateless components

octagon components are considered view-layer components and should generally be functional stateless components (see [ADR002](https://github.com/Tripwire/octagon/blob/master/doc/architecture/decisions/0002-components-shall-be-stateless-by-default.md)).
- How to handle state is decided by the app (e.g. dealing with page number errors or and actual page number)
- Positioning of the component will be decided by the app (e.g. 4px padding on the right and left)

```js

<div style={{padding: '4px 0'}}>
  <PaginationControl
    page={state.page}
    totalPages={20}
    onPageChange={obj => {
      if (obj.error) {
        console.error(obj.error)
      } else {
        setState({ page: obj.page})
      }
    }}
  />
</div>

```

#### native octagon component styles

native octagon components use [cssnext](http://cssnext.io) and should follow [BEM CSS Standards](https://en.bem.info/methodology/css/). the styles below show a `block`, `element`, and `modifier`.

```css
.pagination {
  display: inline-block;
  height: 30px;
  color: #657d8e;
  margin: 0 4px;
  background-color: white;
}

.pagination__button {
  border: 1px solid #bdc3c7;
  color: #657d8e;
  background-color: white;
  cursor: pointer;
  display: inline-block;
  padding: 0px;
  font-size: 28px;
  max-height: 30px;
}

.pagination__page-number_total-pages-unknown {
  font-size: 20px;
  line-height: 15px;
  vertical-align: baseline;
}

```

#### SUIR octagon component styles

SUIR octagon components use LESS for styling. more information can be found on [Semantic UI's themeing page](https://semantic-ui.com/usage/theming.html). to theme SUIR components, navigate to your theme folder, `src/semantic-ui-theme`, and add your styles in the to the component's: `.variables` and `.overides` files.
(e.g. button.variables & button.overrides)

### build for production

- **build octagon** `npm run build`
  - this will create the lib bundle which will contain production build
  - this can be ingested by applications to use Octagon components
- **build styleguide** `npm run styleguide:build`
  - this will create the Styleguide folder and run Styleguidist
  - note: this build is what is currently used for testing
- **test octagon**
  - both automated and manual tests ([see testing info](#step-4-test))
- **make sure your component meets the [acceptance criteria](#acceptance-criteria)**

## code of conduct

the code of conduct (coc) explains the *bare minimum* behavior
expectations this project requires of its contributors.  we adhere to the nodejs coc.
[please read it before participating](https://github.com/nodejs/node/blob/master/code_of_conduct.md).

## issue contributions

when opening new issues or commenting on existing issues on this repository
please make sure discussions are related to concrete technical issues with our package.

## code contributions

this document will guide you through the contribution process.

### step 1: fork

fork the project [on github](https://github.com/tripwire/octagon) and check out your
copy locally.

```text
$ git clone git@github.com:username/octagon.git
$ cd octagon
$ git remote add upstream git://github.com/tripwire/octagon.git
```

#### which branch?

for developing new features and bug fixes, the `master` branch should be pulled
and built upon.

### step 2: branch

create a branch and start hacking:

```text
$ git checkout -b my-branch -t origin/master
```

### step 3: commit

we follow the default settings for [semantic-release](https://github.com/semantic-release/semantic-release).  please see [the default commit message format](https://github.com/semantic-release/semantic-release#default-commit-message-format) for participation instructions.

commits should be small, targetted, and focused.  unfocused changes need to be split into multiple prs and are subject to friendly but stubborn rejection.

### step 4: test

- run Standard linter to ensure code formatting is correct (or set up your editor to automate this)
- run `npm test` to use our tests against your changes including webjerk image diffing
- **tests will likely initially fail if you have created or updated a component. this is because we are using [Snapjerk](https://www.npmjs.com/package/snapjerk) image-diffing software.**
> if you approve of the changes Snapjerk displays you need will to update the reference set:
> - new images: set WEBJERK_ALLOW_NEW_IMAGES=1 in your env
> - new changed images: set WEBJERK_APPROVE_CHANGES=1 in your env
> - removed images: simply remove the images from your reference set
- manually test against modern browsers (Chrome evergreen, FF evergreen, & Edge)

### step 5: push

```text
$ git push origin my-branch
```

go to https://github.com/yourusername/octagon and select your branch.
click the 'pull request' button and fill out the form.

pull requests are usually reviewed within a few days.

### step 6: discuss and update

you will probably get feedback or requests for changes to your pull request.
this is a big part of the submission process, so don't be disheartened!

to make changes to an existing pull request, make the changes to your branch.
when you push that branch to your fork, github will automatically update the
pull request.

you can push more commits to your branch:

```text
$ git add my/changed/files
$ git commit
$ git push origin my-branch
```

or you can rebase against master:

```text
$ git fetch --all
$ git rebase origin/master
$ git push --force-with-lease origin my-branch
```

or you can amend the last commit (for example if you want to change the commit
log).

```text
$ git add any/changed/files
$ git commit --amend
$ git push --force-with-lease origin my-branch
```

**important:** the `git push --force-with-lease` command is one of the few ways
to delete history in git. before you use it, make sure you understand the risks.
if in doubt, you can always ask for guidance in the pull request or on
[irc in the #node-dev channel](https://webchat.freenode.net?channels=node-dev&uio=d4).

feel free to post a comment in the pull request to ping reviewers if you are
awaiting an answer on something. if you encounter words or acronyms that
seem unfamiliar, check out this
[glossary](https://sites.google.com/a/chromium.org/dev/glossary).

note that multiple commits often get squashed when they are landed (see the
notes about [commit squashing](#commit-squashing)).

### step 7: landing

in order to get landed, a pull request needs to be reviewed and
[approved](#getting-approvals-for-your-pull-request) by
at least one tripwire collaborator and pass a
[ci (continuous integration) test run](#ci-testing).
after that, as long as there are no objections
from a collaborator, the pull request can be merged.

when a collaborator lands your pull request, they will post
a comment to the pull request page mentioning the commit(s) it
landed as. github often shows the pull request as `closed` at this
point, but don't worry. if you look at the branch you raised your
pull request against (probably `master`), you should see a commit with
your name on it. congratulations and thanks for your contribution!


### pull request approvals

a pull request is approved either by saying "+1" or a thumbs up emoji. if the author
has merge access, he/she may merge after getting collaborator approval. otherwise,
the collaborator should recognize the case where the change author does not have
merge access, and should merge on behalf of the author.

github's pull request review feature can be used during the process.
for more information, check out
[the video tutorial](https://www.youtube.com/watch?v=hw0rpajqm4g)
or [the official documentation](https://help.github.com/articles/reviewing-changes-in-pull-requests/).

after you push new changes to your branch, you need to get
approval for these new changes again, even if github shows "approved"
because the reviewers have hit the buttons before.

### acceptance criteria

1. component has been reviewed by at least one technical project member
1. component has been reviewed by UX team member
1. component passes all [tests](#step-4-test) (automated and manual)
1. component has sufficient examples to prove prove handling of various states
1. component includes `data-hooks` for QA testing

## resources

- [BEM](https://en.bem.info/methodology/css)
- [CSS Next](http://cssnext.io/)
- [React](https://reactjs.org)
- [Semantic UI Less](https://github.com/Semantic-Org/Semantic-UI-LESS)
- [Semantic UI React](https://react.semantic-ui.com/introduction)
- [Semantic UI](https://semantic-ui.com)
- [Snapjerk](https://www.npmjs.com/package/snapjerk)
- [Styleguidist](https://github.com/styleguidist/react-styleguidist)
