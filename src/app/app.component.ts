import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  lines: any = [];
  linesR: any = [];

  showTable(files: any) {
    let fileList = (<HTMLInputElement>files.target).files;
    if (fileList && fileList.length > 0) {
      let file: any = fileList.item(0);
      let reader: FileReader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
        let csv: any = reader.result;
        let allTextLines = [];
        allTextLines = csv.split(/\r\n|\n/);
        let headers = allTextLines[0].split(',');
        let data = headers;
        let tarr = [];
        for (let j = 0; j < headers.length; j++) {
          tarr.push(data[j]);
        }
        this.lines.push(tarr);
        let tarrR = [];
        let arrlen = allTextLines.length;
        let rows = [];
        for (let i = 1; i < arrlen; i++) {
          rows.push(allTextLines[i].split(','));
        }
        for (let j = 0; j < arrlen; j++) {
          tarrR.push(rows[j]);
        }
        this.linesR.push(tarrR);
      }
    }
  }

}
