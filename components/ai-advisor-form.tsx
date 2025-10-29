
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Bot, Loader2, Wand2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { getAiSolution } from '@/app/actions';

const formSchema = z.object({
  businessNeeds: z.string().min(20, {
    message: 'Veuillez décrire vos besoins de manière plus détaillée (20 caractères minimum).',
  }),
});

export function AiAdvisorForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessNeeds: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setRecommendation(null);
    setError(null);

    const result = await getAiSolution(values);

    if (result.success && result.data) {
      setRecommendation(result.data.recommendedServices);
    } else {
      setError(result.error || 'Une erreur inattendue est survenue.');
    }

    setIsLoading(false);
  }

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-full">
                <Wand2 className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Conseiller en solutions IA</CardTitle>
            </div>
            <CardDescription>Décrivez vos besoins et notre IA vous recommandera le service le plus adapté.</CardDescription>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="businessNeeds"
              render={({ field }) => (
                <FormItem>
                  <Textarea
                    placeholder="Ex: 'Nous souhaitons prédire les pannes de nos machines industrielles pour réduire les coûts de maintenance...'"
                    className="resize-none"
                    rows={5}
                    {...field}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="submit" disabled={isLoading} size="lg">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyse en cours...
                </>
              ) : (
                'Obtenir une recommandation'
              )}
            </Button>
          </CardFooter>
        </form>
      </Form>
      {recommendation && (
        <Card className="m-6 mt-0 bg-primary/5">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-500/10 rounded-full">
                 <Bot className="w-6 h-6 text-green-600" />
              </div>
               <CardTitle>Notre recommandation</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-foreground">{recommendation}</p>
          </CardContent>
        </Card>
      )}
      {error && (
         <Card className="m-6 mt-0 bg-destructive/10">
          <CardHeader>
            <CardTitle className="text-destructive">Erreur</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-destructive">{error}</p>
          </CardContent>
        </Card>
      )}
    </Card>
  );
}
