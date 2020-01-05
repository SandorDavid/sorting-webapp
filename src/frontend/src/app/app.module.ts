import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterState } from '@ngrx/router-store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/auth-guard.service';
import { AngularMaterialModule } from './util/angular-material.module';
import { reducers } from './store/app.reducer';
import { CoreEffects } from './store/core.effects';
import { AuthEffects } from './auth/store/auth.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { JwtInterceptor } from './util/interceptor/jwt.interceptor';
import { HttpErrorInterceptor } from './util/interceptor/http-error.interceptor';
import { SnackComponent } from './util/snack/snack.component';
import { SortingComponent } from './sorting/sorting/sorting.component';

@NgModule({
  declarations: [
    AppComponent,
    SnackComponent,
    SortingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AngularMaterialModule,
    AuthModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([CoreEffects, AuthEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot({ routerState: RouterState.Minimal}),
  ],
  providers: [
    AuthGuard,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true}
  ],
  entryComponents: [SnackComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
