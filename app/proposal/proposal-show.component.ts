import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Proposal} from './proposal';
import { importExpr } from '@angular/compiler/src/output/output_ast';

@Component({
  moduleId: module.id,
  selector: 'proposal-show',
  templateUrl: 'proposal-show.component.html',
  styleUrls: ['proposal-show.component.css']
})
export class ProposalShowComponent implements OnInit{
  id: number;
  routeId: any;
  constructor(
    private route: ActivatedRoute
  ){}
  ngOnInit(): void{
    this.routeId = this.route.params.subscribe(
      params =>{
        this.id = +params['id'];
      }
    )
  }
}