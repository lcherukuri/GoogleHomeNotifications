# GoogleHomeNotifications

## Requirements
1. Google Home/Mini
2. Raspberry pi

I expect that you have running pi. If not find a youtube video for that pi setup process.

## Notifications Setup
Login to raspberry pi with terminal/command line and type following commands
  - `curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -`
  - `sudo apt-get install -y nodejs`
  - `sudo apt-get install git-core libnss-mdns libavahi-compat-libdnssd-dev`
  - `sudo apt-get update`
  - `git clone https://github.com/lokeshcherukuri/GoogleHomeNotifications.git`
  - `cd GoogleHomeNotifications`
  - `nano app.js`
  - change lines 4 & 5. use your google home/mini's ip `address` and `name`. 
      (If you dont know your google home ip, use apps like lanscan to know ip's of devices on your network)
      (You can  find Google Home's Name in your Google Home Mobile App)
  - save (`ctrl x` followed by `y` followed by `Enter`)
  - `npm install`
  - `sudo npm install forever -g`
  - `forever start app.js`
      (this will run process in the background. If you want to stop use command `forever start app.js`)
