import React, { useState } from 'react';
import { CheckCircle2, ChevronDown, ChevronUp, Sparkles, X } from 'lucide-react';

export const CorrectionsBanner: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <div className="no-print bg-gradient-to-r from-blue-900 via-sky-950 to-slate-900 text-white border-b border-sky-800/60 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-500/20 text-sky-400 border border-sky-400/30">
              <Sparkles className="w-4 h-4" />
            </span>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
              <span className="text-xs sm:text-sm font-bold text-sky-200">
                Corrections & Logos officiels appliqués avec succès
              </span>
              <span className="hidden sm:inline text-sky-400/60">•</span>
              <span className="text-[11px] sm:text-xs text-sky-300/80">
                Prêt pour export A4 en PDF vectoriel et Microsoft Word (.docx)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-xs text-sky-300 hover:text-white flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 transition-colors"
            >
              <span>{isOpen ? 'Masquer détails' : 'Voir les 6 corrections'}</span>
              {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={() => setIsDismissed(true)}
              className="p-1 rounded-md text-sky-400 hover:text-white hover:bg-white/10 transition-colors"
              title="Fermer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="mt-3 pt-3 border-t border-sky-800/40 grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs text-sky-200">
            <div className="flex items-start gap-2 bg-white/5 p-2 rounded-lg border border-white/5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white font-semibold">1. eGov Africa :</strong>
                <p className="text-[11px] text-sky-300/80 mt-0.5">
                  Carte de l'Afrique dorée, ondes concentriques au centre et typographie conforme.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2 bg-white/5 p-2 rounded-lg border border-white/5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white font-semibold">2. Verditra SARLU :</strong>
                <p className="text-[11px] text-sky-300/80 mt-0.5">
                  Logo officiel <code className="text-sky-200">.verditra Digital Business Transformation</code>.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2 bg-white/5 p-2 rounded-lg border border-white/5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white font-semibold">3. IUEA (Université) :</strong>
                <p className="text-[11px] text-sky-300/80 mt-0.5">
                  Blason à 4 cadrans, ruban et calligraphie gothique officielle.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2 bg-white/5 p-2 rounded-lg border border-white/5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white font-semibold">4. freeCodeCamp :</strong>
                <p className="text-[11px] text-sky-300/80 mt-0.5">
                  Logo flamme verte authentique (corrigé de la faute &apos;rreeCodeCamp&apos;).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2 bg-white/5 p-2 rounded-lg border border-white/5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white font-semibold">5. Map Fast with QGIS :</strong>
                <p className="text-[11px] text-sky-300/80 mt-0.5">
                  Certification attribuée à <strong className="text-white">Coursera</strong> avec logo officiel.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2 bg-white/5 p-2 rounded-lg border border-white/5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white font-semibold">6. Photo & Export Word/PDF :</strong>
                <p className="text-[11px] text-sky-300/80 mt-0.5">
                  Photo executive haute résolution + exports directs téléchargeables.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
