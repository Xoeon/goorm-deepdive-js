export const loadState = (userId, key) => {
  try {
    const serializedState = localStorage.getItem(`${userId}_${key}`);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error(`로컬 스토리지에서 ${key} 로드 실패`, err);
    return undefined;
  }
};

export const saveState = (userId, key, state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(`${userId}_${key}`, serializedState);
  } catch (err) {
    console.error(`로컬 스토리지에 ${key} 저장 실패`, err);
  }
};
