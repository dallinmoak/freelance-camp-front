import {Component} from '@angular/core';
import {Document} from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent{
  pageTitle: string = "Document Dashboard";
  documents: Document[] = [
    {
      title: 'First Document Title',
      description: 'this describes the title.',
      file_url: 'http://google.com',
      updated_at: '11/11/16',
      image_url: 'http://google.com'
    },
    {
      title: 'second Document Title',
      description: 'this describes the title.',
      file_url: 'http://google.com',
      updated_at: '11/11/16',
      image_url: 'http://google.com'
    },
    {
      title: 'third Document Title',
      description: 'this describes the title.',
      file_url: 'http://google.com',
      updated_at: '11/11/16',
      image_url: 'http://google.com'
    }
  ]
}