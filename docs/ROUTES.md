### What is Project Colocation?

Project colocation is a concept in Next.js that says the files can be located inside the project and cannot be accessed from outside.

For example:

The file page.tsx for any given route can be accessed from outside but the same folder may contain other files within that folder that cannot be accessed from outside.

### What is Private Folders?

Private folders in Next.js are used to place non-routing files.

They are used for:

- [x] For separating UI logic from routing logic
- [x] For consistently organizing internal files across a project
- [x] For sorting and grouping files in code editors
- [x] And finally, for avoiding potential naming conflicts with future Next.js file convetions

If you want to include an underscore in URL segments, you can prefix the folder name with "%5F" which is the URL-encoded form of an underscore.
