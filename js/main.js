
// 알림창
// alert("알림창 - 메세지를 띄워요")

const movieTitle = "제목";
const movieGenre = "장르";
const movieRating = "9.2";

if(movieRating >= 9.0){
    console.log("명작");
} else if(movieRating >= 8.0){
    console.log("볼만함");
} else {
    console.log("비추");
}

const ratingBadge = movieRating ? `⭐${movieRating}`:"";