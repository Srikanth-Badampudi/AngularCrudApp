import { Component, OnInit } from '@angular/core';
import { userModel } from 'src/app/model/task';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css'],
})
export class UsertableComponent implements OnInit {
  constructor(private crud: CrudService) {}

  FormData: FormGroup = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    designation: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  contactsData: any = [];
  IsmodalActive: boolean = false;
  IsinfoModalActive: boolean = false;
  IsEdit: boolean = false;
  selectedUserId: number = null;
  submitted: boolean = false;
  userInfo: any = [];
  designations: Array<string> = [
    'Intern',
    'Software engineer I',
    'Software engineer II',
    'Senior engineer',
    'Frontend Developer',
    'Backend Developer',
  ];

  ngOnInit(): void {
    this.fetchAllUsers();
  }

  fetchAllUsers() {
    this.crud.getAllUsers().subscribe((res: userModel) => {
      this.crud.data = res;
      this.contactsData = res;
    });
  }

  onGetUser(SelectedUser) {
    this.selectedUserId = SelectedUser.id;

    this.setValues({
      firstname: SelectedUser.firstname,
      lastname: SelectedUser.lastname,
      designation: SelectedUser.designation,
      email: SelectedUser.email,
    });
    this.onModelActive();
  }

  setValues(data: object) {
    if (JSON.stringify(data) !== '{}') {
      this.FormData.setValue(data);
    } else {
      this.FormData.setValue({
        firstname: '',
        lastname: '',
        designation: '',
        email: '',
      });
      this.FormSubitStatus();
    }
  }

  Adduser() {
    this.onDisplayModal();
  }

  onDeleteUser(id: number) {
    this.crud.deleteUser(id).subscribe((res) => {
      this.contactsData = this.contactsData.filter((Item) => Item.id != id);
    });
  }

  //Modal functions

  onSubmit() {
    this.submitted = true;
    if (this.FormData.valid && this.submitted && !this.selectedUserId) {
      this.adduser();
      this.FormSubitStatus();
    } else if (this.selectedUserId && this.FormData.valid && this.submitted) {
      this.updateuser();
    } else {
      console.log('==>Form values not updated ', this.FormData);
    }
  }

  onDisplayModal() {
    this.IsmodalActive = !this.IsmodalActive;
  }
  FormSubitStatus() {
    this.submitted = !this.submitted;
  }

  onCloseModal() {
    this.onModelActive();
    this.setValues({});
    this.selectedUserId = null;
    this.submitted = false;
    this.IsEdit = false;
  }

  onModelActive() {
    this.IsmodalActive = !this.IsmodalActive;
  }

  adduser() {
    let updatedData = [...this.contactsData];
    let newUser = { id: this.contactsData.length + 1, ...this.FormData.value };
    this.crud.addUser(newUser).subscribe((value) => {
      updatedData.push(newUser);
      this.contactsData = updatedData;
      this.onCloseModal();
    });
  }

  updateuser() {
    this.crud
      .updateUser(this.selectedUserId, this.FormData.value)
      .subscribe((res) => {
        this.fetchAllUsers();
        this.onDisplayModal();
        this.setValues({});
        this.selectedUserId = null;
      });
  }

  onDisplayUserInfo(data: object) {
    let values = Object.entries(data);
    this.userInfo = values;
    this.onDisplayModalInfo();
  }

  onDisplayModalInfo() {
    this.IsinfoModalActive = !this.IsinfoModalActive;
  }
}
