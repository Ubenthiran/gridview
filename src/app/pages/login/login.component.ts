import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  fileContent: string = '';
  keys:any = [];
  onChange(fileList: FileList) {
	 
     let file = fileList[0];
			let fileReader: FileReader = new FileReader();
			let self = this;
			this.keys = [];
			fileReader.readAsText(file); 
			fileReader.onloadend = function(x) {
			  self.fileContent = JSON.parse(fileReader.result as string);
			    console.log(Object.keys(self.fileContent[0]));
				self.keys = Object.keys(self.fileContent[0]);
				/* for(let key in self.fileContent[0]){
				  self.keys.push(key);
			   } */
			}	
	
  }

}
