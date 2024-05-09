
# Contributing Guide

## Creating an issue
Before creating an Issue for `features`/`bugs`/`improvements` please follow these steps:
1. search existing Issues before creating a new issue (has someone raised this 1.already)
2. if it doesn't exist create a new issue giving as much context as possible (please select the correct Issue type, for example bug or feature)

## Working on an Issue (get it assigned to you)

Before working on an existing Issue please follow these steps:
> All the prs should be made to stage branch instead of master. They will be checked and verified then only they will be merged to master.
1. only ask to be assigned 1 issue at a time
2. comment asking for the issue to be assigned to you
3. after the Issue is assigned to you, you can start working on it
4. **only** start working on this Issue (and open a Pull Request) when it has been assigned to you - this will prevent confusion, multiple people working on the same issue and work not being used
5. while making a pr make sure to add screenshots about the result after fixing the assigned issue
6. Don't leak api keys or secrets in the pr
7. Commit messages should descriptive and follow message format. Otherwise they will not merged

### Connecting to supabase 
1. Try to use supabase service in form of edge functions. Create function if not present using the [backend repo](https://github.com/ArnabChatterjee20k/PickPalette-Backend/blob/main/packages/supabase-edge-functions/Readme.md). Deploy them and serve
2. Don't invoke supabase functions directly rather use the url or api or http format and make custom fetch requests. This will remove cases of vendor lockin and can be easily replacable by custom application or api layer

## Commit Message Format

When making commits to this project, please follow the following format based on the type of change:

- **Feature:** Use the format `feat -- [description]` for feature-related commits.
  Example: `feat -- Added a new user authentication system.`

- **Bug Fix:** Use the format `bug -- [description]` for bug fix-related commits.
  Example: `bug -- Fixed a critical issue causing data loss.`

- **Styling:** Use the format `style -- [description]` for commits related to code styling changes.
  Example: `style -- Improved code formatting and indentation.`

- **Setup:** Use the format `setup -- [description]` for commits related to changes in components or directory structure.
  Example: `setup -- Refactored the components directory for better organization.`

Please ensure that your commit messages are concise, descriptive, and provide a clear understanding of the changes made in each commit.