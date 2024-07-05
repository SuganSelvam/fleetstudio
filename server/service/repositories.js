const mockCommitData = require('../mock/commit.json');
const mockDiffData = require('../mock/diff.json');

const axios = require("axios");
const gitDiffParser = require("gitdiff-parser");

const fetchCommitData = async (owner, repository, oid) => {
    const commitResponse = await axios.get(
        `https://api.github.com/repos/${owner}/${repository}/commits/${oid}`
    );
    const commitData = commitResponse.data;
    return commitData;
}

const fetchMockCommitData = async () => {
    return mockCommitData;
}

const fetchDiffData = async (owner, repository, oid) => {
    const diffResponse = await axios.get(
        `https://api.github.com/repos/${owner}/${repository}/commits/${oid}`,
        {
            headers: { Accept: "application/vnd.github.v3.diff" },
        }
    );
    const diffData = gitDiffParser.parse(diffResponse.data);
    return diffData;
}

const fetchMockDiffData = async () => {
    return mockDiffData;
}

module.exports = {
    fetchCommitData,
    fetchDiffData,
    fetchMockCommitData,
    fetchMockDiffData
}