let movies = [

    {
        name:"Bahubali 2-The Conclusion",
        poster:"https://imgs.search.brave.com/rRsFQpf84OyW7wSZ924abGBxDC3yiRvYHk3F68_7zRs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zMy5h/bWF6b25hd3MuY29t/L3N0YXRpYy5yb2dl/cmViZXJ0LmNvbS91/cGxvYWRzL21vdmll/L21vdmllX3Bvc3Rl/ci9iYWFodWJhbGkt/Mi10aGUtY29uY2x1/c2lvbi0yMDE3L2xh/cmdlX0JhYWh1YmFs/aS0yLU5ldy1Qb3N0/ZXItTWFoYS1TaGl2/YXJhdHJpLmpwZw",
        rating:9.2,
        cast:"Prabhas, Rana Dagubati, Anushka"
    },
    {
        name:"Guardians of Galaxy",
        poster:"https://imgs.search.brave.com/6TebK3lkslj-o5s7PQFXubx5E8BZMjGd7IKEAVDj9MU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sdW1p/ZXJlLWEuYWthbWFp/aGQubmV0L3YxL2lt/YWdlcy9wX2d1YXJk/aWFuc29mdGhlZ2Fs/YXh5X3ZvbDNfMjEw/Nl9mZTVkZmEyNy5q/cGVn",
        rating:8.5,
        cast: "Thanos, Rocket, Gamora"
    },
    {
        name:"Avengers-Endgame",
        poster:"https://imgs.search.brave.com/KOz4c1Kz1AzZOaHE-Qrs6t0Sf65FVaJwivzs_aTdxss/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/bWFydmVsLmNvbS9j/b250ZW50LzF4L2F2/ZW5nZXJzZW5kZ2Ft/ZV9sb2JfY3JkXzA1/LmpwZw",
        rating:8.7,
        cast:"Chris Evans, Robert Downey Jr, Chris Hemsworth"
    },
    {
        name:"Jawan",
        poster:"https://imgs.search.brave.com/68fkJCkj1RIEUDk-p6jBKz54K7mlXvBy0GISJhhvvlM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDEyODAz/ODgxLmpwZw",
        rating:8.3,
        cast: "Shah Rukh Khan, Nayantara, Vijay Setupathi"
    },
    {
        name:"OG-Hungry Cheetah",
        poster:"https://imgs.search.brave.com/5SqlJc7acmP3HJgXRcmfr00pK1IOhiHdx2-LplowpHQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9ib2xs/eXdvb2RjYW1lcmEu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzA5L09HLW1v/dmllLWJ1ZGdldC1h/bmQtY2FzdC02ODN4/MTAyNC5qcGc",
        rating:9.0,
        cast: "Pawan Kalyan, Arjun Das, Priyanka Mohan"
    },
    {
        name:"Orange",
        poster:"https://imgs.search.brave.com/4w8sNSe5thFZJAHNmfzZAlYIZZX57-uk39WVyfW7-kE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk0yWmtaR0l3/WkRBdE5HVTFaUzAw/TlRsa0xUaGpZall0/TWpVNU16UXpORFF5/TVRCbVhrRXlYa0Zx/Y0dkZVFYVnlPREEy/T0RNM05EUUAuanBn",
        rating:8.8,
        cast: "Ram Charan, Janeliya, Prakash Raj"
    },
    {
        name:"Arya",
        poster:"https://imgs.search.brave.com/df8jSsQ3ZbE-TVhYwsPeHtA128FD77WYtCqONMyiiY8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlpXUmlaRE14/TnpZdE16a3dNQzAw/WkRBNUxUazRaREl0/TldFNU5HRTJPV1ky/TnpRMFhrRXlYa0Zx/Y0dkZVFYVnlPREF6/TnpBd09UVUAuanBn",
        rating:8.8,
        cast: "Allu Arjun, Anu Mehta, Siva Balaji"
    },
    {
        name:"Khaleja",
        poster:"https://imgs.search.brave.com/rXCxnGZKF8mAboE867tk0Aw1yl9k81Jb18zE4ACJ3MM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vNC5icC5i/bG9nc3BvdC5jb20v/X2tMdnpweVptN3pN/L1RGMW55aWo2WXRJ/L0FBQUFBQUFBVTI0/L2pFUzBmcDZMNmpJ/L3M2NDAvbWFoZXNo/X2JhYnVfa2hhbGVq/YV93YWxscGFwZXJz/X3Bvc3RlcnNfMDEu/anBnP3Jlc2l6ZT00/MzAsNjQw",
        rating:8.6,
        cast: "Mahesh Babu, Anushka, Prakash Raj"
    },
    {
        name:"Kaithi",
        poster:"https://imgs.search.brave.com/QkRZE26q5oslZCAxaxLRqzBgqZKdvygBzV9_y7GbCOg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pYnRw/cmVzcy5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTkvMTAv/aW1hZ2VzLTkuanBl/Zw",
        rating:8.9,
        cast: "Dilli, Napolean, Anbu Das"
    },
    {
        name:"Vikram",
        poster:"https://imgs.search.brave.com/4NUgwgFXbJUK6ZYudDffa-NST3_yDaNGgwfO7DCx8ZA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtaW4uYm1zY2Ru/LmNvbS9pZWRiL21v/dmllcy9pbWFnZXMv/bW9iaWxlL3RodW1i/bmFpbC94bGFyZ2Uv/dmlrcmFtLWV0MDAx/Mzg1OTEtMjItMDct/MjAyMS0xMS00NS0x/OC5qcGc",
        rating:9.0,
        cast: "Rolex Sir, Vikram, Amar, Sandhanam"
    },
    {
        name:"Leo",
        poster:"https://assets.gadgets360cdn.com/pricee/assets/product/202303/Leo_1678967552.jpg",
        rating: 8.5,
        cast: "Leo Das, Elisa Das, Antony Das, Harold Das"
    },
    {
        name: "Thalaivar 171",
        poster:"https://m.media-amazon.com/images/M/MV5BMDViN2U2MDUtNWI0NS00NzBmLTgwMmQtNDJhMWMyNjIwYjYyXkEyXkFqcGdeQXVyMTQ0NTA1NzY5._V1_.jpg",
        rating: 9.1,
        cast: "Rajni Kanth, Lokesh Kanagraj, Anirudh Ravichandar"
    }



];



function searchMovie()
{
    let movieName = document.getElementById('search').value;
    
    if(movieName!=="")
    {

        let result =movies.filter(function(movie)
                    {
                        return movie.name.toUpperCase().includes(movieName.toUpperCase())
                    })

        if(result.length==0)
        {
            
        }


       displayMovies(result);


    }
    else 
    {
        displayMovies(movies);
    }
    


}


function displayMovies(data)
{
    
    document.getElementById("movies").innerHTML="";

    let htmlString = ``;


    for(let i=0;i<data.length;i++)
    {


        htmlString=htmlString+`
            <div class="movie">
                <div class="overlay">

                    <div class="video">

                    </div>

                    <div class="details">

                        <h1>${data[i].name}</h1>
                        <h2>IMDB : ${data[i].rating}</h2>
                        <p>${data[i].cast}</p>

                    </div>

                </div>
                <img class="poster" src="${data[i].poster}" alt="poster">
            </div>
        `
    }

    console.log(htmlString);

    document.getElementById("movies").innerHTML=htmlString;

}


displayMovies(movies);









// let movieDIV = document.createElement("div");
//     movieDIV.classList.add("movie");


//     let overlayDIV = document.createElement("div");  
//     overlayDIV.classList.add("overlay")

//     movieDIV.appendChild(overlayDIV);
    

//     console.log(movieDIV);