import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'algoNameFormatter'
})
export class AlgoNameFormatter implements PipeTransform {
    
    transform(value: String, ...args: any[]) {
        return value.replace('Sorter', '');
    }

}