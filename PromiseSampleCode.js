const myPromise = new Promise((resolve, reject) => {
    const success = true; // change to false to see rejection
  
    if (success) {
      resolve("✅ Promise resolved!");
    } else {
      reject("❌ Promise rejected!");
    }
  });
  
  // Handling the promise
  myPromise
    .then(result => {
      console.log(result); // 👉 "✅ Promise resolved!"
    })
    .catch(error => {
      console.error(error); // 👉 "❌ Promise rejected!"
    });
  