---
path: "/future-steps"
title: "Future Steps"
description: "Visulisation app for the Prices Trust fundraising project"
draft: "true"
date: "2017-12-23"
type: "work"
firstParagraph : ""
image: "./pt.jpg"
---

During a 3 day hackathon event at Wazoku, I worked in a small team with the Prince Trust charity to produce a production ready system allowing them to record and display data from their latest fundraiser: Future Steps.

The Future Steps challenge encourage small teams to commit to 10,000 steps a day while raising money for the charity. The steps committed by the team created competition and they needed an outlet to visually display this.

We worked extensively with Google forms, creating a script that linked the inputs from teams with a spreadsheet hosted in Google Sheets. Using some (rather hacky, but stable) Google sheet scripts, we were able to trigger events when the sheet was updated. We used these events to sync the spreadsheet with a Firebase database, meaning we could update the database in real time as teams submit their steps.

Finally we produced a frontend using Angular and Firebase to create a live updating bind between the database and the app data. D3 was used to create a live map to visualise the race with team leaderboards that live updates per team submission.

My role in this project was to architect the App and hosting services, creating the Firebase database and deployment scripts for the app as well as investigating how to precise the live data flow throughout the stack. I was also involved in producing the technical handover documentation to provide the app and setup instructions to the Prince’s Trust team.
