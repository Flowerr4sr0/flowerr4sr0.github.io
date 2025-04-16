let tabCount = 1;
let currentIndex = 0;

function switchTab(index) {
  currentIndex = index;
  document.querySelectorAll('.tab').forEach((tab) => {
    tab.classList.toggle('active', parseInt(tab.dataset.index) === index);
  });
  document.querySelectorAll('iframe').forEach((frame) => {
    frame.classList.toggle('active', parseInt(frame.dataset.index) === index);
  });
}

function addTab() {
  const index = tabCount++;

  const tab = document.createElement('div');
  tab.className = 'tab';
  tab.dataset.index = index;
  tab.onclick = () => switchTab(index);
  tab.innerHTML = `
    <img src="https://www.google.com/s2/favicons?sz=64&domain=floweryt6.github.io" alt="icon">
    Tab ${index + 1}
    <span class="close-btn" onclick="closeTab(event, ${index})">×</span>
  `;
  document.getElementById('tabs').insertBefore(tab, document.getElementById('add-tab'));

  const iframe = document.createElement('iframe');
  iframe.src = "https://floweryt6.github.io/Flower%20Search/";
  iframe.dataset.index = index;
  document.getElementById('iframes').appendChild(iframe);

  switchTab(index);
}

function closeTab(e, index) {
  e.stopPropagation();

  document.querySelectorAll('iframe').forEach((iframe) => {
    if (parseInt(iframe.dataset.index) === index) {
      iframe.remove();
    }
  });

  document.querySelectorAll('.tab').forEach((tab) => {
    if (parseInt(tab.dataset.index) === index) {
      tab.remove();
    }
  });

  if (currentIndex === index) {
    const tabs = document.querySelectorAll('.tab');
    if (tabs.length > 0) {
      const newIndex = parseInt(tabs[0].dataset.index);
      switchTab(newIndex);
    }
  }
}

function browserClose() {
    window.close();
}

const { app, BrowserWindow } = require('electron');
const path = require('path');
require('@electron/remote/main').initialize();

function createWindow () {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    }
  });

  require('@electron/remote/main').enable(win.webContents);

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

const { remote } = require('electron');
const { Menu, MenuItem } = require('electron').remote;

function getActiveIframe() {
  return document.querySelector('iframe.active');
}

// Back/Forward
document.getElementById('back-btn').onclick = () => {
  const iframe = getActiveIframe();
  iframe.contentWindow.history.back();
};

  document.getElementById('forward-btn').onclick = () => {
  const iframe = getActiveIframe();
  iframe.contentWindow.history.forward();
  };

  window.addEventListener('contextmenu', (e) => {
  e.preventDefault();

  const menu = new Menu();
  menu.append(new MenuItem({ role: 'cut' }));
  menu.append(new MenuItem({ role: 'copy' }));
  menu.append(new MenuItem({ role: 'paste' }));
  menu.append(new MenuItem({ type: 'separator' }));
  menu.append(new MenuItem({ role: 'reload' }));
  menu.append(new MenuItem({ role: 'toggleDevTools' }));

  menu.popup({ window: remote.getCurrentWindow() });
  }, false);

  document.getElementById('reload-btn').onclick = () => {
    const iframe = getActiveIframe();
    iframe.contentWindow.location.reload();
  };
  
  document.getElementById('home-btn').onclick = () => {
    const iframe = getActiveIframe();
    iframe.src = "https://floweryt6.github.io/Flower%20Search/";
  };  