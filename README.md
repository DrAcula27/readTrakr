<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://dracula27.github.io/readTrakr/">
    <img src="./img/favicon.ico" alt="Logo" width="80" />
  </a>

  <h3 align="center">ReadTrakr</h3>

  <p align="center">
    Search for and add books to your personal library!
    <br />
    <a href="https://dracula27.github.io/readTrakr/">View Demo</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#optimizations">Optimizations</a></li>
    <li><a href="#lessons-learned">Lessons Learned</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<p align="center">
    <a href="https://dracula27.github.io/readTrakr/">
      <img src='./img/screenshot.PNG' alt='ReadTrakr Screen Shot' />
    </a>
</p>

Keep track of every book you have read with this simple app! Search for a book by title, author, or ISBN and add it to your own personal library.

Bonus: it is service-agnostic! No matter how you read your books (iBooks, Kindle, real-life physical books, etc.) you can log all your reading progress here.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![HTML5](https://camo.githubusercontent.com/47e36c9392fe351ab98a0324ca2cb710782731d5a56f71ffe7c68130a1ddc34f/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6162656c3d253743266d6573736167653d48544d4c3526636f6c6f723d323335353566267374796c653d706c6173746963266c6f676f3d68746d6c35)](https://html.spec.whatwg.org/)
- [![CSS3](https://camo.githubusercontent.com/de7f9b7e6e26494153157774db679bba3320e333f8279e98986893d490293732/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6162656c3d253743266d6573736167653d4353533326636f6c6f723d323835663635267374796c653d706c6173746963266c6f676f3d63737333)](https://www.w3.org/Style/CSS/#specs)
- [![JavaScript](https://camo.githubusercontent.com/201c697f87bb2a25af48ccc954f0a3c27409421b3e887b7b8e486222e6c1c6b8/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6162656c3d253743266d6573736167653d4a41564153435249505426636f6c6f723d336337663564267374796c653d706c6173746963266c6f676f3d6a617661736372697074)](https://tc39.es/ecma262/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE -->

## Usage

Type the title, author, or ISBN of a book you'd like to add to your library and either type the `Enter` key or click the `Search` button to display the book results.

- Click the `Add to Library` button to add your book to your library.
- The book will stay in your library even if you close your browser!
- If you decide you no longer want a book in your library, click the `Remove from Library` button at the bottom of the book's card in the 'My Library' section.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- OPTIMIZATIONS -->

## Optimizations

This project can be improved by:

- [ ] Refactoring the code to account for errors fetching data,
- [ ] Replacing the alert with more custom functionality when telling the user a book is already in their library,
- [ ] Adding a `Clear Search Results` button,
- [x] Ensuring all book cover images are the same size,
- [ ] Adding a confirmation modal when a user clicks the `Remove from Library` button on a book,
- [ ] Adding a loading icon while the fetch is in progress.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LESSONS LEARNED -->

## Lessons Learned

- **API Integration.** When getting the data from the Open Library API, I learned how to use `fetch` to get `JSON` data from an external source and use the results of one query to make another query for getting the book covers.
- **Data Manipulation.** Once I had the data from the Open Library API, I learned how to transform that data into a format I needed for the project.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Danielle Andrews - [@DrAcula_codes](https://twitter.com/DrAcula_codes 'Twitter/X') - [daniellerandrews](https://www.linkedin.com/in/daniellerandrews 'LinkedIn') - danielle.andrews.dev@icloud.com

Project Link: [https://github.com/DrAcula27/readTrakr](https://github.com/DrAcula27/readTrakr)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

A special thanks to these resources used in the project!

- [Open Library APIs](https://openlibrary.org/developers/api)
- [GitHub Pages](https://pages.github.com)
- [Font Awesome](https://fontawesome.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
