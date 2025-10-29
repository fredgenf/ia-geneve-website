
'use server';

import { z } from 'zod';
import { aiSolutionAdvisor, type AiSolutionAdvisorInput } from '@/ai/flows/ai-solution-advisor';

export async function getAiSolution(
  input: AiSolutionAdvisorInput
): Promise<{ success: boolean; data?: { recommendedServices: string }; error?: string }> {
  try {
    const result = await aiSolutionAdvisor(input);
    return { success: true, data: result };
  } catch (error) {
    console.error('Error in getAiSolution server action:', error);
    return { success: false, error: 'Une erreur est survenue lors de la recommandation. Veuillez réessayer.' };
  }
}

const contactFormSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères.'),
  email: z.string().email('Adresse e-mail invalide.'),
  company: z.string().optional(),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères.'),
});

export async function sendContactEmail(
  values: z.infer<typeof contactFormSchema>
): Promise<{ success: boolean; error?: string }> {
    const parsed = contactFormSchema.safeParse(values);

    if (!parsed.success) {
        const errorMessages = parsed.error.issues.map(issue => issue.message).join(', ');
        return { success: false, error: `Données invalides: ${errorMessages}` };
    }

    const { name, email, company, message } = parsed.data;

    console.log('--- Nouveau message de contact ---');
    console.log('Nom:', name);
    console.log('Email:', email);
    if (company) console.log('Entreprise:', company);
    console.log('Message:', message);
    console.log('---------------------------------');

    try {
        // TODO: Intégrer ici un service d'envoi d'e-mails (ex: Resend, SendGrid)
        // Exemple avec Resend (nécessite l'installation de `resend`):
        //
        // import { Resend } from 'resend';
        // const resend = new Resend(process.env.RESEND_API_KEY);
        //
        // await resend.emails.send({
        //   from: 'onboarding@resend.dev',
        //   to: 'contact@aisolutions-geneve.ch',
        //   subject: `Nouveau message de contact de ${name}`,
        //   html: `<p>De: ${name} &lt;${email}&gt;</p>
        //          <p>Entreprise: ${company || 'Non spécifiée'}</p>
        //          <p>Message: ${message}</p>`,
        // });
        
        // Simulation d'un appel API réussi
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        return { success: true };

    } catch (error) {
        console.error("Erreur lors de l'envoi de l'email:", error);
        return { success: false, error: "Une erreur est survenue lors de l'envoi du message." };
    }
}
