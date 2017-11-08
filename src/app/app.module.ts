import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PublicComponent } from './public/public.component';
import { PrivateComponent } from './private/private.component';
import { AuthGuard } from './auth.guard';
import { AboutComponent } from './about/about.component';
import { AuthFakeComponent } from './auth-fake/auth-fake.component';

const routerConfig: Routes = [
  { path: 'public', component: PublicComponent },
  { path: 'private', component: PrivateComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    PrivateComponent,
    AboutComponent,
    AuthFakeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
