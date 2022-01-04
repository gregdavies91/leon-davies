import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>Leon Davies</strong>
      <p>Abstract Artist</p>
    </div>
  );
};

export default ExploreContainer;
