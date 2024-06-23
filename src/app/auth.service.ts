import { Injectable, inject, signal } from '@angular/core';
import { Auth, signInWithPhoneNumber, updateProfile, user } from '@angular/fire/auth';
import { RecaptchaVerifier, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { Database, get, ref, set } from '@angular/fire/database';
import { Observable, from, map } from 'rxjs';
import { Paciente } from './paciente';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private firebaseAuth: Auth, private database: Database) {}

  user$ = user(this.firebaseAuth);
  currentUserSig = signal<Paciente | null | undefined> (undefined)
  confirmationResult: any;
  users!: Paciente[];
  captchaVerifier: RecaptchaVerifier | undefined;

  //Función para registrar un usuario
  register(correo: string, nombre: string, apellido: string, contraseña:string, telefono:string, fecha:string): Observable<void> {
    const promise = createUserWithEmailAndPassword(
      this.firebaseAuth,
      correo,
      contraseña
    ).then(response => {
      return updateProfile(response.user, {displayName:nombre}).then(() =>{
        //GUardar en database realtime
        const userUID = response.user.uid;
        return set(ref(this.database, 'users/' + userUID),{
          nombre:nombre,
          apellido:apellido,
          correo:correo,
          telefono:telefono,
          fecha:fecha,
        });
      });
    });
    return from(promise);
  }

  //Login con email and password
  login(email:string, password:string):Observable<string>{
    const promise = signInWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password,
    ).then((userCredential) => {
      return userCredential.user.displayName;
    });
    return from(promise);
  }

  //Logout
  logout():Observable<void>{
    const promise = signOut(this.firebaseAuth);
    return from(promise);
  }

  //Obtener login
  Obtenerlogin(){
    if(this.firebaseAuth.authStateReady){
      return true;
    }else{
      return false;
    }
  }

  getDisplayName(){
    return this.firebaseAuth.currentUser.displayName;
  }

  getApellido(){
    
  }

  isAuthenticated(): Observable<boolean> {
    return this.user$.pipe(
      map(user => !!user) // Mapeamos el usuario a un booleano
    );
  }

  //Inicializar captcha
  initializeRecaptcha(element: HTMLElement):void {
    this.captchaVerifier = new RecaptchaVerifier(this.firebaseAuth,element, {});
    this.captchaVerifier.render().then(widgetId => {
      console.log("reCAPTCHA widget ID:", widgetId);
      return true;
    });
  }

  //Funcion para enviar el código al número de telefono
  sendCode(phone: string): Observable<void> {
    if (!this.captchaVerifier) {
      throw new Error("Captcha verifier is not initialized");
    }
    const promise = signInWithPhoneNumber(this.firebaseAuth, phone, this.captchaVerifier)
      .then(confirmationResult => {
        this.confirmationResult = confirmationResult;
        console.log("SMS sent");
      });
    return from(promise);
  }

  //Función para ingresar con el número de teléfono
  loginSMS(code: string): Observable<void> {
    if (!this.confirmationResult) {
      throw new Error("Confirmation result is not available");
    }
    const promise = this.confirmationResult.confirm(code)
      .then(() => {
        console.log("exito al ingresar");
      })
      .catch(() => {
        alert("Error con el código");
      })as Promise<void>;
    return from(promise);
  }

  //Función que lee la base de datos y verifica si el usuario existe
  existe(tel: string): Promise<boolean> {
    const usersRef = ref(this.database, 'users');
    return get(usersRef).then((snapshot) => {
      if (snapshot.exists()) {
        let flag = false;
        snapshot.forEach((childSnapshot) => {
          const userData = childSnapshot.val();
          const phone = userData.telefono;
          const username = userData.nombre;
          console.log("Phone:", phone);
          if (tel === phone) {
            console.log("Existe cuenta, proceder");
            flag = true;
          }
        });
        return flag;
      } else {
        console.log("No se encontraron usuarios");
        return false;
      }
    }).catch((error) => {
      console.error("Error al obtener usuarios:", error);
      return false;
    });
  }

  //Función que obtiene todos los usuarios de una base de datos
  getUsuarios(): Promise<Paciente[]> {
    const usersRef = ref(this.database, 'users');
    return get(usersRef)
      .then((snapshot) => {
        const users: Paciente[] = [];
        if (snapshot.exists()) {
          snapshot.forEach((childSnapshot) => {
            const userData = childSnapshot.val();
            users.push({
              nombre: userData.nombre,
              apellido: userData.apellido,
              correo: userData.correo,
              fecha: userData.fecha,
              telefono: userData.telefono,
            });
          });
        } else {
          console.log("No se encontraron usuarios");
        }
        return users;
      })
      .catch((error) => {
        console.error("Error al obtener usuarios:", error);
        return [];
      });
  }
}
