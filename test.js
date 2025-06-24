var groupAnagrams = function (strs) {
  let sorted = strs.map((val) => val.split("").sort().join(""));
  let hashMap = {};
  for (let i = 0; i < sorted.length; i++) {
    if(sorted[i] in hashMap){
        hashMap[sorted[i]].push(strs[i])
    }else{
        hashMap[sorted[i]] = [strs[i]]
    }
  }
  return Object.values(hashMap)
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
