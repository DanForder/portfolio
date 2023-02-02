let counter = 0;

export const generateUniqueId = () => {
  return `id-${Date.now()}-${counter++}`;
};
