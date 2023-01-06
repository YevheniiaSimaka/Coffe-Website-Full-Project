var searchBox = document.querySelector(".searchBox");
var searchForm = document.querySelector(".searchForm");
var closeBtn = document.querySelector(".close");
var searchBtn = document.querySelector(".icons .search");
var cartBtn = document.querySelector(".cart");
var deleteBtn = document.querySelectorAll(".delete");
var cartSelect = document.querySelector(".cartItems");
var cartItem = document.querySelectorAll(".cartItem");
var btnBuy = document.querySelector(".buyNow");

searchBox.addEventListener('focus', function () {
    closeBtn.classList.add("closeShow");
})

closeBtn.addEventListener('click', function () {
    searchBox.value = "";
})

searchBtn.addEventListener('click', function () {
    closeBtn.classList.remove("closeShow");
    searchForm.classList.toggle("showSearchForm");
    if (cartSelect.classList.contains("cartShow")) {
        cartSelect.classList.remove("cartShow")
    }
}
);

cartBtn.addEventListener('click', function () {
    cartSelect.classList.toggle("cartShow");
    if (searchForm.classList.contains("showSearchForm")) {
        searchForm.classList.remove("showSearchForm");
    }
});

var check = 0;

for (var i = 0; i < deleteBtn.length; i++) {

    deleteBtn[i].addEventListener('click', function () {

        if (this.classList.contains("one")) {
            cartItem[0].style.display = "none";
        } else if (this.classList.contains("two")) {
            cartItem[1].style.display = "none";
        } else if (this.classList.contains("three")) {
            cartItem[2].style.display = "none";
        } else if (this.classList.contains("four")) {
            cartItem[3].style.display = "none";
        } else if (this.classList.contains("five")) {
            cartItem[4].style.display = "none";
        } else if (this.classList.contains("six")) {
            cartItem[5].style.display = "none";
        } else if (this.classList.contains("seven")) {
            cartItem[6].style.display = "none";
        } else if (this.classList.contains("eight")) {
            cartItem[7].style.display = "none";
        } else if (this.classList.contains("nine")) {
            cartItem[8].style.display = "none";
        } else if (this.classList.contains("ten")) {
            cartItem[9].style.display = "none";
        } else if (this.classList.contains("eleven")) {
            cartItem[10].style.display = "none";
        } else if (this.classList.contains("twelve")) {
            cartItem[11].style.display = "none";
        } else if (this.classList.contains("thirteen")) {
            cartItem[12].style.display = "none";
        }


    })

}

var addCartItem = document.querySelectorAll(".addToCart");

for (var i = 0; i < addCartItem.length; i++)
    addCartItem[i].addEventListener('click', function () {

        for (var i = 0; i < addCartItem.length; i++) {

            if (this.classList.contains("one")) {
                cartItem[0].style.display = "flex"
                cartSelect.classList.add("cartShow");
            } else if (this.classList.contains("two")) {
                cartItem[1].style.display = "flex"
                cartSelect.classList.add("cartShow");
            } else if (this.classList.contains("three")) {
                cartItem[2].style.display = "flex"
                cartSelect.classList.add("cartShow");
            } else if (this.classList.contains("four")) {
                cartItem[3].style.display = "flex"
                cartSelect.classList.add("cartShow");
            } else if (this.classList.contains("five")) {
                cartItem[4].style.display = "flex"
                cartSelect.classList.add("cartShow");
            } else if (this.classList.contains("six")) {
                cartItem[5].style.display = "flex"
                cartSelect.classList.add("cartShow");
            } else if (this.classList.contains("seven")) {
                cartItem[6].style.display = "flex"
                cartSelect.classList.add("cartShow");
            } else if (this.classList.contains("eight")) {
                cartItem[7].style.display = "flex"
                cartSelect.classList.add("cartShow");
            } else if (this.classList.contains("nine")) {
                cartItem[8].style.display = "flex"
                cartSelect.classList.add("cartShow");
            } else if (this.classList.contains("ten")) {
                cartItem[9].style.display = "flex"
                cartSelect.classList.add("cartShow");
            } else if (this.classList.contains("eleven")) {
                cartItem[10].style.display = "flex"
                cartSelect.classList.add("cartShow");
            } else if (this.classList.contains("twelve")) {
                cartItem[11].style.display = "flex"
                cartSelect.classList.add("cartShow");
            } else if (this.classList.contains("thirteen")) {
                cartItem[12].style.display = "flex"
                cartSelect.classList.add("cartShow");
            }

        }

    })

var post = document.getElementById("post");
var otherList = document.querySelector(".moreFive")
var wantMore = document.querySelector(".wantMore")
wantMore.style.display = "none"

post.addEventListener("click", function () {
    var commentBoxValue = document.getElementById("comment-box").value;
    var nameBoxValue = document.getElementById("name-box").value;
    var div = document.createElement("div");
    var li = document.createElement("p");
    var h2 = document.createElement("h2");
    var name = document.createTextNode(nameBoxValue + " ")
    var text = document.createTextNode(commentBoxValue)
    var list = document.querySelector(".unordered")

    if (list.childElementCount < 5 && commentBoxValue != "" && nameBoxValue.length < 10) {
        h2.appendChild(name)
        li.appendChild(text)
        div.appendChild(h2)
        div.appendChild(li)
        list.prepend(div)
    } else if (list.childElementCount >= 5 && commentBoxValue != "" && nameBoxValue.length < 10) {
        h2.appendChild(name)
        li.appendChild(text)
        div.appendChild(h2)
        div.appendChild(li)
        otherList.append(div)
        wantMore.style.display = "block"
    } else if (nameBoxValue.length > 10) {
        alert("Your name is too long")
    } else if (commentBoxValue == "") {
        alert("Please enter your name and a comment")
    }


});

var clicking = 0;
wantMore.addEventListener('click', function () {
    otherList.classList.toggle("makeDisplay")
    clicking++
    if (clicking % 2 == 0) {
        wantMore.innerHTML = "Show More"
    } else {
        wantMore.innerHTML = "Show Less"
    }
})