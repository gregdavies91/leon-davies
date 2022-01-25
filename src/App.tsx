import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home';
import Art from './pages/Art';
import Photos from './pages/Photos';
import Contact from './pages/Contact';

import mongoose, { Error } from 'mongoose';
import User from './User';
import passport from 'passport';
import passportLocal from 'passport-local';
import cookieParser from 'cookie-parser';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

mongoose.connect("mongodb+srv://gregdavies91:Discover1991!@cluster0.dcuug.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

setupIonicReact();

const App: React.FC = () => {

  App.use(cookieParser());
  App.use(passport.initialize()); 
  App.use(passport.session());

  App.post('/Register', async(req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
      username: req.body.username,
      password: hashedPassword
    });
    await newUser.save();
    res.send("Success")
  });

  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/Home" />
            </Route>
            <Route exact path="/Home">
              <Home />
            </Route>
            <Route exact path="/Art">
              <Art />
            </Route>
            <Route exact path="/Photos">
              <Photos />
            </Route>
            <Route exact path="/Contact">
              <Contact />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
