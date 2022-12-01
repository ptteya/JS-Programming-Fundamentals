function comments(input) {
    let commentsObj = {};
    let userList = [];
    let articleList = [];

    for (let entry of input) {
        if (entry.includes('user')) {
            let username = entry.split("user ")[1];
            userList.push(username);
        } else if (entry.includes('article')) {
            let articleName = entry.split("article ")[1];
            articleList.push(articleName);
        } else if (entry.includes("posts on")) {
            let [username, articleInfo] = entry.split(" posts on ");
            let [articleName, commentInfo] = articleInfo.split(": ");
            let [commentTitle, commentContent] = commentInfo.split(", ");

            if (userList.includes(username) && articleList.includes(articleName)) {
                if (!commentsObj.hasOwnProperty(articleName)) {
                    commentsObj[articleName] = {};
                    commentsObj[articleName].commentsCount = 0;
                }
                commentsObj[articleName].commentsCount += 1;
                commentsObj[articleName][username] = [commentTitle, commentContent];
            }
        }
    }

    let articlesByCount = Object.keys(commentsObj).sort((a, b) => commentsObj[b].commentsCount - commentsObj[a].commentsCount);

    for (let article of articlesByCount) {
        delete commentsObj[article].commentsCount;
        console.log(`Comments on ${article}`);

        let usernames = Object.keys(commentsObj[article])
        let sortedByUsername = usernames.sort((a, b) => {
            return a.localeCompare(b);
        })

        sortedByUsername.forEach(username => console.log(`--- From user ${username}: ${commentsObj[article][username][0]} - ${commentsObj[article][username][1]}`));
    }
}
comments(['user Mark', 'Mark posts on someArticle: NoTitle, stupidComment', 'article Bobby', 'article Steven', 'user Liam', 'user Henry', 'Mark posts on Bobby: Is, I do really like them', 'Mark posts on Steven: title, Run', 'someUser posts on Movies: Like'])