import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { TranslateService } from '@ngx-translate/core';
import { MessageService } from '@services/message.service';
import { Subscription } from 'rxjs';
import { UserFacadeService } from './user-management-facade.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent implements OnInit, OnDestroy {
  public form!: FormGroup;
  public subs: Subscription = new Subscription();
  constructor(
    private fb: FormBuilder,
    public translate: TranslateService,
    private userFacade: UserFacadeService,
    private messagesService: MessageService
  ) {
    this.createForm();
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
    this.mensajesError();
    this.mensajes();
  }
  mensajes() {
    let sub: Subscription = this.userFacade
      .getUserMessage$()
      .subscribe((msg) => {
        console.log(
          '%cuser-management.component.ts line:40 msg',
          'color: white; background-color: #007acc;',
          msg
        );
        if (msg && msg !== '') {
          this.messagesService.showCustom(msg, null, 'success');
        }
      });
    this.subs.add(sub);
  }

  mensajesError() {
    let sub: Subscription = this.userFacade
      .getUserError$()
      .subscribe((error) => {
        if (error && error !== '') {
          console.log(
            '%cerror user-management.component.ts line:32 ',
            'color: red; display: block; width: 100%;',
            error
          );
          this.messagesService.showCustom(error, null, 'error');
        }
      });
    this.subs.add(sub);
  }
  createForm(): void {
    this.form = this.fb.group({
      name: new FormControl('nikname'),
      email: new FormControl('email@prueba.com', [Validators.required, Validators.email]),
      avatar: new FormControl(''),
      din: new FormControl('1234567890'),
      pnombre: new FormControl('estarlin', Validators.required),
      snombre: new FormControl('enrique'),
      apellidop: new FormControl('lopez'),
      apellidom: new FormControl('valero'),
      genero: new FormControl('Masculino'),
      celular: new FormControl('3204454846'),
      telefonos: new FormControl('3204454846'),
      pais: new FormControl('Venezuela'),
      departamento: new FormControl('Trujillo'),
      ciudad: new FormControl('Chejende'),
      barrio: new FormControl('El turiamo'),
      direccion: new FormControl('casa 1'),
      fechanacimiento: new FormControl('1977-12-08'),
      role_id: new FormControl(0),
    });
  }
  get email() {
    return this.form.get('email');
  }
  get pnombre() {
    return this.form.get('pnombre');
  }
  save(): void {
    let values = this.form.value;
   this.userFacade.createUser(values);
  }
}
