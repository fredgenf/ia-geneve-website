
'use server';

/**
 * @fileOverview Recommends AI services based on user needs.
 *
 * - aiSolutionAdvisor - A function that recommends AI services.
 * - AiSolutionAdvisorInput - The input type for the aiSolutionAdvisor function.
 * - AiSolutionAdvisorOutput - The return type for the aiSolutionAdvisor function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiSolutionAdvisorInputSchema = z.object({
  businessNeeds: z
    .string()
    .describe('A description of the business needs of the user.'),
});
export type AiSolutionAdvisorInput = z.infer<typeof AiSolutionAdvisorInputSchema>;

const AiSolutionAdvisorOutputSchema = z.object({
  recommendedServices: z
    .string()
    .describe('The AI services recommended to the user.'),
});
export type AiSolutionAdvisorOutput = z.infer<typeof AiSolutionAdvisorOutputSchema>;

export async function aiSolutionAdvisor(input: AiSolutionAdvisorInput): Promise<AiSolutionAdvisorOutput> {
  return aiSolutionAdvisorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiSolutionAdvisorPrompt',
  input: {schema: AiSolutionAdvisorInputSchema},
  output: {schema: AiSolutionAdvisorOutputSchema},
  prompt: `Vous êtes un conseiller expert en solutions IA pour 'IA Solutions PME Genève'. Votre rôle est d'analyser les besoins métier décrits par un utilisateur et de lui fournir une recommandation claire et concise.

En vous basant sur la description ci-dessous, recommandez le service le plus adapté parmi ceux que nous proposons.

Votre réponse doit faire entre 5 et 10 lignes et être structurée ainsi :
1.  Nommez clairement le service recommandé.
2.  Expliquez pourquoi ce service est la solution la plus pertinente pour répondre aux besoins spécifiques décrits.
3.  Mettez en avant un ou deux bénéfices concrets et mesurables.
4.  Adoptez un ton professionnel, rassurant et direct, en vous adressant directement à l'utilisateur.

Voici nos services :
- Développement de modèles d'IA
- Automatisation Intelligente des Processus
- Analyse de Données et Business Intelligence
- Chatbots et Agents Conversationnels
- Audit de solutions IA
- Maintenance

Description des besoins métier de l'utilisateur :
{{{businessNeeds}}}`,
});

const aiSolutionAdvisorFlow = ai.defineFlow(
  {
    name: 'aiSolutionAdvisorFlow',
    inputSchema: AiSolutionAdvisorInputSchema,
    outputSchema: AiSolutionAdvisorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
