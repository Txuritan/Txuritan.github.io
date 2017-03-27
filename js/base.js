var time = new Date().getHours();
if ((time >= 20 && time <= 23) || (time >= 0 && time <= 4)) {
    document.body.setAttribute("class", "dark");
} else {
    document.body.setAttribute("class", "light");
}