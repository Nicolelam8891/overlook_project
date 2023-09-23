import { calculateBookingsSum } from "../src/calculations";
import { bookingsData, roomsData } from "./sample-data";
import { getAllCustomerBookings } from "../src/customer-bookings";
import { getCustomerRoomNumbers } from "../src/calculations";

import chai from "chai";
const expect = chai.expect;

describe("get customer room numbers", function () {
  it("should be a function", function () {
    expect(getCustomerRoomNumbers).to.be.a("function");
  });

  it("should get customer room numbers", function () {
    const allCustomerBookings = getAllCustomerBookings(20, bookingsData);
    const customerRoomNumbers = getCustomerRoomNumbers(allCustomerBookings);

    expect(customerRoomNumbers).to.deep.equal([7]);
  });
});

describe("calculate customer bookings", function () {
  it("should be a function", function () {
    expect(calculateBookingsSum).to.be.a("function");
  });

  it("should calculate the total spent on all bookings for the customer", function () {
    const allCustomerBookings = getAllCustomerBookings(20, bookingsData);
    const customerRoomNumbers = getCustomerRoomNumbers(allCustomerBookings);
    const sum = calculateBookingsSum(customerRoomNumbers, roomsData);
   
    expect(sum).to.equal(231.46);
  });
});

