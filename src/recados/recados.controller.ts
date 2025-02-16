import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('recados')
export class RecadosController {

    @Get()
    findAll() {
        return "Essa rota retornara todos os recados";
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        console.log(id);
        return `Essa rota retorna um recado`;
    }

    @Post()
    create(@Body() body: any) {
        return body;
    }
}
