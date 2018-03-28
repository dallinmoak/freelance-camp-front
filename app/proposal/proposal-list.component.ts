import {Component} from '@angular/core';
import{Proposal} from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html',
  styleUrls: ['proposal-list.component.css']
})

export class ProposalListComponent{
  proposalOne: Proposal = new Proposal(
    15,
    "ABC Company",
    "http://devcamp.com",
    "Rails",
    150,
    120,
    15,
    "a@b.c"
  )
  proposalTwo: Proposal = new Proposal(
    16,
    "xyz Company",
    "http://devcamp.com",
    "Rails",
    150,
    120,
    15,
    "a@b.c"
  )
  proposalThree: Proposal = new Proposal(
    17,
    "something Company",
    "http://devcamp.com",
    "Rails",
    150,
    120,
    15,
    "a@b.c"
  )
  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
  ]
}