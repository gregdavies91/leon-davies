import React, { useState } from 'react';

import { IonGrid, IonRow, IonCol, IonImg, IonLabel, IonCard } from '@ionic/react';

import Lightbox from 'react-image-lightbox';

import './GalleryContainer.css';

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
                      { src: '../assets/images/image13.jpg', text: 'image9' },                      
                      ];

const items3: Item[] = [                      
                      { src: '../assets/images/image9.jpg', text: 'image10' },
                      { src: '../assets/images/image10.jpg', text: 'image11' },
                      { src: '../assets/images/image11.jpg', text: 'image12' },
                      { src: '../assets/images/image12.jpg', text: 'image13' },                      
                      ];   

export const GalleryContainer: React.FC = () => ( 

      <IonGrid>
        <IonRow>
          <IonCol size="12" size-lg="4">
            {items1.map((image, i) => (
              <IonCard size = 'cover'
                       key={i}                 
                       onClick={() => setShowLightbox({ showLightbox: true })}>
                
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

function LightboxContainer() {
    const [lightboxState, setShowLightbox] = useState({ showLightbox: false });

    return (
        <div>
          
          <Lightbox
            mainSrc={image.src}
            nextSrc={image[(i + 1) % image.length]}
            prevSrc={image[(i + image.length - 1) % image.length]}
            onCloseRequest={() => this.setState({ showLightbox: false })}
            onMovePrevRequest={() =>
              this.setState({
                i: (i + image.length - 1) % image.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                i: (i + 1) % image.length,
              })
            }
          />
          
      </div>
    )
}

export default GalleryContainer;