import { Component } from '@angular/core';
import { DisableRightclickService } from './disable-rightclick.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'expense-manager';

  constructor(private rightclickdisable: DisableRightclickService) {}

  ngOnInit() {
    this.rightclickdisable.disableRightClick();
  }
}
