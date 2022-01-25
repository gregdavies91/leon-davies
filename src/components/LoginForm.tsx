
import { IonLabel, IonInput, IonButton, IonList } from '@ionic/react';
import { useParams } from 'react-router';
import { History, LocationState } from "history";
import auth from '../auth.js';

interface LoginProps {
  history: History<LocationState>;
};

export const LoginForm: React.FC<LoginProps> = (props) => {

  
    

                return (
                  () => { 
                        auth.login(() => {
                          props.history.push("/Photos");
                        })
                      }
                      
                );
          
};

export default LoginForm;
