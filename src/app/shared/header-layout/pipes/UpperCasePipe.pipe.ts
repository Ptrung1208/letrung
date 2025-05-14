import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
    name: 'uppercasePipe',
    standalone: true,
})
export class UpperCasePipe implements PipeTransform{
    transform(value: string) {
     return value.toUpperCase();
    }
};