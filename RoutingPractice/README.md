In this project, let's build a **Routing Practice** app by applying the concepts we have learned till now.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/routing-practice-output.gif" alt="routing-practice-desktop-output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px), Small (Size >= 576px), Medium (Size >= 768px)](https://assets.ccbp.in/frontend/content/react-js/routing-practice-sm-output.png)
- [Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/routing-practice-lg-output.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- When the **About** link in the header is clicked, then the page should navigate to the `AboutRoute`
- When the **Contact** link in the header is clicked, then the page should navigate to the `ContactRoute`
- When the **Home** link in the header is clicked, then the page should navigate back to the `HomeRoute`
- When an undefined path is provided in the URL, then the page should navigate to the `NotFoundRoute`

</details>

<details>
<summary>Components Structure</summary>

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/routing-practice-home-about-component-breakdown-structure.png" alt="" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/routing-practice-contact-not-found-component-breakdown-structure.png" alt="" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
</details>

<details>
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/components/App.js`
- `src/components/App.css`
- `src/components/Header/index.js`
- `src/components/Header/index.css`
- `src/components/Home/index.js`
- `src/components/Home/index.css`
- `src/components/About/index.js`
- `src/components/About/index.css`
- `src/components/Contact/index.js`
- `src/components/Contact/index.css`
- `src/components/NotFound/index.js`
- `src/components/NotFound/index.css`
</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- `HomeRoute` should consist of "/" in the URL path
- `AboutRoute` should consist of "/about" in the URL path
- `ContactRoute` should consist of "/contact" in the URL path
- No need to use the `BrowserRouter` in `App.js` as we have already included in `index.js` file

</details>

### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/wave-logo-img.png](https://assets.ccbp.in/frontend/react-js/wave-logo-img.png) alt should be **wave**
- [https://assets.ccbp.in/frontend/react-js/home-blog-img.png](https://assets.ccbp.in/frontend/react-js/home-blog-img.png) alt should be **home**
- [https://assets.ccbp.in/frontend/react-js/about-blog-img.png](https://assets.ccbp.in/frontend/react-js/about-blog-img.png) alt should be **about**
- [https://assets.ccbp.in/frontend/react-js/contact-blog-img.png](https://assets.ccbp.in/frontend/react-js/contact-blog-img.png) alt should be **contact**
- [https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png](https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png) alt should be **not found**

</details>

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #6d396b; width: 150px; padding: 10px; color: white">Hex: #6d396b</div>
<div style="background-color: #555555; width: 150px; padding: 10px; color: white">Hex: #555555</div>
<div style="background-color: #551e53; width: 150px; padding: 10px; color: white">Hex: #551e53</div>
<div style="background-color: #12022f; width: 150px; padding: 10px; color: white">Hex: #12022f</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
