var count = 0;
function incr() {
    count++;
    document.getElementById("counter").innerHTML = count;
}
function reset() {
    count = 0;
    document.getElementById("counter").innerHTML = count;
}
function decr() {
    count--;
    count = count < 0 ? 0 : count;
    document.getElementById("counter").innerHTML = count;
}