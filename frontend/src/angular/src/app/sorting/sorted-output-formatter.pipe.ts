import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: "sortedOutputFormatter"
})
export class SortedOutputFormatter implements PipeTransform {

    transform(value: any[], ...args: any[]) {
        if (!value) {
            return '';
        }
        return value.join('\n');
    }
    
}