import React from 'react';

function Graph() {
  return (
    <div className='sent-frame'>
      <h3>What does it do?</h3>
        <p>
          Categorises tweets as being positive or negative and records a rolling mean as a CSV. This data is then displayed on a line graph using chart.js. In my example I've collected sentiment data on Joe Biden for around a month. The code can be easily edited to collect data for any twitter handle.
        </p>
        <h3>How does it work?</h3>
        <p>
          The Tweepy python library is used to access the Twitter API to stream tweets. The TextBlob library is then used to perform sentiment analysis on the tweets. Each tweet is given a value between 1 and -1 depending on how positive or negative the analysis determines the tweet to be. A rolling mean of 200 tweets is then calculated and the value is output to a CSV file along with a timestamp.
        </p>
        <p>
          The data in the CSV is converted to two JavaScript arrays, one containing the mean sentiment, the other containing the timestamps. This is then fed into the Chart.js data visualization library which renders a responsive line graph to the browser.
        </p>
      <h3>Does it work?</h3>
        <p>
          This is a blunt instrument for measuring sentiment. And given the granularity of the data, it's not easy to use other measures, such as opinion polling, to draw conclusions on the accuraccy of the analysis.
        </p>
        <p>
          However, in my data, there does appear to be a correlation between the results of the analysis and key actions of Biden and his administration. For example, the highest peak in positive sentiment comes soon after Biden announces plans for a full withdrawal of US troops from Afghanistan, and the lowest trough comes after Biden makes a speach acknowledging systemic racism within parts of the US justice system following the conviction of Derek Chauvin for the murder of George Floyd.
        </p>

        <hr></hr>

        <div className='git-links'>
          <a href='https://ed100miles.github.io/sentBlobJS/' rel="noreferrer" target='_blank'>
            <i class="fas fa-external-link-alt"></i>
              Open project in a new tab
          </a>
          <a href='https://github.com/ed100miles/sentBlobJS' rel="noreferrer" target='_blank'>
            <i class="fab fa-github"></i>
            Source Code
          </a>
        </div>

        <hr></hr>

      <iframe src='https://ed100miles.github.io/sentBlobJS/' title='sentIframe' className='sent-frame' frameBorder='0'></iframe>
    </div>
  )
}

export default Graph
