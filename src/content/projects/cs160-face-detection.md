---
title: CS160 Class Project - Face Detection
date: "2018-05-24"
tags: ["server", "frontend", "video", "web", "class project"]
image: "../img/cscvop.png"
---

For my Software Engineering class project, I along with 3 other people was tasked with creating a web service that accepted video uploads, ran a face detection neural network on them, and drew delaunay triangles on the face. I was responsible for the server routing, database, and front end.

Here's a video of the final result:

<iframe width="560" height="315" src="https://www.youtube.com/embed/9RE6Nfh6KuA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

We finished the minimum viable project early in the semester, so we decided to implement **live video streaming**! This was considerably more difficult to get working than the file uploading was, but we managed it. Demo video of live streaming:

<iframe width="560" height="315" src="https://www.youtube.com/embed/5yjUkBXFWF0?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

# Stack

Server-side I went with Node.js, with Postgres, Sequelize ORM, Socket.io for streaming, and Google Sign In for authentication.

The frontend was built with React and Redux. Styling was done with [RMWC](https://github.com/jamesmfriedman/rmwc) using a CSS-in-JS approach.

Dean Johnson built the processing application in C++ using FFMPEG, OpenFace, and EyeLike.

# Streaming

The streaming was tricky, as it involved simultaneously uploading and downloading video in real time. I used websockets with Socket.io's stream functionality to tackle this. Dean was able to get the face processing up to around 40fps (props to him!), so the speed of the neural network itself was solved. What did prove difficult was the video encoding. None of us on the team had prior experience working with video, but we learned a lot.

Video captured from the webcam comes in as basic WebM/VP8 format and codec. If you were to just pipe that incoming stream to a file, it results in a working WebM video. The problem is that there seems to be some kind of header at the beginning of the file that is necessary; if you don't have it you can't read the video. Since the processing takes a few seconds to spin up, we had to find a way around this.

The solution was RTSP streaming. Dean set up the processing to accept an RTSP URL as an input, so the final pipeline looked something like this:

* Client opens a socket stream with server, starts piping video
* Node receives video stream, pipes it to FFMPEG
* FFMPEG serves it with [this handy RTSP server](https://github.com/revmischa/rtsp-server) at a randomized local address
* Node fires up the processing application and sends the created RTSP address to it
* The processing outputs the video stream (with triangles drawn) to STDOUT
* Node grabs that STDOUT, creates a reverse stream back down to the client through the socket, and sends the video
* The client receives the stream with the video and injects it into an HTML5 video player using [this handy-dandy library](https://github.com/feross/mediasource)

We ended up with about 6-8 seconds of lag and couldn't get it any better than that before the project needed to be presented. We suspected that it was due to the RTSP streaming, but we couldn't figure a way to cut it out.

# Thoughts

All in all, I thought this project was a resounding success. It was one of the few group projects I've been a part of that was big enough to have work for more than one person.

I enjoyed Redux but found it to be overly verbose; currently I'm looking at [Undux](https://github.com/bcherny/undux).

The source code for the [processing](https://github.com/gregoryjjb/cs160), [server](https://github.com/gregoryjjb/cs160-server), and [frontend](https://github.com/gregoryjjb/cs160-frontend) is all on GitHub.
