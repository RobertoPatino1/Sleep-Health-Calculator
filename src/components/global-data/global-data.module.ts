import { NgModule } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
import { ContainerComponentModule } from '../container/container.module';

@NgModule({
    declarations:[ContainerComponent],
    imports:[ContainerComponentModule],
    exports:[],
    
    providers:[],

})

export class GlobalDataComponentModule{

}