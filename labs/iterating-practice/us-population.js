// Data taken from here: http://api.population.io/1.0/population/2010/United%20States/
// I don't know where they get the data so can't verify its accuracy.

var dataset = [
  { females: 1994141,
    country: 'United States',
    age: 0,
    males: 2085528,
    year: 2010,
    total: 4079669 },
  { females: 1997991,
    country: 'United States',
    age: 1,
    males: 2087350,
    year: 2010,
    total: 4085341 },
  { females: 2000746,
    country: 'United States',
    age: 2,
    males: 2088549,
    year: 2010,
    total: 4089295 },
  { females: 2002756,
    country: 'United States',
    age: 3,
    males: 2089465,
    year: 2010,
    total: 4092221 },
  { females: 2004366,
    country: 'United States',
    age: 4,
    males: 2090436,
    year: 2010,
    total: 4094802 },
  { females: 2005925,
    country: 'United States',
    age: 5,
    males: 2091803,
    year: 2010,
    total: 4097728 },
  { females: 2007781,
    country: 'United States',
    age: 6,
    males: 2093905,
    year: 2010,
    total: 4101686 },
  { females: 2010281,
    country: 'United States',
    age: 7,
    males: 2097080,
    year: 2010,
    total: 4107361 },
  { females: 2013771,
    country: 'United States',
    age: 8,
    males: 2101670,
    year: 2010,
    total: 4115441 },
  { females: 2018603,
    country: 'United States',
    age: 9,
    males: 2108014,
    year: 2010,
    total: 4126617 },
  { females: 2023289,
    country: 'United States',
    age: 10,
    males: 2114217,
    year: 2010,
    total: 4137506 },
  { females: 2026352,
    country: 'United States',
    age: 11,
    males: 2118390,
    year: 2010,
    total: 4144742 },
  { females: 2037286,
    country: 'United States',
    age: 12,
    males: 2132030,
    year: 2010,
    total: 4169316 },
  { females: 2060100,
    country: 'United States',
    age: 13,
    males: 2159943,
    year: 2010,
    total: 4220043 },
  { females: 2089651,
    country: 'United States',
    age: 14,
    males: 2195773,
    year: 2010,
    total: 4285424 },
  { females: 2117689,
    country: 'United States',
    age: 15,
    males: 2229339,
    year: 2010,
    total: 4347028 },
  { females: 2146942,
    country: 'United States',
    age: 16,
    males: 2263862,
    year: 2010,
    total: 4410804 },
  { females: 2165852,
    country: 'United States',
    age: 17,
    males: 2285295,
    year: 2010,
    total: 4451147 },
  { females: 2168175,
    country: 'United States',
    age: 18,
    males: 2285990,
    year: 2010,
    total: 4454165 },
  { females: 2159571,
    country: 'United States',
    age: 19,
    males: 2272689,
    year: 2010,
    total: 4432260 },
  { females: 2151448,
    country: 'United States',
    age: 20,
    males: 2259690,
    year: 2010,
    total: 4411138 },
  { females: 2140926,
    country: 'United States',
    age: 21,
    males: 2244039,
    year: 2010,
    total: 4384965 },
  { females: 2133510,
    country: 'United States',
    age: 22,
    males: 2229168,
    year: 2010,
    total: 4362678 },
  { females: 2132897,
    country: 'United States',
    age: 23,
    males: 2218195,
    year: 2010,
    total: 4351092 },
  { females: 2135789,
    country: 'United States',
    age: 24,
    males: 2208905,
    year: 2010,
    total: 4344694 },
  { females: 2136497,
    country: 'United States',
    age: 25,
    males: 2197148,
    year: 2010,
    total: 4333645 },
  { females: 2137711,
    country: 'United States',
    age: 26,
    males: 2185169,
    year: 2010,
    total: 4322880 },
  { females: 2131362,
    country: 'United States',
    age: 27,
    males: 2167654,
    year: 2010,
    total: 4299016 },
  { females: 2113361,
    country: 'United States',
    age: 28,
    males: 2142006,
    year: 2010,
    total: 4255367 },
  { females: 2088593,
    country: 'United States',
    age: 29,
    males: 2111921,
    year: 2010,
    total: 4200514 },
  { females: 2065883,
    country: 'United States',
    age: 30,
    males: 2083642,
    year: 2010,
    total: 4149525 },
  { females: 2043293,
    country: 'United States',
    age: 31,
    males: 2055863,
    year: 2010,
    total: 4099156 },
  { females: 2027525,
    country: 'United States',
    age: 32,
    males: 2034632,
    year: 2010,
    total: 4062157 },
  { females: 2022761,
    country: 'United States',
    age: 33,
    males: 2023579,
    year: 2010,
    total: 4046340 },
  { females: 2025969,
    country: 'United States',
    age: 34,
    males: 2020204,
    year: 2010,
    total: 4046173 },
  { females: 2029981,
    country: 'United States',
    age: 35,
    males: 2018080,
    year: 2010,
    total: 4048061 },
  { females: 2036269,
    country: 'United States',
    age: 36,
    males: 2018137,
    year: 2010,
    total: 4054406 },
  { females: 2045241,
    country: 'United States',
    age: 37,
    males: 2022787,
    year: 2010,
    total: 4068028 },
  { females: 2056401,
    country: 'United States',
    age: 38,
    males: 2032469,
    year: 2010,
    total: 4088870 },
  { females: 2070132,
    country: 'United States',
    age: 39,
    males: 2046398,
    year: 2010,
    total: 4116530 },
  { females: 2085229,
    country: 'United States',
    age: 40,
    males: 2061474,
    year: 2010,
    total: 4146703 },
  { females: 2099423,
    country: 'United States',
    age: 41,
    males: 2076069,
    year: 2010,
    total: 4175492 },
  { females: 2123189,
    country: 'United States',
    age: 42,
    males: 2098014,
    year: 2010,
    total: 4221203 },
  { females: 2160806,
    country: 'United States',
    age: 43,
    males: 2130169,
    year: 2010,
    total: 4290975 },
  { females: 2205936,
    country: 'United States',
    age: 44,
    males: 2167507,
    year: 2010,
    total: 4373443 },
  { females: 2247630,
    country: 'United States',
    age: 45,
    males: 2201679,
    year: 2010,
    total: 4449309 },
  { females: 2287688,
    country: 'United States',
    age: 46,
    males: 2233787,
    year: 2010,
    total: 4521475 },
  { females: 2317309,
    country: 'United States',
    age: 47,
    males: 2256546,
    year: 2010,
    total: 4573855 },
  { females: 2330869,
    country: 'United States',
    age: 48,
    males: 2265290,
    year: 2010,
    total: 4596159 },
  { females: 2331572,
    country: 'United States',
    age: 49,
    males: 2262342,
    year: 2010,
    total: 4593914 },
  { females: 2329647,
    country: 'United States',
    age: 50,
    males: 2256294,
    year: 2010,
    total: 4585941 },
  { females: 2324721,
    country: 'United States',
    age: 51,
    males: 2247349,
    year: 2010,
    total: 4572070 },
  { females: 2306106,
    country: 'United States',
    age: 52,
    males: 2223261,
    year: 2010,
    total: 4529367 },
  { females: 2270038,
    country: 'United States',
    age: 53,
    males: 2179406,
    year: 2010,
    total: 4449444 },
  { females: 2221350,
    country: 'United States',
    age: 54,
    males: 2121536,
    year: 2010,
    total: 4342886 },
  { females: 2167706,
    country: 'United States',
    age: 55,
    males: 2059204,
    year: 2010,
    total: 4226910 },
  { females: 2106460,
    country: 'United States',
    age: 56,
    males: 1989505,
    year: 2010,
    total: 4095965 },
  { females: 2048896,
    country: 'United States',
    age: 57,
    males: 1924113,
    year: 2010,
    total: 3973009 },
  { females: 2001049,
    country: 'United States',
    age: 58,
    males: 1869486,
    year: 2010,
    total: 3870535 },
  { females: 1957350,
    country: 'United States',
    age: 59,
    males: 1819943,
    year: 2010,
    total: 3777293 },
  { females: 1908602,
    country: 'United States',
    age: 60,
    males: 1765522,
    year: 2010,
    total: 3674124 },
  { females: 1859542,
    country: 'United States',
    age: 61,
    males: 1710843,
    year: 2010,
    total: 3570385 },
  { females: 1794846,
    country: 'United States',
    age: 62,
    males: 1642438,
    year: 2010,
    total: 3437284 },
  { females: 1706899,
    country: 'United States',
    age: 63,
    males: 1553454,
    year: 2010,
    total: 3260353 },
  { females: 1604801,
    country: 'United States',
    age: 64,
    males: 1452106,
    year: 2010,
    total: 3056907 },
  { females: 1505088,
    country: 'United States',
    age: 65,
    males: 1353125,
    year: 2010,
    total: 2858213 },
  { females: 1404227,
    country: 'United States',
    age: 66,
    males: 1253164,
    year: 2010,
    total: 2657391 },
  { females: 1314295,
    country: 'United States',
    age: 67,
    males: 1164006,
    year: 2010,
    total: 2478301 },
  { females: 1242906,
    country: 'United States',
    age: 68,
    males: 1092883,
    year: 2010,
    total: 2335789 },
  { females: 1184673,
    country: 'United States',
    age: 69,
    males: 1034415,
    year: 2010,
    total: 2219088 },
  { females: 1126180,
    country: 'United States',
    age: 70,
    males: 975512,
    year: 2010,
    total: 2101692 },
  { females: 1069608,
    country: 'United States',
    age: 71,
    males: 918217,
    year: 2010,
    total: 1987825 },
  { females: 1018530,
    country: 'United States',
    age: 72,
    males: 865438,
    year: 2010,
    total: 1883968 },
  { females: 973223,
    country: 'United States',
    age: 73,
    males: 817131,
    year: 2010,
    total: 1790354 },
  { females: 932810,
    country: 'United States',
    age: 74,
    males: 772524,
    year: 2010,
    total: 1705334 },
  { females: 894650,
    country: 'United States',
    age: 75,
    males: 730324,
    year: 2010,
    total: 1624974 },
  { females: 857499,
    country: 'United States',
    age: 76,
    males: 690102,
    year: 2010,
    total: 1547601 },
  { females: 826480,
    country: 'United States',
    age: 77,
    males: 651989,
    year: 2010,
    total: 1478469 },
  { females: 803299,
    country: 'United States',
    age: 78,
    males: 615691,
    year: 2010,
    total: 1418990 },
  { females: 784354,
    country: 'United States',
    age: 79,
    males: 580450,
    year: 2010,
    total: 1364804 },
  { females: 765337,
    country: 'United States',
    age: 80,
    males: 546546,
    year: 2010,
    total: 1311883 },
  { females: 748315,
    country: 'United States',
    age: 81,
    males: 514820,
    year: 2010,
    total: 1263135 },
  { females: 720459,
    country: 'United States',
    age: 82,
    males: 478189,
    year: 2010,
    total: 1198648 },
  { females: 675331,
    country: 'United States',
    age: 83,
    males: 433440,
    year: 2010,
    total: 1108771 },
  { females: 618894,
    country: 'United States',
    age: 84,
    males: 383961,
    year: 2010,
    total: 1002855 },
  { females: 564268,
    country: 'United States',
    age: 85,
    males: 336667,
    year: 2010,
    total: 900935 },
  { females: 509684,
    country: 'United States',
    age: 86,
    males: 290548,
    year: 2010,
    total: 800232 },
  { females: 455116,
    country: 'United States',
    age: 87,
    males: 247209,
    year: 2010,
    total: 702325 },
  { females: 402148,
    country: 'United States',
    age: 88,
    males: 208267,
    year: 2010,
    total: 610415 },
  { females: 350911,
    country: 'United States',
    age: 89,
    males: 173164,
    year: 2010,
    total: 524075 },
  { females: 300043,
    country: 'United States',
    age: 90,
    males: 139411,
    year: 2010,
    total: 439454 },
  { females: 249925,
    country: 'United States',
    age: 91,
    males: 107133,
    year: 2010,
    total: 357058 },
  { females: 204661,
    country: 'United States',
    age: 92,
    males: 80196,
    year: 2010,
    total: 284857 },
  { females: 166201,
    country: 'United States',
    age: 93,
    males: 60163,
    year: 2010,
    total: 226364 },
  { females: 133397,
    country: 'United States',
    age: 94,
    males: 45473,
    year: 2010,
    total: 178870 },
  { females: 102645,
    country: 'United States',
    age: 95,
    males: 32664,
    year: 2010,
    total: 135309 },
  { females: 74056,
    country: 'United States',
    age: 96,
    males: 22021,
    year: 2010,
    total: 96077 },
  { females: 51337,
    country: 'United States',
    age: 97,
    males: 13994,
    year: 2010,
    total: 65331 },
  { females: 35778,
    country: 'United States',
    age: 98,
    males: 8321,
    year: 2010,
    total: 44099 },
  { females: 25673,
    country: 'United States',
    age: 99,
    males: 4612,
    year: 2010,
    total: 30285 },
  { females: 51007,
    country: 'United States',
    age: 100,
    males: 9506,
    year: 2010,
    total: 60513 }
];

