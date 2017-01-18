# contributing

- small focused PRs.  `rebase -i` can be your friend!
- lint all of the things! `npm run lint`/`yarn run lint`

# Contributing to Node.js

## code of conduct

The Code of Conduct (CoC) explains the *bare minimum* behavior
expectations this project requires of its contributors.  We adhere to the nodejs CoC.
[Please read it before participating.](https://github.com/nodejs/node/blob/master/CODE_OF_CONDUCT.md).

## issue contributions

When opening new issues or commenting on existing issues on this repository
please make sure discussions are related to concrete technical issues with our package.

## code contributions

this document will guide you through the contribution process.

### step 1: fork

Fork the project [on GitHub](https://github.com/Tripwire/octagon) and check out your
copy locally.

```text
$ git clone git@github.com:username/octagon.git
$ cd octagon
$ git remote add upstream git://github.com/Tripwire/octagon.git
```

#### which branch?

For developing new features and bug fixes, the `master` branch should be pulled
and built upon.

### step 2: branch

Create a branch and start hacking:

```text
$ git checkout -b my-branch -t origin/master
```

### step 3: commit

we follow the default settings for [semantic-release](https://github.com/semantic-release/semantic-release).  please see [the default commit message format](https://github.com/semantic-release/semantic-release#default-commit-message-format) for participation instructions.

commits should be small, targetted, and focused.  unfocused changes need to be split into multiple PRs and are subject to friendly but stubborn rejection.

### step 4: test

Bug fixes and features **should come with tests**.  Ideally, screenshots and snapshots are included for visual targetted changes.

### step 5: push

```text
$ git push origin my-branch
```

Go to https://github.com/yourusername/octagon and select your branch.
Click the 'Pull Request' button and fill out the form.

Pull requests are usually reviewed within a few days.

### step 6: discuss and update

You will probably get feedback or requests for changes to your Pull Request.
This is a big part of the submission process, so don't be disheartened!

To make changes to an existing Pull Request, make the changes to your branch.
When you push that branch to your fork, GitHub will automatically update the
Pull Request.

You can push more commits to your branch:

```text
$ git add my/changed/files
$ git commit
$ git push origin my-branch
```

Or you can rebase against master:

```text
$ git fetch --all
$ git rebase origin/master
$ git push --force-with-lease origin my-branch
```

Or you can amend the last commit (for example if you want to change the commit
log).

```text
$ git add any/changed/files
$ git commit --amend
$ git push --force-with-lease origin my-branch
```

**Important:** The `git push --force-with-lease` command is one of the few ways
to delete history in git. Before you use it, make sure you understand the risks.
If in doubt, you can always ask for guidance in the Pull Request or on
[IRC in the #node-dev channel](https://webchat.freenode.net?channels=node-dev&uio=d4).

Feel free to post a comment in the Pull Request to ping reviewers if you are
awaiting an answer on something. If you encounter words or acronyms that
seem unfamiliar, check out this
[glossary](https://sites.google.com/a/chromium.org/dev/glossary).

Note that multiple commits often get squashed when they are landed (see the
notes about [commit squashing](#commit-squashing)).

### step 7: landing

In order to get landed, a Pull Request needs to be reviewed and
[approved](#getting-approvals-for-your-pull-request) by
at least one Tripwire collaborator and pass a
[CI (Continuous Integration) test run](#ci-testing).
After that, as long as there are no objections
from a Collaborator, the Pull Request can be merged.

When a collaborator lands your Pull Request, they will post
a comment to the Pull Request page mentioning the commit(s) it
landed as. GitHub often shows the Pull Request as `Closed` at this
point, but don't worry. If you look at the branch you raised your
Pull Request against (probably `master`), you should see a commit with
your name on it. Congratulations and thanks for your contribution!


### pull request approvals

A Pull Request is approved either by saying "+1" or a thumbs up emoji.  If the author
has merge access, he/she may merge after getting collaborator approval.  Otherwise,
the collaborator should recognize the case where the change author does not have
merge access, and should merge on behalf of the author.

GitHub's Pull Request review feature can be used during the process.
For more information, check out
[the video tutorial](https://www.youtube.com/watch?v=HW0RPaJqm4g)
or [the official documentation](https://help.github.com/articles/reviewing-changes-in-pull-requests/).

After you push new changes to your branch, you need to get
approval for these new changes again, even if GitHub shows "Approved"
because the reviewers have hit the buttons before.

### CI Testing

Every Pull Request needs to be tested.  CI tests are autmoated and require no extra
effort on behalf o fo the author.
