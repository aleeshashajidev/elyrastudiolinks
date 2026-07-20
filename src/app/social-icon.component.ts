import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-icon',
  standalone: true,
  template: `
    @switch (icon) {
      @case ('WA') {
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7.3 19.2c-.7-.3-1.3-1-1.4-1.8L5.2 13a8 8 0 1 1 7.3 8.7l-3.2.5a1.1 1.1 0 0 1-.9-.2Z" />
          <path d="M9 11.1c.2-.9.8-1.4 1.7-1.4h.3c.7 0 1.3.5 1.6 1.2l.3.7c.2.5.2 1.1-.1 1.6l-.3.5a1.2 1.2 0 0 1-.8.6l-.6.1a1 1 0 0 0-.7.6l-.3.9" />
          <path d="m10.8 11 1.1 1.1 1.8-1.8" />
        </svg>
      }
      @case ('IG') {
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="1.1" />
        </svg>
      }
      @case ('FB') {
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14 8h2V5h-2a3 3 0 0 0-3 3v2H8v3h3v7h3v-7h2.3l.4-3H14V8Z" />
        </svg>
      }
      @default {
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 7h10v10H7z" />
          <path d="m7 7 10 10" />
        </svg>
      }
    }
  `,
  styleUrl: './social-icon.component.scss',
})
export class SocialIconComponent {
  @Input() icon = '';
  @Input() label = '';
}
