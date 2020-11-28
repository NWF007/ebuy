import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import Amplify, {Auth} from "aws-amplify";
import aws_exports from "./aws-exports";
Amplify.configure(aws_exports);

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


const oauth = {
  //domain name
  domain : 'ebuy.auth.us-east-1.amazoncognito.com',

  //authorized scopes
  scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],

  //callback URL
  redirectSignin : 'http://localhost:4200',

  //Sign out URL
  redirectSignOut: 'http://localhost:4200',

  //code for Authorization code grant
  responseType: 'code',

  //optional, for Cognito hosted ui specified options
  options: {
    // Indicates if the data collection is enabled to support Cognito advanced security features. By default, this flag is set to true.
    AdvancedSecurityDataCollectionFlag : true
  }
}

Auth.configure({
  oauth:oauth
});


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
