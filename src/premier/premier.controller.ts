import { Body, Controller, Delete, Get, Patch, Post, Put } from "@nestjs/common";

@Controller('premier')
export class PremierController {
  @Get()
  getPremier(): string {
    console.log('GET 🐢');
    return 'GET 🐢';
  }
  @Post()
  postPremier(@Body() data) {
    console.log('POST 🐇');
    return data;
  }
  @Delete()
  deletePremier() {
    console.log('Delete 🚚');
    return 'Delete 🚚';
  }
  @Put()
  putPremier() {
    console.log('PUT 🚚');
    return 'PUT 🚚';
  }
  @Patch()
  patchPremier() {
    console.log('Patch 🚚');
    return 'Patch 🚚';
  }
}
