import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-principal',
  templateUrl: './card-principal.component.html',
  styleUrls: ['./card-principal.component.css']
})
export class CardPrincipalComponent {
  @Input()
  imgUrl:string = ''
  @Input()
  tituloCard:string = ''
  @Input()
  descricaoCard:string = ''
}
