

## How to use app

### Visit app deployed via github pages at https://berlink2.github.io/finantier-test-fe/

or

### Run app in your local environment (Must have npm or yarn installed)
1. cd to root folder of app
2. Get API key from cloud IEX at https://iexcloud.io/
3. Make .env file in root folder and populate with api key like below:

<img width="385" alt="Screenshot 2020-09-27 at 21 37 59" src="https://user-images.githubusercontent.com/46464571/94367556-aafd6a00-0109-11eb-8e8f-fc421f1f5119.png">

4. Install packages with `npm install` or `yarn`
5. Run app with `npm run start` or `yarn start`
6. Get Stocked!

## Most Challenging part
The most challenging part was having to pick up a new library for visualizing the data (I used react-vis) and getting the stock price data API to work with the react-vis API. The react-vis API is pretty simple but it is not very well documented so finding good examples and instructions involved scouring all over the internet rather than just reading their documentation.

## Demos

![stockwatch](https://user-images.githubusercontent.com/46464571/94367428-f2372b00-0108-11eb-8238-115d66996a7e.gif)

<img width="1440" alt="Screenshot 2020-09-27 at 21 22 05" src="https://user-images.githubusercontent.com/46464571/94367400-ab493580-0108-11eb-9974-2cc039de7628.png">

<img width="1440" alt="Screenshot 2020-09-27 at 21 22 05" src="https://user-images.githubusercontent.com/46464571/94367419-dc296a80-0108-11eb-8f4e-38ad1e5dff0f.png">

<img width="1440" alt="Screenshot 2020-09-27 at 21 23 01" src="https://user-images.githubusercontent.com/46464571/94367422-e0558800-0108-11eb-9f52-27b1060154b2.png">

