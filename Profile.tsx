// src/pages/LoginPage.tsx
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonText,
  IonToast,
  IonMenuButton,
  IonButtons,
  IonIcon,
} from '@ionic/react';
import { useState } from 'react';
import { businessOutline, medicalOutline, medkitOutline, personCircleOutline, personOutline } from 'ionicons/icons';
//Importar css del login
import { useEffect } from 'react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleLogin = () => {
    // Validaciones simples para los campos
    if (!email || !password) {
      setToastMessage('Por favor ingresa tu correo y contraseña.');
      setShowToast(true);
      return;
    }
    //Lógica de inicio de sesión
    console.log('Iniciando sesión...');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Iniciar sesión</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <IonIcon icon={personCircleOutline} size="large" />
        </div>
        <IonText className="intro-text">
          <h2 className="intro-text">Iniciar sesión</h2>
        </IonText>
        <IonItem>
          <IonLabel position="floating">Correo Electrónico</IonLabel>
          <IonInput
            type="email"
            value={email}
            onIonChange={e => setEmail(e.detail.value!)}
            required
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Contraseña</IonLabel>
          <IonInput
            type="password"
            value={password}
            onIonChange={e => setPassword(e.detail.value!)}
            required
          />
        </IonItem>
        <IonButton className="login" expand="full" onClick={handleLogin}>
          Iniciar Sesión
        </IonButton>
        <IonText color="medium" className="forgot-password">
          <h3>O</h3>
          <h1>Registrarme como</h1>
        </IonText>
        <IonButton expand="full" href="/register-user">
          Soy usuario
          <IonIcon slot="end" icon={personOutline} />
        </IonButton>
        <IonButton expand="full" href="/register-doctor">
          Soy médico
          <IonIcon slot="end" icon={medkitOutline} />
        </IonButton>
        <IonButton expand="full" href="/register-hospital">
          Centro de salud
          <IonIcon slot="end" icon={businessOutline} />
        </IonButton>
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message={toastMessage}
          duration={2000}
          color="danger"
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
