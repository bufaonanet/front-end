import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";
import { MenuComponent } from "./menu/menu.component";
import { NotFoundComponent } from "./not-found/not-found.component";

@NgModule({
    declarations: [
        HomeComponent,
        FooterComponent,
        MenuComponent,
        NotFoundComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [

        HomeComponent,
        FooterComponent,
        MenuComponent,
        NotFoundComponent
    ]
})
export class NavegacaoModule { }