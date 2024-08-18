# Implementation Details

I am documenting my process in real-time to provide transparency. Not everything described here may be implemented, but I aim to share my thoughts and decisions as they evolve. If I am unsure about a feature, it will be noted in quotes.

> "If I have time, I will..."

## Tools

- I installed the `mui` library for form inputs, modals, and possibly card elements. It comes with predefined styles that work out of the box, which I can override with CSS or Tailwind for customization.

> I may also use a third-party library for managing form state with the `useForm` hook, which will make handling dirty values easier when a user updates an existing memory.

## Page Structure

I chose to add a `<SideNavigation/>` to contain the **logo** and a `<TopNavigation/>` to conatin the profile picture.

> The idea is to hide the side navigation on smaller screens (tablet/phone) and toggle it via a burger menu to overlay it on top of the content. This structure is common in modern apps, with modules on the side and user-specific features (notifications, profile, etc.) on top. While not strictly necessary for this project, I added it to provide a clear framework for the app.

I used absolute positioning to anchor the navigations and content, ensuring precise placement. Scrolling is enabled only within the content region (`<main />`).

For fun, I generated a logo using Midjourney. The app is named **SharedMemories (SM)**.

## Memory Cards (UI)

I could have started with the backend, but I chose to prioritize the front-end to focus on the user experience. The backend appears straightforward, so my initial effort is on developing the UI.

### Creating the Card

I opted to use MUI Card components to accelerate development. Creating a `MemoryCard` component from the start will simplify the code, enhance readability, and allow me to loop over the memories to generate all the memory cards efficiently.

### Card Options

There are no clear criteria on whether users can share a single memory, nor are there requirements for a like button with a counter or a message thread for each memory. Therefore, I will not implement these features.

I will focus on the CRUD functionality, ensuring users can **Create, Read, Update, and Delete** memories efficiently.

---

# Planned coding challenge: Memory lane

**Please avoid initiating pull requests on this repository or forking this repository. To submit your solution, either set up a repository on your own account or forward a zip file to the appropriate contact within our talent team.**

### Problem definition

After a series of discovery calls we found out a problem that our users are facing. They are having a hard time sharing their memories with friends and family. They are using a combination of social media, messaging apps, and email to share their memories. They are looking for a solution that allows them to store and share their memories in a single place.

As a first iteration for this solution, we want to build a web application that allows users to create a memory lane and share it with friends and family. A memory lane is a collection of events that happened in a chronological order. Each event consists of a title, a description, a timestamp, and at least one image.

## Deliverables

- Clone this repository and create a new branch with your name. Open a pull request on your own instance of the repository.
- An updated README providing a high level explanation of your implementation.
- **Screenshots or a short video/gif** showing your UI implementation.
- Update the API to accommodate for your technical design. Run the API by using `npm run serve:api`.
- The provided mockup is only for reference and inspiration. Feel free to improve it!

### FAQ

- **Can I add a framework like Next?** If you have the time, go for it, we want to see you use your favorite tools.
- **Is user authentication required?** No, it is not required.
- **Can I use a component library?** Yes, you can use a component library.
- **What will you be looking for?** Good user experience, reusable code, and a well thought out technical design.

### Inspiration mockup

![Memory lane mockup](./memory_lane.png)
