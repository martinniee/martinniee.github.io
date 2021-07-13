
function clickTogetLink(){
    var getLinkButton = document.getElementById("get-btn");
    var hyperLink = window.location.href ;
    var titleContent = document.getElementsByClassName("posttitle")[0].innerText;
    var str_MarkdownLink = "[" + titleContent + "]" + "(" + hyperLink + ")" + "<br/>";

    navigator.clipboard.writeText(str_MarkdownLink)
    .then(() => {
        if(getLinkButton.innerText !=="Copied"){
            const origianlText = getLinkButton.innerText;
            getLinkButton.innerText = 'Copied';
            setTimeout(() => {
                getLinkButton.innerText = origianlText;
            },2500);   
        }
     })
    .catch(err => {
    console.log('Something went wrong', err);
    })
}
