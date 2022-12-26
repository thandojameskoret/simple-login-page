## Getting Started

- Create a new private repo on github.[Follow the instructions here.](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository)
- Bare clone this repo  
  `git clone --bare https://github.com/thandojameskoret/simple-login-page.git`
- Mirror-push the cloned repo to the private repo you created in step 2  
  `cd simple-login-page`  
  `git push --mirror https://github.com/exampleuser/new-repository.git`
- Remove the local repo you cloned in step 2  
  `cd ..`  
  `rm -rf simple-login-page`
- Add [Thando James](https://github.com/thandojameskoret) as a reviewer

To run the development server do the following:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Assignment

- Create the following page as displayed [here.](https://simple-login-page-hazel.vercel.app/)
- Add validation of the name, email and password inputs for when a user clicks the create account button. The validation should not only check if the fields populated but also if the email is a valid email and if the password created adheres to the [Muhlenberg password guidelines](https://www.muhlenberg.edu/offices/oit/about/policies_procedures/strong-passwords.html)

## Submission

Create a separate branch from the main branch with your changes and create a pull request with the above reviewers.
