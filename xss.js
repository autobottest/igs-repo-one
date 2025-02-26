function setLanguageOptions() {
    var href = document.location.href,
        deflt = href.substring(href.("default=")+8);
    document.("<OPTION value=1>"+deflt+"</OPTION>");
    document.("<OPTION value=2>English</OPTION>");
}
