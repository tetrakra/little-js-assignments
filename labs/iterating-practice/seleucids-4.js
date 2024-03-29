
//Data taken from https://en.wikipedia.org/wiki/List_of_Seleucid_rulers

var dataset = {
  rulers: [
    {
      name: 'Seleucus I Nicator',
      startReign: 305,
      endReign: 281,
      consort: ['Apama']
    },
    {
      name: 'Antiochus I Soter',
      startReign: 281,
      endReign: 261,
      consort: ['Stratonice of Syria']
    },
    {
      name: 'Antiochus II Theos',
      startReign: 261,
      endReign: 246,
      consort: ['Laodice I', 'Berenice']
    },
    {
      name: 'Seleucus II Callinicus',
      startReign: 246,
      endReign: 225,
      consort: ['Laodice II']
    },
    {
      name: 'Seleucus III Ceraunus',
      startReign: 225,
      endReign: 223,
      consort: []
    },
    {
      name: 'Antiochus III the Great',
      startReign: 223,
      endReign: 187,
      consort: ['Laodice III', 'Euboea of Chalcis']
    },
    {
      name: 'Seleucus IV Philopator',
      startReign: 187,
      endReign: 175,
      consort: ['Laodice IV']
    },
    {
      name: 'Antiochus IV Epiphanes',
      startReign: 175,
      endReign: 163,
      consort: ['Laodice IV']
    },
    {
      name: 'Antiochus V Eupator',
      startReign: 163,
      endReign: 161,
      consort: []
    },
    {
      name: 'Demetrius I Soter',
      startReign: 161,
      endReign: 150,
      consort: ['Apama', 'Laodice V']
    },
    {
      name: 'Alexander I Balas',
      startReign: 150,
      endReign: 145,
      consort: ['Cleopatra Thea']
    },
    {
      name: 'Demetrius II Nicator',
      startReign: 145,
      endReign: 138,
      consort: ['Cleopatra Thea']
    },
    {
      name: 'Antiochus VI Dionysus',
      startReign: 145,
      endReign: 140,
      consort: []
    },
    {
      name: 'Diodotus Tryphon',
      startReign: 140,
      endReign: 138,
      consort: []
    },
    {
      name: 'Antiochus VII Sidetes',
      startReign: 138,
      endReign: 129,
      consort: ['Cleopatra Thea']
    },
    {
      name: 'Demetrius II Nicator',
      startReign: 129,
      endReign: 126,
      consort: ['Cleopatra Thea']
    },
    {
      name: 'Alexander II Zabinas',
      startReign: 129,
      endReign: 123,
      consort: []
    },
    {
      name: 'Cleopatra Thea',
      startReign: 126,
      endReign: 121,
      consort: []
    },
    {
      name: 'Seleucus V Philometor',
      startReign: 126,
      endReign: 125,
      consort: []
    },
    {
      name: 'Antiochus VIII Grypus',
      startReign: 125,
      endReign: 96,
      consort: ['Tryphaena of Egypt', 'Cleopatra Selene I of Egypt']
    },
    {
      name: 'Antiochus IX Cyzicenus',
      startReign: 114,
      endReign: 96,
      consort: ['Cleopatra IV of Egypt', 'Cleopatra Selene I of Egypt']
    },
    {
      name: 'Seleucus VI Epiphanes Nicator',
      startReign: 96,
      endReign: 95,
      consort: []
    },
    {
      name: 'Antiochus X Eusebes Philopator',
      startReign: 95,
      endReign: 92,
      consort: []
    },
    {
      name: 'Demetrius III Eucaerus',
      startReign: 95,
      endReign: 87,
      consort: []
    },
    {
      name: 'Antiochus XI Epiphanes Philadelphus',
      startReign: 95,
      endReign: 92,
      consort: []
    },
    {
      name: 'Philip I Philadelphus',
      startReign: 95,
      endReign: 84,
      consort: []
    },
    {
      name: 'Antiochus XII Dionysus',
      startReign: 87,
      endReign: 84,
      consort: []
    },
    {
      name: 'Tigranes I of Armenia',
      startReign: 83,
      endReign: 69,
      consort: []
    },
    {
      name: 'Seleucus VII Kybiosaktes',
      startReign: 83,
      endReign: 69,
      consort: []
    },
    {
      name: 'Antiochus XIII Asiaticus',
      startReign: 69,
      endReign: 64,
      consort: []
    },
    {
      name: 'Philip II Philoromaeus',
      startReign: 65,
      endReign: 63,
      consort: []
    }
  ]
}

var stuff = [1,9,5,78];

var filtered = stuff.filter(function(obj){
  if (obj > 10){
    return true;
  }
  else{
    return false;
  }
});

console.log('filtered over 10', filtered);

var stuff2 = [{name:'Bob Smith', age: 76}, {name: 'Jane Austen', age:80}];

filtered = stuff2.filter(function(obj){
  if (obj.age < 80){
    return true;
  }
  else{
    return false;
  }
});

console.log('filtered stuff 2, age less than 80', filtered);


var result;
// Write a function that returns all kings named "Seleucus". Requirement: use filter.

function kingsNamedSeleucus(data){

  var output = [];

  output = data.rulers.filter(function(obj){
    if(obj.name.includes("Seleucus")){
      return true;
    }else{
      return false;
    }
    });
  return output;
}
result = kingsNamedSeleucus(dataset);
console.log("Kings named Seleucus\n", result);

// Write a function that returns the rulers who reigned more than five years. Requirement: use filter.

function rulersLongerThan5Years(data){
  var output = [];

  output = data.rulers.filter(function(obj){
    var reignLength = obj.startReign - obj.endReign;
    if (reignLength > 5){
      return true;
    }else{
      return false;
    }
  });
  return output;
}
result = rulersLongerThan5Years(dataset);
console.log("Rulers who reigned longer than 5 years:\n",result);

// Write a function that returns the rulers who reigned more than twenty years. Requirement: use filter.
function rulersLongerThan20Years(data){
  var output = [];

  output = data.rulers.filter(function(obj){
    var reignLength = obj.startReign - obj.endReign;
    if (reignLength > 20){
      return true;
    }else{
      return false;
    }
  });
  return output;
}
result = rulersLongerThan20Years(dataset);
console.log("Rulers who reigned longer than 20 years:\n",result);


// Write a function that returns rulers without consorts. Requirement: use filter.

function rulersSansConsorts(data){
  var output = [];

  output = data.rulers.filter(function(obj){
    if(obj.consort.length < 1){
      return true;
    }else{
      return false;
    }
  });
  return output;

}
result = rulersSansConsorts(dataset);
console.log("Rulers without consorts:\n",result);
// Write a function that returns the rulers who reigned more than five years. Then have it return a new array containing objects with all the same properties, including a new property called "lengthOfReign". Requirement: use filter for the first task and map for the second.

function remappedRulers(data){
  var output = [];
  var rulers = rulersLongerThan5Years(data);
  var output = rulers.map(function(ruler){
    obj = {
      name:ruler.name,
      startReign:ruler.startReign,
      endReign:ruler.endReign,
      consort:ruler.consort,
      lengthOfReign:(ruler.startReign-ruler.endReign)
    }
    return obj;
  });
  return output;
}

result = remappedRulers(dataset);
console.log("Rulers with length of reign: \n",result);
