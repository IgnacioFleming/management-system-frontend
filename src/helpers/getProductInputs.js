export const getProductInputs = (fileRef) => {
  const name = document.getElementsByName("name")[0].value;
  const price = document.getElementsByName("price")[0].value;
  const cost = document.getElementsByName("cost")[0].value;
  const category = document.getElementsByName("category")[0].value;
  const stock = document.getElementsByName("stock")[0].value;
  const formData = new FormData();
  formData.append("name", name);
  formData.append("price", price);
  formData.append("cost", cost);
  formData.append("category", category);
  formData.append("stock", stock);
  formData.append("file", fileRef.current.getFiles()[0]);
  return formData;
};
