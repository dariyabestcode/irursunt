function getImageURL() {
  return new Promise((resolve, reject) => {
    // Perform some asynchronous operation to get the image URL
    // For example, fetch the image URL from a database or API
    const imageURL = "https://example.com/image.jpg";
    
    // Resolve the promise with the image URL
    resolve(imageURL);
  });
}

// Usage
getImageURL()
  .then((url) => {
    console.log("Image URL:", url);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
