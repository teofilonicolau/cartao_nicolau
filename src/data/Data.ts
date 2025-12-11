export interface SocialLink {
  platform: 'Instagram' | 'TikTok' | 'Facebook';
  url: string;
}

export interface LawyerProfile {
  name: string;
  role: string;
  slogan: string;
  address: {
    street: string;
    city: string;
    zip: string;
    mapsLink: string;
  };
  contact: {
    whatsapp: string; // Clean number for API
    whatsappDisplay: string; // Formatted number
    email: string;
    site: string;
  };
  social: SocialLink[];
  colors: {
    primary: string;
    background: string;
    highlight: string;
  };
}

export const rianData: LawyerProfile = {
  name: "Rian Nicolau",
  role: "Advogado - Aposentadorias e Benefícios",
  slogan: "Ajudo você a conseguir seu benefício no INSS!",
  address: {
    street: "R. Uzias Soares Diniz, 277 - 01 - Novo Centro",
    city: "Icó - CE",
    zip: "63430-000",
    mapsLink: "https://www.google.com/maps/search/?api=1&query=R.+Uzias+Soares+Diniz,+277+-+01+-+Novo+Centro,+Icó+-+CE"
  },
  contact: {
    whatsapp: "5588988510834",
    whatsappDisplay: "(88) 98851-0834",
    email: "riannicolau@hotmail.com",
    site: "https://www.riannicolauadv.adv.br/"
  },
  social: [
    { platform: 'Instagram', url: 'https://www.instagram.com/riannicolauadv/' },
    { platform: 'TikTok', url: 'https://www.tiktok.com/@riannicolauadv' },
    { platform: 'Facebook', url: 'https://www.facebook.com/riannicolauadv/?locale=pt_BR' }
  ],
  colors: {
    primary: "#00438F",
    background: "#F8F8F8",
    highlight: "#FDC830"
  }
};
