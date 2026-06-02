import {create} from "zustand";
import {immer} from "zustand/middleware/immer";

import {WINDOW_CONFIG,INITIAL_Z_INDEX} from "#constants"

const useWindowsStore = create(immer((set)=>(
  {
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX +1,

    // Open a Window
    openWindow:(window_key, data=null)=>set((state)=>{
      const win = state.windows[window_key]
      win.isOpen = true
      win.zIndex = state.nextZIndex
      state.nextZIndex = state.nextZIndex + 1
      win.data = data ?? win.data
      
    }),

    // Close a window
    closeWindow:(window_key)=>set((state)=>{
      const win = state.windows[window_key]
      win.isOpen = false
      win.data = null
      win.zIndex = INITIAL_Z_INDEX
    }),

    // Focused Window
    focusWindow:(window_key)=>set((state)=>{
      const win = state.windows[window_key]
      win.zIndex = state.nextZIndex
      state.nextZIndex = state.nextZIndex + 1
    })
  }
)))

export default useWindowsStore