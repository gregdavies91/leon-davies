import { IonButton } from '@ionic/react';

import './GalleryContainer.css';

interface ContainerProps {
  name: string;
}

const GalleryContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <p>gallery</p>
    </div>
  );
};

export default GalleryContainer;