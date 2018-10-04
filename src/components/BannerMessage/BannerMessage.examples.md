#### Banner Message, Success

```js

<BannerMessage success>
	<BannerMessage.Header>Success Message goes here</BannerMessage.Header>
</BannerMessage>
```

#### Banner Message, Information

```js

<BannerMessage info>
Information Message goes here
</BannerMessage>
```

#### Banner Message, warning

```js

<BannerMessage warning>
Warning Message goes here
</BannerMessage>
```

#### Banner Message, Error

```js

<BannerMessage error>
Error Message goes here
</BannerMessage>
```

#### Banner Message, with button
```js

<BannerMessage info button="Click here">
	<BannerMessage.Header>Header text goes here</BannerMessage.Header>
</BannerMessage>
```

#### Banner Message, with Body

```js

<BannerMessage success>
	<BannerMessage.Header>Header text goes here</BannerMessage.Header>
	<BannerMessage.Body>body</BannerMessage.Body>
</BannerMessage>
```

#### Banner Message, with Body and Footer

```js
const Button = require('semantic-ui-react').Button;

<BannerMessage info>
	<BannerMessage.Header>Header text goes here</BannerMessage.Header>
	<BannerMessage.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at sagittis sem, ac commodo diam. Cras sed enim sit amet ligula volutpat dignissim. Donec nec magna ex. Ut eu dictum sem.</BannerMessage.Body>
	<BannerMessage.Footer>
		<Button negative>No</Button>
		<Button primary>Yes</Button>
	</BannerMessage.Footer>
</BannerMessage>
```

#### Banner Message in App
```js
const Button = require('semantic-ui-react').Button;
initialState = { closed: false };

<div style={{border: '1px solid black'}}>
	<h1 style={{padding: '10px', background: '#363D43', margin: '0px', position: 'relative', color: 'white'}}>My App</h1>
	<BannerMessage error
		onCloseClicked={() => {
	  	setState({ closed: true})
		}}
		closed={state.closed}
	>
		<BannerMessage.Header>Click the close button to make this disappear</BannerMessage.Header>
	</BannerMessage>
	<section style={{background: '#F8F8F8', padding: '10px'}}>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat magna turpis, ac commodo ligula imperdiet ac. Nunc vitae arcu luctus, sagittis odio quis, suscipit nisi. Nunc laoreet enim sed tellus consectetur tincidunt. Vivamus sit amet posuere dolor. Sed vestibulum fermentum enim nec ornare. Quisque dignissim tellus at velit pretium, id euismod diam tempus. Phasellus sollicitudin metus sodales aliquet mollis. Curabitur auctor eros et nisl dapibus, at mattis diam fringilla. Donec dignissim, augue viverra imperdiet tincidunt, ipsum tellus luctus tellus, pretium tincidunt felis tellus ut est. In hendrerit, odio sed pretium dignissim, tortor enim pulvinar sapien, vitae pharetra lectus magna non orci. Aenean at semper diam. Morbi consequat diam vel nisl viverra lobortis. Cras ut ex non magna congue vehicula. Morbi sit amet odio metus.</p>
	</section>
</div>
```


