import { ChangeEventHandler, MouseEventHandler, useEffect, useRef, useState } from "react";
import { streamFileToApi } from "../helpers";
import Button from "./common/Button";

export function UploadGarminData() {
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    hiddenFileInput.current?.click();
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = async (evt) => {
    if (evt.target.files) {
      const file = evt.target.files[0];
      if (file) {
        const res = await fetch("http://localhost:3000/api/upload", {
          method: "POST",
          headers: {
            "Content-Type": "application/gpx+xml",
          },
          body: file,
        });
        console.log(res);
      }
    }
  };

  return (
    <>
      <Button onClick={handleClick}>Upload Garmin Data</Button>
      <input className="hidden" ref={hiddenFileInput} type="file" onChange={handleChange} />
    </>
  );
}
