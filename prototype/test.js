async function getdata () {

const url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=b1327b3dfc0e4f78b87f0c8607df8411"

const response = await fetch(url);
const data = await response.json();
console.log(data)

}

getdata();
    