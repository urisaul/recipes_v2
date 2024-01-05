export const mergeArrs = (arr1, arr2) => {
  return arr2.reduce((acc, obj) => {
    const existingObj = acc.find((item) => item.id === obj.id);

    if (existingObj) {
      Object.assign(existingObj, obj);
    } else {
      acc.push(obj);
    }

    return acc;
  }, arr1);
};


export const convertImageToBase64 = (fileInput) => {
  return new Promise((resolve, reject) => {
      if (fileInput.files && fileInput.files[0]) {
          var file = fileInput.files[0];
          var reader = new FileReader();

          reader.onload = function (e) {
              resolve(e.target.result);
          };

          reader.onerror = function (error) {
              reject(error);
          };

          reader.readAsDataURL(file);
      } else {
          reject(new Error('No file selected'));
      }
  });
}