import React, { useState } from 'react';
import { BarChart3, TrendingUp, Clock, Bike, Filter, Info } from 'lucide-react';

export const CyclisticCharts: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'member' | 'casual'>('all');
  const [hoveredPoint, setHoveredPoint] = useState<string | null>(null);

  // Data matching the uploaded Tableau Dashboard
  const bikeTypeData = [
    { type: 'classic_bike', label: 'Vélo classique', member: 282400, casual: 71200, total: 353600 },
    { type: 'electric_bike', label: 'Vélo électrique', member: 121300, casual: 39800, total: 161100 },
  ];

  const weekdayData = [
    { day: 'Dimanche', short: 'Sunday', member: 40500, casual: 19800, total: 60300 },
    { day: 'Lundi', short: 'Monday', member: 62400, casual: 16200, total: 78600 },
    { day: 'Mardi', short: 'Tuesday', member: 67800, casual: 16100, total: 83900 },
    { day: 'Mercredi', short: 'Wednesday', member: 70900, casual: 15400, total: 86300 },
    { day: 'Jeudi', short: 'Thursday', member: 70600, casual: 15900, total: 86500 },
    { day: 'Vendredi', short: 'Friday', member: 51800, casual: 14200, total: 66000 },
    { day: 'Samedi', short: 'Saturday', member: 43200, casual: 20900, total: 64100 },
  ];

  const avgDurationDayData = [
    { day: 'Dimanche', short: 'Sun', member: 12.4, casual: 25.8, total: 38.2 },
    { day: 'Lundi', short: 'Mon', member: 11.5, casual: 21.2, total: 32.7 },
    { day: 'Mardi', short: 'Tue', member: 11.8, casual: 20.3, total: 32.1 },
    { day: 'Mercredi', short: 'Wed', member: 11.6, casual: 17.4, total: 29.0 },
    { day: 'Jeudi', short: 'Thu', member: 11.0, casual: 16.2, total: 27.2 },
    { day: 'Vendredi', short: 'Fri', member: 11.3, casual: 19.4, total: 30.7 },
    { day: 'Samedi', short: 'Sat', member: 12.6, casual: 24.5, total: 37.1 },
  ];

  const avgDurationRiderData = [
    { rider: 'casual', label: 'Usagers occasionnels (casual)', duration: 20.6 },
    { rider: 'member', label: 'Membres annuels (member)', duration: 11.8 },
  ];

  const memberColor = '#F28E2B'; // Tableau orange
  const casualColor = '#4E79A7'; // Tableau blue

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 sm:p-6 space-y-6">
      {/* Header with Title and Filter Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-md bg-sky-100 text-sky-800">
              <BarChart3 className="w-4 h-4" />
            </span>
            <h3 className="font-extrabold text-slate-900 text-base sm:text-lg">
              Tableau de bord Cyclistic — Comportements des Usagers (Q1 2024)
            </h3>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Visualisation fidèle reproduite depuis le Dashboard officiel Tableau de Roland
          </p>
        </div>

        {/* Legend / Filter */}
        <div className="flex items-center gap-2 text-xs">
          <div className="flex items-center gap-3 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
            <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
              <Filter className="w-3 h-3" /> Légende :
            </span>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-xs" style={{ backgroundColor: memberColor }} />
              <span className="font-semibold text-slate-800 text-[11px]">member (annuel)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-xs" style={{ backgroundColor: casualColor }} />
              <span className="font-semibold text-slate-800 text-[11px]">casual (occasionnel)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of the 4 Tableau charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart 1: Total Rides by Bike Type and Rider Type */}
        <div className="p-4 bg-slate-50/70 rounded-xl border border-slate-200/80 flex flex-col justify-between">
          <div className="mb-3">
            <h4 className="text-xs font-bold text-slate-800 tracking-wide uppercase flex items-center justify-between">
              <span>Total Rides by Bike Type and Rider Type</span>
              <Bike className="w-4 h-4 text-slate-400" />
            </h4>
            <span className="text-[10px] text-slate-500 font-mono">Dimension : Rideable Type</span>
          </div>

          <div className="h-56 relative flex items-end justify-around pt-6 pb-6 px-4">
            {bikeTypeData.map((item) => {
              const maxVal = 400000;
              const memberHeight = (item.member / maxVal) * 100;
              const casualHeight = (item.casual / maxVal) * 100;

              return (
                <div key={item.type} className="flex flex-col items-center w-28 group relative">
                  {/* Tooltip */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-12 bg-slate-900 text-white text-[10px] py-1 px-2 rounded-md shadow-lg pointer-events-none whitespace-nowrap z-20">
                    <p className="font-bold">{item.label}</p>
                    <p>Total: {item.total.toLocaleString()} trajets</p>
                    <p className="text-amber-300">Member: {item.member.toLocaleString()}</p>
                    <p className="text-sky-300">Casual: {item.casual.toLocaleString()}</p>
                  </div>

                  {/* Stacked Bar */}
                  <div className="w-16 rounded-t-xs overflow-hidden flex flex-col justify-end bg-slate-200/50 h-44 shadow-xs">
                    {/* Top: casual (blue) */}
                    <div
                      style={{
                        height: `${casualHeight}%`,
                        backgroundColor: casualColor,
                      }}
                      className="w-full transition-all group-hover:brightness-110 flex items-center justify-center text-[9px] text-white font-bold"
                    >
                      {Math.round(item.casual / 1000)}K
                    </div>
                    {/* Bottom: member (orange) */}
                    <div
                      style={{
                        height: `${memberHeight}%`,
                        backgroundColor: memberColor,
                      }}
                      className="w-full transition-all group-hover:brightness-110 flex items-center justify-center text-[9px] text-white font-bold"
                    >
                      {Math.round(item.member / 1000)}K
                    </div>
                  </div>

                  {/* X-axis label */}
                  <span className="mt-2 text-[10px] font-semibold text-slate-700 font-mono">
                    {item.type}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-500">
            <span>Préférence marquée pour les vélos classiques (&gt;350K courses)</span>
            <span className="font-mono">Échelle max: 400K</span>
          </div>
        </div>

        {/* Chart 2: Total Rides by Day of the Week and Rider Type */}
        <div className="p-4 bg-slate-50/70 rounded-xl border border-slate-200/80 flex flex-col justify-between">
          <div className="mb-3">
            <h4 className="text-xs font-bold text-slate-800 tracking-wide uppercase flex items-center justify-between">
              <span>Total Rides by Day of the Week and Rider Type</span>
              <TrendingUp className="w-4 h-4 text-slate-400" />
            </h4>
            <span className="text-[10px] text-slate-500 font-mono">Dimension : Day Name</span>
          </div>

          <div className="h-56 relative flex items-end justify-between pt-6 pb-6 px-1">
            {weekdayData.map((d) => {
              const maxVal = 100000;
              const memberHeight = (d.member / maxVal) * 100;
              const casualHeight = (d.casual / maxVal) * 100;

              return (
                <div key={d.short} className="flex flex-col items-center flex-1 group relative">
                  {/* Tooltip */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-12 bg-slate-900 text-white text-[10px] py-1 px-2 rounded-md shadow-lg pointer-events-none whitespace-nowrap z-20">
                    <p className="font-bold">{d.day} ({d.short})</p>
                    <p>Total: {d.total.toLocaleString()} trajets</p>
                    <p className="text-amber-300">Member: {d.member.toLocaleString()}</p>
                    <p className="text-sky-300">Casual: {d.casual.toLocaleString()}</p>
                  </div>

                  {/* Stacked bar */}
                  <div className="w-7 sm:w-8 rounded-t-xs overflow-hidden flex flex-col justify-end bg-slate-200/40 h-44 shadow-xs">
                    <div
                      style={{
                        height: `${casualHeight}%`,
                        backgroundColor: casualColor,
                      }}
                      className="w-full transition-all group-hover:brightness-110"
                    />
                    <div
                      style={{
                        height: `${memberHeight}%`,
                        backgroundColor: memberColor,
                      }}
                      className="w-full transition-all group-hover:brightness-110"
                    />
                  </div>

                  <span className="mt-2 text-[9.5px] font-semibold text-slate-600 truncate max-w-[42px] text-center">
                    {d.short.slice(0, 3)}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-500">
            <span>Pic membres : Mardi à Jeudi (~70K/j) | Pic casual : Samedi & Dimanche</span>
            <span className="font-mono">Échelle max: 100K</span>
          </div>
        </div>

        {/* Chart 3: Average Ride Duration by Day of the Week */}
        <div className="p-4 bg-slate-50/70 rounded-xl border border-slate-200/80 flex flex-col justify-between">
          <div className="mb-3">
            <h4 className="text-xs font-bold text-slate-800 tracking-wide uppercase flex items-center justify-between">
              <span>Average Ride Duration by Day of the Week</span>
              <Clock className="w-4 h-4 text-slate-400" />
            </h4>
            <span className="text-[10px] text-slate-500 font-mono">Unité : Minutes</span>
          </div>

          <div className="h-56 relative flex items-end justify-between pt-6 pb-6 px-1">
            {avgDurationDayData.map((d) => {
              const maxVal = 45;
              const memberHeight = (d.member / maxVal) * 100;
              const casualHeight = (d.casual / maxVal) * 100;

              return (
                <div key={d.short} className="flex flex-col items-center flex-1 group relative">
                  {/* Tooltip */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-12 bg-slate-900 text-white text-[10px] py-1 px-2 rounded-md shadow-lg pointer-events-none whitespace-nowrap z-20">
                    <p className="font-bold">{d.day}</p>
                    <p className="text-amber-300">Member: {d.member} min</p>
                    <p className="text-sky-300">Casual: {d.casual} min</p>
                  </div>

                  <div className="w-7 sm:w-8 rounded-t-xs overflow-hidden flex flex-col justify-end bg-slate-200/40 h-44 shadow-xs">
                    <div
                      style={{
                        height: `${casualHeight}%`,
                        backgroundColor: casualColor,
                      }}
                      className="w-full transition-all group-hover:brightness-110"
                    />
                    <div
                      style={{
                        height: `${memberHeight}%`,
                        backgroundColor: memberColor,
                      }}
                      className="w-full transition-all group-hover:brightness-110"
                    />
                  </div>

                  <span className="mt-2 text-[9.5px] font-semibold text-slate-600 truncate max-w-[42px] text-center">
                    {d.short}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-500">
            <span>Trajets usagers occasionnels 2x plus longs le week-end (~37-38 min)</span>
            <span className="font-mono">Échelle max: 45 min</span>
          </div>
        </div>

        {/* Chart 4: Average Ride Duration by Rider Type */}
        <div className="p-4 bg-slate-50/70 rounded-xl border border-slate-200/80 flex flex-col justify-between">
          <div className="mb-3">
            <h4 className="text-xs font-bold text-slate-800 tracking-wide uppercase flex items-center justify-between">
              <span>Average Ride Duration by Rider Type</span>
              <Info className="w-4 h-4 text-slate-400" />
            </h4>
            <span className="text-[10px] text-slate-500 font-mono">Dimension : Member Casual</span>
          </div>

          <div className="h-56 relative flex items-end justify-around pt-6 pb-6 px-4">
            {avgDurationRiderData.map((item) => {
              const maxVal = 25;
              const barHeight = (item.duration / maxVal) * 100;

              return (
                <div key={item.rider} className="flex flex-col items-center w-28 group relative">
                  {/* Tooltip */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-10 bg-slate-900 text-white text-[10px] py-1 px-2 rounded-md shadow-lg pointer-events-none whitespace-nowrap z-20">
                    <p className="font-bold">{item.label}</p>
                    <p className="text-sky-300 font-mono">{item.duration} minutes en moyenne</p>
                  </div>

                  <div className="w-20 rounded-t-xs overflow-hidden flex flex-col justify-end bg-slate-200/40 h-44 shadow-xs">
                    <div
                      style={{
                        height: `${barHeight}%`,
                        backgroundColor: casualColor,
                      }}
                      className="w-full transition-all group-hover:brightness-110 flex items-center justify-center text-white text-xs font-bold"
                    >
                      {item.duration} min
                    </div>
                  </div>

                  <span className="mt-2 text-xs font-bold text-slate-800 font-mono">
                    {item.rider}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-500">
            <span>Usagers occasionnels : 20.6 min vs Membres annuels : 11.8 min</span>
            <span className="font-mono">Ratio : ~1.75x</span>
          </div>
        </div>
      </div>
    </div>
  );
};
