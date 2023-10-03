import { ChangeEventHandler, MouseEventHandler, useRef } from "react";
import { streamFileToApi } from "../helpers";

export function UploadGarminData() {
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    hiddenFileInput.current?.click();
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    if (evt.target.files) {
      const file = evt?.target.files[0];
      // todo: validation?
      streamFileToApi(file, "/");
    }
  };

  return (
    <>
      <button onClick={handleClick}>Upload Garmin Data</button>
      <input className="hidden" ref={hiddenFileInput} type="file" onChange={handleChange} />
    </>
  );
}
