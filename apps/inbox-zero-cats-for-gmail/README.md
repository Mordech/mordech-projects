# Inbox Zero Cats for Gmail web extension

[![firefox](https://img.shields.io/amo/v/%7B1d541bdc-d07e-46ec-a911-aebd8f0f004e%7D)](https://addons.mozilla.org/en-US/firefox/addon/inbox-zero-cats-for-gmail/)
[![chrome](https://img.shields.io/chrome-web-store/v/kmigepmnbndfglbihecpfkickaibhpln)](https://chrome.google.com/webstore/detail/inbox-zero-cats-for-gmail/kmigepmnbndfglbihecpfkickaibhpln)

Inbox Zero Cats is a web extension for Gmail that displays a cat image instead of the inbox count. The cat image is from [Unsplash](https://unsplash.com/).

## Features

- Displays a cat image when your inbox reaches zero.
- Add custom photos via URL in the **Photos** tab of the options page.
- Add custom titles and subtitles via the **Titles** tab.
- Content packs let you switch between curated sets of images and titles.

## How to install

- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/inbox-zero-cats-for-gmail/)
- [Chrome](https://chrome.google.com/webstore/detail/inbox-zero-cats-for-gmail/kmigepmnbndfglbihecpfkickaibhpln)

## How to build

- Clone the repository
- Run `yarn install`
- Run `yarn build`
- The web extension will be built in the `build` folder

## How to develop

- Run `yarn install`
- Run `yarn bundle` to do a one-time build into `dist/`
- To watch for changes, run `yarn bundle` and use a file watcher (e.g. `nodemon`) manually, or load the `dist/` folder as an unpacked extension and re-run `yarn bundle` as needed

## How to contribute

- Fork the repository
- Create a new branch
- Make your changes
- Open a pull request

## License

[GPL-3.0-or-later](LICENSE)
