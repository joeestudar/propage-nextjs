export type Language = 'en' | 'es' | 'pt';

export interface DemoNavbar {
  callNow: string;
  services: string;
  about: string;
  reviews: string;
  contact: string;
}

export interface DemoServices {
  title: string;
  subtitle: string;
}

export interface DemoTestimonials {
  title: string;
  subtitle: string;
}

export interface DemoFAQ {
  title: string;
  subtitle: string;
}

export interface DemoContact {
  title: string;
  subtitle: string;
  phone: string;
  email: string;
  address: string;
  hours: string;
  callBusiness: string;
  googleMaps: string;
}

export interface DemoFooter {
  tagline: string;
  copyright: string;
  developedBy: string;
}

export interface Navbar {
  templates: string;
  howItWorks: string;
  pricing: string;
  testimonials: string;
  getYourPage: string;
}

export interface Hero {
  title1: string;
  title2: string;
  subtitle: string;
  ctaGetPage: string;
  ctaViewTemplates: string;
  badge48h: string;
  badgeFlat: string;
  badgeCustom: string;
}

export interface Features {
  title: string;
  subtitle: string;
  mobileTitle: string;
  mobileDesc: string;
  seoTitle: string;
  seoDesc: string;
  fastTitle: string;
  fastDesc: string;
  brandingTitle: string;
  brandingDesc: string;
  formsTitle: string;
  formsDesc: string;
  mapsTitle: string;
  mapsDesc: string;
  emailTitle: string;
  emailDesc: string;
}

export interface HowItWorks {
  title: string;
  subtitle: string;
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;
}

export interface Pricing {
  title: string;
  subtitle: string;
  oneTime: string;
  features: string[];
  cta: string;
  domainNote: string;
}

export interface OrderForm {
  title: string;
  subtitle: string;
  styles: string[];
  nameLabel: string;
  emailLabel: string;
  businessLabel: string;
  phoneLabel: string;
  templateLabel: string;
  selectStyle: string;
  detailsLabel: string;
  detailsPlaceholder: string;
  payButton: string;
  deliveryNote: string;
  processing: string;
  error: string;
  networkError: string;
}

export interface Testimonials {
  title: string;
  subtitle: string;
  items: { text: string }[];
}

export interface FAQ {
  title: string;
  subtitle: string;
  items: { q: string; a: string }[];
}

export interface Gallery {
  title: string;
  subtitle: string;
  viewDemo: string;
}

export interface Footer {
  description: string;
  services: string;
  landingPages: string;
  customDesign: string;
  fastDelivery: string;
  seoSetup: string;
  contact: string;
  phone: string;
  email: string;
  location: string;
  copyright: string;
  developedBy: string;
}

export interface Success {
  title: string;
  subtitle: string;
  nextTitle: string;
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;
  backHome: string;
}

export interface Translations {
  whatsappMessage: string;
  demoNavbar: DemoNavbar;
  demoServices: DemoServices;
  demoTestimonials: DemoTestimonials;
  demoFAQ: DemoFAQ;
  demoContact: DemoContact;
  demoFooter: DemoFooter;
  navbar: Navbar;
  hero: Hero;
  features: Features;
  howItWorks: HowItWorks;
  pricing: Pricing;
  orderForm: OrderForm;
  testimonials: Testimonials;
  faq: FAQ;
  gallery: Gallery;
  footer: Footer;
  success: Success;
}

