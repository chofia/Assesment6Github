# Assesment6
This is my step by step github example. 

This is my example of how to: 
  - Create a Branch 
  - Pull from a Branch
  - Push to a Branch
  - Merge with Master 
  - Fork 
  - Add a Collaborator

GitHub.com
New repository

Creating a branch, pull, merge, push
- On the terminal, navigate to your local repository
- $ git checkout -b assesmentBranch
    - This is a shortcut for creating a new branch and then switching to that branch
- $ git push origin assesmentBranch
    - This pushes the branch to GitHub
- Added an index.html file to GitHub and pulled it into my assesmentBranch from terminal
    - $ git pull origin master
- Added mymean assesment to assesmentBranch
    - $ git pull origin master
- Added mymean-angular assessment to assesmentBranch to merge
    - $ git checkout master
    - $ git merge assesmentBranch
    - $ git add .
    - $ git commit -m”merged files”
    - $ git push origin master

Add a collaborator 
- On GitHub go to repository
- Select Settings 
- Navigate to Collaborators
- Enter a username and hit Add Collaborator when finished
- I added Octocat

Fork a repository
- I am forking from Erics 8-ball repository
- Hit fork that is at the right of the screen
- Adds repository to your GitHub profile
