export const strJoinEs6 = (
  separator: string,
  ...elements: string[]
): string => {
  if (elements.length === 0) {
    throw new Error('At least one string must be provided');
  }

  if (typeof separator !== 'string') {
    throw new Error('Separator must be a string');
  }

  for (let i = 0; i < elements.length; i++) {
    if (typeof elements[i] !== 'string') {
      throw new Error(`Element at index ${i} must be a string`);
    }
  }

  return elements.join(separator);
};
