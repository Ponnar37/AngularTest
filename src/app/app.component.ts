import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'testapp';

  @Output() alerteCanicule = new EventEmitter<any>();

  ngOnInit(){
    this.title="Ayoub";
  }

  SeT(){
    this.title="SeT";
  }
}
