import { MdToolbarModule, MdInputModule, MdCardModule, MdButtonModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MdToolbarModule, MdInputModule, MdCardModule, MdButtonModule],
  exports: [MdToolbarModule, MdInputModule, MdCardModule, MdButtonModule]
})
export class MaterialModule { }
