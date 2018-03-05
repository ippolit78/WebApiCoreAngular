import { TestEntity } from './testEntity';
import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import 'bootstrap';
      
@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [DataService]
})
export class AppComponent implements OnInit {
    
    myform: FormGroup;
    name: FormControl;
    gender: FormControl;
    birthday: FormControl;
    transportCar: FormControl;
    transportTrain: FormControl;
    transportAirplane: FormControl;
    language: FormControl;

    testEntity: TestEntity = new TestEntity();
    entities: TestEntity[];
    langs: string[] = [
        'English',
        'French',
        'German',
    ];

    constructor(private dataService: DataService) { }
 
    ngOnInit() {
        this.createFormControls();
        this.createForm();
        this.loadEntities(); 
    }

    createFormControls() {
        this.name = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]);
        this.gender = new FormControl;
        this.birthday = new FormControl('', Validators.required);
        this.transportCar = new FormControl;
        this.transportTrain = new FormControl;
        this.transportAirplane = new FormControl;
        this.language = new FormControl('', Validators.required);
    }

    createForm() {
        this.myform = new FormGroup({
            name: this.name,
            gender: this.gender,
            birthday: this.birthday,
            transport: new FormGroup({
                transportCar: this. transportCar,
                transportTrain: this.transportTrain,
                transportAirplane: this.transportAirplane
            }),
            language: this.language    
        });
    }

    onSubmit() {
        if (this.myform.valid) {
            console.log('Form Submitted!', this.myform.value);
            //let formData = JSON.stringify(this.myform.value);
            this.dataService.uploadDataFromForm(this.myform.value)
                .subscribe(function (response:any) {
                    this.successFunc(response);
                    },
                    function(error:any) {
                        alert('ERROR!!!');
                    });

            this.myform.reset();
        }
        else {
            console.log('Check form, please!');
        }
    }

    loadEntities() {
        this.dataService.getAllEntities().subscribe((data: TestEntity[]) => this.entities = data);
    }

    successFunc(response:any) {
        alert('Your data is saved!');
    }
}