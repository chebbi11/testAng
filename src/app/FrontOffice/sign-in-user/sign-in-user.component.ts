import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationRequest,User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-in-user',
  templateUrl: './sign-in-user.component.html',
  styleUrls: ['./sign-in-user.component.css']
})

export class SignINUserComponent implements OnInit {
  email!: string;
  password!: string;
  role!:string;
  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    const request: AuthenticationRequest = { email: this.email, password: this.password };

    this.userService.authenticate(request).subscribe(
      response => {
        console.log(response.accessToken);
        // Enregistrer le token JWT dans le localStorage
        localStorage.setItem('Token', response.accessToken);
        // Rediriger l'utilisateur en fonction de son rôle
        console.log(response.accessToken.split('.'));
        const user: User = JSON.parse(atob(response.accessToken.split('.')[1])); // décoder le token JWT pour obtenir les données utilisateur
        console.log(user);
        if(user.role === 'USER') {
          this.router.navigate(['user/client/'+user.id]);
        } 
        else if (user.role ==='MANAGER'){
          this.router.navigate(['user/manager/'+user.id])

        }
        else if (user.role ==='ADMIN'){
          this.router.navigate(['admin/:idUser'+user.id])

        }
      },
      error => {
        console.error(error);
      }
    );
  }
    
  }


