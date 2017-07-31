import { MdToolbarModule, MdInputModule, MdCardModule, MdButtonModule, MdIconModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MdToolbarModule, MdInputModule, MdCardModule, MdButtonModule, MdIconModule],
  exports: [MdToolbarModule, MdInputModule, MdCardModule, MdButtonModule, MdIconModule]
})
export class MaterialModule { }
