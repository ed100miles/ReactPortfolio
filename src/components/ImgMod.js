import React from 'react'

function ImgMod() {
  return (
    <div>
      <h3>What does it do?</h3>

      <p>A flask app hosted on Heroku that allows the user to upload an image file and then perform a variety of opperations on their origional image. Operations include changing the brightness, saturation, blur/sharpness, orientation and intensity of red, green and blue colours.</p>

      <h3>How does it work?</h3>

      <p>The user choses an image to upload, this image is sent to the server, converted to a base64 string and sent back to the client side to be rendered.</p>

      <p>Sliders then appear to change values for different operations to perform on the image. When a slider value is changed, the <i>imgMod()</i> function in the <i>'app.js'</i> file is called. The values of the different image operation sliders, and the origional image base64 string, are sent as JSON via the Fetch API to the server. The server then converts the image base64 to a numpy array. The opencv-python library is then used to perform the various image operations on the numpy array. The array is then converted back to a base64 string and sent as a response back to the client, where the new string is rendered. The Fetch API alows this process to happen asynchronously.</p>

      <hr></hr>

      <div className='git-links'>
        <a href='https://imagemodapp.herokuapp.com/upload-image' rel="noreferrer" target='_blank'>
          <i class="fas fa-external-link-alt"></i>
             Open project in a new tab
        </a>
        <a href='https://github.com/ed100miles/ImageModder' rel="noreferrer" target='_blank'>
          <i class="fab fa-github"></i>
           Source Code
        </a>
      </div>

      <hr></hr>
      
      <iframe src='https://imagemodapp.herokuapp.com/upload-image' title='ImgModIframe' className='ImgMod-frame' frameBorder='0' id='imgModIframe' ></iframe>
    </div>
  )
}

export default ImgMod
