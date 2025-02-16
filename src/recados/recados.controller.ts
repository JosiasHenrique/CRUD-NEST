import { Controller, Get } from '@nestjs/common';

@Controller('recados')
export class RecadosController {

    @Get()
    findAll() {
        return "Essa rota retornara todos os recados";
    }

    @Get(':id')
    findOne() {
        return `Essa rota retorna um recado`;
    }
}
