/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import PageLoader from "./page-loader";

function DetailsComponent( { owner, repository, commitSHA } ) {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["commitDetails"],
    queryFn: () => {
      return fetchCommitDetails();
    },
  });

  async function fetchCommitDetails() {
    return fetch(
      `http://localhost:4000/repositories/${owner}/${repository}/commit/${commitSHA}`
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
    <div className="container my-8 flex gap-14 items-end">
      <div className="w-7/12 flex gap-2">
        <img
          className="w-12 h-12 rounded-full"
          src={data.commit.author.avatar_url}
          alt="author-avatar"
        />
        <div className="flex flex-col">
          <span className="font-semibold text-lg text-[#39496A]">
            {data.commit.message}
          </span>
          <span className="text-color-muted flex gap-1">
            Authored By
            <span className="font-semibold text-[#39496A]">
              {data.commit.author.name}
            </span>
            on {new Date(data.commit.author.date).toLocaleString()}
          </span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            repellat omnis facilis error aperiam in asperiores amet
          </span>
        </div>
      </div>
      {data.commit.author.name !== data.commit.committer.name && (
        <div className="w-5/12 flex flex-col items-end text-md">
          <span className="text-color-muted flex gap-1 items-center">
            Commited by
            <span className="font-semibold text-[#39496A]">
              {data.commit.committer.name}
            </span>
            on {new Date(data.commit.committer.date).toLocaleString()}
          </span>
          <span className="text-color-muted flex gap-1 items-center">
            Commit
            <span className="text-color-body text-body font-semibold">
              {data.commit.oid}
            </span>
          </span>
          {data.commit.parents.map((parent) => {
            return (
              <span
                className="text-color-muted flex gap-1 items-center"
                key={parent.oid}
              >
                Parent
                <span className="text-color-link font-semibold">
                  {parent.oid}
                </span>
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default DetailsComponent;
