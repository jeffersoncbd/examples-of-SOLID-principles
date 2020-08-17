// ===== BAD =====
class Register {
  registerAdministrator(administratorData: { name: string }) {
    // logic
  }

  registerUser(userData: { name: string }) {
    // logic
  }
}
const register = new Register()
register.registerAdministrator({ name: 'Administrator Name' })
register.registerUser({ name: 'User Name' })


// ===== GOOD =====
interface IRegister {
  register(data: { name: string}): void
}
class AdministratorRegister implements IRegister {
  register(data: { name: string}) {
    // logic
  }
}
class UserRegister implements IRegister {
  register(data: { name: string}) {
    // logic
  }
}
const administratorRegister = new AdministratorRegister()
const userRegister = new UserRegister()
administratorRegister.register({ name: 'Administrator'})
userRegister.register({ name: 'User'})
