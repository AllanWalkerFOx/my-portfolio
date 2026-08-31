<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Project;

class ProjectSeeder extends Seeder
{
    public function run(): void
    {
        Project::truncate();

        Project::create([
            'slug' => 'smartcontent-automator',
            'title' => 'SmartContent-Automator',
            'category' => 'IA & Python Automation',
            'description' => 'Pipeline automatisé d\'acquisition et de traitement de contenus exploitant les API Gemini pour orchestrer le déploiement continu.',
            'tags' => ['Python', 'Gemini API', 'Git', 'CLI', 'Automation'],
            'featured' => true,
            'metrics' => [
                ['label' => 'Exécution', 'value' => '< 1.2s'],
                ['label' => 'Précision', 'value' => '99.4%'],
                ['label' => 'Dépôt', 'value' => 'Public']
            ],
            'highlights' => [
                'Orchestration dynamique de prompts via l\'API Gemini',
                'Architecture modulaire en Python orientée haute performance',
                'Intégration Git & Workflows de déploiement automatisés'
            ],
            'github' => 'https://github.com/allan-walker/SmartContent-Automator'
        ]);

        Project::create([
            'slug' => 'carnivore-app',
            'title' => 'Le Carnivore Web App',
            'category' => 'Full-Stack Application',
            'description' => 'Plateforme web moderne pour restaurant & lounge avec réservation dynamique, menu interactif Supabase et authentification OAuth.',
            'tags' => ['React', 'JavaScript', 'Tailwind CSS', 'Supabase'],
            'featured' => false,
            'metrics' => [
                ['label' => 'Auth', 'value' => 'Google OAuth'],
                ['label' => 'UI/UX', 'value' => 'Responsive']
            ],
            'highlights' => [
                'Gestion complète de session utilisateur sécurisée',
                'Base de données en temps réel pour la carte des menus'
            ],
            'github' => 'https://github.com/allan-walker'
        ]);

        Project::create([
            'slug' => 'bento-portfolio',
            'title' => 'Interactive Bento Portfolio',
            'category' => 'Modern Web Architecture',
            'description' => 'Portfolio d\'ingénierie web conçu avec Vite, Three.js 3D Canvas, effets Spotlight et fond Matrix dynamique.',
            'tags' => ['React', 'Vite', 'Three.js', 'Framer Motion'],
            'featured' => false,
            'metrics' => [
                ['label' => 'Score Lighthouse', 'value' => '98/100'],
                ['label' => 'Animation', 'value' => '60 FPS']
            ],
            'highlights' => [
                'Moteur de rendu 3D interactif au survol',
                'Design Responsive en grille Bento réutilisable'
            ],
            'github' => 'https://github.com/allan-walker'
        ]);
    }
}