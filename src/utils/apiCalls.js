// get request
export const getReq = (url, headers = [], withTok = false) => {
  if (withTok) {
    headers["Authorization"] = "Bearer " + localStorage.getItem("token");
  }

  let res = fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      ...headers,
    },
  });
  return res;
};

export const getReqTok = (url, headers = []) => {
   return getReq(url, headers, true);
};

// post request
export const postReq = (url, headers = [], payload, withTok = true) => {
  if (withTok) {
    headers["Authorization"] = "Bearer " + localStorage.getItem("token");
  }

   let res = fetch(url, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
         Accept: "application/json",
         ...headers,
      },
      body: JSON.stringify(payload),
   });
   return res;
};
