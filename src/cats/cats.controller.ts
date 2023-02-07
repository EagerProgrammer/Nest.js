import { Body, Controller, Get, Header, Param, Post, Req } from "@nestjs/common";
import { identity } from "rxjs";
import { CatsService } from "./cats.service";
import { CreateCatDTO } from "./create-cat.dto";
import { Cat } from "./interface/cat.interface";

@Controller('cats')
export class CatsController{
    constructor(private catsService: CatsService){
    }
    @Post()
    async create1(@Body() createCatDto : CreateCatDTO){
        this.catsService.create(createCatDto)
    }
    @Get()
    async finaAll2(): Promise<Cat[]>{
        return this.catsService.findAll();
    }
    @Get('all')
    findall(): string {
        return 'This action returns all cats'
    }
    @Get(':id')
    findOne(@Param('id') id:number):string{
        return 'This action returns one cats'
    }
    @Get('musical')
    findMusical():string{
        return 'This action returns musical CATs'
    }
    @Post('register')
    register(@Body() body: any):string{
        return 'This User information'
    }
    @Post()
    @Header('Cache','none')
    Noheader(): string{
        return 'Let start'
    }
    @Post()
    async create(@Body() createCatDTO: CreateCatDTO){
        return 'this action adds new cat'
    }

}