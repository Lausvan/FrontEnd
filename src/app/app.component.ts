import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = 'Laus';

  categorias = [
    {id:"1", nome:"Categproa 1"},
    {id:"2", nome:"Categproa 2"},
    {id:"3", nome:"Categproa 3"},
    {id:"4", nome:"Categproa 4"},
    {id:"5", nome:"Categproa 3"},
    {id:"6", nome:"Categproa 2"},
    {id:"7", nome:"Categproa 1"},
    {id:"8", nome:"Categproa 2"},
    {id:"9", nome:"Categproa 3"},
    {id:"10", nome:"Categproa 4"}
  ];
}
