# daemon for running light weight scripts
There is no real reason this uses node. I thought it was easier or something. This is just an experiment but it works.
# Installation
The plist file should be installed under `~/Library/LaunchAgents/`\
It's also hardcoded to interface with where I have the repo. Fix that yourself maybe i'll build an installer some day.\
```
launchctl load ~/Library/LaunchAgents/com.lbh.daemon.plist
```
I'd recommend launchcontrol as well. good for debugging.
```
brew install --cask launchcontrol
```
uh yeha good luck dunno why i bothered wirting this readme. ill write an installer soon

