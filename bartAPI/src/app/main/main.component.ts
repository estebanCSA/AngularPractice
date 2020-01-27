import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
apiURL="http://api.bart.gov/api/etd.aspx?cmd=etd&orig=RICH&key=ZXR9-P2Q2-978T-DWE9&json=y";
  constructor(private dataS: DataService) { }

  ngOnInit() {
    
    this.dataS.getURL(this.apiURL).subscribe(
      x => {
        console.log(x);
      }
    );
  }
}