# We now have a way to add new images
It couldn't have been heartening to see the same thumbnail images on the new site for the last few weeks. Using a repeated temporary image is one of those _lorem ipsum_ kind of solutions that works for developers to get working content up, but is otherwise a terrible solution, as it does a awful job showing what the site will look like with real content. 

Digital.gov uses images, and now there's a way to add them to posts and other site docs. 

## How to add new images to Digital.gov
- Adding new images requires running some tools locally

### Dependencies
- Recommended but optional: [set up ZSH and oh-my-Zsh shell with Z](https://www.smashingmagazine.com/2015/07/become-command-line-power-user-oh-my-zsh-z/)
  - `agnoster` theme
  - [Roboto Mono (patched for powerline) font](https://github.com/powerline/fonts/tree/master/RobotoMono)
  - [iTerm2 terminal app](https://www.iterm2.com/)
- Recommended but optional: [install 18F laptop script for mac](https://github.com/18F/laptop)
- [get set up with github and ssh](https://18f.gsa.gov/2015/03/03/how-to-use-github-and-the-terminal-a-guide/)
- [install xcode command line tools](http://railsapps.github.io/xcode-command-line-tools.html)
- [install homebrew](https://treehouse.github.io/installation-guides/mac/homebrew)
- [install node](https://treehouse.github.io/installation-guides/mac/node-mac.html)
- clone repo
  - from the local folder (`PATH/TO/FOLDER`) of your choice:
  - digital.gov: `git clone git@github.com:GSA/digital.gov.git`
  - digitalgov.gov: `git clone git@github.com:GSA/digitalgov.gov.git`
  - this adds the project into `PATH/TO/FOLDER/PROJECT`
  - from `PATH/TO/FOLDER`: `cd PROJECT`
- install npm dependencies
  - `npm install`
- get S3 credentials

### Adding new images
- you're in the project folder
- check that you're in demo branch: `git branch`
- add S3 credentials to `/.env` using template
```
AWS_SECRET=KEY
AWS_ACCESSKEY=KEY
```

- checkout a new branch: use github desktop
- in the repo directory, head for the `content/images` folder
- add new image to `_inbox` folder
- run gulp: `gulp process-img`
- watch the process in gulp
- a `_working` folder will appear in the `images` folder, but don't edit it...
- wait for the `uploaded` folder to appear with your images inside
- these are filenames to reference in posts

### Finding existing images
- look in `/static/img/proxy` for a list of all images in the system
- filename is in the form `FILENAME_EXT.EXT` (since all proxy images are jpgs and images can be either `jpg` or `png`)

### Referencing images in posts
- `{{< img src=FILENAME.EXT >}}`
- `{{< img src="FILENAME.EXT" alt="ALT TEXT" attr="ATTRIBUTION" >}}`

### Adding a featured images to a post's front matter
```
featured_image:
  src: "FILENAME.EXT"
  alt: "ALT TEXT"
```
