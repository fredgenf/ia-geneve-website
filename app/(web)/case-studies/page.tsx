
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

import { Card, CardContent } from '@/components/ui/card';
import { caseStudies } from '@/lib/data';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Réalisations',
  description: 'Découvrez nos études de cas et les résultats concrets obtenus pour nos clients.',
};

export default function CaseStudiesPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">
            Nos réalisations, vos succès de demain
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground">
            Nous transformons les défis complexes en résultats mesurables. Explorez comment notre expertise en IA a généré de la valeur pour des PME comme la vôtre.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <Card key={study.slug} className="flex flex-col overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
                <div className="overflow-hidden">
                    <Image
                        src={study.image.src}
                        alt={study.title}
                        width={study.image.width}
                        height={study.image.height}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        data-ai-hint={study.image.hint}
                    />
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                    <h2 className="text-xl font-semibold text-primary group-hover:text-accent transition-colors">{study.title}</h2>
                    <p className="mt-2 text-muted-foreground flex-grow">{study.summary}</p>
                    <div className="mt-4">
                        <Button asChild variant="link" className="p-0 h-auto">
                             <Link href={`/case-studies/${study.slug}`} className="text-accent font-semibold">
                                Lire l'étude de cas <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
          ))}
          {/* Add a placeholder card for upcoming studies */}
          <Card className="flex flex-col items-center justify-center text-center p-6 border-dashed">
            <h2 className="text-xl font-semibold text-muted-foreground">Plus de succès à venir...</h2>
            <p className="mt-2 text-muted-foreground">De nouvelles études de cas sont en cours de rédaction. Revenez bientôt !</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
