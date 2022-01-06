import React from 'react';

import { IonGrid, IonRow, IonCol, IonImg, IonLabel, IonCard } from '@ionic/react';

import './GalleryContainer.css';

// import Img1 from '../assets/images/image1.jpg';
// import Img2 from '../assets/images/image2.jpg';
// import Img3 from '../assets/images/image3.jpg';
// import Img4 from '../assets/images/image4.jpg';
// import Img5 from '../assets/images/image5.jpg';
// import Img6 from '../assets/images/image6.jpg';
// import Img7 from '../assets/images/image7.jpg';
// import Img8 from '../assets/images/image8.jpg';
// import Img9 from '../assets/images/image9.jpg';
// import Img10 from '../assets/images/image10.jpg';
// import Img11 from '../assets/images/image11.jpg';
// import Img12 from '../assets/images/image12.jpg';
// import Img13 from '../assets/images/image13.jpg';

type Item = {
  src: string;
  text: string;
};
const items1: Item[] = [
                      { src: '../assets/images/image1.jpg', text: 'image1' },
                      { src: '../assets/images/image2.jpg', text: 'image2' },
                      { src: '../assets/images/image3.jpg', text: 'image3' },
                      { src: '../assets/images/image4.jpg', text: 'image4' },                
                      ];

const items2: Item[] = [                      
                      { src: '../assets/images/image5.jpg', text: 'image5' },
                      { src: '../assets/images/image6.jpg', text: 'image6' },
                      { src: '../assets/images/image7.jpg', text: 'image7' },
                      { src: '../assets/images/image8.jpg', text: 'image8' },
                      { src: '../assets/images/image13.jpg', text: 'image13' }                      
                      ];

const items3: Item[] = [                      
                      { src: '../assets/images/image9.jpg', text: 'image9' },
                      { src: '../assets/images/image10.jpg', text: 'image10' },
                      { src: '../assets/images/image11.jpg', text: 'image11' },
                      { src: '../assets/images/image12.jpg', text: 'image12' },                      
                      ];                      


export const GalleryContainer: React.FC = () => ( 

      <IonGrid>
        <IonRow>
          <IonCol size="12" size-lg="4">
            {items1.map((image, i) => (
              <IonCard key={i}>
                
                  <IonImg className="ion-img" src={image.src} alt={image.text} />
                
              </IonCard>
            ))}
          </IonCol>
          <IonCol size="12" size-lg="4">
            {items2.map((image, i) => (
              <IonCard key={i}>
                
                  <IonImg className="ion-img" src={image.src} alt={image.text} />
                
              </IonCard>
            ))}
          </IonCol>
          <IonCol size="12" size-lg="4">
            {items3.map((image, i) => (
              <IonCard key={i}>
                
                  <IonImg className="ion-img" src={image.src} alt={image.text} />
                
              </IonCard>
            ))}
          </IonCol>
        </IonRow>
       </IonGrid>

  );

export default GalleryContainer;