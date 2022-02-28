import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class StringifierPipe implements PipeTransform {
  transform(skills, metadata: ArgumentMetadata): string {
    console.log(metadata);

    if (metadata.type === 'body') {
      console.log(skills);
      return skills.data.map((element) => element.toUpperCase()).join('-');
    } else {
      return 'An error occured with the skills you provided';
    }
  }
}
