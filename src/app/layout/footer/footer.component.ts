import { Component } from '@angular/core';
import { FormData } from 'src/app/models/formsModel';

// interface formserv{
// }
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  formData: FormData= {
    email:"",
    desc:"",
    subject:""

  };
  submitform(e : any){
    console.log(e)
    this.formData.email= e.value.email;
     this.formData.subject= e.value.subject;
     this.formData.desc= e.value.description;
    console.log(this.formData);

  }
}
