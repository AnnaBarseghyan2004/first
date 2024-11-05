str = prompt()
let len = Math.floor(str.length)

if (str.startsWith("aaa") && str.length >= 15 ){
    str = str.slice(len / 2 - 5, len / 2 + 5)
 }

 str = str.replaceAll(" ", "").replaceAll(/[0-9]/g,"*").toLowerCase()

 alert(str)
 
//  ete sksvum e aaa-ov ev erkar >= 15 apa arandznacnel 10 simvolic baghkacac entatogh aynpes, vor entatoghy lin i kentroni nk simetrik
//  probelnery jnjel tvery poxel *-ov dardznel poqratar ev tpel


