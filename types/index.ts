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
  id: string
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
  name: string,
  email: string,
  password: string,
  createdAt: string,
  role: string,
}

type UpdateUserDto = {
  name?: string,
  email?: string,
  password?: string,
  createdAt?: string,
  role?: string,
}