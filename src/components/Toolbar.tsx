import React, { useRef } from 'react';
import {
  FileDown,
  Printer,
  FileText,
  Edit3,
  Camera,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Share2,
  Check,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ToolbarProps {
  onExportPdf: () => void;
  onPrint: () => void;
  onExportDocx: () => void;
  onExportDocHtml: () => void;
  isEditable: boolean;
  onToggleEditable: () => void;
  onResetData: () => void;
  onPhotoUpload: (fileUrl: string) => void;
  scale: number;
  onChangeScale: (newScale: number) => void;
  activeView: 'cv' | 'portfolio';
  onViewChange: (view: 'cv' | 'portfolio') => void;
}

export const Toolbar: React.FC<ToolbarProps> = ({
  onExportPdf,
  onPrint,
  onExportDocx,
  onExportDocHtml,
  isEditable,
  onToggleEditable,
  onResetData,
  onPhotoUpload,
  scale,
  onChangeScale,
  activeView,
  onViewChange,
}) => {
  const photoInputRef = useRef<HTMLInputElement>(null);
  const [copiedLink, setCopiedLink] = React.useState(false);

  const handlePhotoFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onPhotoUpload(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCopyShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const triggerExportWithCelebration = (fn: () => void) => {
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.1 },
    });
    fn();
  };

  return (
    <header className="no-print sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3">
        {/* Zone 1: Single text element wordmark & View switcher */}
        <div className="flex items-center gap-3">
          <span className="font-extrabold text-slate-900 text-base md:text-lg tracking-tight flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse"></span>
            Roland Iragi Mihigo
          </span>

          {/* View Switcher: CV vs Portfolio */}
          <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200 text-xs font-bold">
            <button
              onClick={() => onViewChange('cv')}
              className={`px-3 py-1 rounded-md transition-all ${
                activeView === 'cv'
                  ? 'bg-white text-[#0F3B6C] shadow-xs'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Curriculum Vitae (A4)
            </button>
            <button
              onClick={() => onViewChange('portfolio')}
              className={`px-3 py-1 rounded-md transition-all flex items-center gap-1.5 ${
                activeView === 'portfolio'
                  ? 'bg-[#0F3B6C] text-white shadow-xs'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <span>Portfolio Data</span>
              <span className="px-1.5 py-0.2 rounded-full text-[9px] bg-amber-400 text-amber-950 font-black">
                Nouveau
              </span>
            </button>
          </div>
        </div>

        {/* Zone 2: Primary Export Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* PDF Download */}
          <button
            onClick={() => triggerExportWithCelebration(onExportPdf)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs transition-colors shadow-xs"
            title="Télécharger directement en PDF A4 haute résolution"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Télécharger</span> PDF
          </button>

          {/* Word (.docx) Download */}
          <button
            onClick={() => triggerExportWithCelebration(onExportDocx)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0F3B6C] hover:bg-[#0A2545] text-white font-semibold text-xs transition-colors shadow-xs"
            title="Générer et télécharger en document Word (.docx)"
          >
            <FileText className="w-3.5 h-3.5 text-sky-300" />
            <span className="hidden sm:inline">Télécharger</span> Word (.docx)
          </button>

          {/* Print / High-res Vector PDF via Browser */}
          <button
            onClick={onPrint}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-slate-300 hover:border-slate-400 bg-white text-slate-700 font-medium text-xs transition-colors"
            title="Imprimer ou enregistrer en PDF natif vectoriel via la boîte d'impression"
          >
            <Printer className="w-3.5 h-3.5 text-slate-500" />
            <span className="hidden md:inline">Imprimer</span>
          </button>

          {/* Word HTML (.doc) */}
          <button
            onClick={onExportDocHtml}
            className="hidden lg:flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-slate-200 hover:border-slate-300 bg-slate-50 text-slate-600 font-medium text-xs transition-colors"
            title="Format Word Web (.doc) avec mise en page HTML conservée"
          >
            <span>Format .doc</span>
          </button>
        </div>

        {/* Zone 3: Controls (Edit Mode, Photo, Zoom) */}
        <div className="flex items-center gap-2">
          {/* Zoom controls */}
          <div className="hidden xl:flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200 text-xs">
            <button
              onClick={() => onChangeScale(Math.max(0.7, scale - 0.1))}
              className="p-1 hover:bg-white rounded text-slate-600 transition-colors"
              title="Zoom arrière"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="px-1.5 text-[11px] font-semibold text-slate-600 w-10 text-center">
              {Math.round(scale * 100)}%
            </span>
            <button
              onClick={() => onChangeScale(Math.min(1.3, scale + 0.1))}
              className="p-1 hover:bg-white rounded text-slate-600 transition-colors"
              title="Zoom avant"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Change Photo input */}
          <button
            onClick={() => photoInputRef.current?.click()}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-slate-200 hover:border-slate-300 bg-white text-slate-700 font-medium text-xs transition-colors"
            title="Importer ma photo de profil"
          >
            <Camera className="w-3.5 h-3.5 text-slate-500" />
            <span className="hidden sm:inline">Photo</span>
          </button>
          <input
            type="file"
            ref={photoInputRef}
            onChange={handlePhotoFile}
            accept="image/*"
            className="hidden"
          />

          {/* Edit Mode Toggle */}
          <button
            onClick={onToggleEditable}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium text-xs transition-colors ${
              isEditable
                ? 'bg-amber-100 text-amber-900 border border-amber-300'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
            }`}
            title="Activer le mode d'édition des textes et rubriques"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>{isEditable ? 'Mode Aperçu' : 'Modifier'}</span>
          </button>

          {/* Reset button if edited */}
          <button
            onClick={onResetData}
            className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-500 transition-colors"
            title="Réinitialiser toutes les données aux valeurs d'origine"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          {/* Share button */}
          <button
            onClick={handleCopyShare}
            className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-500 transition-colors"
            title="Copier le lien"
          >
            {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
    </header>
  );
};
