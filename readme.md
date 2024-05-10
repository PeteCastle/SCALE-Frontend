# SCALE - Mosquito Detection and Fumigation (Frontend)

This repo is part of our thesis project entitled "**SCALE: Mosquito Detection and Fumigation System Utilizing Convolutional Neural Networks**". The project aims to develop a deep learning model for detecting and localizing mosquitoes in images. The model will be used to support fumigation efforts by identifying areas with high mosquito populations. This repository  involves the frontend stack of the project, utilizing React.JS .

Checkout our [website](https://www.scale-anti-mosquito.site)! 

Other repositories:
- [Website's Backend Repository](https://github.com/PeteCastle/SCALE-Backend)
- [RCNN Model](https://github.com/PeteCastle/SCALE-Model)
- [Prototype's Arduino Code](https://github.com/PeteCastle/SCALE-Arduino)


### Setting Up
1. Install dependencies: `npm install` or `yarn install`
1. Run: `npm run build`

### About the Website Stack
![Software Architecture](public/readme/scale_software_arch_frontend_focused.png)

The software architecture for the website is a comprehensive system leveraging multiple layers and services. At the client application layer, multiple client applications (Client Application 1, 2, 3, etc.) interact with the system via a Web Service API that actively polls data every 5 seconds.

All servers are hosted on **Digital Ocean infrastructure**.  The frontend application is developed using **React.JS and Tailwind CSS** for styling.  All dynamic data (including charts, graphs, and KPIs) are polled every 5 seconds to the backend application developed using Django.  The backend application is a Digital Ocean droplet that uses nginx as a proxy to the Gunicorn, which is a gateway server that allows multiple instances of Django applications.  All data are stored using PostgreSQL that communicates seamlessly using Django’s ORM system.  For the static files, we’ve used Digital Ocean Spaces which servers as an object storage and CDN to retrieve static files on the internet.

Our image prediction system operates on a **task queue-based system**.  Due to the physical limitations of the Django server, we cannot enforce the image prediction directly as it would directly impact the performance of other APIs.  Instead, it is delegated in another GPU-enabled server that has CUDA capabilities.  Django will send tasks via Celery, where input parameters are temporarily stored on Redis server, a NoSQL Database.  The image prediction application will then listen for tasks provided by the Celery app.

The Data Generation segment includes a Mosquito Detection and Fumigation System, interacting with the backend server. Raw photos are sent via HTTP POST Requests to the server, and subsequently, a 201 response is created, but the detection is deferred until the image prediction application processes the task.  	

This architecture exhibits a robust and scalable design, incorporating Django, Docker, Azure services, and deep learning technologies, to power a web-based platform for efficient client interaction, data storage, content delivery, and real-time deep learning inference for mosquito detection and management.

![Footer](public/readme/petecastle_footer.png)
