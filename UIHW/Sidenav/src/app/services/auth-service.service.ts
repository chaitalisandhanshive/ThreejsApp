import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
 
  _http:any;

  constructor(private http: HttpClient,private router:Router) {

    this._http=http;

   }

  baseServerUrl= 'https://localhost:7250/';

  headers = { headers: new Headers({'Content-Type': 'application/json'})}




  registerUser(user:any){

    return this.http.post(this.baseServerUrl + 'api/Users/CreateUser',user,{

      responseType:'text',

    });
 
  }
//   Login(loginObj:any){
//     return this.http.post(this.baseServerUrl + 'api/Login',loginObj,{
//       responseType:'text',
//     });   
// }
// UserLogin(loginObj:any){
//   return this.http.post(this.baseServerUrl + 'api/Login',loginObj)

// }
// storetoken(tokenvalue:string){
//   localStorage.setItem('token',tokenvalue)
// }
// getToken()
// {
//   return localStorage.getItem('token')
// }
// isLoggedIn(){
//   return !!localStorage.getItem('token')
// }
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';
// import { map } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthServiceService {

  // constructor(private http: HttpClient, private router: Router) { }

  login(userCredentials: { email: string, password: string }) {
    return this.http.post<any>('api/Login/LoginUser', userCredentials).pipe(
      map(response => {
        // Assuming your server sends back a token in the response upon successful login
        if (response && response.token) {
          // Save the token in the browser's local storage
          localStorage.setItem('accessToken', response.token);
          return true;
        }
        return false;
      })
    );
  }

  logout() {
    // Remove the token from local storage on logout
    localStorage.removeItem('accessToken');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    // Check if the token exists in local storage to determine if the user is logged in
    return !!localStorage.getItem('accessToken');
  }

  isAdmin(): boolean {
    // Check if the user has admin privileges based on the token or other criteria
    // For example, you can decode the token and check the role field
    // Assuming your token has a 'role' field indicating the user role (e.g., 'admin' or 'user')
    const token = localStorage.getItem('accessToken');
    if (token) {
      const decodedToken = this.decodeToken(token);
      if (decodedToken && decodedToken['role'] === 'admin') {
        return true;
      }
    }
    return false;
  }

  private decodeToken(token: string): { [key: string]: any } | null {
    try {
      // Decode the token to get the payload data
      const payload = token.split('.')[1];
      return JSON.parse(atob(payload));
    } catch (error) {
      // If decoding fails or the token is invalid, return null
      return null;
    }
  }
}



