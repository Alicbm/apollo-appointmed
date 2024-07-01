export type CreateRequest = {
  dto: CreateBaseDto
}

export type UpdateRequest = {
  id: string,
  dto: UpdateBaseDto
}

export type CreateUserRequest = {
  dto: CreateUserDto
}

export type UpdateUserRequest = {
  id: string
  dto: UpdateUserDto
}

export type findOne = {
  id?: string
  email?: string
}

type CreateBaseDto = {
  typeService: string,
  registryNumber: number,
  firstName: string,
  lastName: string,
  email: string,
  eps: string,
  department: string,
  city: string,
  medicalCenter: string,
  date: string,
  hour: string,
  doctor: string,
  patientStatus: string,
  status?: string,
}

type UpdateBaseDto = {
  typeService?: string,
  registryNumber?: number,
  firstName?: string,
  lastName?: string,
  email?: string,
  eps?: string,
  department?: string,
  city?: string,
  medicalCenter?: string,
  date?: string,
  hour?: string,
  doctor?: string,
  patientStatus?: string,
}

type CreateUserDto = {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  createdAt: string,
  role: string,
  eps: string,
}

type UpdateUserDto = {
  firstName?: string,
  lastName?: string,
  email?: string,
  password?: string,
  createdAt?: string,
  role?: string,
  eps?: string,
}