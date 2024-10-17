# About
This plugin adds functionality to the Payload CMS to work with Cloud Media, an image storage service like Gyazo, designed to be independent of the Media that Payload has by default.


# Important
Currently, the React component displaying the Gyazo library **cannot be displayed** due to difficulties in setting up the path, only the ability to store URLs, metadata, etc.
I will update soon to be able to display Gyazo's libraries.

# Installation
Please add `plugin.tsx` to your Payload project.
And import the plugin like other React components.
```
//Your Payload collections file
// Add this import to the top of the file
import { cloudMedia } from '<Where the `plugin.tsx` is located>'

// Add the fields to the blocks.
blocks: [
    cloudMedia,
],
```

We are preparing packages for easy installation via npm etc., but only after the Gyazo library can be displayed. Sorry, we are not able to install the Gyazo library until the Gyazo library can be displayed.
~~1. Install the plugin~~
```
// Coming soon
pnpm install @atalienet/paload-plugin-cloud-media
```
~~2. Add the plugin to the Payload configuration~~
```
//Your Payload collections file
// Add this import to the top of the file
import { cloudMedia } from '@atalienet/paload-plugin-cloud-media'

// Add the fields to the blocks.
blocks: [
    cloudMedia,
],
```
