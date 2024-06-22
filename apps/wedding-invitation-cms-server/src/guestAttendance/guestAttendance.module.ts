import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GuestAttendanceModuleBase } from "./base/guestAttendance.module.base";
import { GuestAttendanceService } from "./guestAttendance.service";
import { GuestAttendanceController } from "./guestAttendance.controller";
import { GuestAttendanceResolver } from "./guestAttendance.resolver";

@Module({
  imports: [GuestAttendanceModuleBase, forwardRef(() => AuthModule)],
  controllers: [GuestAttendanceController],
  providers: [GuestAttendanceService, GuestAttendanceResolver],
  exports: [GuestAttendanceService],
})
export class GuestAttendanceModule {}
