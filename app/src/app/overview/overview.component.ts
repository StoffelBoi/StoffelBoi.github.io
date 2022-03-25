import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  showVideo = false;
  videoHeight = 0;

  constructor() { }

  ngOnInit(): void {
  }

  toggleVideo(event: MouseEvent) {
    const image = event.target as HTMLImageElement;
    if (image != null) {
      this.videoHeight = image.clientHeight;
      this.showVideo = true;
    }    
  }
}
