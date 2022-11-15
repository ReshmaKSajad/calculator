var courses=[
    {cname:"django",fee:35000,durasion:5,teqs:[
        "python","javascript",,"html","css","bootstrap","django","angular"
    ]},
    {cname:"MEARN",fee:55000,durasion:6,teqs:[
    "javascript","html","css","bootstrap","node","express","angular","react"
    ]},
    {cname:"bigdata",fee:75000,durasion:7,teqs:[
        "python","pig","hive","sqoop","pyspark","ml"
    ]},
    {cname:"ASP.net",fee:35000,durasion:5,teqs:[
        "c#","javascript",,"html","css","bootstrap"
    ]},

]

//print all course names?
courses.map(c=>c.cname).forEach(na=>console.log(na))

//course fee above 40000
courses.filter(c=>c.fee>40000).forEach(c=>console.log(c.cname))

//costly course
var max = courses.reduce((c1,c2)=>c1.fee>c2.fee?c1:c2)
console.log(max.cname);

//sort based on durasion
courses.sort((c1,c2)=>c2.durasion-c1.durasion).forEach(c=>console.log(c.cname))

//print bigdata fees
//find is used to get the details of a particular object

var bdata= courses.find(c=>c.cname=="bigdata")
console.log(bdata.fee);


