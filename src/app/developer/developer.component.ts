import { Component, Input, OnInit } from '@angular/core';
import { Developer } from 'src/app/models/developer.model';
import { Gender } from '../models/gender.enum';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit{

  developer!: Developer;  

  constructor(){

  }

  ngOnInit(): void {

    const skillA = new Skill("A", "A", "A");
    const skillB = new Skill("B", "B", "B");

    this.developer = new Developer("test", "test", 15, Gender.MALE, "")
    this.developer.skills.push(skillA);
    this.developer.skills.push(skillB);
  }
}
