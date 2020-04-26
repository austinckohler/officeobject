const theOffice = {
    jim: {
      lastName: 'halpert',
      spouse: 'pam',
      children: ['CeCe', 'Philip'],
      department: 'sales',
      funnyLevel: 90,
      interests: ['pranks', 'sports marketing']
    },
    pam: {
      lastName: 'halpert',
      spouse: 'jim', 
      children: ['cece', 'philip h.'],
      department: 'reception',
      funnyLevel: 40,
      interests: ['drawing', 'painting']
    },
    dwight: {
      lastName: 'schrute',
      spouse: 'angela',
      children: 'philip s.',
      department: 'sales',
      funnyLevel: 95,
      interests: ['bears', 'beets', 'battlestar galactica']
    },
    michael: {
      lastName: 'scott',
      spouse: 'holly',
      children: null,
      department: 'regional manager',
      funnyLevel: 10000,
      interests: ['jokes', 'scotts tots', 'occasionally hitting someone with his car', 'threat level midnight']
    },
    angela: {
      lastName: 'schrute',
      spouse: 'dwight',
      children: 'philip s.',
      department: 'accounting',
      funnyLevel: 2,
      interests: ['cats']
    },
    phyllis: {
      lastName: 'vance',
      spouse: 'bob vance, vance refrigeration',
      children: null,
      department: 'sales',
      funnyLevel: 2,
      interests: ['knitting', 'refrigerators']
    },
    oscar: {
      lastName: 'martinez',
      spouse: null,
      children: null,
      department: 'accounting',
      funnyLevel: 4,
      interests: ['math', 'finer things club']
    }, 
    kevin: {
      lastName: 'malone',
      spouse: null,
      children: null,
      department: 'accounting',
      funnyLevel: 70,
      interests: ['candy', 'cake']
    },
    stanley: {
      lastName: 'hudson',
      spouse: 'its complicated',
      children: 'sasha',
      department: 'sales',
      funnyLevel: 60,
      interests: ['florida', 'retirement']  
    },
    ryan: {
      lastName: 'howard',
      spouse: 'probably never getting married',
      children: 'he gave away baby drake',
      department: 'temp',
      funnyLevel: -5,
      interests: ['looking more cool than he really is', 'kelly--sometimes']
    },
    kelly: {
      lastName: 'kapoor',
      spouse: 'ravi--whom she left for ryan',
      children: null,
      department: 'customer service',
      funnyLevel: 5,
      interests: ['celebrities', 'gossip', 'drama', 'being cute', 'ryan']
    },
    andy: {
      lastName: 'bernard',
      spouse: null,
      children: null,
      department: 'sales',
      funnyLevel: 10,
      interests: ['boats', 'cornell', 'here comes treble', 'acting', 'singing acapella']
    },
    creed: {
      lastName: 'bratton',
      spouse: null,
      children: null,
      department: 'quality assurance',
      funnyLevel: 100,
      interests: ['being the office random guy']
    },
    toby: {
      lastName: 'flenderson',
      spouse: 'its complicated',
      children: 'melissa',
      department: 'human resources',
      funnyLevel: 0,
      interests: ['the scranton strangler', 'chad flenderman novel']
    },
    darryl: {
      lastName: 'philbin',
      spouse: null,
      children: 'jada',
      department: 'warehouse manager',
      funnyLevel: 100,
      interests: ['sports', 'music']
    },
    erin: {
      lastName: 'hannon',
      spouse: null,
      children: null,
      department: 'reception',
      funnyLevel: 15,
      interests: ['finding her biological parents']
    },
    meredith: {
      lastName: 'palmer',
      spouse: null,
      children: 'jake',
      department: 'supplier relations',
      funnyLevel: 10,
      interests: ['drinking', 'heavy metal', 'being inappropriate in the office']
    }
  }
  
  // #1 Return the total funnyLevel of all characters (10598)
  // we need to reduce to an array of funny levels
  
  // const funnyLevels = []
  // for (person in theOffice) {
  //   funnyLevels.push(theOffice[person]["funnyLevel"])
  // }
  // const totalFunnyLevel = funnyLevels.reduce(function (totalFunnyLevel, currentFunnylevel) {
  //   return totalFunnyLevel += currentFunnylevel
  // })
  // console.log(totalFunnyLevel)
    
  const totalFunnyLevel = Object
  .values(theOffice)
  .map(getFunnyLevel)
  .reduce(sum)
  
  console.log(totalFunnyLevel)
  
  function sum(total, number) {
     return total += number
   }
  
  function getFunnyLevel(person) {
    return person.funnyLevel
  }
  


  
  
  // #2 Return the total funnyLevel of all salesmen (257)
  
  
  // #3 Return an object with the department as a key and an array of the members of that department as the value 
    // {
    //   sales: [jim, stanley, phyllis, dwight], 
    //   accountants: [angela, oscar, kevin], 
    //   reception: [pam, erin], 
    //   regional manager: [michael]
    // }
  
  
  // #4 Return an object with the department as a key and an array of the interests of the members of that department as the value
  // {
  //   sales: [
  //     'florida', 
  //     'retirement', 
  //     'knitting', 
  //     'refrigerators', 
  //     'bears', 
  //     'beats', 
  //     'battlestar galactica'
  //   ]
  // }
  
  
  // #5 Return an array with the all of the kids of the Dunder Mifflin employees
  
  
  // #6 Return an array of all the employees first and last names