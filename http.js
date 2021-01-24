import axios from "axios";

export const getIgResponse = async (userId, sessionId, queryHash, nextPage) => {
    const BASE_URL = "https://www.instagram.com/graphql/query/";
    const headers = {
        Cookie: `ds_user_id=${userId};sessionid=${sessionId};`,
    };
    const queryParams = new URLSearchParams();
    queryParams.set("query_hash", queryHash);
    queryParams.set("variables", getVariables(userId, nextPage));

    return (await axios.get(`${BASE_URL}?${queryParams.toString()}`, {
        headers,
    })).data;
}

const getVariables = (userId, nextPage) => {
    const variables = {
        id: userId,
        first: 100,
    };

    if (nextPage) {
        variables.after = nextPage;
    }

    return JSON.stringify(variables);
}; 