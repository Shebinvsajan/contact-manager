import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allContacts: any, searchKey:string,proName:string): any[] {
    const result:any = []
    if(!allContacts || searchKey==' ' || proName==' '){
      console.log(allContacts);
      
      return allContacts
    }
    allContacts.forEach((contact:any)=>{
if(contact[proName].trim().toLowerCase().includes(searchKey.toLocaleLowerCase()))
{
  result.push(contact)
}
  })
    return result;
  }

}
