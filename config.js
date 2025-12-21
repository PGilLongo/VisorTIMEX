// CONFIGURACIÓN DEL VISOR
// Este archivo ya lleva puesta tu URL CSV (pestaña INTERVENCIONES).

const CONFIG = {
  // URL CSV pública del Google Sheet (INTERVENCIONES)
  SHEET_CSV_URL: "https://docs.google.com/spreadsheets/d/1YmawIXYy05HKHLimWPLOSjWesamv-mwhot5ZNnselkA/export?format=csv&gid=0",

  // Columna que contiene coordenadas en una sola celda con formato "lat,lng"
  COL_COORDS: "PUNTO DE ACTIVACION",

  // Columna opcional para el popup
  COL_LABEL: "INFORME",

  // Estilo del punto (opcional)
  MARKER_COLOR: "#dc2626",
  MARKER_RADIUS: 6,
  MARKER_FILL_OPACITY: 0.85
};
