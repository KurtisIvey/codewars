// original, object unaccessible
function getStatus(isBusy) {
  var msg = isBusy ? "busy" : "available";
  return;
  {
    status: msg;
  }
}

// fixed, object in line of return
function getStatus(isBusy) {
  var msg = isBusy ? "busy" : "available";
  return {
    status: msg,
  };
}