// For all these, use the forEach iterator function
var result;

// Create a function that finds all the years that there are more females than males

function moreFemales(data){
  var output = [];

  data.forEach(function(obj){
    if (obj.females > obj.males){
      output.push(obj.age);
    }
  });
  return output;
}
result = moreFemales(dataset);
// console.log("Ages with more Females : ",result);

// Create a function that finds all the years that there are more males than females

function moreMales(data){
  var output = [];

  data.forEach(function(obj){
    if (obj.males > obj.females){
      output.push(obj.age);
    }
  });
  return output;
}
result = moreMales(dataset);
// console.log("Ages with more Males : ",result);

// Refactor those into one function

function agesBySelectedGender(data,gender) {

  var output = [];
  var gender2;

  if (gender.toLowerCase() === "females"){
    gender2 = "males";
  }else if(gender.toLowerCase() === "males"){
    gender2 = "females";
  }else{
    console.log("Invalid Gender");
    return;
  }

  data.forEach(function(obj){
    if (obj[gender] > obj[gender2]){
      output.push(obj.age);
    }
  });
  return output;
}
selectedGender = 'females';
result = agesBySelectedGender(dataset,selectedGender);
// console.log("Ages with more",selectedGender, result);

// ---------------------

// Create a function that computes the total number of males
function malePopTotal(data) {
  var output = 0;

  data.forEach(function(obj){
    output += obj.males;
  });
  return output;

}
result = malePopTotal(dataset);
console.log("Total male population across ages is :",result);
// Create a function that computes the total number of females
function femalePopTotal(data){
  var output = 0;

  data.forEach(function(obj){
    output += obj.females;
  });
  return output;
}
result = femalePopTotal(dataset);
console.log("Total female population across ages is :",result);

