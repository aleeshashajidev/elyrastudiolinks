import { DOCUMENT } from '@angular/common';
import { Component, Inject, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CustomerReview, GalleryItem, SocialLink } from '../shared/models';
import { customerReviews, galleryImages, socialLinks, whatsappLink } from 'src/shared/config';
import { SocialIconComponent } from './social-icon.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SocialIconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly isDarkMode = signal(true);

  readonly whatsappLink= whatsappLink;

  // Update your business links here.
  readonly links: SocialLink[] = socialLinks; 

  // Replace these files in public/images while keeping the same names.
  readonly gallery: GalleryItem[] = galleryImages; 

  readonly reviews: CustomerReview[] = customerReviews;

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly titleService: Title,
    private readonly metaService: Meta,
  ) {
    this.document.documentElement.dataset['theme'] = 'dark';
    this.titleService.setTitle('Elyra Studio | Perth');
    this.metaService.updateTag({ name: 'description', content: 'Discover timeless Kerala-inspired jewellery from Elyra Studio in Perth. Explore elegant collections, book a viewing, and enquire through WhatsApp, Instagram or Facebook.' });
    this.metaService.updateTag({ property: 'og:title', content: 'Elyra Studio | Perth' });
    this.metaService.updateTag({ property: 'og:description', content: 'Discover timeless Kerala-inspired jewellery from Elyra Studio in Perth. Explore elegant collections, book a viewing, and enquire through WhatsApp, Instagram or Facebook.' });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://elyrastudio.com.au/' });
    this.metaService.updateTag({ property: 'og:image', content: 'https://elyrastudio.com.au/images/logo-light.png' });
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: 'Elyra Studio | Perth' });
    this.metaService.updateTag({ name: 'twitter:description', content: 'Discover timeless Kerala-inspired jewellery from Elyra Studio in Perth. Explore elegant collections, book a viewing, and enquire through WhatsApp, Instagram or Facebook.' });
    this.metaService.updateTag({ name: 'twitter:image', content: 'https://elyrastudio.com.au/images/logo-light.png' });
  }

  toggleTheme(): void {
    this.isDarkMode.update((value) => !value);
    this.document.documentElement.dataset['theme'] = this.isDarkMode() ? 'dark' : 'light';
  }
}
