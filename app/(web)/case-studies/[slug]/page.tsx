
import { notFound } from 'next/navigation';
import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle } from 'lucide-react';

import { caseStudies } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { CaseStudyChart } from '@/components/case-study-chart';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = caseStudies.find((s) => s.slug === params.slug);

  if (!study) {
    return {
      title: 'Étude de cas non trouvée',
    };
  }

  return {
    title: study.title,
    description: study.summary,
  };
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export default function CaseStudyDetailPage({ params }: Props) {
  const study = caseStudies.find((s) => s.slug === params.slug);

  if (!study) {
    notFound();
  }
  
  const chartDataKey = Object.keys(study.results.chartData[0])[1];
  
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <Button asChild variant="ghost" className="mb-8">
            <Link href="/case-studies">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour aux réalisations
            </Link>
        </Button>

        {/* Header */}
        <header className="max-w-4xl mx-auto text-center mb-12">
          <Badge variant="secondary" className="mb-4">{study.client}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-primary">{study.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{study.summary}</p>
        </header>

        <div className="rounded-lg overflow-hidden shadow-lg max-w-5xl mx-auto mb-12">
            <Image
                src={study.image.src}
                alt={study.title}
                width={1200}
                height={675}
                className="w-full"
                data-ai-hint={study.image.hint}
            />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="flex items-center text-3xl font-bold text-primary mb-4">
                <study.challenge.icon className="mr-3 h-7 w-7 text-accent" />
                Le Défi
              </h2>
              <p className="text-muted-foreground leading-relaxed">{study.challenge.description}</p>
            </section>
            
            <Separator />
            
            <section>
              <h2 className="flex items-center text-3xl font-bold text-primary mb-4">
                <study.solution.icon className="mr-3 h-7 w-7 text-accent" />
                Notre Solution
              </h2>
              <p className="text-muted-foreground leading-relaxed">{study.solution.description}</p>
            </section>
          </div>

          {/* Sidebar with Results */}
          <aside className="space-y-8">
            <Card className="bg-primary/5 sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center">
                    <study.results.icon className="mr-3 h-6 w-6 text-primary" />
                    Résultats Clés
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {study.results.metrics.map(metric => (
                  <div key={metric.label} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">{metric.label}</p>
                      <p className="text-2xl font-bold text-primary">{metric.value}{metric.unit}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </aside>
        </div>

        {/* Chart Section */}
        <div className="mt-16 max-w-4xl mx-auto">
             <CaseStudyChart 
                data={study.results.chartData}
                dataKey={chartDataKey}
                title="Évolution des performances"
                description={study.results.description}
                unit={chartDataKey.includes('%') ? '%' : study.title.includes('Coûts') ? 'k€' : ''}
             />
        </div>
      </div>
    </div>
  );
}
