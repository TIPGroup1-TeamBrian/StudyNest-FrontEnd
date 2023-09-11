# StudyNest
Team project repository for 2023 s2 Technology Inquiry Project 


# For the team:

## Developement instruction:

### `create new branch from the jira ticket`

**Always create a new branch from your assigned Jira task, DO NOT TOUCH THE CODE IN MAIN BRANCH :**

<div style="text-align:center">
<img src="./studynest-frontend/public/Screenshot 2023-09-11 at 10.18.32 am.png" width="400"><br><br>
</div>
you will be directed to another page to choose the code repo and the branch to branch from.

<div style="text-align:center">
<img src="./studynest-frontend/public/Screenshot 2023-09-11 at 10.21.26 am.png" width="400" >
</div>

`Remember to always branch from "main" and leave the branch name as default, do not change the branch name` 

### `Configure local dev environment`

After pulling the new code every time, please remember to navigate to the correct directory where the "package.json" is located (through VS code terminal) and redo the install command everytime:
```
npm install 
```

To start the react server:

```
npm run start 
```


### `Useful Documentation/Reference`

React JS: [React Offical Document](https://react.dev/learn/describing-the-ui)

Tailwind CSS: [Tailwind css official Document](https://tailwindcss.com/)


### `Merging your branch to main branch when you finish the implementation`

This would be the trickiest part for using version control in our repo:

1. After you pushed your local code to Github, you'll need to perform a "merge operation" to the main branch 
2. Currently direct merge into the main branch is disble, you'll need to create a "pull request", for more information please see [Official documentation for pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)
