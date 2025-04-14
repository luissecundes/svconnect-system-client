import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { AlertState } from "../../core/interfaces/alert-state.interface";

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private alertSubject = new BehaviorSubject<AlertState | null>(null);

  showAlert(alert: AlertState) {
    this.alertSubject.next(alert);
    setTimeout(() => {
      this.alertSubject.next(null);
    }, 1000);
  }

  getAlertState(): Observable<AlertState | null> {
    return this.alertSubject.asObservable();
  }
}
