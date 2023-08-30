var progress = document.querySelector(".progress");
var percent = document.querySelector(".percent");
var textBox = document.querySelector(".textBox");
var button = document.querySelector(".button");
var textBtn = document.querySelector(".textBtn");
var heartBox = document.querySelector(".heartBox");
var cursor = document.querySelector(".buttonCLick img");
var heartItem1 = document.querySelector(".heartItem.item1")
var heartItem2 = document.querySelector(".heartItem.item2")
var heartItem3 = document.querySelector(".heartItem.item3")
var count = 0;
var percentWidth = 0;
var heartLeft = -3.2;
var progressLoad = setInterval(progressInterva, 100);
var loading = document.querySelector('.loading');
var letterWrapper = document.querySelector('.letter-wrapper');
const params = new URLSearchParams(window.location.search)
const textToType = params.get('name') || 'Hồ Quốc Phương';

function loadLetter(event) {
    $('.loadingLove').delay(1000).fadeOut('fast');


    const inputField = document.getElementById('inputField');
    const typingSpeed = 100; // milliseconds per character

    let charIndex = 0;
    function typeText() {
        if (charIndex < textToType.length) {
            inputField.value += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, typingSpeed);
        }
        if (inputField.value.length == textToType.length) {
            setTimeout(() => {
                document.querySelector(".buttonLove").style.transform = "translateY(0%)";
                document.querySelector(".cricleBtn").style.transform = "scale(0.1)"
            }, 1000)
            setTimeout(() => {
                document.querySelector(".cricleBtn").style.transform = "scale(1)"
                document.querySelector(".cricleBtn").innerHTML = "💗"
            }, 2000)
            setTimeout(() => {
                document.querySelector(".buttonLove").style.width = "120px"
                document.querySelector(".button2").style.transform = "translateX(25px)"
            }, 2500)
            setTimeout(() => {
                document.querySelector(".button2").style.width = "calc(100% - 25px)"
                document.querySelector(".button2").style.height = "10px"
            }, 3000)
            setTimeout(() => {
                document.querySelector(".button2").style.height = "30px"
            }, 3500)
            setTimeout(() => {
                document.querySelector(".button2").innerHTML = "Nhận thư"
            }, 4000)
        }
    }

    setTimeout(() => {
        typeText();
    }, 11500)
};
const showApp = () => {
    loading.style.display = 'none';
    letterWrapper.style.display = 'block';
}

button.addEventListener("click", function () {
    showApp()
    loadLetter();
})

function progressInterva() {
    if (count == 100 && percentWidth == 100) {
        clearInterval(progressLoad)
        percent.textContent = "Ok rùi đó <3";
        percent.style.letterSpacing = "1px";
        textBox.style.transform = "scale(1.3)"
        heartItem3.style.animation = "1s heartScale forwards"
        setTimeout(() => {
            textBox.style.transform = "scale(0)"
        }, 400)
        setTimeout(() => {
            textBox.style.opacity = "0"
        }, 600)
        setTimeout(() => {
            button.style.transform = "scale(1)";
        }, 800);
        setTimeout(() => {
            button.style.background = "rgb(244,118,121)"
            button.style.width = "130px";
            button.style.borderRadius = "20px"
        }, 1500)
        setTimeout(() => {
            button.style.height = "40px";
        }, 2000)
        setTimeout(() => {
            textBtn.textContent = "Click me!"
            textBtn.style.color = "#fff"
        }, 2500)
        setTimeout(() => {
            cursor.style.opacity = "1";
        }, 3000)
    }
    else {
        if (count == 10) {
            heartItem1.style.animation = "1s heartScale forwards"
        }
        if (count == 46) {
            percent.style.color = "#fff"
        }
        if (count == 60) {
            heartItem2.style.animation = "1s heartScale forwards"
        }
        count += 1;
        percentWidth += 1;
        heartLeft += 0.968;
        progress.style.width = percentWidth + '%'
        percent.innerText = count + '%'
        heartBox.style.left = heartLeft + '%'
    }
}

