import { CustomerReview, SocialLink } from "./models";

export const socialLinks: SocialLink[] = [
    {
      name: 'WhatsApp',
      description: 'Join the group for fresh arrivals, styling inspiration and exclusive updates',
      url: 'https://chat.whatsapp.com/JvoElV7fH3U1NH30E0yCSA?s=cl&p=i&ilr=1&amv=1',
      icon: 'WA',
      featured: true,
    },
    {
      name: 'Instagram',
      description: 'Follow for the latest looks, collections and studio updates',
      url: 'https://www.instagram.com/elyrastudio?utm_source=qr',
      icon: 'IG',
    },
    {
      name: 'Facebook',
      description: 'Stay connected for beautiful updates, stories and new releases',
      url: 'https://www.facebook.com/share/1DEM3qvhya/?mibextid=wwXIfr',
      icon: 'FB',
    },
  ];

  export const galleryImages = [
    { src: 'images/jewellery-1.jpeg', alt: 'Traditional Kerala necklace' },
    { src: 'images/jewellery-2.jpeg', alt: 'Gold-tone statement earrings' },
    { src: 'images/jewellery-3.jpeg', alt: 'Kerala jewellery collection' },
  ];

  export const customerReviews: CustomerReview[] = [
    {
      name: 'Asha & Rohan',
      role: 'Bride & Groom',
      quote: 'The pieces felt timeless and beautifully crafted. The experience was warm, thoughtful and effortless from start to finish.',
    },
    {
      name: 'Mina K.',
      role: 'Private Client',
      quote: 'Every detail felt personal. The styling advice made choosing our pieces so much easier and more special.',
    },
    {
      name: 'Priya S.',
      role: 'Returning Client',
      quote: 'Such a beautiful studio experience. The jewellery was elegant, the service was generous, and the result felt truly unforgettable.',
    },
  ];

  export const whatsappLink = 'https://wa.me/61414846547?text=Hi%20Elyra%20Studio%2C%20I%27d%20love%20to%20enquire%20about%20your%20jewellery%20collections%20and%20book%20a%20viewing.';