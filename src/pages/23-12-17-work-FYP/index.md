---
path: "/final-year-project"
title: "Artificial Inteligent Escape Room"
description: "An escape room packed with live social data and AI analytics"
draft: "true"
date: "2017-12-23"
type: "work"
firstParagraph : ""
image: "./datfyp.jpg"
---

<iframe src="https://player.vimeo.com/video/251382724" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

For my final year project at Plymouth University I explored the subject of Artificial Intelligence and its role in Social Data, looking into the various issues that arise over the selective information processing conducted by social networks, I focused on a particular complication of the Echo Chamber and tribalism effect. From this, I created an AI escape room installation to reflect the churn of data handled by AI, this piece was featured in the HOT Degree Show at Plymouth University and was chosen to be covered by the media team.

<iframe width="640" height="360" src="https://www.youtube.com/embed/9sg1V7ImstA?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

The installation was a small customised office-like room where a group of users could enter. The premise was to enforce users to collect information from social data in order to escape the room, breaking the traditional norms of social media consumption, forcing users to wade through the live unfiltered data stream of Twitter.

I used a Node server hosted in IBM’s Bluemix with WebSocket endpoints to control the installation, communicating across multiple technologies to run the system. Technologies in this installation include 2 Raspberry Pi’s using node, multiple HUE lighting bulbs and hub with a decentralised local network that I could interface with to access the Hue API with the server, two smart plugs connected to the local network, two subwoofers, and 4 modified laserjet printers setup with CUPs to stream Social Data into the room.

The installation begins when users enter a room, and are spoken to by a Command Line Interface that boots on the monitor. Their response triggers a set of processes that will start the experience.

The request is made to begin the installation, triggering a request to be made to Bing News API to get the current trending news article. From the article, the text is extracted and sent to IBM Watson Alchemy API (now named Natural Language Understanding) to get the topic of the report. The topic is then placed into the Twitter Streaming API to pull in real time Social Data related to the topic, being a trending news article, the social media activity is usually centralised around this news report. The stream of Tweets then go through sentiment analysis using the IBM Watson Tone Analyser endpoint, and the information is serialized, combining the Tweet topic and sentiment and sent down the WebSocket stream to the room. Relating to a popular news article, the amount of social activity is large, meaning a huge volume of Tweets need to be handled in the stream.

The sentiment of a Tweet flicks on and off one of the Hue lights in the colour related to the sentiment, the Tweet text is streamed to the CUPs and printed onto thin A6 paper in one of the four printers in the installation. The printers are modified with rollers, using motors, and a 3D printed body, the ramp pulls the paper to the motors and fires the Tweet into the room.

The direction of the Tweet is then complicated by the addition of office fans blowing randomly, and reading the information is made difficult by the sentiment lighting effect.

Once enough data is collected, users must find the topic that matches the one found in the original article, communicating together through the loud and stressful environment. Entering the correct topic brings the room back, turning the fans and printers off, switching the lights on, and unlocking the door.

![AI Escape room banner image](./fyp-1.png)