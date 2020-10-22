import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  constructor(private vcr:ViewContainerRef, private cfr:ComponentFactoryResolver)
  {
     this.title="Angular10";
  }
  /*  Lazy Loading component */
  async adminLoad() {
    this.vcr.clear();
    const {AdminlistComponent} = await import('./adminlist/adminlist.component');
    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(AdminlistComponent)
    )
  }

  async userLoad() {
    this.vcr.clear();
    const {UserlistComponent} = await import('./userlist/userlist.component');
    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(UserlistComponent)
    )
  }
  
}
