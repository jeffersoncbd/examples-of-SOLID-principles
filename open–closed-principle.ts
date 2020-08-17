// ===== BAD =====
class Totals {
  getTotalSalesOfTeamA() {
    // administrator table logic
    return 30000
  }

  getTotalSalesOfTeamB() {
    // user table logic
    return 50000
  }
}
class GetTeamTotals {
  getTotalSalesOfTeam(letter: string) {
    const totals = new Totals()
    let total: number

    if (letter === 'A') {
      total = totals.getTotalSalesOfTeamA()
    }

    if (letter === 'B') {
      total = totals.getTotalSalesOfTeamB()
    }

    return total
  }
}
const getTeamTotals = new GetTeamTotals()
const totalA = getTeamTotals.getTotalSalesOfTeam('A')

// ===== GOOD =====
interface ITotals {
  getTotalSales(): number
}
class TotalSalesOfTeamA implements ITotals {
  getTotalSales() {
    // administrator table logic
    return 30000
  }
}
class TotalSalesOfTeamB implements ITotals {
  getTotalSales() {
    // administrator table logic
    return 50000
  }
}
class FinanceDepartment {
  payCommission(team: ITotals) {
    const total = team.getTotalSales()
    // logic
  }
}
const teamA = new TotalSalesOfTeamA()
const teamB = new TotalSalesOfTeamB()
const transaction = new FinanceDepartment()
transaction.payCommission(teamA)
transaction.payCommission(teamB)
