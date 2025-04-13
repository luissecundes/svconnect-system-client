import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FilterField } from '../../core/interfaces/dynamic-filter.interface';


@Component({
  selector: 'app-dynamic-filter',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dynamic-filter.component.html',
  styleUrl: './dynamic-filter.component.scss',
})
export class DynamicFilterComponent implements OnInit {
  @Input() fields: FilterField[] = [];
  @Output() filterChanged = new EventEmitter<any>();

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    const group: any = {};
    for (const field of this.fields) {
      group[field.key] = this.fb.control('');
    }
    this.form = this.fb.group(group);
  }

  applyFilters() {
    this.filterChanged.emit(this.form.value);
  }

  clearFilters() {
    this.form.reset();
    this.filterChanged.emit(this.form.value);
  }

  emitFilter() {
    this.filterChanged.emit(this.form.value);
  }
}
