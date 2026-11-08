//* Literal Type Union
// type Status = "pending"

// const status : Status = "pending"


//* Basic union
type Identity = string | number

const id : Identity = 12 
const id2 : Identity = "12"

// * Literal union
type Role = 'user' | 'admin' | 'manager'

const userRole: Role = 'user'
const adminRole: Role = 'admin'
const managerRole: Role = 'manager'


// * object union

type Admin = {
    id: number,
    role: 'admin',
    privileges: string[]
}

type Member = {
    id: number,
    role: 'user',
    email: string
}

type User = Admin | Member

const user1: User = {
    id: 1,
    role: 'admin',
    privileges: ['create', 'delete']
}

const user2: User = {
    id: 2,
    role: 'user',
    email: 'john@example.com'
}
