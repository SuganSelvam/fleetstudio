const { fetchMockCommitData, fetchMockDiffData, fetchCommitData, fetchDiffData } = require("../service/repositories");
const { mapCommitDataForResponse, mapDiffDataForResponse } = require("../utils/data-mapper");
require("dotenv").config();


const getCommitData = async (req, res) => {
    
    let commitData;
    const env = process.env.APP_MODE;
    
    try {
        if (!env || env === "development") {
            commitData = await fetchMockCommitData();
        } else {
            commitData = await fetchCommitData(req.params.owner, req.params.repository, req.params.oid);
        }

        commitData = mapCommitDataForResponse(commitData);
        res.json({ commit: commitData });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error fetching commit data" });
    }
};

const getDiffData = async (req, res) => {
    
    let diffData;
    const env = process.env.APP_MODE;

    try {
        if (!env || env === "development") {
            diffData = await fetchMockDiffData();
        } else {
            diffData = await fetchDiffData(req.params.owner, req.params.repository, req.params.oid);
        }

        diffData = mapDiffDataForResponse(diffData);
        res.json({ diff: diffData });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error fetching diff data" });
    }
};


module.exports = {
    getCommitData,
    getDiffData,
};
