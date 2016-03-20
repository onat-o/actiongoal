import {Component} from 'angular2/core';
import {LoginRegisterComponent} from './login-register/login-register.component';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

@Component({
  selector: 'actiongoal',
  template: '<router-outlet></router-outlet>',
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
  { path: '/login-register', name: 'LoginRegister', component: LoginRegisterComponent, useAsDefault: true }
])
export class ActiongoalComponent { 
}