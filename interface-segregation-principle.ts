// ===== BAD =====
interface IBadSystemUser {
  login(token: string): boolean
  generateReports(): void
  generateCharges(): void
  sellProducts(): void
}
class BadManager implements IBadSystemUser {
  login(token: string): boolean {
    return true
  }
  generateReports(): void {
    // logic
  }
  generateCharges(): void {
    throw new Error('Method not implemented.')
  }
  sellProducts(): void {
    throw new Error('Method not implemented.')
  }
}
class BadFinancialAdministrator implements IBadSystemUser {
  login(token: string): boolean {
    return true
  }
  generateReports(): void {
    throw new Error('Method not implemented.')
  }
  generateCharges(): void {
    // logic
  }
  sellProducts(): void {
    throw new Error('Method not implemented.')
  }
}
class BadSalesman implements IBadSystemUser{
  login(token: string): boolean {
    return true
  }
  generateReports(): void {
    throw new Error('Method not implemented.')
  }
  generateCharges(): void {
    throw new Error('Method not implemented.')
  }
  sellProducts(): void {
    // logic
  }
}

// ===== GOOD =====
interface ISystemUser {
  login(token: string): boolean
}
interface IManager {
  generateReports(): void
}
interface IFinancialAdministrator {
  generateCharges(): void
}
interface ISalesman {
  sellProducts(): void
}
class Manager implements ISystemUser, IManager {
  login(token: string): boolean {
    return true
  }
  generateReports(): void {
    // logic
  }
}
class FinancialAdministrator implements ISystemUser, IFinancialAdministrator {
  login(token: string): boolean {
    return true
  }
  generateCharges(): void {
    // logic
  }
}
class Salesman implements ISystemUser, ISalesman {
  login(token: string): boolean {
    return true
  }
  sellProducts(): void {
    // logic
  }
}
