import {
  bedClassCollection,
  bedCollection,
  bedResource,
  bedRoomCollection,
  bedStatusCollection,
  bedUnitCollection,
  roomWithBedCollection,
  roomWithBedResource,
} from "../resources/bed.resource.js";
import {
  getAllBedSchema,
  getAllBedStatusSchema,
  getAllClassSchema,
  getAllRoomSchema,
  getAllUnitSchema,
} from "../schemas/bed.schema.js";
import * as bedService from "../services/bed.service.js";
import apiSuccess from "../utils/apiSuccess.js";
import catchAsync from "../utils/catchAsync.js";

export const getAllBeds = catchAsync(async (req, res) => {
  const query = getAllBedSchema.parse(req.query);

  const beds = await bedService.getAllBeds(query);

  return apiSuccess(res, 200, "Beds retrieved successfully", {
    results: bedCollection(beds.results),
    pagination: beds.pagination,
  });
});

export const getBedById = catchAsync(async (req, res) => {
  const beds = await bedService.getBedById(req.params.id);

  return apiSuccess(res, 200, "Bed retrieved successfully", bedResource(beds));
});

export const getBedSummary = catchAsync(async (req, res) => {
  const query = getAllBedSchema.partial().parse(req.query);

  const summary = await bedService.getBedSummary(query);

  return apiSuccess(res, 200, "Bed summary retrieved successfully", summary);
});

export const getAllRoomWithBeds = catchAsync(async (req, res) => {
  const query = getAllBedSchema.parse(req.query);

  const rooms = await bedService.getAllRoomWithBeds(query);

  return apiSuccess(res, 200, "Room with beds retrieved successfully", {
    results: roomWithBedCollection(rooms.results),
    pagination: rooms.pagination,
  });
});

export const getRoomwithBedsById = catchAsync(async (req, res) => {
  const room = await bedService.getRoomWithBedsById(req.params.id);

  return apiSuccess(
    res,
    200,
    "Room with beds retrieved successfully",
    roomWithBedResource(room)
  );
});

export const getAllBedStatus = catchAsync(async (req, res) => {
  const query = getAllBedStatusSchema.parse(req.query);

  const bedStatus = await bedService.getAllBedStatus(query);

  return apiSuccess(res, 200, "Bed status retrieved successfully", {
    results: bedStatusCollection(bedStatus.results),
    pagination: bedStatus.pagination,
  });
});

export const getAllClass = catchAsync(async (req, res) => {
  const query = getAllClassSchema.parse(req.query);

  const classData = await bedService.getAllClass(query);

  return apiSuccess(res, 200, "Classes retrieved successfully", {
    results: bedClassCollection(classData.results),
    pagination: classData.pagination,
  });
});

export const getAllRoom = catchAsync(async (req, res) => {
  const query = getAllRoomSchema.parse(req.query);

  const room = await bedService.getAllRoom(query);

  return apiSuccess(res, 200, "Rooms retrieved successfully", {
    results: bedRoomCollection(room.results),
    pagination: room.pagination,
  });
});

export const getAllUnit = catchAsync(async (req, res) => {
  const query = getAllUnitSchema.parse(req.query);

  const units = await bedService.getAllUnit(query);

  return apiSuccess(res, 200, "Units retrieved successfully", {
    results: bedUnitCollection(units.results),
    pagination: units.pagination,
  });
});
