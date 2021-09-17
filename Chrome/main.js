chrome.runtime.sendMessage({ "getCount": "true" }, function (response) {
    if(response.mActive === true){
        if(response.mHeader){
            loadHeaderDesktop();
        }
        if(response.mFooter){
            loadFooterDesktop();
        }
    }
});

function loadFooterDesktop(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        var footer = document.querySelector("#footer");
        var footer0 = document.querySelector("footer nav");
        var footer1 = document.querySelector(".mod-webfetcher-footer");
        if(footer){
            footer.innerHTML = "<div style='position:relative'><span style='position:absolute;z-index:100000;top:-30px;background-color:red;color:white;padding:5px;font-size:16px'>LOCAL</span></div>";
            footer.innerHTML += this.responseText;
            nodeScriptReplace(footer);
        }
        if(footer0){
            footer0.innerHTML = "<div style='position:relative'><span style='position:absolute;z-index:100000;top:-30px;background-color:red;color:white;padding:5px;font-size:16px'>LOCAL</span></div>";
            footer0.innerHTML += this.responseText;
            nodeScriptReplace(footer0);
        }
        if(footer1){
            footer1.innerHTML = "<div style='position:relative'><span style='position:absolute;z-index:100000;top:-30px;background-color:red;color:white;padding:5px;font-size:16px'>LOCAL</span></div>";
            footer1.innerHTML += this.responseText;
            nodeScriptReplace(footer1);
        }
    }
    var mod_promo = document.querySelector(".mod-promos");
    if(mod_promo){
        xhttp.open("GET", "http://127.0.0.1:3000/couponscom-footer/urban_full", true);
    }else{
        xhttp.open("GET", "http://127.0.0.1:3000/couponscom-footer/urban_lite", true);
    }
    xhttp.send();
}


function loadHeaderDesktop() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        var header = document.querySelector("#header");
        var header0 = document.querySelector("nav");
        var header1 = document.querySelector(".mod-webfetcher-header");
        var header2 = document.querySelector(".nav-web");
        if (header) {
            var e1 = header.childNodes[3];
            var e2 = header.childNodes[4];
            var cashback_sectionHTML = header.querySelector(".cash-back-section").innerHTML;
            header.innerHTML = "<div style='position:relative'><span style='position:absolute;z-index:100000;top:77px;background-color:red;color:white;padding:5px;font-size:16px'>LOCAL</span></div>";
            header.appendChild(e1);
            header.appendChild(e2);
            header.innerHTML += this.responseText;
            nodeScriptReplace(header);
            header.querySelector(".cash-back-section").innerHTML = cashback_sectionHTML;
        }
        else if (header0) {
            var cashback_sectionHTML = header0.querySelector(".cash-back-section").innerHTML;
            header0.innerHTML = "<div style='position:relative'><span style='position:absolute;z-index:100000;top:77px;background-color:red;color:white;padding:5px;font-size:16px'>LOCAL</span></div>";
            header0.innerHTML += this.responseText;
            nodeScriptReplace(header0);
            header0.querySelector(".cash-back-section").innerHTML = cashback_sectionHTML;
        }
        else if (header1) {
            var cashback_sectionHTML = header1.querySelector(".cash-back-section").innerHTML;
            header1.innerHTML = "<div style='position:relative'><span style='position:absolute;z-index:100000;top:77px;background-color:red;color:white;padding:5px;font-size:16px'>LOCAL</span></div>";
            header1.innerHTML += this.responseText;
            nodeScriptReplace(header1);
            header1.querySelector(".cash-back-section").innerHTML = cashback_sectionHTML;
        }
        else if (header2) {
            var cashback_sectionHTML = header2.querySelector(".cash-back-section").innerHTML;
            var e1 = header2.childNodes[1];
            header2.innerHTML = "<div style='position:relative'><span style='position:absolute;z-index:100000;top:77px;background-color:red;color:white;padding:5px;font-size:16px'>LOCAL</span></div>";
            header2.appendChild(e1);
            header2.innerHTML += this.responseText;
            nodeScriptReplace(header2);
            header2.querySelector(".cash-back-section").innerHTML = cashback_sectionHTML;
        }

    }
    xhttp.open("GET", "http://127.0.0.1:3000", true);
    xhttp.send();
}


function nodeScriptReplace(node) {
    if (nodeScriptIs(node) === true) {
        node.parentNode.replaceChild(nodeScriptClone(node), node);
    }
    else {
        var i = -1, children = node.childNodes;
        while (++i < children.length) {
            nodeScriptReplace(children[i]);
        }
    }

    return node;
}
function nodeScriptClone(node) {
    var script = document.createElement("script");
    script.text = node.innerHTML;

    var i = -1, attrs = node.attributes, attr;
    while (++i < attrs.length) {
        script.setAttribute((attr = attrs[i]).name, attr.value);
    }
    return script;
}

function nodeScriptIs(node) {
    return node.tagName === 'SCRIPT';
}

