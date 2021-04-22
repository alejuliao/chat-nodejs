import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/User";
import { UsersRepository } from "../Repositories/UsersRepository"


class UsersService{
  private usersRepository: Repository<User>;
  
  constructor(){
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  async create(email:string){
    // const usersRepository = getCustomRepository(UsersRepository);
    //verificar se usuario existe
    const userExist = await this.usersRepository.findOne({
      email,
    });
    if(userExist){
      return userExist;
    }
    //se exister, retornar user
    const user = this.usersRepository.create({
      email,
    });
    
    await this.usersRepository.save(user);
    
    //se nao exister, salvar no DB
    return user
  }
}

export { UsersService }