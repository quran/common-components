# Contributing

You want to help? You rock! Now, take a moment to be sure your contributions make sense to everyone else.

## Reporting Issues

Found a problem? Want a new feature?

- See if your issue or idea has [already been reported].


## Submitting Pull Requests

Pull requests are the greatest contributions, so be sure they are focused in scope, and do avoid unrelated commits.

1. To begin, [fork this project], clone your fork, and add our [upstream].

  ```bash
  # Clone your fork of the repository into the current directory
  git clone https://github.com/<your-username>/common-components
  # Navigate to the newly cloned directory
  cd common-components
  #Assign the forked repository to a remote call "origin"
  git remote add origin git://github.com/<your-username>/common-components.git
  # Assign the original repository to a remote called "upstream"
  git remote add upstream https://github.com/quran/common-components
  # Install the tools necessary for development
  yarn install
  # or via NPM
  npm install
  ```
2. Pull latest changes from "upstream" and push these changes to your "origin"(forked)
  > NOTE - This step will repeat every time **you plan to contribute**

  ```bash
  # Pull latest changes from "upstream" repository
  git pull upstream master
  # Push latest changes to Your "origin" repository
  git push origin master
  ```
3. Create a branch for your feature or fix:

  ```bash
  # Move into a new branch for a feature
  git checkout -b feature/thing
  ```
  ```bash
  # Move into a new branch for a fix
  git checkout -b fix/something
  ```

4. Be sure your code follows our practices.

  ```bash
  # Test current code
  npm run test
  # Ensure you meet our linting rules
  npm run lint
  ```

  Our `npm run test:watch` tests and _watch_. 
  You can run `npm run lint:fix` which will fix all eslint errors.

5. Running our demo page.

  We use the awesome [react-story](https://github.com/storybooks/react-storybook)!

  ```bash
  npm run start
  ```

6. To create a PR you need to push your branch to the origin(forked) remote and then press some buttons on GitHub:
  
  ```bash
  # Push a feature branch
  git push -u origin feature/thing
  ```
  ```bash
  # Push a fix branch
  git push -u origin fix/something
  ```

  This will create the branch on your GitHub project. The ```-u``` flag links this branch with the remote one, so that in the future, you can simply type ```git push origin```.

7. Now [open a pull request] with a clear title and description.


[upstream]: https://help.github.com/articles/syncing-a-fork/
[already been reported]: https://github.com/quran/quran.com-frontend/issues
[fork this project]:     https://github.com/quran/quran.com-frontend/fork
[open a pull request]:   https://help.github.com/articles/using-pull-requests/
