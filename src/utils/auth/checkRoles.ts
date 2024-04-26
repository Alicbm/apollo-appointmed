import boom from '@hapi/boom'
import { UserEntity } from "../../entities/User.entity"

export function checkRolesGql(user: UserEntity, ...roles: string[]) {
  if (!roles.includes(user.role)) {
    throw boom.unauthorized('your role is not allow')
  }
}
