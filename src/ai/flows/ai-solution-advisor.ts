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
  prompt: `You are an AI service advisor for 'AI Solutions PME genève'. Based on the description of the user's business needs, recommend the most suitable AI service(s) offered by the company.  The AI services offered are Model Development, AI Audit, and Maintenance.

Business Needs: {{{businessNeeds}}}`,
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
