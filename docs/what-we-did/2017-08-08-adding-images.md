# We now have a way to add new images
It couldn't have been heartening to see the same thumbnail images on the new site for the last few weeks. Using a repeated temporary image is one of those _lorem ipsum_ kind of solutions that works for developers to get working content up, but is otherwise a terrible solution, as it does a awful job showing what the site will look like with real content. 

Digital.gov uses images, and now there's a way to add them to posts and other site docs. 

## How to add new images to Digital.gov
- Adding new images requires running some tools locally

### Dependencies
- install xcode command line tools
- install homebrew
- install node
- clone repo
- install npm dependencies
- get S3 credentials

### Adding new images
- check that you're in demo branch
- add S3 credentials to `/.env` using template
- checkout a new branch
- in the repo directory, head for the `content/images` folder
- add new image to `_inbox` folder
- run gulp
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
