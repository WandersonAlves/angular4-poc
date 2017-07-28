import { MdToolbarModule, MdInputModule, MdCardModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MdToolbarModule, MdInputModule, MdCardModule],
  exports: [MdToolbarModule, MdInputModule, MdCardModule]
})
export class MaterialModule { }
