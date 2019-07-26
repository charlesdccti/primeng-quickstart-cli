import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import {MenubarModule} from 'primeng/menubar';
import {GMapModule} from 'primeng/gmap';
import {CalendarModule} from 'primeng/calendar';
import {CheckboxModule} from 'primeng/checkbox';
import {RatingModule} from 'primeng/rating';
import {PasswordModule} from 'primeng/password';
import {InputMaskModule} from 'primeng/inputmask';
import {PanelModule} from 'primeng/panel';



import { AppComponent } from './app.component';
import { TableFilterComponent } from './table-filter/table-filter.component';
import { MenubarComponent } from './menubar/menubar.component';
import { MapasComponent } from './mapas/mapas.component';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
    declarations: [
        AppComponent,
        TableFilterComponent,
        MenubarComponent,
        MapasComponent,
        FormularioComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        TableModule,
        HttpClientModule,
        InputTextModule,
        DialogModule,
        ButtonModule,
        MenubarModule,
        GMapModule,
        CheckboxModule,
        CalendarModule,
        RatingModule,
        PasswordModule,
        InputMaskModule,
        PanelModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
