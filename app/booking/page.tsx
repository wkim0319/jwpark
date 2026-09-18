"use client";

import { useEffect } from "react";

const BOOKING_URL =
  "https://www.booking.com/gating/authkey?aid=1310257&key=tPPPEFyShi";

export default function BookingRedirect() {
  useEffect(() => {
    window.location.replace(BOOKING_URL);
  }, []);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-[#008080]">
      <p style={{ fontFamily: "Tahoma, Arial, sans-serif" }} className="text-white">
        Redirecting to Booking.com…{" "}
        <a href={BOOKING_URL} className="underline">
          Click here if nothing happens
        </a>
      </p>
    </div>
  );
}
