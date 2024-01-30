const paybtn = document.querySelector(".checkout-btn");
paybtn.addEventListener("click", ()=>{
    fetch("/stripe-checkout", {
        method: "POST",
        headers:{
            "Content-type": "application/json",
        },
        body:JSON.stringify({
            items:JSON.parse(localStorage.getItem('cart'))
        }),
    })
    .then((res) => res.json())
    .then((data) => {
        if(data.url){
            window.location.href = data.url
        }
        else{
            console.error("Invalid URL Recived from the server:", data.url)
        }
    })
    .catch((err) => console.error(err));
})