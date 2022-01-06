import React, { useState } from 'react';

import { IonPopover, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';

import './GalleryContainer.css';

import Img1 from '../assets/images/image1.jpg';
import Img2 from '../assets/images/image2.jpg';
import Img3 from '../assets/images/image3.jpg';
import Img4 from '../assets/images/image4.jpg';
import Img5 from '../assets/images/image5.jpg';
import Img6 from '../assets/images/image6.jpg';
import Img7 from '../assets/images/image7.jpg';
import Img8 from '../assets/images/image8.jpg';
import Img9 from '../assets/images/image9.jpg';
import Img10 from '../assets/images/image10.jpg';
import Img11 from '../assets/images/image11.jpg';
import Img12 from '../assets/images/image12.jpg';
import Img13 from '../assets/images/image13.jpg';


interface ContainerProps {
  name: string;
}

const GalleryContainer: React.FC<ContainerProps> = ({ name }) => {

  let data = [
      {
          id: 1,
          imgSrc: Img1,
      },
      {
          id: 2,
          imgSrc: Img2,
      },
      {
          id: 3,
          imgSrc: Img3,
      },
      {
          id: 4,
          imgSrc: Img4,
      },
      {
          id: 5,
          imgSrc: Img5,
      },
      {
          id: 6,
          imgSrc: Img6,
      },
      {
          id: 7,
          imgSrc: Img7,
      },
      {
          id: 8,
          imgSrc: Img8,
      },
      {
          id: 9,
          imgSrc: Img9,
      },
      {
          id: 10,
          imgSrc: Img10,
      },
      {
          id: 11,
          imgSrc: Img11,
      },
      {
          id: 12,
          imgSrc: Img12,
      },
      {
          id: 13,
          imgSrc: Img13,
      }
  ]

  // const [showModal, setShowModal] = useState(false);
  const [popoverState, setShowPopover] = useState({ showPopover: false });
  const [tempimgSrc, setTempImgSrc] = useState('');
  
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    // setShowModal(true);
    setShowPopover({ showPopover: true });
        
  }
  return (
    <>

      <IonPopover className="modal"
        isOpen={popoverState.showPopover}
        size = 'cover'
        onDidDismiss={() => setShowPopover({ showPopover: false })}>
        <IonCard>
          <img src={tempimgSrc} />
          <IonCardHeader>
            <IonCardSubtitle>Destination</IonCardSubtitle>
            <IonCardTitle>Madison, WI</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the
            Wisconsin Territory in 1836.
          </IonCardContent>
        </IonCard>
      </IonPopover>

      {/*<IonModal isOpen={showModal} 
                mode="ios"
                animated
                backdrop-dismiss
                breakpoints={[0.1, 0.5, 1]}
                initialBreakpoint={0.75}
                swipeToClose={true}
                onDidDismiss={() => setShowModal(false)}>
        <img src={tempimgSrc} />
      </IonModal>*/}
    

    <div className="gallery">
      {data.map((item, index)=>{
          return(
                  <div className="pics" key={index} onClick={()=> getImg(item.imgSrc)}>
                    <img src={item.imgSrc} style={{width: '100%'}} />
                  </div>
          )
      })}
       
    </div>

    </>
  );
};

export default GalleryContainer;