// Refactor those into one function

function selectedGenderPopTotal(data,gender){

  var output = 0;

  data.forEach(function(obj){
    output += obj[gender];
  });
  return output;

}
var selectedGender = "males";
result = selectedGenderPopTotal(dataset,selectedGender);
console.log("The total population of",selectedGender," is ",result);

// ---------------------

// Create a function that computes the total number of males over the age of 65

function malesOver65(data){
  var output = 0;
  data.forEach(function(obj){
    if(obj.age > 65){
      output += obj.males;
    }
  });
  return output;
}
 result = malesOver65(dataset);
 console.log("Number of males over the age of 65",result);

// Create a function that computes the total number of females over the age of 65


function femalesOver65(data){
  var output = 0;
  data.forEach(function(obj){
    if(obj.age > 65){
      output += obj.females;
    }
  });
  return output;
}
 result = femalesOver65(dataset);
 console.log("Number of females over the age of 65",result);

// Refactor those into one function

function genderPopOverAge(data,gender,minAge){
  var output = 0;
  data.forEach(function(obj){
    if(obj.age > minAge){
      output += obj[gender];
    }
  });
  return output;
}
selectedGender = 'females';
var minAge = 41;
result = genderPopOverAge(dataset,selectedGender,minAge);
console.log("Number of",selectedGender,"over",minAge,"is",result);
