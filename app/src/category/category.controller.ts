import { Controller, Get, Post, Body, Inject, Param } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Category } from 'src/models/category.model';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('categories')
export class CategoryController {

    constructor(
        @InjectRepository(Category)
        private categoryRepo: Repository<Category>
        ) {}

    @Get()
    async index(): Promise<Category[]> {
        return this.categoryRepo.find();
    }

    @Get(':id')
    async show(@Param('id') id: string): Promise<Category> {
        return this.categoryRepo.findOneOrFail(id);
    }
        
    @Post()
    async store(@Body() body: Category): Promise<Category> {
        const category = this.categoryRepo.create(body);
        return this.categoryRepo.save(category);
    }
}
