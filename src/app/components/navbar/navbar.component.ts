import { Component, OnInit , OnDestroy, SimpleChanges} from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit , OnDestroy {

  constructor( private authService: AuthService) { }

  isLog = '/sistema/auth';

  ngOnInit() {
    this.onCheckUser();
  }

  onCheckUser() {
    if (this.authService.getCurrentUser() == null) {
      console.log(this.authService.getCurrentUser());
      this.isLog = '/sistema/auth';
    } else {
      this.isLog = '/sistema';
    }
  }

  ngOnDestroy() {

  }

}
