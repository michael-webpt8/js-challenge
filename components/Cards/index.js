// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
axios
	.get('https://lambda-times-backend.herokuapp.com/articles')
	.then((response) => {
		console.log('r', response.data.articles);

		const articles = response.data.articles;
        console.log(articles);
        const articleArr = 
		for(let i = 0; i < articles.length; i++) {
			console.log('a', articles[i]);
		}

		//	console.log(articleArray);

		const article = ArticleCard(articles);
		console.log('articles', article);
	})
	.catch((err) => {
		console.log(err);
	});

function ArticleCard(article) {
	// Layout -----------------------------------------------------
	// <div class="card">
	//   <div class="headline">{Headline of article}</div>
	//   <div class="author">
	//     <div class="img-container">
	//       <img src={url of authors image} />
	//     </div>
	//     <span>By {authors name}</span>
	//   </div>
	// </div>
	// -------------------------------------------------------------

	const card = document.createElement('div');
	card.classList.add('card');

	const headline = document.createElement('div');
	headline.classList.add('headline');
	headline.textContent = article.headline;
	card.appendChild(headline);

	const author = document.createElement('div');
	author.classList.add('author');
	card.appendChild(author);

	imgContainer = document.createElement('div');
	imgContainer.classList.add('img-container');
	author.appendChild(imgContainer); // appends inside of author div.

	const image = document.createElement('img');
	image.src = article.authorPhoto;
	imgContainer.appendChild(image); // appends inside of author div inside of img-container.

	const authorName = document.createElement('span');
	authorName.textContent = article.authorName;
	author.appendChild(authorName); // appends inside of aurtho div

	return card;
}
