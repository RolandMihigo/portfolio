import React, { useState } from 'react';
import { X, Plus, Trash2, Save, RotateCcw } from 'lucide-react';
import { CVData } from '../types/cv';

interface EditDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cv: CVData;
  onSave: (updated: CVData) => void;
  onReset: () => void;
}

export const EditDrawer: React.FC<EditDrawerProps> = ({
  isOpen,
  onClose,
  cv,
  onSave,
  onReset,
}) => {
  const [formData, setFormData] = useState<CVData>(cv);
  const [activeTab, setActiveTab] = useState<'general' | 'experience' | 'skills' | 'references'>('general');

  // Sync state if external cv changes
  React.useEffect(() => {
    setFormData(cv);
  }, [cv]);

  if (!isOpen) return null;

  const handleChangeText = (field: keyof CVData, val: string) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
  };

  const handleContactChange = (field: keyof typeof formData.contact, val: string) => {
    setFormData((prev) => ({
      ...prev,
      contact: { ...prev.contact, [field]: val },
    }));
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <div className="no-print fixed inset-y-0 right-0 z-50 w-full sm:w-[500px] bg-white shadow-2xl border-l border-slate-200 flex flex-col">
      {/* Drawer Header */}
      <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
        <div>
          <h2 className="text-base font-bold text-slate-900">Éditeur de Curriculum Vitae</h2>
          <p className="text-xs text-slate-500">Modifiez vos informations en direct</p>
        </div>
        <button
          onClick={onClose}
          className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 bg-white px-4 text-xs font-semibold">
        <button
          onClick={() => setActiveTab('general')}
          className={`py-2.5 px-3 border-b-2 transition-colors ${
            activeTab === 'general'
              ? 'border-sky-600 text-sky-700'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          Général & Contact
        </button>
        <button
          onClick={() => setActiveTab('experience')}
          className={`py-2.5 px-3 border-b-2 transition-colors ${
            activeTab === 'experience'
              ? 'border-sky-600 text-sky-700'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          Expériences
        </button>
        <button
          onClick={() => setActiveTab('skills')}
          className={`py-2.5 px-3 border-b-2 transition-colors ${
            activeTab === 'skills'
              ? 'border-sky-600 text-sky-700'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          Compétences
        </button>
        <button
          onClick={() => setActiveTab('references')}
          className={`py-2.5 px-3 border-b-2 transition-colors ${
            activeTab === 'references'
              ? 'border-sky-600 text-sky-700'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          Références
        </button>
      </div>

      {/* Drawer Body */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4 text-xs text-slate-800">
        {activeTab === 'general' && (
          <div className="space-y-4">
            <div>
              <label className="block font-semibold mb-1 text-slate-700">Nom complet</label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => handleChangeText('fullName', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1 text-slate-700">Titre professionnel</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleChangeText('title', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1 text-slate-700">Mots-clés / Domaines (séparés par virgule)</label>
              <input
                type="text"
                value={formData.tags.join(', ')}
                onChange={(e) =>
                  setFormData((p) => ({
                    ...p,
                    tags: e.target.value.split(',').map((t) => t.trim()),
                  }))
                }
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1 text-slate-700">Citation du bandeau</label>
              <input
                type="text"
                value={formData.bannerQuote}
                onChange={(e) => handleChangeText('bannerQuote', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
              />
            </div>

            <div className="pt-2 border-t border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">Coordonnées</h3>
              <div className="space-y-2.5">
                <div>
                  <label className="block text-slate-600 mb-0.5">Téléphone / WhatsApp</label>
                  <input
                    type="text"
                    value={formData.contact.phone}
                    onChange={(e) => handleContactChange('phone', e.target.value)}
                    className="w-full px-3 py-1.5 border border-slate-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 mb-0.5">Email</label>
                  <input
                    type="email"
                    value={formData.contact.email}
                    onChange={(e) => handleContactChange('email', e.target.value)}
                    className="w-full px-3 py-1.5 border border-slate-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 mb-0.5">Adresse / Localisation</label>
                  <input
                    type="text"
                    value={formData.contact.location}
                    onChange={(e) => handleContactChange('location', e.target.value)}
                    className="w-full px-3 py-1.5 border border-slate-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 mb-0.5">Langues (résumé du bandeau)</label>
                  <input
                    type="text"
                    value={formData.contact.languagesSummary}
                    onChange={(e) => handleContactChange('languagesSummary', e.target.value)}
                    className="w-full px-3 py-1.5 border border-slate-300 rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-200">
              <label className="block font-semibold mb-1 text-slate-700">Profil Professionnel</label>
              <textarea
                rows={6}
                value={formData.profile}
                onChange={(e) => handleChangeText('profile', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
              />
            </div>
          </div>
        )}

        {activeTab === 'experience' && (
          <div className="space-y-5">
            {formData.experiences.map((exp, idx) => (
              <div key={exp.id} className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sky-800">Expérience #{idx + 1}</span>
                  <span className="text-[10px] text-slate-500 font-mono">Logo: {exp.logoType}</span>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600">Entreprise</label>
                  <input
                    type="text"
                    value={exp.company}
                    onChange={(e) => {
                      const updated = [...formData.experiences];
                      updated[idx].company = e.target.value;
                      setFormData({ ...formData, experiences: updated });
                    }}
                    className="w-full px-2 py-1 border border-slate-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600">Rôle / Poste</label>
                  <input
                    type="text"
                    value={exp.role}
                    onChange={(e) => {
                      const updated = [...formData.experiences];
                      updated[idx].role = e.target.value;
                      setFormData({ ...formData, experiences: updated });
                    }}
                    className="w-full px-2 py-1 border border-slate-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600">Période</label>
                  <input
                    type="text"
                    value={exp.period}
                    onChange={(e) => {
                      const updated = [...formData.experiences];
                      updated[idx].period = e.target.value;
                      setFormData({ ...formData, experiences: updated });
                    }}
                    className="w-full px-2 py-1 border border-slate-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600">Points clés (1 par ligne)</label>
                  <textarea
                    rows={4}
                    value={exp.bullets.join('\n')}
                    onChange={(e) => {
                      const updated = [...formData.experiences];
                      updated[idx].bullets = e.target.value.split('\n').filter(Boolean);
                      setFormData({ ...formData, experiences: updated });
                    }}
                    className="w-full px-2 py-1 border border-slate-300 rounded text-[11px]"
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="space-y-4">
            {formData.skillCategories.map((cat, cIdx) => (
              <div key={cat.id} className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                <span className="font-bold text-slate-800">{cat.title}</span>
                <textarea
                  rows={3}
                  value={cat.skills.join('\n')}
                  onChange={(e) => {
                    const updated = [...formData.skillCategories];
                    updated[cIdx].skills = e.target.value.split('\n').filter(Boolean);
                    setFormData({ ...formData, skillCategories: updated });
                  }}
                  className="w-full px-2 py-1 border border-slate-300 rounded text-[11px]"
                />
              </div>
            ))}
          </div>
        )}

        {activeTab === 'references' && (
          <div className="space-y-3">
            {formData.references.map((ref, rIdx) => (
              <div key={ref.id} className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-1.5">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[10px] text-slate-500">Nom</label>
                    <input
                      type="text"
                      value={ref.name}
                      onChange={(e) => {
                        const updated = [...formData.references];
                        updated[rIdx].name = e.target.value;
                        setFormData({ ...formData, references: updated });
                      }}
                      className="w-full px-2 py-1 border border-slate-300 rounded text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-slate-500">Rôle & Structure</label>
                    <input
                      type="text"
                      value={ref.role}
                      onChange={(e) => {
                        const updated = [...formData.references];
                        updated[rIdx].role = e.target.value;
                        setFormData({ ...formData, references: updated });
                      }}
                      className="w-full px-2 py-1 border border-slate-300 rounded text-xs"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[10px] text-slate-500">Email</label>
                    <input
                      type="text"
                      value={ref.email}
                      onChange={(e) => {
                        const updated = [...formData.references];
                        updated[rIdx].email = e.target.value;
                        setFormData({ ...formData, references: updated });
                      }}
                      className="w-full px-2 py-1 border border-slate-300 rounded text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-slate-500">Téléphone</label>
                    <input
                      type="text"
                      value={ref.phone}
                      onChange={(e) => {
                        const updated = [...formData.references];
                        updated[rIdx].phone = e.target.value;
                        setFormData({ ...formData, references: updated });
                      }}
                      className="w-full px-2 py-1 border border-slate-300 rounded text-xs"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Drawer Footer Actions */}
      <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
        <button
          onClick={onReset}
          className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-rose-700 hover:bg-rose-50 rounded-lg transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Réinitialiser</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={onClose}
            className="px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-200 rounded-lg transition-colors"
          >
            Annuler
          </button>
          <button
            onClick={handleSave}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg transition-colors shadow-xs"
          >
            <Save className="w-3.5 h-3.5" />
            <span>Appliquer les modifications</span>
          </button>
        </div>
      </div>
    </div>
  );
};
