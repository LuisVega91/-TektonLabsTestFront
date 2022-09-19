import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { ModalConfirmData } from '../../types/modal.types';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
})
export class ConfirmComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ModalConfirmData) {}

  ngOnInit(): void {}
}
