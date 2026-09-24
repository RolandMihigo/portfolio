import React, { useState } from 'react';
import { X, Check, RotateCcw } from 'lucide-react';
import { CVData } from '../types/cv';
import { initialCVData } from '../data/cvData';

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: CVData;
  onSave: (newData: CVData) => void;
}

export const EditModal: React.FC<EditModalProps> = ({ isOpen, onClose, data, onSave }) => {
  const [formData, setFormData] = useState<CVData>(data);
  const [activeTab, setActiveTab] = useState<'info' | 'profile' | 'references'>('info');

  if (!isOpen) return null;

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  const handleReset = () => {
    if (confirm('Voulez-vous réinitialiser toutes les modifications aux valeurs initiales ?')) {
      setFormData(initialCVData);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div>
            <h3 className="text-base font-bold text-slate-900">Modifier le CV</h3>
            <p className="text-xs text-slate-500">Mettez à jour vos coordonnées et contenus rapidement</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-200 px-6 gap-2 bg-white">
          <button
            onClick={() => setActiveTab('info')}
            className={`py-2.5 px-3 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'info'
                ? 'border-[#0F3E6D] text-[#0F3E6D]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Identité & Contact
          </button>
          <button
            onClick={() => setActiveTab('profile')}
            className={`py-2.5 px-3 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'profile'
                ? 'border-[#0F3E6D] text-[#0F3E6D]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Profil & Slogan
          </button>
          <button
            onClick={() => setActiveTab('references')}
            className={`py-2.5 px-3 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'references'
                ? 'border-[#0F3E6D] text-[#0F3E6D]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Personnes de Référence
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1 text-xs">
          {activeTab === 'info' && (
            <div className="space-y-3">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Nom complet</label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Titre professionnel</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Numéro Téléphone / WhatsApp</label>
                  <input
                    type="text"
                    value={formData.contact.phone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        contact: { ...formData.contact, phone: e.target.value },
                      })
                    }
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Adresse Email</label>
                  <input
                    type="email"
                    value={formData.contact.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        contact: { ...formData.contact, email: e.target.value },
                      })
                    }
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Localisation / Adresse</label>
                <textarea
                  rows={2}
                  value={formData.contact.location}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      contact: { ...formData.contact, location: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Résumé des Langues</label>
                <input
                  type="text"
                  value={formData.contact.languagesSummary}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      contact: { ...formData.contact, languagesSummary: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="space-y-3">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Citation / Slogan d'en-tête</label>
                <input
                  type="text"
                  value={formData.bannerQuote}
                  onChange={(e) => setFormData({ ...formData, bannerQuote: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Texte du Profil Professionnel</label>
                <textarea
                  rows={8}
                  value={formData.profile}
                  onChange={(e) => setFormData({ ...formData, profile: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none leading-relaxed"
                />
              </div>
            </div>
          )}

          {activeTab === 'references' && (
            <div className="space-y-4">
              {formData.references.map((ref, idx) => (
                <div key={ref.id} className="p-3 border border-slate-200 rounded-lg bg-slate-50/50 space-y-2">
                  <div className="font-bold text-slate-800">Référence #{idx + 1}</div>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Nom complet"
                      value={ref.name}
                      onChange={(e) => {
                        const newRefs = [...formData.references];
                        newRefs[idx].name = e.target.value;
                        setFormData({ ...formData, references: newRefs });
                      }}
                      className="px-2.5 py-1.5 border border-slate-300 rounded-md bg-white text-xs"
                    />
                    <input
                      type="text"
                      placeholder="Poste & Organisation"
                      value={ref.role}
                      onChange={(e) => {
                        const newRefs = [...formData.references];
                        newRefs[idx].role = e.target.value;
                        setFormData({ ...formData, references: newRefs });
                      }}
                      className="px-2.5 py-1.5 border border-slate-300 rounded-md bg-white text-xs"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Email"
                      value={ref.email}
                      onChange={(e) => {
                        const newRefs = [...formData.references];
                        newRefs[idx].email = e.target.value;
                        setFormData({ ...formData, references: newRefs });
                      }}
                      className="px-2.5 py-1.5 border border-slate-300 rounded-md bg-white text-xs"
                    />
                    <input
                      type="text"
                      placeholder="Téléphone"
                      value={ref.phone}
                      onChange={(e) => {
                        const newRefs = [...formData.references];
                        newRefs[idx].phone = e.target.value;
                        setFormData({ ...formData, references: newRefs });
                      }}
                      className="px-2.5 py-1.5 border border-slate-300 rounded-md bg-white text-xs"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-3.5 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 text-xs text-rose-600 hover:text-rose-700 font-medium"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Réinitialiser par défaut</span>
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200 rounded-md transition-colors"
            >
              Annuler
            </button>
            <button
              onClick={handleSave}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#0F3E6D] hover:bg-[#0A2A4A] rounded-md transition-colors shadow-xs"
            >
              <Check className="w-4 h-4" />
              <span>Enregistrer les modifications</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
