import React, { useState, useMemo } from 'react';

const initialClassData = {
  "TC2037": {
    name: "Implementación de métodos computacionales",
    requirement: "Todo el semestre (Semanas 1-18)",
    color: "#3b82f6",
    groups: [
      { grupo: "601", profesor: "Santiago Enrique Conant Pablos", periods: ["1-6", "7-12", "13-18"], sessions: [
        { id: "TC2037-601-0", fechaInicio: "9 feb 2026", fechaFin: "15 mar 2026", dias: ["Lu", "Ju"], horaInicio: "09:10", horaFin: "10:50" },
        { id: "TC2037-601-1", fechaInicio: "23 mar 2026", fechaFin: "3 may 2026", dias: ["Lu", "Ju"], horaInicio: "09:10", horaFin: "10:50" },
        { id: "TC2037-601-2", fechaInicio: "11 may 2026", fechaFin: "14 jun 2026", dias: ["Lu", "Ju"], horaInicio: "09:10", horaFin: "10:50" }
      ]},
      { grupo: "602", profesor: "Luis Ricardo Salgado Garza", periods: ["1-6", "7-12", "13-18"], sessions: [
        { id: "TC2037-602-0", fechaInicio: "9 feb 2026", fechaFin: "15 mar 2026", dias: ["Lu", "Ju"], horaInicio: "09:10", horaFin: "10:50" },
        { id: "TC2037-602-1", fechaInicio: "23 mar 2026", fechaFin: "3 may 2026", dias: ["Lu", "Ju"], horaInicio: "09:10", horaFin: "10:50" },
        { id: "TC2037-602-2", fechaInicio: "11 may 2026", fechaFin: "14 jun 2026", dias: ["Lu", "Ju"], horaInicio: "09:10", horaFin: "10:50" }
      ]},
      { grupo: "603", profesor: "Maria Valentina Narváez Teran", periods: ["1-6", "7-12", "13-18"], sessions: [
        { id: "TC2037-603-0", fechaInicio: "9 feb 2026", fechaFin: "15 mar 2026", dias: ["Ma", "Vi"], horaInicio: "09:10", horaFin: "10:50" },
        { id: "TC2037-603-1", fechaInicio: "23 mar 2026", fechaFin: "3 may 2026", dias: ["Ma", "Vi"], horaInicio: "09:10", horaFin: "10:50" },
        { id: "TC2037-603-2", fechaInicio: "11 may 2026", fechaFin: "14 jun 2026", dias: ["Ma", "Vi"], horaInicio: "09:10", horaFin: "10:50" }
      ]},
      { grupo: "604", profesor: "Maria Valentina Narváez Teran", periods: ["1-6", "7-12", "13-18"], sessions: [
        { id: "TC2037-604-0", fechaInicio: "9 feb 2026", fechaFin: "15 mar 2026", dias: ["Lu", "Ju"], horaInicio: "15:10", horaFin: "16:50" },
        { id: "TC2037-604-1", fechaInicio: "23 mar 2026", fechaFin: "3 may 2026", dias: ["Lu", "Ju"], horaInicio: "15:10", horaFin: "16:50" },
        { id: "TC2037-604-2", fechaInicio: "11 may 2026", fechaFin: "14 jun 2026", dias: ["Lu", "Ju"], horaInicio: "15:10", horaFin: "16:50" }
      ]},
      { grupo: "605", profesor: "Santiago Enrique Conant Pablos", periods: ["1-6", "7-12", "13-18"], sessions: [
        { id: "TC2037-605-0", fechaInicio: "9 feb 2026", fechaFin: "15 mar 2026", dias: ["Lu", "Ju"], horaInicio: "11:10", horaFin: "12:50" },
        { id: "TC2037-605-1", fechaInicio: "23 mar 2026", fechaFin: "3 may 2026", dias: ["Lu", "Ju"], horaInicio: "11:10", horaFin: "12:50" },
        { id: "TC2037-605-2", fechaInicio: "11 may 2026", fechaFin: "14 jun 2026", dias: ["Lu", "Ju"], horaInicio: "11:10", horaFin: "12:50" }
      ]},
      { grupo: "606", profesor: "Katie Brodhead", periods: ["1-6", "7-12", "13-18"], sessions: [
        { id: "TC2037-606-0", fechaInicio: "9 feb 2026", fechaFin: "15 mar 2026", dias: ["Ma", "Vi"], horaInicio: "11:10", horaFin: "12:50" },
        { id: "TC2037-606-1", fechaInicio: "23 mar 2026", fechaFin: "3 may 2026", dias: ["Ma", "Vi"], horaInicio: "11:10", horaFin: "12:50" },
        { id: "TC2037-606-2", fechaInicio: "11 may 2026", fechaFin: "14 jun 2026", dias: ["Ma", "Vi"], horaInicio: "11:10", horaFin: "12:50" }
      ]},
      { grupo: "607", profesor: "Sergio Adán Flores Cantú", periods: ["1-6", "7-12", "13-18"], sessions: [
        { id: "TC2037-607-0", fechaInicio: "9 feb 2026", fechaFin: "15 mar 2026", dias: ["Lu", "Ju"], horaInicio: "17:10", horaFin: "18:50" },
        { id: "TC2037-607-1", fechaInicio: "23 mar 2026", fechaFin: "3 may 2026", dias: ["Lu", "Ju"], horaInicio: "17:10", horaFin: "18:50" },
        { id: "TC2037-607-2", fechaInicio: "11 may 2026", fechaFin: "14 jun 2026", dias: ["Lu", "Ju"], horaInicio: "17:10", horaFin: "18:50" }
      ]},
      { grupo: "608", profesor: "Profesor Tec", periods: ["1-6", "7-12", "13-18"], sessions: [
        { id: "TC2037-608-0", fechaInicio: "9 feb 2026", fechaFin: "15 mar 2026", dias: ["Ma", "Vi"], horaInicio: "17:10", horaFin: "18:50" },
        { id: "TC2037-608-1", fechaInicio: "23 mar 2026", fechaFin: "3 may 2026", dias: ["Ma", "Vi"], horaInicio: "17:10", horaFin: "18:50" },
        { id: "TC2037-608-2", fechaInicio: "11 may 2026", fechaFin: "14 jun 2026", dias: ["Ma", "Vi"], horaInicio: "17:10", horaFin: "18:50" }
      ]}
    ]
  },
  "TC2006B": {
    name: "Interconexión de dispositivos",
    requirement: "5 semanas: Semanas 1-6 ó 13-18",
    color: "#10b981",
    groups: [
      { grupo: "101", profesor: "María Raquel Landa Cavazos", periods: ["1-6"], periodLabel: "Sem 1-6", sessions: [
        { id: "TC2006B-101-0", fechaInicio: "9 feb 2026", fechaFin: "15 mar 2026", dias: ["Lu", "Ma", "Mi", "Ju"], horaInicio: "11:10", horaFin: "14:50" }
      ]},
      { grupo: "102", profesor: "Profesor Tec1", periods: ["1-6"], periodLabel: "Sem 1-6", sessions: [
        { id: "TC2006B-102-0", fechaInicio: "9 feb 2026", fechaFin: "15 mar 2026", dias: ["Lu", "Ma", "Ju", "Vi"], horaInicio: "09:10", horaFin: "12:50" }
      ]},
      { grupo: "103", profesor: "Juan David Guarnizo Hernandez", periods: ["1-6"], periodLabel: "Sem 1-6", sessions: [
        { id: "TC2006B-103-0", fechaInicio: "9 feb 2026", fechaFin: "15 mar 2026", dias: ["Lu", "Mi", "Ju", "Vi"], horaInicio: "07:10", horaFin: "10:50" }
      ]},
      { grupo: "104", profesor: "Joel Hiram Chávez Verástegui", periods: ["1-6"], periodLabel: "Sem 1-6", sessions: [
        { id: "TC2006B-104-0", fechaInicio: "9 feb 2026", fechaFin: "15 mar 2026", dias: ["Lu", "Ma", "Mi", "Ju"], horaInicio: "17:10", horaFin: "20:50" }
      ]},
      { grupo: "301", profesor: "Juan David Guarnizo Hernandez", periods: ["13-18"], periodLabel: "Sem 13-18", sessions: [
        { id: "TC2006B-301-0", fechaInicio: "11 may 2026", fechaFin: "14 jun 2026", dias: ["Lu", "Ma", "Ju", "Vi"], horaInicio: "09:10", horaFin: "12:50" }
      ]},
      { grupo: "302", profesor: "Alejandro Parra Briones", periods: ["13-18"], periodLabel: "Sem 13-18", sessions: [
        { id: "TC2006B-302-0", fechaInicio: "11 may 2026", fechaFin: "14 jun 2026", dias: ["Lu", "Ma", "Ju", "Vi"], horaInicio: "13:10", horaFin: "16:50" }
      ]},
      { grupo: "303", profesor: "Profesor Tec1", periods: ["13-18"], periodLabel: "Sem 13-18", sessions: [
        { id: "TC2006B-303-0", fechaInicio: "11 may 2026", fechaFin: "14 jun 2026", dias: ["Lu", "Ma", "Mi", "Ju"], horaInicio: "07:10", horaFin: "10:50" }
      ]},
      { grupo: "304", profesor: "Joel Hiram Chávez Verástegui", periods: ["13-18"], periodLabel: "Sem 13-18", sessions: [
        { id: "TC2006B-304-0", fechaInicio: "11 may 2026", fechaFin: "14 jun 2026", dias: ["Lu", "Ma", "Mi", "Ju"], horaInicio: "17:10", horaFin: "20:50" }
      ]}
    ]
  },
  "TC2005B": {
    name: "Construcción de software y toma de decisiones",
    requirement: "10 semanas: Semanas 1-12 ó 7-18",
    color: "#f59e0b",
    groups: [
      { grupo: "401", profesor: "Cristina Verónica González Córdova", periods: ["1-6", "7-12"], periodLabel: "Sem 1-12", sessions: [
        { id: "TC2005B-401-0", fechaInicio: "9 feb 2026", fechaFin: "15 mar 2026", dias: ["Lu", "Mi", "Ju"], horaInicio: "11:10", horaFin: "14:50" },
        { id: "TC2005B-401-1", fechaInicio: "9 feb 2026", fechaFin: "15 mar 2026", dias: ["Ma", "Vi"], horaInicio: "11:10", horaFin: "12:50" },
        { id: "TC2005B-401-2", fechaInicio: "23 mar 2026", fechaFin: "3 may 2026", dias: ["Ma", "Vi"], horaInicio: "11:10", horaFin: "12:50" },
        { id: "TC2005B-401-3", fechaInicio: "23 mar 2026", fechaFin: "3 may 2026", dias: ["Lu", "Mi", "Ju"], horaInicio: "11:10", horaFin: "14:50" }
      ]},
      { grupo: "402", profesor: "Profesor Tec1", periods: ["1-6", "7-12"], periodLabel: "Sem 1-12", sessions: [
        { id: "TC2005B-402-0", fechaInicio: "9 feb 2026", fechaFin: "15 mar 2026", dias: ["Ma", "Vi"], horaInicio: "15:10", horaFin: "18:50" },
        { id: "TC2005B-402-1", fechaInicio: "9 feb 2026", fechaFin: "15 mar 2026", dias: ["Lu", "Ju"], horaInicio: "13:10", horaFin: "16:50" },
        { id: "TC2005B-402-2", fechaInicio: "23 mar 2026", fechaFin: "3 may 2026", dias: ["Ma", "Vi"], horaInicio: "15:10", horaFin: "18:50" },
        { id: "TC2005B-402-3", fechaInicio: "23 mar 2026", fechaFin: "3 may 2026", dias: ["Lu", "Ju"], horaInicio: "13:10", horaFin: "16:50" }
      ]},
      { grupo: "403", profesor: "Jose Eduardo Ferrer Cruz", periods: ["1-6", "7-12"], periodLabel: "Sem 1-12", sessions: [
        { id: "TC2005B-403-0", fechaInicio: "9 feb 2026", fechaFin: "15 mar 2026", dias: ["Ma", "Vi"], horaInicio: "07:10", horaFin: "08:50" },
        { id: "TC2005B-403-1", fechaInicio: "9 feb 2026", fechaFin: "15 mar 2026", dias: ["Mi"], horaInicio: "09:10", horaFin: "12:50" },
        { id: "TC2005B-403-2", fechaInicio: "9 feb 2026", fechaFin: "15 mar 2026", dias: ["Lu", "Ju"], horaInicio: "07:10", horaFin: "10:50" },
        { id: "TC2005B-403-3", fechaInicio: "23 mar 2026", fechaFin: "3 may 2026", dias: ["Mi"], horaInicio: "09:10", horaFin: "12:50" },
        { id: "TC2005B-403-4", fechaInicio: "23 mar 2026", fechaFin: "3 may 2026", dias: ["Ma", "Vi"], horaInicio: "07:10", horaFin: "08:50" },
        { id: "TC2005B-403-5", fechaInicio: "23 mar 2026", fechaFin: "3 may 2026", dias: ["Lu", "Ju"], horaInicio: "07:10", horaFin: "10:50" }
      ]},
      { grupo: "404", profesor: "Rolando Evelio Pérez Versón", periods: ["1-6", "7-12"], periodLabel: "Sem 1-12", sessions: [
        { id: "TC2005B-404-0", fechaInicio: "9 feb 2026", fechaFin: "15 mar 2026", dias: ["Lu", "Ma", "Mi", "Ju"], horaInicio: "17:10", horaFin: "20:50" },
        { id: "TC2005B-404-1", fechaInicio: "23 mar 2026", fechaFin: "3 may 2026", dias: ["Lu", "Ma", "Mi", "Ju"], horaInicio: "17:10", horaFin: "20:50" }
      ]},
      { grupo: "501", profesor: "Jose Eduardo Ferrer Cruz", periods: ["7-12", "13-18"], periodLabel: "Sem 7-18", sessions: [
        { id: "TC2005B-501-0", fechaInicio: "23 mar 2026", fechaFin: "3 may 2026", dias: ["Mi", "Ju"], horaInicio: "15:10", horaFin: "20:50" },
        { id: "TC2005B-501-1", fechaInicio: "23 mar 2026", fechaFin: "3 may 2026", dias: ["Ma"], horaInicio: "17:10", horaFin: "20:50" },
        { id: "TC2005B-501-2", fechaInicio: "11 may 2026", fechaFin: "14 jun 2026", dias: ["Ma"], horaInicio: "17:10", horaFin: "20:50" },
        { id: "TC2005B-501-3", fechaInicio: "11 may 2026", fechaFin: "14 jun 2026", dias: ["Mi", "Ju"], horaInicio: "15:10", horaFin: "20:50" }
      ]},
      { grupo: "502", profesor: "Veronica Rodriguez Rodriguez", periods: ["7-12", "13-18"], periodLabel: "Sem 7-18", sessions: [
        { id: "TC2005B-502-0", fechaInicio: "23 mar 2026", fechaFin: "3 may 2026", dias: ["Lu", "Ju"], horaInicio: "07:10", horaFin: "10:50" },
        { id: "TC2005B-502-1", fechaInicio: "23 mar 2026", fechaFin: "3 may 2026", dias: ["Ma", "Vi"], horaInicio: "07:10", horaFin: "08:50" },
        { id: "TC2005B-502-2", fechaInicio: "23 mar 2026", fechaFin: "3 may 2026", dias: ["Mi"], horaInicio: "09:10", horaFin: "12:50" },
        { id: "TC2005B-502-3", fechaInicio: "11 may 2026", fechaFin: "14 jun 2026", dias: ["Mi"], horaInicio: "09:10", horaFin: "12:50" },
        { id: "TC2005B-502-4", fechaInicio: "11 may 2026", fechaFin: "14 jun 2026", dias: ["Lu", "Ju"], horaInicio: "07:10", horaFin: "10:50" },
        { id: "TC2005B-502-5", fechaInicio: "11 may 2026", fechaFin: "14 jun 2026", dias: ["Ma", "Vi"], horaInicio: "07:10", horaFin: "08:50" }
      ]},
      { grupo: "503", profesor: "Carlos Acuña Ocampo", periods: ["7-12", "13-18"], periodLabel: "Sem 7-18", sessions: [
        { id: "TC2005B-503-0", fechaInicio: "23 mar 2026", fechaFin: "3 may 2026", dias: ["Ma", "Vi"], horaInicio: "07:10", horaFin: "10:50" },
        { id: "TC2005B-503-1", fechaInicio: "23 mar 2026", fechaFin: "3 may 2026", dias: ["Lu", "Ju"], horaInicio: "09:10", horaFin: "10:50" },
        { id: "TC2005B-503-2", fechaInicio: "23 mar 2026", fechaFin: "3 may 2026", dias: ["Mi"], horaInicio: "09:10", horaFin: "12:50" },
        { id: "TC2005B-503-3", fechaInicio: "11 may 2026", fechaFin: "14 jun 2026", dias: ["Mi"], horaInicio: "09:10", horaFin: "12:50" },
        { id: "TC2005B-503-4", fechaInicio: "11 may 2026", fechaFin: "14 jun 2026", dias: ["Ma", "Vi"], horaInicio: "07:10", horaFin: "10:50" },
        { id: "TC2005B-503-5", fechaInicio: "11 may 2026", fechaFin: "14 jun 2026", dias: ["Lu", "Ju"], horaInicio: "09:10", horaFin: "10:50" }
      ]},
      { grupo: "504", profesor: "Cristina Verónica González Córdova", periods: ["7-12", "13-18"], periodLabel: "Sem 7-18", sessions: [
        { id: "TC2005B-504-0", fechaInicio: "23 mar 2026", fechaFin: "3 may 2026", dias: ["Lu", "Mi", "Ju"], horaInicio: "13:10", horaFin: "16:50" },
        { id: "TC2005B-504-1", fechaInicio: "23 mar 2026", fechaFin: "3 may 2026", dias: ["Ma", "Vi"], horaInicio: "13:10", horaFin: "14:50" },
        { id: "TC2005B-504-2", fechaInicio: "11 may 2026", fechaFin: "14 jun 2026", dias: ["Ma", "Vi"], horaInicio: "13:10", horaFin: "14:50" },
        { id: "TC2005B-504-3", fechaInicio: "11 may 2026", fechaFin: "14 jun 2026", dias: ["Lu", "Mi", "Ju"], horaInicio: "13:10", horaFin: "16:50" }
      ]}
    ]
  }
};

