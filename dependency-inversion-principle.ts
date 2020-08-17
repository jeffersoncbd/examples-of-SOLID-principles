interface UserEntity {
  name: string
  email: string
  password: string
}

interface UserRepository {
  save(user: UserEntity): void
}

interface SaveUser {
  save(data: UserEntity): void
}

class UserRepositoryImplementation implements UserRepository {
  save(data: UserEntity) {
    // logic
  } 
}

class SaveUserImplementation implements SaveUser {
  private userRepository: UserRepository

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  save(data: UserEntity) {
    const userData = data
    userData.name = data.name.toUpperCase()
    userData.email = data.email.toLowerCase()
    userData.password = data.password // this line "encrypt" password

    this.userRepository.save(userData)
  }
}

class UserRegister {
  private saveUser: SaveUser

  constructor(saveUser: SaveUser) {
    this.saveUser = saveUser
  }

  register(userData: UserEntity) {
    this.saveUser.save(userData)
  }
}

const userRepository = new UserRepositoryImplementation()
const saveUser = new SaveUserImplementation(userRepository)

const userRegister = new UserRegister(saveUser)
userRegister.register({
  name: 'John',
  email: 'john@example.com',
  password: 'password'
})
