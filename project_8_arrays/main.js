const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]
let manipulateGenes = [];
manipulateGenes.push(genes[0], genes[1], genes[4], genes[3], genes[2]);
manipulateGenes.push(genes[3], genes[3]);
manipulateGenes.splice(3, 1);
manipulateGenes.unshift("FXT");
console.log(manipulateGenes);

