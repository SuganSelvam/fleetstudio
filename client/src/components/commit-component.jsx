import { useParams } from "react-router-dom";
import DetailsComponent from "./details-component";
import DiffComponent from "./diff-component";

function CommitComponent() {
  const {owner, repository, commitSHA} = useParams();


  return (
    <div className="container w-[1400px] mx-auto px-10 ">
      <DetailsComponent owner={owner} repository={repository} commitSHA={commitSHA} />
      <DiffComponent owner={owner} repository={repository} commitSHA={commitSHA} />
    </div>
  );
}

export default CommitComponent;
