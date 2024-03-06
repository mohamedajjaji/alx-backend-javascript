export default function uploadPhoto(filename) {
  return new Promise((resolve, reject) => {
    const isProcessed = false;
    if (isProcessed) {
      resolve(`Photo ${filename} processed successfully`);
    } else {
      reject(new Error(`${filename} cannot be processed`));
    }
  });
}
