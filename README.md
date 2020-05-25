# pwa-boilerplate

basic pwa boilerplate that's has nothing more than the minimum of a working offline webapp

---

## TLDR

- A super simple progressive web app boilerplate that will work offline after your first load.

---

## why even bother?

- I created this because it's hard to actually learn how to setup a progressive web app
- every other boiler plate I've seen is either filled to the brim with code that would make your head spin
- this just works out of the box (use a local file server something like `http-server`)

---

## contents

- `/index.html` - doesn't have anything except for links to your css and js
- `/service-worker.js` - is what makes your app work offline after first load
- `/manifest.json` - what browsers look for so they could make your app installable
