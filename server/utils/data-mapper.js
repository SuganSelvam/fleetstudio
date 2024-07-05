const mapCommitDataForResponse = (data) => {
    return {
        oid: data.sha,
        message: data.commit.message,
        author: {
            name: data.commit.author.name,
            date: data.commit.author.date,
            email: data.commit.author.email,
            avatar_url: data.author.avatar_url,
        },
        committer: {
            name: data.commit.committer.name,
            date: data.commit.committer.date,
            email: data.commit.committer.email,
        },
        parents: data.parents.map(parent => ({
            oid: parent.sha,
        })),
    };
}

const mapDiffDataForResponse = (data) => {
    return data.map(diff => (
         {
            headFile: {
                path: diff.newPath
            },
            baseFile: {
                path: diff.oldPath
            },
            hunks: diff.hunks.map(hunk => ({
                header: hunk.content,
                lines: hunk.changes.map(change => ({
                    baseLineNumber: change.type === 'delete' ? change.lineNumber : change.oldLineNumber,
                    headLineNumber: change.type === 'insert' ? change.lineNumber : change.newLineNumber,
                    content:change.content,
                    type: change.type
                }))
            }))

        })
    )
}


module.exports = { mapCommitDataForResponse, mapDiffDataForResponse }