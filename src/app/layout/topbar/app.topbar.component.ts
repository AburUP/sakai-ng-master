import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "../service/app.layout.service";


@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items!: MenuItem[];
    displayModal: boolean;

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService) { 
        this.displayModal=false;
    }

    ngOnInit() {
        this.items = [
            {
               label:'Perfil',
               icon:'pi pi-fw pi-user'
            },
            {
               label:'Configuración',
               icon:'pi pi-fw pi-cog',
            },
            {
               separator:true
            },
            {
               label:'Salir',
               icon:'pi pi-fw pi-power-off'
            }
        ];
    }

    showModalDialog() {
        this.displayModal = true;
    }
}
