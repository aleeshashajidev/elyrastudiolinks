import { SocialLink } from "./models";

export const socialLinks: SocialLink[] = [
    {
      name: 'WhatsApp',
      description: 'Enquire, order or book a viewing',
      url: 'https://wa.me/61414846547?text=Hi%20Elyra%20Studio%2C%20I%27d%20love%20to%20enquire%20about%20your%20jewellery%20collections%20and%20book%20a%20viewing.',
      icon: 'WA',
      featured: true,
    },
    {
      name: 'Instagram',
      description: 'New arrivals, styling and reels',
      url: 'https://www.instagram.com/elyrastudio?utm_source=qr',
      icon: 'IG',
    },
    {
      name: 'Facebook',
      description: 'Follow our page for latest updates',
      url: 'https://www.facebook.com/share/1DEM3qvhya/?mibextid=wwXIfr',
      icon: 'FB',
    },
  ];

  export const galleryImages = [
    { src: 'images/jewellery-1.jpeg', alt: 'Traditional Kerala necklace' },
    { src: 'images/jewellery-2.jpeg', alt: 'Gold-tone statement earrings' },
    { src: 'images/jewellery-3.jpeg', alt: 'Kerala jewellery collection' },
  ];