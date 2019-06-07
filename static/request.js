var addQueriesDict = function(url, listQueries){
    return url + '?' + listQueries.join('&');
}

// PLOT BUTTON
var button = document.getElementById("get_plot");
button.addEventListener("click", function (ev) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("plot").innerHTML = this.responseText + document.getElementById("plot").innerHTML;
        }
    }
    var append = 0
    if(document.getElementById("append").checked){
        append = 1
    }
    url = addQueriesDict(window.location.href, ["sql=" + document.getElementById("query").value,
                                                "append=" + append])
    xhttp.open("GET", url, true);
    xhttp.send();
});
