

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle, HelpCircle } from 'lucide-react';
import type { Metadata } from 'next';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { services, caseStudies } from '@/lib/data';
import { AiAdvisorForm } from '@/components/ai-advisor-form';

export const metadata: Metadata = {
  title: 'Accueil',
};

const faqItems = [
  {
    question: "Qu'est-ce que l'IA et comment peut-elle aider ma PME ?",
    answer: "L'IA permet aux machines d'apprendre et de prendre des décisions. Pour votre PME, cela peut signifier automatiser des tâches répétitives, mieux comprendre vos clients, optimiser vos stocks ou encore améliorer votre marketing. C'est un levier de productivité et d'innovation accessible.",
  },
  {
    question: "Faut-il un grand budget pour un projet d'IA ?",
    answer: "Pas nécessairement. Nous nous spécialisons dans les solutions pragmatiques pour PME. On peut commencer par un projet pilote ciblé (un 'Proof of Concept') pour démontrer la valeur avec un investissement maîtrisé, avant d'envisager des déploiements plus larges.",
  },
  {
    question: "Combien de temps faut-il pour voir des résultats ?",
    answer: "Cela dépend de la complexité, mais notre approche agile vise à livrer de la valeur rapidement. Pour un premier projet, on peut souvent obtenir des résultats tangibles et mesurables en quelques semaines à quelques mois.",
  },
  {
    question: "Mes données sont-elles en sécurité ?",
    answer: "La sécurité est notre priorité absolue. Nous respectons les réglementations comme le RGPD et mettons en place des architectures sécurisées. Vos données sont utilisées uniquement pour les objectifs définis et ne sont jamais partagées sans votre consentement.",
  },
];


export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white">
          <Image
            src="/hero-background.png"
            alt="A human hand and a robotic hand shaking hands."
            fill
            className="object-cover"
            priority
            data-ai-hint="AI handshake"
          />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            L'intelligence artificielle au service de votre PME
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/80">
            Nous transformons vos défis en opportunités grâce à des solutions IA sur mesure, pragmatiques et performantes.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">
                Demander une démo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Nos Services</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Des solutions complètes pour intégrer l'IA à chaque étape de votre projet.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="flex flex-col text-center items-center shadow-md hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
                <CardFooter>
                   <Button asChild variant="outline">
                    <Link href="/services">En savoir plus</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Advisor Section */}
      <section id="advisor" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AiAdvisorForm />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Questions fréquentes</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Les réponses aux questions que vous vous posez sur l'IA pour votre PME.
            </p>
          </div>
          <div className="mt-12">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                    <div className="flex items-center gap-3">
                        <HelpCircle className="h-5 w-5 text-accent" />
                        {item.question}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground pl-9">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>


      {/* Case Studies Section */}
      <section id="case-studies" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Nos Réalisations</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Découvrez comment nous avons aidé des entreprises comme la vôtre à réussir.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <Card key={study.slug} className="overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <Image
                  src={study.image.src}
                  alt={study.title}
                  width={study.image.width}
                  height={study.image.height}
                  className="w-full h-48 object-cover"
                  data-ai-hint={study.image.hint}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{study.title}</h3>
                  <p className="mt-2 text-muted-foreground">{study.summary}</p>
                  <div className="mt-4 flex items-center text-sm font-medium text-primary">
                    <Link href={`/case-studies/${study.slug}`} className="hover:underline">
                      Lire l'étude de cas
                    </Link>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
           <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/case-studies">Voir toutes nos réalisations</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Prêt à transformer votre entreprise ?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
              Discutons de votre projet. Planifiez une démonstration gratuite et sans engagement avec nos experts.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contact">
                  Demander une démo <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
