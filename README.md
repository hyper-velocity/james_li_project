# Take Home Project - Front End (James Li)

## How to install

##### Use this command to install dependencies
```
yarn
```

##### Use this command to run in dev mode
(It opens the app upon local port 3000)
```
yarn dev
```

##### Use this command to build
```
yarn build
```


## How to use the website

If you open up the app, you'll see welcome page (which is home page) saying
`Welcome to the ... Click here to browse for ...`.

If you click on `here` link, it will take you to Movies page.
You'll see a list of movies there and you can browse next and previous pages by pagination navigator.

You can see the tabs on the top that can take you to Movies, Characters and Quotes pages.

## Host to test the website

- Check if it grabs correct data from API endpoint
- Check if pagination works well
- Check if the app works well with different size of devices
- Check if there's any breaking styles

## Additionally

- I used `React` with `TypeScript`, `Vite` and `TailwindCSS`
- I used `Axios` for API calls
- I used API factory pattern for API calls
- `react-star-ratings` library for showing rating info on Movies page

I didn't install `ESLint` and use it, to show you coding practices without automated tools.
