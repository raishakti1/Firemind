import { NgModule } from '@angular/core';
import {
  MatIconModule, MatButtonModule, MatSidenavModule, MatToolbarModule,MatCheckboxModule,MatCardModule,
  MatInputModule,MatRadioModule,MatDatepickerModule,MatNativeDateModule, MatSelectModule,  
  MatOptionModule,MatFormFieldModule,MatTableModule 
} from '@angular/material';
@NgModule({
    imports: [MatButtonModule, MatCheckboxModule,MatSidenavModule,MatToolbarModule,MatIconModule,MatCardModule,
      MatInputModule,MatDatepickerModule,MatNativeDateModule ,MatSelectModule,  
  MatOptionModule,MatFormFieldModule,MatTableModule
  ],
    exports: [MatButtonModule, MatCheckboxModule,MatSidenavModule,MatToolbarModule,MatIconModule,MatCardModule,
      MatInputModule,MatRadioModule,MatDatepickerModule,MatNativeDateModule, MatSelectModule,  
  MatOptionModule,MatFormFieldModule ,MatTableModule
  ]
  })

  export class Material
  {

  }