const hasAllKeys = (keys: string[], obj: any) => {
  return keys.every((key) => obj[key]);
};

export { hasAllKeys };
