document.addEventListener("DOMContentLoaded", function (e) {
    const bg = chrome.extension.getBackgroundPage();
    console.log(bg);
    if(bg.mActive === false){
        document.querySelector("button").classList.add("active");
        document.querySelector("button").innerHTML = "Activate";
    }else{
        document.querySelector("button").classList.add("deactive");
        document.querySelector("button").innerHTML = "Deactivate";
        document.querySelector(".options").classList.add("show")
        document.querySelector("#header").checked = bg.mHeader;
        document.querySelector("#footer").checked = bg.mFooter;

    }

    document.querySelector("button").addEventListener("click",function(e){
        if(document.querySelector("button").innerHTML === "Activate"){
            document.querySelector("button").classList.add("deactive");
            document.querySelector("button").classList.remove("active");
            document.querySelector("button").innerHTML = "Deactivate";
            document.querySelector(".options").classList.add("show")
            bg.setmActive(true);
        }
        else{
            document.querySelector("button").classList.add("active");
            document.querySelector("button").classList.remove("deactive");
            document.querySelector("button").innerHTML = "Activate";
            document.querySelector(".options").classList.remove("show")
            bg.setmActive(false);
        }
    })

    document.querySelector("#header").addEventListener("change",function(e){
        bg.setmHeader(e.target.checked);
    })

    document.querySelector("#footer").addEventListener("change",function(e){
        bg.setmFooter(e.target.checked);
    })
});

