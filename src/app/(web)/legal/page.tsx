
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions Légales',
  description: 'Mentions légales du site AI Solutions PME genève.',
};

export default function LegalPage() {
  return (
    <div className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
            Mentions Légales
          </h1>
          
          <div className="space-y-8 text-foreground">
            <section className="p-6 border rounded-lg">
              <h2 className="text-2xl font-semibold text-primary mb-3">1. Éditeur du site</h2>
              <p><strong>Nom de l'entreprise :</strong> AI Solutions PME genève</p>
              <p><strong>Adresse :</strong> Chemin Galiffes 2, 1201 Genève, Suisse</p>
              <p><strong>Email :</strong> <a href="mailto:contact@aisolutions-geneve.ch" className="text-accent hover:underline">contact@aisolutions-geneve.ch</a></p>
              <p><strong>Téléphone :</strong> <a href="tel:+41787818902" className="text-accent hover:underline">+41 78 781 89 02</a></p>
              <p><strong>Directeur de la publication :</strong> [Nom du directeur]</p>
            </section>
            
            <section className="p-6 border rounded-lg">
              <h2 className="text-2xl font-semibold text-primary mb-3">2. Hébergement</h2>
              <p>Le site est hébergé par une plateforme cloud moderne.</p>
              <p><strong>Hébergeur :</strong> Google Cloud Platform</p>
              <p><strong>Adresse :</strong> Gordon House, Barrow Street, Dublin 4, Irlande</p>
            </section>

            <section className="p-6 border rounded-lg">
              <h2 className="text-2xl font-semibold text-primary mb-3">3. Propriété intellectuelle</h2>
              <p>L'ensemble de ce site relève de la législation suisse et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.</p>
              <p>La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.</p>
            </section>

            <section className="p-6 border rounded-lg">
              <h2 className="text-2xl font-semibold text-primary mb-3">4. Responsabilité</h2>
              <p>AI Solutions PME genève s'efforce de fournir sur le site des informations aussi précises que possible. Toutefois, elle ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.</p>
            </section>

             <section className="p-6 border rounded-lg">
              <h2 className="text-2xl font-semibold text-primary mb-3">5. Données personnelles</h2>
              <p>Les informations recueillies via les formulaires de contact sont nécessaires pour répondre à vos demandes. Conformément à la loi sur la protection des données, vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant. Pour l'exercer, adressez-vous à <a href="mailto:contact@aisolutions-geneve.ch" className="text-accent hover:underline">contact@aisolutions-geneve.ch</a>.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
