// config.js (GitHub Pages)
// Definimos CONFIG explícitamente en window para evitar problemas de scope

window.CONFIG = {
  // URL CSV (pestaña INTERVENCIONES, gid=0)
  SHEET_CSV_URL: "https://docs.google.com/spreadsheets/d/1YmawIXYy05HKHLimWPLOSjWesamv-mwhot5ZNnselkA/export?format=csv&gid=0",

  // Columna con coordenadas "lat,lng" (elige una)
  COL_COORDS: "PUNTO DE ACTIVACION",

  // Columna opcional para el popup
  COL_LABEL: "INFORME",

  // Columna para ordenar cronológicamente (pon la que tenga fecha/hora)
  // En tu Sheet suele ser "LOCALIZACION" (según captura)
  COL_TIME: "LOCALIZACION",

  // Zoom al abrir el último punto
  ZOOM_LATEST: 14,

  // Estilo del punto
  MARKER_COLOR: "#dc2626",
  MARKER_RADIUS: 8,
  MARKER_FILL_OPACITY: 0.85
};
