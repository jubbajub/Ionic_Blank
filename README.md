
# Ionic_Blank #

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
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "ionic-projekte",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

Unter -->"Cloud Firestore" findet man die Datenbank

ANLEITUNG
GUTE ANLEITUNG:
 Github einrichten in VisualStudio Code
-https://www.youtube.com/watch?v=Fk12ELJ9Bww
1. NEUES PROJEKT ERSTELLEN UND MIT GIT VERBINDEN
2. GITHUB CLONE WIEDERHERSTELLEN
3. FIREBASE HOSTING (FIREBASE DEPLOY)


1. NEUES PROJEKT ERSTELLEN UND MIT GIT VERBINDEN

1.1 VS Code:
-Projekt erstellen mit z.B. >ionic start Ionic_Blank (eigentlich Namen lowerCase)
-in das Projekt verzeichnis wechseln (Terminal öffnen (Strg+ö))


1.2. Github: 
-Neues Repository erstellen (ohne Readme und gitignore) -->URL: https://github.com/jubbajub/Ionic_Blank.git

1.2.1. VSC: INITIALISIERUNGS BEFEHLE von GITHUB KOPIEREN und im TERMINAL Ausführen:
	echo "# Ionic_Blank" >> README.md
	git init
	git add README.md
	git commit -m "first commit"
	git branch -M main
	git remote add origin https://github.com/jubbajub/Ionic_Blank.git
	git push -u origin main

1.3. VSC: ÄNDERUNGEN IN DEN DATEIEN DURCHFÜHREN

1.4. VSC: COMMIT NACHRICHT eingebn Strg+ENTER

1.5. VSC: Änderungen Synchronisiseren ( git push Ionic_Blank master:master )

2.GITHUB CLONE WIEDERHERSTELLEN

2.1 VS Code
2.1.1 Installiere neueste Versionen von angular, ionic, npm, node
2.1.2 Github: kopiere von GITHUB die webadresse z.B. https://github.com/jubbajub/devdactic-ionic-4-firebase-angularfire-2.git

2.1.3 Terminal: gehe ins Verzeichnis deiner Wahl
>git clone https://github.com/jubbajub/devdactic-ionic-4-firebase-angularfire-2.git

2.1.4 Terminal: gehe ins Projektverzeichnis 
>cd devdactic-ionic-4-firebase-angularfire-2

2.1.5 Terminal: Abhängigkeiten installieren
>npm install (Dauer ca. 5 Minuten)

2.1.6 Terminal: Projekt lokal starten
>ionic serve ( oder ng serve etc.)

2.1.7 Man erhält bei der migration sehr viele Sicherheitsfehler, diese kan man mit  dem Befehl >npm audit  fix beheben, allerdings funktioniert anschließend vermutlich >ionic serve nicht mehr, dann muss man einen Angular Versionsupdate durchführen (zb. von 8 auf 10)

2.2 VERSIONS UPDATE Angular 8 nach 10 immer schrittweise, also 8 auf neun, dann 9 auf 10 (WICHTIG--> https://update.angular.io)

2.2.1 >ng update @angular/core@8 @angular/cli@8 --force
-->Änderung in Git commiten

2.2.2 >ng update @angular/core@9 @angular/cli@9 --force
-->Änderung in Git commiten

2.2.3 >ng update @angular/core @angular/cli --force (Befehl um auf neueste Version zu updaten)
-->Änderung in Git commiten

2.2.4 >ionic serve sollte jetzt funktionieren, falls nicht dann eventuell umprogrammieren, da einige Befehle sich geändert haben ( zb. Routing etc.)

3. FIREBASE HOSTING (FIREBASE DEPLOY)
https://devdactic.com/host-ionic-website-firebase/

3.1 VSC:  
im Entwicklungsmodus
>ionic build --release
oder im Produktionsmodus mit --prod flag, aber dann muss "app/environments/environment.prod.ts" mit Firebasedaten gefüllt werden.
>ionic build --prod --release

3.2. Firebase Hosting
>npm install -g firebase-tools
>firebase login
>firebase init (Das folgende ERgebnis kommt nach dem firebase init Befehl!)
>firebase deploy (Hiernach erhält man seinen Link ->Das wars!

-->WEITERE ANGABEN UND ERGEBNIS

=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add,
but for now we'll just set up a default project.

? Please select an option: Use an existing project
? Select a default Firebase project for this directory: ionic-projekte (Ionic-Projekte)
i  Using project ionic-projekte (Ionic-Projekte)

=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

? What do you want to use as your public directory? www
? Configure as a single-page app (rewrite all urls to /index.html)? Yes
? Set up automatic builds and deploys with GitHub? No
? File www/index.html already exists. Overwrite? No
i  Skipping write of www/index.html

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...

+  Firebase initialization complete!
------------------------------------------

+  Deploy complete!

Project Console: https://console.firebase.google.com/project/ionic-projekte/overview
Hosting URL: https://ionic-projekte.web.app
