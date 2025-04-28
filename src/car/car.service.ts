import { HttpException, Injectable } from '@nestjs/common';
import { CARS } from './cars.mock';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ICar } from './interfaces/car.interface';
import { CarDto } from './car.dto';
@Injectable()
export class CarService {

    constructor(@InjectModel('car') private readonly carmodel: Model <ICar>){}

    public async getCars(): Promise<CarDto[]>{
        const cars = await this.carmodel.find().exec();
        if (!cars || !cars[0]){
            throw new HttpException('Not Found', 404);
        }
        return cars;
    }
    public async postCar(nawCar: CarDto) {
        const car = await new this.carmodel(nawCar);
        return car.save();
    }
    public async getCarById(id: number): Promise<CarDto>{
        const car = await this.carmodel.findOne({ id }).exec();
        if (!car){
            throw new HttpException('Not Found', 404);
        }
            return car;
    }
    public async deleteCarById(id: number): Promise<{ message: string }>{
        const result = await this.carmodel.deleteOne({ id }).exec();
        if (result.deletedCount === 0) {
            throw new HttpException('Not Found', 404);
        }
        return { message: 'Car successfully deleted' };
    }
    public async putCarById(id: number, propertyName: string, propertyValue: string): Promise<CarDto>{
        const car = await this.carmodel.findOneAndUpdate({ id } , { [propertyName]: propertyValue},).exec();
        if (!car){
            throw new HttpException('Not Found', 404);
        }
            return car;
    }
}