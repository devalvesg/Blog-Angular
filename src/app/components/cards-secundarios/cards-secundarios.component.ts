import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards-secundarios',
  templateUrl: './cards-secundarios.component.html',
  styleUrls: ['./cards-secundarios.component.css']
})
export class CardsSecundariosComponent {
@Input()
imgUrl:string = ''
@Input()
tituloCard:string = ''
@Input()
link:string = ''
@Input()
Id:string = ''
}
