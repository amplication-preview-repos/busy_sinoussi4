import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GuestAttendanceResolverBase } from "./base/guestAttendance.resolver.base";
import { GuestAttendance } from "./base/GuestAttendance";
import { GuestAttendanceService } from "./guestAttendance.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GuestAttendance)
export class GuestAttendanceResolver extends GuestAttendanceResolverBase {
  constructor(
    protected readonly service: GuestAttendanceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
