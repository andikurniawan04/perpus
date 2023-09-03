/// <reference types="vite/client" />

declare global {
    interface Window {
        my_modal: any; // 👈️ turn off type checking
    }
}
