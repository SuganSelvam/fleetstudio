/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import DiffDetailsByFile from "./diff-details-by-file";
import PageLoader from "./page-loader";

function DiffComponent( { owner, repository, commitSHA } ) {
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ["diffDetails"],
        queryFn: () => {
            return fetchDiffDetails();
        },
    });

    async function fetchDiffDetails() {
        return fetch(
            `http://localhost:4000/repositories/${owner}/${repository}/commit/${commitSHA}/diff`
        )
            .then((response) => response.json())
            .then((data) => data);
    }

    if (isLoading) {
        return <PageLoader />;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="container flex gap-6 flex-col pb-12">
            {
                data.diff.map((item) => {
                    return (
                        <div key={Math.random()}>
                            <DiffDetailsByFile diffDetails={item} />
                        </div>
                    )
                })
            }
        </div>
    );
}

export default DiffComponent;
