import { Component,OnInit } from '@angular/core';
import { DataView } from 'primeng/dataview';
import { Mnu } from '../api/mnu';
import { MnuService } from '../service/mnu.service';

@Component({
  selector: 'app-findmenu',
  templateUrl: './app.findmenu.component.html'
})
export class AppFindmenuComponent implements OnInit{
  mnu : Mnu[] = [];

  constructor(private mnuService : MnuService) { }

  ngOnInit() {
    this.mnuService.getMenus().then(data => this.mnu = data);
  }

  onFilter(dv: DataView, event: Event) {
    dv.filter((event.target as HTMLInputElement).value);
  }
}
