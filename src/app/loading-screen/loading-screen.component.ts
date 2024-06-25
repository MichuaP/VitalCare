import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingService } from '../shared/loading.service';

@Component({
  selector: 'app-loading-screen',
  standalone: true,
  imports: [],
  templateUrl: './loading-screen.component.html',
  styleUrl: './loading-screen.component.css'
})
export class LoadingScreenComponent {
  isLoading: boolean = false;
  private subscription: Subscription;

  constructor(private loadingService: LoadingService) {}

  ngOnInit() {
    this.subscription = this.loadingService.loading$.subscribe(
      (isLoading) => {
        this.isLoading = isLoading;
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
