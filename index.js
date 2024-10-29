const express = require('express')
require('dotenv').config()

const app = express()
const port = 4000


const githubData = {
    "login": "Shaquibkhandbg",
    "id": 83205250,
    "node_id": "MDQ6VXNlcjgzMjA1MjUw",
    "avatar_url": "https://avatars.githubusercontent.com/u/83205250?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Shaquibkhandbg",
    "html_url": "https://github.com/Shaquibkhandbg",
    "followers_url": "https://api.github.com/users/Shaquibkhandbg/followers",
    "following_url": "https://api.github.com/users/Shaquibkhandbg/following{/other_user}",
    "gists_url": "https://api.github.com/users/Shaquibkhandbg/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Shaquibkhandbg/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Shaquibkhandbg/subscriptions",
    "organizations_url": "https://api.github.com/users/Shaquibkhandbg/orgs",
    "repos_url": "https://api.github.com/users/Shaquibkhandbg/repos",
    "events_url": "https://api.github.com/users/Shaquibkhandbg/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Shaquibkhandbg/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 4,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2021-04-26T06:49:12Z",
    "updated_at": "2024-09-20T12:52:11Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res)=> {
    res.send('@shaquibkhandbg')
})

app.get('/login', (req,res)=> {
    res.send('<h1> Please login at coinhaat </h1>');
    
})

app.get('/github',(req,res)=> {
    res.json(githubData);
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
