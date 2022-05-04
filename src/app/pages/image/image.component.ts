import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  userFile: any;

  public imagePath: any;
  imgURL: any;
  crudApi: any;
get f(){return this.crudApi.dataForm.controls}

    constructor(private httpClient: HttpClient,private router: Router) { }
  ngOnInit(){
    this.getImage();
    
  }
    selectedFile!: File;
    retrievedImage: any;
    base64Data: any;
    retrieveResonse: any;
    message!: string;
    imageName: any;
    image!:any;


    onSelectFile(event:any){
      if(event.target.files.length>0){

     
      const file = event.target.files[0];
      this.userFile=file;
      this.userFile=file;
      //this.f['profile'].setValue(file);

      var mimeType=event.target.files[0].type;
      if(mimeType.match(/image\/*/)==null){
        this.message="Only images are supported";
        return;
      }
      var reader = new FileReader();
      this.imagePath=file;
      reader.readAsDataURL(file);
      reader.onload=(_event)=>{
        this.imgURL=reader.result;
      }
    }


    }


    OnSubmit(){
      const formData=new FormData();
      const article =this.crudApi.dataForm.value;
      formData.append('article',JSON.stringify(article));

      formData.append('file',this.userFile);
      this.crudApi.createData(formData).subscribe((data: any)=>{
        this.router.navigate(['studentprofile']);
      })
    }



    //Gets called when the user selects an image
    public onFileChanged(event:any) {
      //Select File
      this.selectedFile = event.target.files[0];
     
  
    }
    //Gets called when the user clicks on submit to upload the image
    onUpload() {
      console.log(this.selectedFile);
      
      //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
      const uploadImageData = new FormData();
      uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    
      //Make a call to the Spring Boot Application to save the image
      this.httpClient.post('http://localhost:9090/upload', uploadImageData, { observe: 'response' })
        .subscribe((response) => {
          if (response.status === 200) {
            this.message = 'Image uploaded successfully';
          } else {
            this.message = 'Image not uploaded successfully';
          }
        }
        );
    }

    OnUpload(){
      console.log(this.imagePath);
      const uploadImageData = new FormData();
      uploadImageData.append('imageFile', this.imagePath, this.imagePath.name);
      this.httpClient.post('http://localhost:9090/upload', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 406) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      },

      (error) => {
      }
    );

    }
      //Gets called when the user clicks on retieve image button to get the image from back end
      getImage() {
      //Make a call to Sprinf Boot to get the Image Bytes.
      this.httpClient.get('http://localhost:9090/get/' + this.imageName)
        .subscribe(
          res => {
         
            this.retrieveResonse = res;
            this.base64Data = this.retrieveResonse.picByte;
            this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
          }
        );
    }
  }