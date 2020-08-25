const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// prompt to catch media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // Catch error here
    console.log("Error here", error);
  }
}

button.addEventListener("click", async () => {
  // Disable the button
  button.disabled = true;
  // Start Picture in Picture
  await videoElement.requestPictureInPicture();
  // Reset button
  button.disabled = false;
});

// on load
selectMediaStream();
