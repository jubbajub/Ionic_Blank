import { Component, OnInit } from '@angular/core';
import { IdeaService, Idea } from 'src/app/services/idea.service';
import { Observable } from 'rxjs';
 
@Component({
  selector: 'app-idea-list',
  templateUrl: './idea-list.page.html',
  styleUrls: ['./idea-list.page.scss'],
})
export class IdeaListPage implements OnInit {
 
  public ideas: Observable<Idea[]>;
   // muss programmatisch vom interface ermittelt werden (src\app\services\idea.service.ts)
   headIdeaElements = ['ID', 'Name', 'Notes', 'Category'];
   
  constructor(private ideaService: IdeaService) { }
 
  ngOnInit() {
    this.ideas = this.ideaService.getIdeas();
  }
}