const monthMap = {
  'ene': 0, 'feb': 1, 'mar': 2, 'abr': 3, 'may': 4, 'jun': 5,
  'jul': 6, 'ago': 7, 'sep': 8, 'oct': 9, 'nov': 10, 'dic': 11
};

const dayMap = { 'Lu': 1, 'Ma': 2, 'Mi': 3, 'Ju': 4, 'Vi': 5 };
const dayNames = { 'Lu': 'Lunes', 'Ma': 'Martes', 'Mi': 'Miércoles', 'Ju': 'Jueves', 'Vi': 'Viernes' };

function parseDate(dateStr) {
  const parts = dateStr.split(' ');
  const day = parseInt(parts[0]);
  const month = monthMap[parts[1]];
  const year = parseInt(parts[2]);
  return new Date(year, month, day);
}

function parseTime(timeStr) {
  const [hours, minutes] = timeStr.split(':').map(Number);
  return hours * 60 + minutes;
}

function timeRangesOverlap(start1, end1, start2, end2) {
  return start1 < end2 && start2 < end1;
}

function dateRangesOverlap(start1, end1, start2, end2) {
  return start1 <= end2 && start2 <= end1;
}

function getPeriodLabel(fechaInicio) {
  if (fechaInicio.includes('feb') || fechaInicio.includes('mar')) {
    if (fechaInicio.includes('23 mar')) return 'Sem 7-12';
    return 'Sem 1-6';
  }
  if (fechaInicio.includes('may') || fechaInicio.includes('jun')) {
    if (fechaInicio.includes('3 may')) return 'Sem 7-12';
    return 'Sem 13-18';
  }
  return '';
}

