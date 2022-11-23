# H.care
![Screenshot 2022-11-23 225900](https://user-images.githubusercontent.com/85030597/203619867-2762f161-42ad-47fe-8c23-6573cb009497.png)\
H.care is a healthcare dashboard that caters to your healthcare needs
## What does it provide?
1. A dashboard that displays your water consumption, steps, sleep records etc in a graphical way and display health news.
2. A dashboard that provides nutrient information and shows how much carbs, calories, protien, sugar, etc. you have consumed upon query.
3. A dashboard that displays your sleep data in graphical way and gives tips on sleeping well.
4. A dashboard that provides tips to improve your mental health according to your mood.
5. A dashboard that tracks your activity, displays calories burnt upon query and provides video links for various exercises.

## Introduction
1. H.care is powered by [NextJs](https://nextjs.org/) and [Firebase](https://firebase.google.com/) .
2. It uses [TailwindCSS](https://tailwindcss.com/docs/guides/nextjs) for styling
3. It uses [Nutritionix](https://developer.nutritionix.com/) API to display nutrition information and exercise information. What makes this api great is it takes natural language like 'I ate 2 eggs for breakfast today' and returns acurate nutritional information. Same goes for exercise information.
4. It uses [nivo.rocks](https://nivo.rocks/) for graphical charts. A great collection of components built on top of [React](https://reactjs.org/) and [D3JS](https://d3js.org/) .
5. It uses [NextAuth](https://next-auth.js.org/) for authentication.
6. Firebase provides database for storing data and provides functions to fetch data in realtime [Docs](https://firebase.google.com/docs/build) .
7. It uses [React-Icons](https://react-icons.github.io/react-icons) for icons.
8. It uses [TheNewsApi](https://www.thenewsapi.com/) for news fetching . It is great for getting filtered news. 


## Getting Started
This project requires you to have a **GOOGLE_CLIENT_ID** and **GOOGLE_CLIENT_SECRET** which you will receive when you will create a new Firebase App [here](https://https://console.firebase.google.com/). \ 
A whole step by step process is [here](https://scribehow.com/shared/Google_Workflow__0XyPlLRDSCCrRPi_JlJDIg).
\ It will also require **NEXT_PUBLIC_NEWS_API_TOKEN** which is a api key that you can get [here](https://www.thenewsapi.com/) 

### Running on local machine
1. Fork the repository and clone it in a local directory.
2. Open the terminal in the directory and run the following command: \
`npm i`
3. Upon completion create a 'env.local' file in the same directory and write the following in it and save: \
`GOOGLE_CLIENT_ID=*YOUR ID*` \
`GOOGLE_CLIENT_SECRET=*YOUR SECRET*` \
`NEXT_PUBLIC_NEWS_API_TOKEN=*YOUR NEWS API TOKEN*`
4. Run `npm run dev` in the terminal, this will start the local server.
5. Voila! You are ready. :joy: \
The app should be running at http://localhost:3000 by default.

## Dashboard

| ![Disp1](https://user-images.githubusercontent.com/85030597/203629174-c44c7763-e430-4aa4-b205-fb38bf19feeb.png) | ![disp2](https://user-images.githubusercontent.com/85030597/203629243-b72529dc-5587-4bb0-b281-3258defc7779.png) |
| ---------------------------------------- | ---------------------------------------- |
| ![disp3](https://user-images.githubusercontent.com/85030597/203629972-57fdafc4-447c-49b0-aee4-6f982b39cb4d.png) | ![disp4](https://user-images.githubusercontent.com/85030597/203630033-1f61e654-958b-45ce-af1f-a472fd76996f.png) |
| ![disp5](https://user-images.githubusercontent.com/85030597/203632695-3a1954b9-2e69-464c-905f-a8f0230f4ce7.png) | ![disp6](https://user-images.githubusercontent.com/85030597/203632727-054c453e-0667-4386-87b9-11dc56d5633c.png) |

# License
This project is licensed under the MIT license. Feel free to use it and if you want to contribute, please feel free to fork the project and make a pull request. Thanks!

# Contributors Guide 🥰
Thanks for considering to contribute to the project. If you have any questions, please feel free to contact me at [Twitter](https://twitter.com/home). 

