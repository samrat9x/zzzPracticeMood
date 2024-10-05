function $(e) {
  if (e.includes("$") && e.includes(".")) {
    return document.querySelectorAll(e);
  }
  if (e.includes(".")) {
    return document.getElementsByClassName(e);
  }
  if (e.includes("#")) {
    return document.getElementsById(e);
  } else {
    return document.querySelector(e);
  }
}
