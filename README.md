# voyage-tasks

![Linters](https://github.com/chingu-voyages/v33-bears-team-15/workflows/Linters/badge.svg)

![Test with jest](https://github.com/chingu-voyages/v33-bears-team-15/workflows/Test%20with%20jest/badge.svg)

#### Setting up Pre-Commit Hook

- Set up the husky pre-commit hook according to [instructions](https://github.com/typicode/husky)
- The `husky` tool is already added in package.json, so run `npm install` and then

```
npm run prepare
npx husky add .husky/pre-commit "npm run test && npm run lint"
git add .husky/pre-commit
```

Your project's `readme` is as important to success as your code. For
this reason you should put as much care into its creation and maintenance
as you would any other component of the application.

If you are unsure of what should go into the `readme` let this article,
written by an experienced Chingu, be your starting point -
[Keys to a well written README](https://tinyurl.com/yk3wubft).

And before we go there's "one more thing"! Once you decide what to include
in your `readme` feel free to replace the text we've provided here.

> Own it & Make it your Own!
