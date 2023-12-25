export function toAlternatingCase(s: string): string {
    let alternating: string = '';
    for(let char of s){
      if(char.toUpperCase() === char){
        alternating += char.toLowerCase()
      }else{
        alternating += char.toUpperCase()
      }
    }
    return alternating;
  }