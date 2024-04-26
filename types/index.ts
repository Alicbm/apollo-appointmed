export type CreateRequest = {
  dto: CreateBaseDto
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

export type UpdateRequest = {
  id: string,
  dto: UpdateBaseDto
}

export type findOne = {
  id: string
}