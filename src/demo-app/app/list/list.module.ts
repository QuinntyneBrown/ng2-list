import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { ListComponent } from './list.component';

const declarables = [ListComponent];

@NgModule({
    imports: [CommonModule],
    exports: [declarables],
    declarations: [declarables]
})
export class ListModule { }
