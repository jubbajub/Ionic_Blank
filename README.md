"# Ionic_Blank" 
"# Ionic_Blank" 

TUTORIAL aus : https://devdactic.com/ionic-4-firebase-angularfire-2/

Probleme:
Das Tutorial ist in Angular 8 geschrieben. Aber ich habe hier die Ionic Blank Version 6 in Angular 10 verwendet. Deshalb muss man in app.module.ts den Begriff 
"FirestoreSettingsToken" durch "SETTINGS" ersetzen

FIREBASE:
Die Konfiguration findest du unter

-->Alle Projekte Anzeigen
-->"ionic-Projekte" auswählen
-->"IonicWebApp" auswählen (falls es nicht existiert muss man es erstellen, also "App hinzufügen" und Web </> an
-->unter  Web Apps "Konfiguration" auswählen und die Konfiguration kopieren und in environment einfügen:

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOBYOm0vfOTdvkTWBvW2TzL_3SUg6k_Ls",
  authDomain: "ionic-projekte.firebaseapp.com",
  databaseURL: "https://ionic-projekte.firebaseio.com",
  projectId: "ionic-projekte",
  storageBucket: "ionic-projekte.appspot.com",
  messagingSenderId: "86724448394",
  appId: "1:86724448394:web:014d61306e95af0be11d73",
  measurementId: "G-WXWJ45PECG"
};

Unter -->"Cloud Firestore" findet man die Datenbank