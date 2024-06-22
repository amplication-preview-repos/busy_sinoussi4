import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GuestAttendanceServiceBase } from "./base/guestAttendance.service.base";

@Injectable()
export class GuestAttendanceService extends GuestAttendanceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
