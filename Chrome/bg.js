window.mActive = false;
window.mFooter = false;
window.mHeader = true;
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    sendResponse({"mActive":mActive,"mHeader":mHeader,"mFooter":mFooter});
})

function setmActive(mActive){
    window.mActive = mActive;
}

function setmHeader(mActive){
    window.mHeader = mActive;
}

function setmFooter(mActive){
    window.mFooter= mActive;
}
