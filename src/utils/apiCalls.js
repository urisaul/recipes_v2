// get request
export const getReq = (url, headers = [], withTok = false) => {
<<<<<<< HEAD
   if (withTok) {
      headers["Authorization"] = "Bearer " + localStorage.getItem("tok");
   }
=======
  if (withTok) {
    headers["Authorization"] = "Bearer " + localStorage.getItem("token");
  }
>>>>>>> efc76c0183e10b62437e4a265d25acc6ae82b6ff

   let res = fetch(url, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
         Accept: "application/json",
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
      headers.attr("Authorization", "Bearer " + localStorage.getItem("token")); // Add token to header
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
