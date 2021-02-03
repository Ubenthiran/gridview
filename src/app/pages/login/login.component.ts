import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  fileContent: string = '';
  keys:any = [];
  async onChange(fileList: FileList): void {
    let file = fileList[0];
    let fileReader: FileReader = new FileReader();
    let self = this;
	this.keys = [];
	await fileReader.readAsText(file);
    fileReader.onloadend = function(x) {
      self.fileContent = JSON.parse(fileReader.result);
		for(let key in self.fileContent[0]){
          self.keys.push(key);
	   }
    }
   
	
	
  }

}
