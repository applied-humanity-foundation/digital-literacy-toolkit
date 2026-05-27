import { App } from './App';

const app = new App();

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('app');
  if (!root) {
    console.error('Root element #app not found. Cannot mount application.');
    return;
  }

  app.mount(root);

  registerServiceWorker();
});

async function registerServiceWorker(): Promise<void> {
  if (!('serviceWorker' in navigator)) {
    return;
  }

  try {
    const registration = await navigator.serviceWorker.register('/sw.js', {
      scope: '/',
    });

    registration.addEventListener('updatefound', () => {
      const newWorker = registration.installing;
      if (newWorker) {
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'activated') {
            window.dispatchEvent(new CustomEvent('app:updated'));
          }
        });
      }
    });
  } catch (error) {
    console.warn('Service worker registration failed:', error);
  }
}

export { app };
