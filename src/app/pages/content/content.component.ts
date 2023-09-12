import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/data-fake';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  imgUrl: string = ''
  contentTitle: string = ''
  contentDescription: string = ''
  private id: string | null = '0'

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id"))

    this.setarValoresComponent(this.id)
  }

  setarValoresComponent(id: string | null) {
    const result = dataFake.filter(object => object.id == id)[0]

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.imgUrl = result.imgUrl

  }
}
