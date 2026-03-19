import {contextBridge, ipcRenderer} from "electron";


contextBridge.exposeInMainWorld('electronAPI', {
  getStationsList: () => ipcRenderer.invoke('get-stations-List'),
})