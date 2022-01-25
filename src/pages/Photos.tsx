import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonLabel, IonInput, IonButton, IonList } from '@ionic/react';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import LoginForm from '../components/LoginForm';
import './Page.css';

const Photos: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [text, setText] = useState<string>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
          

          <div className="container">
              <strong>Please Login</strong>
              <IonList>
                  <IonLabel>Password:</IonLabel>
                  <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
                  <IonButton color="dark" 
                      onClick={LoginForm}
                  >
                    Login
                  </IonButton>
                  </IonList>
          </div>
          

      </IonContent>
    </IonPage>
  );
};  
export default Photos;
