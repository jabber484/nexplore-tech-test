import dotenv from "dotenv";
import { createDuty, deleteDutyById, getDutyById, updateDuty } from './duty.service';
import { init, close } from '../infras/database';
import { Duty } from "./duty.entity";
import { EntityNotFoundError } from "../error/error";

let sampleDuty: Duty | undefined;

describe("Test for resources - Duty", () => {
  beforeAll(async () => {
    dotenv.config();
    await init()
    sampleDuty = undefined
  });

  test("CREATE", async () => {
    sampleDuty = await createDuty({ name: "testing duty" });
    expect(sampleDuty.name).toBe("testing duty")
  });

  test("READ", async () => {
    if (sampleDuty) {
      const data = await getDutyById(sampleDuty.id);
      expect(JSON.stringify(data)).toStrictEqual(JSON.stringify(sampleDuty))
    } else {
      throw new Error("Missing sample from previous stage")
    }
  });

  test("UPDATE", async () => {
    if (sampleDuty) {
      const updatedDuty = { ...sampleDuty, name: "updated sample" }
      await updateDuty(updatedDuty);

      const data = await getDutyById(sampleDuty.id);
      expect(JSON.stringify(data)).toStrictEqual(JSON.stringify(updatedDuty))
    } else {
      throw new Error("Missing sample from previous stage")
    }
  });

  test("DELETE", async () => {
    if (sampleDuty) {
      await deleteDutyById(sampleDuty.id);

      await expect(async () => sampleDuty && await getDutyById(sampleDuty.id))
        .rejects.toThrow(EntityNotFoundError);
    } else {
      throw new Error("Missing sample from previous stage")
    }
  });

  afterAll((done) => {
    close().finally(done)
  });
});
