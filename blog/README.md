# How to write and publish an article

1. Check article ideas on Notion and pick a subject: https://www.notion.so/Ideas-aad440c2da434da395e110d4236fe0d4#359157c2cab641d69635448a8d518e55
2. Create a folder for the article with an "img" folder and "index.js", "index.mdx", "versions.json", "notes.txt" files (use template).
3. Copy the path of the article's folder in the ".gitignore" file to ensure that the article is not commited on the main site until finished.
4. Copy and paste the top of a previous article, that is the metatags and the ToC, and adjust the title.
5. Lay down my initial ideas in the notes. Start to draw a plan for the article.
6. Do some research while taking notes.
7. Once I feel I've enough information, start writing in "index.mdx". ("index.js" is for the code: testing it in the console and/or formatting it)
8. During the process of writing:
   1. Once a session is finished, do a git commit with the following format: [start (if first session for the article); ip (if in progress); end (if last session for the article)] v[number]: [article title]
   2. Plan to come back on it (if not finished) within 3 days max (because otherwise I loose a lot of time reloading the context at each session)
   3. Obviously, I can do more research if needed. But make sure to separate writing and research enough by allocating them different chunks of time.
9. Once the article is finished:
   1. Adjust the metatags of the article.
   2. Fill out the "versions.json" file.
   3. Commit in the "/blog" folder. (see step 8.1)
   4. Publish it on freeCodeCamp (https://www.freecodecamp.org/news/ghost/#/site) OR (no cross-publishing) Medium (https://medium.com/ ; use publications), DEV (https://dev.to/) and my site (remove the article's folder path from ".gitignore", "gs" => "ga" if ok => "gc" => "gpush" => check that the deployment is successful: https://app.netlify.com/sites/yannsalmon/overview)
10. Plan to check the comments on medium and dev.to for the next 3 days.






