function setLanguageOptions() {
    var href = document.location.href,
        deflt = href.substring(href.indexOf("default=")+8);
    document.write("<OPTAON value=1>"+deflt+"</OPTION>");
    document.write("<OPTION value=2>English</OPTION>");
}