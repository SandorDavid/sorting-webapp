import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'format'
})
export class AlgoNameFormatter implements PipeTransform {
    
    transform(value: String, ...args: any[]) {
        return value.replace('Sorter', '');
    }

}