import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GuestAttendanceService } from "./guestAttendance.service";
import { GuestAttendanceControllerBase } from "./base/guestAttendance.controller.base";

@swagger.ApiTags("guestAttendances")
@common.Controller("guestAttendances")
export class GuestAttendanceController extends GuestAttendanceControllerBase {
  constructor(
    protected readonly service: GuestAttendanceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