// LocalStorage keys
const STORAGE_KEYS = {
  SELECTIONS: 'tec-schedule-selections',
  REMOVED_SESSIONS: 'tec-schedule-removed-sessions',
  CLASS_DATA: 'tec-schedule-class-data'
};

// Load from localStorage or use defaults
function loadFromStorage(key, defaultValue) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
  } catch {
    return defaultValue;
  }
}

// Save to localStorage
function saveToStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.warn('Could not save to localStorage:', e);
  }
}

export default function ScheduleChecker() {
  const [classData, setClassData] = useState(() => 
    loadFromStorage(STORAGE_KEYS.CLASS_DATA, initialClassData)
  );
  const [selections, setSelections] = useState(() => 
    loadFromStorage(STORAGE_KEYS.SELECTIONS, {
      'TC2037': '',
      'TC2006B': '',
      'TC2005B': ''
    })
  );
  const [expandedGroup, setExpandedGroup] = useState(null);
  const [removedSessions, setRemovedSessions] = useState(() => 
    loadFromStorage(STORAGE_KEYS.REMOVED_SESSIONS, [])
  );

  // Save to localStorage whenever state changes
  React.useEffect(() => {
    saveToStorage(STORAGE_KEYS.SELECTIONS, selections);
  }, [selections]);

  React.useEffect(() => {
    saveToStorage(STORAGE_KEYS.REMOVED_SESSIONS, removedSessions);
  }, [removedSessions]);

  React.useEffect(() => {
    saveToStorage(STORAGE_KEYS.CLASS_DATA, classData);
  }, [classData]);

  // Reset all data function
  const handleResetAll = () => {
    if (window.confirm('¿Estás seguro de que quieres reiniciar todos los datos? Se perderán tus selecciones y cambios.')) {
      setClassData(initialClassData);
      setSelections({ 'TC2037': '', 'TC2006B': '', 'TC2005B': '' });
      setRemovedSessions([]);
      setExpandedGroup(null);
    }
  };

  const handleSelect = (clave, grupo) => {
    setSelections(prev => ({ ...prev, [clave]: grupo }));
  };

  const toggleExpand = (clave, grupo, e) => {
    e.stopPropagation();
    const key = `${clave}-${grupo}`;
    setExpandedGroup(prev => prev === key ? null : key);
  };

  const handleDeleteSession = (clave, grupo, sessionId, e) => {
    e.stopPropagation();
    
    // Store removed session for restore
    const groupData = classData[clave].groups.find(g => g.grupo === grupo);
    const session = groupData.sessions.find(s => s.id === sessionId);
    setRemovedSessions(prev => [...prev, { 
      clave, 
      grupo, 
      session,
      profesor: groupData.profesor 
    }]);

    // Remove session from data
    setClassData(prev => ({
      ...prev,
      [clave]: {
        ...prev[clave],
        groups: prev[clave].groups.map(g => 
          g.grupo === grupo 
            ? { ...g, sessions: g.sessions.filter(s => s.id !== sessionId) }
            : g
        )
      }
    }));
  };

  const handleRestoreSession = (index) => {
    const item = removedSessions[index];
    
    // Restore session to data
    setClassData(prev => ({
      ...prev,
      [item.clave]: {
        ...prev[item.clave],
        groups: prev[item.clave].groups.map(g => 
          g.grupo === item.grupo 
            ? { ...g, sessions: [...g.sessions, item.session] }
            : g
        )
      }
    }));

    // Remove from removed list
    setRemovedSessions(prev => prev.filter((_, i) => i !== index));
  };

  const findOverlaps = useMemo(() => {
    const overlaps = [];
    const selectedGroups = Object.entries(selections)
      .filter(([_, grupo]) => grupo !== '')
      .map(([clave, grupoId]) => {
        const classInfo = classData[clave];
        const group = classInfo.groups.find(g => g.grupo === grupoId);
        return { clave, classInfo, group };
      });

    for (let i = 0; i < selectedGroups.length; i++) {
      for (let j = i + 1; j < selectedGroups.length; j++) {
        const a = selectedGroups[i];
        const b = selectedGroups[j];

        for (const sessionA of a.group.sessions) {
          for (const sessionB of b.group.sessions) {
            const dateStartA = parseDate(sessionA.fechaInicio);
            const dateEndA = parseDate(sessionA.fechaFin);
            const dateStartB = parseDate(sessionB.fechaInicio);
            const dateEndB = parseDate(sessionB.fechaFin);

            if (!dateRangesOverlap(dateStartA, dateEndA, dateStartB, dateEndB)) continue;

            const commonDays = sessionA.dias.filter(d => sessionB.dias.includes(d));
            if (commonDays.length === 0) continue;

            const timeStartA = parseTime(sessionA.horaInicio);
            const timeEndA = parseTime(sessionA.horaFin);
            const timeStartB = parseTime(sessionB.horaInicio);
            const timeEndB = parseTime(sessionB.horaFin);

            if (timeRangesOverlap(timeStartA, timeEndA, timeStartB, timeEndB)) {
              overlaps.push({
                class1: `${a.clave} (Grupo ${a.group.grupo})`,
                class2: `${b.clave} (Grupo ${b.group.grupo})`,
                days: commonDays,
                time1: `${sessionA.horaInicio} - ${sessionA.horaFin}`,
                time2: `${sessionB.horaInicio} - ${sessionB.horaFin}`,
                dateRange: `${sessionA.fechaInicio} - ${sessionA.fechaFin}`
              });
            }
          }
        }
      }
    }

    const uniqueOverlaps = [];
    const seen = new Set();
    for (const o of overlaps) {
      const key = `${o.class1}-${o.class2}-${o.days.join(',')}-${o.time1}-${o.time2}`;
      if (!seen.has(key)) {
        seen.add(key);
        uniqueOverlaps.push(o);
      }
    }

    return uniqueOverlaps;
  }, [selections, classData]);

  const selectedCount = Object.values(selections).filter(v => v !== '').length;

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #1e3a5f 0%, #0d1b2a 100%)',
      padding: '24px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ 
          color: '#fff', 
          fontSize: '28px', 
          fontWeight: '700',
          marginBottom: '8px',
          textAlign: 'center'
        }}>
          📅 Verificador de Horarios - 4to Semestre
        </h1>
        <p style={{ 
          color: '#94a3b8', 
          textAlign: 'center', 
          marginBottom: '16px',
          fontSize: '14px'
        }}>
          Haz clic en "Editar" para ver y eliminar sesiones específicas de cada grupo
        </p>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <button
            onClick={handleResetAll}
            style={{
              background: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              borderRadius: '6px',
              color: '#f87171',
              cursor: 'pointer',
              padding: '6px 14px',
              fontSize: '12px',
              fontWeight: '500'
            }}
          >
            🔄 Reiniciar todo
          </button>
          <p style={{ color: '#6b7280', fontSize: '11px', marginTop: '8px' }}>
            Tus selecciones se guardan automáticamente
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
          {Object.entries(classData).map(([clave, data]) => (
            <div key={clave} style={{
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '12px',
              padding: '20px',
              border: selections[clave] ? `2px solid ${data.color}` : '2px solid transparent'
            }}>
              <div style={{ marginBottom: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                <div>
                  <span style={{ 
                    color: data.color, 
                    fontWeight: '600',
                    fontSize: '14px',
                    background: `${data.color}33`,
                    padding: '4px 10px',
                    borderRadius: '6px'
                  }}>
                    {clave}
                  </span>
                  <h3 style={{ color: '#fff', margin: '8px 0 0 0', fontSize: '16px' }}>
                    {data.name}
                  </h3>
                </div>
                <div style={{
                  background: 'rgba(255,255,255,0.1)',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  color: '#e2e8f0',
                  fontSize: '12px'
                }}>
                  📋 {data.requirement}
                </div>
              </div>
              
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '10px'
              }}>
                {data.groups.filter(g => g.sessions.length > 0).map(group => {
                  const isSelected = selections[clave] === group.grupo;
                  const isExpanded = expandedGroup === `${clave}-${group.grupo}`;
                  const uniqueDays = [...new Set(group.sessions.flatMap(s => s.dias))].sort((a, b) => dayMap[a] - dayMap[b]);
                  const uniqueTimes = [...new Set(group.sessions.map(s => `${s.horaInicio}-${s.horaFin}`))];
                  
                  return (
                    <div key={group.grupo} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div
                        onClick={() => handleSelect(clave, isSelected ? '' : group.grupo)}
                        style={{
                          background: isSelected ? `${data.color}44` : 'rgba(255,255,255,0.05)',
                          border: isSelected ? `1px solid ${data.color}` : '1px solid rgba(255,255,255,0.1)',
                          borderRadius: '8px',
                          padding: '12px',
                          cursor: 'pointer',
                          textAlign: 'left',
                          transition: 'all 0.2s'
                        }}
                      >
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginBottom: '6px'
                        }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ color: '#fff', fontWeight: '600', fontSize: '15px' }}>
                              Grupo {group.grupo}
                            </span>
                            {group.periodLabel && (
                              <span style={{
                                background: 'rgba(255,255,255,0.15)',
                                color: '#e2e8f0',
                                padding: '2px 8px',
                                borderRadius: '4px',
                                fontSize: '11px',
                                fontWeight: '500'
                              }}>
                                {group.periodLabel}
                              </span>
                            )}
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            {isSelected && (
                              <span style={{ color: '#22c55e', fontSize: '16px' }}>✓</span>
                            )}
                            <button
                              onClick={(e) => toggleExpand(clave, group.grupo, e)}
                              style={{
                                background: isExpanded ? 'rgba(251, 191, 36, 0.3)' : 'rgba(255,255,255,0.1)',
                                border: isExpanded ? '1px solid #fbbf24' : '1px solid rgba(255,255,255,0.2)',
                                borderRadius: '4px',
                                color: isExpanded ? '#fbbf24' : '#94a3b8',
                                cursor: 'pointer',
                                padding: '4px 8px',
                                fontSize: '11px',
                                fontWeight: '500'
                              }}
                            >
                              {isExpanded ? '▼ Cerrar' : '✎ Editar'}
                            </button>
                          </div>
                        </div>
                        <div style={{ color: '#94a3b8', fontSize: '12px', marginBottom: '4px' }}>
                          {group.profesor}
                        </div>
                        <div style={{ color: data.color, fontSize: '12px' }}>
                          {uniqueDays.join(', ')} • {uniqueTimes.map(t => t.replace('-', ' - ')).join(' / ')}
                        </div>
                        <div style={{ color: '#6b7280', fontSize: '11px', marginTop: '4px' }}>
                          {group.sessions.length} sesión{group.sessions.length !== 1 ? 'es' : ''}
                        </div>
                      </div>

                      {/* Expanded session list */}
                      {isExpanded && (
                        <div style={{
                          background: 'rgba(0,0,0,0.3)',
                          borderRadius: '8px',
                          padding: '12px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '8px'
                        }}>
                          <div style={{ color: '#94a3b8', fontSize: '11px', fontWeight: '500', marginBottom: '4px' }}>
                            SESIONES DE {group.profesor.toUpperCase()}
                          </div>
                          {group.sessions.map((session, idx) => (
                            <div 
                              key={session.id}
                              style={{
                                background: 'rgba(255,255,255,0.05)',
                                borderRadius: '6px',
                                padding: '10px 12px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                border: '1px solid rgba(255,255,255,0.1)'
                              }}
                            >
                              <div>
                                <div style={{ color: '#e2e8f0', fontSize: '13px', fontWeight: '500' }}>
                                  {session.dias.join(', ')} • {session.horaInicio} - {session.horaFin}
                                </div>
                                <div style={{ color: '#6b7280', fontSize: '11px', marginTop: '2px' }}>
                                  {session.fechaInicio} → {session.fechaFin}
                                  <span style={{ 
                                    marginLeft: '8px',
                                    background: 'rgba(255,255,255,0.1)',
                                    padding: '1px 6px',
                                    borderRadius: '3px'
                                  }}>
                                    {getPeriodLabel(session.fechaInicio)}
                                  </span>
                                </div>
                              </div>
                              <button
                                onClick={(e) => handleDeleteSession(clave, group.grupo, session.id, e)}
                                style={{
                                  background: 'rgba(239, 68, 68, 0.2)',
                                  border: '1px solid rgba(239, 68, 68, 0.4)',
                                  borderRadius: '4px',
                                  color: '#f87171',
                                  cursor: 'pointer',
                                  padding: '4px 10px',
                                  fontSize: '12px',
                                  fontWeight: '500'
                                }}
                              >
                                Eliminar
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Overlap results */}
        {selectedCount >= 2 && (
          <div style={{
            background: findOverlaps.length > 0 
              ? 'rgba(239, 68, 68, 0.15)' 
              : 'rgba(34, 197, 94, 0.15)',
            borderRadius: '12px',
            padding: '24px',
            marginBottom: '24px',
            border: findOverlaps.length > 0 
              ? '2px solid rgba(239, 68, 68, 0.5)' 
              : '2px solid rgba(34, 197, 94, 0.5)'
          }}>
            {findOverlaps.length === 0 ? (
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '48px', marginBottom: '12px' }}>✅</div>
                <h3 style={{ color: '#22c55e', margin: '0 0 8px 0', fontSize: '20px' }}>
                  ¡Sin conflictos!
                </h3>
                <p style={{ color: '#86efac', margin: 0, fontSize: '14px' }}>
                  Los grupos seleccionados no tienen traslapes de horario
                </p>
              </div>
            ) : (
              <>
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                  <div style={{ fontSize: '48px', marginBottom: '12px' }}>⚠️</div>
                  <h3 style={{ color: '#ef4444', margin: '0 0 8px 0', fontSize: '20px' }}>
                    {findOverlaps.length} Conflicto{findOverlaps.length > 1 ? 's' : ''} Encontrado{findOverlaps.length > 1 ? 's' : ''}
                  </h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {findOverlaps.map((overlap, idx) => (
                    <div key={idx} style={{
                      background: 'rgba(0,0,0,0.2)',
                      borderRadius: '8px',
                      padding: '16px'
                    }}>
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '12px',
                        marginBottom: '12px',
                        flexWrap: 'wrap'
                      }}>
                        <span style={{
                          background: 'rgba(239, 68, 68, 0.3)',
                          color: '#fca5a5',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          fontSize: '13px',
                          fontWeight: '500'
                        }}>
                          {overlap.class1}
                        </span>
                        <span style={{ color: '#94a3b8' }}>↔</span>
                        <span style={{
                          background: 'rgba(239, 68, 68, 0.3)',
                          color: '#fca5a5',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          fontSize: '13px',
                          fontWeight: '500'
                        }}>
                          {overlap.class2}
                        </span>
                      </div>
                      <div style={{ color: '#e5e7eb', fontSize: '13px', lineHeight: '1.6' }}>
                        <div><strong>Días:</strong> {overlap.days.map(d => dayNames[d]).join(', ')}</div>
                        <div><strong>Horarios:</strong> {overlap.time1} / {overlap.time2}</div>
                        <div><strong>Periodo:</strong> {overlap.dateRange}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {selectedCount < 2 && (
          <div style={{
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '12px',
            padding: '24px',
            textAlign: 'center',
            marginBottom: '24px'
          }}>
            <p style={{ color: '#94a3b8', margin: 0 }}>
              Selecciona al menos 2 grupos para verificar conflictos
            </p>
          </div>
        )}

        {/* Removed sessions */}
        {removedSessions.length > 0 && (
          <div style={{
            background: 'rgba(239, 68, 68, 0.1)',
            borderRadius: '12px',
            padding: '16px 20px',
            border: '1px solid rgba(239, 68, 68, 0.2)'
          }}>
            <div style={{ 
              color: '#f87171', 
              fontSize: '12px', 
              marginBottom: '12px', 
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              🗑️ SESIONES ELIMINADAS ({removedSessions.length})
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {removedSessions.map((item, idx) => (
                <div 
                  key={idx}
                  style={{
                    background: 'rgba(0,0,0,0.2)',
                    borderRadius: '6px',
                    padding: '10px 12px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '8px'
                  }}
                >
                  <div>
                    <div style={{ color: '#e2e8f0', fontSize: '13px' }}>
                      <span style={{ color: '#94a3b8' }}>{item.clave}</span>
                      <span style={{ marginLeft: '6px' }}>Grupo {item.grupo}</span>
                      <span style={{ color: '#6b7280', marginLeft: '8px' }}>({item.profesor.split(' ')[0]})</span>
                    </div>
                    <div style={{ color: '#6b7280', fontSize: '11px', marginTop: '2px' }}>
                      {item.session.dias.join(', ')} • {item.session.horaInicio} - {item.session.horaFin} • {item.session.fechaInicio}
                    </div>
                  </div>
                  <button
                    onClick={() => handleRestoreSession(idx)}
                    style={{
                      background: 'rgba(34, 197, 94, 0.2)',
                      border: '1px solid rgba(34, 197, 94, 0.4)',
                      borderRadius: '4px',
                      color: '#4ade80',
                      cursor: 'pointer',
                      padding: '4px 10px',
                      fontSize: '11px'
                    }}
                  >
                    Restaurar
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
