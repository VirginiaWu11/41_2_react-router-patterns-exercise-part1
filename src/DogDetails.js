import { useParams } from "react-router-dom";

const DogDetails = () => {
  const { dog } = useParams();
  return (
    <div>
      <h1>hi</h1>
    </div>
  );
};

export default DogDetails;