// New code
function getHeart(e) {
    let ele = document.createElement("div");
    ele.className = "element"
    document.querySelector("body").prepend(ele)
    ele.style.left = e.clientX + 'px';
    ele.style.top = e.clientY + 'px';
    setTimeout(() => {
        let text = document.querySelectorAll(".element")[0],
            directionX = Math.random() < .5 ? -1 : 1,
            directionY = Math.random() < .5 ? -1 : 1

        text.style.left = parseInt(text.style.left) - (directionX * (Math.random() * 100)) + 'px';
        text.style.top = parseInt(text.style.top) - (directionY * (Math.random() * 100)) + 'px';
        text.style.opacity = 0;
        text.style.transform = 'scale(4)'
        text.innerHTML = "💗"
        text.style.zIndex = "100"

        setTimeout(() => {
            ele.remove()
        }, 1000)
    }, 10)
}
document.onmousemove = function (e) {
    getHeart(e)
}
document.onclick = function (e) {
    let ele = document.createElement("div");
    ele.className = "heartRain"
    document.querySelector("body").prepend(ele);
    ele.style.left = e.clientX - 10 + 'px';
    ele.style.top = e.clientY - 10 + 'px';
    ele.innerHTML = "💗"
    setTimeout(() => {
        ele.style.top = "calc(85% - 25px)"
    }, 100)
    setTimeout(() => {
        ele.style.opacity = 0
    }, 3000)
    setTimeout(() => {
        ele.remove()
    }, 4000)
}
document.onmousedown = (e) => {
    getHeart(e)
}

// .textLetter text h2
let indexText = 0;
let textLetter = document.querySelector('.textLetter h2');
const textLetterH2 = `To: ${textToType}`;
let timoutTextLetter;

function textCharLetter() {
    if (indexText < textLetterH2.length) {
        textLetter.textContent += textLetterH2[indexText];
        indexText++;
        setTimeout(indexText, 100);
    }
    else {
        clearInterval(timoutTextLetter);
        setTimeout(() => {
            funcTimeoutLetterContent()
        }, 500)
    }
}
function funcTimeoutLetter() {
    indexText = 0; // Reset indexText
    textLetter.textContent = ''; // Xóa nội dung hiện tại của textLetter
    clearInterval(timoutTextLetter);
    timoutTextLetter = setInterval(() => {
        textCharLetter();
    }, 200)
}

// chữ của thư bạn muốn gửi
let indexTextContent = 0;
let textLetterContent = document.querySelector('.contentLetter');
const textLetterP = "1 tuần có 7 ngày. 1 ngày có 24 giờ. 1 giờ có 60 phút. 1 phút có 60 giây. Không có một ngày hoặc giờ mà tôi không nhớ bạn. Không có giây phút nào mà tớ không nghĩ đến cậu. Tâm hồn và trái tim tôi tràn ngập hình bóng cậu. Nhớ và yêu cậu nhiều lắm.!!!💗💗💗";
let timoutTextLetterContent;
function textCharLetterContent() {
    if (indexTextContent < textLetterP.length) {
        textLetterContent.textContent += textLetterP[indexTextContent];
        indexTextContent++;
        setTimeout(indexTextContent, 100);
    }
    else {
        clearInterval(timoutTextLetterContent)

    }
}
function funcTimeoutLetterContent() {
    indexTextContent = 0; // Reset indexTextContent
    textLetterContent.textContent = ''; // Xóa nội dung hiện tại của textLetter
    clearInterval(timoutTextLetterContent);
    timoutTextLetterContent = setInterval(() => {
        textCharLetterContent();
    }, 100)
}
//end 
document.querySelector(".boxSlider .right").addEventListener("click", function () {
    var slider = document.querySelectorAll(".slider")
    document.querySelector(".listSlider").appendChild(slider[0])
})
document.querySelector(".boxSlider .left").addEventListener("click", function () {
    var slider = document.querySelectorAll(".slider")
    document.querySelector(".listSlider").prepend(slider[slider.length - 1])
})

document.querySelector(".buttonLove").addEventListener("click", function () {
    let timeout = setInterval(() => {
        var letters = document.createElement("div");
        letters.className = "letters"
        letters.innerHTML = '<img src="image/letters.png" alt="">';
        document.querySelector("body").prepend(letters)
        let left = Math.floor(Math.random() * 100);
        let rotate = Math.floor(Math.random() * 360);
        letters.style.left = left + "%";
        letters.style.top = "-10%";
        letters.style.transform = `rotate(${rotate}deg)`;
        setTimeout(() => {
            letters.style.top = "100%";
        }, 1000)
        setTimeout(() => {
            letters.remove()
        }, 11000)
        document.querySelectorAll(".letters").forEach((item) => {
            item.addEventListener("click", function () {
                clearInterval(timeout)
                $(".wrapperLetterForm").fadeIn()
                funcTimeoutLetter();

            })
        })
    }, 500)
})

document.querySelector(".fa-xmark").addEventListener("click", function () {
    indexTextContent = 0; // Reset indexTextContent
    textLetterContent.textContent = ''; // Xóa nội dung hiện tại của textLetter
    clearInterval(timoutTextLetterContent)
    $(".wrapperLetterForm").fadeOut()
})
// End of New code
