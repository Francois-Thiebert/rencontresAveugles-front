// safe.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: Uint8Array): SafeResourceUrl {
    const bytes = Array.from(value);
    const base64String = btoa(String.fromCharCode(...bytes));
    const url = `data:image/png;base64,${base64String}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
