function setStorage(key, value) {
  return localStorage.setItem(key, value);
}

function getStorage(key, value) {
  return localStorage.getItem(key, value);
}

function removeStorage(key, value) {
  return localStorage.removeItem(key, value);
}

function clearAllStorage() {
  return localStorage.clear();
}

export { setStorage, getStorage, removeStorage, clearAllStorage };
