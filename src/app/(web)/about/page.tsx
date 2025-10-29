
import Image from 'next/image';
import { Check, Rocket, Users, Handshake } from 'lucide-react';
import type { Metadata } from 'next';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'À Propos',
  description: 'Découvrez la mission, les valeurs et l\'histoire de AI Solutions PME genève.',
};

const teamImage = PlaceHolderImages.find(p => p.id === 'about-team');

const values = [
  {
    icon: Rocket,
    title: 'Innovation pragmatique',
    description: "Nous marions la technologie de pointe avec des solutions concrètes et applicables pour un impact réel.",
  },
  {
    icon: Users,
    title: 'Centré sur le client',
    description: "Votre succès est notre priorité. Nous travaillons en étroite collaboration pour comprendre et répondre à vos besoins.",
  },
  {
    icon: Handshake,
    title: 'Partenariat et transparence',
    description: "Nous croyons en une communication ouverte et en la construction de relations de confiance à long terme.",
  },
];

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">
            Notre Mission : Démocratiser l'IA pour les PME
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground">
            Chez AI Solutions PME genève, nous sommes convaincus que l'intelligence artificielle n'est pas réservée aux géants de la tech. Notre objectif est de rendre l'IA accessible, compréhensible et rentable pour les petites et moyennes entreprises.
          </p>
        </div>

        {/* Image */}
        {teamImage && (
          <div className="mt-12 md:mt-16 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={teamImage.imageUrl}
              alt={teamImage.description}
              width={1200}
              height={800}
              className="w-full"
              data-ai-hint={teamImage.imageHint}
            />
          </div>
        )}

        {/* Story Section */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary">Notre Histoire</h2>
            <p className="mt-4 text-muted-foreground">
              Fondée par une équipe de passionnés de données et d'ingénieurs logiciels, AI Solutions PME genève est née d'un constat simple : de nombreuses PME passent à côté du potentiel de l'IA par manque de ressources ou d'expertise.
            </p>
            <p className="mt-4 text-muted-foreground">
              Nous avons décidé de combler ce fossé en proposant une approche de conseil et de développement agile, centrée sur la création de valeur rapide. Nous ne vendons pas de la technologie, nous construisons des solutions qui résolvent des problèmes concrets.
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Notre approche</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p><strong>Écoute active</strong> pour cerner vos enjeux uniques.</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p><strong>Développement itératif</strong> pour des résultats visibles rapidement.</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p><strong>Transfert de compétences</strong> pour vous rendre autonomes.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <div className="mt-16 md:mt-24">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-primary">Nos Valeurs</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Ce qui guide chacune de nos actions et collaborations.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center p-6 bg-card rounded-lg shadow-sm">
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
