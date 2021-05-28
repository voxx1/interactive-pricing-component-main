const slider = document.getElementById("slider-range");
const price = document.getElementById("price-amount");
const output = document.getElementById("demo");
const views = document.getElementById("views-number")
const checkbox = document.getElementById('checkbox');
const progressButton = document.getElementById('progress');

let discount = 1
output.innerHTML = slider.value

discountApplied = () => {
    if (checkbox.checked === true) discount = 0.75;
    if (checkbox.checked === false) discount = 1;
    return discount;
}

change = () => {
if (slider.value <= 20) {
    views.innerHTML = "10K PAGE VIEWS"
    price.innerHTML = 8 * discount;
} else if (slider.value <= 40 && slider.value > 20) {
    views.innerHTML = "50K PAGE VIEWS";
    price.innerHTML = 12 * discount;
} else if (slider.value > 40 && slider.value <= 60) {
    views.innerHTML = "100K PAGE VIEWS"
    price.innerHTML = 16 * discount;
} else if (slider.value > 60 && slider.value <= 80) {
    views.innerHTML = "500K PAGE VIEWS"
    price.innerHTML = 24 * discount;
} else  {
    views.innerHTML = "1M PAGE VIEWS"
    price.innerHTML = 36 * discount;
    }
}



slider.oninput = function update() {
    output.innerHTML = this.value;
    progressButton.style.width = slider.value + "%";
    discountApplied();
    change();
}