export const createFormData = (data, fileRef = false) => {
  const formData = new FormData();
  for (const key in data) {
    formData.append(key, data[key]);
  }
  if (fileRef) {
    formData.append("file", fileRef.current.getFiles()[0]);
  }
  return formData;
};
