import { IonGrid } from '@ionic/react';

import './GalleryContainer.css';

import Img1 from './assets/images/pete.png'
import Img2 from './assets/images/pete.png'
import Img3 from './assets/images/pete.png'
import Img4 from './assets/images/pete.png'
import Img5 from './assets/images/pete.png'
import Img6 from './assets/images/pete.png'


interface ContainerProps {
  name: string;
}

const GalleryContainer: React.FC<ContainerProps> = ({ name }) => {

  let data = [
      {
          id: 1,
          imgSrc: 'Img1',
      },
      {
          id: 2,
          imgSrc: 'Img2',
      },
      {
          id: 3,
          imgSrc: 'Img3',
      },
      {
          id: 4,
          imgSrc: 'Img4',
      },
      {
          id: 5,
          imgSrc: 'Img5',
      },
      {
          id: 6,
          imgSrc: 'Img6',
      }
  ]

  return (
    
    <div className="gallery">
      {data.map((item, index)=>{
          return(
            <ion-grid>
              <ion-row>
                <ion-col >
                  <div className="pics" key={index}>
                    <img src={item.imgSrc}/>
                  </div>
                </ion-col>
              </ion-row>
            </ion-grid> 
          )
      })}
       
    </div>

  );
};

export default GalleryContainer;