Project Objective: 

Create Raspberry Pi 4 that connects to the network and acts as a home server with easily provided functionality. 

Details:

We've reached the point where you could make a cheap ARM server (like a raspberry pi) and create a slick UI for running containers on it that would be easy enough for your average consumer to use
You could create an app store for it that would essentially just be some cherry picked containers from hub.docker.com that we know work. In a basic sense it’s a control panel for docker. Hopefully it can handle server functionality such as the following.
1. Store personal files
2. Host a personal website
3. Use SecureDrop
4. Have your own chat server5. Run your own email server
6. Make your own VPN
7. Run a Tor node
10. MineCraft
11. Plex Box

Implementation:

HTML buttons that run docker-compose commands and some carefully written compose files should make an MVP
Use a stateless OS like BalenaOS that just runs containers so updating the base OS would be easy 
Docker-compose files offer a stateless way of creating the admin user with shared password across services

Business Model:

Make the interface easy as using Phillips Hue, but leave it open for experts to hack. Release the .IMG files for free for people to install on their own Pi, but disable 1-click updates unless they buy the license.
You could sell a subscription service for a VPN that users could use to access their servers from anywhere and a backup service that backs your container volumes up to the cloud so you can restore them if the drives fail
Sell complete kits in our branded 3d printed cases for possible profit
The repo will welcome commits adding new apps from the community. Once tested for compatibility, they'll get added.

Similar Products:

pogoplug: Similar but ours will have more functionality and hopefully a better UI.
mynodebtc.com: meant for lightning and bitcoin.
freenas.org: Superior but not optimized for pi yet (possible competition)


