import React, { useState } from 'react';
import {
  ExternalLink,
  ChevronRight,
  Database,
  Search,
  Sparkles,
  BarChart2,
  Share2,
  CheckCircle,
  Lightbulb,
  FileCode2,
  Calendar,
  Layers,
  ArrowUpRight,
  Code,
} from 'lucide-react';
import { PortfolioProject } from '../../types/cv';
import { CyclisticCharts } from './CyclisticCharts';
import { KaggleIcon, TableauIcon, GitHubIcon, LinkedInIcon } from '../logos/SocialIcons';

interface PortfolioViewProps {
  project: PortfolioProject;
  onBackToCV: () => void;
}

export const PortfolioView: React.FC<PortfolioViewProps> = ({ project, onBackToCV }) => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'approach' | 'findings' | 'sql'>('dashboard');

  return (
    <div className="max-w-6xl mx-auto py-6 px-4 sm:px-6 space-y-8 animate-in fade-in duration-200">
      {/* Top Breadcrumb & Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <button
            onClick={onBackToCV}
            className="font-bold text-[#0F3B6C] hover:underline flex items-center gap-1"
          >
            ← Retour au Curriculum Vitae
          </button>
          <span>/</span>
          <span className="font-semibold text-slate-700">Portfolio Projets Data</span>
          <span>/</span>
          <span className="text-slate-500 truncate max-w-[200px]">Projet Cyclistic</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-100 text-amber-900 border border-amber-200">
            <Sparkles className="w-3 h-3 text-amber-600" />
            Projet Capstone Google Data Analytics
          </span>
        </div>
      </div>

      {/* Hero Banner for Cyclistic Project */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0F3B6C] via-[#0b2b4f] to-slate-900 text-white p-6 sm:p-8 shadow-xl">
        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-sky-500/20 text-sky-300 border border-sky-400/30">
              {project.period}
            </span>
            <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/10 text-slate-200">
              {project.certificationContext}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {project.title}
          </h1>

          <p className="text-sky-200 text-sm sm:text-base font-medium max-w-3xl leading-relaxed">
            {project.subtitle}
          </p>

          <p className="text-slate-300 text-xs sm:text-sm max-w-4xl leading-relaxed pt-1">
            {project.introduction}
          </p>

          {/* Action Links Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            {/* Kaggle Link */}
            <a
              href={project.kaggleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs shadow-md transition-all hover:scale-102"
            >
              <KaggleIcon className="w-4 h-4 text-white" />
              <span>Analyse complète sur Kaggle</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cyan-200" />
            </a>

            {/* Tableau Link */}
            <a
              href={project.tableauUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs shadow-md transition-all hover:scale-102"
            >
              <TableauIcon className="w-4 h-4" />
              <span>Dashboard interactif Tableau</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-amber-200" />
            </a>

            {/* GitHub Link */}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 shadow-md transition-all"
              >
                <GitHubIcon className="w-4 h-4" />
                <span>Dépôt GitHub</span>
              </a>
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-white/10 text-sky-200 border border-white/10"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex border-b border-slate-200 bg-white rounded-t-xl px-4 text-xs font-bold gap-2">
        <button
          onClick={() => setActiveTab('dashboard')}
          className={`py-3 px-4 border-b-2 flex items-center gap-2 transition-colors ${
            activeTab === 'dashboard'
              ? 'border-[#0F3B6C] text-[#0F3B6C]'
              : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          <BarChart2 className="w-4 h-4" />
          <span>Dashboard Tableau Reconstitué</span>
        </button>

        <button
          onClick={() => setActiveTab('approach')}
          className={`py-3 px-4 border-b-2 flex items-center gap-2 transition-colors ${
            activeTab === 'approach'
              ? 'border-[#0F3B6C] text-[#0F3B6C]'
              : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Cycle de vie des données (6 étapes)</span>
        </button>

        <button
          onClick={() => setActiveTab('findings')}
          className={`py-3 px-4 border-b-2 flex items-center gap-2 transition-colors ${
            activeTab === 'findings'
              ? 'border-[#0F3B6C] text-[#0F3B6C]'
              : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          <Lightbulb className="w-4 h-4" />
          <span>Conclusions Clés & Recommandations</span>
        </button>

        <button
          onClick={() => setActiveTab('sql')}
          className={`py-3 px-4 border-b-2 flex items-center gap-2 transition-colors ${
            activeTab === 'sql'
              ? 'border-[#0F3B6C] text-[#0F3B6C]'
              : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          <Code className="w-4 h-4" />
          <span>Scripts SQL & Méthodologie</span>
        </button>
      </div>

      {/* Tab 1: Dashboard View */}
      {activeTab === 'dashboard' && (
        <div className="space-y-6">
          <CyclisticCharts />

          <div className="p-4 rounded-xl bg-sky-50 border border-sky-200 text-xs text-sky-900 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-sky-950">Visualisation interactive originale sur Tableau Public :</p>
              <p className="mt-0.5 leading-relaxed">
                Le dashboard complet avec filtres par stations géographiques, cartes de densité de Chicago et heatmaps horaires est accessible directement sur votre profil Tableau Public :
                <a
                  href={project.tableauUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline ml-1 text-sky-700 hover:text-sky-950"
                >
                  Ouvrir le Tableau Dashboard ↗
                </a>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Approach Steps (Ask, Prepare, Process, Analyze, Share, Act) */}
      {activeTab === 'approach' && (
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
            <h3 className="text-base font-bold text-slate-900 mb-2">
              Le Processus d'Analyse Google : Cycle en 6 Phases
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Pour structurer cette étude et garantir des conclusions fiables exploitables par l'équipe commerciale, la méthodologie rigoureuse du cycle de vie des données a été appliquée.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.approachSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between hover:border-sky-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-lg bg-[#0F3B6C] text-white flex items-center justify-center font-black text-sm">
                      {step.number}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700">
                      {step.step}
                    </span>
                  </div>

                  <h4 className="font-bold text-slate-900 text-sm mb-1.5">{step.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
                </div>

                {step.tools && (
                  <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] font-medium text-sky-700">
                    Outils & Compétences : {step.tools}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Key Findings & Recommendations */}
      {activeTab === 'findings' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {project.keyFindings.map((finding) => (
              <div
                key={finding.group}
                className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-bold bg-sky-50 text-sky-800 border border-sky-100 mb-2">
                    {finding.tag}
                  </span>
                  <h4 className="font-extrabold text-slate-900 text-sm mb-1">{finding.group}</h4>
                  <p className="text-xs font-semibold text-sky-700 mb-2">{finding.highlight}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{finding.details}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Strategic Marketing Recommendations */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-base">
              <Lightbulb className="w-5 h-5 text-amber-600" />
              <h3>Recommandations Stratégiques pour l'Équipe Marketing</h3>
            </div>
            <p className="text-xs text-amber-900/90 leading-relaxed">
              Basées sur les agrégations SQL et la visualisation des flux de déplacement :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
              {project.recommendations.map((rec, rIdx) => (
                <div
                  key={rIdx}
                  className="bg-white/80 backdrop-blur-xs p-4 rounded-lg border border-amber-200/80 text-xs text-slate-800 flex items-start gap-2.5"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-snug">{rec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: SQL Code Snippets */}
      {activeTab === 'sql' && (
        <div className="bg-slate-900 text-slate-200 p-6 rounded-xl shadow-lg space-y-4 font-mono text-xs overflow-x-auto">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-[11px] text-slate-400">
            <span className="flex items-center gap-2 text-sky-400 font-bold">
              <FileCode2 className="w-4 h-4" /> cyclistic_q1_analysis.sql
            </span>
            <span>Google BigQuery / SQL Aggregate</span>
          </div>

          <pre className="text-slate-300 leading-relaxed">
{`-- 1. Calcul des durées moyennes et du volume par jour et profil
SELECT
    member_casual,
    EXTRACT(DAYOFWEEK FROM started_at) AS day_of_week_num,
    FORMAT_TIMESTAMP('%A', started_at) AS day_name,
    COUNT(ride_id) AS total_rides,
    ROUND(AVG(TIMESTAMP_DIFF(ended_at, started_at, SECOND) / 60), 2) AS avg_duration_minutes
FROM
    \`cyclistic_tripdata.q1_2024_cleaned\`
WHERE
    ended_at > started_at
    AND TIMESTAMP_DIFF(ended_at, started_at, SECOND) BETWEEN 60 AND 86400
GROUP BY
    member_casual,
    day_of_week_num,
    day_name
ORDER BY
    member_casual,
    day_of_week_num;

-- 2. Répartition par type de monture (Classic vs Electric)
SELECT
    rideable_type,
    member_casual,
    COUNT(ride_id) AS total_rides,
    ROUND(COUNT(ride_id) * 100.0 / SUM(COUNT(ride_id)) OVER(PARTITION BY member_casual), 1) AS pct_share
FROM
    \`cyclistic_tripdata.q1_2024_cleaned\`
GROUP BY
    rideable_type,
    member_casual
ORDER BY
    member_casual,
    total_rides DESC;`}
          </pre>

          <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
            <span>Étude complète documentée avec graphiques et notebooks sur Kaggle</span>
            <a
              href={project.kaggleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-300 underline font-semibold"
            >
              Consulter le Notebook Kaggle ↗
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
