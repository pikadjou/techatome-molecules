import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Welcome/Getting Started',
  parameters: {
    docs: {
      description: {
        component: 'Welcome to the TechatomeMolecules UI Component Library',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * Welcome to TechatomeMolecules UI Components
 */
export const Welcome: Story = {
  render: () => ({
    template: `
      <div style="padding: 40px; max-width: 800px; font-family: Arial, sans-serif;">
        <h1 style="color: #235590; margin-bottom: 20px; font-size: 32px;">🎨 TechatomeMolecules UI</h1>
        <p style="font-size: 18px; line-height: 1.6; margin-bottom: 30px; color: #333;">
          Bienvenue dans la bibliothèque de composants UI de TechatomeMolecules !
        </p>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 30px; border-left: 4px solid #235590;">
          <h3 style="margin-top: 0; color: #495057; font-size: 20px;">📚 Configuration Storybook</h3>
          <p style="margin-bottom: 0; color: #6c757d;">
            Storybook est maintenant configuré pour votre projet TechatomeMolecules.
            <br>La configuration de base est en place et prête à recevoir vos stories.
          </p>
        </div>
        
        <div style="background: #e7f3ff; padding: 20px; border-radius: 8px; border-left: 4px solid #0066cc;">
          <h4 style="margin-top: 0; color: #0066cc;">🚀 Prochaines étapes</h4>
          <ul style="margin-bottom: 0; color: #333;">
            <li>Créer des stories pour vos composants UI</li>
            <li>Documenter les différents états et variantes</li>
            <li>Ajouter des contrôles interactifs</li>
          </ul>
        </div>
      </div>
    `,
  }),
};
