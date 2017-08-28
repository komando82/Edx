import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {RosterService} from './svc.roster';

bootstrap(AppComponent, [RosterService]);