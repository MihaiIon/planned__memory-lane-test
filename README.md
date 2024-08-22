<img src="./src/assets/logo.png" alt="Shared Memories Logo" width="120"/>

# Documentation Format

This documentation provides an overview of UX/UI decisions made during development, highlighting design choices and technical intricacies for a better user experience.

In addition, I will share my thoughts on certain implementations or missing features. Although not everything will be implemented, I want to address these concerns in a clear and concise manner.

> This is an example of a thought.

Let's get started.

# First Look

The interface is designed to be minimalistic yet intuitive, guiding users without overwhelming them.

## App Frame

![App Frame](./docs/1.jpg)

### 🎯 UX/UI Design Decisions

- **Top Navigation**: Added a top navigation bar with user-specific features, such as the logged-in profile and notifications.
- **Side Navigation**: Added a side navigation bar displaying the app logo and modules. It could be hidden on smaller screens and toggled via a burger menu.

> To enhance the user experience on smaller screens (tablet/phone), the side navigation would be hidden by default. Users could access the navigation menu by clicking on a burger icon, which overlays it on top of the content. This structure is commonly used in modern apps. **Although not implemented in this project**, it provides a clear framework for future development.

> For fun, I generated a logo using Midjourney. The app wwould be named **SharedMemories (SM)**.

## Page Design

![Page Design](./docs/1.jpg)

### 🎯 UX/UI Design Decisions

- **Your Memory Lane**: I decided to go with this title because it clearly communicates the purpose of the page, keeping it personal to the user.
- **Share button**: I placed this button next to the page's title for better visibility and to clearly indicate its association with the page.
- **Memory Cards Placeholder**: When the page is empty, a message "A blank canvas, waiting..." creates the impression of an art board, hinting at the memories that will soon fill the space.
- **Inviting User Engagement**: Instead of displaying a form, an inviting input message encourages users to share their memories. Clicking on the input triggers a modal with the actual form, maintaining a clean UI while providing additional functionality.
- **Back to Top Button**: Added a button on the bottom-right corner for easy navigation back to the Share Button.



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
