export const setLocalStorageItem = (id, item) => {
  localStorage.setItem(`cartItem${id}`, JSON.stringify(item));
};

export const setLocalStorageCount = (id, newCount) => {
  const getItem = JSON.parse(localStorage.getItem(`cartItem${id}`));
  getItem.count = newCount;
  localStorage.setItem(`cartItem${id}`, JSON.stringify(getItem));
};

export const setLocalStorageTotal = (id, newTotal) => {
  const getItem = JSON.parse(localStorage.getItem(`cartItem${id}`));
  getItem.total = newTotal;
  localStorage.setItem(`cartItem${id}`, JSON.stringify(getItem));
};

export const removeLocalStorageItem = (id) => {
  localStorage.removeItem(`cartItem${id}`);
};

export const removeAllLocalStorageItem = () => {
  localStorage.clear();
};

export const getAllLocalStorageItem = () => {
  const keys = Object.keys(localStorage);
  const cartKeys = keys.filter((key) => key.startsWith("cartItem"));
  return cartKeys;
};

export const getCartItemsValues = () => {
  const keys = getAllLocalStorageItem();
  const values = [];
  for (var i = 0; i < keys.length; i++) {
    const value = JSON.parse(localStorage.getItem(keys[i]));
    values.push(value);
  }
  return values;
};

export const getLocalStorageIncart = (id) => {
  const getItem = JSON.parse(localStorage.getItem(`cartItem${id}`) || '{}');
  return getItem?.inCart
};