export const translations: Record<Language, Translations> = {
  en: {
    whatsappMessage: 'Hello, I would like to create my landing page for $40 USD.',
    demoNavbar: {
      callNow: 'Call Now',
      services: 'Services',
      about: 'About',
      reviews: 'Reviews',
      contact: 'Contact',
    },
    demoServices: {
      title: 'Our Services',
      subtitle: 'Professional solutions tailored to your needs.',
    },
    demoTestimonials: {
      title: 'What Our Clients Say',
      subtitle: "Don't just take our word for it.",
    },
    demoFAQ: {
      title: 'Frequently Asked Questions',
      subtitle: "Got questions? We've got answers.",
    },
    demoContact: {
      title: 'Contact Us',
      subtitle: "We'd love to hear from you. Reach out anytime.",
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      hours: 'Hours',
      callBusiness: 'Call {name}',
      googleMaps: 'Open in Google Maps →',
    },
    demoFooter: {
      tagline: 'Professional services you can trust.',
      copyright: '© {year} {name}. All rights reserved.',
      developedBy: 'Developed by ShalomSites',
    },
    navbar: {
      templates: 'Templates',
      howItWorks: 'How It Works',
      pricing: 'Pricing',
      testimonials: 'Testimonials',
      getYourPage: 'Get Your Page →',
    },
    hero: {
      title1: 'Get a Professional Landing Page',
      title2: 'Built in 48 Hours',
      subtitle: 'Stop losing customers to a bad website. Get a fast, beautiful, mobile-friendly page that turns visitors into paying clients — for just $40.',
      ctaGetPage: 'Get Your Page →',
      ctaViewTemplates: 'View Templates',
      badge48h: '48h Delivery',
      badgeFlat: '$40 Flat',
      badgeCustom: '100% Custom',
    },
    features: {
      title: 'Why ProPage',
      subtitle: "Everything your business needs in a landing page — nothing you don't.",
      mobileTitle: 'Mobile-First Design',
      mobileDesc: 'Every page is designed for mobile first, then scaled up. Your customers will have a perfect experience on any device.',
      seoTitle: 'SEO Optimized',
      seoDesc: 'Proper meta tags, structured data, and fast load times help your page rank higher in Google search results.',
      fastTitle: 'Fast Loading',
      fastDesc: 'Optimized images and clean code ensure your page loads in under 2 seconds. No slow, bloated builders here.',
      brandingTitle: 'Custom Branding',
      brandingDesc: 'Your page is built around your brand — colors, fonts, logo, and imagery all match your business identity.',
      formsTitle: 'Contact Forms',
      formsDesc: 'Built-in contact forms that send leads directly to your email. Never miss a potential customer again.',
      mapsTitle: 'Google Maps',
      mapsDesc: 'Embedded Google Maps help customers find your location easily. Essential for local businesses.',
      emailTitle: 'Professional Email',
      emailDesc: 'Get a branded business email (like info@yourbusiness.com) to look professional and build trust with customers.*',
    },
    howItWorks: {
      title: 'How It Works',
      subtitle: 'Three simple steps to your new landing page.',
      step1Title: 'Choose Your Template',
      step1Desc: 'Pick from our curated templates designed for your industry. Each one is built to convert visitors into customers.',
      step2Title: 'We Customize It',
      step2Desc: 'We tailor the template with your brand colors, logo, content, and images. Every detail matches your business.',
      step3Title: 'Go Live',
      step3Desc: 'Your page goes live in 48 hours or less. We handle hosting setup and give you a domain you control.',
    },
    pricing: {
      title: 'Simple Pricing',
      subtitle: 'No subscriptions. No hidden fees. One page, one price.',
      oneTime: 'One-Time Payment',
      features: [
        'Custom design tailored to your brand',
        'Mobile responsive on all devices',
        'SEO optimized for Google',
        'Built-in contact form',
        'Google Maps integration',
        '48-hour delivery',
        '1 free revision included',
        'Professional business email setup*',
      ],
      cta: 'Get Your Page Now',
      domainNote: '* Domain registration is the client\'s responsibility. We help set up the email once your domain is ready.',
    },
    gallery: {
      title: 'Template Showcase',
      subtitle: 'Explore 10 live templates built for real businesses. Click any one to see a live demo.',
      viewDemo: 'View Demo →',
    },

    orderForm: {
      title: 'Get Started',
      subtitle: "Fill out the form below and we'll start building your page.",
      styles: ['Modern Dark', 'Clean Minimal', 'Bold Professional', 'Warm and Friendly', 'Tech Forward', 'Elegant Premium'],
      nameLabel: 'Your Name',
      emailLabel: 'Email Address',
      businessLabel: 'Business Name',
      phoneLabel: 'Phone Number',
      templateLabel: 'Template Style',
      selectStyle: 'Select a style',
      detailsLabel: 'Project Details',
      detailsPlaceholder: 'Tell us about your business, what you want on the page, and any specific requirements...',
      payButton: 'Pay on Delivery',
      deliveryNote: 'Payment is made only when the page is delivered and approved.',
      processing: 'Submitting...',
      error: 'Something went wrong. Please try again.',
      networkError: 'Network error. Please check your connection and try again.',
    },
    testimonials: {
      title: 'What Our Customers Say',
      subtitle: 'Real feedback from business owners who got their pages built.',
      items: [
        { text: 'ProPage delivered our site in 36 hours. We booked 4 new clients in the first week. Best $40 I ever spent.' },
        { text: 'The site looks like I paid $2,000 for it. Customers constantly compliment how professional it looks.' },
        { text: 'We were losing patients to competitors with better websites. ProPage fixed that in 2 days. Our bookings are up 30%.' },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: "Got questions? We've got answers.",
      items: [
        { q: 'What do I get for $40?', a: 'A complete, custom-branded landing page with your business info, services, contact form, Google Maps, and mobile optimization. Hosted on our fast servers.' },
        { q: 'How long does it take?', a: 'Most pages are delivered within 48 hours. Complex customizations may take up to 72 hours.' },
        { q: 'Can I make changes after?', a: 'Yes! Your first revision is free. Additional revisions are $10 each.' },
        { q: 'Do I need a domain?', a: 'No! We host your page on a professional subdomain. If you have your own domain, we can point it there for free.' },
        { q: 'How do I pay?', a: 'Payment is made on delivery only. No cards, no PayPal, no upfront charge.' },
        { q: 'Is there a monthly fee?', a: 'No! $40 is a one-time payment. Your page stays live forever. Optional hosting renewal at $10/year after the first year.' },
      ],
    },
    footer: {
      description: 'Professional landing pages for local businesses. Fast, affordable, and built to convert.',
      services: 'Services',
      landingPages: 'Landing Pages',
      customDesign: 'Custom Design',
      fastDelivery: 'Fast Delivery',
      seoSetup: 'SEO Setup',
      contact: 'Contact',
      phone: '+55 15 99712-4325',
      email: 'propages@shalomsites.com.br',
      location: 'Serving businesses nationwide',
      copyright: '© {year} ProPage Design. All rights reserved.',
      developedBy: 'Developed by ShalomSites',
    },
    success: {
      title: 'Order Received!',
      subtitle: "Thank you for your order. We'll start building your landing page within 24 hours. Payment on delivery.",
      nextTitle: 'What happens next:',
      step1Title: 'We review your submission',
      step1Desc: 'Our team will review the details you provided and confirm everything is clear.',
      step2Title: 'We build your page',
      step2Desc: 'Your custom landing page will be designed and developed within 48 hours.',
      step3Title: 'You review and pay on delivery',
      step3Desc: "We'll send you a preview link. Request any changes until you're 100% happy, then pay when everything is delivered.",
      backHome: 'Back to Home',
    },
  },

  es: {
    whatsappMessage: 'Hola, me gustaría crear mi landing page por $40 USD.',
    demoNavbar: {
      callNow: 'Llamar Ahora',
      services: 'Servicios',
      about: 'Acerca de',
      reviews: 'Reseñas',
      contact: 'Contacto',
    },
    demoServices: {
      title: 'Nuestros Servicios',
      subtitle: 'Soluciones profesionales adaptadas a tus necesidades.',
    },
    demoTestimonials: {
      title: 'Lo Que Dicen Nuestros Clientes',
      subtitle: 'No solo confíes en nuestra palabra.',
    },
    demoFAQ: {
      title: 'Preguntas Frecuentes',
      subtitle: '¿Tienes preguntas? Tenemos respuestas.',
    },
    demoContact: {
      title: 'Contáctanos',
      subtitle: 'Nos encantaría saber de ti. Comunícate en cualquier momento.',
      phone: 'Teléfono',
      email: 'Correo',
      address: 'Dirección',
      hours: 'Horario',
      callBusiness: 'Llamar a {name}',
      googleMaps: 'Abrir en Google Maps →',
    },
    demoFooter: {
      tagline: 'Servicios profesionales en los que puedes confiar.',
      copyright: '© {year} {name}. Todos los derechos reservados.',
      developedBy: 'Desarrollado por ShalomSites',
    },
    navbar: {
      templates: 'Plantillas',
      howItWorks: 'Cómo Funciona',
      pricing: 'Precios',
      testimonials: 'Testimonios',
      getYourPage: 'Obtén Tu Página →',
    },
    hero: {
      title1: 'Obtén una Página Profesional',
      title2: 'Creada en 48 Horas',
      subtitle: 'Deja de perder clientes por un mal sitio web. Obtén una página rápida, hermosa y optimizada para móvil que convierta visitantes en clientes — por solo $40.',
      ctaGetPage: 'Obtén Tu Página →',
      ctaViewTemplates: 'Ver Plantillas',
      badge48h: 'Entrega en 48h',
      badgeFlat: '$40 Fijo',
      badgeCustom: '100% Personalizado',
    },
    features: {
      title: 'Por Qué ProPage',
      subtitle: 'Todo lo que tu negocio necesita en una página de aterrizaje — nada que no necesites.',
      mobileTitle: 'Diseño Mobile-First',
      mobileDesc: 'Cada página está diseñada para móviles primero y luego escalada. Tus clientes tendrán una experiencia perfecta en cualquier dispositivo.',
      seoTitle: 'Optimizado para SEO',
      seoDesc: 'Meta tags adecuados, datos estructurados y tiempos de carga rápidos ayudan a tu página a rankear más alto en Google.',
      fastTitle: 'Carga Rápida',
      fastDesc: 'Imágenes optimizadas y código limpio aseguran que tu página cargue en menos de 2 segundos.',
      brandingTitle: 'Branding Personalizado',
      brandingDesc: 'Tu página está construida alrededor de tu marca — colores, fuentes, logo e imágenes coinciden con la identidad de tu negocio.',
      formsTitle: 'Formularios de Contacto',
      formsDesc: 'Formularios de contacto integrados que envían leads directamente a tu email. Nunca pierdas un cliente potencial.',
      mapsTitle: 'Google Maps',
      mapsDesc: 'Google Maps integrado ayuda a los clientes a encontrar tu ubicación fácilmente.',
      emailTitle: 'Email Profesional',
      emailDesc: 'Obtén un email comercial con tu marca (como info@tunegocio.com) para parecer profesional y generar confianza.*',
    },
    howItWorks: {
      title: 'Cómo Funciona',
      subtitle: 'Tres pasos simples para tu nueva página de aterrizaje.',
      step1Title: 'Elige Tu Plantilla',
      step1Desc: 'Elige entre nuestras plantillas diseñadas para tu industria.',
      step2Title: 'La Personalizamos',
      step2Desc: 'Adaptamos la plantilla con los colores, logo, contenido e imágenes de tu marca.',
      step3Title: 'Publica',
      step3Desc: 'Tu página está en línea en 48 horas o menos. Nos encargamos del hosting.',
    },
    pricing: {
      title: 'Precios Simples',
      subtitle: 'Sin suscripciones. Sin costos ocultos. Una página, un precio.',
      oneTime: 'Pago Único',
      features: [
        'Diseño personalizado para tu marca',
        'Responsive en todos los dispositivos',
        'Optimizado para Google',
        'Formulario de contacto integrado',
        'Integración con Google Maps',
        'Entrega en 48 horas',
        '1 revisión gratuita incluida',
        'Configuración de email profesional*',
      ],
      cta: 'Obtén Tu Página Ahora',
      domainNote: '* El registro de dominio es responsabilidad del cliente. Te ayudamos a configurar el email una vez que tu dominio esté listo.',
    },
    gallery: {
      title: 'Galería de Plantillas',
      subtitle: 'Explora 10 plantillas en vivo creadas para negocios reales. Haz clic en cualquiera para ver una demo en vivo.',
      viewDemo: 'Ver Demo →',
    },

    orderForm: {
      title: 'Comienza Ahora',
      subtitle: 'Completa el formulario y comenzaremos a crear tu página.',
      styles: ['Oscuro Moderno', 'Mínimo Limpio', 'Profesional Negrita', 'Cálido y Amigable', 'Tecnológico', 'Elegante Premium'],
      nameLabel: 'Tu Nombre',
      emailLabel: 'Correo Electrónico',
      businessLabel: 'Nombre del Negocio',
      phoneLabel: 'Número de Teléfono',
      templateLabel: 'Estilo de Plantilla',
      selectStyle: 'Selecciona un estilo',
      detailsLabel: 'Detalles del Proyecto',
      detailsPlaceholder: 'Cuéntanos sobre tu negocio, lo que quieres en la página y cualquier requisito específico...',
      payButton: 'Paga al Entregar',
      deliveryNote: 'El pago se realiza solo al entregar y aprobar la página.',
      processing: 'Enviando...',
      error: 'Algo salió mal. Por favor, inténtalo de nuevo.',
      networkError: 'Error de red. Verifica tu conexión e inténtalo de nuevo.',
    },
    testimonials: {
      title: 'Lo Que Dicen Nuestros Clientes',
      subtitle: 'Comentarios reales de dueños de negocios que obtuvieron sus páginas.',
      items: [
        { text: 'ProPage entregó nuestro sitio en 36 horas. Reservamos 4 nuevos clientes en la primera semana. Los mejores $40 que gasté.' },
        { text: 'El sitio parece que pagué $2,000 por él. Los clientes constantemente elogian lo profesional que se ve.' },
        { text: 'Estábamos perdiendo pacientes frente a competidores con mejores sitios web. ProPage lo solucionó en 2 días. Nuestras reservas subieron un 30%.' },
      ],
    },
    faq: {
      title: 'Preguntas Frecuentes',
      subtitle: '¿Tienes preguntas? Tenemos respuestas.',
      items: [
        { q: '¿Qué obtengo por $40?', a: 'Una página de aterrizaje completa y personalizada con la información de tu negocio, servicios, formulario de contacto, Google Maps y optimización móvil. Alojada en nuestros servidores rápidos.' },
        { q: '¿Cuánto tiempo toma?', a: 'La mayoría de las páginas se entregan en 48 horas. Las personalizaciones complejas pueden tomar hasta 72 horas.' },
        { q: '¿Puedo hacer cambios después?', a: '¡Sí! Tu primera revisión es gratis. Revisiones adicionales cuestan $10 cada una.' },
        { q: '¿Necesito un dominio?', a: '¡No! Alojamos tu página en un subdominio profesional. Si tienes tu propio dominio, podemos apuntarlo allí gratis.' },
        { q: '¿Cómo pago?', a: 'El pago se realiza solo al entregar la página. Sin tarjetas, sin PayPal y sin cobro anticipado.' },
        { q: '¿Hay una tarifa mensual?', a: '¡No! $40 es un pago único. Tu página permanece activa para siempre. Renovación de hosting opcional a $10/año después del primer año.' },
      ],
    },
    footer: {
      description: 'Páginas de aterrizaje profesionales para negocios locales. Rápidas, asequibles y creadas para convertir.',
      services: 'Servicios',
      landingPages: 'Páginas de Aterrizaje',
      customDesign: 'Diseño Personalizado',
      fastDelivery: 'Entrega Rápida',
      seoSetup: 'Configuración SEO',
      contact: 'Contacto',
      phone: '+55 15 99712-4325',
      email: 'propages@shalomsites.com.br',
      location: 'Atendiendo negocios en todo el país',
      copyright: '© {year} ProPage Design. Todos los derechos reservados.',
      developedBy: 'Desarrollado por ShalomSites',
    },
    success: {
      title: '¡Pedido Recibido!',
      subtitle: 'Gracias por tu pedido. Comenzaremos a crear tu página dentro de 24 horas. Pago al entregar.',
      nextTitle: 'Qué sucede después:',
      step1Title: 'Revisamos tu solicitud',
      step1Desc: 'Nuestro equipo revisará los detalles que proporcionaste y confirmará que todo esté claro.',
      step2Title: 'Construimos tu página',
      step2Desc: 'Tu página personalizada será diseñada y desarrollada dentro de 48 horas.',
      step3Title: 'Revisas y pagas al entregar',
      step3Desc: 'Te enviaremos un enlace de vista previa. Solicita cambios hasta que estés 100% satisfecho y paga cuando esté entregado.',
      backHome: 'Volver al Inicio',
    },
  },

  pt: {
    whatsappMessage: 'Olá, gostaria de criar minha landing page por $40 USD.',
    demoNavbar: {
      callNow: 'Ligar Agora',
      services: 'Serviços',
      about: 'Sobre',
      reviews: 'Avaliações',
      contact: 'Contato',
    },
    demoServices: {
      title: 'Nossos Serviços',
      subtitle: 'Soluções profissionais adaptadas às suas necessidades.',
    },
    demoTestimonials: {
      title: 'O Que Nossos Clientes Dizem',
      subtitle: 'Não confie apenas na nossa palavra.',
    },
    demoFAQ: {
      title: 'Perguntas Frequentes',
      subtitle: 'Tem perguntas? Temos respostas.',
    },
    demoContact: {
      title: 'Entre em Contato',
      subtitle: 'Adoraríamos ouvir de você. Entre em contato a qualquer momento.',
      phone: 'Telefone',
      email: 'Email',
      address: 'Endereço',
      hours: 'Horário',
      callBusiness: 'Ligar para {name}',
      googleMaps: 'Abrir no Google Maps →',
    },
    demoFooter: {
      tagline: 'Serviços profissionais nos quais você pode confiar.',
      copyright: '© {year} {name}. Todos os direitos reservados.',
      developedBy: 'Desenvolvido por ShalomSites',
    },
    navbar: {
      templates: 'Modelos',
      howItWorks: 'Como Funciona',
      pricing: 'Preços',
      testimonials: 'Depoimentos',
      getYourPage: 'Obtenha Sua Página →',
    },
    hero: {
      title1: 'Obtenha uma Página Profissional',
      title2: 'Criada em 48 Horas',
      subtitle: 'Pare de perder clientes por causa de um site ruim. Obtenha uma página rápida, bonita e otimizada para celular que converte visitantes em clientes — por apenas $40.',
      ctaGetPage: 'Obtenha Sua Página →',
      ctaViewTemplates: 'Ver Modelos',
      badge48h: 'Entrega em 48h',
      badgeFlat: '$40 Fixo',
      badgeCustom: '100% Personalizado',
    },
    features: {
      title: 'Por Que ProPage',
      subtitle: 'Tudo que seu negócio precisa em uma página de aterrissagem — nada que não precise.',
      mobileTitle: 'Design Mobile-First',
      mobileDesc: 'Cada página é projetada para dispositivos móveis primeiro e depois ampliada. Seus clientes terão uma experiência perfeita em qualquer dispositivo.',
      seoTitle: 'Otimizado para SEO',
      seoDesc: 'Meta tags adequados, dados estruturados e tempos de carregamento rápidos ajudam sua página a ranquear mais alto no Google.',
      fastTitle: 'Carregamento Rápido',
      fastDesc: 'Imagens otimizadas e código limpo garantem que sua página carregue em menos de 2 segundos.',
      brandingTitle: 'Branding Personalizado',
      brandingDesc: 'Sua página é construída em torno da sua marca — cores, fontes, logotipo e imagens combinam com a identidade do seu negócio.',
      formsTitle: 'Formulários de Contato',
      formsDesc: 'Formulários de contato integrados que enviam leads diretamente para seu email.',
      mapsTitle: 'Google Maps',
      mapsDesc: 'Google Maps integrado ajuda os clientes a encontrar sua localização facilmente.',
      emailTitle: 'Email Profissional',
      emailDesc: 'Tenha um email comercial com sua marca (como info@seunegocio.com) para parecer profissional e gerar confiança.*',
    },
    howItWorks: {
      title: 'Como Funciona',
      subtitle: 'Três passos simples para sua nova página de aterrissagem.',
      step1Title: 'Escolha Seu Modelo',
      step1Desc: 'Escolha entre nossos modelos projetados para sua indústria.',
      step2Title: 'Personalizamos',
      step2Desc: 'Adaptamos o modelo com as cores, logotipo, conteúdo e imagens da sua marca.',
      step3Title: 'Publique',
      step3Desc: 'Sua página fica online em 48 horas ou menos. Cuidamos da hospedagem.',
    },
    pricing: {
      title: 'Preços Simples',
      subtitle: 'Sem assinaturas. Sem taxas ocultas. Uma página, um preço.',
      oneTime: 'Pagamento Único',
      features: [
        'Design personalizado para sua marca',
        'Responsivo em todos os dispositivos',
        'Otimizado para Google',
        'Formulário de contato integrado',
        'Integração com Google Maps',
        'Entrega em 48 horas',
        '1 revisão gratuita incluída',
        'Configuração de email profissional*',
      ],
      cta: 'Obtenha Sua Página Agora',
      domainNote: '* O registro de domínio é responsabilidade do cliente. Ajudamos a configurar o email assim que seu domínio estiver pronto.',
    },
    gallery: {
      title: 'Galeria de Modelos',
      subtitle: 'Explore 10 modelos ao vivo criados para negócios reais. Clique em qualquer um para ver uma demo ao vivo.',
      viewDemo: 'Ver Demo →',
    },

    orderForm: {
      title: 'Comece Agora',
      subtitle: 'Preencha o formulário abaixo e começaremos a criar sua página.',
      styles: ['Moderno Escuro', 'Limpo Minimal', 'Profissional Negrito', 'Caloroso e Amigável', 'Tecnológico', 'Elegante Premium'],
      nameLabel: 'Seu Nome',
      emailLabel: 'Email',
      businessLabel: 'Nome do Negócio',
      phoneLabel: 'Número de Telefone',
      templateLabel: 'Estilo do Modelo',
      selectStyle: 'Selecione um estilo',
      detailsLabel: 'Detalhes do Projeto',
      detailsPlaceholder: 'Conte-nos sobre seu negócio, o que você quer na página e quaisquer requisitos específicos...',
      payButton: 'PAGUE NA ENTREGA',
      deliveryNote: 'O pagamento é feito somente na entrega e aprovação da página.',
      processing: 'Enviando...',
      error: 'Algo deu errado. Por favor, tente novamente.',
      networkError: 'Erro de rede. Verifique sua conexão e tente novamente.',
    },
    testimonials: {
      title: 'O Que Nossos Clientes Dizem',
      subtitle: 'Feedback real de proprietários de negócios que obtiveram suas páginas.',
      items: [
        { text: 'A ProPage entregou nosso site em 36 horas. Fechamos 4 novos clientes na primeira semana. Melhores R$40 que gastei.' },
        { text: 'O site parece que paguei R$2.000 por ele. Clientes constantemente elogiam o profissional que ele parece.' },
        { text: 'Estávamos perdendo pacientes para concorrentes com sites melhores. A ProPage resolveu isso em 2 dias. Nossas reservas aumentaram 30%.' },
      ],
    },
    faq: {
      title: 'Perguntas Frequentes',
      subtitle: 'Tem perguntas? Temos respostas.',
      items: [
        { q: 'O que eu recebo por $40?', a: 'Uma página de aterrissagem completa e personalizada com as informações do seu negócio, serviços, formulário de contato, Google Maps e otimização mobile. Hospedada em nossos servidores rápidos.' },
        { q: 'Quanto tempo leva?', a: 'A maioria das páginas é entregue em 48 horas. Personalizações complexas podem levar até 72 horas.' },
        { q: 'Posso fazer alterações depois?', a: 'Sim! Sua primeira revisão é gratuita. Revisões adicionais custam $10 cada.' },
        { q: 'Preciso de um domínio?', a: 'Não! Hospedamos sua página em um subdomínio profissional. Se você tem seu próprio domínio, podemos apontar para lá gratuitamente.' },
        { q: 'Como eu pago?', a: 'O pagamento é feito apenas na entrega da página. Sem cartão, sem PayPal e sem cobrança antecipada.' },
        { q: 'Há uma taxa mensal?', a: 'Não! $40 é um pagamento único. Sua página fica ativa para sempre. Renovação de hospedagem opcional a $10/ano após o primeiro ano.' },
      ],
    },
    footer: {
      description: 'Páginas de aterrissagem profissionais para negócios locais. Rápidas, acessíveis e construídas para converter.',
      services: 'Serviços',
      landingPages: 'Páginas de Aterrissagem',
      customDesign: 'Design Personalizado',
      fastDelivery: 'Entrega Rápida',
      seoSetup: 'Configuração SEO',
      contact: 'Contato',
      phone: '+55 15 99712-4325',
      email: 'propages@shalomsites.com.br',
      location: 'Atendendo negócios em todo o país',
      copyright: '© {year} ProPage Design. Todos os direitos reservados.',
      developedBy: 'Desenvolvido por ShalomSites',
    },
    success: {
      title: 'Pedido Recebido!',
      subtitle: 'Obrigado pelo seu pedido. Começaremos a criar sua página dentro de 24 horas. Pagamento na entrega.',
      nextTitle: 'O que acontece depois:',
      step1Title: 'Revisamos sua solicitação',
      step1Desc: 'Nossa equipe revisará os detalhes que você forneceu e confirmará que tudo está claro.',
      step2Title: 'Construímos sua página',
      step2Desc: 'Sua página personalizada será projetada e desenvolvida dentro de 48 horas.',
      step3Title: 'Você revisa e paga na entrega',
      step3Desc: 'Enviaremos um link de visualização. Solicite alterações até estar 100% satisfeito e pague quando estiver entregue.',
      backHome: 'Voltar ao Início',
    },
  },
};