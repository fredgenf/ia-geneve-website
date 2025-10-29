
import { Mail, Phone, MapPin } from 'lucide-react';
import type { Metadata } from 'next';

import { ContactForm } from '@/components/contact-form';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez AI Solutions PME genève pour une démo ou pour discuter de votre projet.',
};

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@aisolutions-geneve.ch',
    href: 'mailto:contact@aisolutions-geneve.ch',
  },
  {
    icon: Phone,
    label: 'Téléphone',
    value: '+41 78 781 89 02',
    href: 'tel:+41787818902',
  },
  {
    icon: MapPin,
    label: 'Adresse',
    value: 'Chemin Galiffes 2, 1201 Genève, Suisse',
  },
];

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">
            Parlons de votre projet
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground">
            Nous sommes là pour répondre à vos questions. Que ce soit pour une demande de démo, un devis ou une simple discussion, n'hésitez pas.
          </p>
        </div>

        {/* Content */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Form */}
          <div className="order-2 lg:order-1">
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-2xl font-bold">Nos coordonnées</h2>
            {contactDetails.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{item.label}</h3>
                  {item.href ? (
                    <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors">{item.value}</a>
                  ) : (
                    <p className="text-muted-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
