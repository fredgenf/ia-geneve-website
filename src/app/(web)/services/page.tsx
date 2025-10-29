
import { Check } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { services } from '@/lib/data';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Découvrez nos services en développement de modèles IA, audit et maintenance.',
};

export default function ServicesPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">
            Nos Domaines d'Expertise
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground">
            De la conception à la maintenance, nous vous accompagnons à chaque étape de votre projet d'intelligence artificielle avec un portefeuille de services complet.
          </p>
        </div>

        {/* Services List */}
        <div className="mt-12 md:mt-16 space-y-16">
          {services.map((service, index) => (
            <Card key={service.title} className="overflow-hidden shadow-lg">
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center`}>
                <div className={`p-8 md:p-12 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">{service.title}</h2>
                  <p className="mt-4 text-muted-foreground">{service.description}</p>
                  <ul className="mt-6 space-y-3">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="mt-8" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
                    <Link href="/contact">Discutons de votre projet</Link>
                  </Button>
                </div>
                <div className={`h-64 md:h-full bg-muted ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  {/* Placeholder for an image or illustration */}
                   <div className="w-full h-full flex items-center justify-center">
                    <service.icon className="h-24 w-24 text-primary/10" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

    