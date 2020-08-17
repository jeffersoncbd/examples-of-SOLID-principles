interface Employee {
  managersRoomAccess(): void
}

class Manager implements Employee {
  managersRoomAccess() {
    // logic
  }
}

class SubManager extends Manager {}

const user = new SubManager()
const result = user.managersRoomAccess()
