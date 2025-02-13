export const deleteIdFromData = (data) => {
  const dataWithNoId = data.map((item) => {
    const newItem = { ...item };
    delete newItem.id;
    return newItem;
  });
  return dataWithNoId;
};
