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
  const getItem = JSON.parse(localStorage.getItem(`cartItem${id}`) || "{}");
  return getItem?.inCart;
};

export const removeVietnameseTones = (str) => {
  str = str.replace(/[àáạảãâầấậẩẫăằắặẳẵ]/g, "a");
  str = str.replace(/[èéẹẻẽêềếệểễ]/g, "e");
  str = str.replace(/[ìíịỉĩ]/g, "i");
  str = str.replace(/[òóọỏõôồốộổỗơờớợởỡ]/g, "o");
  str = str.replace(/[ùúụủũưừứựửữ]/g, "u");
  str = str.replace(/[ỳýỵỷỹ]/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/[ÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴ]/g, "A");
  str = str.replace(/[ÈÉẸẺẼÊỀẾỆỂỄ]/g, "E");
  str = str.replace(/[ÌÍỊỈĨ]/g, "I");
  str = str.replace(/[ÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠ]/g, "O");
  str = str.replace(/[ÙÚỤỦŨƯỪỨỰỬỮ]/g, "U");
  str = str.replace(/[ỲÝỴỶỸ]/g, "Y");
  str = str.replace(/Đ/g, "D");
  // Some system encode vietnamese combining accent as individual utf-8 characters
  // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
  str = str.replace(/\\u0300|\\u0301|\\u0303|\\u0309|\\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
  str = str.replace(/\\u02C6|\\u0306|\\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
  return str.normalize("NFD").toLowerCase();
};
