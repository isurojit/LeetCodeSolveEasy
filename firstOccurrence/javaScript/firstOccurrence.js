var strStr = function (haystack, needle) {
  //if there have no needle to search
  if (needle.length === 0) {
    return 0;
  }

  //loop through the haystack
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      //it compares the substring of haystack with needle
      if (haystack.slice(i, i + needle.length) === needle) {
        return i;
      }
    }
  }
  return -1;
};

console.log(strStr("sadbutsad", "sad"));
