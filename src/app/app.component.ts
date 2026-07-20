import { DOCUMENT } from '@angular/common';
import { Component, Inject, signal } from '@angular/core';
import { GalleryItem, SocialLink } from '../shared/models';
import { galleryImages, socialLinks } from 'src/shared/config';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly isDarkMode = signal(true);

  // Update your business links here.
  readonly links: SocialLink[] = socialLinks; 

  // Replace these files in public/images while keeping the same names.
  readonly gallery: GalleryItem[] = galleryImages; 

  constructor(@Inject(DOCUMENT) private readonly document: Document) {
    this.document.documentElement.dataset['theme'] = 'dark';
  }

  toggleTheme(): void {
    this.isDarkMode.update((value) => !value);
    this.document.documentElement.dataset['theme'] = this.isDarkMode() ? 'dark' : 'light';
  }
}
