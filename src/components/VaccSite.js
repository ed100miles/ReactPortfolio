import React from 'react'

function VaccSite() {
  return (
    <>
      <h3>What does it do?</h3>
        <p>The user enters their postcode, and their nearest covid-19 vaccine centre is displayed along with a link to google maps showing the location.</p>

      <h3>How does it work?</h3>
        <p>Only vanilla JavaScript, HTML and CSS are used (and a bit of python for initial data wrangling / prototyping).</p>
        <p>Two datasets were used for this project:</p>
        <ul>
          <li>The list of Covid-19 vaccination sites available on the NHS England website (correct as of 21 May 2021).</li>
          <li>A list of 1.7m postcodes in the UK and their approximate longitudes and latitudes.</li>
        </ul>
        <p>Longs and Lats were then added to the list of vaccine sites. The vaccination sites data is imported when the site loads and the postcode + long/lat data is loaded dynamically when the user enters their postcode.</p>
        <p>After the user enters their postcode, a function is called to reformat the postcode if it's entered with any errors (incorrect spacing or lower case letters). The users longitude and latitude is then retrieved from the dataset. Then the program iterates through all the vaccination sites, calculating the hypotenuse of the difference between the users and each vaccine centre's longitude and latitude. The vaccine centre with the shortest hypotenuse from the users location is then returned along with a link to google maps formatted query the google maps API with the vaccine site name and it's postcode.</p>
      <hr></hr>
        <div className='git-links'>
          <a href='https://ed100miles.github.io/NearestVaccineCentre/' rel="noreferrer" target='_blank'>
            <i class="fas fa-external-link-alt"></i>
                      Open project in a new tab
                  </a>
          <a href='https://github.com/ed100miles/NearestVaccineCentre' rel="noreferrer" target='_blank'>
            <i class="fab fa-github"></i>
                  Source Code
                  </a>
        </div>
      <hr></hr>
      <iframe src='https://ed100miles.github.io/NearestVaccineCentre/' title='vaccSiteIframe' className='vaccSite-frame' frameBorder='0'></iframe>
    </>
  )
}

export default VaccSite
