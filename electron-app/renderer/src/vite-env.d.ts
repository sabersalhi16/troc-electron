/// <reference types="vite/client" />

interface Window {
  electronAPI: {
    getStationsList: () => Promise<string>
  }
}