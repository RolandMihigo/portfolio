import React, { useState, useEffect } from 'react';
import { initialCVData } from './data/cvData';
import { CVData } from './types/cv';
import { CVDocument } from './components/CVDocument';
import { Toolbar } from './components/Toolbar';
import { CorrectionsBanner } from './components/CorrectionsBanner';
import { EditDrawer } from './components/EditDrawer';
import { PortfolioView } from './components/portfolio/PortfolioView';
import { exportToPdf, triggerPrint } from './utils/pdfExport';
import { exportToDocx, exportToHtmlWord } from './utils/docxExport';
import { CheckCircle2, Download, AlertCircle, FileCheck } from 'lucide-react';

const STORAGE_KEY = 'cv_roland_data_v3';

export default function App() {
  const [cv, setCv] = useState<CVData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback
    }
    return initialCVData;
  });

  const [activeView, setActiveView] = useState<'cv' | 'portfolio'>('cv');
  const [isEditable, setIsEditable] = useState(false);
  const [scale, setScale] = useState(1);
  const [toastMessage, setToastMessage] = useState<{ text: string; type: 'success' | 'info' | 'error' } | null>(null);
  const [isExporting, setIsExporting] = useState(false);

  // Save to localStorage when cv changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cv));
    } catch (e) {
      console.warn('Could not save to localStorage:', e);
    }
  }, [cv]);

  const showToast = (text: string, type: 'success' | 'info' | 'error' = 'success') => {
    setToastMessage({ text, type });
    setTimeout(() => {
      setToastMessage(null);
    }, 3800);
  };

  // Export PDF via html2canvas & jsPDF
  const handleExportPdf = async () => {
    setIsExporting(true);
    showToast('Génération du PDF haute définition (A4) en cours...', 'info');
    try {
      const ok = await exportToPdf('cv-sheet', `CV_${cv.fullName.replace(/\s+/g, '_')}.pdf`);
      if (ok) {
        showToast('Votre CV a été téléchargé avec succès au format PDF !', 'success');
      }
    } catch (err) {
      console.error(err);
      showToast('Ouverture de la boîte d\'impression pour enregistrement PDF...', 'info');
      triggerPrint();
    } finally {
      setIsExporting(false);
    }
  };

  // Export Docx
  const handleExportDocx = async () => {
    showToast('Génération du document Microsoft Word (.docx)...', 'info');
    try {
      await exportToDocx(cv);
      showToast('Votre CV a été téléchargé au format Word (.docx) avec succès !', 'success');
    } catch (err) {
      console.error('Erreur export Word:', err);
      showToast('Téléchargement au format Word HTML alternatif...', 'info');
      exportToHtmlWord('cv-sheet', `CV_${cv.fullName.replace(/\s+/g, '_')}.doc`);
    }
  };

  // Export HTML Word .doc
  const handleExportDocHtml = () => {
    exportToHtmlWord('cv-sheet', `CV_${cv.fullName.replace(/\s+/g, '_')}.doc`);
    showToast('Document Word (.doc) téléchargé avec mise en page conservée !', 'success');
  };

  // Native Print
  const handlePrint = () => {
    triggerPrint();
  };

  // Photo replacement
  const handlePhotoUpload = (newPhotoUrl: string) => {
    setCv((prev) => ({ ...prev, photoUrl: newPhotoUrl }));
    showToast('Photo de profil mise à jour avec succès !', 'success');
  };

  // Reset to original data
  const handleResetData = () => {
    if (window.confirm('Voulez-vous restaurer les données et logos initiaux du CV ?')) {
      setCv(initialCVData);
      localStorage.removeItem(STORAGE_KEY);
      showToast('Données initiales restaurées.', 'info');
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col antialiased selection:bg-sky-500 selection:text-white">
      {/* 1. Verified Corrections Banner */}
      <CorrectionsBanner />

      {/* 2. Top Interactive Action Toolbar */}
      <Toolbar
        onExportPdf={handleExportPdf}
        onPrint={handlePrint}
        onExportDocx={handleExportDocx}
        onExportDocHtml={handleExportDocHtml}
        isEditable={isEditable}
        onToggleEditable={() => setIsEditable(!isEditable)}
        onResetData={handleResetData}
        onPhotoUpload={handlePhotoUpload}
        scale={scale}
        onChangeScale={setScale}
        activeView={activeView}
        onViewChange={setActiveView}
      />

      {/* 3. Main Stage: Either CV Preview or Portfolio View */}
      {activeView === 'portfolio' ? (
        <main className="flex-1 py-4 sm:py-6">
          <PortfolioView
            project={cv.projects![0]}
            onBackToCV={() => setActiveView('cv')}
          />
        </main>
      ) : (
        <main className="flex-1 py-8 px-4 sm:px-6 flex justify-center items-start overflow-x-auto">
          <div
            id="cv-preview-container"
            style={{
              transform: scale !== 1 ? `scale(${scale})` : undefined,
              transformOrigin: 'top center',
              transition: 'transform 0.15s ease-out',
            }}
            className="w-full max-w-[850px] mx-auto print:max-w-none print:w-[210mm] print:m-0"
          >
            <CVDocument
              cv={cv}
              onPhotoChange={handlePhotoUpload}
              isEditable={isEditable}
            />

            {/* Quick Action Footer inside preview for quick access */}
            <div className="no-print mt-6 mb-12 flex flex-wrap items-center justify-between gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-sm text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-emerald-600" />
                <span>
                  Document calibré au format standard <strong>A4 (210 x 297 mm)</strong> avec logos vectoriels HD
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveView('portfolio')}
                  className="px-3 py-1.5 rounded-lg bg-sky-50 text-sky-800 hover:bg-sky-100 font-semibold transition-colors flex items-center gap-1.5 border border-sky-200"
                >
                  <span>Explorer le Portfolio Data ↗</span>
                </button>
                <button
                  onClick={handleExportPdf}
                  disabled={isExporting}
                  className="px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-semibold transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Télécharger PDF</span>
                </button>
                <button
                onClick={handleExportDocx}
                className="px-3 py-1.5 rounded-lg bg-[#0F3B6C] hover:bg-[#0A2545] text-white font-semibold transition-colors flex items-center gap-1.5 shadow-xs"
              >
                <Download className="w-3.5 h-3.5 text-sky-300" />
                <span>Télécharger Word (.docx)</span>
              </button>
            </div>
          </div>
        </div>
      </main>
      )}

      {/* 4. Edit Drawer for modifying text, sections, and items */}
      <EditDrawer
        isOpen={isEditable}
        onClose={() => setIsEditable(false)}
        cv={cv}
        onSave={(updated) => {
          setCv(updated);
          showToast('Modifications enregistrées !', 'success');
        }}
        onReset={handleResetData}
      />

      {/* 5. Floating Toast Notification */}
      {toastMessage && (
        <div className="no-print fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900 text-white shadow-xl border border-slate-800 text-xs font-medium animate-in fade-in slide-in-from-bottom-3 duration-200">
          {toastMessage.type === 'success' ? (
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          ) : toastMessage.type === 'error' ? (
            <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
          ) : (
            <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
          )}
          <span>{toastMessage.text}</span>
        </div>
      )}
    </div>
  );
}
